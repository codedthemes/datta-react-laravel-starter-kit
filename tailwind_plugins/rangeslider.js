const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents, theme }) {
  addComponents({
    '.slider': {
      '&.slider-horizontal': {
        '.slider-handle.triangle, .slider-tick.triangle': {
          '@apply border-b-primary-500': {}
        }
      },
      '&.slider-vertical': {
        '.slider-handle.triangle, .slider-tick.triangle': {
          '@apply border-l-primary-500 border-r-primary-500': {}
        }
      },
      '&.slider-disabled': {
        '.slider-handle': {
          '@apply bg-[linear-gradient(to_bottom,_#dfdfdf_0,_#bebebe_100%)] bg-repeat-x': {}
        },
        '.slider-track': {
          '@apply bg-[linear-gradient(to_bottom,_#f8f9fa_0,_#f8f9fa_100%)] bg-repeat-x dark:bg-themedark-bodybg': {}
        }
      }
    },
    '.slider-track': {
      '@apply bg-[linear-gradient(to_bottom,_#f8f9fa_0,_#f8f9fa_100%)] bg-repeat-x dark:bg-themedark-bodybg': {}
    },
    '.slider-selection': {
      '@apply bg-none bg-primary-300': {},
      '&.tick-slider-selection': {
        '@apply bg-none bg-primary-200': {}
      }
    },
    '.slider-handle': {
      '@apply bg-none bg-primary-500': {}
    },
    '.slider-tick': {
      '@apply bg-[linear-gradient(to_bottom,_#f9f9f9_0,_#f5f5f5_100%)] bg-repeat-x': {},
      '&.in-selection': {
        '@apply bg-none bg-primary-200': {}
      }
    },
    '.slider .tooltip': {
      '@apply absolute max-w-48 z-[1024]': {},
      '.tooltip-inner': {
        '@apply relative py-1 px-2 -left-2/4 bg-dark-500 rounded-lg text-xs text-white whitespace-nowrap': {}
      },
      '&:not(.show)': {
        '@apply hidden': {}
      }
    },
    '#ex7-enabled': {
      '@apply relative top-1 w-[18px] h-[18px]': {}
    },
    '#RGB': {
      '@apply bg-[rgb(128,_128,_128)] h-2.5': {}
    },
    '#RC': {
      '.slider-selection': {
        '@apply bg-[#ff8282]': {}
      },
      '.slider-handle': {
        '@apply bg-[red]': {}
      }
    },
    '#GC': {
      '.slider-selection': {
        '@apply bg-[#478f3b]': {}
      },
      '.slider-handle': {
        '@apply bg-[green]': {}
      }
    },
    '#BC': {
      '.slider-selection': {
        '@apply bg-[#8283ff]': {}
      },
      '.slider-handle': {
        '@apply border-b-[blue]': {}
      }
    },
    '#R,#G,#B': {
      '@apply w-[300]': {}
    },
    '.slider-handle.custom': {
      "@apply bg-transparent before:content-['\\2605'] before:text-[#726204] before:leading-[15px] before:text-[28px]": {}
    },
    '#slider12a, #slider12c': {
      '.slider-track-high': {
        '@apply bg-success-500': {}
      }
    },
    '#slider12b .slider-track-low': {
      '@apply bg-danger-500': {}
    },
    '#slider12c': {
      '.slider-track-low': {
        '@apply bg-danger-500': {}
      },
      '.slider-selection': {
        '@apply bg-warning-500': {}
      }
    },
    '#slider22': {
      '.slider-rangeHighlight': {
        '@apply bg-[#f70616]': {},
        '&.category1': {
          '@apply bg-[#ff9900]': {}
        },
        '&.category1': {
          '@apply bg-[#99cc00]': {}
        }
      }
    }
  });
});
