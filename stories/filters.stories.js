import iconSprite from '../node_modules/@symplicity/tabler-icons/symplicity/tabler-sprite-nostroke.svg'

import { text, number, radios } from '@storybook/addon-knobs'

export default {
  title: 'Components/Filters'
}

const filter_button_html = `
<div class="dropdown">
  <h3>Filter Button - Regular</h3>
  <div>
    <button class="btn btn-outline-secondary filter-toggle rounded-pill" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,4">
      Position Type 
    </button>
    <div class="dropdown-menu shadow-sm" aria-labelledby="dropdownMenuButton2">
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
    <button class="btn btn-sm btn-outline-secondary filter-toggle rounded-pill" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,4">
      Position Type 
    </button>
    <div class="dropdown-menu shadow-sm" aria-labelledby="dropdownMenuButton3">
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
</div>`

export const FilterButton = () => {
  const filter_pr = text('Dropdown Position Type - Regular', 'Position Type A')
  const filter_ps = text('Dropdown Position Type - Small', 'Position Type A')

  return `
    <div class="dropdown">
      <h3>Filter Button - Regular</h3>
      <div>
        <button class="btn btn-outline-secondary filter-toggle rounded-pill" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,4">
          Position Type 
        </button>
        <div class="dropdown-menu shadow-sm" aria-labelledby="dropdownMenuButton2">
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
        <button class="btn btn-sm btn-outline-secondary filter-toggle rounded-pill" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,4">
          Position Type 
        </button>
        <div class="dropdown-menu shadow-sm" aria-labelledby="dropdownMenuButton3">
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
    `
}

FilterButton.storyName = 'Button with Dropdown'

FilterButton.parameters = {
  notes: `
  
  #Sample Code

  \`\`\`html
  ${filter_button_html}
  \`\`\`

  `
}

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
</div>`

export const AllFiltersButton = () => `<div>${all_filters_button_html}</div>`

AllFiltersButton.storyName = 'All Filters with Modal'

AllFiltersButton.parameters = {
  notes: `
  
  #Sample Code

  \`\`\`html
  ${all_filters_button_html}
  \`\`\`

  `
}

const toggle_filter_button_html = `
<h3>Toggle Filter Button (Checkbox)</h3>
<input type="checkbox" class="btn-check" id="btn-check" autocomplete="off">
<label class="btn btn-outline-secondary filter-toggle rounded-pill" for="btn-check">Remote</label>
<br><br>
<h3>Toggle Filter Button (Button)</h3>
<button class="btn btn-outline-secondary filter-toggle rounded-pill">Remote</button>
<br><br>
<button class="btn btn-outline-secondary filter-toggle rounded-pill active">Remote</button>
`

export const ToggleFilterButton = () => {
  const checkbox_label = 'Checked'
  const checkbox_options = {
    Checked: 'checked',
    Unchecked: ''
  }
  const checkbox_checked = radios(checkbox_label, checkbox_options)

  const button_label = 'Active'
  const button_options = {
    Active: 'active',
    Inactive: ''
  }
  const button_active = radios(button_label, button_options)

  return `
    <div>
      <h3>Toggle Filter Button (Checkbox)</h3>
      <input type="checkbox" class="btn-check" id="btn-check" autocomplete="off" ${checkbox_checked}>
      <label class="btn btn-outline-secondary filter-toggle rounded-pill" for="btn-check">Remote</label>
      <br><br>
      <h3>Toggle Filter Button (Button)</h3>
      <button class="btn btn-outline-secondary filter-toggle rounded-pill ${button_active}">Remote</button>
    </div>
  `
}

ToggleFilterButton.storyName = 'Toggle'

ToggleFilterButton.parameters = {
  notes: `
  
  #Sample Code

  \`\`\`html
  ${toggle_filter_button_html}
  \`\`\`

  `
}

const toggle_filter_with_ellipsis_button_html = `
<h3>Toggle Filter with Ellipsis Button (Checkbox)</h3>
<input type="checkbox" class="btn-check" id="btn-check" autocomplete="off">
<label class="btn btn-outline-secondary filter-toggle rounded-pill  text-truncate" for="btn-check">EL Internship Fast Track (no results found)</label>
<br><br>
<h3>Toggle Filter Button with Ellipsis (Button)</h3>
<button class="btn btn-outline-secondary filter-toggle rounded-pill text-truncate">EL Internship Fast Track (no results found)</button>
<br><br>
<button class="btn btn-outline-secondary filter-toggle rounded-pill active">Remote</button>
`

export const ToggleFilterWithEllipsisButton = () => {
  const checkbox_label = 'Checked'
  const checkbox_options = {
    Checked: 'checked',
    Unchecked: ''
  }
  const checkbox_checked = radios(checkbox_label, checkbox_options)

  const button_label = 'Active'
  const button_options = {
    Active: 'active',
    Inactive: ''
  }
  const button_active = radios(button_label, button_options)

  const label = 'max-width (px):'
  const defaultValue = 300
  const options = {
    range: true,
    min: 50,
    max: 400,
    step: 1
  }

  const max_width_active = number(label, defaultValue, options)

  return `
    <div>
      <h3>Toggle Filter with Ellipsis Button (Checkbox)</h3>
      <input type="checkbox" class="btn-check" id="btn-check" autocomplete="off" ${checkbox_checked}>
      <label class="btn btn-outline-secondary filter-toggle rounded-pill text-truncate" for="btn-check" style="max-width: ${max_width_active}px;">EL Internship Fast Track (no results found)</label>
      <br><br>
      <h3>Toggle Filter Button with Ellipsis (Button)</h3>
      <button class="btn btn-outline-secondary filter-toggle rounded-pill text-truncate ${button_active}" style="max-width: ${max_width_active}px;">EL Internship Fast Track (no results found)</button>
    </div>
  `
}

ToggleFilterWithEllipsisButton.storyName = 'Toggle with Ellipsis'

ToggleFilterWithEllipsisButton.parameters = {
  notes: `
  
  #Sample Code

  \`\`\`html
  ${toggle_filter_with_ellipsis_button_html}
  \`\`\`

  `
}


const ListFilterHtml = () => {
  const checkbox_label = 'Extra Fields'
  const checkbox_options = {
    Yes: 'yes',
    no: ''
  }
  const checkbox_checked = radios(checkbox_label, checkbox_options)

  return `
<div class="bg-white mt-3 w-100 rounded-4">
    <div class="text-center"></div>
    <div class="bg-white">
        <form class="bg-light">
            <div class="d-flex align-items-start justify-content-between flex-sm-wrap p-7 mx-3">
                <div class="d-flex align-items-center justify-content-start flex-wrap flex-grow-1">
                    <div class="flex-grow-1 me-7">
                        <div class="input-group">
                            <span class="input-group-text border-end-0 bg-white p-1" id="basic-addon1">
                                <svg class="icon-lg-font-size ps-1">
                                    <title>Open Search Dialog</title>
                                    <use xlink:href="${iconSprite}#tabler-search" />
                                </svg>
                            </span>
                            <input type="text" class="form-control border-start-0 fs-6"
                                placeholder="Search cases by student, email, IR#" aria-label="Search"
                                aria-describedby="basic-addon1" />
                        </div>
                    </div>
                    <div class="flex-grow-1 me-7">
                        <select class="form-select fs-6 text-muted" aria-label="Default select example">
                            <option selected>Assigned to</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="d-flex align-items-center flex-wrap flex-grow-1">
                        <div class="form-check me-3 mb-0">
                            <input class="form-check-input" type="checkbox" value="true" id="flexCheck1" />
                            <label class="form-check-label fs-6" for="flexCheck1">
                                Parent Case
                            </label>
                        </div>
                        <div class="form-check me-2 mb-0">
                            <input class="form-check-input" type="checkbox" value="true" id="flexCheck2" />
                            <label class="form-check-label fs-6" for="flexCheck2">
                                Child Case
                            </label>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-start flex-wrap">
                    <button type="button" class="btn btn-outline-secondary fs-6 me-3">
                        <svg width="1.125rem" height="1.125rem" class="mt-n1 me-1">
                            <use xlink:href="${iconSprite}#tabler-search" />
                        </svg>Apply Search
                    </button>
                    <button type="button" class="btn btn-outline-secondary fs-6" id="toggleFields" style="display: ${checkbox_checked ? "block" : "none"}">
                        <svg width="1.125rem" height="1.125rem" class="mt-n1 me-1">
                            <use xlink:href="${iconSprite}#tabler-adjustments-horizontal" />
                        </svg>More Filters
                    </button>
                </div>
            </div>
            <div class="collapse" id="hiddenFields">
                <div class="d-flex align-items-start justify-content-between flex-sm-wrap px-7 mx-3">
                    <div class="flex-grow-1 me-7">
                      <input type="text" class="form-control fs-6" placeholder="Example Field"/>
                    </div>
                    <div class="flex-grow-1">
                        <select class="form-select fs-6 text-muted" aria-label="Default select example">
                            <option selected>Hidden Select Example</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                  </div>
                  <div class="d-flex align-items-start justify-content-between flex-sm-wrap p-7 mx-3">
                    <div class="flex-grow-1">
                      <textarea class="form-control fs-6" placeholder="Hidden textarea" id="exampleFormControlTextarea1" rows="5"></textarea>
                    </div>
                  </div>
            </div>
        </form>
    </div>
</div>
`;
};

export const ListFilter = () => {
  setTimeout(function() {
    const collapsible = document.querySelector("#hiddenFields");
    const cta = document.querySelector("#toggleFields");

    cta.addEventListener("click", () => {
      var bsCollapse = new bootstrap.Collapse(collapsible)
    })
    
  }, 0)

  return ListFilterHtml();
}

ListFilter.storyName = 'List Filter';

ListFilter.parameters = {
  notes: `
  
  #Sample Code

  \`\`\`html
  ${ListFilterHtml}
  \`\`\`

  `  
}
