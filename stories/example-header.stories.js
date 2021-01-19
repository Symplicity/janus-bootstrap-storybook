import { document, setTimeout } from 'global';

import iconSprite from '../node_modules/@tabler/icons/tabler-sprite.svg';

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
  title: 'Examples/Layout/Header',
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

let header_html = `
<div class="d-block bg-light">
  <nav class="d-block navbar navbar-light" style="max-width: 1400px; margin: 0 auto;">
    <div class="d-flex justify-content-between align-items-center">
      <div class="d-flex">
        <button class="border-0 navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <svg width="1rem" height="1rem">
            <use xlink:href="${iconSprite}#tabler-menu-2" />
          </svg>
        </button>
        <svg class="bd-placeholder-img" width="170" height="64" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">170x64</text></svg>
      </div>
      <div class="d-flex">
        <div class="input-group">
          <span class="input-group-text">$</span>
          <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
          <span class="input-group-text">$</span>
        </div>
      </div>
      <div class="d-flex">
        <button class="btn btn-action btn-action-icon-only btn-action-header me-7" type="button">
          <svg class="icon-lg-font-size mt-n1">
            <use xlink:href="${iconSprite}#tabler-star" />
            <span class="visually-hidden">More Actions</span>
          </svg>
        </button>
        <button class="btn btn-action btn-action-icon-only btn-action-header me-7" type="button">
          <svg class="icon-lg-font-size mt-n1">
            <use xlink:href="${iconSprite}#tabler-pencil" />
            <span class="visually-hidden">More Actions</span>
          </svg>
        </button>
        <button type="button" class="btn btn-action btn-action-icon-only btn-action-header me-7 me-lg-9" data-bs-toggle="dropdown" aria-expanded="false" id="dropdownMenuButton1" data-bs-toggle="dropdown">
          <svg class="icon-lg-font-size mt-n1">
            <use xlink:href="${iconSprite}#tabler-dots" />
            <span class="visually-hidden">More Actions</span>
          </svg>
        </button>
        <ul class="dropdown-menu dropdown-menu-end shadow-sm mt-1" aria-labelledby="dropdownMenuButton1" >
          <li>
            <a class="dropdown-item d-flex" href="#">
              Add to Career Portfolio
            </a>
          </li>
          <li>
            <a class="dropdown-item d-flex" href="#">
              Remove QR Code
            </a>
          </li>
          <li>
            <a class="dropdown-item d-flex" href="#">
              View as Word
            </a>
          </li>
          <li><hr class="dropdown-divider"></li>
          <li>
            <a class="dropdown-item d-flex text-danger" href="#">
              Delete
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>
`;



export const story1 = () => { 

  const container = $('<div style="margin: 100px -1rem 0;"></div>').append(header_html);
 
  /*
  setTimeout(function() {
    $(function() {
      container.find('[data-bs-toggle="popover"]').popover();
    });
  },0)
  */
  
  return container[0]; 
    
};
story1.storyName = 'Header';

story1.parameters = { 
  notes: `

    #Declarative Popovers

    ###HTML

    \`\`\`html
    ${header_html}
    \`\`\`
    
    ###JavaScript (Bootstrap/jQuery)
    Call the popover plugin function for each popover.

    \`\`\`js
    $('[data-bs-toggle="popover"]').popover();
    \`\`\`
    
    ${moreDocumentation}
    
  `
};




