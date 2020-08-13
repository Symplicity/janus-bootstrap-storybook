module.exports = {
  stories: ['../stories/*.stories.js'],
  addons: [
      '@storybook/addon-a11y',
      {
        name: '@storybook/addon-essentials',
          options: {
            docs: false,
            controls: false
          }
      },
      '@storybook/addon-events',
      '@storybook/addon-knobs',
      '@storybook/addon-links',
      '@storybook/addon-notes',
      '@storybook/addon-options',
      'storybook-addon-rtl',
      '@storybook/addon-storysource',
  ]
}
