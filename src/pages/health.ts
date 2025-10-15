import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async () => {
  // Basic health check - returns 200 if the app is running
  return new Response(
    JSON.stringify({ 
      status: 'ok',
      timestamp: new Date().toISOString(),
      service: 'portfolio-cristianqg'
    }),
    { 
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      }
    }
  );
};
