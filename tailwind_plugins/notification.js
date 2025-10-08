const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents, theme }) {
  addComponents({
    '.notifier-container': {
      '@apply w-[400px] max-w-[98%] z-[1027]': {}
    },
    '.notifier': {
      '@apply p-5 rounded border-secondary-500 bg-theme-cardbg dark:bg-themedark-cardbg': {},
      '.notifier-title': {
        '@apply font-semibold leading-none text-lg mb-0': {}
      },
      '.notifier-body': {
        '@apply text-base mb-0': {}
      },
      '.notifier-img img': {
        '@apply w-10 h-10': {}
      },
      '.notifier-close': {
        '@apply hover:text-danger-500 focus:text-danger-500 hover:bg-transparent focus:bg-transparent ltr:right-1 rtl:left-1 rtl:right-auto': {}
      },
      '&.info': {
        '@apply border-info-500': {}
      },
      '&.success': {
        '@apply border-success-500': {}
      },
      '&.danger': {
        '@apply border-danger-500': {}
      },
      '&.warning': {
        '@apply border-warning-500': {}
      }
    }
  });
});
