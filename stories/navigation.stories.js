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
  title: 'Components/Navigation',
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

const navigation_html = `
    <div class="d-block bg-white m-0 pt-0">
      <header class="main-nav d-block navbar navbar-light shadow-lg" style="max-width: 1400px; margin: 0 auto; background: #fff">
        <div class="d-flex justify-content-between align-items-center">
          <div class="d-flex align-items-center">
            <button class="border-0 navbar-toggler btn btn-action btn-action-icon-only btn-action-header ms-8 me-7" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <svg width="1rem" height="1rem">
                <use xlink:href="${iconSprite}#tabler-menu-2" />
              </svg>
            </button>
            <svg class="bd-placeholder-img d-none d-md-block" width="170" height="64" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">170x64</text></svg>
          </div>
        </div>
      </header>
      <nav class="main-nav collapse navbar-collapse bg-light mt-0" id="navbarNav">
        <ul class="navbar-nav p-0">
          <li class="nav-item">
            <a class="nav-link p-7 w-100 active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link p-7 w-100" href="#">Link</a>
          </li>
        </ul>
      </nav>
    </div>
`

export const Navigation = () => `${navigation_html}`;

Navigation.storyName = 'Navigation';

Navigation.parameters = { 
  notes: `

    ###HTML

    \`\`\`html
    ${navigation_html}
    \`\`\`
    
  `
};




