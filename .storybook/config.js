import { configure, addParameters, addDecorator } from '@storybook/html';
import { withA11y } from '@storybook/addon-a11y';
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

addDecorator(withA11y);

addParameters({
  a11y: {
    config: {},
    options: {
      checks: { 'color-contrast': { options: { noScroll: true } } },
      restoreScroll: true,
    },
  },
  backgrounds: backgrounds,
  options: {
    hierarchyRootSeparator: /\|/,
  }
});

initializeRTL();

configure(require.context('../stories', true, /\.stories\.js$/), module);
