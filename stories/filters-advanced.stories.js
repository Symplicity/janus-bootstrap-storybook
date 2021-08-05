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
  <h3>Button with Dropdown</h3>
  <div>
    <button class="btn btn-outline-secondary filter-toggle rounded-pill" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      All Jobs and Interviews
    </button>
    <div class="dropdown-menu shadow-sm mt-1" aria-labelledby="dropdownMenuButton2">
      <a class="dropdown-item d-flex" href="#">
        <span class="flex-fill">
          All Jobs and Interviews
        </span>
      </a>
      <a class="dropdown-item d-flex" href="#">
        <span class="flex-fill">
          Career Fair Postings
        </span>
      </a>
      <a class="dropdown-item d-flex" href="#">
        <span class="flex-fill">
          Jobs Matching My Profile
        </span>
      </a>
    </div>
  </div>
</div>`;

export const PicklistButton = () => {
  const filter_option_1 = text('Select Option 1', 'All Jobs and Interviews');
  const filter_option_2 = text('Select Option 2', 'Career Fair Postings');
  const filter_option_3 = text('Select Option 3', 'Jobs Matching My Profile');

  return `
    <div class="dropdown">
      <h3>Button with Dropdown (same as Filters Basic version)</h3>
      <div>
        <button class="btn btn-outline-secondary filter-toggle rounded-pill" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Position Type 
        </button>
        <div class="dropdown-menu shadow-sm mt-1" aria-labelledby="dropdownMenuButton2">
          <a class="dropdown-item d-flex" href="#">
            <span class="flex-fill">
              ${filter_option_1}
            </span>
          </a>
          <a class="dropdown-item d-flex" href="#">
            <span class="flex-fill">
              ${filter_option_2}
            </span>
          </a>
          <a class="dropdown-item d-flex" href="#">
            <span class="flex-fill">
              ${filter_option_3}
            </span>
          </a>
        </div>
      </div>
    </div>
    `;
};

PicklistButton.storyName = 'Button with Dropdown';

PicklistButton.parameters = {
  notes: `
  
  #Sample Code

  \`\`\`html
  ${filter_button_html}
  \`\`\`

  `,
};
