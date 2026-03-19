'use client';
import { useState } from 'react';

export default function Home() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    setMessages(prev => [...prev, { role: 'user', content: prompt }]);
    
    try {
      const res = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });
      
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Error: ' + error }]);
    }
    
    setPrompt('');
    setLoading(false);
  };

  return (
    <main style={{ padding: 20, maxWidth: 800, margin: 'auto' }}>
      <h1>Gemini Chat (✅ Vercel Hobby)</h1>
      <div style={{ height: 400, border: '1px solid #ccc', overflowY: 'scroll', padding: 10, margin: '20px 0' }}>
        {messages.map((m, i) => (
          <div key={i} style={{ marginBottom: 10 }}>
            <strong>{m.role.toUpperCase()}:</strong> {m.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask Gemini..."
          disabled={loading}
          style={{ flex: 1, padding: 12, borderRadius: 8, border: '1px solid #ddd' }}
        />
        <button 
          type="submit" 
          disabled={loading}
          style={{ padding: 12, marginLeft: 10, background: '#0070f3
