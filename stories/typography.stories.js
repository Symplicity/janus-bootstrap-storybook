import { document, setTimeout } from 'global';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Components|Typography',
  decorators: [withA11y],
  parameters: {
    options: {
      selectedPanel: 'storybook/a11y/panel',
    },
  },
};

const typography_html = `<div class="typography">
    <h1>h1. Bootstrap heading</h1>
    <h2>h2. Bootstrap heading</h2>
    <h3>h3. Bootstrap heading</h3>
    <h4>h4. Bootstrap heading</h4>
    <h5>h5. Bootstrap heading</h5>
    <h6>h6. Bootstrap heading</h6>
</div>`;
export const story = () => `<div class="container-fluid">${typography_html}</div>`;

story.story = { 
    name: 'Typography',
    parameters: { 
      notes: `
      
      #Sample Code

      \`\`\`html
      ${typography_html}
      \`\`\`

      `
    }
  
};



