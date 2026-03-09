import { CrmApp } from './modules/CrmApp.js';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('crm');

  if (!root) {
    // Defensive check: keep behavior silent in production, helpful in dev
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.error('Root element #crm not found');
    }
    return;
  }

  const app = new CrmApp(root);
  app.init();
});

