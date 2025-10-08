const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents, theme }) {
  addComponents({
    '.choices': {
      '@apply relative focus:outline-none focus-visible:outline-none': {},
      '[hidden]': {
        '@apply hidden': {}
      },
      '&[data-type*=select-multiple], &[data-type*=text]': {
        '.choices__button': {
          '@apply relative inline-block my-0 ml-2 -mr-1 pl-4 w-2 indent-[-9999px] leading-none opacity-75 border-l border-white bg-center bg-[length:8px_8px] bg-choice-close-btn bg-no-repeat':
            {}
        }
      },
      '&.is-disabled': {
        '.choices__inner, .choices__input': {
          '@apply select-none opacity-50': {}
        }
      },
      '&[data-type*=select-one]': {
        '@apply after:absolute after:right-[11.5px] after:top-2/4 after:content-[""] after:w-0 after:h-0 after:border after:border-[5px] after:border-[#131920_transparent_transparent] dark:after:border-[#bfbfbf_transparent_transparent]':
          {},
        '.choices__input': {
          '@apply select-none opacity-50': {}
        }
      }
    },
    '.choices__list': {
      '@apply m-0 pl-0 list-none': {}
    },
    '.choices__input': {
      '@apply align-baseline mb-0 border-0 mx-2 rounded-none py-1 pl-0.5 pr-0 max-w-full focus:outline-0 !bg-transparent': {}
    },
    '.choices__inner': {
      '@apply inline-block align-top w-full px-[7.5px] pt-[7.5px] pb-[3.75px] min-h-[44px] rounded-lg border border-theme-border dark:border-themedark-border bg-theme-cardbg dark:bg-themedark-cardbg focus:outline-none focus-visible:outline-none':
        {}
    },
    '.choices__list--single': {
      '@apply inline-block w-full py-1 pl-1 pr-4': {}
    },
    '.choices__list--multiple': {
      '@apply inline-block': {},
      '.choices__item': {
        '@apply inline-block align-middle rounded-lg py-1 px-2.5 text-sm font-semibold mr-1 mb-1 bg-primary-500 text-white border-primary-500':
          {}
      }
    },
    // .choices__list--dropdown .
    '.choices__list--dropdown': {
      '@apply invisible absolute w-full top-full z-10 -mt-px border border-theme-border dark:border-themedark-border bg-theme-cardbg dark:bg-themedark-cardbg':
        {},
      '&.is-active': {
        '@apply visible': {}
      },
      '.choices__item': {
        '@apply relative p-2.5 text-base': {}
      },
      '.choices__list': {
        '@apply relative py-2.5 px-3 max-h-[300px] overflow-auto': {}
      }
    }
  });
});
