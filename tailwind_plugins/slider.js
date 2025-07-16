const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents, theme }) {
  addComponents({
    '.tns-controls': {
      '@apply text-center mb-2.5': {},

      '[aria-controls]': {
        '@apply text-base font-medium m-[0_5px] p-[0_1em] h-[2.5em] text-white bg-primary-500 rounded border-0': {}
      }
    },
    '[data-action]': {
      '@apply block my-2.5 mx-auto text-[17px] min-w-[3em] text-center bg-transparent border-0': {}
    },
    '.tns-controls [disabled]': {
      '@apply text-[#999999] bg-[#b3b3b3] cursor-not-allowed': {}
    },
    '.tns-nav': {
      '@apply text-center mx-0 my-2.5': {},
      '> [aria-controls]': {
        '@apply w-[9px] h-[9px] p-0 my-0 mx-[5px] rounded-full bg-[#ddd] border-0': {}
      },
      '> .tns-nav-active': {
        '@apply bg-[#999]': {}
      }
    },
    '.thumbnails': {
      '@apply text-center mx-0 my-5': {},
      li: {
        '@apply inline-block cursor-pointer opacity-50': {}
      },
      '.tns-nav-active': {
        '@apply bg-transparent opacity-100': {}
      },
      img: {
        '@apply h-auto w-[46px]': {}
      }
    },
    '.customize-tools': {
      '@apply relative': {},
      '.controls': {
        '@apply hidden md:block': {}
      }
    },
    '.controls': {
      '@apply text-center': {},
      li: {
        '@apply block absolute top-2/4 h-[60px] leading-[60px] -mt-[30px] py-0 px-[15px] cursor-pointer text-3xl transition-all hover:bg-[#f2f2f2]':
          {}
      },
      '.prev': {
        '@apply left-0': {}
      },
      '.next': {
        '@apply right-0': {}
      }
    }
  });
});
