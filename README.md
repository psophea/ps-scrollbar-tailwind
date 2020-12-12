# ps-scrollbar-tailwind



# Scrollbar plugin for Tailwind CSS 

This plugin allows you to customize scrollbar in [Tailwind](https://tailwindcss.com) for Firefox and webkit-based browsers.

## Installation

```
npm install -D ps-scrollbar-tailwind
```

## Usage

Add the plugin to tailwind.config.js file.

```js
-- tailwind.config.js

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('ps-scrollbar-tailwind'),
    ],
}
```

## Styling

For any container that you want to style its scrollbars, just add class `scrollbar` to that container. By default, it will set `overflow: overlay`. Then you can style its look using below classes:

```css
scrollbar: default (visible)
scrollbar-hidden: hidden mode (invisible but still scrollable)
scrollbar-auto: auto mode (visible)
scrollbar-width-{spacing}: width of scrollbar
scrollbar-track-{color}: color of track/bar
scrollbar-thumb-{color}: color of thumb/handle
scrollbar-track-radius-{borderRadius}: border radius of track/bar
scrollbar-thumb-{color}: border radius of thumb/handle

then there are variants for above properties such as: hover, color, x, y


/* hover*/
hover:scrollbar-hidden                          /* hidden mode on hover */
hover:scrollbar-auto                            /* auto mode on hover */
hover:scrollbar-width-{spacing}                 /* width of scrollbar on hover */
hover:scrollbar-track-{color}                   /* track/bar color on hover */
hover:scrollbar-thumb-{color}                   /* thumb/handle of the bar color on hover */
hover:scrollbar-track-radius-{borderRadius}     /* radius of track/bar on hover */
hover:scrollbar-thumb-{color}                   /* radius of thumb/handle on hover */


/* hover variant */
hover:scrollbar-width-x-{spacing}               /* width of horizontal bar on hover */
hover:scrollbar-width-y-{spacing}               /* width of vertical bar on hover */
hover:scrollbar-track-x-{color}                 /* color of horizontal track on hover */
hover:scrollbar-track-y-{color}                 /* color of vertical track on hover */
hover:scrollbar-thumb-x-{color}                 /* color of thumb of horizontal bar on hover */
hover:scrollbar-thumb-y-{color}                 /* color of thumb of vertical bar on hover */


/* auto */
scrollbar-auto_width-{spacing}                  /* width when in auto mode */
scrollbar-auto_width-x-{spacing}                /* width of horizontal bar when in auto mode */
scrollbar-auto_width-y-{spacing}                /* width of vertical bar when in auto mode */
scrollbar-auto-track-{color}                    /* color of track when in auto mode */
scrollbar-auto-track-x-{color}                  /* color of horizontal track when in auto mode */
scrollbar-auto-track-y-{color}                  /* color of vertical track when in auto mode */
scrollbar-auto-thumb-{color}                    /* color of thumb when in auto mode */
scrollbar-auto-thumb-x-{color}                  /* color of thumb of horizontal bar when in auto mode */
scrollbar-auto-thumb-y-{color}                  /* color of thumb of vertical bar when in auto mode */

/* auto on hover */
hover:scrollbar-auto_width-{spacing}            /* width when auto on hover */
hover:scrollbar-auto_width-x-{spacing}          /* width of horizontal bar when in auto mode on hover */
hover:scrollbar-auto_width-y-{spacing}          /* width of vertical bar when in auto mode on hover */
hover:scrollbar-auto-track-{color}              /* color of track when in auto mode on hover */
hover:scrollbar-auto-track-x-{color}            /* color of horizontal track when in auto mode on hover */
hover:scrollbar-auto-track-y-{color}            /* color of vertical track when in auto mode on hover */
hover:scrollbar-auto-thumb-{color}              /* color of thumb when in auto mode on hover */
hover:scrollbar-auto-thumb-x-{color}            /* color of thumb of horizontal bar when in auto mode on hover */
hover:scrollbar-auto-thumb-y-{color}            /* color of thumb of vertical bar when in auto mode on hover */
```

## Default Behaviour and Customization

When you set the container class as `scrollbar` it will show the scrollbar as normal.

- If you want to always hide the scrollbar but show when hover on container, you can set

```html
<div class="scrollbar scrollbar-hidden hover:scrollbar-auto">Lorem ipsum dolor sit amet...</div>
```
normally, in case you hide the scrollbar in normal mode, and show on hover, you can set width, color of track and thumb using `scrollbar-auto-...` classes as other classes are used when hovering on the scrollbar itself, not the container.


- If you want to change color of track to blue-200 and thumb to red-200 on hover, you can set

```html
<div class="scrollbar hover:scrollbar-track-blue-200 hover:scrollbar-red-200">Lorem ipsum dolor sit amet...</div>
```

- If you want to change scrollbar width to 2 (8px) on hover, you can set

```html
<div class="scrollbar hover:scrollbar-width-2">Lorem ipsum dolor sit amet...</div>
```

- If you want to change only horizontal scrollbar width to 2 (8px), you can set

```html
<div class="scrollbar scrollbar-width-x-2">Lorem ipsum dolor sit amet...</div>
```