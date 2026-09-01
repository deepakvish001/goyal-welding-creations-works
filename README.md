# 🔥 Goyal Welding Creations & Works

<p align="center">
  <strong>A modern, responsive business website for welding, fabrication and custom metalwork services.</strong>
</p>

<p align="center">
  React • TypeScript • Vite • Tailwind CSS • shadcn/ui
</p>

---

## 📌 Overview

Goyal Welding Creations & Works presents welding and metal-fabrication services through a fast, mobile-friendly website. The application introduces the business, explains available services, highlights experience and provides clear contact paths for residential, commercial and industrial customers.

The repository is designed as a foundation for a complete digital enquiry and quotation platform.

## ✨ Current Features

- Responsive navigation and mobile layout
- Business introduction and hero section
- Welding and fabrication service catalogue
- Company information and experience statistics
- Contact section and enquiry calls to action
- Reusable React components
- Accessible shadcn/ui component foundation
- Tailwind-based responsive styling
- Vite production build

## 🧰 Technology Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Language | TypeScript |
| Build tool | Vite |
| Styling | Tailwind CSS |
| Components | shadcn/ui and Radix UI |
| Icons | Lucide React |
| Data fetching | TanStack Query |
| Forms | React Hook Form and Zod |
| Linting | ESLint |

## 🏗️ Application Structure

\`\`\`text
Browser
  │
  ▼
React application
  ├── Header and navigation
  ├── Hero and primary calls to action
  ├── Services catalogue
  ├── About and business statistics
  ├── Contact and enquiry section
  └── Footer
  │
  ▼
Future service layer
  ├── Enquiry and quotation API
  ├── Project gallery
  ├── Content administration
  └── Notifications and analytics
\`\`\`

## 📁 Project Structure

\`\`\`text
goyal-welding-creations-works/
├── public/                 # Public assets
├── src/
│   ├── assets/             # Brand and project images
│   ├── components/
│   │   ├── ui/             # Shared UI primitives
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   └── Stats.tsx
│   ├── hooks/              # Shared React hooks
│   ├── lib/                # Utilities
│   ├── pages/              # Route-level views
│   ├── App.tsx             # Application composition
│   └── main.tsx            # Browser entry point
├── package.json
├── tailwind.config.ts
└── vite.config.ts
\`\`\`

## 🚀 Complete Local Setup

### 1. Prerequisites

Install:

- Node.js 18 or newer
- npm 9 or newer
- Git

Verify your tools:

\`\`\`bash
node --version
npm --version
git --version
\`\`\`

### 2. Clone the repository

\`\`\`bash
git clone https://github.com/deepakvish001/goyal-welding-creations-works.git
cd goyal-welding-creations-works
\`\`\`

### 3. Install dependencies

\`\`\`bash
npm install
\`\`\`

For a clean, lockfile-reproducible installation:

\`\`\`bash
npm ci
\`\`\`

### 4. Configure environment variables

The current static website does not require runtime secrets. When backend services are introduced, create a local file:

\`\`\`bash
cp .env.example .env.local
\`\`\`

Only variables intended for the browser may use the \`VITE_\` prefix:

\`\`\`env
VITE_PUBLIC_SITE_URL=http://localhost:5173
VITE_CONTACT_API_URL=http://localhost:3000
\`\`\`

Never place private API keys, database passwords or service credentials in a \`VITE_\` variable.

### 5. Start development mode

\`\`\`bash
npm run dev
\`\`\`

Open the URL printed by Vite, normally [http://localhost:5173](http://localhost:5173).

## ✅ Available Commands

| Command | Purpose |
|---|---|
| \`npm run dev\` | Start the Vite development server |
| \`npm run build\` | Create an optimised production build |
| \`npm run build:dev\` | Create a development-mode build |
| \`npm run lint\` | Run ESLint checks |
| \`npm run preview\` | Preview the production build locally |

Before opening a pull request:

\`\`\`bash
npm run lint
npm run build
\`\`\`

## 🎨 Customising Business Content

Update the focused components in \`src/components/\`:

| Content | File |
|---|---|
| Primary heading and call to action | \`Hero.tsx\` |
| Welding and fabrication services | \`Services.tsx\` |
| Business story and capabilities | \`About.tsx\` |
| Experience and performance numbers | \`Stats.tsx\` |
| Phone, email, address and enquiry action | \`Contact.tsx\` |
| Navigation | \`Header.tsx\` |
| Footer links and legal text | \`Footer.tsx\` |

Keep contact information consistent across structured metadata, visible content and social profiles.

## 🖼️ Working with Images

- Store optimised static images under \`src/assets/\` or \`public/\`.
- Prefer modern WebP or AVIF formats when supported.
- Provide meaningful alternative text for informative images.
- Avoid embedding customer information in image filenames or metadata.
- Compress project photos before committing them.
- Define width and height to reduce layout shift.

## ♿ Accessibility Requirements

Every update should preserve:

- keyboard-accessible navigation and controls
- visible focus indicators
- descriptive headings and link text
- labels and error associations for forms
- sufficient colour contrast
- meaningful image alternative text
- reduced-motion preferences
- touch targets suitable for mobile visitors

## 🔐 Security and Privacy

When enquiry forms or analytics are added:

- validate all user input on the server
- rate-limit public submission endpoints
- protect against automated spam
- minimise personal-data collection
- avoid logging phone numbers, email addresses or message bodies
- publish a privacy notice before collecting customer data
- store secrets only in server-side configuration
- define retention and deletion rules for enquiries

## 🔎 Search Engine Optimisation

Production releases should include:

- a unique page title and meta description
- canonical URLs
- Open Graph and social-preview metadata
- a sitemap and robots policy
- LocalBusiness structured data
- descriptive service and location content
- optimised images and stable page performance
- consistent business name, address and phone information

## 🌍 Production Deployment

Create a production build:

\`\`\`bash
npm ci
npm run build
npm run preview
\`\`\`

Deploy the generated \`dist/\` directory to Vercel, Netlify, Cloudflare Pages or another static hosting provider.

Before publishing:

1. Run lint and build checks.
2. Test navigation and contact actions.
3. Verify mobile layouts.
4. Check production URLs and metadata.
5. Confirm asset loading and caching.
6. Run an accessibility and Lighthouse review.
7. Configure the custom domain and HTTPS.
8. Verify the deployed version from a clean browser session.

## 🧪 Testing Roadmap

Recommended coverage includes:

- component rendering and navigation
- form validation and submission states
- phone, email and map actions
- responsive layouts
- keyboard navigation
- accessible names and error messages
- enquiry API integration
- SEO metadata
- visual regression for major sections
- end-to-end customer enquiry flow

## 🧭 Product Roadmap

- Project portfolio and before/after gallery
- Structured service-detail pages
- Customer enquiry and quotation workflow
- File attachment support for drawings and reference images
- Administrator dashboard
- Testimonial and review management
- Service-area and location pages
- WhatsApp and telephone conversion tracking
- Appointment and site-visit requests
- Content management
- Analytics and conversion reporting
- Automated tests and CI deployment checks

## 🤝 Contributing

Keep each pull request focused on one independently reviewable change.

\`\`\`bash
git checkout main
git pull --ff-only
git checkout -b feat/short-change-name
npm install
npm run lint
npm run build
git add .
git commit -m "feat: describe the change"
git push -u origin feat/short-change-name
\`\`\`

Pull-request descriptions should explain:

- the customer or business problem
- the proposed behaviour
- responsive and accessibility impact
- privacy or security considerations
- verification performed
- screenshots for visible changes

## 📄 Licence

Add an explicit licence file before redistributing or using the repository outside its intended project context. Until then, normal copyright rules apply.

---

<p align="center">
  Built to help customers discover reliable welding and fabrication services with confidence.
</p>
