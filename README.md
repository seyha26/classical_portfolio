# 🏛️ Classical Digital Folio & Developer Portfolio

An elegant, timeless developer portfolio website designed with a **Classical & Architectural aesthetic** (Renaissance craftsmanship, Vitruvian architectural principles, antique gold accents, and serif typography), built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## 🏛️ The Classical Aesthetic

- **Architectural Dark Palette**: Deep obsidian (`#080a0f`), midnight slate marble (`#0f131a`), antique gold leaf accents (`#d4af37`), parchment text (`#f5efe6`), and muted sand (`#d8cebe`).
- **Typography & Proportions**:
  - Dignified Serif headings (`Cinzel`, `Playfair Display`, `Cormorant Garamond`, `Georgia`).
  - Roman numerals and classical section indexing:
    - **I. Prologue**: Developer narrative, Vitruvian triad (*Firmitas*, *Utilitas*, *Venustas*), and archival stats (`IV+`, `XXV+`, `99.9%`, `XV+`).
    - **II. Repertoire**: Categorized technical canon with mastery badges and classical tab navigation.
    - **III. Selected Works (Opera)**: Curated project folio with opus indexing (`OPUS I`, `OPUS II`, `OPUS III`), museum-style presentation plates, and direct exhibits/archives.
    - **IV. Chronology (Annals)**: Timeline of engineering praxis and academia with classical leaf node markers (`❖`).
    - **V. Epistle & Inquiries**: Classical correspondence desk with validated inputs, direct address plaque with 1-click copy, and "Transmit Epistle" action.
  - Classical architectural motifs: fine hairline double borders, corner flourishes (`⌜`, `⌝`, `✦`, `❖`), and gold gradient dividers.

---

## 📁 Project Structure

```text
Portfolio/
├── .env.example                     # Environment template for production email providers
├── .gitignore                       # Git ignore rules
├── next.config.mjs                  # Image remote patterns & Next.js config
├── package.json                     # Dependencies (Next 14, React 18, Lucide, Tailwind)
├── postcss.config.mjs               # PostCSS setup
├── tailwind.config.ts               # Custom antique gold palette, serif fonts & animations
├── tsconfig.json                    # TypeScript compiler options & '@/*' path alias
├── README.md                        # Documentation & setup guide
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts         # Contact form API endpoint with validation
│   │   ├── globals.css              # Classical borders, antique scrollbars, gold selection
│   │   ├── layout.tsx               # SEO Metadata, OpenGraph, Twitter tags & viewport
│   │   └── page.tsx                 # Semantic assembly of all classical sections
│   ├── components/
│   │   ├── Navbar.tsx               # Classical header with Roman monogram & drawer
│   │   ├── Hero.tsx                 # Classical headline, CTAs & Codex Digitalis plate
│   │   ├── About.tsx                # Prologue, Vitruvian Triad, and stone plaque metrics
│   │   ├── Skills.tsx               # Repertoire & disciplines with classical filtering
│   │   ├── Projects.tsx             # Curated Opera (Selected Works) with opus indexing
│   │   ├── Experience.tsx           # Annals & pedigree vertical timeline
│   │   ├── Contact.tsx              # Correspondence desk with form validation
│   │   └── Footer.tsx               # Colophon, ex-libris copyright & summit return
│   └── data/
│       └── portfolioData.ts         # Central single source of truth for content
```

---

## 🛠️ Quickstart

### 1. Requirements & Run

Requires **Node.js 18.17+ or 20+**:

```bash
# If using nvm
nvm use 20

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the classical folio.

### 2. Production Build

```bash
npm run build
npm run start
```

---

## 🎨 Personalization

To personalize the portfolio, edit [`src/data/portfolioData.ts`](./src/data/portfolioData.ts):

- **Personal Details**: Update `name`, `title`, `tagline`, `location`, `email`, and `bio`.
- **Selected Works**: Add or edit projects under `projects` (modify `opusNumber`, `title`, `description`, tags, and links).
- **Disciplines**: Modify skill categories under `skillCategories`.
- **Chronology**: Update entries under `timeline`.
- **Socials**: Replace placeholders with your own links.
