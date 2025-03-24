const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents, theme }) {
  addComponents({
    '[data-pc-layout="horizontal"]': {
      '@media (min-width: 1025px)': {
        '.pc-header': {
          '@apply z-[1027] shadow-none bg-theme-headerbg dark:bg-themedark-headerbg backdrop-blur-[7px]': {},
          '.pc-h-item.pc-sidebar-collapse': {
            '@apply hidden': {}
          }
        },
        '.pc-sidebar': {
          '@apply w-full bg-theme-headerbg dark:bg-themedark-headerbg h-topbar-height overflow-visible': {},
          '.navbar-content,.m-header': {
            '@apply bg-theme-headerbg dark:bg-themedark-headerbg backdrop-blur-[7px]': {}
          },
          '.pc-badge,.pc-caption:not(:first-child):after': {
            '@apply hidden': {}
          },
          '.navbar-wrapper': {
            '@apply w-full': {}
          },
          '.navbar-content': {
            '@apply h-[57px] p-[6px_20px] bg-theme-sidebarbg dark:bg-themedark-sidebarbg': {},
            '.simplebar-mask, .simplebar-content-wrapper': {
              '@apply !overflow-visible': {}
            }
          },
          '.pc-link': {
            '@apply block items-center p-[10px_14px] text-theme-sidebarcolor dark:text-themedark-sidebarcolor text-base font-medium': {},
            '&:active,&:focus,&:hover': {
              '@apply no-underline text-primary-500': {}
            },
            '.pc-micon i': {
              '@apply align-middle': {}
            },
          },
          '.card': {
            '@apply hidden': {}
          },
          '.pc-navbar': {
            '@apply !inline-block': {},
            '.pc-link': {
              '@apply flex items-center': {}
            },
            '> .pc-item': {
              '@apply relative m-0': {},
              '&:hover:not(.active) > .pc-link': {
                '@apply text-primary-500 after:bg-primary-500': {}
              },
              '.pc-submenu': {
                '@apply absolute after:hidden': {}
              },
              '> .pc-submenu.edge': {
                '@apply left-auto right-0': {}
              },
              '> .pc-link ': {
                '@apply mx-0.5': {},
                '> .pc-arrow': {
                  '@apply rotate-90 ml-2.5': {}
                },
              },
              '.pc-submenu': {
                '.pc-link ': {
                  '@apply !p-[12px_30px]': {}
                },
                '.pc-submenu': {
                  '.pc-link ': {
                    '@apply !p-[12px_30px]': {}
                  },
                  '.pc-submenu': {
                    '.pc-link ': {
                      '@apply !p-[12px_30px]': {}
                    },
                  },
                },
              },
            },
            '.pc-item': {
              '@apply inline-block': {},
              '&.pc-caption': {
                 '@apply !p-0': {},
              }
            },
          },
          '.pc-arrow': {
            '@apply ltr:ml-auto rtl:mr-auto ltr:float-right rtl:float-left inline-block transition-all': {},
            '> svg': {
              '@apply w-[14px] h-[14px]': {},
            }
          },
          '.pc-submenu': {
            '@apply absolute min-w-[225px] rounded py-[15px] bg-theme-horizontalsubmenubg dark:bg-themedark-horizontalsubmenubg shadow-[0_4px_24px_0_rgba(62,57,107,0.18)] before:hidden': {},
            '.pc-item': {
              '@apply block relative': {},
              '.pc-submenu > .pc-item:before,&::before': {
                '@apply left-5': {},
              },
              '.pc-link': {
                '@apply relative text-theme-horizontalsubmenucolor dark:text-themedark-horizontalsubmenucolor p-[12px_15px_12px_20px] after:hidden': {},
                '.pc-icon': {
                  'svg, i': {
                    '@apply text-theme-sidebarcolor dark:text-themedark-sidebarcolor': {},                      
                  }
                }
              },
              '&:hover > .pc-link, & > .pc-link:hover': {
                '@apply text-primary-500': {},
              }
            },
            '.pc-submenu': {
              '@apply left-full top-[-15px] z-[1]': {},
              '&.edge': {
                '@apply left-auto right-full': {},
              },
              '&.edge-alt': {
                '@apply top-auto bottom-[-15px]': {},
                '&.edge-alt-full': {
                  '&::-webkit-scrollbar': {
                    '@apply w-1.5 opacity-0 hover:opacity-100': {},
                  },
                  '&::-webkit-scrollbar-track': {
                    '@apply bg-transparent': {},
                  },
                  '&::-webkit-scrollbar-thumb': {
                    '@apply bg-secondary-500/10 hover:bg-secondary-500/30': {},
                  },
                  '.pc-submenu': {
                    '@apply left-[200px]': {},
                    '&.edge': {
                      '@apply left-0': {},
                    }
                  }
                }
              }
            }
          },
          '.pc-item': {
            '.pc-submenu': {
              '@apply hidden': {}
            },
            '&:hover': {
              '>.pc-submenu': {
                '@apply !block': {}
              },
            }
          },
        },
        '.pc-container,.pc-footer': {
          '@apply ltr:ml-0 rtl:mr-0': {}
        },
        '.pc-container': {
          top : `calc(theme(spacing.header-height) + theme(spacing.topbar-height))`,
          minHeight: `calc(100vh - theme(spacing.header-height) - theme(spacing.topbar-height) * 2)`
        },
        '.pc-footer': {
          '@apply top-topbar-height': {}
        },
      }
    }
  });
});
