import express from 'express';
import type { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 5000;

async function main() {
  const app = express();
  const isDev = process.env.NODE_ENV === 'development';

  if (isDev) {
    const vite = await createViteServer({
      server: { 
        middlewareMode: true,
        hmr: {
          port: 24678
        }
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const staticPath = path.resolve(__dirname, '../dist/public');
    app.use(express.static(staticPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(staticPath, 'index.html'));
    });
  }

  const server = app.listen(PORT, '0.0.0.0');
  
  server.on('listening', () => {
    console.log(`Server listening on port ${PORT}`);
  });
  
  server.on('error', (err) => {
    console.error('Server error:', err);
    process.exit(1);
  });
  
  const keepAlive = setInterval(() => {}, 1 << 30);
  
  const cleanup = () => {
    clearInterval(keepAlive);
    server.close();
    process.exit(0);
  };
  
  process.on('SIGTERM', cleanup);
  process.on('SIGINT', cleanup);
}

main().catch(console.error);
