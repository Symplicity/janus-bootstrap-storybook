// import { configure } from '@storybook/html'
import '!style-loader!css-loader!./css-loader.scss'
import { initializeRTL } from 'storybook-addon-rtl'

import '../node_modules/@symplicity/bootstrap/dist/js/bootstrap.min.js'

// Import colors from janus design tokens and offer them as backgorund colors
import janusColors from '../node_modules/@symplicity/janus-tokens/dist/colors.common.js'

const customViewports = {
  viewport1: {
    name: 'Mobile (sm) - 320x500',
    styles: {
      width: '320px',
      height: '500px'
    }
  },
  viewport2: {
    name: 'Mobile (md) - 414x1792',
    styles: {
      width: '414px',
      height: '1792px'
    }
  },
  viewport3: {
    name: 'Mobile (lg) - 540x1920',
    styles: {
      width: '540px',
      height: '1920px'
    }
  },
  viewport4: {
    name: 'Mobile (xl) - 640x800',
    styles: {
      width: '640px',
      height: '800px'
    }
  },
  viewport5: {
    name: 'Desktop (sm) 1366x768',
    styles: {
      width: '1366px',
      height: '768px'
    }
  },
  viewport6: {
    name: 'Desktop (md) 1536x864',
    styles: {
      width: '1536px',
      height: '864px'
    }
  },
  viewport7: {
    name: 'Desktop (lg) 1920x1080',
    styles: {
      width: '1920px',
      height: '1080px'
    }
  }
}

export const parameters = {
  actions: {
    handles: ['mouseover .btn', 'click .btn']
  },
  backgrounds: { disable: true },
  viewport: {
    viewports: {
      ...customViewports
    }
  },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, { numeric: true }),
    selectedPanel: 'storybook/a11y/panel'
  },
  'data-theme-toggle': {
    querySelector: 'html',
    'data-target': 'bs-theme',
    default: 'light',
    values: {
      dark: 'dark',
      light: 'light'
    },
    lightFill: '#a05b00',
    darkFill: '#0926b5'
  },
  layout: 'fullscreen'
}

initializeRTL()

//configure(require.context('../stories', true, /\.stories\.js$/), module);
