// Comprehensive design tokens for consistent spacing, colors, typography, and layout

// ===== SPACING TOKENS =====
export const spacing = {
  // Base spacing units
  '0': '0',
  '1': '0.25rem',    // 4px
  '2': '0.5rem',     // 8px
  '3': '0.75rem',    // 12px
  '4': '1rem',       // 16px
  '5': '1.25rem',    // 20px
  '6': '1.5rem',     // 24px
  '7': '1.75rem',    // 28px
  '8': '2rem',       // 32px
  '9': '2.25rem',    // 36px
  '10': '2.5rem',    // 40px
  '12': '3rem',      // 48px
  '14': '3.5rem',    // 56px
  '16': '4rem',      // 64px
  '20': '5rem',      // 80px
  '24': '6rem',      // 96px
  '28': '7rem',      // 112px
  '32': '8rem',      // 128px
  '36': '9rem',      // 144px
  '40': '10rem',     // 160px
  '44': '11rem',     // 176px
  '48': '12rem',     // 192px
  '52': '13rem',     // 208px
  '56': '14rem',     // 224px
  '60': '15rem',     // 240px
  '64': '16rem',     // 256px
  '72': '18rem',     // 288px
  '80': '20rem',     // 320px
  '96': '24rem',     // 384px
} as const

// Semantic spacing aliases
export const spacingAliases = {
  xs: spacing['2'],      // 8px
  sm: spacing['4'],      // 16px
  md: spacing['6'],      // 24px
  lg: spacing['8'],      // 32px
  xl: spacing['12'],     // 48px
  '2xl': spacing['16'],  // 64px
  '3xl': spacing['24'],  // 96px
  '4xl': spacing['32'],  // 128px
} as const

// ===== COLOR TOKENS =====
export const colors = {
  // Brand colors
  primary: '#012E46',
  yellow: '#CC9B0A',
  blue: '#4885AA',
  
  // Semantic colors
  background: '#F5F8FA',
  foreground: '#0B0B0B',
  white: '#FFFFFF',
  gray: '#1A1A1A',
  
  // Extended color palette
  'primary-50': '#f0f4f7',
  'primary-100': '#d9e2ec',
  'primary-200': '#bcccdc',
  'primary-300': '#9fb3c8',
  'primary-400': '#829ab1',
  'primary-500': '#012E46',
  'primary-600': '#102a43',
  'primary-700': '#0d1b2a',
  'primary-800': '#0a1428',
  'primary-900': '#06101a',
  
  'yellow-50': '#fffbeb',
  'yellow-100': '#fef3c7',
  'yellow-200': '#fde68a',
  'yellow-300': '#fcd34d',
  'yellow-400': '#fbbf24',
  'yellow-500': '#CC9B0A',
  'yellow-600': '#d97706',
  'yellow-700': '#b45309',
  'yellow-800': '#92400e',
  'yellow-900': '#78350f',
  
  'blue-50': '#eff6ff',
  'blue-100': '#dbeafe',
  'blue-200': '#bfdbfe',
  'blue-300': '#93c5fd',
  'blue-400': '#60a5fa',
  'blue-500': '#4885AA',
  'blue-600': '#2563eb',
  'blue-700': '#1d4ed8',
  'blue-800': '#1e40af',
  'blue-900': '#1e3a8a',
  
  // Neutral grays
  'gray-50': '#f9fafb',
  'gray-100': '#f3f4f6',
  'gray-200': '#e5e7eb',
  'gray-300': '#d1d5db',
  'gray-400': '#9ca3af',
  'gray-500': '#6b7280',
  'gray-600': '#4b5563',
  'gray-700': '#374151',
  'gray-800': '#1f2937',
  'gray-900': '#111827',
} as const

// ===== TYPOGRAPHY TOKENS =====
export const typography = {
  fontFamily: {
    sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
    serif: ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
    mono: ['Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
  },
  fontSize: {
    'xs': '0.75rem',      // 12px
    'sm': '0.875rem',     // 14px
    'base': '1rem',       // 16px
    'lg': '1.125rem',     // 18px
    'xl': '1.25rem',      // 20px
    '2xl': '1.5rem',      // 24px
    '3xl': '1.875rem',    // 30px
    '4xl': '2.25rem',     // 36px
    '5xl': '3rem',        // 48px
    '6xl': '3.75rem',     // 60px
    '7xl': '4.5rem',      // 72px
    '8xl': '6rem',        // 96px
    '9xl': '8rem',        // 128px
  },
  fontWeight: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
} as const

// ===== BORDER RADIUS TOKENS =====
export const borderRadius = {
  none: '0',
  sm: '0.125rem',    // 2px
  md: '0.375rem',    // 6px
  lg: '0.5rem',      // 8px
  xl: '1rem',        // 16px
  '2xl': '1.5rem',   // 24px
  '3xl': '2rem',     // 32px
  full: '9999px',
} as const

// ===== Z-INDEX TOKENS =====
export const zIndex = {
  hide: '-1',
  auto: 'auto',
  base: '0',
  docked: '10',
  dropdown: '1000',
  sticky: '1020',
  banner: '1030',
  overlay: '1040',
  modal: '1050',
  popover: '1060',
  skipLink: '1070',
  toast: '1080',
  tooltip: '1090',
} as const

// ===== BREAKPOINT TOKENS =====
export const breakpoints = {
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const

// ===== SHADOW TOKENS =====
export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
  none: '0 0 #0000',
} as const

// ===== ANIMATION TOKENS =====
export const animations = {
  'fade-in': 'fadeIn 0.5s ease-in-out',
  'fade-out': 'fadeOut 0.5s ease-in-out',
  'slide-in': 'slideIn 0.3s ease-out',
  'slide-out': 'slideOut 0.3s ease-in',
  'scale-in': 'scaleIn 0.2s ease-out',
  'scale-out': 'scaleOut 0.2s ease-in',
} as const

// ===== TRANSITION TOKENS =====
export const transitions = {
  none: 'none',
  all: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
  colors: 'color 150ms cubic-bezier(0.4, 0, 0.2, 1), background-color 150ms cubic-bezier(0.4, 0, 0.2, 1), border-color 150ms cubic-bezier(0.4, 0, 0.2, 1), text-decoration-color 150ms cubic-bezier(0.4, 0, 0.2, 1), fill 150ms cubic-bezier(0.4, 0, 0.2, 1), stroke 150ms cubic-bezier(0.4, 0, 0.2, 1)',
  opacity: 'opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)',
  shadow: 'box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1)',
  transform: 'transform 150ms cubic-bezier(0.4, 0, 0.2, 1)',
} as const

// ===== TYPE EXPORTS =====
export type Spacing = keyof typeof spacing
export type SpacingAlias = keyof typeof spacingAliases
export type Color = keyof typeof colors
export type FontSize = keyof typeof typography.fontSize
export type FontWeight = keyof typeof typography.fontWeight
export type LineHeight = keyof typeof typography.lineHeight
export type LetterSpacing = keyof typeof typography.letterSpacing
export type BorderRadius = keyof typeof borderRadius
export type ZIndex = keyof typeof zIndex
export type Breakpoint = keyof typeof breakpoints
export type Shadow = keyof typeof shadows
export type Animation = keyof typeof animations
export type Transition = keyof typeof transitions
