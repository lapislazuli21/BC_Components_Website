/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                // Brand Colors
                primary: {
                    DEFAULT: '#A1398D',
                    50: '#F5E8F2',
                    100: '#EBD1E5',
                    200: '#D7A3CB',
                    300: '#C375B1',
                    400: '#B25A9F',
                    500: '#A1398D',
                    600: '#812E71',
                    700: '#612355',
                    800: '#411839',
                    900: '#210C1D',
                },
                secondary: {
                    DEFAULT: '#EC7357',
                    50: '#FDF0ED',
                    100: '#FBE1DB',
                    200: '#F7C3B7',
                    300: '#F3A593',
                    400: '#EF876F',
                    500: '#EC7357',
                    600: '#E64B2A',
                    700: '#BF3718',
                    800: '#8F2912',
                    900: '#5F1B0C',
                },
                // Anniversary Gold (temporary - December 2025)
                gold: {
                    DEFAULT: '#D4AF37',
                    50: '#FCF8E8',
                    100: '#F9F1D1',
                    200: '#F3E3A3',
                    300: '#EDD575',
                    400: '#E7C747',
                    500: '#D4AF37',
                    600: '#AA8C2C',
                    700: '#806921',
                    800: '#564616',
                    900: '#2B230B',
                },
                dark: '#1b1b1b',
                light: '#f5f5f5',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Outfit', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out forwards',
                'slide-up': 'slideUp 0.6s ease-out forwards',
                'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
                'slide-in-right': 'slideInRight 0.6s ease-out forwards',
                'scale-in': 'scaleIn 0.4s ease-out forwards',
                'spin-slow': 'spin 3s linear infinite',
                'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
                'float': 'float 3s ease-in-out infinite',
                'shimmer': 'shimmer 2s linear infinite',
                'count-up': 'countUp 2s ease-out forwards',
                'scroll': 'scroll 30s linear infinite',
                'sparkle': 'sparkle 1.5s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideInLeft: {
                    '0%': { opacity: '0', transform: 'translateX(-20px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                slideInRight: {
                    '0%': { opacity: '0', transform: 'translateX(20px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(0.95)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                pulseSoft: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.7' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
                scroll: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                sparkle: {
                    '0%, 100%': { opacity: '1', transform: 'scale(1)' },
                    '50%': { opacity: '0.5', transform: 'scale(1.2)' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'gradient-mesh': 'linear-gradient(135deg, var(--tw-gradient-stops))',
            },
            boxShadow: {
                'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
                'glass-lg': '0 24px 48px 0 rgba(31, 38, 135, 0.2)',
                'glow-primary': '0 0 20px rgba(161, 57, 141, 0.4)',
                'glow-secondary': '0 0 20px rgba(236, 115, 87, 0.4)',
                'glow-gold': '0 0 20px rgba(212, 175, 55, 0.4)',
            },
            backdropBlur: {
                'glass': '16px',
            },
        },
    },
    plugins: [],
};
