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
  layout: 'fullscreen'
};

initializeRTL();

//configure(require.context('../stories', true, /\.stories\.js$/), module);
