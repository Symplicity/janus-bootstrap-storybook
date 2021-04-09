import { configure } from '@storybook/html';
import '!style-loader!css-loader!./css-loader.scss';
import { initializeRTL } from 'storybook-addon-rtl';

// Import colors from janus design tokens and offer them as backgorund colors
import janusColors from '../node_modules/@symplicity/janus-tokens/dist/colors.common.js';
const backgrounds = [{name: 'white', value: '#ffffff', default: true }];
Object.keys(janusColors).forEach(function(color) {
      // Exclude text colors
      if (!color.match(/text/i)) {
         // Remove "color" from the name
         backgrounds.push({ name: color.replace(/^color/,''), value: janusColors[color] });
      }
});

export const decorators = [];

const customViewports = {
  viewport1: {
    name: 'Mobile (sm) - 320x960',
    styles: {
      width: '320px',
      height: '960px',
    },
  },
  viewport2: {
    name: 'Mobile (md) - 414x1792',
    styles: {
      width: '414px',
      height: '1792px',
    },
  },
  viewport3: {
    name: 'Mobile (lg) - 540x1920',
    styles: {
      width: '540px',
      height: '1920px',
    },
  },
  viewport4: {
    name: 'Mobile (xl) - 640x800',
    styles: {
      width: '640px',
      height: '800px',
    },
  },
  viewport5: {
    name: 'Desktop (sm) 1366x768',
    styles: {
      width: '1366px',
      height: '768px',
    },
  },
  viewport6: {
    name: 'Desktop (md) 1536x864',
    styles: {
      width: '1536px',
      height: '864px',
    },
  },
  viewport7: {
    name: 'Desktop (lg) 1920x1080',
    styles: {
      width: '1920px',
      height: '1080px',
    },
  },

};

export const parameters = {
  actions: {
    handles: ['mouseover .btn', 'click .btn']
  },
  backgrounds: {
    default: 'light',
    values: [
      { 
        name: 'light', 
        value: '#fff'
      },
      { 
        name: 'medium', 
        value: '#efefef'
      },
      { 
        name: 'dark', 
        value: '#333' 
      },
    ],
  },
  viewport: {
    viewports: {
      ...customViewports,
    }
  },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, { numeric: true }),
  },
  layout: 'fullscreen'
};

initializeRTL();

//configure(require.context('../stories', true, /\.stories\.js$/), module);
