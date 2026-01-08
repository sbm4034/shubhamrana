import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const API_KEY = Deno.env.get('VITE_CHATBOT_API_KEY');
    
    if (!API_KEY) {
      console.error('VITE_CHATBOT_API_KEY not configured');
      throw new Error('API key not configured');
    }

    const { messages, streaming = true } = await req.json();
    
    const isDev = Deno.env.get('ENVIRONMENT') === 'development';
    const baseUrl = isDev 
      ? 'https://sbm4034--llama-chat-bot-serve-dev.modal.run'
      : 'https://sbm4034--llama-chat-bot-serve.modal.run';
    
    const endpoint = streaming ? '/chat' : '/chat-simple';
    const modalUrl = `${baseUrl}${endpoint}`;

    console.log(`Proxying request to: ${modalUrl}`);

    const response = await fetch(modalUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': streaming ? 'text/event-stream' : 'application/json',
        'X-API-Key': API_KEY,
      },
      body: JSON.stringify({ messages }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Modal API error: ${response.status} - ${errorText}`);
      throw new Error(`Modal API error: ${response.status}`);
    }

    // For streaming, pass through the response
    if (streaming && response.body) {
      return new Response(response.body, {
        headers: {
          ...corsHeaders,
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache',
          'Connection': 'keep-alive',
        },
      });
    }

    // For non-streaming, return JSON
    const data = await response.json();
    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error: unknown) {
    console.error('Chatbot proxy error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Internal server error';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
