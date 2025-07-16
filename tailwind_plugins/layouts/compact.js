const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents, theme }) {
  addComponents({
    '[data-pc-layout="compact"]': {
      '.pc-sidebar': {
        '.pc-user-card': {
          '@apply hidden': {}
        },
        '.pc-micon': {
          '@apply h-[27px] w-[46px]': {},
          'svg': {
            '@apply h-[26px] w-[26px]': {}
          }
        },
        '.m-header': {
          '.logo.logo-sm': {
            '@apply w-[50px]': {}
          }
        },
        '.pc-navbar': {
          '> .pc-item': {
            '@apply static m-[2px_0px]': {},
            '&.pc-hasmenu': {
              '> .pc-submenu': {
                '@apply absolute ltr:left-[81px] rtl:right-[81px] top-[18px] h-screen min-w-[219px] bg-theme-sidebarbg dark:bg-themedark-sidebarbg': {}
              },
            },
            '> .pc-hasmenu': {
              '.pc-link': {
                '@apply p-[12px_30px_12px_45px] after:left-[30px]': {}
              },
            },
            '.pc-hasmenu': {
              '.pc-hasmenu': {
                '.pc-link': {
                  '@apply p-[12px_30px_12px_52px] after:left-[40px]': {}
                },
                '.pc-hasmenu': {
                  '.pc-link': {
                    '@apply p-[12px_30px_12px_70px] after:left-[52px]': {}
                  },
                }
              }
            },
            '> .pc-link': {
              '@apply p-[14px_17px] inline-block': {},
              '.pc-micon': {
                '@apply m-0': {},
                'i': {
                  '@apply text-[22px] align-middle': {},
                }
              }
            },
            '&.pc-trigger, &.active': {
              '@apply before:bg-transparent bg-transparent': {},
              '>.pc-link':{
                '@apply relative before:content-[""] before:absolute before:inset-y-0 before:bottom-0 ltr:before:left-0 rtl:before:right-0 before:w-[3px] before:bg-primary-500 bg-[rgba(0,0,0,0.1)]': {}
              }
            },
          }
        },
        '&:not(.pc-compact-submenu-active)': {
          '@apply w-sidebar-collapsed-width': {},
          '.m-header': {
            '@apply p-[16px_12px] w-sidebar-collapsed-width': {},
            '> a': {
              '@apply my-0 mx-auto': {},
            }, 
            '.logo': {
              '&.logo-lg': {
                '@apply hidden': {},
              },
              
              '&.logo-sm': {
                '@apply inline-block': {},
              }
            }  
          },
          '@media (min-width: 1025px)': {
            '~ .pc-footer,~ .pc-container': {
              '@apply ltr:ml-sidebar-collapsed-width rtl:mr-sidebar-collapsed-width': {},
            }
          },
          '@media (max-width: 1024.98px)': {
            '.m-header': {
              '@apply w-sidebar-collapsed-width': {},
              '.b-brand': {
                '@apply w-[50px] overflow-hidden my-0 mx-auto': {},
              },
            },
          }
        },
        '@media (max-width: 1024.98px)':{
          '&:not(.mob-sidebar-active)': {
            '@apply ltr:-left-sidebar-collapsed-active-width rtl:-right-sidebar-collapsed-active-width': {},
          },
        },
        '.navbar-content': {
          '@apply w-sidebar-collapsed-width': {},
          height: `calc(100vh - theme(spacing.header-height))`
        },
        '.pc-compact-submenu': {
          '@apply relative': {},
          '&::after': {
            '@apply content-[""] absolute left-0 top-0 h-[calc(100%_-_30px)] w-px bg-theme-border dark:bg-themedark-border': {},
          },
          '.pc-compact-title': {
            '@apply mb-[14px] p-[20px_18px] border-b border-b-theme-border dark:border-b-themedark-border': {},
            '.avtar i': {
              '@apply text-[18px]': {},
            },
            'h5': {
              '@apply font-semibold': {},
            },
          },
          '.pc-compact-list': {
            height: `calc(100vh - theme(spacing.header-height) - 80px)`,
            '.simplebar-content': {
              '> .pc-submenu': {
                '> .pc-item': {
                  '@apply before:left-[15px]': {},
                  '> .pc-link': {
                    '@apply p-[10px_16px]': {},
                  },
                  '> .pc-submenu': {
                    '> .pc-item': {
                      '@apply before:left-[30px]': {},
                      '> .pc-link': {
                        '@apply p-[10px_16px_10px_30px]': {},
                      },  
                      '> .pc-submenu': {
                        '> .pc-item': {
                          '@apply before:left-[45px]': {},
                          '> .pc-link': {
                            '@apply p-[10px_16px_10px_45px]': {},
                          },  
                        }
                      }
                    }
                  }
                },
              },
            },
          },
        },
        '&.pc-compact-submenu-active': {
          '@apply w-sidebar-collapsed-active-width': {},
          '.navbar-content': {
            '@apply w-sidebar-collapsed-active-width': {},
            '&::before': {
              '@apply absolute content-[""] top-0 ltr:left-[80px] rtl:right-[80px] w-px h-full bg-[rgba(255,255,255,0.2)]': {},
            },
          },
          '.navbar-wrapper': {
            '@apply !flex flex-wrap w-sidebar-collapsed-active-width': {},
            '.m-header': {
              '@apply w-full border-b border-b-[rgba(255,255,255,0.2)]': {},  
            },
            '.pc-compact-submenu': {
              '@apply flex-1': {},
              width: `calc(100% - theme(spacing.sidebar-collapsed-width))`,
              '.pc-compact-list .simplebar-content > .pc-submenu': {
                '@apply !block': {},
              },
            },
          },
          '@media (min-width: 1025px)': {
            '~ .pc-footer,~ .pc-container': {
              '@apply ltr:ml-sidebar-collapsed-active-width rtl:mr-sidebar-collapsed-active-width': {},
            },
          }
        },
        '&.pc-sidebar-hide': {
          '@apply w-0': {},
          '~ .pc-footer, ~ .pc-container ': {
            '@apply ltr:ml-0 rtl:mr-0': {},
          },
          '.pc-navbar': {
            '> .pc-item.pc-hasmenu.pc-trigger > > .pc-submenu': {
              '@apply !hidden': {},
            }
          }
        },
        '.pc-badge,.pc-caption,.pc-mtext,.pc-navbar > li > a > .pc-arrow': {
          '@apply hidden': {},
        }
      },
      '@media (min-width: 1025px)': {
        '.pc-header': {
          '@apply ltr:left-sidebar-collapsed-width rtl:right-sidebar-collapsed-width': {},
        }
      },
      '.pc-sidebar-hide .pc-header': {
        '@apply left-0': {},
      },
      '.pc-compact-submenu-active': {
        '@media (min-width: 1025px)': {
          '&.pc-sidebar-hide .pc-header': {
            '@apply left-0': {},
          },
          '.pc-header': {
            '@apply ltr:left-sidebar-collapsed-active-width rtl:right-sidebar-collapsed-active-width': {},
          }
        }
      }
    }
  });
});
