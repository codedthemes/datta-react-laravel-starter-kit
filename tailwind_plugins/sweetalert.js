const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents, theme }) {
  addComponents({
    '.swal2-popup': {
      '@apply rounded-xl bg-theme-cardbg dark:bg-themedark-cardbg': {}
    },
    button: {
      '&.swal2-styled': {
        '@apply inline-block py-2 px-4 text-center border !rounded-[20px] !border-transparent bg-transparent !text-base font-medium transition-all duration-200 ease-in-out focus:!shadow-none':
          {}
      }
    },
    '.swal2-icon': {
      '&.swal2-error': {
        '@apply !border-danger-500/15 !text-danger-500': {},
        '[class^="swal2-x-mark-line"]': {
          '@apply !bg-danger-500': {}
        }
      },
      '&.swal2-warning': {
        '@apply !border-warning-500/15 !text-warning-500': {}
      },
      '&.swal2-info': {
        '@apply !border-info-500/15 !text-info-500': {}
      },
      '&.swal2-question': {
        '@apply !border-purple-500/15 !text-purple-500': {}
      },

      '&.swal2-success': {
        '@apply !border-success-500/15 !text-success-500': {},
        '.swal2-success-ring': {
          '@apply !border-success-500/30': {}
        },
        '[class^="swal2-success-line"]': {
          '@apply !bg-success-500': {}
        }
      }
    },
    '.swal2-actions': {
      '@apply gap-4': {}
    },
    '.swal2-styled': {
      '&.swal2-confirm': {
        '@apply bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 focus:bg-primary-600': {}
      },
      '&.swal2-deny': {
        '@apply bg-danger-500 text-white hover:bg-danger-600 active:bg-danger-700 focus:bg-danger-600': {}
      },
      '&.swal2-cancel': {
        '@apply bg-secondary-500 text-white hover:bg-secondary-600 active:bg-secondary-700 focus:bg-secondary-600': {}
      }
    }
  });
});
