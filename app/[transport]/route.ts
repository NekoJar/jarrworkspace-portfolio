import { createMcpHandler } from "@vercel/mcp-adapter";
import z from "zod";

const handler = createMcpHandler(
  (server) => {
    server.tool(
      "courseRecommender",
      "Give a course recommendation based on experience level",
      {
        experienceLevel: z.enum(["beginner", "intermediate", "advanced"]),
      },
      ({ experienceLevel }) => ({
        content: [
          {
            type: "text",
            text: `I recommend you take the ${
              experienceLevel === "beginner"
                ? "Professional JavaScript"
                : experienceLevel === "intermediate"
                ? "Advanced JavaScript"
                : "JavaScript Mastery"
            } course.`,
          },
        ],
      })
    );
  },
  {
    capabilities: {
      tools: {
        courseRecommender: {
          description: "Get a list of course recommendations",
        },
      },
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
