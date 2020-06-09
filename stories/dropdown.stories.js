import { document, setTimeout } from 'global';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Components|Dropdown',
  decorators: [withA11y],
  parameters: {
    options: {
      selectedPanel: 'storybook/a11y/panel',
    },
  },
};

const dropdown_html = `<div class="dropdown">
  <button class="btn btn-lg btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Primary 
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#"><i class="icn-search mr-2 mt-1 float-left"></i>Chad Hampton</a>
    <a class="dropdown-item" href="#"><i class="icn-search mr-2 mt-1 float-left"></i>Chad Hampton</a>
    <a class="dropdown-item" href="#"><i class="icn-search mr-2 mt-1 float-left"></i>Chad Hampton</a>    
  </div>
</div>`;

export const story5 = () => `<div class="container-fluid">${dropdown_html}</div>`;

story5.story = { 
    name: 'Dropdown',
    parameters: { 
      notes: `
      
      #Sample Code

      \`\`\`html
      ${dropdown_html}
      \`\`\`

      `
    }
  
};



