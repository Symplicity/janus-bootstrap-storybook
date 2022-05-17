import iconSprite from '../node_modules/@symplicity/tabler-icons/symplicity/tabler-sprite-nostroke.svg'

export default {
  title: 'Components/List Items'
}

const moreDocumentation = `
  #Additional Documentation
  For additional documentation, see:

  - Bootstrap Documentation
  - Design System 
`

const getEditors = (type) => {
  const label = type.editor_group._label
  return label ? label.join(', ') : 'N/A'
}

const getPublishers = (type) => {
  const label = type.publisher_group._label
  return label ? label.join(', ') : 'N/A'
}

const listContent = (type) => {
  return `
    <li tabindex="0" class="case-type-item rounded-2 px-md-5 p-3 mb-3 d-flex">
      <div class="case-type-item-drag-handle d-sm-block d-md-flex 
      position-relative align-items-center me-2">
        <a href="#" role="button" class="border-0 bg-transparent p-0 d-flex align-items-start">
          <svg class="icon-lg-font-size text-muted">
            <use xlink:href="${iconSprite}#tabler-grip-vertical" />
            <span class="visually-hidden">Move Case Type</span>
          </svg>
        </a>
      </div>
      <div class="case-type-item-body w-100 d-flex flex-column justify-content-start position-relative overflow-hidden">
        <div class="case-top d-sm-flex align-items-center">
          <div class="case-title d-flex mb-0 me-2">
            <h3 class="h3 mb-0 me-2 lh-1 d-inline-block text-truncate">
                ${type.name}
            </h3>
          </div>
          <div class="case-status-wrapper d-flex justify-content-start mt-md-0">
              <span class="case-status mb-0 me-2">
                  <span class="badge badge-light-green rounded-pill text-uppercase lh-1 fs-7">
                      ${type.status._label ? type.status._label : 'Inactive'}
                  </span>
              </span>
              <span class="case-status mb-0">
                  <span class="badge badge-light-gray rounded-pill text-uppercase lh-1 fs-7">
                      ${type.published ? 'Published' : 'Not Pubslished'}
                  </span>
              </span>
          </div>
        </div>
        <div class="case-bottom fs-5 mt-1">
          <div>
            <span class="text-muted me-1">Workflow Editors:</span>
            <span class="text-dark fw-semibold">${getEditors(type)}</span>
          </div>
          <div>
            <span class="text-muted me-1">Publishers:</span>
            <span class="text-dark fw-semibold">${getPublishers(type)}</span>
          </div>
        </div>
      </div>
      <div class="case-actions-sm d-sm-flex d-md-none">
        <div class="btn-group d-inline" dropdown>
          <a href="#" role="button" class="border-0 bg-transparent p-0 d-flex align-items-center" data-bs-toggle="dropdown"  dropdownToggle>
            <svg class="icon-lg-font-size text-muted">
              <use xlink:href="${iconSprite}#tabler-dots" />
              <span class="visually-hidden">Move Case Type</span>
            </svg>
          </a>
          <ul class="dropdown-menu dropdown-menu-end shadow-sm mt-1 minw-auto" *dropdownMenu>
            <li role="menuitem">
              <button class="btn btn-action">
                <svg class="icon-lg-font-size mt-n1">
                  <use xlink:href="${iconSprite}#tabler-edit" />
                  <span class="visually-hidden">Edit Case Type</span>
                </svg>
              </button>
            </li>
            <li role="menuitem">
              <button class="btn btn-action">
                <svg class="icon-lg-font-size mt-n1">
                  <use xlink:href="${iconSprite}#tabler-copy" />
                  <span class="visually-hidden">Copy Case Type</span>
                </svg>
              </button>
            </li>
            <li role="menuitem">
              <button class="btn btn-action">
                <svg class="icon-lg-font-size mt-n1">
                  <use xlink:href="${iconSprite}#tabler-arrow-up" />
                  <span class="visually-hidden">Move Up Case Type</span>
                </svg>
              </button>
            </li>
            <li role="menuitem">
              <button class="btn btn-action">
                <svg class="icon-lg-font-size mt-n1">
                  <use xlink:href="${iconSprite}#tabler-arrow-down" />
                  <span class="visually-hidden">Move Down Case Type</span>
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div class="case-actions-lg d-md-flex d-sm-none align-items-center">
        <div class="d-md-flex">
          <ul class="list-unstyled d-md-flex">
            <li role="menuitem">
              <button class="border-0 bg-transparent mx-1 p-0">
                <svg class="icon-lg-font-size mt-n1 text-muted">
                    <use xlink:href="${iconSprite}#tabler-edit" />
                    <span class="visually-hidden">Edit Case Type</span>
                </svg>
              </button>
            </li>
            <li role="menuitem">
              <button class="border-0 bg-transparent mx-1 p-0">
                <svg class="icon-lg-font-size mt-n1 text-muted">
                    <use xlink:href="${iconSprite}#tabler-copy" />
                    <span class="visually-hidden">Copy Case Type</span>
                </svg>
              </button>
            </li>
            <li role="menuitem">
              <button class="border-0 bg-transparent mx-1 p-0">
                <svg class="icon-lg-font-size mt-n1 text-muted">
                    <use xlink:href="${iconSprite}#tabler-arrow-up" />
                    <span class="visually-hidden">Move Up Case Type</span>
                </svg>
              </button>
            </li>
            <li role="menuitem">
              <button class="border-0 bg-transparent mx-1 p-0">
                <svg class="icon-lg-font-size mt-n1 text-muted">
                  <use xlink:href="${iconSprite}#tabler-arrow-down" />
                  <span class="visually-hidden">Move Down Case Type</span>
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </li>
    `
}
const caseTypeHtml = `
  <div class="case-type-container container d-flex flex-column p-3">
      <div class="d-flex justify-content-between align-items-center py-10">
          <span class="fs-7 text-muted">CASE TYPES</span>
          <button type="button" class="d-flex btn text-muted p-0 minw-auto" aria-label="New Case Type">
            <svg class="icon-lg-font-size">
              <use xlink:href="${iconSprite}#tabler-circle-plus" />
              <span class="visually-hidden">New Case Type</span>
            </svg>
          </button>
      </div>
      <ul class="case-type-list ps-0 mb-0"></ul>
      <div class="case-type-actions w-100 d-flex justify-content-start mb-3">
          <button type="button" class="btn d-flex align-items-center p-0" aria-label="New Case Type">
            <svg class="icon-lg-font-size me-1">
                <use xlink:href="${iconSprite}#tabler-circle-plus" />
                <span class="visually-hidden">New Case Type</span>
            </svg>
            Add Case Type
          </button>
      </div>
  </div>
`

export const CaseType = () => {
  const container = $(
    '<div class="m-0" style="background: #fafafa;"></div>'
  ).append(caseTypeHtml)
  const caseTypeData = [
    {
      fw_case_type_id: '2d0fe578b253508de994df008c650363',
      name: 'Academic Misconduct',
      status: {
        _id: 'active',
        _label: 'Active'
      },
      available_student_public: 0,
      published: true,
      editor_group: {
        _id: null,
        _label: ['Deans', 'Training Group']
      },
      publisher_group: {
        _id: null,
        _label: ['Deans', 'Training Group']
      },
      _created: null,
      _modified: 'Wednesday, March 16, 2022 at 5:14 PM'
    },
    {
      fw_case_type_id: 'ae684ba7a56fcfd50c016c3083e36817',
      name: 'Student Grievance or Complaint',
      status: {
        _id: 'active',
        _label: 'Active'
      },
      available_student_public: 0,
      published: true,
      editor_group: {
        _id: null,
        _label: ['Dani Director']
      },
      publisher_group: {
        _id: null,
        _label: null
      },
      _created: null,
      _modified: 'Wednesday, March 16, 2022 at 5:15 PM'
    }
  ]

  setTimeout(() => {
    const createListItems = document.querySelector('.case-type-list')
    createListItems.innerHTML = `
      ${caseTypeData.map((item, i) => listContent(item)).join('')}
    `
  }, 100)
  return container[0]
}

CaseType.storyName = 'Case Type'

CaseType.parameters = {
  notes: `
    # Case Type
    ###HTML
    \`\`\`html
    ${caseTypeHtml}
    \`\`\`
    ${moreDocumentation}
  `
}
