module.exports = {
  theme: {
    extend: {
      keyframes: {
        'draw-border': {
          '0%': { 'clip-path': 'inset(0 100% 0 0)' },       // hide right part
          '50%': { 'clip-path': 'inset(0 0 100% 0)' },       // hide bottom part
          '100%': { 'clip-path': 'inset(0 0 0 0)' },        // fully visible
        },
      },
      animation: {
        'draw-border': 'draw-border 2s forwards',
      },
    },
  },
}
