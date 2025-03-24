const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents, theme }) {
  addComponents({
    '.accordion': {
      '@apply overflow-hidden border border-theme-border dark:border-themedark-border': {},
      '&.accordion-flush': {
        '@apply border-0': {}
      },
      '.accordion-item + .accordion-item': {
        '@apply border-t border-theme-border dark:border-themedark-border': {}
      },
      '.accordion-header.card-header': {
        "@apply relative py-4 w-full text-start relative before:content-['\\ea5f'] before:font-['tabler-icons'] before:text-lg before:absolute ltr:before:right-[25px] ltr:pr-10 rtl:before:left-[25px] rtl:pl-10 before:transition-all before:duration-500 before:ease-[cubic-bezier(.47,1.64,.41,.8)]":
          {},
        '&.show': {
          '@apply text-primary-500 bg-primary-500/10 before:rotate-180': {}
        }
      }
    },
    '.show': {
      '&:not([data-pc-toggle="collapse"])': {
        '@apply !block': {}
      }
    }
  });
});
