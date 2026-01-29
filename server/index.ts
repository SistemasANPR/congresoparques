#!/usr/bin/env node

import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = Number(process.env.PORT) || 5000;

console.log('🚀 Starting production server...');
const staticPath = path.resolve(__dirname, '../dist/public');
console.log(`📁 Serving static files from: ${staticPath}`);

// Serve static files first
app.use(express.static(staticPath));

// Image proxy for congresoparques.com images
app.get('/api/image-proxy', async (req: Request, res: Response) => {
  const imageUrl = req.query.url as string;
  
  if (!imageUrl) {
    return res.status(400).send('URL parameter required');
  }

  try {
    const response = await fetch(imageUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'image/*',
      }
    });

    if (!response.ok) {
      return res.status(response.status).send('Image not found');
    }

    const contentType = response.headers.get('content-type') || 'image/jpeg';
    res.set('Content-Type', contentType);
    res.set('Cache-Control', 'public, max-age=86400');
    
    const buffer = await response.arrayBuffer();
    res.send(Buffer.from(buffer));
  } catch (error) {
    console.error('Image proxy error:', error);
    res.status(500).send('Error fetching image');
  }
});

// History API fallback middleware for SPA
const historyApiFallback = (req: Request, res: Response, next: NextFunction) => {
  // Skip API routes and requests with file extensions
  if (req.method !== 'GET' || req.path.includes('.') || req.path.startsWith('/api')) {
    return next();
  }
  
  // Serve index.html for SPA routes
  res.sendFile(path.resolve(staticPath, 'index.html'));
};

app.use(historyApiFallback);

app.listen(port, '0.0.0.0', () => {
  console.log(`✨ Production server running on port ${port}`);
  console.log(`🌐 Ready to serve the landing page`);
});