import { document, setTimeout } from 'global';

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
  title: 'Components/Tabs',
  decorators: [withKnobs],
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

let tabs_html = `
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active <span class="badge bg-light text-dark rounded-circle">44</span></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li>
</ul>
`;


export const story1 = () => { 

  const container = $('<div class="text-center" style="margin-top:100px"></div>').append(tabs_html);
  
  setTimeout(function() {
    $(function() {
      container.find('[data-bs-toggle="popover"]').popover();
    });
  },0)
  
  return container[0]; 
    
};
story1.storyName = 'Tabs';

story1.parameters = { 
  notes: `

    #Tabs

    ###HTML

    \`\`\`html
    ${tabs_html}
    \`\`\`
    
    ###JavaScript (Bootstrap/jQuery)
    Call the popover plugin function for each popover.

    \`\`\`js
    $('[data-bs-toggle="popover"]').popover();
    \`\`\`
    
    ${moreDocumentation}
    
  `
};




