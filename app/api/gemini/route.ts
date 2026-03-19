import { streamText } from 'ai';
import { google } from '@ai-sdk/google';

export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();
    
    const result = await streamText({
      model: google('gemini-1.5-flash'),
      messages,
    });
    
    return result.toDataStreamResponse();
  } catch (error) {
    return Response.json({ error: 'API error', details: error.message }, { status: 500 });
  }
}
