import { withA11y } from '@storybook/addon-a11y';

const text = 'Unified Design System';

export default {
  title: 'Components|Border Radius',
  decorators: [withA11y],
  parameters: {
    options: { selectedPanel: 'storybook/a11y/panel' },
    notes: 'Use alerts to provide feedback to the user.',
  },
};

const borderRadiusDefaultHTML = `
  <div>
    <svg class="bd-placeholder-img rounded" width="75" height="75" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Example small rounded image: 75x75">
      <title>Example small rounded image</title>
      <rect width="100%" height="100%" fill="#868e96"></rect>
      <text x="22%" y="50%" fill="#dee2e6" dy=".3em">75x75</text>
    </svg>
</div>`;
   
export const BorderRadiusDefault = () => borderRadiusSmHTML;

BorderRadiusDefault.story = {
  name: 'Default',
  parameters: {
    notes: `
    #Border Radius Default
      
	.188rem / 3.008
    
    ##Sample Code
    
    \`\`\`html
    ${borderRadiusDefaultHTML}
    \`\`\`
    `
  },
};

const borderRadiusSmHTML = `
  <div>
    <svg class="bd-placeholder-img rounded-sm" width="75" height="75" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Example small rounded image: 75x75">
      <title>Example small rounded image</title>
      <rect width="100%" height="100%" fill="#868e96"></rect>
      <text x="22%" y="50%" fill="#dee2e6" dy=".3em">75x75</text>
    </svg>
</div>`;
   
export const BorderRadiusSm = () => borderRadiusSmHTML;

BorderRadiusSm.story = {
  name: 'Small',
  parameters: {
    notes: `
    #Border Radius Small
      
    .125rem / 2px
    
    ##Sample Code
    
    \`\`\`html
    ${borderRadiusSmHTML}
    \`\`\`
    `
  },
};


const borderRadiusLgHTML = `
  <div>
    <svg class="bd-placeholder-img rounded-lg" width="75" height="75" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Example large rounded image: 75x75">
      <title>Example large rounded image</title>
      <rect width="100%" height="100%" fill="#868e96"></rect>
      <text x="22%" y="50%" fill="#dee2e6" dy=".3em">75x75</text>
    </svg>
</div>`;

export const BorderRadiusLg = () => borderRadiusLgHTML;

BorderRadiusLg.story = {
  name: 'Large',
  parameters: {
    notes: `
    #Border Radius Large
      
    .188rem / 3.008
    
    ##Sample Code
    
    \`\`\`html
    ${borderRadiusLgHTML}
    \`\`\`
    `
  },
};

/*
<p>Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the eight <strong>required</strong> contextual classes (e.g., <code class="highlighter-rouge">.alert-success</code>). For inline dismissal, use the <a href="#dismissing">alerts jQuery plugin</a>.</p>

<h2 id="symp-toasts"><div>Symp Toasts<a class="anchorjs-link " href="#symp-toasts" aria-label="Anchor" data-anchorjs-icon="#" style="padding-left: 0.375em;"></a></div></h2>

<div class="alert toast alert-danger" role="alert">
  Error message toast.<button type="button" class="btn btn-link">Action</button>
</div>
<p><br></p>
<div class="alert toast alert-success" role="alert">
  Your application has been submitted.<button type="button" class="btn btn-link">Undo</button>
</div>
<p><br></p>
<div class="alert toast alert-neutral" role="alert">
  Your reservation has been cancelled.<button class="btn-link" href="javascript:;">Undo</button>
</div>
*/
