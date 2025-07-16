const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents, theme }) {
  addComponents({
    '[data-pc-layout="color-header"]': {
      'body': {
        '@apply relative': {},
        '&:not([class*="bg-"])': {
          '@apply bg-primary-500': {},
        },
      },
      '.pc-header': {
        '@apply absolute bg-transparent': {},
        '.pc-head-link': {
          '@apply text-white after:bg-[rgba(255,255,255,0.15)]': {},
          'svg, i': {
            '@apply text-white': {},
          }
        },
      },
      '.pc-sidebar': {
        '@apply absolute border-0 bg-transparent h-full shadow-none': {},
        '.navbar-wrapper': {
          '@apply h-full': {},
        },  
        '.navbar-content': {
          '@apply relative p-[18px_0_10px] ltr:rounded-[0_2px_0_0] rtl:rounded-[2px_0_0_0] shadow-none bg-theme-lightsidebarbg dark:bg-themedark-sidebarbg': {},
          minHeight: `calc(100% - theme(spacing.header-height))`
        },
        '.pc-navbar': {
          '.pc-caption': {
            '@apply text-theme-lightsidebarcaption dark:text-themedark-sidebarcaption': {},
          },
          '.pc-link':{
            '@apply text-theme-lightsidebarcolor dark:text-themedark-sidebarcolor': {},
          },
          '>.pc-item': {
            '&.active': {
              '>.pc-link': {
                '@apply text-theme-lightsidebarcolor dark:text-themedark-lightsidebarcolor after:bg-dark-500': {}
              }
            },
            '&.pc-trigger, &.active': {
              '@apply bg-[rgba(0,0,0,0.04)]': {},
            },
          }
        }
      },
      '.pc-footer': {
        '@apply bg-theme-bodybg dark:bg-themedark-bodybg': {},
      },
      '.pc-container': {
        '@apply pt-[140px]': {},
        '.pc-content': {
          '@apply bg-theme-bodybg dark:bg-themedark-bodybg min-h-[calc(100vh_-_273px)]': {},
        },
        '.page-header': {
          '@apply mt-[-140px] p-0': {},
          'h5': {
            '@apply text-white': {},
          },
          '.breadcrumb': {
            '@apply mb-[5px]': {},
            
            '.breadcrumb-item, a': {
              '@apply text-white': {}
            },
          },
        },
      },
    }
  });
});
