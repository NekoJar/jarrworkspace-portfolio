import { createMcpHandler } from "@vercel/mcp-adapter";
import z from "zod";

const handler = createMcpHandler(
  (server) => {
    server.tool(
      "jarExpertise",
      "Give a list of expertise that jar's have",
      {
        expertiseCategory: z.enum(["programming", "design"]),
      },
      ({ expertiseCategory }) => ({
        content: [
          {
            type: "text",
            text: `Here are jar's expertise in ${
              expertiseCategory === "programming"
                ? "Next.js, React, Node.js"
                : "Figma, Photoshop, Illustrator"
            }`,
          },
        ],
      })
    );
  },
  {
    capabilities: {
      tools: { jarExpertise: { description: "Get a list of jar's expertise" } },
    },
  },
  {
    redisUrl: process.env.REDIS_URL,
    sseEndpoint: "/sse",
    streamableHttpEndpoint: "/mcp",
    verboseLogs: true,
    maxDuration: 60,
  }
);

export { handler as GET, handler as POST, handler as DELETE };
