import { document, setTimeout } from 'global';

import iconSprite from '../node_modules/@symplicity/tabler-icons/symplicity/tabler-sprite-nostroke.svg';

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
  title: 'Components/Avatars',
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

let avatars_html = `
<div class="container">
  <div class="row">
    <div class="col">
      <button class="avatar avatar-sm avatar-text rounded-circle bg-pale-blue" type="button">
        <span class="text-white">WW</span>
      </button>
    </div>
    <div class="col">
      <button class="avatar avatar-sm avatar-image rounded-circle" type="button">
        <img role="button" class="" src="https://www.edge.org/sites/default/files/styles/member-photo/public/member-pictures/picture-510-1416068804.jpg?itok=cnAQyDr5" alt="...">
      </button>
    </div>
    <div class="col">
      <button class="avatar avatar-sm avatar-icon rounded bg-pale-purple" type="button">
        <svg class="text-white">
          <use xlink:href="${iconSprite}#tabler-briefcase" />
          <span class="visually-hidden">Work</span>
        </svg>
      </button>
    </div>
    <div class="col">
      <button class="avatar avatar-sm avatar-image rounded" type="button">
        <img role="button" class="" src="https://cdn.shopify.com/s/files/1/1846/4053/products/tesla_black-800_600x.jpg" alt="...">
      </button>
    </div>
  </div>
</div>
`;


export const story1 = () => { 

  const container = $('<div class="text-center" style="margin-top:100px"></div>').append(avatars_html);
  
  return container[0]; 
    
};
story1.storyName = 'Avatars';

story1.parameters = { 
  notes: `

    # Custom Avatars

    ###HTML

    \`\`\`html
    ${avatars_html}
    \`\`\`
    
    ${moreDocumentation}
    
  `
};




