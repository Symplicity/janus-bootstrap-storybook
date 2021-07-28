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
} from '@storybook/addon-knobs';

export default {
  title: 'Components/Filters',
  decorators: [withKnobs],
  parameters: {
    options: {
      selectedPanel: 'storybook/a11y/panel',
    },
  },
};

const filter_button_html = `
<div class="dropdown">
  <h3>Filter Button - Regular</h3>
  <div>
    <button class="btn btn-outline-secondary filter-toggle rounded-pill" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Position Type 
    </button>
    <div class="dropdown-menu shadow-sm mt-1" aria-labelledby="dropdownMenuButton2">
      <a class="dropdown-item d-flex" href="#">
        <span class="flex-fill">
          Position Type A
        </span>
      </a>
      <a class="dropdown-item d-flex" href="#">
        <span class="flex-fill">
          Position Type A
        </span>
      </a>
      <a class="dropdown-item d-flex" href="#">
        <span class="flex-fill">
          Position Type A
        </span>
      </a>
    </div>
  </div>
  <br><br>
  <h3>Filter Button - Small</h3>
  <div>
    <button class="btn btn-sm btn-outline-secondary filter-toggle rounded-pill" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Position Type 
    </button>
    <div class="dropdown-menu shadow-sm mt-1" aria-labelledby="dropdownMenuButton3">
      <a class="dropdown-item d-flex" href="#">
        <span class="flex-fill">
          Position Type A
        </span>
      </a>
      <a class="dropdown-item d-flex" href="#">
        </span>
        <span class="flex-fill">
          Position Type A
        </span>
      </a>
      <a class="dropdown-item d-flex" href="#">
        <span class="flex-fill">
          Position Type A
        </span>
      </a>
    </div>
  </div>
</div>`;

export const FilterButton = () => {
  const filter_pr = text('Dropdown Position Type - Regular', 'Position Type A');
  const filter_ps = text('Dropdown Position Type - Small', 'Position Type A');

  return `
    <div class="dropdown">
      <h3>Filter Button - Regular</h3>
      <div>
        <button class="btn btn-outline-secondary filter-toggle rounded-pill" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Position Type 
        </button>
        <div class="dropdown-menu shadow-sm mt-1" aria-labelledby="dropdownMenuButton2">
          <a class="dropdown-item d-flex" href="#">
            <span class="flex-fill">
              ${filter_pr}
            </span>
          </a>
          <a class="dropdown-item d-flex" href="#">
            <span class="flex-fill">
              ${filter_pr}
            </span>
          </a>
          <a class="dropdown-item d-flex" href="#">
            <span class="flex-fill">
              ${filter_pr}
            </span>
          </a>
        </div>
      </div>
      <br><br>
      <h3>Filter Button - Small</h3>
      <div>
        <button class="btn btn-sm btn-outline-secondary filter-toggle rounded-pill" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Position Type 
        </button>
        <div class="dropdown-menu shadow-sm mt-1" aria-labelledby="dropdownMenuButton3">
          <a class="dropdown-item d-flex" href="#">
            <span class="flex-fill">
              ${filter_ps}
            </span>
          </a>
          <a class="dropdown-item d-flex" href="#">
            <span class="flex-fill">
              ${filter_ps}
            </span>
          </a>
          <a class="dropdown-item d-flex" href="#">
            <span class="flex-fill">
              ${filter_ps}
            </span>
          </a>
        </div>
      </div>
    </div>
    `;
};

FilterButton.storyName = 'Button with Dropdown';

FilterButton.parameters = {
  notes: `
  
  #Sample Code

  \`\`\`html
  ${filter_button_html}
  \`\`\`

  `,
};
