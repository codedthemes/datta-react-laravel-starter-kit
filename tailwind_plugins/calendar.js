const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents, theme }) {
  addComponents({
    '.fc': {
      'td, th': {
        '@apply border border-theme-border dark:border-themedark-border': {}
      },
      '.fc-toolbar': {
        '@apply flex items-center justify-between max-sm:flex-col max-sm:gap-2': {},
        h2: {
          '@apply uppercase text-[16px] leading-[30px]': {}
        },
        '.fc-left, .fc-right, .fc-center': {
          '@apply max-md:float-none max-md:block max-md:text-center max-md:my-2.5 max-md:mx-0': {}
        },
        '> * > *': {
          '@apply max-md:float-none': {}
        },
        '.fc-today-button': {
          '@apply max-md:hidden rounded-full text-white bg-primary-500 border-primary-500': {}
        },
        '.fc-button': {
          '@apply capitalize': {}
        }
      },
      '.fc-daygrid-day-top': {
        '@apply p-[14px] flex-col': {}
      },
      '.fc-col-header-cell': {
        '@apply border-0 bg-transparent': {}
      },
      '.fc-col-header-cell-cushion': {
        '@apply block py-4 px-1': {}
      },
      '.fc-scrollgrid-section .fc-scroller-harness': {
        '@apply p-0': {}
      },
      '.fc-daygrid-day-number': {
        '@apply w-6 h-6 rounded-lg p-0 flex items-center justify-center text-sm m-0.5 hover:bg-secondary-500 hover:text-white': {}
      },
      '.fc-daygrid-day': {
        '&.fc-day-today': {
          '@apply bg-primary-500/10 bg-cover': {},
          '.fc-daygrid-day-number': {
            '@apply bg-primary-500 text-white': {}
          }
        }
      },
      '.fc-timegrid-col': {
        '&.fc-day-today': {
          '@apply bg-primary-500/10': {}
        }
      },
      '.fc-col-header, .fc-daygrid-body, .fc-scrollgrid-sync-table': {
        '@apply !w-full': {}
      },
      '.fc-scrollgrid-section-sticky > *':{
        '@apply bg-theme-cardbg dark:bg-themedark-cardbg': {}
      },
      '.fc-scrollgrid-section > *': {
        '@apply border-l border-t border-theme-border': {}
      },
      '.fc-scrollgrid-section-liquid > td': {
        '@apply border-t-0': {}
      },
      'a[data-navlink]': {
        '@apply no-underline hover:no-underline': {}
      }
    },
    '.fc-theme-bootstrap a:not([href])': {
      '@apply text-theme-bodycolor dark:text-themedark-bodycolor': {}
    },
    '.fc-theme-standard': {
      '.fc-scrollgrid': {
        '@apply border-0': {}
      },
      '.fc-list': {
        '@apply border-theme-border dark:border-themedark-border': {}
      },
    },
    
    '.fc-h-event .fc-event-main': {
      '@apply text-primary': {}
    },
    '.fc-event-title, .fc-sticky': {
      '@apply font-semibold truncate': {}
    },
    '.fc-daygrid-event-dot': {
      '@apply !border-white hidden': {}
    },
    '.fc-list-day-cushion': {
      '@apply bg-theme-cardbg dark:bg-themedark-cardbg': {}
    },
    '.fc .fc-list-event:hover td':{
      '@apply bg-theme-cardbg dark:bg-themedark-cardbg': {}
    },
    '.fc-event-time': {
      '@apply hidden': {}
    },
    '.fc-event ,.fc-day-grid-event.fc-h-event.fc-event.fc-start.fc-end.bg-dark': {
      '.fc-content': {
        '@apply text-white': {}
      }
    },
    '.fc-prev-button, .fc-next-button': {
      '&.fc-button': {
        '@apply inline-block items-center justify-center relative w-[34px] h-[34px] !rounded text-base !p-0': {}
      }
    },
    '.fc-toolbar-chunk': {
      '@apply max-md:flex-col max-md:gap-4': {},
      '.d-inline-flex .fc-button': {
        '@apply text-primary bg-primary-500/15 border-0 shadow-none !rounded': {},
        '&:not(:first-child)': {
          '@apply ml-[5px]': {}
        },
        '&:focus,&:hover,&.active': {
          '@apply text-white bg-primary-500': {}
        }
      },
      '.fc-button-primary': {
        '@apply bg-primary-500/10 text-primary-500 border-primary-500 p-[9px_16px] focus:shadow-none': {},
        '&:focus,&:hover': {
          '@apply text-white bg-primary-500': {}
        },
        '&:not(:disabled)': {
          '&.fc-button-active,&:active': {
            '@apply text-white bg-primary-500 focus:shadow-none': {}
          }
        }
      },
      '.fc-today-button': {
        '@apply !rounded text-white bg-primary-500 border-primary-500': {}
      }
    },
    '.fc-daygrid-event-harness, .fc-timegrid-event-harness': {
      '.fc-daygrid-event': {
        '@apply backdrop-blur-sm': {}
      }
    },
    '.fc-timegrid-slots table tr, .fc-list-table': {
      '@apply border-theme-border dark:border-themedark-border': {}
    },
    '.fc-event': {
      '@apply bg-primary-500/10 text-primary rounded cursor-move text-base m-[5px_7px] p-[5px] text-center border border-primary-500':
        {},
      '&.event-primary': {
        '@apply bg-primary-500/10 text-primary-500 border-primary-500': {},
        '&.fc-h-event': {
          '.fc-event-main': {
            '@apply text-primary-500': {}
          }
        }
      },
      '&.event-secondary': {
        '@apply bg-secondary-500/10 text-secondary-500 border-secondary-500': {},
        '&.fc-h-event': {
          '.fc-event-main': {
            '@apply text-secondary-500': {}
          }
        }
      },
      '&.event-success': {
        '@apply bg-success-500/10 text-success-500 border-success-500': {},
        '&.fc-h-event': {
          '.fc-event-main': {
            '@apply text-success-500': {}
          }
        }
      },
      '&.event-danger': {
        '@apply bg-danger-500/10 text-danger-500 border-danger-500': {},
        '&.fc-h-event': {
          '.fc-event-main': {
            '@apply text-danger-500': {}
          }
        }
      },
      '&.event-warning': {
        '@apply bg-warning-500/10 text-warning-500 border-warning-500': {},
        '&.fc-h-event': {
          '.fc-event-main': {
            '@apply text-warning-500': {}
          }
        }
      },
      '&.event-info': {
        '@apply bg-info-500/10 text-info-500 border-info-500': {},
        '&.fc-h-event': {
          '.fc-event-main': {
            '@apply text-info-500': {}
          }
        }
      }
    },
    '.fc-daygrid-event-harness .fc-daygrid-event.bg-soft-dark': {
      '.fc-event-main,.fc-event-title': {
        '@apply !text-dark-500': {}
      }
    },
    '.fc-v-event .fc-event-main': {
      '@apply text-inherit': {}
    }
  });
});
