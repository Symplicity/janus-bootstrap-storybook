import { document, setTimeout } from 'global';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Components|Menus',
  decorators: [withA11y],
  parameters: {
    options: {
      selectedPanel: 'storybook/a11y/panel',
    },
  },
};

const menu_basic_html = `<div class="dropdown-menu show" style="position: relative; top: 0;">
  <a class="dropdown-item" href="#">Action</a>
  <a class="dropdown-item" href="#">Another action</a>
  <a class="dropdown-item" href="#">Something else here</a>
</div>
<div class="dropdown-menu show" style="position: relative; top: 0; left: 20px; max-width: 400px;">
  <a class="dropdown-item text-truncate" href="#">Seven Steps For Keeping Teeth Healthy For Animals</a>
  <a class="dropdown-item" href="#">Forward</a>
  <a class="dropdown-item" href="#">Process</a>
</div>`;

export const MenuBasic = () => `<div class="container-fluid">${menu_basic_html}</div>`;

MenuBasic.story = { 
    name: 'Menu Basic',
    parameters: { 
      notes: `
      
      #Sample Code

      \`\`\`html
      ${menu_basic_html}
      \`\`\`

      `
    }
  
};



