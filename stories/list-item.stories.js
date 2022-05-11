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
  return (label) ? label.join(', ') : 'N/A';
}

const getPublishers = (type) => {
  const label = type.publisher_group._label
  return (label) ? label.join(', ') : 'N/A';
}

const listContent = (type) => {
  return (
    `
    <li class="bg-white px-sm-1 px-md-5 py-3 mb-3 d-flex align-items-baseline">
      <div class="case-change-pos me-3 d-sm-block d-md-none">
          <svg class="icon-lg-font-size mt-n1 text-muted">
              <use xlink:href="${iconSprite}#tabler-grip-vertical" />
              <span class="visually-hidden">Move Case Type</span>
          </svg>
      </div>
      <div class="case-type-card w-100 d-flex flex-column justify-content-start position-relative">
          <div class="case-top d-flex justify-content-start align-items-start flex-sm-column flex-md-row">
              <h3 class="case-title h3 mb-0 me-2 lh-1">
                  <a>${ type.name }</a>
              </h3>
              <div class="case-status-wrapper d-flex justify-content-start">
                  <span class="case-status h4 text-uppercase mb-0 me-2">
                      <span class="badge rounded-pill bg-opacity-10 bg-success text-black-50">
                          ${ type.status._label ? type.status._label : 'Inactive' }
                      </span>
                  </span>
                  <span class="case-status h4 text-uppercase mb-0">
                      <span class="badge rounded-pill bg-opacity-10 bg-success text-black-50">
                          ${ type.published ? 'Published' : 'Not Pubslished' }
                      </span>
                  </span>
              </div>
              <div class="case-actions-sm position-absolute end-0 d-sm-flex d-md-none">
                  <div class="btn-group" dropdown>
                      <svg class="icon-lg-font-size mt-n1 text-muted" role="button" data-bs-toggle="dropdown" id="dropdownMenuButtonActions" dropdownToggle>
                          <use xlink:href="${iconSprite}#tabler-dots" />
                          <span class="visually-hidden">Move Case Type</span>
                      </svg>
                      <ul class="dropdown-menu dropdown-menu-end shadow-sm mt-1" *dropdownMenu aria-labelledby="dropdownMenuButtonActions">
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
              <div class="case-actions position-absolute end-0 d-sm-none">
                  <div class="d-sm-none d-md-flex">
                      <button class="btn btn-action">
                          <svg class="icon-lg-font-size mt-n1">
                              <use xlink:href="${iconSprite}#tabler-edit" />
                              <span class="visually-hidden">Edit Case Type</span>
                          </svg>
                      </button>
                      <button class="btn btn-action">
                          <svg class="icon-lg-font-size mt-n1">
                              <use xlink:href="${iconSprite}#tabler-copy" />
                              <span class="visually-hidden">Copy Case Type</span>
                          </svg>
                      </button>
                      <button class="btn btn-action">
                          <svg class="icon-lg-font-size mt-n1">
                              <use xlink:href="${iconSprite}#tabler-arrow-up" />
                              <span class="visually-hidden">Move Up Case Type</span>
                          </svg>
                      </button>
                      <button class="btn btn-action">
                          <svg class="icon-lg-font-size mt-n1">
                            <use xlink:href="${iconSprite}#tabler-arrow-down" />
                            <span class="visually-hidden">Move Down Case Type</span>
                          </svg>
                      </button>
                  </div>
              </div>
          </div>
          <div class="case-bottom d-flex justify-content-start lh-sm flex-sm-column flex-md-row mt-sm-2">
              <div class="text-black-50">Workflow Editors:<span class="ps-1 text-dark">${ getEditors(type) }</span></div>
              <div class="text-black-50 ms-sm-0 ms-md-2">Publishers:<span class="ps-1 text-dark">${ getPublishers(type) }</span></div>
          </div>
      </div>
    </li>
  `
  )
}
const caseTypeHtml = `
  <div class="case-type-container container d-flex flex-column">
      <div class="header d-flex justify-content-between">
          <span class="fs-6 text-muted">CASE TYPES</span>
          <button type="button" class="btn text-muted pe-0" aria-label="New Case Type">
            <svg class="icon-lg-font-size">
              <use xlink:href="${iconSprite}#tabler-circle-plus" />
              <span class="visually-hidden">New Case Type</span>
            </svg>
          </button>
      </div>
      <ul class="case-type-list ps-0"></ul>
      <div class="case-type-actions w-100 d-flex justify-content-start">
          <button type="button" class="btn d-flex align-items-center" aria-label="New Case Type">
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
  const container = $('<div class="container mt-3 mb-2 mx-auto overflow-auto" style="background-color: #fafafa;"></div>').append(caseTypeHtml)
  const caseTypeData = [
    {
      fw_case_type_id: "2d0fe578b253508de994df008c650363",
      name: "Academic Misconduct",
      status: {
        _id: "active",
        _label: "Active"
      },
      available_student_public: 0,
      published: true,
      editor_group: {
        _id: null,
        _label: [
          "Deans",
          "Training Group"
        ]
      },
      publisher_group: {
        _id: null,
        _label: [
          "Deans",
          "Training Group"
        ]
      },
      _created: null,
      _modified: "Wednesday, March 16, 2022 at 5:14 PM"
    },
    {
      fw_case_type_id: "ae684ba7a56fcfd50c016c3083e36817",
      name: "Student Grievance or Complaint",
      status: {
        _id: "active",
        _label: "Active"
      },
      available_student_public: 0,
      published: true,
      editor_group: {
        _id: null,
        _label: [
          "Dani Director"
        ]
      },
      publisher_group: {
        _id: null,
        _label: null
      },
      _created: null,
      _modified: "Wednesday, March 16, 2022 at 5:15 PM"
    }
  ]

  setTimeout(() => {
    const createListItems = document.querySelector('.case-type-list')
    createListItems.innerHTML = `
      ${caseTypeData
        .map(
          (item, i) => listContent(item)
        )
        .join('')}
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
