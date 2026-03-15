export const handler = async (event) => {
  const fetch = require('node-fetch');
  
  try {
    if (event.httpMethod !== 'POST') {
      return { statusCode: 405, body: 'Only POST allowed' };
    }
    
    const { prompt } = JSON.parse(event.body);
    
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return { statusCode: 500, body: 'API key not set' };
    }
    
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { maxOutputTokens: 300 }
        })
      }
    );
    
    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response';
    
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    };
  } catch (error) {
    console.error(error);
    return { statusCode: 500, body: 'Error calling Gemini' };
  }
};
