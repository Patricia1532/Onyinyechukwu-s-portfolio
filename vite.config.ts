
import path from 'path';
import fs from 'fs';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        {
          name: 'video-uploader',
          configureServer(server) {
            server.middlewares.use('/api/upload-video', (req, res) => {
              if (req.method === 'POST') {
                const videosDir = path.resolve(__dirname, 'public/videos');
                if (!fs.existsSync(videosDir)) {
                  fs.mkdirSync(videosDir, { recursive: true });
                }
                const targetFile = path.join(videosDir, 'spotlyte-hero-demo.mp4');
                const fileStream = fs.createWriteStream(targetFile);
                req.pipe(fileStream);
                fileStream.on('finish', () => {
                  res.writeHead(200, { 'Content-Type': 'application/json' });
                  res.end(JSON.stringify({ success: true, path: '/videos/spotlyte-hero-demo.mp4' }));
                });
                fileStream.on('error', (err) => {
                  res.writeHead(500, { 'Content-Type': 'application/json' });
                  res.end(JSON.stringify({ error: err.message }));
                });
              } else {
                res.writeHead(405).end();
              }
            });
          }
        }
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
