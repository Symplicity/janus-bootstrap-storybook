import iconSprite from '../node_modules/@symplicity/tabler-icons/symplicity/tabler-sprite-nostroke.svg'

export default {
  title: 'Components/Steps'
}

const moreDocumentation = `
#Additional Documentation
For additional documentation, see:

- Bootstrap Documentation
- Design System 

`

const steps_html = `
<div class="d-flex">
  <ol class="d-flex flex-nowrap list-unstyled align-items-center">
    <li class="first done me-5 w-100">
      <button class="btn btn-link">
        <span class="step-icon bg-success rounded-circle text-white d-inline-block icon-xl-font-size">
          <svg class="text-white icon-xl-font-size">
            <use xlink:href="${iconSprite}#tabler-check" />
          </svg>
        </span>
        <span class="visually-hidden">Step: 1 Complete</span>
        <span class="text-nowrap">Configure Collection</span>
      </button>
    </li>
    <li class="done mx-5 w-100">
      <button class="btn btn-link">
        <span class="step-icon bg-success rounded-circle text-white d-inline-block icon-xl-font-size">
          <svg class="text-white icon-xl-font-size">
            <use xlink:href="${iconSprite}#tabler-check" />
          </svg>
        </span>
        <span class="visually-hidden">Step: 2 Complete</span>
        <span class="text-nowrap">Add Case Types</span>
      </button>
    </li>
    <li class="current mx-5 w-100">
      <button class="btn btn-link">
        <span class="step-icon bg-primary rounded-circle text-white icon-xl-font-size d-inline-block">
          3
        </span>
        <span class="visually-hidden">Step: 3 Current</span>
        <span class="text-nowrap">Review</span>
      </button>
    </li>
    <li class="disabled last ms-5 w-100">
      <button class="btn btn-link">
        <span class="step-icon bg-light rounded-circle text-dark icon-xl-font-size d-inline-block">
          4
        </span>
        <span class="visually-hidden">Step: 4</span>
        <span class="text-nowrap">What's Next?</span>
      </button>
    </li>
  </ol>
</div>
`

export const Steps = () => {
  const container = $(
    '<div class="text-center" style="margin-top:100px"></div>'
  ).append(steps_html)

  return container[0]
}

Steps.storyName = 'Steps'

Steps.parameters = {
  notes: `

    # Steps

    ###HTML

    \`\`\`html
    ${steps_html}
    \`\`\`
    
    ${moreDocumentation}
    
  `
}
