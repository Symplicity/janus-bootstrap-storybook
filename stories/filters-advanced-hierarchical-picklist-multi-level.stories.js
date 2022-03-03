import { document, setTimeout } from 'global'

import iconSprite from '../node_modules/@symplicity/tabler-icons/symplicity/tabler-sprite-nostroke.svg'

import { text, number } from '@storybook/addon-knobs'

export default {
  title: 'Components/Filters Advanced/Hierarchical Picklist/Multi-Level'
}

const hierarchical_picklist_default_html = `
    <div class="dropdown">
      <div>
        <div>
          <label class="mb-1" for="search-input"><b>Major</b></label>
        </div>
        <ul class="list-unstyled mb-2 overflow-auto">
          <li class="mb-0">
            <div class="list-group">
              <a class="dropdown-item d-flex border border-light border-start-0 border-end-0" href="#">
                <span class="h4 mt-0 mb-0 ms-n2">
                  <svg width="1.25rem" height="1.25rem">
                    <use xlink:href="/path/to/icon-sprite.svg#tabler-chevron-left" />
                  </svg>
                </span>
                <span class="w-100 text-center">
                  Engineering
                </span>
              </a>
          </li>
        </ul>
        <ul class="list-unstyled list-inline mb-2 mt-n1">
          <li class="list-inline-item me-1">
            <button class="btn text-dark bg-light d-inline-flex badge minw-0">
              Engineering
              <span class="d-flex align-items-center btn-close btn-close-white ms-2 me-0 p-0"></span>
            </button>
          </li>
        </ul>
        <div class="btn btn-outline-secondary ps-6 pe-3 filter-toggle filter-drop d-inline-flex align-items-center w-100" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" data-bs-offset="0,4" data-bs-auto-close="outside">
          <span class="w-100">
            <label for="search-input">Majors</label>
            <input id="search-input" type="text" placeholder="Search majors" class="border-0 p-0 w-100 maxw-320">
          </span>
          <button class="bg-transparent border-0 me-n2 px-1">
            <span class="visually-hidden">Child menu</span>
            <span class="d-flex align-items-center">
              <svg width="1.125rem" height="1.125rem">
                <use xlink:href="/path/to/icon-sprite.svg#tabler-chevron-down" />
              </svg>
            </span>
          </button>
        </div>
        <div class="dropdown-menu filter-menu pb-0 pt-0" aria-labelledby="dropdownMenuButton2">
          <ul class="list-unstyled mb-0 pt-2 pb-0 overflow-auto">
            <li>
              <span class="dropdown-item d-flex px-2 py-1">
                <span class="w-100">
                  <label class="list-group-item d-flex border-0 p-0 bg-transparent"><input class="form-check-input me-2" type="checkbox" value="" aria-label="...">Option 1</label>
                </span>
                <button class="py-0 px-2 me-n3">
                  <span class="visually-hidden">Child menu</span>
                  <span class="d-flex align-items-center">
                    <svg width="1.25rem" height="1.25rem">
                      <use xlink:href="/path/to/icon-sprite.svg#tabler-chevron-right" />
                    </svg>
                  </span>
                </button>
              </span>
            </li>
            <li>
              <span class="dropdown-item d-flex px-2 py-1">
                <span class="w-100">
                  <label class="list-group-item d-flex border-0 p-0 bg-transparent"><input class="form-check-input me-2" type="checkbox" value="" aria-label="...">Option 2</label>
                </span>
              </span>
            </li>
            <li>
              <span class="dropdown-item d-flex px-2 py-1">
                <span class="w-100">
                  <label class="list-group-item d-flex border-0 p-0 bg-transparent"><input class="form-check-input me-2" type="checkbox" value="" aria-label="...">Option 3</label>
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    `

export const HierarchicalPicklistMultiDefault = () => {
  const drilldown_parent = text('Major', 'Engineering')
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

  const mwLabel = 'max-width (px):'
  const mwDefaultValue = 320
  const mwOptions = {
    range: true,
    min: 100,
    max: 600,
    step: 1
  }

  const max_width_active = number(mwLabel, mwDefaultValue, mwOptions)

  setTimeout(function () {
    const createListItems = document.querySelector('.list-unstyled-repeat')
    createListItems.innerHTML = `
        ${Array(value)
          .fill()
          .map(
            (item, i) =>
              `<li>
                <span class="dropdown-item d-flex px-2 py-1">
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
      <h3>Multi-Level - Default</h3>
      <div style="max-width: ${max_width_active}px;">
        <div>
          <label class="mb-1" for="search-input"><b>Major</b></label>
        </div>
        <div class="btn btn-outline-secondary ps-6 pe-3 filter-toggle filter-drop d-inline-flex align-items-center w-100" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" data-bs-offset="0,4" data-bs-auto-close="outside"  style="max-width: ${max_width_active}px;">
          <span class="w-100">
            <input id="search-input" type="text" placeholder="Search majors" class="border-0 p-0 w-100">
          </span>
          <button class="bg-transparent border-0 me-n2 px-1">
            <span class="visually-hidden">Child menu</span>
            <span class="d-flex align-items-center">
              <svg width="1.125rem" height="1.125rem">
                <use xlink:href="${iconSprite}#tabler-chevron-down" />
              </svg>
            </span>
          </button>
        </div>
        <div class="dropdown-menu filter-menu pb-0 pt-0" aria-labelledby="dropdownMenuButton2">
        <ul class="list-unstyled mb-2 overflow-auto">
            <li class="mb-0">
              <div class="list-group">
                <a class="dropdown-item d-flex border border-light border-start-0 border-end-0" href="#">
                  <span class="h4 mt-0 mb-0 ms-n2">
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
          <ul class="list-unstyled mb-0 pt-2 pb-0 overflow-auto">
            <li>
              <span class="dropdown-item d-flex px-2 py-1">
                <span class="w-100">
                  <label class="list-group-item d-flex border-0 p-0 bg-transparent"><input class="form-check-input me-2" type="checkbox" value="" aria-label="...">${drilldown_option_1}</label>
                </span>
                <button class="py-0 px-2 me-n2">
                  <span class="visually-hidden">Child menu</span>
                  <span class="d-flex align-items-center">
                    <svg width="1.25rem" height="1.25rem">
                      <use xlink:href="${iconSprite}#tabler-chevron-right" />
                    </svg>
                  </span>
                </button>
              </span>
            </li>
            <li>
              <span class="dropdown-item d-flex px-2 py-1">
                <span class="w-100">
                  <label class="list-group-item d-flex border-0 p-0 bg-transparent"><input class="form-check-input me-2" type="checkbox" value="" aria-label="...">${drilldown_option_2}</label>
                </span>
              </span>
            </li>
            <li>
              <span class="dropdown-item d-flex px-2 py-1">
                <span class="w-100">
                  <label class="list-group-item d-flex border-0 p-0 bg-transparent"><input class="form-check-input me-2" type="checkbox" value="" aria-label="...">${drilldown_option_3}</label>
                </span>
              </span>
            </li>
            <ul class="list-unstyled list-unstyled-repeat list-group mb-0"></ul>
          </ul>
        </div>
      </div>
    </div>
    `
}

HierarchicalPicklistMultiDefault.storyName = 'Default'

HierarchicalPicklistMultiDefault.parameters = {
  notes: `
  
  #Sample Code

  \`\`\`html
  ${hierarchical_picklist_default_html}
  \`\`\`

  `
}

const hierarchical_picklist_highlight_html = `
    <div class="dropdown">
      <h3>Multi-Level - Highlight</h3>
      <div>
        <div>
          <label class="mb-1" for="search-input"><b>Major</b></label>
        </div>
        <div class="btn btn-outline-secondary ps-6 pe-3 filter-toggle filter-drop d-inline-flex align-items-center w-100" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" data-bs-offset="0,4" data-bs-auto-close="outside">
          <span class="w-100">
            <label for="search-input">Majors</label>
            <input id="search-input" type="text" placeholder="Search majors" class="border-0 p-0 w-100 maxw-320" value="En">
          </span>
          <button class="bg-transparent border-0 me-n2 px-1">
            <span class="visually-hidden">Child menu</span>
            <span class="d-flex align-items-center">
              <svg width="1.125rem" height="1.125rem">
                <use xlink:href="${iconSprite}#tabler-chevron-down" />
              </svg>
            </span>
          </button>
        </div>
        <div class="dropdown-menu filter-menu pb-0 pt-0" aria-labelledby="dropdownMenuButton2">
          <ul class="list-unstyled mb-0 pt-2 pb-0 overflow-auto">
            <li>
              <span class="dropdown-item d-flex px-2 py-1">
                <span class="w-100">
                  <label class="list-group-item d-flex border-0 p-0 bg-transparent"><input class="form-check-input me-2" type="checkbox" value="" aria-label="...">En<b>gineering</b></label>
                </span>
              </span>
            </li>
            <li>
              <span class="dropdown-item d-flex px-2 py-1">
                <span class="w-100">
                  <label class="list-group-item d-flex border-0 p-0 bg-transparent"><input class="form-check-input me-2" type="checkbox" value="" aria-label="...">En<b>glish</b></label>
                </span>
              </span>
            </li>
            <li>
              <span class="dropdown-item d-flex px-2 py-1">
                <span class="w-100">
                  <label class="list-group-item d-flex border-0 p-0 bg-transparent"><input class="form-check-input me-2" type="checkbox" value="" aria-label="...">En<b>vironmental Design</b></label>
                  <div style="--bs-breadcrumb-divider: '>';"  aria-label="breadcrumb">
                    <span class="breadcrumb form-text d-flex border-0 p-0 bg-transparent ms-4 mb-0 fs-6">
                      <span class="breadcrumb-item m-0">Aerospace</span>
                    </span>
                  </div>
                </span>
              </span>
            </li>
            <li>
              <span class="dropdown-item d-flex flex-column flex-wrap px-2 py-1">
                <span class="w-100">
                  <label class="list-group-item d-flex border-0 p-0 bg-transparent"><input class="form-check-input me-2" type="checkbox" value="" aria-label="..."><b>G</b>en<b>etics</b>
                  </label>
                  <div style="--bs-breadcrumb-divider: '>';"  aria-label="breadcrumb">
                    <span class="breadcrumb form-text d-flex border-0 p-0 bg-transparent ms-4 mb-0 fs-6">
                      <span class="breadcrumb-item m-0 ">Agricultural</span>
                      <span class="breadcrumb-item m-0"><b>Bio</b>en<b>gineering</b></span>
                    </span>
                  </div>
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    `

export const HierarchicalPicklistMultiHighlight = () => {
  const mwLabel = 'max-width (px):'
  const mwDefaultValue = 320
  const mwOptions = {
    range: true,
    min: 100,
    max: 600,
    step: 1
  }

  const max_width_active = number(mwLabel, mwDefaultValue, mwOptions)

  return `
    <div class="dropdown">
      <h3>Multi-Level - Highlight</h3>
      <div style="max-width: ${max_width_active}px;">
        <div>
          <label class="mb-1" for="search-input"><b>Major</b></label>
        </div>
        <div class="btn btn-outline-secondary ps-6 pe-3 filter-toggle filter-drop d-inline-flex align-items-center w-100" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" data-bs-offset="0,4" data-bs-auto-close="outside"  style="max-width: ${max_width_active}px;">
          <span class="w-100">
            <input id="search-input" type="text" placeholder="Search majors" class="border-0 p-0 w-100" value="En">
          </span>
          <button class="bg-transparent border-0 me-n2 px-1">
            <span class="visually-hidden">Child menu</span>
            <span class="d-flex align-items-center">
              <svg width="1.125rem" height="1.125rem">
                <use xlink:href="${iconSprite}#tabler-chevron-down" />
              </svg>
            </span>
          </button>
        </div>
        <div class="dropdown-menu filter-menu pb-0 pt-0" aria-labelledby="dropdownMenuButton2">
          <ul class="list-unstyled mb-0 pt-2 pb-0 overflow-auto">
            <li>
              <span class="dropdown-item d-flex px-2 py-1">
                <span class="w-100">
                  <label class="list-group-item d-flex border-0 p-0 bg-transparent"><input class="form-check-input me-2" type="checkbox" value="" aria-label="...">En<b>gineering</b></label>
                </span>
              </span>
            </li>
            <li>
              <span class="dropdown-item d-flex px-2 py-1">
                <span class="w-100">
                  <label class="list-group-item d-flex border-0 p-0 bg-transparent"><input class="form-check-input me-2" type="checkbox" value="" aria-label="...">En<b>glish</b></label>
                </span>
              </span>
            </li>
            <li>
              <span class="dropdown-item d-flex px-2 py-1">
                <span class="w-100">
                  <label class="list-group-item d-flex border-0 p-0 bg-transparent"><input class="form-check-input me-2" type="checkbox" value="" aria-label="...">En<b>vironmental Design</b></label>
                  <div style="--bs-breadcrumb-divider: '>';"  aria-label="breadcrumb">
                    <span class="breadcrumb form-text d-flex border-0 p-0 bg-transparent ms-4 mb-0 fs-6">
                      <span class="breadcrumb-item m-0">Aerospace</span>
                    </span>
                  </div>
                </span>
              </span>
            </li>
            <li>
              <span class="dropdown-item d-flex flex-column flex-wrap px-2 py-1">
                <span class="w-100">
                  <label class="list-group-item d-flex border-0 p-0 bg-transparent"><input class="form-check-input me-2" type="checkbox" value="" aria-label="..."><b>G</b>en<b>etics</b>
                  </label>
                  <div style="--bs-breadcrumb-divider: '>';"  aria-label="breadcrumb">
                    <span class="breadcrumb form-text d-flex border-0 p-0 bg-transparent ms-4 mb-0 fs-6">
                      <span class="breadcrumb-item m-0 ">Agricultural</span>
                      <span class="breadcrumb-item m-0"><b>Bio</b>en<b>gineering</b></span>
                    </span>
                  </div>
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    `
}

HierarchicalPicklistMultiHighlight.storyName = 'Highlight'

HierarchicalPicklistMultiHighlight.parameters = {
  notes: `
  
  #Sample Code

  \`\`\`html
  ${hierarchical_picklist_default_html}
  \`\`\`

  `
}

const hierarchical_picklist_empty_html = `
    <div class="dropdown">
      <h3>Multi-Level - Empty</h3>
      <div>
        <div>
          <label class="mb-1" for="search-input"><b>Major</b></label>
        </div>
        <div class="btn btn-outline-secondary ps-6 pe-3 filter-toggle filter-drop d-inline-flex align-items-center w-100" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" data-bs-offset="0,4" data-bs-auto-close="outside">
          <span class="w-100">
            <label for="search-input">Majors</label>
            <input id="search-input" type="text" placeholder="Search majors" class="border-0 p-0 w-100 maxw-320" value="En">
          </span>
          <button class="bg-transparent border-0 me-n2">
            <span class="d-flex align-items-center">
              <svg width="1.25rem" height="1.25rem">
                <use xlink:href="/path/to/icon-sprite.svg#tabler-chevron-down" />
              </svg>
            </span>
          </button>
        </div>
        <div class="dropdown-menu filter-menu pb-0 pt-0" aria-labelledby="dropdownMenuButton2">
          <ul class="list-unstyled mb-0 pt-2 pb-0 overflow-auto">
            <li class="px-6 py-2">
              No results found
            </li>
          </ul>
        </div>
      </div>
    </div>
    `

export const HierarchicalPicklistMultiEmpty = () => {
  const mwLabel = 'max-width (px):'
  const mwDefaultValue = 320
  const mwOptions = {
    range: true,
    min: 100,
    max: 600,
    step: 1
  }

  const max_width_active = number(mwLabel, mwDefaultValue, mwOptions)

  return `
    <div class="dropdown">
      <h3>Multi-Level - Empty</h3>
      <div style="max-width: ${max_width_active}px;">
        <div>
          <label class="mb-1" for="search-input"><b>Major</b></label>
        </div>
        <div class="btn btn-outline-secondary ps-6 pe-3 filter-toggle filter-drop d-inline-flex align-items-center w-100" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" data-bs-offset="0,4" data-bs-auto-close="outside"  style="max-width: ${max_width_active}px;">
          <span class="w-100">
            <input id="search-input" type="text" placeholder="Search majors" class="border-0 p-0 w-100" value="En">
          </span>
          <button class="bg-transparent border-0 me-n2 px-1">
            <span class="visually-hidden">Child menu</span>
            <span class="d-flex align-items-center">
              <svg width="1.125rem" height="1.125rem">
                <use xlink:href="${iconSprite}#tabler-chevron-down" />
              </svg>
            </span>
          </button>
        </div>
        <div class="dropdown-menu filter-menu pb-0 pt-0" aria-labelledby="dropdownMenuButton2">
          <ul class="list-unstyled mb-0 pt-2 pb-0 overflow-auto">
            <li class="px-6 py-2">
              No results found
            </li>
          </ul>
        </div>
      </div>
    </div>
    `
}

HierarchicalPicklistMultiEmpty.storyName = 'Empty'

HierarchicalPicklistMultiEmpty.parameters = {
  notes: `
  
  #Sample Code

  \`\`\`html
  ${hierarchical_picklist_empty_html}
  \`\`\`

  `
}

const hierarchical_picklist_selection_readonly_html = `
    <div class="dropdown">
      <h3>Multi-Level - Selection (readonly)</h3>
      <div>
        <div>
          <label class="mb-1" for="search-input"><b>Major</b></label>
        </div>
        <ul class="list-unstyled list-inline mb-2 mt-n1">
          <li class="list-inline-item me-1">
            <button class="btn text-dark bg-light d-inline-flex badge minw-0">
              Engineering
              <span class="d-flex align-items-center btn-close btn-close-dark ms-2 me-0 p-0"></span>
            </button>
          </li>
        </ul>
        <div class="btn btn-outline-secondary ps-6 pe-3 filter-toggle filter-drop d-inline-flex align-items-center w-100" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" data-bs-offset="0,4" data-bs-auto-close="outside">
          <span class="w-100">
            <label for="search-input">Majors</label>
            <input id="search-input" type="text" placeholder="Search majors" class="border-0 p-0 w-100 maxw-320">
          </span>
          <button class="bg-transparent border-0 me-n2">
            <span class="d-flex align-items-center">
              <svg width="1.25rem" height="1.25rem">
                <use xlink:href="/path/to/icon-sprite.svg#tabler-chevron-down" />
              </svg>
            </span>
          </button>
        </div>
        <div class="dropdown-menu filter-menu pb-0 pt-0" aria-labelledby="dropdownMenuButton2">
          <ul class="list-unstyled mb-0 pt-2 pb-0 overflow-auto">
            <li>
              <span class="dropdown-item d-flex px-2 py-1">
                <span class="w-100">
                  <label class="list-group-item d-flex border-0 p-0 bg-transparent"><input class="form-check-input me-2" type="checkbox" value="English" aria-label="..." checked><b>English</b></label>
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    `

export const HierarchicalPicklistMultiSelectionReadonly = () => {
  const drilldown_parent = text('Major', 'Engineering')
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
  const mwLabel = 'max-width (px):'
  const mwDefaultValue = 320
  const mwOptions = {
    range: true,
    min: 100,
    max: 600,
    step: 1
  }

  const max_width_active = number(mwLabel, mwDefaultValue, mwOptions)

  const filter_chip_item = text('Filter Chip Item', 'Engineering')

  const fcLabel = '# of Filter Chips'
  const fcDefaultValue = 1
  const fcOptions = {
    range: true,
    min: 0,
    max: 10,
    step: 1
  }

  const filter_chip_value = number(fcLabel, fcDefaultValue, fcOptions)

  setTimeout(function () {
    const createListItems = document.querySelector('.list-unstyled-repeat')
    createListItems.innerHTML = `
        ${Array(value)
          .fill()
          .map(
            (item, i) =>
              `<li>
                <span class="dropdown-item d-flex px-2 py-1">
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

  setTimeout(function () {
    const createListItems = document.querySelector('.list-inline')
    createListItems.innerHTML = `
        ${Array(filter_chip_value)
          .fill()
          .map(
            (item, i) =>
              `<li class="list-inline-item me-1">
                <button class="btn text-dark bg-light d-inline-flex badge minw-0">
                  ${filter_chip_item}
                  <span class="d-flex align-items-center btn-close btn-close-dark ms-2 me-0 p-0"></span>
                </button>
              </li>`
          )
          .join('')}
    `
  }, 0)

  return `
    <div class="dropdown">
      <h3>Multi-Level - Selection (readonly)</h3>
      <div style="max-width: ${max_width_active}px;">
        <div>
          <label class="mb-1" for="search-input"><b>Major</b></label>
        </div>
        <ul class="list-unstyled list-inline mb-2 mt-n1">
          <li class="list-inline-item me-1">
            <button class="btn text-dark bg-light d-inline-flex badge minw-0">
              Engineering
              <span class="d-flex align-items-center btn-close btn-close-white ms-2 me-0 p-0"></span>
            </button>
          </li>
        </ul>
        <div class="btn btn-outline-secondary ps-6 pe-3 filter-toggle filter-drop d-inline-flex align-items-center w-100" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" data-bs-offset="0,4" data-bs-auto-close="outside"  style="max-width: ${max_width_active}px;">
          <span class="w-100">
            <input id="search-input" type="text" placeholder="Search majors" class="border-0 p-0 w-100">
          </span>
          <button class="bg-transparent border-0 me-n2 px-1">
            <span class="visually-hidden">Child menu</span>
            <span class="d-flex align-items-center">
              <svg width="1.125rem" height="1.125rem">
                <use xlink:href="${iconSprite}#tabler-chevron-down" />
              </svg>
            </span>
          </button>
        </div>
        <div class="dropdown-menu filter-menu pb-0 pt-0" aria-labelledby="dropdownMenuButton2">
        <ul class="list-unstyled mb-2 overflow-auto">
            <li class="mb-0">
              <div class="list-group">
                <a class="dropdown-item d-flex border border-light border-start-0 border-end-0" href="#">
                  <span class="h4 mt-0 mb-0 ms-n2">
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
          <ul class="list-unstyled mb-0 pt-2 pb-0 overflow-auto">
            <li>
              <span class="dropdown-item d-flex px-2 py-1">
                <span class="w-100">
                  <label class="list-group-item d-flex border-0 p-0 bg-transparent"><input class="form-check-input me-2" type="checkbox" value="" aria-label="...">${drilldown_option_1}</label>
                </span>
                <button class="py-0 px-2 me-n2">
                  <span class="visually-hidden">Child menu</span>
                  <span class="d-flex align-items-center">
                    <svg width="1.25rem" height="1.25rem">
                      <use xlink:href="${iconSprite}#tabler-chevron-right" />
                    </svg>
                  </span>
                </button>
              </span>
            </li>
            <li>
              <span class="dropdown-item d-flex px-2 py-1">
                <span class="w-100">
                  <label class="list-group-item d-flex border-0 p-0 bg-transparent"><input class="form-check-input me-2" type="checkbox" value="" aria-label="...">${drilldown_option_2}</label>
                </span>
              </span>
            </li>
            <li>
              <span class="dropdown-item d-flex px-2 py-1">
                <span class="w-100">
                  <label class="list-group-item d-flex border-0 p-0 bg-transparent"><input class="form-check-input me-2" type="checkbox" value="" aria-label="...">${drilldown_option_3}</label>
                </span>
              </span>
            </li>
            <li>
              <ul class="list-unstyled list-unstyled-repeat list-group mb-0"></ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    `
}

HierarchicalPicklistMultiSelectionReadonly.storyName = 'Selection (readonly)'

HierarchicalPicklistMultiSelectionReadonly.parameters = {
  notes: `
  
  #Sample Code

  \`\`\`html
  ${hierarchical_picklist_selection_readonly_html}
  \`\`\`

  `
}

const hierarchical_picklist_selection_edit_html = `
    <div class="dropdown">
      <h3>Multi-Level - Selection (edit)</h3>
      <div>
        <div>
          <label class="mb-1" for="search-input"><b>Major</b></label>
        </div>
        <ul class="list-unstyled list-inline mb-2 mt-n1">
          <li class="list-inline-item me-1">
            <button class="btn text-white d-inline-flex badge bg-primary minw-0">
              Engineering
              <span class="d-flex align-items-center btn-close btn-close-dark ms-2 me-0 p-0"></span>
            </button>
          </li>
        </ul>
        <div class="btn btn-outline-secondary ps-6 pe-3 filter-toggle filter-drop d-inline-flex align-items-center w-100" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" data-bs-offset="0,4" data-bs-auto-close="outside">
          <span class="w-100">
            <label for="search-input">Majors</label>
            <input id="search-input" type="text" placeholder="Search majors" class="border-0 p-0 w-100 maxw-320">
          </span>
          <button class="bg-transparent border-0 px-1">
            <span class="visually-hidden">Remove Selection</span>
            <span class="d-flex align-items-center">
              <svg width="1rem" height="1rem" class="filter-remove">
                <use xlink:href="/path/to/icon-sprite#tabler-x" />
              </svg>
            </span>
          </button>
          <button class="bg-transparent border-0 me-n2">
            <span class="d-flex align-items-center">
              <svg width="1.25rem" height="1.25rem">
                <use xlink:href="/path/to/icon-sprite.svg#tabler-chevron-down" />
              </svg>
            </span>
          </button>
        </div>
        <div class="dropdown-menu filter-menu pb-0 pt-0" aria-labelledby="dropdownMenuButton2">
          <ul class="list-unstyled mb-0 pt-2 pb-0 overflow-auto">
            <li>
              <span class="dropdown-item d-flex px-2 py-1">
                <span class="w-100">
                  <label class="list-group-item d-flex border-0 p-0 bg-transparent"><input class="form-check-input me-2" type="checkbox" value="English" aria-label="..." checked><b>English</b></label>
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    `

export const HierarchicalPicklistMultiSelectionEdit = () => {
  const drilldown_parent = text('Major', 'Engineering')
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
  const mwLabel = 'max-width (px):'
  const mwDefaultValue = 320
  const mwOptions = {
    range: true,
    min: 100,
    max: 600,
    step: 1
  }

  const max_width_active = number(mwLabel, mwDefaultValue, mwOptions)

  const filter_chip_item = text('Filter Chip Item', 'Engineering')

  const fcLabel = '# of Filter Chips'
  const fcDefaultValue = 1
  const fcOptions = {
    range: true,
    min: 0,
    max: 10,
    step: 1
  }

  const filter_chip_value = number(fcLabel, fcDefaultValue, fcOptions)

  setTimeout(function () {
    const createListItems = document.querySelector('.list-unstyled-repeat')
    createListItems.innerHTML = `
        ${Array(value)
          .fill()
          .map(
            (item, i) =>
              `<li>
                <span class="dropdown-item d-flex px-2 py-1">
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

  setTimeout(function () {
    const createListItems = document.querySelector('.list-inline')
    createListItems.innerHTML = `
        ${Array(filter_chip_value)
          .fill()
          .map(
            (item, i) =>
              `<li class="list-inline-item me-1">
                <button class="btn text-white bg-primary d-inline-flex badge minw-0">
                  ${filter_chip_item}
                  <span class="d-flex align-items-center btn-close btn-close-white ms-2 me-0 p-0"></span>
                </button>
              </li>`
          )
          .join('')}
    `
  }, 0)

  setTimeout(function () {
    const dropdown = document.querySelector('.filter-toggle')
    const input = document.getElementById('search-input')
    dropdown.click()
    input.focus()
  }, 0)

  return `
    <div class="dropdown">
      <h3>Multi-Level - Selection (edit)</h3>
      <div style="max-width: ${max_width_active}px;">
        <div>
          <label class="mb-1" for="search-input"><b>Major</b></label>
        </div>
        <ul class="list-unstyled list-inline mb-2 mt-n1">
          <li class="list-inline-item me-1">
            <button class="btn text-white bg-primary d-inline-flex badge minw-0">
              Engineering
              <span class="d-flex align-items-center btn-close btn-close-white ms-2 me-0 p-0"></span>
            </button>
          </li>
        </ul>
        <div class="btn btn-outline-secondary ps-6 pe-3 filter-toggle filter-drop d-inline-flex align-items-center w-100" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" data-bs-offset="0,4" data-bs-auto-close="outside" style="max-width: ${max_width_active}px;">
          <span class="w-100">
            <input id="search-input" type="text" placeholder="Search majors" class="border-0 p-0 w-100">
          </span>
          <button class="bg-transparent border-0 px-1">
            <span class="visually-hidden">Remove Selection</span>
            <span class="d-flex align-items-center">
              <svg width="1rem" height="1rem" class="filter-remove">
                <use xlink:href="${iconSprite}#tabler-x" />
              </svg>
            </span>
          </button>
          <button class="bg-transparent border-0 me-n2 px-1">
            <span class="visually-hidden">Child menu</span>
            <span class="d-flex align-items-center">
              <svg width="1.125rem" height="1.125rem">
                <use xlink:href="${iconSprite}#tabler-chevron-down" />
              </svg>
            </span>
          </button>
        </div>
        <div class="dropdown-menu filter-menu pb-0 pt-0" aria-labelledby="dropdownMenuButton2">
        <ul class="list-unstyled mb-2 overflow-auto">
            <li class="mb-0">
              <div class="list-group">
                <a class="dropdown-item d-flex border border-light border-start-0 border-end-0" href="#">
                  <span class="h4 mt-0 mb-0 ms-n2">
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
          <ul class="list-unstyled mb-0 pt-2 pb-0 overflow-auto">
            <li>
              <span class="dropdown-item d-flex px-2 py-1">
                <span class="w-100">
                  <label class="list-group-item d-flex border-0 p-0 bg-transparent"><input class="form-check-input me-2" type="checkbox" value="" aria-label="...">${drilldown_option_1}</label>
                </span>
                <button class="py-0 px-2 me-n2">
                  <span class="visually-hidden">Child menu</span>
                  <span class="d-flex align-items-center">
                    <svg width="1.25rem" height="1.25rem">
                      <use xlink:href="${iconSprite}#tabler-chevron-right" />
                    </svg>
                  </span>
                </button>
              </span>
            </li>
            <li>
              <span class="dropdown-item d-flex px-2 py-1">
                <span class="w-100">
                  <label class="list-group-item d-flex border-0 p-0 bg-transparent"><input class="form-check-input me-2" type="checkbox" value="" aria-label="...">${drilldown_option_2}</label>
                </span>
              </span>
            </li>
            <li>
              <span class="dropdown-item d-flex px-2 py-1">
                <span class="w-100">
                  <label class="list-group-item d-flex border-0 p-0 bg-transparent"><input class="form-check-input me-2" type="checkbox" value="" aria-label="...">${drilldown_option_3}</label>
                </span>
              </span>
            </li>
            <li>
              <ul class="list-unstyled list-unstyled-repeat list-group mb-0"></ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    `
}

HierarchicalPicklistMultiSelectionEdit.storyName = 'Selection (edit)'

HierarchicalPicklistMultiSelectionEdit.parameters = {
  notes: `
  
  #Sample Code

  \`\`\`html
  ${hierarchical_picklist_selection_edit_html}
  \`\`\`

  `
}
