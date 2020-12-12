const plugin = require('tailwindcss/plugin');

/**
 * Generates a track style, a thumb style, and a thumb hover style for a given
 * name/color pair
 *
 * @param name  The text to use in the class name
 * @param color The color to set the element to
 *
 * @return An object containing the generated classes
 */
const generateScrollbarClasses = (key, value) => ({
    [`.scrollbar-track-${key}`]: {
        '--scrollbar-track-x': value,
        '--scrollbar-track-y': value,
        '&::-webkit-scrollbar-track': {
            '--scrollbar-track-x': value,
            '--scrollbar-track-y': value
        }
    },

    [`.hover\\:scrollbar-track-${key}`]: {
        '--scrollbar-track-x': value,
        '--scrollbar-track-y': value,
        '&::-webkit-scrollbar-track:hover': {
            '--scrollbar-track-x': value,
            '--scrollbar-track-y': value,
        }
    },

    [`.scrollbar-thumb-${key}`]: {
        '--scrollbar-thumb-x': value,
        '--scrollbar-thumb-y': value,
        '&::-webkit-scrollbar-thumb': {
            '--scrollbar-thumb-x': value,
            '--scrollbar-thumb-y': value
        }
    },

    [`.hover\\:scrollbar-thumb-${key}`]: {
        '--scrollbar-thumb-x': value,
        '--scrollbar-thumb-y': value,
        '&::-webkit-scrollbar-thumb:hover': {
            '--scrollbar-thumb-x': value,
            '--scrollbar-thumb-y': value
        }
    },

    // horizontal
    [`.scrollbar-track-x-${key}`]: {
        '--scrollbar-track-x': value,
        '&::-webkit-scrollbar-track:horizontal': {
            '--scrollbar-track-x': value
        }
    },

    [`.hover\\:scrollbar-track-x-${key}`]: {
        '--scrollbar-track-x': value,
        '&::-webkit-scrollbar-track:horizontal:hover': {
            '--scrollbar-track-x': value
        }
    },

    [`.scrollbar-thumb-x-${key}`]: {
        '--scrollbar-thumb-x': value,
        '&::-webkit-scrollbar-thumb:horizontal': {
            '--scrollbar-thumb-x': value
        }
    },

    [`.hover\\:scrollbar-thumb-x-${key}`]: {
        '--scrollbar-thumb-x': value,
        '&::-webkit-scrollbar-thumb:horizontal:hover': {
            '--scrollbar-thumb-x': value
        }
    },

    // vertical
    [`.scrollbar-track-y-${key}`]: {
        '--scrollbar-track-y': value,
        '&::-webkit-scrollbar-track:vertical': {
            '--scrollbar-track-y': value
        }
    },

    [`.hover\\:scrollbar-track-y-${key}`]: {
        '--scrollbar-track-y': value,
        '&::-webkit-scrollbar-track:vertical:hover': {
            '--scrollbar-track-y': value
        }
    },

    [`.scrollbar-thumb-y-${key}`]: {
        '--scrollbar-thumb-y': value,
        '&::-webkit-scrollbar-thumb:vertical': {
            '--scrollbar-thumb-y': value
        }
    },

    [`.hover\\:scrollbar-thumb-y-${key}`]: {
        '--scrollbar-thumb-y': value,
        '&::-webkit-scrollbar-thumb:vertical:hover': {
            '--scrollbar-thumb-y': value
        }
    },

    //// auto
    [`.scrollbar-auto-track-${key}`]: {
        '--scrollbar-track-x': value,
        '--scrollbar-track-y': value,
        '&::-webkit-scrollbar-track': {
            '--scrollbar-track-x': value,
            '--scrollbar-track-y': value
        }
    },

    [`.hover\\:scrollbar-auto-track-${key}`]: {
        '--scrollbar-track-x': value,
        '--scrollbar-track-y': value,
        '&::-webkit-scrollbar-track:hover': {
            '--scrollbar-track-x': value,
            '--scrollbar-track-y': value,
        }
    },

    [`.scrollbar-auto-thumb-${key}`]: {
        '--scrollbar-thumb-x': value,
        '--scrollbar-thumb-y': value,
        '&::-webkit-scrollbar-thumb': {
            '--scrollbar-thumb-x': value,
            '--scrollbar-thumb-y': value
        }
    },

    [`.hover\\:scrollbar-auto-thumb-${key}`]: {
        '--scrollbar-thumb-x': value,
        '--scrollbar-thumb-y': value,
        '&::-webkit-scrollbar-thumb:hover': {
            '--scrollbar-thumb-x': value,
            '--scrollbar-thumb-y': value
        }
    },

    // horizontal
    [`.scrollbar-auto-track-x-${key}`]: {
        '--scrollbar-track-x': value,
        '&::-webkit-scrollbar-track:horizontal': {
            '--scrollbar-track-x': value
        }
    },

    [`.hover\\:scrollbar-auto-track-x-${key}`]: {
        '--scrollbar-track-x': value,
        '&::-webkit-scrollbar-track:horizontal:hover': {
            '--scrollbar-track-x': value
        }
    },

    [`.scrollbar-auto-thumb-x-${key}`]: {
        '--scrollbar-thumb-x': value,
        '&::-webkit-scrollbar-thumb:horizontal': {
            '--scrollbar-thumb-x': value
        }
    },

    [`.hover\\:scrollbar-auto-thumb-x-${key}`]: {
        '--scrollbar-thumb-x': value,
        '&::-webkit-scrollbar-thumb:horizontal:hover': {
            '--scrollbar-thumb-x': value
        }
    },

    // vertical
    [`.scrollbar-auto-track-y-${key}`]: {
        '--scrollbar-track-y': value,
        '&::-webkit-scrollbar-track:vertical': {
            '--scrollbar-track-y': value
        }
    },

    [`.hover\\:scrollbar-auto-track-y-${key}`]: {
        '--scrollbar-track-y': value,
        '&::-webkit-scrollbar-track:vertical:hover': {
            '--scrollbar-track-y': value
        }
    },

    [`.scrollbar-auto-thumb-y-${key}`]: {
        '--scrollbar-thumb-y': value,
        '&::-webkit-scrollbar-thumb:vertical': {
            '--scrollbar-thumb-y': value
        }
    },

    [`.hover\\:scrollbar-auto-thumb-y-${key}`]: {
        '--scrollbar-thumb-y': value,
        '&::-webkit-scrollbar-thumb:vertical:hover': {
            '--scrollbar-thumb-y': value
        }
    },

});

const generateScrollbarSpacingClasses = (key, value) => ({
    [`.scrollbar-width-${key}`]: {
        '--scrollbar-width-x': value,
        '--scrollbar-width-y': value,
        '&::-webkit-scrollbar-width': {
            '--scrollbar-width-x': value,
            '--scrollbar-width-y': value
        }
    },


    [`.hover\\:scrollbar-width-${key}`]: {
        '--scrollbar-width-x': value,
        '--scrollbar-width-y': value,
        '&::-webkit-scrollbar-width:hover': {
            '--scrollbar-width-x': value,
            '--scrollbar-width-y': value,
        }
    },

    // horizontal
    [`.scrollbar-width-x-${key}`]: {
        '--scrollbar-width-x': value,
        '&::-webkit-scrollbar-width:horizontal': {
            '--scrollbar-width-x': value
        }
    },

    [`.hover\\:scrollbar-width-x-${key}`]: {
        '--scrollbar-width-x': value,
        '&::-webkit-scrollbar-width:horizontal:hover': {
            '--scrollbar-width-x': value
        }
    },

    // vertical
    [`.scrollbar-width-y-${key}`]: {
        '--scrollbar-width-y': value,
        '&::-webkit-scrollbar-width:vertical': {
            '--scrollbar-width-y': value
        }
    },

    [`.hover\\:scrollbar-width-y-${key}`]: {
        '--scrollbar-width-y': value,
        '&::-webkit-scrollbar-width:vertical:hover': {
            '--scrollbar-width-y': value
        }
    },

    //// auto
    [`.scrollbar-auto-width-${key}`]: {
        '--scrollbar-width-x': value,
        '--scrollbar-width-y': value,
        '&::-webkit-scrollbar-width': {
            '--scrollbar-width-x': value,
            '--scrollbar-width-y': value
        }
    },

    [`.hover\\:scrollbar-auto-width-${key}`]: {
        '--scrollbar-width-x': value,
        '--scrollbar-width-y': value,
        '&::-webkit-scrollbar-width:hover': {
            '--scrollbar-width-x': value,
            '--scrollbar-width-y': value,
        }
    },

    // horizontal
    [`.scrollbar-auto-width-x-${key}`]: {
        '--scrollbar-width-x': value,
        '&::-webkit-scrollbar-width:horizontal': {
            '--scrollbar-width-x': value
        }
    },

    [`.hover\\:scrollbar-auto-width-x-${key}`]: {
        '--scrollbar-width-x': value,
        '&::-webkit-scrollbar-width:horizontal:hover': {
            '--scrollbar-width-x': value
        }
    },

    // vertical
    [`.scrollbar-auto-width-y-${key}`]: {
        '--scrollbar-width-y': value,
        '&::-webkit-scrollbar-width:vertical': {
            '--scrollbar-width-y': value
        }
    },

    [`.hover\\:scrollbar-auto-width-y-${key}`]: {
        '--scrollbar-width-y': value,
        '&::-webkit-scrollbar-width:vertical:hover': {
            '--scrollbar-width-y': value
        }
    },
});

const generateScrollbarBorderRadiusClasses = (key, value) => ({

    [`.scrollbar-track-radius-${key}`]: {
        '--scrollbar-track-radius-x': value,
        '--scrollbar-track-radius-y': value,
        '&::-webkit-scrollbar-track-radius': {
            '--scrollbar-track-radius-x': value,
            '--scrollbar-track-radius-y': value
        }
    },

    [`.hover\\:scrollbar-track-radius-${key}`]: {
        '--scrollbar-track-radius-x': value,
        '--scrollbar-track-radius-y': value,
        '&::-webkit-scrollbar-track-radius:hover': {
            '--scrollbar-track-radius-x': value,
            '--scrollbar-track-radius-y': value,
        }
    },

    [`.scrollbar-thumb-radius-${key}`]: {
        '--scrollbar-thumb-radius-x': value,
        '--scrollbar-thumb-radius-y': value,
        '&::-webkit-scrollbar-thumb-radius': {
            '--scrollbar-thumb-radius-x': value,
            '--scrollbar-thumb-radius-y': value
        }
    },

    [`.hover\\:scrollbar-thumb-radius-${key}`]: {
        '--scrollbar-thumb-radius-x': value,
        '--scrollbar-thumb-radius-y': value,
        '&::-webkit-scrollbar-thumb-radius:hover': {
            '--scrollbar-thumb-radius-x': value,
            '--scrollbar-thumb-radius-y': value,
        }
    },

    // horizontal
    [`.scrollbar-track-radius-x-${key}`]: {
        '--scrollbar-track-radius-x': value,
        '&::-webkit-scrollbar-track-radius:horizontal': {
            '--scrollbar-track-radius-x': value
        }
    },

    [`.hover\\:scrollbar-track-radius-x-${key}`]: {
        '--scrollbar-track-radius-x': value,
        '&::-webkit-scrollbar-track-radius:horizontal:hover': {
            '--scrollbar-track-radius-x': value
        }
    },

    [`.scrollbar-thumb-radius-x-${key}`]: {
        '--scrollbar-thumb-radius-x': value,
        '&::-webkit-scrollbar-thumb-radius:horizontal': {
            '--scrollbar-thumb-radius-x': value
        }
    },

    [`.hover\\:scrollbar-thumb-radius-x-${key}`]: {
        '--scrollbar-thumb-radius-x': value,
        '&::-webkit-scrollbar-thumb-radius:horizontal:hover': {
            '--scrollbar-thumb-radius-x': value
        }
    },

    // vertical
    [`.scrollbar-track-radius-y-${key}`]: {
        '--scrollbar-track-radius-y': value,
        '&::-webkit-scrollbar-track-radius:vertical': {
            '--scrollbar-track-radius-y': value
        }
    },

    [`.hover\\:scrollbar-track-radius-y-${key}`]: {
        '--scrollbar-track-radius-y': value,
        '&::-webkit-scrollbar-track-radius:vertical:hover': {
            '--scrollbar-track-radius-y': value
        }
    },

    [`.scrollbar-thumb-radius-y-${key}`]: {
        '--scrollbar-thumb-radius-y': value,
        '&::-webkit-scrollbar-thumb-radius:vertical': {
            '--scrollbar-thumb-radius-y': value
        }
    },

    [`.hover\\:scrollbar-thumb-radius-y-${key}`]: {
        '--scrollbar-thumb-radius-y': value,
        '&::-webkit-scrollbar-thumb-radius:vertical:hover': {
            '--scrollbar-thumb-radius-y': value
        }
    },

    //// auto
    [`.scrollbar-auto-track-radius-${key}`]: {
        '--scrollbar-track-radius-x': value,
        '--scrollbar-track-radius-y': value,
        '&::-webkit-scrollbar-track-radius': {
            '--scrollbar-track-radius-x': value,
            '--scrollbar-track-radius-y': value
        }
    },

    [`.hover\\:scrollbar-auto-track-radius-${key}`]: {
        '--scrollbar-track-radius-x': value,
        '--scrollbar-track-radius-y': value,
        '&::-webkit-scrollbar-track-radius:hover': {
            '--scrollbar-track-radius-x': value,
            '--scrollbar-track-radius-y': value,
        }
    },

    [`.scrollbar-auto-thumb-radius-${key}`]: {
        '--scrollbar-thumb-radius-x': value,
        '--scrollbar-thumb-radius-y': value,
        '&::-webkit-scrollbar-thumb-radius': {
            '--scrollbar-thumb-radius-x': value,
            '--scrollbar-thumb-radius-y': value
        }
    },

    [`.hover\\:scrollbar-auto-thumb-radius-${key}`]: {
        '--scrollbar-thumb-radius': value,
        '&::-webkit-scrollbar-thumb-radius:hover': {
            '--scrollbar-thumb-radius': value
        }
    },

    // horizontal
    [`.scrollbar-auto-track-radius-x-${key}`]: {
        '--scrollbar-track-radius-x': value,
        '&::-webkit-scrollbar-track-radius:horizontal': {
            '--scrollbar-track-radius-x': value
        }
    },

    [`.hover\\:scrollbar-auto-track-radius-x-${key}`]: {
        '--scrollbar-track-radius-x': value,
        '&::-webkit-scrollbar-track-radius:horizontal:hover': {
            '--scrollbar-track-radius-x': value
        }
    },

    [`.scrollbar-auto-thumb-radius-x-${key}`]: {
        '--scrollbar-thumb-radius-x': value,
        '&::-webkit-scrollbar-thumb-radius:horizontal': {
            '--scrollbar-thumb-radius-x': value
        }
    },

    [`.hover\\:scrollbar-auto-thumb-radius-x-${key}`]: {
        '--scrollbar-thumb-radius-x': value,
        '&::-webkit-scrollbar-thumb-radius:horizontal:hover': {
            '--scrollbar-thumb-radius-x': value
        }
    },

    // vertical
    [`.scrollbar-auto-track-radius-y-${key}`]: {
        '--scrollbar-track-radius-y': value,
        '&::-webkit-scrollbar-track-radius:vertical': {
            '--scrollbar-track-radius-y': value
        }
    },

    [`.hover\\:scrollbar-auto-track-radius-y-${key}`]: {
        '--scrollbar-track-radius-y': value,
        '&::-webkit-scrollbar-track-radius:vertical:hover': {
            '--scrollbar-track-radius-y': value
        }
    },

    [`.scrollbar-auto-thumb-radius-y-${key}`]: {
        '--scrollbar-thumb-radius-y': value,
        '&::-webkit-scrollbar-thumb-radius:vertical': {
            '--scrollbar-thumb-radius-y': value
        }
    },

    [`.hover\\:scrollbar-auto-thumb-radius-y-${key}`]: {
        '--scrollbar-thumb-radius-y': value,
        '&::-webkit-scrollbar-thumb-radius:vertical:hover': {
            '--scrollbar-thumb-radius-y': value
        }
    },
});

const generateHidden = () => ({
    [".scrollbar-hidden"]: {
        '--scrollbar-track-x': 'transparent',
        '--scrollbar-track-y': 'transparent',
        '--scrollbar-thumb-x': 'transparent',
        '--scrollbar-thumb-y': 'transparent',
    },
    [".scrollbar-x-hidden"]: {
        '--scrollbar-track-x': 'transparent',
        '--scrollbar-thumb-x': 'transparent',
    },
    [".scrollbar-y-hidden"]: {
        '--scrollbar-track-y': 'transparent',
        '--scrollbar-thumb-y': 'transparent',
    },

    [".hover\\:scrollbar-hidden:hover"]: {
        '--scrollbar-track-x': 'transparent',
        '--scrollbar-thumb-x': 'transparent',
        '--scrollbar-track-y': 'transparent',
        '--scrollbar-thumb-y': 'transparent',
    },
    [".hover\\:scrollbar-x-hidden:hover"]: {
        '--scrollbar-track-x': 'transparent',
        '--scrollbar-thumb-x': 'transparent',
    },
    [".hover\\:scrollbar-y-hidden:hover"]: {
        '--scrollbar-track-y': 'transparent',
        '--scrollbar-thumb-y': 'transparent',
    },

    [".scrollbar-auto"]: {
        '--scrollbar-track-x': 'var(--scrollbar-auto-track)',
        '--scrollbar-track-y': 'var(--scrollbar-auto-track)',
        '--scrollbar-thumb-x': 'var(--scrollbar-auto-thumb)',
        '--scrollbar-thumb-y': 'var(--scrollbar-auto-thumb)',
    },
    [".hover\\:scrollbar-auto:hover"]: {
        '--scrollbar-track-x': 'var(--scrollbar-auto-track)',
        '--scrollbar-track-y': 'var(--scrollbar-auto-track)',
        '--scrollbar-thumb-x': 'var(--scrollbar-auto-thumb)',
        '--scrollbar-thumb-y': 'var(--scrollbar-auto-thumb)',
    },
});

/**
 * Tells an element what to do with --scrollbar-track and --scrollbar-thumb
 * variables
 */
const scrollbarBase = {
    '--scrollbar-track-x': '#9ca3af',
    '--scrollbar-track-y': '#9ca3af',
    '--scrollbar-thumb-x': '#4b5563',
    '--scrollbar-thumb-y': '#4b5563',
    '--scrollbar-track-radius-x': '0.375rem',
    '--scrollbar-track-radius-y': '0.375rem',
    '--scrollbar-thumb-radius-x': '0.375rem',
    '--scrollbar-thumb-radius-y': '0.375rem',
    '--scrollbar-width-x': '0.25rem',
    '--scrollbar-width-y': '0.25rem',

    '--scrollbar-auto-track': '#9ca3af',
    '--scrollbar-auto-thumb': '#4b5563',
    '--scrollbar-auto-track-radius': '0.375rem',
    '--scrollbar-auto-thumb-radius': '0.375rem',
    '--scrollbar-auto-width': '0.25rem',

    // Make sure the scrollbars are calculated in the elements width
    // NOTE: only has effect in webkit-based browsers, but is only really needed
    // in webkit-based browsers in the first place.
    'overflow': 'overlay',

    'scrollbar-hidden': {
        '--scrollbar-track-x': 'transparent',
        '--scrollbar-track-y': 'transparent',
        '--scrollbar-thumb-x': 'transparent',
        '--scrollbar-thumb-y': 'transparent',
    },

    'hover\\:scrollbar-hidden:hover': {
        '--scrollbar-track-y': 'transparent',
        '--scrollbar-thumb-y': 'transparent',
    },


    'scrollbar-auto': {
        '--scrollbar-track-x': 'var(--scrollbar-auto-track)',
        '--scrollbar-track-y': 'var(--scrollbar-auto-track)',
        '--scrollbar-thumb-x': 'var(--scrollbar-auto-thumb)',
        '--scrollbar-thumb-y': 'var(--scrollbar-auto-thumb)',
    },

    'hover\\:scrollbar-auto:hover': {
        '--scrollbar-track-x': 'var(--scrollbar-auto-track)',
        '--scrollbar-track-y': 'var(--scrollbar-auto-track)',
        '--scrollbar-thumb-x': 'var(--scrollbar-auto-thumb)',
        '--scrollbar-thumb-y': 'var(--scrollbar-auto-thumb)',
    },

    'scrollbar-x-hidden': {
        '--scrollbar-track-x': 'transparent',
        '--scrollbar-thumb-x': 'transparent',
    },
    'hover\\:scrollbar-x-hidden': {
        '--scrollbar-track-x': 'transparent',
        '--scrollbar-thumb-x': 'transparent',
    },
    'scrollbar-y-hidden': {
        '--scrollbar-track-y': 'transparent',
        '--scrollbar-thumb-y': 'transparent',
    },
    'hover\\:scrollbar-y-hidden': {
        '--scrollbar-track-y': 'transparent',
        '--scrollbar-thumb-y': 'transparent',
    },

    // both
    '&::-webkit-scrollbar': {
        'height': 'var(--scrollbar-width-x)',
        'width': 'var(--scrollbar-width-y)',
    },
    '&::-webkit-scrollbar-track': {
        'background-color': 'var(--scrollbar-track-x)',
        'border-radius': 'var(--scrollbar-track-radius-x)',
        '-webkit-border-radius': 'var(--scrollbar-track-radius-x)',
    },
    '&::-webkit-scrollbar-thumb': {
        'background-color': 'var(--scrollbar-thumb-x)',
        'border-radius': 'var(--scrollbar-thumb-radius-x)',
    },

    // horizontal
    '&::-webkit-scrollbar:horizontal': {
        'height': 'var(--scrollbar-width-x)',
    },

    '&::-webkit-scrollbar-track:horizontal': {
        'background-color': 'var(--scrollbar-track-x)',
        'border-radius': 'var(--scrollbar-track-radius-x)',
        '-webkit-border-radius': 'var(--scrollbar-track-radius-x)',
    },

    '&::-webkit-scrollbar-thumb:horizontal': {
        'background-color': 'var(--scrollbar-thumb-x)',
        'border-radius': 'var(--scrollbar-thumb-radius-x)',
    },

    // vertical
    '&::-webkit-scrollbar:vertical': {
        'width': 'var(--scrollbar-width-y)',
    },

    '&::-webkit-scrollbar-track:vertical': {
        'background-color': 'var(--scrollbar-track-y)',
        'border-radius': 'var(--scrollbar-track-radius-y)',
        '-webkit-border-radius': 'var(--scrollbar-track-radius-y)',
    },

    '&::-webkit-scrollbar-thumb:vertical': {
        'background-color': 'var(--scrollbar-thumb-y)',
        'border-radius': 'var(--scrollbar-thumb-radius-y)',
    },

    //// hover
    // both
    '&::-webkit-scrollbar:hover': {
        'height': 'var(--scrollbar-width-x)',
        'width': 'var(--scrollbar-width-y)',
    },
    '&::-webkit-scrollbar-track:hover': {
        'background-color': 'var(--scrollbar-track-x)',
        'border-radius': 'var(--scrollbar-track-radius-x)',
        '-webkit-border-radius': 'var(--scrollbar-track-radius-x)',
    },

    '&::-webkit-scrollbar-thumb:hover': {
        'background-color': 'var(--scrollbar-thumb-x)',
        'border-radius': 'var(--scrollbar-thumb-radius-x)',
    },

    // horizontal
    '&::-webkit-scrollbar:horizontal:hover': {
        'height': 'var(--scrollbar-width-x)',
    },

    '&::-webkit-scrollbar-track:horizontal:hover': {
        'background-color': 'var(--scrollbar-track-x)',
        'border-radius': 'var(--scrollbar-track-radius-x)',
        '-webkit-border-radius': 'var(--scrollbar-track-radius-x)',
    },

    '&::-webkit-scrollbar-thumb:horizontal:hover': {
        'background-color': 'var(--scrollbar-thumb-x)',
        'border-radius': 'var(--scrollbar-thumb-radius-x)',
    },

    // vertical
    '&::-webkit-scrollbar:vertical:hover': {
        'width': 'var(--scrollbar-width-y)',
    },

    '&::-webkit-scrollbar-track:vertical:hover': {
        'background-color': 'var(--scrollbar-track-y)',
        'border-radius': 'var(--scrollbar-track-radius-y)',
        '-webkit-border-radius': 'var(--scrollbar-track-radius-y)',
    },

    '&::-webkit-scrollbar-thumb:vertical:hover': {
        'background-color': 'var(--scrollbar-thumb-y)',
        'border-radius': 'var(--scrollbar-thumb-radius-y)',
    },
};

module.exports = plugin(function ({ e, addUtilities, theme, addBase }) {
    const generateScrollbarColorUtilities = (colors, prefix = '') => Object.entries(colors)
        .reduce((memo, [key, value]) => ({
            ...memo,
            ...(
                typeof value === 'object'
                    ? generateScrollbarColorUtilities(value, `${e(key)}-`)
                    : generateScrollbarClasses(`${prefix}${e(key)}`, value)
            )
        }), {});

    const generateScrollbarSpacingUtilities = (colors, prefix = '') => Object.entries(colors)
        .reduce((memo, [key, value]) => ({
            ...memo,
            ...(
                typeof value === 'object'
                    ? generateScrollbarSpacingUtilities(value, `${e(key)}-`)
                    : generateScrollbarSpacingClasses(`${prefix}${e(key)}`, value)
            )
        }), {});

    const generateScrollbarBorderRadiusUtilities = (colors, prefix = '') => Object.entries(colors)
        .reduce((memo, [key, value]) => ({
            ...memo,
            ...(
                typeof value === 'object'
                    ? generateScrollbarBorderRadiusUtilities(value, `${e(key)}-`)
                    : generateScrollbarBorderRadiusClasses(`${prefix}${e(key)}`, value)
            )
        }), {});

    addUtilities({
        '.scrollbar': {
            ...scrollbarBase,
        },
        ...generateHidden(),
        ...generateScrollbarColorUtilities(theme('colors', {})),
        ...generateScrollbarSpacingUtilities(theme('spacing', {})),
        ...generateScrollbarBorderRadiusUtilities(theme('borderRadius', {})),
    });
});