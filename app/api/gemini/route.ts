import { streamText } from 'ai';
import { google } from '@ai-sdk/google';

export const runtime = 'edge';
export const preferredRegion = 'iad1';  // Optional: faster cold starts

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    const result = await streamText({
      model: google('gemini-1.5-flash-latest'),  // Use -latest suffix
      messages,
    });

    return result.toAIStreamResponse();
  } catch (error: any) {
    console.error('Gemini API error:', error);
    return Response.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
}
