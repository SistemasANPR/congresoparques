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