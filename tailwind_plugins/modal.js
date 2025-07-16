const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents, theme }) {
  addComponents({
    '.modal-content': {
      '@apply w-full m-2 overflow-hidden flex flex-col rounded  border border-theme-border dark:border-themedark-border bg-theme-cardbg dark:bg-themedark-cardbg shadow-[0_0_15px_-3px_rgb(0,0,0,0.1)]':
        {},
      '.modal-header': {
        '@apply p-5 flex items-center justify-between border-b border-theme-border dark:border-themedark-border': {}
      },
      '.modal-body': {
        '@apply p-5 flex-auto': {}
      },
      '.modal-footer': {
        '@apply p-5 flex items-center justify-end border-t border-theme-border dark:border-themedark-border': {}
      }
    },
    '.modal-dialog': {
      '@apply max-w-[500px] z-[1030] mx-auto my-10 relative inset-x-0 top-0 flex items-start opacity-0 -translate-y-20 duration-300 transition-all ease-in-out':
        {},
      '&.modal-lg': {
        '@apply max-w-[800px]': {}
      },
      '&.modal-sm': {
        '@apply max-w-[300px]': {}
      },
      '&.modal-fullscreen': {
        '@apply w-full max-w-none h-full m-0': {},
        '.modal-content': {
          '@apply h-full rounded-none': {},
          '.modal-body': {
            '@apply overflow-y-auto': {}
          }
        }
      },
      '&.modal-fullscreen-xl-down': {
        '@apply max-xl:w-full max-xl:max-w-none max-xl:h-full max-xl:m-0': {},
        '.modal-content': {
          '@apply max-xl:h-full max-xl:rounded-none': {},
          '.modal-body': {
            '@apply max-xl:overflow-y-auto': {}
          }
        }
      },
      '&.modal-fullscreen-lg-down': {
        '@apply max-lg:w-full max-lg:max-w-none max-lg:h-full max-lg:m-0': {},
        '.modal-content': {
          '@apply max-lg:h-full max-lg:rounded-none': {},
          '.modal-body': {
            '@apply max-lg:overflow-y-auto': {}
          }
        }
      },
      '&.modal-fullscreen-md-down': {
        '@apply max-md:w-full max-md:max-w-none max-md:h-full max-md:m-0': {},
        '.modal-content': {
          '@apply max-md:h-full max-md:rounded-none': {},
          '.modal-body': {
            '@apply max-md:overflow-y-auto': {}
          }
        }
      },
      '&.modal-fullscreen-sm-down': {
        '@apply max-sm:w-full max-sm:max-w-none max-sm:h-full max-sm:m-0': {},
        '.modal-content': {
          '@apply max-sm:h-full max-sm:rounded-none': {},
          '.modal-body': {
            '@apply max-sm:overflow-y-auto': {}
          }
        }
      }
    },
    '.modal-dialog-centered': {
      '@apply flex items-center min-h-[calc(100%_-_5rem)]': {}
    },
    '.modal': {
      '@apply hidden z-[1030] fixed top-0 inset-x-0 h-full overflow-x-hidden overflow-y-auto': {},
      '&.show': {
        '@apply block': {}
      },
      '&.animate .modal-dialog': {
        '@apply transform-none opacity-100': {}
      },
      /* Effect 1: Fade in and scale up */
      '&.anim-fade-in-scale': {
        '.modal-dialog': {
          '@apply scale-75 translate-y-0 opacity-0 duration-300': {},
        },
        '&.animate .modal-dialog': {
          '@apply transform-none opacity-100': {}
        }
      },
      /* Effect 2: Slide from the right */
      '&.anim-slide-in-right': {
        '.modal-dialog': {
          '@apply translate-x-1/4 translate-y-0 opacity-0 transition-[all_0.3s_cubic-bezier(0.25,0.5,0.5,0.9)] duration-300': {},
        },
        '&.animate .modal-dialog': {
          '@apply transform-none opacity-100': {}
        }
      },

      /* Effect 3: Slide from the bottom */
      '&.anim-slide-in-bottom': {
        '.modal-dialog': {
          '@apply translate-y-1/4 opacity-0 duration-300': {},
        },
        '&.animate .modal-dialog': {
          '@apply transform-none opacity-100': {}
        }
      },

      /* Effect 4: Newspaper */
      '&.anim-newspaper': {
        '.modal-dialog': {
          '@apply scale-0 translate-y-0 rotate-[720deg] opacity-0 duration-500': {},
        },
        '&.animate .modal-dialog': {
          '@apply transform-none opacity-100': {}
        }
      },
      /* Effect 5: fall */
      '&.anim-fall': {
        perspective: '1300px',
        '.modal-dialog': {
          transform: 'translateZ(600px) rotateX(20deg) translateY(0)',
          '@apply opacity-0 duration-500': {},
        },
        '&.animate .modal-dialog': {
          transform: 'translateZ(0px) rotateX(0deg) translateY(0)',
          '@apply opacity-100': {}
        }
      },

      /* Effect 6: side fall */
      '&.anim-side-fall': {
        perspective: '1300px',
        '.modal-dialog': {
          'transform-style': 'preserve-3d',
          transform: 'translate(30%) translateZ(600px) rotate(10deg)',
          '@apply opacity-0 duration-300': {},
        },
        '&.animate .modal-dialog': {
          transform: 'translate(0%) translateZ(0) rotate(0deg)',
          '@apply opacity-100': {}
        }
      },

      /* Effect 7:  slide and stick to top */
      '&.anim-sticky-up': {

        '.modal-dialog.modal-dialog-centered': {
          '@apply items-start mt-0 opacity-0 duration-300': {},
          '.modal-content': {
            '@apply mt-0 rounded-t-none': {}
          }
        },
        '&.animate .modal-dialog': {
          '@apply opacity-100': {}
        }
      },
      /* Effect 8: 3D flip horizontal */
      '&.anim-3d-flip-horizontal': {
        perspective: '1300px',
        '.modal-dialog': {
          'transform-style': 'preserve-3d',
          transform: 'rotateY(-70deg) translateY(0)',
          '@apply opacity-0 duration-300': {},
        },
        '&.animate .modal-dialog': {
          transform: 'rotateY(0deg) translateY(0)',
          '@apply opacity-100': {}
        }
      },
      /* Effect 9: 3D flip vertical */
      '&.anim-3d-flip-vertical': {
        perspective: '1300px',
        '.modal-dialog': {
          'transform-style': 'preserve-3d',
          transform: 'rotateX(-70deg) translateY(0)',
          '@apply opacity-0 duration-300': {},
        },
        '&.animate .modal-dialog': {
          transform: 'rotateX(0deg) translateY(0)',
          '@apply opacity-100': {}
        }
      },
      /* Effect 10: 3D sign */
      '&.anim-3d-sign': {
        perspective: '1300px',
        '.modal-dialog': {
          'transform-style': 'preserve-3d',
          transform: 'rotateX(-60deg) translateY(0)',
          'transform-origin': '50% 0',
          '@apply opacity-0 duration-300': {},
        },
        '&.animate .modal-dialog': {
          transform: 'rotateX(0deg) translateY(0)',
          '@apply opacity-100': {}
        }
      },

      /* Effect 11: Super scaled */
      '&.anim-super-scaled': {
        perspective: '1300px',
        '.modal-dialog': {
          'transform-style': 'preserve-3d',
          transform: 'scale(2) translateY(0)',
          '@apply opacity-0 duration-300': {},
        },
        '&.animate .modal-dialog': {
          transform: 'scale(1) translateY(0)',
          '@apply opacity-100': {}
        }
      },

      /* Effect 12:  Just me */
      '&.anim-just-me': {
        '@apply bg-theme-cardbg dark:bg-themedark-cardbg': {},
        '.modal-dialog': {
          transform: 'scale(0.8) translateY(0)',
          '@apply opacity-0 duration-300': {},
          '.modal-content': {
            '@apply border-0 shadow-none': {}
          }
        },
        '&.animate .modal-dialog': {
          transform: 'scale(1) translateY(0)',
          '@apply opacity-100': {}
        }
      },

      /* Effect 13: 3D slit */
      '&.anim-3d-slit': {
        perspective: '1300px',
        '.modal-dialog': {
          'transform-style': 'preserve-3d',
          transform: 'translateZ(-3000px) rotateY(90deg) translateY(0)',
          '@apply opacity-0 duration-300': {},
        },
        '&.animate .modal-dialog': {
          '@apply opacity-100 animate-[slit_0.7s_forwards_ease-out]': {}
        }
      },

      /* Effect 14:  3D Rotate from bottom */
      '&.anim-3d-rotate-bottom': {
        perspective: '1300px',
        '.modal-dialog': {
          'transform-style': 'preserve-3d',
          transform: 'translateY(100%) rotateX(90deg)',
          'transform-origin': '0 100%',
          '@apply opacity-0 duration-300': {},
        },
        '&.animate .modal-dialog': {
          transform: 'translateY(0%) rotateX(0deg)',
          '@apply opacity-100': {}
        }
      },
      /* Effect 15:  3D Rotate in from left */
      '&.anim-3d-rotate-InLeft': {
        perspective: '1300px',
        '.modal-dialog': {
          'transform-style': 'preserve-3d',
          transform: 'translateZ(100px) translateX(-30%) rotateY(90deg)',
          'transform-origin': '0 100%',
          '@apply opacity-0 duration-300': {},
        },
        '&.animate .modal-dialog': {
          transform: 'translateZ(0px) translateX(0%) rotateY(0deg)',
          '@apply opacity-100': {}
        }
      },
      /* Effect 16:  Blur */
      '&.anim-blur': {
        '@apply backdrop-blur-xl': {},
        '.modal-dialog': {
          '@apply scale-75 translate-y-0 opacity-0 duration-300': {},
        },
        '&.animate .modal-dialog': {
          '@apply transform-none opacity-100': {}
        }
      },


    },
    '.modal-open': {
      '@apply overflow-hidden': {}
    }
  });
});
