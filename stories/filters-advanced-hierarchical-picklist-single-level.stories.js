import { document, setTimeout } from 'global'

import iconSprite from '../node_modules/@symplicity/tabler-icons/symplicity/tabler-sprite-nostroke.svg'

import { text, number } from '@storybook/addon-knobs'

export default {
  title: 'Components/Filters Advanced/Hierarchical Picklist/ Single-Level'
}

const hierarchical_picklist_single_default_html = `
    <div class="dropdown">
      <div>
        <button class="btn btn-outline-secondary filter-toggle rounded-pill" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,4" data-bs-auto-close="outside">
          Position Type 
        </button>
        <div class="dropdown-menu filter-menu shadow-sm pb-0 pt-0" aria-labelledby="dropdownMenuButton2">
          <ul class="list-unstyled mb-0 py-2 overflow-auto">
            <li>
              <span class="dropdown-item d-flex">
                <span class="w-100">
                  <label class="list-group-item d-flex border-0 p-0 bg-transparent"><input class="form-check-input me-2" type="checkbox" value="" aria-label="...">Option 1</label>
                </span>
              </span>
            </li>
            <li>
              <span class="dropdown-item d-flex">
                <span class="w-100">
                  <label class="list-group-item d-flex border-0 p-0 bg-transparent"><input class="form-check-input me-2" type="checkbox" value="" aria-label="...">Option 2</label>
                </span>
              </span>
            </li>
            <li>
              <span class="dropdown-item d-flex">
                <span class="w-100">
                  <label class="list-group-item d-flex border-0 p-0 bg-transparent"><input class="form-check-input me-2" type="checkbox" value="" aria-label="...">Option 3</label>
                </span>
              </span>
            </li>
            <ul class="list-unstyled list-unstyled-repeat list-group mb-0"></ul>
          </ul>
          <div class="dropdown-divider m-0"></div>
          <div class="d-flex justify-content-between align-items-center px-3 py-6">
            <div>
              <button type="button" class="btn btn-link minw-0 text-secondary text-decoration-none p-0">Clear</button>
            </div>
            <div>
              <button type="button" class="btn btn-link minw-0 text-primary text-decoration-none p-0 mx-2">Show Selected</button>
              <button type="button" class="btn btn-primary">Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    `

export const HierarchicalPicklistSingleDefault = () => {
  const drilldown_option_1 = text('Select Option 1', 'All Jobs and Interviews')
  const drilldown_option_2 = text('Select Option 2', 'Career Fair Postings')
  const drilldown_option_3 = text('Select Option 3', 'Jobs Matching My Profile')

  const label = 'Number of items'
  const defaultValue = 15
  const options = {
    range: true,
    min: 0,
    max: 100,
    step: 1
  }

  const value = number(label, defaultValue, options)

  setTimeout(function () {
    const createListItems = document.querySelector('.list-unstyled-repeat')
    createListItems.innerHTML = `
        ${Array(value)
          .fill()
          .map(
            (item, i) =>
              `<li>
                <span class="dropdown-item d-flex">
                  <span class="w-100">
                    <label class="list-group-item d-flex border-0 p-0 bg-transparent"><input class="form-check-input me-2" type="checkbox" value="" aria-label="..."> Option ${
                      i + 1
                    }</label>
                  </span>
                </span>
              </li>`
          )
          .join('')}
    `
  }, 0)

  return `
    <div class="dropdown">
      <div>
        <button class="btn btn-outline-secondary filter-toggle rounded-pill" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,4" data-bs-auto-close="outside">
          Position Type 
        </button>
        <div class="dropdown-menu filter-menu shadow-sm pb-0 pt-0" aria-labelledby="dropdownMenuButton2">
          <ul class="list-unstyled mb-0 py-2 overflow-auto">
            <li>
              <span class="dropdown-item d-flex">
                <span class="w-100">
                  <label class="list-group-item d-flex border-0 p-0 bg-transparent"><input class="form-check-input me-2" type="checkbox" value="" aria-label="...">${drilldown_option_1}</label>
                </span>
              </span>
            </li>
            <li>
              <span class="dropdown-item d-flex">
                <span class="w-100">
                  <label class="list-group-item d-flex border-0 p-0 bg-transparent"><input class="form-check-input me-2" type="checkbox" value="" aria-label="...">${drilldown_option_2}</label>
                </span>
              </span>
            </li>
            <li>
              <span class="dropdown-item d-flex">
                <span class="w-100">
                  <label class="list-group-item d-flex border-0 p-0 bg-transparent"><input class="form-check-input me-2" type="checkbox" value="" aria-label="...">${drilldown_option_3}</label>
                </span>
              </span>
            </li>
            <ul class="list-unstyled list-unstyled-repeat list-group mb-0"></ul>
          </ul>
          <div class="dropdown-divider m-0"></div>
          <div class="d-flex justify-content-between align-items-center px-3 py-6">
            <div>
              <button type="button" class="btn btn-link minw-0 text-secondary text-decoration-none p-0">Clear</button>
            </div>
            <div>
              <button type="button" class="btn btn-link minw-0 text-primary text-decoration-none p-0 mx-2">Show Selected</button>
              <button type="button" class="btn btn-primary">Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
}

HierarchicalPicklistSingleDefault.storyName = 'Default'

HierarchicalPicklistSingleDefault.parameters = {
  notes: `
  
  #Sample Code

  \`\`\`html
  ${hierarchical_picklist_single_default_html}
  \`\`\`

  `
}

const hierarchical_picklist_single_search_html = `
    <div class="dropdown">
      <h3>Multi-Select, Single-Level with Search</h3>
      <div>
        <button class="btn btn-outline-secondary filter-toggle rounded-pill" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,4" data-bs-auto-close="outside">
          Position Type 
        </button>
        <div class="dropdown-menu filter-menu shadow-sm pb-0 pt-0" aria-labelledby="dropdownMenuButton2">
          <form class="py-3 px-7 mb-n2 bg-white border-bottom-light">
            <div class="input-group">
              <input type="text" class="form-control border-end-0" autocomplete="false" placeholder="Type to search">
              <span class="input-group-text bg-white">
                  <svg class="icon-lg-font-size">
                    <use xlink:href="/path/to/icon-sprite.svg#tabler-search" />
                  </svg>
              </span>
            </div>
          </form>
          <ul class="list-unstyled mb-0 pt-0 pt-0 pb-0 overflow-auto">
            <li>
              <span class="dropdown-item d-flex">
                <span class="w-100">
                  <label class="list-group-item d-flex border-0 p-0 bg-transparent"><input class="form-check-input me-2" type="checkbox" value="" checked aria-label="...">Option 1</label>
                </span>
              </span>
            </li>
            <li>
              <span class="dropdown-item d-flex">
                <span class="w-100">
                  <label class="list-group-item d-flex border-0 p-0 bg-transparent"><input class="form-check-input me-2" type="checkbox" value="" checked aria-label="...">Option 2</label>
                </span>
              </span>  
            </li>
          </ul>
          <div class="dropdown-divider m-0"></div>
          <ul class="list-unstyled mb-0 pt-7 pb-2 overflow-auto">
            <li>
              <span class="dropdown-item d-flex">
                <span class="w-100">
                  <label class="list-group-item d-flex border-0 p-0 bg-transparent"><input class="form-check-input me-2" type="checkbox" value="" aria-label="...">Option 1</label>
                </span>
              </span>
            </li>
            <li>
              <span class="dropdown-item d-flex">
                <span class="w-100">
                  <label class="list-group-item d-flex border-0 p-0 bg-transparent"><input class="form-check-input me-2" type="checkbox" value="" aria-label="...">Option 2</label>
                </span>
              </span>
            </li>
            <li>
              <span class="dropdown-item d-flex">
                <span class="w-100">
                  <label class="list-group-item d-flex border-0 p-0 bg-transparent"><input class="form-check-input me-2" type="checkbox" value="" aria-label="...">Option 3</label>
                </span>
              </span>
            </li>
          </ul>
          <div class="dropdown-divider m-0"></div>
          <div class="d-flex justify-content-between align-items-center px-3 py-6">
            <div>
              <button type="button" class="btn btn-link minw-0 text-secondary text-decoration-none p-0">Clear</button>
            </div>
            <div>
              <button type="button" class="btn btn-link minw-0 text-primary text-decoration-none p-0 mx-2">Show Selected</button>
              <button type="button" class="btn btn-primary">Apply</button>
            </div>
          </div>
      </div>
    </div>
    `

export const HierarchicalPicklistSingleSearch = () => {
  const drilldown_option_1 = text('Select Option 1', 'All Jobs and Interviews')
  const drilldown_option_2 = text('Select Option 2', 'Career Fair Postings')
  const drilldown_option_3 = text('Select Option 3', 'Jobs Matching My Profile')

  const label = 'Number of items'
  const defaultValue = 15
  const options = {
    range: true,
    min: 0,
    max: 100,
    step: 1
  }

  const value = number(label, defaultValue, options)

  setTimeout(function () {
    const createListItems = document.querySelector('.list-unstyled-repeat')
    createListItems.innerHTML = `
        ${Array(value)
          .fill()
          .map(
            (item, i) =>
              `<li>
                <span class="dropdown-item d-flex">
                  <span class="w-100">
                    <label class="list-group-item d-flex border-0 p-0 bg-transparent"><input class="form-check-input me-2" type="checkbox" value="" aria-label="..."> Option ${
                      i + 1
                    }</label>
                  </span>
                </span>
              </li>`
          )
          .join('')}
    `
  }, 0)

  return `
    <div class="dropdown">
      <div>
        <button class="btn btn-outline-secondary filter-toggle rounded-pill" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,4" data-bs-auto-close="outside">
          Position Type 
        </button>
        <div class="dropdown-menu filter-menu shadow-sm pb-0 pt-0" aria-labelledby="dropdownMenuButton2">
          <form class="py-3 px-7 mb-n2 bg-white border-bottom-light">
            <div class="input-group">
              <input type="text" class="form-control border-end-0" autocomplete="false" placeholder="Type to search">
              <span class="input-group-text bg-white">
                  <svg class="icon-lg-font-size">
                    <use xlink:href="${iconSprite}#tabler-search" />
                  </svg>
              </span>
            </div>
          </form>
          <ul class="list-unstyled mb-0 pt-0 pt-0 pb-0 overflow-auto">
            <li>
              <span class="dropdown-item d-flex">
                <span class="w-100">
                  <label class="list-group-item d-flex border-0 p-0 bg-transparent"><input class="form-check-input me-2" type="checkbox" value="" checked aria-label="...">
                    ${drilldown_option_1}
                  </label>
                </span>
              </span>
            </li>
            <li>
              <span class="dropdown-item d-flex">
                <span class="w-100">
                  <label class="list-group-item d-flex border-0 p-0 bg-transparent"><input class="form-check-input me-2" type="checkbox" value="" checked aria-label="...">
                    ${drilldown_option_2}
                  </label>
                </span>
              </span>  
            </li>
          </ul>
          <div class="dropdown-divider m-0"></div>
          <ul class="list-unstyled mb-0 pt-2 pt-0 pb-2 overflow-auto">
            <li>
              <span class="dropdown-item d-flex">
                <span class="w-100">
                  <label class="list-group-item d-flex border-0 p-0 bg-transparent"><input class="form-check-input me-2" type="checkbox" value="" aria-label="...">
                    ${drilldown_option_3}
                  </label>
                </span>
              </span>
            </li>
            <ul class="list-unstyled list-unstyled-repeat list-group mb-0"></ul>
          </ul>
          <div class="dropdown-divider m-0"></div>
          <div class="d-flex justify-content-between align-items-center px-3 py-6">
            <div>
              <button type="button" class="btn btn-link minw-0 text-secondary text-decoration-none p-0">Clear</button>
            </div>
            <div>
              <button type="button" class="btn btn-link minw-0 text-primary text-decoration-none p-0 mx-2">Show Selected</button>
              <button type="button" class="btn btn-primary">Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
}

HierarchicalPicklistSingleSearch.storyName = 'Search'

HierarchicalPicklistSingleSearch.parameters = {
  notes: `
  
  #Sample Code

  \`\`\`html
  ${hierarchical_picklist_single_search_html}
  \`\`\`

  `
}
