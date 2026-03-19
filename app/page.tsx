'use client';

import { useState } from 'react';

export default function Home() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    
    setLoading(true);
    const userMessage = { role: 'user' as const, content: prompt };
    setMessages(prev => [...prev, userMessage]);
    setPrompt('');

    try {
      const res = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userMessage.content }),
      });
      
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'assistant' as const, content: data.response }]);
    } catch (error: any) {
      setMessages(prev => [...prev, { 
        role: 'assistant' as const, 
        content: `Error: ${error.message}` 
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ padding: 20, maxWidth: 800, margin: 'auto' }}>
      <h1>Gemini Chat (✅ Vercel Hobby)</h1>
      <div style={{ 
        height: 400, 
        border: '1px solid #ccc', 
        overflowY: 'scroll', 
        padding: 10, 
        margin: '20px 0',
        background: '#f9f9f9'
      }}>
        {messages.length === 0 ? (
          <p style={{ color: '#666', textAlign: 'center', paddingTop: 100 }}>
            Ask Gemini anything...
          </p>
        ) : (
          messages.map((m, i) => (
            <div key={i} style={{ marginBottom: 15 }}>
              <strong style={{ color: m.role === 'user' ? '#0070f3' : '#10b981' }}>
                {m.role === 'user' ? 'You' : 'Gemini'}
              </strong>
              : <span>{m.content}</span>
            </div>
          ))
        )}
      </div>
      <form onSubmit={handleSubmit} style={{ display: 'flex' }}>
        <input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Type your message..."
          disabled={loading}
          style={{ 
            flex: 1, 
            padding: 12, 
            borderRadius: 8, 
            border: '1px solid #ddd',
            fontSize: 16
          }}
          maxLength={2000}
        />
        <button 
          type="submit" 
          disabled={loading || !prompt.trim()}
          style={{ 
            padding: '12px 24px', 
            marginLeft: 10, 
            background: loading ? '#ccc' : '#0070f3',
            color: 'white', 
            border: 'none', 
            borderRadius: 8,
            cursor: loading ? 'not-allowed' : 'pointer'
          }}
        >
          {loading ? '...' : 'Send'}
        </button>
      </form>
    </main>
  );
}
