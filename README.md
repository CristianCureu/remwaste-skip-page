# 🗑️ Skip Selection Page

An interactive, animated **skip hire selection interface** built with **React**, styled using **Tailwind CSS**, and enhanced with **Framer Motion** for smooth animations.

## ✨ Features

- **Animated Skip Cards** - Responsive cards with 3D-like image hover effects and smooth selection animations
- **Responsive UI** - Clean layout across all screen sizes
- **Animated Footer Panel** - Dynamic updates based on selection with smooth transitions
- **Mobile & Desktop Support** - Optimized for touch and mouse interactions

## 🧱 Tech Stack

| Tool              | Purpose                        |
| ----------------- | ------------------------------ |
| **React**         | UI and component logic         |
| **Tailwind CSS**  | Styling and responsive design  |
| **Framer Motion** | Animations and transitions     |
| **TypeScript**    | Type safety and prop contracts |

## 🚀 Usage

1. Install dependencies
   npm install # or yarn install

2. Required packages
   npm install framer-motion tailwindcss

3. Run the app
   npm run dev # or yarn dev

## 🧩 Component Highlights

### `Skip.tsx`

- Uses `motion.div` and `motion.img` for animations
- Handles both hover and click events
- Maintains persistent animation for selected card

### `Footer.tsx`

- Uses `AnimatePresence` for smooth transitions
- Responsive layout for actions and pricing
