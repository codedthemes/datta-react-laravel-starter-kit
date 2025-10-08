const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents, theme }) {
  addComponents({
    '.grid-wrapper': {
      position: 'relative',
      clear: 'both',
      margin: '0 auto',
      maxWidth: '1000px',
      listStyle: 'none',
      textAlign: 'center',
      display: 'flex',
      '& figure': {
        position: 'relative',
        overflow: 'hidden',
        margin: '10px 1%',
        minWidth: '320px',
        maxWidth: '480px',
        maxHeight: '360px',
        width: '48%',
        height: 'auto',
        backgroundColor: '#3085a3',
        textAlign: 'center',
        cursor: 'pointer',
        '& img': {
          position: 'relative',
          display: 'block',
          minHeight: '100%',
          maxWidth: '100%',
          opacity: '0.8',
        },
        '& figcaption': {
          padding: '2em',
          color: '#fff',
          textTransform: 'uppercase',
          fontSize: '1.25em',
          backfaceVisibility: 'hidden',
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          '& > a': {
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            zIndex: '1000',
            textIndent: '200%',
            whiteSpace: 'nowrap',
            fontSize: '0',
            opacity: '0',
          },
        },
        '& h2': {
          wordSpacing: '-0.15em',
          fontWeight: '300',
          color: '#fff',
          margin: '0',
          '& span': {
            fontWeight: '800',
          },
        },
        '& p': {
          margin: '0',
          letterSpacing: '1px',
          fontSize: '68.5%',
        },
      },
    },
    'figure': {
      // Effect Julia
      '&.effect-julia': {
        backgroundColor: '#2f3238',
        '& img': {
          maxWidth: 'none',
          height: '400px',
          transition: 'opacity 1s, transform 1s',
          backfaceVisibility: 'hidden',
        },
        '& figcaption': {
          textAlign: 'left',
        },
        '& h2': {
          position: 'relative',
          padding: '0.5em 0',
        },
        '& p': {
          display: 'inline-block',
          margin: '0 0 0.25em',
          padding: '0.4em 1em',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          color: '#2f3238',
          textTransform: 'none',
          fontWeight: '500',
          fontSize: '75%',
          transition: 'opacity 0.35s, transform 0.35s',
          transform: 'translate3d(-360px, 0, 0)',
          '&:first-child': {
            transitionDelay: '0.15s',
          },
          '&:nth-of-type(2)': {
            transitionDelay: '0.1s',
          },
          '&:nth-of-type(3)': {
            transitionDelay: '0.05s',
          },
        },
        '&:hover': {
          '& img': {
            opacity: '0.4',
            transform: 'scale3d(1.1, 1.1, 1)',
          },
          '& p': {
            opacity: '1',
            transform: 'translate3d(0, 0, 0)',
            '&:first-child': {
              transitionDelay: '0s',
            },
            '&:nth-of-type(2)': {
              transitionDelay: '0.05s',
            },
            '&:nth-of-type(3)': {
              transitionDelay: '0.1s',
            },
          },
        },
      },
      // Effect Goliath
      '&.effect-goliath': {
        backgroundColor: '#df4e4e',
        '& h2, & img': {
          transition: 'transform 0.35s',
        },
        '& img': {
          backfaceVisibility: 'hidden',
        },
        '& h2': {
          position: 'absolute',
          bottom: '0',
          left: '0',
          padding: '30px',
        },
        '& p': {
          position: 'absolute',
          bottom: '0',
          left: '0',
          padding: '30px',
          textTransform: 'none',
          fontSize: '90%',
          opacity: '0',
          transition: 'opacity 0.35s, transform 0.35s',
          transform: 'translate3d(0, 50px, 0)',
        },
        '&:hover': {
          '& img': {
            transform: 'translate3d(0, -80px, 0)',
          },
          '& h2': {
            transform: 'translate3d(0, -100px, 0)',
          },
          '& p': {
            opacity: '1',
            transform: 'translate3d(0, 0, 0)',
          },
        },
      },
      // Effect Hera
      '&.effect-hera': {
        backgroundColor: '#303fa9',
        '& h2': {
          fontSize: '158.75%',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transition: 'opacity 0.35s, transform 0.35s',
          transform: 'translate3d(-50%, -50%, 0)',
          transformOrigin: '50%',
        },
        '& p': {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transition: 'opacity 0.35s, transform 0.35s',
          transform: 'translate3d(-50%, -50%, 0)',
          transformOrigin: '50%',
          width: '100px',
          textTransform: 'none',
          fontSize: '121%',
          lineHeight: '2',
          '& a': {
            color: '#fff',
            '&:focus, &:hover': {
              opacity: '0.6',
            },
            '& i': {
              opacity: '0',
              transition: 'opacity 0.35s, transform 0.35s',
            },
            '&:first-child i': {
              transform: 'translate3d(-60px, -60px, 0)',
            },
            '&:nth-child(2) i': {
              transform: 'translate3d(60px, -60px, 0)',
            },
            '&:nth-child(3) i': {
              transform: 'translate3d(-60px, 60px, 0)',
            },
            '&:nth-child(4) i': {
              transform: 'translate3d(60px, 60px, 0)',
            },
          },
        },
        '& figcaption::before': {
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '200px',
          height: '200px',
          border: '2px solid #fff',
          content: '""',
          opacity: '0',
          transition: 'opacity 0.35s, transform 0.35s',
          transform: 'translate3d(-50%, -50%, 0) rotate3d(0, 0, 1, -45deg) scale3d(0, 0, 1)',
          transformOrigin: '50%',
        },
        '&:hover': {
          '& figcaption::before': {
            opacity: '1',
            transform: 'translate3d(-50%, -50%, 0) rotate3d(0, 0, 1, -45deg) scale3d(1, 1, 1)',
          },
          '& h2': {
            opacity: '0',
            transform: 'translate3d(-50%, -50%, 0) scale3d(0.8, 0.8, 1)',
          },
          '& p i:empty': {
            transform: 'translate3d(0, 0, 0)',
            opacity: '1',
          },
        },
      },
      // Effect Winston
      '&.effect-winston': {
        backgroundColor: '#162633',
        textAlign: 'left',
        position: 'relative',
        '& img': {
          transition: 'opacity 0.45s',
          backfaceVisibility: 'hidden',
        },
        '& figcaption::before': {
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          backgroundSize: '100% 100%',
          content: '""',
          transition: 'opacity 0.45s, transform 0.45s',
          transform: 'rotate3d(0, 0, 1, 45deg)',
          transformOrigin: '0 100%',
        },
        '& h2': {
          transition: 'transform 0.35s',
          transform: 'translate3d(0, 20px, 0)',
        },
        '& p': {
          position: 'absolute',
          right: '0',
          bottom: '0',
          padding: '0 1.5em 7% 0',
        },
        '& a': {
          margin: '0 10px',
          color: 'rgba(255, 255, 255, 0.6)',
          fontSize: '170%',
          '&:focus, &:hover': {
            color: '#fff',
          },
        },
        '& p a i': {
          opacity: '0',
          transition: 'opacity 0.35s, transform 0.35s',
          transform: 'translate3d(0, 50px, 0)',
        },
        '&:hover': {
          '& img': {
            opacity: '0.6',
          },
          '& h2': {
            transform: 'translate3d(0, 0, 0)',
          },
          '& figcaption::before': {
            opacity: '0.7',
            transform: 'rotate3d(0, 0, 1, 20deg)',
          },
          '& p i': {
            opacity: '1',
            transform: 'translate3d(0, 0, 0)',
          },
          '& p a:nth-child(3) i': {
            transitionDelay: '0.05s',
          },
          '& p a:nth-child(2) i': {
            transitionDelay: '0.1s',
          },
          '& p a:first-child i': {
            transitionDelay: '0.15s',
          },
        },
      },
      // Effect Selena
      '&.effect-selena': {
        backgroundColor: '#000',
        position: 'relative',
        '& img': {
          opacity: '0.95',
          transition: 'transform 0.35s',
          transformOrigin: '50% 50%',
        },
        '&:hover img': {
          transform: 'scale3d(0.95, 0.95, 1)',
        },
        '& h2': {
          transition: 'transform 0.35s',
          transform: 'translate3d(0, 20px, 0)',
        },
        '& p': {
          opacity: '0',
          transition: 'opacity 0.35s, transform 0.35s',
          transform: 'perspective(1000px) rotate3d(1, 0, 0, 90deg)',
          transformOrigin: '50% 0',
        },
        '&:hover': {
          '& h2': {
            transform: 'translate3d(0, 0, 0)',
          },
          '& p': {
            opacity: '1',
            transform: 'perspective(1000px) rotate3d(1, 0, 0, 0)',
          },
        },
      },
      // Effect Terry
      '&.effect-terry': {
        backgroundColor: '#34495e',
        position: 'relative',
        '& figcaption': {
          padding: '1em',
          position: 'absolute',
          '&::before, &::after': {
            position: 'absolute',
            width: '200%',
            height: '200%',
            borderStyle: 'solid',
            borderColor: '#101010',
            content: "''",
            transition: 'transform 0.35s',
          },
          '&::before': {
            right: 0,
            bottom: 0,
            borderWidth: '0 70px 60px 0',
            transform: 'translate3d(70px, 60px, 0)',
          },
          '&::after': {
            top: 0,
            left: 0,
            borderWidth: '15px 0 0 15px',
            transform: 'translate3d(-15px, -15px, 0)',
          },
        },
        '& img, & p a': {
          transition: 'opacity 0.35s, transform 0.35s',
        },
        '& img': {
          opacity: '0.85',
        },
        '& h2': {
          position: 'absolute',
          bottom: 0,
          left: 0,
          padding: '0.4em 10px',
          width: '50%',
          transition: 'transform 0.35s',
          transform: 'translate3d(100%, 0, 0)',
        },
        '& p': {
          float: 'right',
          clear: 'both',
          textAlign: 'left',
          textTransform: 'none',
          fontSize: '111%',
          '& a': {
            display: 'block',
            marginBottom: '1em',
            color: '#fff',
            opacity: 0,
            transform: 'translate3d(90px, 0, 0)',
            '&:focus, &:hover': {
              color: '#f3cf3f',
            },
          },
        },
        '&:hover': {
          '& figcaption::after, & figcaption::before': {
            transform: 'translate3d(0, 0, 0)',
          },
          '& img': {
            opacity: '0.6',
          },
          '& h2': {
            transform: 'translate3d(0, 0, 0)',
          },
          '& p a': {
            opacity: 1,
            transform: 'translate3d(0, 0, 0)',
            '&:first-child': {
              transitionDelay: '0.025s',
            },
            '&:nth-child(2)': {
              transitionDelay: '0.05s',
            },
            '&:nth-child(3)': {
              transitionDelay: '0.075s',
            },
            '&:nth-child(4)': {
              transitionDelay: '0.1s',
            },
          },
        },
      },
      // Effect Phoebe
      '&.effect-phoebe': {
        backgroundColor: '#675983',
        position: 'relative',
        '& img': {
          opacity: '0.85',
          transition: 'opacity 0.35s',
        },
        '&:hover img': {
          opacity: '0.6',
        },
        '& figcaption::before': {
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          backgroundSize: '100% 112%',
          content: "''",
          transition: 'opacity 0.35s, transform 0.35s',
          transform: 'scale3d(5, 2.5, 1)',
          transformOrigin: '50% 50%',
        },
        '&:hover figcaption::before': {
          opacity: '0.6',
          transform: 'scale3d(1, 1, 1)',
        },
        '& h2': {
          marginTop: '1em',
          transition: 'transform 0.35s',
          transform: 'translate3d(0, 40px, 0)',
        },
        '&:hover h2': {
          transform: 'translate3d(0, 0, 0)',
        },
        '& p a': {
          color: '#fff',
          fontSize: '140%',
          opacity: '0',
          position: 'relative',
          display: 'inline-block',
          transition: 'opacity 0.35s, transform 0.35s',
        },
        '& p a:first-child': {
          transform: 'translate3d(-60px, -60px, 0)',
        },
        '& p a:nth-child(2)': {
          transform: 'translate3d(0, 60px, 0)',
        },
        '& p a:nth-child(3)': {
          transform: 'translate3d(60px, -60px, 0)',
        },
        '&:hover p a': {
          opacity: '1',
          transform: 'translate3d(0, 0, 0)',
        },
      },
      // Effect Apollo
      '&.effect-apollo': {
        backgroundColor: '#3498db',
        position: 'relative',
        '& img': {
          opacity: '0.95',
          transition: 'opacity 0.35s, transform 0.35s',
          transform: 'scale3d(1.05, 1.05, 1)',
        },
        '& figcaption::before': {
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          content: "''",
          transition: 'transform 0.6s',
          transform: 'scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg) translate3d(0, -100%, 0)',
        },
        '& p': {
          position: 'absolute',
          right: '0',
          bottom: '0',
          margin: '3em',
          padding: '0 1em',
          maxWidth: '150px',
          borderRight: '4px solid #fff',
          textAlign: 'right',
          opacity: '0',
          transition: 'opacity 0.35s',
        },
        '& h2': {
          textAlign: 'left',
        },
        '&:hover img': {
          opacity: '0.6',
          transform: 'scale3d(1, 1, 1)',
        },
        '&:hover figcaption::before': {
          transform: 'scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg) translate3d(0, 100%, 0)',
        },
        '&:hover p': {
          opacity: '1',
          transitionDelay: '0.1s',
        },
      },
      // Effect Kira
      '&.effect-kira': {
        backgroundColor: '#fff',
        textAlign: 'left',
        position: 'relative',
        '& img': {
          transition: 'opacity 0.35s',
        },
        '& figcaption': {
          zIndex: '1',
          position: 'absolute',
        },
        '& p': {
          padding: '2.25em 0.5em',
          fontWeight: '600',
          fontSize: '100%',
          lineHeight: '1.5',
          opacity: '0',
          transition: 'opacity 0.35s, transform 0.35s',
          transform: 'translate3d(0, -10px, 0)',
          '& a': {
            margin: '0 0.5em',
            color: '#101010',
            '&:focus, &:hover': {
              opacity: '0.6',
            },
          },
        },
        '& figcaption::before': {
          position: 'absolute',
          top: '14px',
          right: '2em',
          left: '2em',
          zIndex: '-1',
          height: '4.1em',
          backgroundColor: '#fff',
          content: "''",
          transition: 'opacity 0.35s, transform 0.35s',
          transform: 'translate3d(0, 4em, 0) scale3d(1, 0.023, 1)',
          transformOrigin: '50% 0',
        },
        '&:hover': {
          '& img': {
            opacity: '0.5',
          },
          '& p': {
            opacity: '1',
            transform: 'translate3d(0, 0, 0)',
          },
          '& figcaption::before': {
            opacity: '0.7',
            transform: 'translate3d(0, 5em, 0) scale3d(1, 1, 1)',
          },
        },
      },
      // Effect Steve
      '&.effect-steve': {
        zIndex: 'auto',
        overflow: 'visible',
        backgroundColor: '#000',
        position: 'relative',
        '&:before, h2:before': {
          position: 'absolute',
          top: '0',
          left: '0',
          zIndex: '-1',
          width: '100%',
          height: '100%',
          backgroundColor: '#000',
          content: "''",
          transition: 'opacity 0.35s',
        },
        '&:before': {
          boxShadow: '0 3px 30px rgba(0, 0, 0, 0.8)',
          opacity: '0',
        },
        figcaption: {
          zIndex: '1',
        },
        img: {
          opacity: '1',
          transition: 'transform 0.35s',
          transform: 'perspective(1000px) translate3d(0, 0, 0)',
        },
        h2: {
          position: 'relative',
          marginTop: '2em',
          padding: '0.25em',
          backgroundColor: '#fff',
          color: '#2d434e',
          '&:before': {
            boxShadow: '0 1px 10px rgba(0, 0, 0, 0.5)',
          },
        },
        p: {
          marginTop: '1em',
          padding: '0.5em',
          backgroundColor: '#fff',
          color: '#2d434e',
          fontWeight: '800',
          opacity: '0',
          transition: 'opacity 0.35s, transform 0.35s',
          transform: 'scale3d(0.9, 0.9, 1)',
        },
        '&:hover': {
          '&:before': {
            opacity: '1',
          },
          img: {
            transform: 'perspective(1000px) translate3d(0, 0, 21px)',
          },
          'h2:before': {
            opacity: '0',
          },
          p: {
            opacity: '1',
            transform: 'scale3d(1, 1, 1)',
          },
        },
      },
      // Effect Moses
      '&.effect-moses': {
        background: 'linear-gradient(-45deg, #ec65b7 0%, #05e0d8 100%)',
        position: 'relative',
        img: {
          opacity: '0.85',
          transition: 'opacity 0.35s',
        },
        h2: {
          padding: '20px',
          width: '50%',
          height: '50%',
          border: '2px solid #fff',
          textAlign: 'left',
          transition: 'transform 0.35s',
          transform: 'translate3d(10px, 10px, 0)',
        },
        p: {
          float: 'right',
          padding: '20px',
          textAlign: 'right',
          opacity: '0',
          transition: 'opacity 0.35s, transform 0.35s',
          transform: 'translate3d(-50%, -50%, 0)',
        },
        '&:hover': {
          h2: {
            transform: 'translate3d(0, 0, 0)',
          },
          p: {
            opacity: '1',
            transform: 'translate3d(0, 0, 0)',
          },
          img: {
            opacity: '0.6',
          },
        },
      },
      // Effect Jazz
      '&.effect-jazz': {
        background: 'linear-gradient(-45deg, #f3cf3f 0%, #f33f58 100%)',
        position: 'relative',
        img: {
          opacity: '0.9',
          transition: 'opacity 0.35s, transform 0.35s',
        },
        figcaption: {
          position: 'absolute',
          '&::after': {
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            borderTop: '1px solid #fff',
            borderBottom: '1px solid #fff',
            content: '""',
            opacity: '0',
            transform: 'rotate3d(0, 0, 1, 45deg) scale3d(1, 0, 1)',
            transformOrigin: '50% 50%',
            transition: 'opacity 0.35s, transform 0.35s',
          },
        },
        h2: {
          paddingTop: '26%',
          opacity: '1',
          transform: 'scale3d(0.8, 0.8, 1)',
          transition: 'transform 0.35s',
        },
        p: {
          padding: '0.5em 2em',
          fontSize: '0.85em',
          opacity: '0',
          transition: 'opacity 0.35s, transform 0.35s',
        },
        '&:hover': {
          img: {
            opacity: '0.7',
            transform: 'scale3d(1.05, 1.05, 1)',
          },
          figcaption: {
            '&::after': {
              opacity: '1',
              transform: 'rotate3d(0, 0, 1, 45deg) scale3d(1, 1, 1)',
            },
          },
          h2: {
            transform: 'scale3d(1, 1, 1)',
          },
          p: {
            opacity: '1',
            transform: 'scale3d(1, 1, 1)',
          },
        },
      },
      // Effect Ming
      '&.effect-ming': {
        background: '#030c17',
        position: 'relative',
        overflow: 'hidden',
        img: {
          opacity: '0.9',
          transition: 'opacity 0.35s',
        },
        figcaption: {
          position: 'absolute',
          '&::before': {
            position: 'absolute',
            top: '30px',
            right: '30px',
            bottom: '30px',
            left: '30px',
            border: '2px solid #fff',
            boxShadow: '0 0 0 30px rgba(255, 255, 255, 0.2)',
            content: '""',
            opacity: '0',
            transition: 'opacity 0.35s, transform 0.35s',
            transform: 'scale3d(1.4, 1.4, 1)',
          },
        },
        h2: {
          margin: '20% 0 10px',
          transition: 'transform 0.35s',
        },
        p: {
          padding: '1em',
          opacity: '0',
          transition: 'opacity 0.35s, transform 0.35s',
          transform: 'scale(1.5)',
        },
        '&:hover': {
          h2: {
            transform: 'scale(0.9)',
          },
          figcaption: {
            '&::before': {
              opacity: '1',
              transform: 'scale3d(1, 1, 1)',
            },
          },
          p: {
            opacity: '1',
            transform: 'scale3d(1, 1, 1)',
          },
          img: {
            opacity: '0.4',
          },
        },
      },
      // Effect Lexi
      '&.effect-lexi': {
        background: 'linear-gradient(-45deg, #000 0%, #fff 100%)',
        position: 'relative',
        overflow: 'hidden',
        img: {
          margin: '-10px 0 0 -10px',
          maxWidth: 'none',
          width: 'calc(100% + 10px)',
          opacity: '0.9',
          transition: 'opacity 0.35s, transform 0.35s',
          transform: 'translate3d(10px, 10px, 0)',
          backfaceVisibility: 'hidden',
        },
        figcaption: {
          position: 'absolute',
          '&::before': {
            position: 'absolute',
            right: '-100px',
            bottom: '-100px',
            width: '300px',
            height: '300px',
            border: '2px solid #fff',
            borderRadius: '50%',
            boxShadow: '0 0 0 900px rgba(255, 255, 255, 0.2)',
            content: '""',
            opacity: '0',
            transform: 'scale3d(0.5, 0.5, 1)',
            transformOrigin: '50% 50%',
            transition: 'opacity 0.35s, transform 0.35s',
          },
        },
        h2: {
          textAlign: 'left',
          transition: 'transform 0.35s',
          transform: 'translate3d(5px, 5px, 0)',
        },
        p: {
          position: 'absolute',
          right: '0',
          bottom: '0',
          padding: '0 1.5em 1.5em 0',
          width: '140px',
          textAlign: 'right',
          opacity: '0',
          transform: 'translate3d(20px, 20px, 0)',
          transition: 'opacity 0.35s, transform 0.35s',
        },
        '&:hover': {
          img: {
            opacity: '0.6',
            transform: 'translate3d(0, 0, 0)',
          },
          figcaption: {
            '&::before': {
              opacity: '1',
              transform: 'scale3d(1, 1, 1)',
            },
          },
          h2: {
            opacity: '1',
            transform: 'translate3d(0, 0, 0)',
          },
          p: {
            opacity: '1',
            transform: 'translate3d(0, 0, 0)',
          },
        },
      },
      // Effect Duke
      '&.effect-duke': {
        background: 'linear-gradient(-45deg, #34495e 0%, #cc6055 100%)',
        position: 'relative',
        overflow: 'hidden',
        img: {
          transition: 'opacity 0.35s, transform 0.35s',
        },
        h2: {
          transition: 'transform 0.35s',
          transform: 'scale3d(0.8, 0.8, 1)',
          transformOrigin: '50% 100%',
        },
        p: {
          position: 'absolute',
          bottom: '0',
          left: '0',
          margin: '20px',
          padding: '30px',
          border: '2px solid #fff',
          textTransform: 'none',
          fontSize: '90%',
          opacity: '0',
          transform: 'scale3d(0.8, 0.8, 1)',
          transformOrigin: '50% -100%',
          transition: 'opacity 0.35s, transform 0.35s',
        },
        '&:hover': {
          img: {
            opacity: '0.1',
            transform: 'scale3d(2, 2, 1)',
          },
          h2: {
            opacity: '1',
            transform: 'scale3d(1, 1, 1)',
          },
          p: {
            opacity: '1',
            transform: 'scale3d(1, 1, 1)',
          },
        },
      },
    },
    // Effect Terry - adjust heading padding and font size for screens <= 920px
    '@media (max-width: 920px)': {
      '.grid-wrapper': {
        flexDirection:'column',
      },
      '.effect-terry h2': {
        padding: '0.75em 10px',
        fontSize: theme('fontSize.2xl'),
      },
    },

    // Content and grid-wrapper adjustments for screens <= 50em (800px)
    '@media (max-width: 50em)': {
      '.content': {
        padding: '0 10px',
        textAlign: 'center',
      },
      '.grid-wrapper figure': {
        display: 'inline-block',
        float: 'none',
        margin: '10px auto',
        width: '100%',
      },
    },

    // Grid-wrapper adjustments for screens <= 480px
    '@media (max-width: 480px)': {
      '.grid-wrapper figure': {
        minWidth: 'auto',
      },
      '.grid-wrapper figure h2': {
        fontSize: '30px',
      },
    },
  });
});
