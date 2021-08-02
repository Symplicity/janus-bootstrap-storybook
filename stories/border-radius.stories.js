const text = 'Unified Design System';

export default {
  title: 'Components/Border Radius',
};

const borderRadiusHTML = `
<div>
  <div>
    <svg class="bd-placeholder-img rounded-0" width="75" height="75" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Example small rounded image: 75x75">
      <title>Example zero rounded image</title>
      <rect width="100%" height="100%" fill="#868e96"></rect>
      <text x="50%" y="40%" fill="#dee2e6" dy=".3em">Zero</text>
      <text x="50%" y="65%" fill="#dee2e6" dy=".3em">0px</text>
    </svg>
  </div>
  <br>
  <div>
    <svg class="bd-placeholder-img rounded-1" width="75" height="75" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Example small rounded image: 75x75">
      <title>Example small rounded image</title>
      <rect width="100%" height="100%" fill="#868e96"></rect>
      <text x="50%" y="40%" fill="#dee2e6" dy=".3em">Small</text>
      <text x="50%" y="65%" fill="#dee2e6" dy=".3em">2px</text>
    </svg>
  </div>
  <br>
  <div>
    <svg class="bd-placeholder-img rounded-2" width="75" height="75" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Example small rounded image: 75x75">
      <title>Example default rounded image</title>
      <rect width="100%" height="100%" fill="#868e96"></rect>
      <text x="50%" y="40%" fill="#dee2e6" dy=".3em">Default</text>
      <text x="50%" y="65%" fill="#dee2e6" dy=".3em">4px</text>
    </svg>
  </div>
  <br>
  <div>
    <svg class="bd-placeholder-img rounded-3" width="75" height="75" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Example small rounded image: 75x75">
      <title>Example large rounded image</title>
      <rect width="100%" height="100%" fill="#868e96"></rect>
      <text x="50%" y="40%" fill="#dee2e6" dy=".3em">Large</text>
      <text x="50%" y="65%" fill="#dee2e6" dy=".3em">3.008px</text>
    </svg>
  </div>
  <br>
  <div>
    <svg class="bd-placeholder-img rounded-circle" width="75" height="75" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Example small rounded image: 75x75">
      <title>Example circle rounded image</title>
      <rect width="100%" height="100%" fill="#868e96"></rect>
      <text x="50%" y="40%" fill="#dee2e6" dy=".3em">Circle</text>
      <text x="50%" y="65%" fill="#dee2e6" dy=".3em">50%</text>
    </svg>
  </div>
  <br>
  <div>
    <svg class="bd-placeholder-img rounded-pill" width="75" height="75" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Example small rounded image: 75x75">
      <title>Example pill rounded image</title>
      <rect width="100%" height="100%" fill="#868e96"></rect>
      <text x="50%" y="40%" fill="#dee2e6" dy=".3em">Pill</text>
      <text x="50%" y="65%" fill="#dee2e6" dy=".3em">50%</text>
    </svg>
  </div>
</div>`;
export const BorderRadius = () => borderRadiusHTML;

BorderRadius.storyName = 'Sizes';

BorderRadius.parameters = {
  notes: `
  ##Sizes

  Small (.rounded-1) - .125rem / 2px

  Default (.rounded-2) - .25rem / 4px

  Large (.rounded-3) - .188rem / 3.008px

  Circle (.rounded-circle) - 50%

  Pill (.rounded-pill) - 50%

  ##Sample Code
  
  \`\`\`html
  ${borderRadiusHTML}
  \`\`\`
  `
};
