# Norwood Atlas Website

A modern, fast, and SEO-friendly marketing website for Norwood Atlas - a software design, engineering, and marketing company.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Deployment:** Netlify
- **Forms:** Netlify Forms

## Features

- ✅ Fully responsive design (mobile-first)
- ✅ SEO-optimized with meta tags, sitemap, and robots.txt
- ✅ Structured data (Organization schema)
- ✅ Fast page loads with optimized assets
- ✅ Contact form with Netlify Forms integration
- ✅ Clean, maintainable code structure
- ✅ Accessible navigation with mobile menu
- ✅ Professional design with subtle animations

## Pages

- **Home (/)** - Hero, services overview, process, and CTAs
- **Services (/services)** - Detailed service descriptions
- **About (/about)** - Company values and approach
- **Contact (/contact)** - Contact form with Netlify Forms
- **Support (/support)** - Support options and FAQ
- **Privacy (/privacy)** - Privacy policy
- **Terms (/terms)** - Terms of service

## Local Development

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository (or you're already in it):
   ```bash
   cd "/Users/lennonbus/Documents/NorwoodAtlas/websites/Norwood atlas"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server (after build)
- `npm run lint` - Run ESLint

## Deployment to Netlify

### Option 1: Deploy via GitHub (Recommended)

This method enables automatic deployments when you push changes.

1. **Initialize Git repository** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Norwood Atlas website"
   ```

2. **Create GitHub repository**:
   - Go to [GitHub](https://github.com/new)
   - Create a new repository named `norwoodatlaswebsite`
   - Don't initialize with README, .gitignore, or license

3. **Connect local repo to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/norwoodatlaswebsite.git
   git branch -M main
   git push -u origin main
   ```

4. **Deploy on Netlify**:
   - Go to [Netlify](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub" and authorize Netlify
   - Select your repository
   - Netlify will auto-detect the build settings from `netlify.toml`:
     - Build command: `npm run build`
     - Publish directory: `out`
   - Click "Deploy site"

5. **Enable Netlify Forms**:
   - After deployment, go to Site settings → Forms
   - Forms should be automatically detected from the contact page
   - You'll receive email notifications for form submissions

### Option 2: Deploy via Drag-and-Drop

This method is quick but doesn't enable automatic deployments.

1. **Build the site**:
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**:
   - Go to [Netlify Drop](https://app.netlify.com/drop)
   - Drag and drop the `out` folder to the upload area
   - Your site will be deployed instantly

3. **Note**: Forms require the Git-based deployment method to work properly.

### Custom Domain Setup (Optional)

1. In Netlify dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Enter your domain (e.g., `norwoodatlas.com`)
4. Follow the instructions to update your DNS records:
   - For root domain: Add an A record or ALIAS record
   - For www subdomain: Add a CNAME record
5. Netlify will automatically provision an SSL certificate

## Project Structure

```
.
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── privacy/           # Privacy policy
│   ├── services/          # Services page
│   ├── support/           # Support page
│   ├── terms/             # Terms of service
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── robots.ts          # Robots.txt generation
│   └── sitemap.ts         # Sitemap generation
├── components/            # React components
│   ├── Footer.tsx         # Site footer
│   └── Navigation.tsx     # Site navigation
├── public/                # Static assets
│   └── contact-form.html  # Netlify Forms detection file
├── .gitignore            # Git ignore rules
├── netlify.toml          # Netlify configuration
├── next.config.js        # Next.js configuration
├── package.json          # Dependencies and scripts
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── README.md             # This file
```

## Customization

### Updating Content

All page content is in the `app/` directory. Edit the respective `.tsx` files to update text, links, or structure.

### Changing Colors

The primary color scheme is defined in `tailwind.config.ts`. To change the accent color:

1. Open `tailwind.config.ts`
2. Update the `primary` color values in the `theme.extend.colors` section
3. The site uses a blue accent by default - change to any color you prefer

### Adding Pages

1. Create a new folder in `app/` (e.g., `app/blog/`)
2. Add a `page.tsx` file in that folder
3. Export a default component with your content
4. Update navigation in `components/Navigation.tsx`
5. Add the page to `app/sitemap.ts`

### Updating SEO

- **Page titles and descriptions**: Edit `metadata` exports in each page file
- **Global metadata**: Edit `app/layout.tsx`
- **Structured data**: Edit the `organizationSchema` in `app/layout.tsx`
- **Sitemap**: Edit `app/sitemap.ts`

## Environment Variables

This site doesn't require environment variables by default. If you add features that need them (e.g., analytics):

1. Create a `.env.local` file (already in `.gitignore`)
2. Add your variables:
   ```
   NEXT_PUBLIC_ANALYTICS_ID=your-id-here
   ```
3. Access them in your code: `process.env.NEXT_PUBLIC_ANALYTICS_ID`

## Troubleshooting

### Build Fails

- Ensure Node.js version is 18.x or higher: `node -v`
- Clear cache and reinstall: `rm -rf node_modules .next && npm install`
- Check for TypeScript errors: `npm run lint`

### Forms Not Working

- Ensure you're using Git-based deployment (drag-and-drop doesn't support forms)
- Check that `public/contact-form.html` exists
- Verify form has `name="contact"` and `data-netlify="true"` attributes

### Styles Not Loading

- Ensure Tailwind classes are in the content paths defined in `tailwind.config.ts`
- Rebuild: `npm run build`

### Site Not Updating

- For Netlify: Push changes to GitHub to trigger automatic deployment
- Clear browser cache or use incognito mode
- Check Netlify deploy logs for errors

## Performance

This site is optimized for performance:

- Static HTML export for fastest possible loading
- Minimal JavaScript bundle
- Optimized images (when added)
- Tree-shaken Tailwind CSS
- SEO-friendly server-side rendering during build

## Support

For questions or issues:

- **Email:** support@norwoodatlas.com
- **GitHub Issues:** Create an issue in the repository

## License

Proprietary - © 2026 Norwood Atlas. All rights reserved.
