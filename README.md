# BetterPerformance

An international platform for sharing and downloading PC optimization tweaks.

## 🚀 Features

- Share and download PC optimization tweaks (.reg, .vbs, .ps1, etc.)
- User roles system (Free, Premium, Tweaker, Admin)
- Community-driven content moderation
- Real-time chat and support system
- Advanced tweak search and filtering
- Reputation system
- Dark/Light mode support

## 🛠 Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn/ui
- **Database:** Supabase
- **Authentication:** Supabase Auth
- **Payments:** Stripe
- **Deployment:** Vercel

## 🏗 Project Structure

```
app/
├── components/      # Reusable components
├── features/        # Feature-specific components and logic
├── lib/            # Library code, utilities
├── api/            # API routes
├── hooks/          # Custom hooks
├── types/          # TypeScript types
├── styles/         # Global styles
└── config/         # Configuration files
```

## 🚀 Getting Started

1. Clone the repository

```bash
git clone https://github.com/yourusername/betterperformance.git
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables

```bash
cp .env.example .env.local
```

4. Start the development server

```bash
npm run dev
```

## 🌳 Branch Structure

- `main` - Production branch
- `develop` - Development branch
- `feature/*` - Feature branches
- `bugfix/*` - Bug fix branches
- `release/*` - Release branches

## 📝 Development Guidelines

1. Create a new branch from `develop` for each feature/fix
2. Follow conventional commits
3. Create PR to `develop` branch
4. Ensure all tests pass
5. Get code review approval

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details
