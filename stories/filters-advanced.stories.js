import { document, setTimeout } from 'global';

import iconSprite from '../node_modules/@symplicity/tabler-icons/symplicity/tabler-sprite-nostroke.svg';

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
  radios,
} from '@storybook/addon-knobs';

export default {
  title: 'Components/Filters Advanced',
  decorators: [withKnobs],
};

const filter_button_html = `
<div class="dropdown">
      <h3>Scrollable, Multi-Level, Single-Select Filter</h3>
      <div>
        <button class="btn btn-outline-secondary filter-toggle rounded-pill" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Position Type 
        </button>
        <div class="dropdown-menu shadow-sm mt-1 pb-0 pt-0" aria-labelledby="dropdownMenuButton2">
          <form class="py-3 px-7 mb-0 bg-white border-bottom-light">
            <div class="input-group">
              <input type="search" class="form-control border-end-0" autocomplete="false" placeholder="Type to search">
              <span class="input-group-text bg-white">
                  <svg class="icon-lg-font-size">
                    <use xlink:href="/path/to/icon/sprite/#tabler-search" />
                    <span class="visually-hidden">Search</span>
                  </svg>
              </span>
            </div>
          </form>
          <ul class="list-unstyled mb-0 overflow-auto">
            <li>
              <div class="list-group">
                <a class="dropdown-item d-flex" href="#">
                  <span class="w-100">
                    All Jobs and Interviews
                  </span>
                  <span class="h4 mt-0 mb-0 me-n2">
                    <svg width="1.25rem" height="1.25rem">
                      <use xlink:href="/path/to/icon/sprite/#tabler-chevron-right" />
                    </svg>
                  </span>
                </a>
            </li>
            <li>
              <a class="dropdown-item d-flex" href="#">
                <span class="flex-fill">
                  Career Fair Postings
                </span>
              </a>
            </li>
            <li>
              <a class="dropdown-item d-flex" href="#">
                <span class="flex-fill">
                  Jobs Matching My Profile
                </span>
              </a>
            </li>
            <ul class="list-unstyled list-unstyled-repeat mb-0"></ul>
          </ul>
        </div>
      </div>
    </div>`;

export const PicklistButton = () => {
  const filter_option_1 = text('Select Option 1', 'All Jobs and Interviews');
  const filter_option_2 = text('Select Option 2', 'Career Fair Postings');
  const filter_option_3 = text('Select Option 3', 'Jobs Matching My Profile');

  const label = 'Number of items';
  const defaultValue = 15;
  const options = {
    range: true,
    min: 0,
    max: 100,
    step: 1,
  };

  const value = number(label, defaultValue, options);

  setTimeout(function () {
    const createListItems = document.querySelector('.list-unstyled-repeat');
    createListItems.innerHTML = `
        ${Array(value)
          .fill()
          .map(
            (item, i) =>
              `<li><div class="list-group"><a class="dropdown-item d-flex" href="#"><span class="flex-fill">Option ${
                i + 1
              }</span></a></div></li>`
          )
          .join('')}
    `;
  }, 0);

  return `
    <div class="dropdown">
      <h3>Scrollable, Multi-Level, Single-Select Filter</h3>
      <div>
        <button class="btn btn-outline-secondary filter-toggle rounded-pill" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Position Type 
        </button>
        <div class="dropdown-menu shadow-sm mt-1 pb-0 pt-0" aria-labelledby="dropdownMenuButton2">
          <form class="py-3 px-7 mb-0 bg-white border-bottom-light">
            <div class="input-group">
              <input type="search" class="form-control border-end-0" autocomplete="false" placeholder="Type to search">
              <span class="input-group-text bg-white">
                  <svg class="icon-lg-font-size">
                    <use xlink:href="${iconSprite}#tabler-search" />
                    <span class="visually-hidden">Search</span>
                  </svg>
              </span>
            </div>
          </form>
          <ul class="list-unstyled mb-0 overflow-auto">
            <li>
              <div class="list-group">
                <a class="dropdown-item d-flex" href="#">
                  <span class="w-100">
                    ${filter_option_1}
                  </span>
                  <span class="h4 mt-0 mb-0 me-n2">
                    <svg width="1.25rem" height="1.25rem">
                      <use xlink:href="${iconSprite}#tabler-chevron-right" />
                    </svg>
                  </span>
                </a>
            </li>
            <li>
              <a class="dropdown-item d-flex" href="#">
                <span class="flex-fill">
                  ${filter_option_2}
                </span>
              </a>
            </li>
            <li>
              <a class="dropdown-item d-flex" href="#">
                <span class="flex-fill">
                  ${filter_option_3}
                </span>
              </a>
            </li>
            <ul class="list-unstyled list-unstyled-repeat mb-0"></ul>
          </ul>
        </div>
      </div>
    </div>
    `;
};

PicklistButton.storyName = 'Multi-Level, Single-Select';

PicklistButton.parameters = {
  notes: `
  
  #Sample Code

  \`\`\`html
  ${filter_button_html}
  \`\`\`

  `,
};
