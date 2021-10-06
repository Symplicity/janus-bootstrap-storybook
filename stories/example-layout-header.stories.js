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
  title: 'Examples/Layout/Header',
  decorators: [withKnobs],
};

const moreDocumentation = `
#Additional Documentation
For additional documentation, see:

- Bootstrap Documentation
- Design System 

`;

let header_html = `
<header class="d-block">
  <nav class="d-block navbar navbar-light bg-white shadow-lg" style="max-width: 1400px; margin: 0 auto;">
    <div class="d-flex justify-content-between align-items-center">
      <div class="d-flex align-items-center">
        <button class="main-nav-trigger border-0 navbar-toggler btn btn-action btn-action-icon-only btn-action-header ms-7 me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <svg width="1rem" height="1rem">
            <use xlink:href="/path/to/icon-sprite.svg#tabler-menu-2" />
          </svg>
        </button>
        <svg class="bd-placeholder-img d-none d-md-block" width="170" height="64" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">170x64</text></svg>
      </div>
      <div class="d-flex">
        <div class="input-group d-none d-md-flex">
          <span class="input-group-text">$</span>
          <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
          <span class="input-group-text">$</span>
        </div>
      </div>
      <div class="d-flex me-7 me-md-0">
        <button class="rounded-circle btn btn-action btn-action-icon-only btn-action-header me-7" type="button">
          <svg class="icon-xl-font-size mt-n1">
            <use xlink:href="/path/to/icon-sprite.svg#tabler-star" />
            <span class="visually-hidden">More Actions</span>
          </svg>
        </button>
        <button class="rounded-circle btn btn-action btn-action-icon-only btn-action-header me-7" type="button">
          <svg class="icon-xl-font-size mt-n1">
            <use xlink:href="/path/to/icon-sprite.svg#tabler-pencil" />
            <span class="visually-hidden">More Actions</span>
          </svg>
        </button>
        <button type="button" class="btn btn-action btn-action-icon-only btn-action-header rounded-circle border border-dark w-auto h-auto me-1 me-md-9"  data-bs-toggle="dropdown" aria-expanded="false" id="dropdownMenuButton1">
          <img role="button" class="rounded-circle border border-white icon-xxl-font-size" src="https://www.edge.org/sites/default/files/styles/member-photo/public/member-pictures/picture-510-1416068804.jpg?itok=cnAQyDr5" alt="...">
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
          <li><div class="dropdown-divider"></div></li>
          <li>
            <a class="dropdown-item d-flex text-danger" href="#">
              Delete
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>
`;

export const LayoutHeader = () => {
  const header_bg_color = text('Header BG Color', '#ffffff');

  const container = $('<div style="margin: 100px -1rem 0;"></div>').append(
    header_html
  );

  return `
    <header class="d-block">
      <nav class="d-block navbar navbar-light bg-white shadow-lg" style="max-width: 1400px; margin: 0 auto; background: ${header_bg_color}">
        <div class="d-flex justify-content-between align-items-center">
          <div class="d-flex align-items-center">
            <button class="main-nav-trigger border-0 navbar-toggler btn btn-action btn-action-icon-only btn-action-header ms-7 me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <svg width="1rem" height="1rem">
                <use xlink:href="${iconSprite}#tabler-menu-2" />
              </svg>
            </button>
            <svg class="bd-placeholder-img d-none d-md-block" width="170" height="64" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">170x64</text></svg>
          </div>
          <div class="d-flex">
            <div class="input-group d-none d-md-flex">
              <span class="input-group-text">$</span>
              <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
              <span class="input-group-text">$</span>
            </div>
          </div>
          <div class="d-flex me-7 me-md-0">
            <button class="rounded-circle btn btn-action btn-action-icon-only btn-action-header me-7" type="button">
              <svg class="icon-xl-font-size mt-n1">
                <use xlink:href="${iconSprite}#tabler-star" />
                <span class="visually-hidden">More Actions</span>
              </svg>
            </button>
            <button class="rounded-circle btn btn-action btn-action-icon-only btn-action-header me-7" type="button">
              <svg class="icon-xl-font-size mt-n1">
                <use xlink:href="${iconSprite}#tabler-pencil" />
                <span class="visually-hidden">More Actions</span>
              </svg>
            </button>
            <button type="button" class="btn btn-action btn-action-icon-only btn-action-header rounded-circle border border-dark w-auto h-auto me-1 me-md-9"  data-bs-toggle="dropdown" aria-expanded="false" id="dropdownMenuButton1">
              <img role="button" class="rounded-circle border border-white icon-xxl-font-size" src="https://www.edge.org/sites/default/files/styles/member-photo/public/member-pictures/picture-510-1416068804.jpg?itok=cnAQyDr5" alt="...">
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
              <li><div class="dropdown-divider"></div></li>
              <li>
                <a class="dropdown-item d-flex text-danger" href="#">
                  Delete
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  `;
};
LayoutHeader.storyName = 'Header';

LayoutHeader.parameters = {
  notes: `

    #Declarative Popovers

    ###HTML

    \`\`\`html
    ${header_html}
    \`\`\`
    
  `,
};
