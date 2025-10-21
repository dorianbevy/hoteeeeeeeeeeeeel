# Hotel Employee Dashboard - Solin

A modern hotel employee dashboard built with Next.js, Tailwind CSS, and shadcn/ui components.

## Features

- 📊 Real-time KPIs and metrics
- 📅 Reservation management
- 👥 Employee scheduling
- 💬 Message and task management
- 🎨 Beautiful Solin-inspired design

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

- **Next.js 14** - React framework
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Lucide React** - Icons
- **Radix UI** - Accessible primitives

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.jsx
│   └── page.jsx
├── components/
│   ├── EmployeeDashboard.jsx
│   └── ui/
│       ├── avatar.jsx
│       ├── badge.jsx
│       ├── button.jsx
│       ├── card.jsx
│       ├── input.jsx
│       ├── scroll-area.jsx
│       ├── separator.jsx
│       ├── table.jsx
│       └── tabs.jsx
└── lib/
    └── utils.js
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint