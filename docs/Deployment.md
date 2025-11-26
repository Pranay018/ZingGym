# Deployment

## Netlify Deployment Steps

### Method 1: GitHub → Netlify
- Push project to GitHub.
- Netlify → Add New Site → Import from Git.
- Build command: npm run build
- Publish directory: dist

### Method 2: Manual Upload
- Run:
  npm install
  npm run build
- Upload dist folder to Netlify.

### Method 3: Netlify CLI
npm install -g netlify-cli
netlify login
npm run build
netlify deploy
