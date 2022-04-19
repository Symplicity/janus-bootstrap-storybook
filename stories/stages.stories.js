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
<div class="stage-container">
  <div class="stage-header bg-light p-2 rounded-top d-flex">
    <button class="border-0 bg-transparent p-0 d-flex align-items-center" aria-label="Drag">
      <svg class="icon-lg-font-size" aria-hidden="true">
        <use xlink:href="/path/to/icon-sprite.svg#tabler-zz-drag-dots" />
      </svg>
    </button>
    <div class="stage-header-title d-flex">
      <span class="title lh-sm ps-2">Case Received</span>
    </div>
    <div class="stage-header-controls d-flex ms-auto">
      <button class="border-0 bg-transparent p-0 ms-2 d-flex align-items-center" aria-label="Locked">
        <svg class="icon-lg-font-size" aria-hidden="true">
          <use xlink:href="/path/to/icon-sprite.svg#tabler-lock" />
        </svg>
      </button>
      <button class="border-0 bg-transparent p-0 ms-2 d-flex align-items-center" aria-label="More Actions">
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
  <div class="stage-container">
    <div class="stage-header bg-light p-2 rounded-top d-flex">
      <button class="border-0 bg-transparent p-0 d-flex align-items-center" aria-label="Drag">
        <svg class="icon-lg-font-size" aria-hidden="true">
          <use xlink:href="${iconSprite}#tabler-zz-drag-dots" />
        </svg>
      </button>
      <div class="stage-header-title d-flex">
        <span class="title lh-sm ps-2">${stageTitle}</span>
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