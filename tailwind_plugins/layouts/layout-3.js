const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents, theme }) {
  addComponents({
    '[data-pc-layout="layout-3"]': {
      '.pc-sidebar': {
        '.navbar-content:not([class*="bg-"])':{
          '@apply bg-theme-bg-1': {},
        },
        '.pc-navbar': {
          '.pc-caption': {
            '@apply hidden': {},
          },
          '.pc-link':{
            '@apply text-white': {},
          },
          '>.pc-item': {
            '>.pc-link':{
              '@apply p-[20px_15px]': {},
            },
            '&.active': {
              '>.pc-link': {
                // '@apply text-theme-lightsidebarcolor after:bg-dark-500': {}
              }
            },
            '&.pc-trigger, &.active': {
              '@apply bg-[rgba(0,0,0,0.04)]': {},
            },
          }
        }
      }
      // =============================================
      // .layout-3 {
      //   --pc-sidebar-color: rgba(255, 255, 255, 0.85);
      //   --pc-sidebar-active-background: rgba(0, 0, 0, 0.02);
      //   --pc-sidebar-active-color: #fff;
      //   --pc-sidebar-main-active-color: #fff;
      
      //   .pc-sidebar {
      
      //     .navbar-content {
      //       background: var(--pc-layout-3-sidebar-background);
      //     }
      
      //     .pc-navbar {
      //       > li {
      //         border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      
      //         > a {
      //           padding: 20px 15px;
      //         }
      //       }
      
      //       > .pc-item:not(.pc-caption) {
      //         &:hover,
      //         &.pc-trigger,
      //         &.active {
      //           > .pc-link:after {
      //             background: rgba(0, 0, 0, 0.3);
      //           }
      //         }
      //       }
      //     }
      //   }
      // }
      // =============================================
    }
  });
});
