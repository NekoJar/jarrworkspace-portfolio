const fs = require("fs");
const zlib = require("zlib");
const path = require("path");

const inputs = [
  {
    src: path.resolve("public/Muhammad_Zharfan_Hakim_Resume_2026.pdf"),
    dest: "Muhammad_Zharfan_Hakim_Resume_2026.pdf",
  },
  {
    src: path.resolve("public/Muhammad_Zharfan_Hakim_職務経歴書.pdf"),
    dest: "Muhammad_Zharfan_Hakim_職務経歴書.pdf",
  },
  {
    src: path.resolve("public/v2_Muhammad_Zharfan_Hakim_履歴書.pdf"),
    dest: "v2_Muhammad_Zharfan_Hakim_履歴書.pdf",
  },
];

const missing = inputs.filter((i) => !fs.existsSync(i.src));
if (missing.length) {
  console.error(
    "missing resume inputs:",
    missing.map((i) => i.src).join(", "),
  );
  process.exit(2);
}

const outDir = path.resolve("public/resume");
const outFile = path.resolve(outDir, "Zharfan_Hakim_履歴書.zip");
fs.mkdirSync(outDir, { recursive: true });

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    c ^= buf[i];
    for (let j = 0; j < 8; j++) {
      c = c & 1 ? (c >>> 1) ^ 0xedb88320 : c >>> 1;
    }
  }
  return (c ^ 0xffffffff) >>> 0;
}

const localEntries = [];
const centralEntries = [];
let localOffset = 0;

for (const f of inputs) {
  const buf = fs.readFileSync(f.src);
  const name = Buffer.from(f.dest, "utf8");
  const deflated = zlib.deflateRawSync(buf, { level: 9 });
  const crc = crc32(buf);
  const compressedSize = deflated.length;
  const uncompressedSize = buf.length;

  const localHeader = Buffer.alloc(30 + name.length);
  localHeader.writeUint32LE(0x04034b50, 0);
  localHeader.writeUint16LE(20, 4);
  localHeader.writeUint16LE(0, 6);
  localHeader.writeUint16LE(8, 8);
  localHeader.writeUint16LE(0, 10);
  localHeader.writeUint16LE(0, 12);
  localHeader.writeUint32LE(crc, 14);
  localHeader.writeUint32LE(compressedSize, 18);
  localHeader.writeUint32LE(uncompressedSize, 22);
  localHeader.writeUint16LE(name.length, 26);
  localHeader.writeUint16LE(0, 28);
  name.copy(localHeader, 30);
  localEntries.push(Buffer.concat([localHeader, deflated]));

  const centralHeader = Buffer.alloc(46 + name.length);
  centralHeader.writeUint32LE(0x02014b50, 0);
  centralHeader.writeUint16LE(20, 4);
  centralHeader.writeUint16LE(20, 6);
  centralHeader.writeUint16LE(0, 8);
  centralHeader.writeUint16LE(8, 10);
  centralHeader.writeUint16LE(0, 12);
  centralHeader.writeUint16LE(0, 14);
  centralHeader.writeUint32LE(crc, 16);
  centralHeader.writeUint32LE(compressedSize, 20);
  centralHeader.writeUint32LE(uncompressedSize, 24);
  centralHeader.writeUint16LE(name.length, 28);
  centralHeader.writeUint16LE(0, 30);
  centralHeader.writeUint16LE(0, 32);
  centralHeader.writeUint16LE(0, 34);
  centralHeader.writeUint16LE(0, 36);
  centralHeader.writeUint32LE(0, 38);
  centralHeader.writeUint32LE(localOffset, 42);
  name.copy(centralHeader, 46);
  centralEntries.push(centralHeader);

  localOffset += localHeader.length + deflated.length;
}

const localHeaderSection = Buffer.concat(localEntries);
const centralDir = Buffer.concat(centralEntries);
const centralDirSize = centralDir.length;

const eocd = Buffer.alloc(22);
eocd.writeUint32LE(0x06054b50, 0);
eocd.writeUint16LE(0, 4);
eocd.writeUint16LE(0, 6);
eocd.writeUint16LE(centralEntries.length, 8);
eocd.writeUint16LE(centralEntries.length, 10);
eocd.writeUint32LE(centralDirSize, 12);
eocd.writeUint32LE(localHeaderSection.length, 16);
eocd.writeUint16LE(0, 20);

fs.writeFileSync(outFile, Buffer.concat([localHeaderSection, centralDir, eocd]));
console.log("wrote", outFile, fs.statSync(outFile).size, "bytes");
