import iconSprite from '../node_modules/@symplicity/tabler-icons/symplicity/tabler-sprite-nostroke.svg'

export default {
  title: 'Components/Stepping Bar'
}

const moreDocumentation = `
#Additional Documentation
For additional documentation, see:

- Bootstrap Documentation
- Design System 

`

const stepping_bar_four_steps_html = `
<div class="float-start float-md-none d-flex justify-content-center position-relative steps four-steps">
  <ol class="d-flex flex-nowrap list-unstyled align-items-center px-1 px-md-3 mb-0">
    <li class="first done w-100">
      <button class="btn btn-link text-decoration-none text-dark p-3 p-md-7 border-0">
        <span class="step-icon bg-success rounded-circle text-white d-inline-block icon-xl-font-size mb-6">
          <svg class="text-white icon-base-font-size">
            <use xlink:href="${iconSprite}#tabler-check" />
          </svg>
        </span>
        <span class="visually-hidden">Step: 1 Complete</span>
        <span class="text-nowrap d-block lh-1">Configure Collection</span>
      </button>
    </li>
    <li class="done w-100">
      <button class="btn btn-link text-decoration-none text-dark p-3 p-md-7 border-0">
        <span class="step-icon bg-success rounded-circle text-white d-inline-block icon-xl-font-size mb-6">
          <svg class="text-white icon-base-font-size">
            <use xlink:href="${iconSprite}#tabler-check" />
          </svg>
        </span>
        <span class="visually-hidden">Step: 2 Complete</span>
        <span class="text-nowrap d-block lh-1">Add Case Types</span>
      </button>
    </li>
    <li class="current w-100">
      <button class="btn btn-link text-decoration-none text-dark p-3 p-md-7 border-0">
        <span class="step-number bg-primary rounded-circle text-white d-inline-block icon-xl-font-size mb-6">
          <span class="fs-6 d-flex align-items-center justify-content-center">3</span>
        </span>
        <span class="visually-hidden">Step: 3 Current</span>
        <span class="text-nowrap d-block lh-1">
          <strong>Review</strong>
        </span>
      </button>
    </li>
    <li class="disabled last w-100">
      <button class="btn btn-link text-decoration-none text-dark p-3 border-0" disabled>
        <span class="step-number rounded-circle d-inline-block icon-xl-font-size mb-6">
          <span class="fs-6 d-flex align-items-center justify-content-center">4</span>
        </span>
        <span class="visually-hidden">Step: 4</span>
        <span class="text-nowrap d-block lh-1">What's Next?</span>
      </button>
    </li>
  </ol>
</div>
`

export const SteppingBarFourSteps = () => {
  const container = $(
    '<div class="text-center" style="margin:100px 0 0;"></div>'
  ).append(stepping_bar_four_steps_html)

  return container[0]
}

SteppingBarFourSteps.storyName = '4-Steps'

SteppingBarFourSteps.parameters = {
  notes: `

    # Stepping Bar 4-Steps

    ###HTML

    \`\`\`html
    ${stepping_bar_four_steps_html}
    \`\`\`
    
    ${moreDocumentation}
    
  `
}

const stepping_bar_six_steps_html = `
<div class="float-start float-md-none d-flex justify-content-center position-relative steps six-steps">
  <ol class="d-flex flex-nowrap list-unstyled align-items-center px-1 px-md-3 mb-0">
    <li class="first done w-100">
      <button class="btn btn-link text-decoration-none text-dark p-3 p-md-7 border-0">
        <span class="step-icon bg-success rounded-circle text-white d-inline-block icon-xl-font-size mb-6">
          <svg class="text-white icon-base-font-size">
            <use xlink:href="${iconSprite}#tabler-check" />
          </svg>
        </span>
        <span class="visually-hidden">Step: 1 Complete</span>
        <span class="text-nowrap d-block lh-1">Build Intake Form</span>
      </button>
    </li>
    <li class="done w-100">
      <button class="btn btn-link text-decoration-none text-dark p-3 p-md-7 border-0">
        <span class="step-icon bg-success rounded-circle text-white d-inline-block icon-xl-font-size mb-6">
          <svg class="text-white icon-base-font-size">
            <use xlink:href="${iconSprite}#tabler-check" />
          </svg>
        </span>
        <span class="visually-hidden">Step: 2 Complete</span>
        <span class="text-nowrap d-block lh-1">Build Processing Form</span>
      </button>
    </li>
    <li class="current w-100">
      <button class="btn btn-link text-decoration-none text-dark p-3 p-md-7 border-0">
        <span class="step-number bg-primary rounded-circle text-white d-inline-block icon-xl-font-size mb-6">
          <span class="fs-6 d-flex align-items-center justify-content-center">3</span>
        </span>
        <span class="visually-hidden">Step: 3 Current</span>
        <span class="text-nowrap d-block lh-1">
          <strong>Add Stages</strong>
        </span>
      </button>
    </li>
    <li class="disabled last w-100">
      <button class="btn btn-link text-decoration-none text-dark p-3 border-0" disabled>
        <span class="step-number rounded-circle d-inline-block icon-xl-font-size mb-6">
          <span class="fs-6 d-flex align-items-center justify-content-center">4</span>
        </span>
        <span class="visually-hidden">Step: 4</span>
        <span class="text-nowrap d-block lh-1">Review</span>
      </button>
    </li>
    <li class="disabled last w-100">
      <button class="btn btn-link text-decoration-none text-dark p-3 border-0" disabled>
        <span class="step-number rounded-circle d-inline-block icon-xl-font-size mb-6">
          <span class="fs-6 d-flex align-items-center justify-content-center">5</span>
        </span>
        <span class="visually-hidden">Step: 5</span>
        <span class="text-nowrap d-block lh-1">Configure Add-Ons</span>
      </button>
    </li>
    <li class="disabled last w-100">
      <button class="btn btn-link text-decoration-none text-dark p-3 border-0" disabled>
        <span class="step-number rounded-circle d-inline-block icon-xl-font-size mb-6">
          <span class="fs-6 d-flex align-items-center justify-content-center">6</span>
        </span>
        <span class="visually-hidden">Step: 6</span>
        <span class="text-nowrap d-block lh-1">Publish</span>
      </button>
    </li>
  </ol>
</div>
`

export const SteppingBarSixSteps = () => {
  const container = $(
    '<div class="text-center" style="margin:100px 0 0;"></div>'
  ).append(stepping_bar_six_steps_html)

  return container[0]
}

SteppingBarSixSteps.storyName = '6-Steps'

SteppingBarSixSteps.parameters = {
  notes: `

    # Stepping Bar 6-Steps

    ###HTML

    \`\`\`html
    ${stepping_bar_six_steps_html}
    \`\`\`
    
    ${moreDocumentation}
    
  `
}
