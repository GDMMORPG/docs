# Godot MMORPG Documentation

This repository contains comprehensive documentation for the Godot MMORPG Project, organized into four main sections:

- **Technical Documentation** - Technical specifications, architecture, code standards, and implementation details
- **Game Design Documentation** - Game mechanics, systems design, progression, and gameplay features  
- **Art Bible Documentation** - Visual style guide, asset specifications, and artistic direction
- **Audio Bible Documentation** - Sound design principles, music direction, and audio specifications

## Local Development

To run the documentation site locally:

```bash
# Install dependencies
bundle install

# Build the site
bundle exec jekyll build

# Serve locally with auto-reload
bundle exec jekyll serve
```

The site will be available at `http://localhost:4000`

## Deployment

The documentation is automatically deployed to GitHub Pages when changes are pushed to the `main` branch via GitHub Actions.

The deployment workflow:
1. Builds the Jekyll site
2. Deploys to GitHub Pages
3. Makes the documentation available at the configured GitHub Pages URL

## Adding Documentation

### Creating New Documentation Pages

1. Navigate to the appropriate collection directory:
   - `_technical/` for technical documentation
   - `_gamedesign/` for game design documentation
   - `_artbible/` for art bible documentation
   - `_audiobible/` for audio bible documentation

2. Create a new Markdown file with front matter:
```markdown
---
title: Your Page Title
description: Brief description of the page
---

# Your Content Here
```

3. The page will automatically appear in the respective documentation section

## Project Structure

```
.
├── _artbible/          # Art Bible documentation collection
├── _audiobible/        # Audio Bible documentation collection
├── _gamedesign/        # Game Design documentation collection
├── _technical/         # Technical documentation collection
├── _config.yml         # Jekyll configuration
├── artbible.md         # Art Bible section index
├── audiobible.md       # Audio Bible section index
├── gamedesign.md       # Game Design section index
├── technical.md        # Technical section index
├── index.md            # Site homepage
├── Gemfile             # Ruby dependencies
└── .github/
    └── workflows/
        └── jekyll.yml  # GitHub Pages deployment workflow
```
