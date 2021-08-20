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

const drilldown_button_parent_html = `
    <div class="dropdown">
      <h3>Drilldown Parent</h3>
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
                    <use xlink:href="/path/to/icon-sprite.svg#tabler-search" />
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
                      <use xlink:href="/path/to/icon-sprite.svg#tabler-chevron-right" />
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

export const FilterButtonParent = () => {
  const drilldown_option_1 = text('Select Option 1', 'All Jobs and Interviews');
  const drilldown_option_2 = text('Select Option 2', 'Career Fair Postings');
  const drilldown_option_3 = text(
    'Select Option 3',
    'Jobs Matching My Profile'
  );

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
      <h3>Drilldown Parent</h3>
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
                    ${drilldown_option_1}
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
                  ${drilldown_option_2}
                </span>
              </a>
            </li>
            <li>
              <a class="dropdown-item d-flex" href="#">
                <span class="flex-fill">
                  ${drilldown_option_3}
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

FilterButtonParent.storyName = 'Drilldown Parent';

FilterButtonParent.parameters = {
  notes: `
  
  #Sample Code

  \`\`\`html
  ${drilldown_button_parent_html}
  \`\`\`

  `,
};

const drilldown_button_child_html = `
    <div class="dropdown">
      <h3>Drilldown Child</h3>
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
                    <use xlink:href="/path/to/icon-sprite.svg#tabler-search" />
                    <span class="visually-hidden">Search</span>
                  </svg>
              </span>
            </div>
          </form>
          <ul class="list-unstyled mb-2 overflow-auto">
            <li class="mb-0">
              <div class="list-group">
                <a class="dropdown-item d-flex border border-2 border-light border-start-0 border-end-0" href="#">
                  <span class="h4 mt-0 mb-0 ms-n2 ">
                    <svg width="1.25rem" height="1.25rem">
                      <use xlink:href="/path/to/icon-sprite.svg#tabler-chevron-left" />
                    </svg>
                  </span>
                  <span class="w-100 text-center">
                    Category 1.3
                  </span>
                </a>
            </li>
          </ul>
          <ul class="list-unstyled mb-0 overflow-auto">
            <li>
              <div class="list-group">
                <a class="dropdown-item d-flex" href="#">
                  <span class="w-100">
                    Category 1.3.1
                  </span>
                  <span class="h4 mt-0 mb-0 me-n2">
                    <svg width="1.25rem" height="1.25rem">
                      <use xlink:href="/path/to/icon-sprite.svg#tabler-chevron-right" />
                    </svg>
                  </span>
                </a>
            </li>
            <li>
              <a class="dropdown-item d-flex" href="#">
                <span class="flex-fill">
                  Category 1.3.2
                </span>
              </a>
            </li>
            <li>
              <a class="dropdown-item d-flex" href="#">
                <span class="flex-fill">
                  Category 1.3.3
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>`;

export const FilterButtonChild = () => {
  const drilldown_parent = text('Parent Item', 'Category 1.3.1');
  const drilldown_child_option_1 = text('Child Item 1', 'Category 1.3.1');
  const drilldown_child_option_2 = text('Child Item 2', 'Category 1.3.2');
  const drilldown_child_option_3 = text('Child Item 3', 'Category 1.3.3');

  return `
    <div class="dropdown">
      <h3>Drilldown Child</h3>
      <div>
        <button class="btn btn-outline-secondary filter-toggle rounded-pill" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          ${drilldown_parent} 
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
          <ul class="list-unstyled mb-2 overflow-auto">
            <li class="mb-0">
              <div class="list-group">
                <a class="dropdown-item d-flex border border-2 border-light border-start-0 border-end-0" href="#">
                  <span class="h4 mt-0 mb-0 ms-n2 ">
                    <svg width="1.25rem" height="1.25rem">
                      <use xlink:href="${iconSprite}#tabler-chevron-left" />
                    </svg>
                  </span>
                  <span class="w-100 text-center">
                    ${drilldown_parent}
                  </span>
                </a>
            </li>
          </ul>
          <ul class="list-unstyled mb-0 overflow-auto">
            <li>
              <div class="list-group">
                <a class="dropdown-item d-flex" href="#">
                  <span class="w-100">
                    ${drilldown_child_option_1}
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
                  ${drilldown_child_option_2}
                </span>
              </a>
            </li>
            <li>
              <a class="dropdown-item d-flex" href="#">
                <span class="flex-fill">
                  ${drilldown_child_option_3}
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    `;
};

FilterButtonChild.storyName = 'Drilldown Child';

FilterButtonChild.parameters = {
  notes: `
  
  #Sample Code

  \`\`\`html
  ${drilldown_button_child_html}
  \`\`\`

  `,
};
