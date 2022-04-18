import iconSprite from '../node_modules/@symplicity/tabler-icons/symplicity/tabler-sprite-nostroke.svg'

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
<button class="border-0 bg-transparent w-auto">
  <svg class="icon-lg-font-size">
    <use xlink:href="${iconSprite}#tabler-zz-drag-dots" />
  </svg>
</button>
`

export const Stages = () => {
  const container = $('<div style="margin: 100px 0 0 0;"></div>').append(
    stages_html
  )

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

  return container[0]
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
