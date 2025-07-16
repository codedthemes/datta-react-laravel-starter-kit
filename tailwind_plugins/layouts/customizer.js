const plugin = require('tailwindcss/plugin');
module.exports = plugin(function ({ addComponents, theme }) {
  addComponents({
    '.preset-btn.btn': {
      '@apply flex items-center justify-center h-[54px] w-[54px] p-[3px] border-2 border-theme-border dark:border-themedark-border':{},
      "&.active":{
        '@apply border-primary-500':{},
      },
      '&.btn-img':{
        '@apply h-auto rounded':{},
        'img':{
          '@apply w-full':{},
        }
      }
    },
    '.theme-color': {
      '@apply relative flex gap-1':{},
      '>a': {
        '@apply relative w-[30px] h-[30px] rounded inline-flex items-center justify-center overflow-hidden transition-all':{},
        '&:after': {
          '@apply content-[""] absolute inset-[4px] rounded bg-white/30 z-10 scale-0 transition-all':{},
        },
        'i': {
          '@apply text-[18px] text-white opacity-0 transition-all':{},
        },
        '&:hover': {
          'i': {
            '@apply opacity-100':{},
          },
        },
        '&.active': {
          '&:after': {
            '@apply scale-100':{},
          },
          'i': {
            '@apply opacity-100':{},
          },
        }
      },
      '&.navbar-img':{
        '>a': {
          '@apply w-[45px] h-[100px] bg-cover':{},
        }
      }
    }
  });
});
