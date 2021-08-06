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
  title: 'Components/Filters Basic',
  decorators: [withKnobs],
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

const all_filters_button_html = `
<h3>All Filters Button</h3>
<button class="btn btn-outline-secondary filter-toggle rounded-pill" type="button" id="dropdownMenuButton2"  data-bs-toggle="modal" data-bs-target="#exampleModal">
  <span>
    <svg width="1rem" height="1rem" class="mt-n1">
      <use xlink:href="${iconSprite}#tabler-adjustments-horizontal" />
    </svg>
  </span>
  All Filters
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" aria-modal="true" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <div class="d-sm-flex d-grid gap-6 w-100 m-0 justify-content-sm-end">
          <div class="d-xs-block">
            <button type="button" class="btn btn-outline-secondary w-100" data-bs-dismiss="modal">Close</button>
          </div>
          <div class="d-xs-block">
            <button type="button" class="btn btn-primary w-100">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>`;

export const AllFiltersButton = () => `<div>${all_filters_button_html}</div>`;

AllFiltersButton.storyName = 'All Filters with Modal';

AllFiltersButton.parameters = {
  notes: `
  
  #Sample Code

  \`\`\`html
  ${all_filters_button_html}
  \`\`\`

  `,
};

const toggle_filter_button_html = `
<h3>Toggle Filter Button (Checkbox)</h3>
<input type="checkbox" class="btn-check" id="btn-check" autocomplete="off">
<label class="btn btn-outline-secondary filter-toggle rounded-pill" for="btn-check">Remote</label>
<br><br>
<h3>Toggle Filter Button (Button)</h3>
<button class="btn btn-outline-secondary filter-toggle rounded-pill">Remote</button>
<br><br>
<button class="btn btn-outline-secondary filter-toggle rounded-pill active">Remote</button>
`;

export const ToggleFilterButton = () => {
  const checkbox_label = 'Checked';
  const checkbox_options = {
    Checked: 'checked',
    Unchecked: '',
  };
  const checkbox_checked = radios(checkbox_label, checkbox_options);

  const button_label = 'Active';
  const button_options = {
    Active: 'active',
    Inactive: '',
  };
  const button_active = radios(button_label, button_options);

  return `
    <div>
      <h3>Toggle Filter Button (Checkbox)</h3>
      <input type="checkbox" class="btn-check" id="btn-check" autocomplete="off" ${checkbox_checked}>
      <label class="btn btn-outline-secondary filter-toggle rounded-pill" for="btn-check">Remote</label>
      <br><br>
      <h3>Toggle Filter Button (Button)</h3>
      <button class="btn btn-outline-secondary filter-toggle rounded-pill ${button_active}">Remote</button>
    </div>
  `;
};

ToggleFilterButton.storyName = 'Toggle';

ToggleFilterButton.parameters = {
  notes: `
  
  #Sample Code

  \`\`\`html
  ${toggle_filter_button_html}
  \`\`\`

  `,
};

const toggle_filter_with_ellipsis_button_html = `
<h3>Toggle Filter with Ellipsis Button (Checkbox)</h3>
<input type="checkbox" class="btn-check" id="btn-check" autocomplete="off">
<label class="btn btn-outline-secondary filter-toggle rounded-pill  text-truncate" for="btn-check">EL Internship Fast Track (no results found)</label>
<br><br>
<h3>Toggle Filter Button with Ellipsis (Button)</h3>
<button class="btn btn-outline-secondary filter-toggle rounded-pill text-truncate">EL Internship Fast Track (no results found)</button>
<br><br>
<button class="btn btn-outline-secondary filter-toggle rounded-pill active">Remote</button>
`;

export const ToggleFilterWithEllipsisButton = () => {
  const checkbox_label = 'Checked';
  const checkbox_options = {
    Checked: 'checked',
    Unchecked: '',
  };
  const checkbox_checked = radios(checkbox_label, checkbox_options);

  const button_label = 'Active';
  const button_options = {
    Active: 'active',
    Inactive: '',
  };
  const button_active = radios(button_label, button_options);

  const label = 'max-width (px):';
  const defaultValue = 300;
  const options = {
    range: true,
    min: 50,
    max: 400,
    step: 1,
  };

  const max_width_active = number(label, defaultValue, options);

  return `
    <div>
      <h3>Toggle Filter with Ellipsis Button (Checkbox)</h3>
      <input type="checkbox" class="btn-check" id="btn-check" autocomplete="off" ${checkbox_checked}>
      <label class="btn btn-outline-secondary filter-toggle rounded-pill text-truncate" for="btn-check" style="max-width: ${max_width_active}px;">EL Internship Fast Track (no results found)</label>
      <br><br>
      <h3>Toggle Filter Button with Ellipsis (Button)</h3>
      <button class="btn btn-outline-secondary filter-toggle rounded-pill text-truncate ${button_active}" style="max-width: ${max_width_active}px;">EL Internship Fast Track (no results found)</button>
    </div>
  `;
};

ToggleFilterWithEllipsisButton.storyName = 'Toggle with Ellipsis';

ToggleFilterWithEllipsisButton.parameters = {
  notes: `
  
  #Sample Code

  \`\`\`html
  ${toggle_filter_with_ellipsis_button_html}
  \`\`\`

  `,
};
