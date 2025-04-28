# XCTF Landing Page

A promotional landing page for XCTF.org - the world's first CVE target range practical certification platform.

## Features

- Dynamic particle background
- Interactive UI elements
- Responsive design
- Optimized for Cloudflare Pages deployment

## Getting Started

1. Clone this repository
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`
3. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions on deploying to Cloudflare Pages.

## Tech Stack

- Next.js
- React
- Tailwind CSS
- Framer Motion
- tsParticles
\`\`\`

Let's create a `.gitignore` file:

```gitignore file=".gitignore"
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
