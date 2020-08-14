const text = 'Unified Design System';

export default {
  title: 'Components/Border Radius',
  parameters: {
    options: { selectedPanel: 'storybook/a11y/panel' },
    notes: 'Use alerts to provide feedback to the user.',
  },
};

const borderRadiusHTML = `
  <div>
    <svg class="bd-placeholder-img rounded" width="75" height="75" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Example small rounded image: 75x75">
      <title>Example small rounded image</title>
      <rect width="100%" height="100%" fill="#868e96"></rect>
      <text x="16%" y="40%" fill="#dee2e6" dy=".3em">Default</text>
      <text x="33%" y="65%" fill="#dee2e6" dy=".3em">4px</text>
    </svg>
  </div>
  <br>
  <div>
    <svg class="bd-placeholder-img rounded-sm" width="75" height="75" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Example small rounded image: 75x75">
      <title>Example small rounded image</title>
      <rect width="100%" height="100%" fill="#868e96"></rect>
      <text x="25%" y="40%" fill="#dee2e6" dy=".3em">Small</text>
      <text x="35%" y="65%" fill="#dee2e6" dy=".3em">2px</text>
    </svg>
  </div>
  <br>
  <div>
    <svg class="bd-placeholder-img rounded-lg" width="75" height="75" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Example small rounded image: 75x75">
      <title>Example large rounded image</title>
      <rect width="100%" height="100%" fill="#868e96"></rect>
      <text x="25%" y="40%" fill="#dee2e6" dy=".3em">Large</text>
      <text x="35%" y="65%" fill="#dee2e6" dy=".3em">2px</text>
    </svg>
  </div>
  <br>
  <div>
    <svg class="bd-placeholder-img rounded-xl" width="75" height="75" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Example small rounded image: 75x75">
      <title>Example extra large rounded image</title>
      <rect width="100%" height="100%" fill="#868e96"></rect>
      <text x="15%" y="40%" fill="#dee2e6" dy=".3em">XLarge</text>
      <text x="35%" y="65%" fill="#dee2e6" dy=".3em">6px</text>
    </svg>
  </div>
</div>`;
export const BorderRadius = () => borderRadiusHTML;

BorderRadius.storyName = 'Sizes';

BorderRadius.parameters = {
  notes: `
  ##Sizes

  Default (.rounded) - .25rem / 4px

  Small (.rounded-sm) - .125rem / 2px

  Large (.rounded-lg) - .188rem / 3.008px

  Xlarge (.rounded-xl) - .375rem / 6px

  ##Sample Code
  
  \`\`\`html
  ${borderRadiusHTML}
  \`\`\`
  `
};
