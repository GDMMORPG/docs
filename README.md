# GDMMORPG Documentation

This repository contains comprehensive documentation for the Godot MMORPG Project, built with Next.js and deployed to GitHub Pages.

## Documentation Sections

- **Technical Design** - Technical specifications, architecture, and implementation details
- **Game Design** - Game mechanics, systems design, and gameplay features
- **Art Bible** - Visual style guide, asset specifications, and artistic direction
- **Audio Bible** - Sound design principles, music direction, and audio specifications

## Local Development

To run the documentation site locally:

```bash
# Navigate to the static-site-source directory
cd static-site-source

# Install dependencies
npm install

# Run development server
npm run dev
```

The site will be available at `http://localhost:3000`

## Building for Production

```bash
# Navigate to the static-site-source directory
cd static-site-source

# Build the site
npm run build

# The static files will be in the 'out' directory
```

## Deployment

### Production Deployment

The documentation is automatically deployed to GitHub Pages when changes are pushed to the `main` branch via GitHub Actions.

The deployment workflow:
1. Builds the Next.js static site
2. Exports to static HTML/CSS/JS
3. Deploys to GitHub Pages

### Branch Preview Builds

Branch previews are automatically built for pull requests and non-main branches. This allows you to test changes without affecting the main documentation site.

**How it works:**
- When you open a PR or push to a non-main branch, a preview build is automatically triggered
- The preview is built with a branch-specific base path (e.g., `/docs/preview/your-branch-name`)
- A comment is added to the PR with a link to download the preview artifact
- The preview artifact is retained for 7 days

**Testing a preview locally:**
1. Go to the Actions tab in GitHub
2. Find the "Preview Branch Deployment" workflow run for your branch
3. Download the preview artifact
4. Extract the files
5. Serve locally: `npx serve -s ./out`

**Note:** For live preview URLs, you can integrate with services like Netlify, Vercel, or Cloudflare Pages.

## Adding Documentation

### Creating New Documentation Pages

1. Navigate to the appropriate directory in `static-site-source/pages/`:
   - `Technical Design/` for technical documentation
   - `Game Design/` for game design documentation
   - `Art Bible/` for art bible documentation
   - `Audio Bible/` for audio bible documentation

2. Create a new Markdown file with front matter:

```markdown
---
title: Your Page Title
description: Brief description of the page
---

# Your Content Here

Write your documentation in Markdown format.
```

3. The page will automatically be rendered and added to the site

### Adding Blog Posts

1. Create a new Markdown file in `static-site-source/blog/`
2. Add front matter with title, description, date, and coverImage:

```markdown
---
title: Your Blog Post Title
description: Brief description of the post
date: 2025-10-30
coverImage: /images/blog/your-image.jpg
---

# Your blog post content here
```

3. The latest blog post will automatically appear on the home page

## Technology Stack

- **Next.js** - React framework with static site generation
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **next-mdx-remote** - MDX rendering for Markdown content
- **gray-matter** - Front matter parsing

## Project Structure

```
.
├── .github/
│   └── workflows/
│       └── nextjs.yml          # GitHub Pages deployment workflow
├── static-site-source/
│   ├── pages/
│   │   ├── Technical Design/   # Technical documentation
│   │   ├── Game Design/        # Game design documentation
│   │   ├── Art Bible/          # Art bible documentation
│   │   ├── Audio Bible/        # Audio bible documentation
│   │   ├── index.tsx           # Home page
│   │   ├── _app.tsx            # Custom App component
│   │   └── [...slug].tsx       # Dynamic route for markdown pages
│   ├── blog/                   # Blog posts
│   ├── components/             # React components
│   ├── lib/                    # Utility functions
│   ├── public/                 # Static assets
│   ├── app/
│   │   └── globals.css         # Global styles
│   ├── next.config.ts          # Next.js configuration
│   └── package.json            # Dependencies
├── .gitignore
└── README.md
```

## Contributing

We welcome contributions to improve and expand this documentation. Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is part of the GDMMORPG project.
