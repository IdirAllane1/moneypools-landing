# MoneyPools Landing Page

A modern, animated landing page for MoneyPools - a community raffle platform where every draw has a guaranteed winner.

## Features

- **3D Animated Hero** - Three.js floating gold coins with particle effects
- **Live Player Counter** - Real-time incrementing player count starting at 50,000
- **Countdown Timer** - HH:MM:SS format with pulsing animation
- **Custom SVG Illustrations** - Original artwork for How It Works section
- **Responsive Design** - Mobile-first, fully responsive layout
- **Sound Effects** - Subtle audio feedback with mute toggle
- **Smooth Animations** - Scroll-triggered animations using Framer Motion
- **Interactive Modals** - Sign Up and Login forms
- **Collectibles Showcase** - Display of unique avatar collectibles

## Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Three.js** - 3D graphics (via @react-three/fiber and @react-three/drei)
- **Styled Components** - CSS-in-JS styling
- **Framer Motion** - Animation library

## Color Palette

- **Cream:** `#FDF9EE` - Primary background
- **Red:** `#CB3332` - Primary accent, CTAs
- **Dark Brown:** `#150100` - Text, dark sections
- **Gold:** `#E6C956` - Premium highlights, coins, badges
- **Coral:** `#FF7B6C` - Secondary accent, hover states

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Navigate to the project folder:

```bash
cd moneypools-landing
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
moneypools-landing/
├── public/
│   └── images/          # Avatar and logo images
├── src/
│   ├── components/      # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── FloatingCoins.jsx
│   │   ├── HowItWorks.jsx    # With custom SVG illustrations
│   │   ├── Jackpot.jsx
│   │   ├── Collectibles.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Pricing.jsx
│   │   ├── FinalCTA.jsx
│   │   ├── Footer.jsx
│   │   ├── Modal.jsx
│   │   ├── SoundToggle.jsx
│   │   └── index.js
│   ├── context/
│   │   └── AppContext.jsx
│   ├── hooks/
│   │   └── useSound.js
│   ├── styles/
│   │   ├── theme.js
│   │   └── GlobalStyles.js
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## Sections

1. **Header** - Fixed navigation with smooth scroll, mobile hamburger menu
2. **Hero** - 3D coins, live counter, HH:MM:SS countdown, main CTA
3. **How It Works** - 3 steps with custom SVG illustrations
4. **Jackpot/Prizes** - Growing pool visualization, fair odds explanation
5. **Collectibles** - Avatar showcase with syndicate/gifting features
6. **Testimonials** - Winner stories grid
7. **Pricing** - Starter ($7/mo) and Pro ($14/mo) plans
8. **Final CTA** - Live player count, urgency-driven
9. **Footer** - Links, legal info, 18+ disclaimer

## Key Features

### Live Player Counter
Starts at 50,000 and increments by 1-5 players every 2-5 seconds.

### Countdown Timer
HH:MM:SS format with pulsing red glow animation, set to approximately 2 days from current time.

### Sound Effects
- Click sounds on buttons
- Tick sounds on countdown (every second)
- Counter increment sounds
- Success sounds on form submission

Use the sound toggle button in the bottom-right corner to mute/unmute.

### 3D Floating Coins
Gold coins (#E6C956) with Three.js featuring:
- Subtle rotation animation
- Floating movement
- Particle field background

### Custom SVG Illustrations
Original illustrations for each How It Works step using the color palette.

## License

This is a demo project for MoneyPools Ltd.

---

**Note:** This is a landing page prototype. The Sign Up and Login forms are non-functional demonstrations. No real user data is collected or stored.
