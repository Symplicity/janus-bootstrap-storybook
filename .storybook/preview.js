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
    name: 'Mobile (sm) - iPhone 4',
    styles: {
      width: '640px',
      height: '960px',
    },
  },
  viewport2: {
    name: 'Mobile (md) - iPhone XR',
    styles: {
      width: '828px',
      height: '1792px',
    },
  },
  viewport3: {
    name: 'Mobile (lg) - iPhone 8 Plus',
    styles: {
      width: '1080px',
      height: '1920px',
    },
  },
  viewport4: {
    name: 'Tablet - Amazon Fire HD 10',
    styles: {
      width: '1280px',
      height: '800px',
    },
  },
  viewport5: {
    name: 'Desktop (sm) - 21.09%',
    styles: {
      width: '1366px',
      height: '768px',
    },
  },
  viewport6: {
    name: 'Desktop (md) - 9.6%',
    styles: {
      width: '1536px',
      height: '864px',
    },
  },
  viewport7: {
    name: 'Desktop (lg) - 21.93%',
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
