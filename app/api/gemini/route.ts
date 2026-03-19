import { GoogleGenerativeAIStream } from 'ai';
import { generateText } from '@google/generative-ai';

export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();
    
    const genAI = new generateText.GoogleGenerativeAI(
      process.env.GOOGLE_GENERATIVE_AI_API_KEY!
    );
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    
    const result = await model.generateContent(prompt);
    const text = await result.response.text();
    
    return Response.json({ response: text });
  } catch (error: any) {
    return Response.json(
      { error: 'Gemini API error', details: error.message },
      { status: 500 }
    );
  }
}
