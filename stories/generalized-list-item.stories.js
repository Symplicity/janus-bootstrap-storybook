import iconSprite from '../node_modules/@symplicity/tabler-icons/tabler-sprite-nostroke.svg'

export default {
  title: 'Components/List Items'
}

const moreDocumentation = `
  #Additional Documentation
  For additional documentation, see:

  - Bootstrap Documentation
  - Design System 
`

const getMetaInfo = (type) => {
  const label = type.label
  return label ? label.join(', ') : '-'
}

const listContent = (type) => {
  return `
    <li role="none">
      <div class="group focus-within ms-4 ms-lg-0 mb-3">
        <div class="card border-lg-primary position-relative transition-all">
          <div class="group-hover-lg-opacity group-hover-mt-0 transition-all drag-handle ms-n9 d-flex position-absolute mt-0 mt-lg-1 me-n9 h-100 pe-2">
            <button type="button" title="Drag to Position" aria-title="Drag to Position" tabindex="-1" class="btn p-2 d-flex align-items-center justify-content-center">
                <svg class="icon-lg-font-size">
                  <use xlink:href="${iconSprite}#tabler-grid-dots" />
                  <span class="visually-hidden">Drag to Position</span>
                </svg>
            </button>
          </div>
          <div class="d-flex py-3 align-items-center px-2 gap-2 pe-lg-4">
            <div class="">
              <button type="button" title="Collapse" aria-title="Collapse" aria-expanded="false" aria-owns="my-list-1" class="btn p-2 d-flex align-items-center justify-content-center">
                <svg class="icon-lg-font-size">
                  <use xlink:href="${iconSprite}#tabler-chevron-right" />
                  <span class="visually-hidden">Collapse</span>
                </svg>
              </button>
            </div>
            <div class="minw-0">
              <div class="position-relative">
                <div class="d-none d-md-flex align-items-center m-0 gap-2 lh-sm">
                  <div class="text-truncate mb-0 lh-sm">
                    <h3 class="m-0 text-truncate">
                      <a href="#" class="stretched-link lh-1">
                        ${type.name}
                      </a>
                    </h3>
                  </div>
                  <div class="badge bg-secondary flex-shrink-0">
                    Some Label
                  </div>
                </div>
                <div class="d-flex d-md-none align-items-center m-0 gap-2">
                  <div class="text-truncate mb-0 lh-sm">
                    <h4 class="m-0 text-truncate">
                      <a href="#" class="stretched-link lh-1">
                        ${type.name}
                      </a>
                    </h4>
                  </div>
                  <div class="badge bg-secondary flex-shrink-0">
                    Some Label
                  </div>
                </div>
                <p class="m-0 text-truncate minw-0">
                  ${type.description}
                </p>
                <dl class="d-flex flex-wrap flex-column flex-lg-row gap-0 m-0">
                  ${
                    type.metaA?.label?.length
                      ? `
                      <div class="d-flex gap-1 me-4">
                        <dt class="text-muted fw-normal">Meta:</dt>
                        <dd class="m-0">${getMetaInfo(type.metaA)}</dd>
                      </div>
                    `
                      : ''
                  }
                  ${
                    type.metaB?.label?.length
                      ? `
                      <div class="d-flex gap-1 me-4">
                        <dt class="text-muted fw-normal">Meta:</dt>
                        <dd class="m-0">${getMetaInfo(type.metaB)}</dd>
                      </div>
                    `
                      : ''
                  }
                  ${
                    type.metaC?.label?.length
                      ? `
                      <div class="d-flex gap-1 me-4">
                        <dt class="text-muted fw-normal">Meta:</dt>
                        <dd class="m-0">${getMetaInfo(type.metaC)}</dd>
                      </div>
                    `
                      : ''
                  }
                </dl>
              </div>
            </div>
            <div class="d-lg-none">
              <div class="btn-group">
                <button type="button" class="btn p-2 d-flex align-items-center justify-content-center" data-bs-toggle="dropdown" aria-expanded="false">
                  <svg class="icon-lg-font-size">
                    <use xlink:href="${iconSprite}#tabler-dots" />
                  </svg>
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Add Below</a></li>
                  <li><a class="dropdown-item" href="#">Copy</a></li>
                  <li><a class="dropdown-item" href="#">Move Up</a></li>
                  <li><a class="dropdown-item" href="#">Move Down</a></li>
                  <li>
                    <hr class="dropdown-divider">
                  </li>
                  <li><a class="dropdown-item" href="#">Delete</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="d-none d-lg-block card-actions group-hover-opacity h-100 transition-all me-n3 group-hover-me-0 position-absolute top-0 bottom-0">
            <div class="card-actions-container d-flex h-100 px-2">
              <div class="d-flex flex-row align-items-center gap-2 bg-white">
                <button type="button" title="Add Below" aria-title="Add Below" class="btn p-2 d-flex align-items-center justify-content-center">
                  <svg class="icon-lg-font-size">
                    <use xlink:href="${iconSprite}#tabler-circle-plus" />
                    <span class="visually-hidden">Add Below</span>
                  </svg>
                </button>
                <button type="button" title="Copy" aria-title="Copy" class="btn p-2 d-flex align-items-center justify-content-center">
                  <svg class="icon-lg-font-size">
                    <use xlink:href="${iconSprite}#tabler-copy" />
                    <span class="visually-hidden">Copy</span>
                  </svg>
                </button>
                <button type="button" title="Move Up" aria-title="Move Up" class="btn p-2 d-flex align-items-center justify-content-center">
                  <svg class="icon-lg-font-size">
                    <use xlink:href="${iconSprite}#tabler-arrow-up" />
                    <span class="visually-hidden">Move Up</span>
                  </svg>
                </button>
                <button type="button" title="Move Down" aria-title="Move Down" class="btn p-2 d-flex align-items-center justify-content-center">
                  <svg class="icon-lg-font-size">
                    <use xlink:href="${iconSprite}#tabler-arrow-down" />
                    <span class="visually-hidden">Move Down</span>
                  </svg>
                </button>
                <button type="button" title="Delete" aria-title="Delete" class="btn p-2 d-flex align-items-center justify-content-center">
                  <svg class="icon-lg-font-size">
                    <use xlink:href="${iconSprite}#tabler-trash" />
                    <span class="visually-hidden">Delete</span>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  `
}

const universalListHTML = `
<div class="universal-list-container container mx-auto text-left d-flex flex-column p-3">
  <ul aria-label="Expandable List" role="tree" class="universal-list list-unstyled"></ul>
</div>
`

export const GeneralizedListItem = () => {
  const container = $(
    '<div class="m-0" style="background: #fafafa;"></div>'
  ).append(universalListHTML)

  const caseTypeData = [
    {
      id: '1234',
      name: 'Academic Misconduct',
      description:
        'Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.',
      status: true,
      published: true,
      metaA: {
        label: ['Dream Team', 'The Squad']
      },
      metaB: {
        label: ['The Collective', 'The Crew']
      }
    },
    {
      id: '1235',
      name: 'Student Grievance or Complaint or Grievance or Complaint or Grievance or Complaint',
      description:
        'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.',
      status: false,
      published: true,
      metaA: {
        label: ['Training Group', 'The Squad']
      },
      metaB: {
        label: ['The Alliance', 'The Crew']
      },
      metaC: {
        label: [
          'The Collective',
          'The Crew',
          'The Circle of Trust',
          'The Fellowship'
        ]
      }
    }
  ]

  setTimeout(() => {
    const createListItems = document.querySelector('.universal-list')
    createListItems.innerHTML = `
      ${caseTypeData.map((item, i) => listContent(item)).join('')}
    `
  }, 100)
  return container[0]
}

GeneralizedListItem.storyName = 'Generalized List Item'

GeneralizedListItem.parameters = {
  notes: `
    # Generalized List Item
    ###HTML
    \`\`\`html
    ${universalListHTML}
    \`\`\`
    ${moreDocumentation}
  `
}
