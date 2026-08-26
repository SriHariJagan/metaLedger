/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0756F2',
          navy: '#0A2D73',
          bright: '#0C70F2',
          cyan: '#0BBFBF',
          teal: '#0BBF9E',
        },
        off: '#F8FAFC',
        lblue: '#EFF6FF',
        lcyan: '#ECFEFF',
        lteal: '#ECFDF5',
        dark: '#0F172A',
        muted: '#64748B',
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 8px 30px rgba(7, 86, 242, 0.08)',
        card: '0 1px 2px rgba(7, 86, 242, 0.04), 0 4px 16px rgba(7, 86, 242, 0.06)',
        glow: '0 0 40px rgba(7, 86, 242, 0.2)',
        'glow-lg': '0 0 60px rgba(7, 86, 242, 0.25)',
        'glow-cyan': '0 0 40px rgba(11, 191, 191, 0.2)',
        'glow-teal': '0 0 40px rgba(11, 191, 158, 0.2)',
        'card-hover': '0 20px 60px rgba(7, 86, 242, 0.12), 0 4px 20px rgba(7, 86, 242, 0.06)',
        'premium': '0 25px 80px rgba(10, 45, 115, 0.15), 0 8px 32px rgba(7, 86, 242, 0.08)',
        'inner-glow': 'inset 0 1px 0 rgba(255,255,255,0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-mesh': 'radial-gradient(at 40% 20%, hsla(218,85%,55%,0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,56%,0.1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(355,85%,52%,0.05) 0px, transparent 50%)',
        'grid-pattern': 'linear-gradient(rgba(7,86,242,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(7,86,242,0.03) 1px, transparent 1px)',
        'dot-pattern': 'radial-gradient(circle, rgba(7,86,242,0.08) 1px, transparent 1px)',
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'float-slow': 'float 11s ease-in-out infinite',
        'float-delayed': 'float 9s ease-in-out 2s infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-up-delayed': 'fadeUp 0.6s ease-out 0.2s forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'draw-line': 'drawLine 1.5s ease-out forwards',
        'count-up': 'countUp 1s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'gradient-shift': 'gradientShift 8s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
        'orbit': 'orbit 20s linear infinite',
        'morph': 'morph 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        drawLine: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(7,86,242,0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(7,86,242,0.4)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        morph: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
      },
      backgroundSize: {
        'grid': '40px 40px',
        'grid-sm': '20px 20px',
        'dot': '24px 24px',
      },
    },
  },
  plugins: [],
}
