import type { Connect } from 'vite';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

function siteMiddleware(): Connect.NextHandleFunction {
  return (req, res, next) => {
    const path = req.url?.split('?')[0] ?? '';

    if (path === '/api/metrics') {
      setTimeout(() => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ activeUsers: 12840, eventsToday: 942000 }));
      }, 2800);
      return;
    }

    if (path === '/checkout') {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Not Found');
      return;
    }

    next();
  };
}

function nexusflowDevPlugin(): Plugin {
  return {
    name: 'nexusflow-dev-endpoints',
    configureServer(server) {
      server.middlewares.use(siteMiddleware());
    },
    configurePreviewServer(server) {
      server.middlewares.use(siteMiddleware());
    },
  };
}

export default defineConfig({
  plugins: [react(), nexusflowDevPlugin()],
});
