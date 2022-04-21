import iconSprite from '../node_modules/@symplicity/tabler-icons/symplicity/tabler-sprite-nostroke.svg'

import { text } from '@storybook/addon-knobs'

export default {
  title: 'Components/Stages'
}

const moreDocumentation = `
#Additional Documentation
For additional documentation, see:

- Bootstrap Documentation
- Design System 

`
const stages_html = `
<div class="stage-container mt-3 mx-auto">
  <div class="stage-header bg-light p-2 rounded-top d-flex">
    <button class="border-0 bg-transparent p-0 d-flex align-items-center" aria-label="Drag">
      <svg class="icon-lg-font-size" aria-hidden="true">
        <use xlink:href="/path/to/icon-sprite.svg#tabler-zz-drag-dots" />
      </svg>
    </button>
    <div class="stage-header-title d-flex align-items-center position-relative w-100">
      <span class="title ps-2 fs-5 text-truncate">Case Received</span>
      <div class="move-controls d-flex position-absolute h-100 end-0">
        <button class="border-0 bg-transparent p-0 d-flex align-items-center" aria-label="Move Left">
          <svg class="icon-lg-font-size" aria-hidden="true">
            <use xlink:href="/path/to/icon-sprite.svg#tabler-arrow-left" />
          </svg>
        </button>
        <button class="border-0 bg-transparent p-0 ms-2 d-flex align-items-center" aria-label="Move Right">
          <svg class="icon-lg-font-size" aria-hidden="true">
            <use xlink:href="/path/to/icon-sprite.svg#tabler-arrow-right" />
          </svg>
        </button>
      </div>
    </div>
    <div class="stage-header-controls d-flex ms-auto">
      <button class="border-0 bg-transparent p-0 ms-2 d-flex align-items-center" aria-label="Locked">
        <svg class="icon-lg-font-size" aria-hidden="true">
          <use xlink:href="/path/to/icon-sprite.svg#tabler-lock" />
        </svg>
      </button>
      <button class="border-0 bg-transparent p-0 ms-2 d-flex align-items-center" aria-label="More Options">
        <svg class="icon-lg-font-size" aria-hidden="true">
          <use xlink:href="/path/to/icon-sprite.svg#tabler-dots" />
        </svg>
      </button>
    </div>
  </div>
</div>
`

export const Stages = () => {
  function isTouchDevice() {
    return (
      true ==
      ('ontouchstart' in window ||
        (window.DocumentTouch && document instanceof DocumentTouch))
    )
  }

  if (isTouchDevice() === false) {
    setTimeout(function () {
      var tooltipTriggerList = [].slice.call(
        document.querySelectorAll('[data-bs-toggle="tooltip"]')
      )
      var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
      })
    }, 0)
  }

  const stageTitle = text('Stage Title', 'Case Received')

  return `
  <div class="stage-container mt-3 mx-auto">
    <div class="stage-header bg-light p-2 rounded-top d-flex">
      <button class="border-0 bg-transparent p-0 d-flex align-items-center" aria-label="Drag">
        <svg class="icon-lg-font-size" aria-hidden="true">
          <use xlink:href="${iconSprite}#tabler-zz-drag-dots" />
        </svg>
      </button>
      <div class="stage-header-title d-flex align-items-center position-relative w-100">
        <span class="title ps-2 fs-5 text-truncate">${stageTitle}</span>
        <div class="move-controls d-flex position-absolute h-100 end-0">
          <button class="border-0 bg-transparent p-0 d-flex align-items-center" aria-label="Move Left">
            <svg class="icon-lg-font-size" aria-hidden="true">
              <use xlink:href="${iconSprite}#tabler-arrow-left" />
            </svg>
          </button>
          <button class="border-0 bg-transparent p-0 ms-2 d-flex align-items-center" aria-label="Move Right">
            <svg class="icon-lg-font-size" aria-hidden="true">
              <use xlink:href="${iconSprite}#tabler-arrow-right" />
            </svg>
          </button>
        </div>
      </div>
      <div class="stage-header-controls d-flex ms-auto">
        <button class="border-0 bg-transparent p-0 ms-2 d-flex align-items-center" aria-label="Locked">
          <svg class="icon-lg-font-size" aria-hidden="true">
            <use xlink:href="${iconSprite}#tabler-lock" />
          </svg>
        </button>
        <button class="border-0 bg-transparent p-0 ms-2 d-flex align-items-center" aria-label="More Options">
          <svg class="icon-lg-font-size" aria-hidden="true">
            <use xlink:href="${iconSprite}#tabler-dots" />
          </svg>
        </button>
      </div>
    </div>
  </div>
`
}

Stages.storyName = 'Stages'

Stages.parameters = {
  notes: `

    # Stages

    ###HTML

    \`\`\`html
    ${stages_html}
    \`\`\`
    
    ${moreDocumentation}
    
  `
}
