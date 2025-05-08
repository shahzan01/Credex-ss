import { Groq } from "groq-sdk";
import { NextRequest, NextResponse } from "next/server";
import { system_prompt } from "@/app/lib/chatPrompt";
const api_key = process.env.GROQ_API_KEY as string;
const groq = new Groq({ apiKey: api_key });

export async function POST(req: NextRequest) {
  const { message } = await req.json();
  console.log(message);

  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: system_prompt,
        },
        { role: "user", content: message },
      ],
      model: "llama-3.1-8b-instant",
      temperature: 1,
      max_completion_tokens: 1024,
      top_p: 1,
      stream: true,
      stop: null,
    });

    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of chatCompletion) {
            if (chunk.choices[0].delta.content) {
              controller.enqueue(chunk.choices[0].delta.content);
            }
          }

          // Ensure "done" is sent at the end
          controller.enqueue("done");
          controller.close();
        } catch (error) {
          console.error("Error while streaming:", error);
          controller.enqueue("error"); // Optionally send an error message
          controller.close();
        }
      },
    });

    return new Response(stream);
  } catch (error) {
    console.error("Error generating chat completion:", error);
    return new NextResponse("Error generating chat completion", {
      status: 500,
    });
  }
}
