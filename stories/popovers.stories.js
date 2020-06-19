import { document, setTimeout } from 'global';
import { withA11y } from '@storybook/addon-a11y';

import $ from 'jquery';
window.jQuery = window.$ = $;

import {
  array,
  boolean,
  button,
  color,
  date,
  select,
  withKnobs,
  text,
  number,
} from '@storybook/addon-knobs';

export default {
  title: 'Components|Popovers',
  decorators: [withA11y,withKnobs],
  parameters: {
    options: {
      selectedPanel: 'storybook/a11y/panel',
    },
  },
};

const moreDocumentation = `
#Additional Documentation
For additional documentation, see:

- Bootstrap Documentation
- Design System 

`;

let popovers_html = `
<button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
Popover on top
</button>

<button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
Popover on right
</button>

<button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
Popover on bottom
</button>

<button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
Popover on left
</button>`;



export const story1 = () => { 

  const container = $('<div class="text-center" style="margin-top:100px"></div>').append(popovers_html);
  
  setTimeout(function() {
     container.find('[data-toggle="popover"]').popover();
   },0)
  
  return container[0]; 
    
};
story1.story = { 
    name: 'Popovers',
    parameters: { 
      notes: `

        #Declarative Popovers

        ###HTML

        \`\`\`html
        ${popovers_html}
        \`\`\`
        
        ###JavaScript (Bootstrap/jQuery)
        Call the popover plugin function for each popover.

        \`\`\`js
        $('[data-toggle="popover"]').popover();
        \`\`\`
        
        ${moreDocumentation}
        
      `
    }
  
};




