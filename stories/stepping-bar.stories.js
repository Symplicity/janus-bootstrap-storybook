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
<div class="steps d-flex justify-content-start justify-content-md-center position-relative text-center">
  <ol class="d-flex flex-nowrap list-unstyled align-items-center px-1 px-md-3 mb-0">
    <li class="first done">
      <div class="text-decoration-none text-dark py-3 px-7 py-md-7 px-md-9">
        <span class="step-icon position-relative bg-success rounded-circle text-white d-inline-block icon-xl-font-size">
          <svg class="text-white icon-lg-font-size">
            <use xlink:href="${iconSprite}#tabler-check" />
          </svg>
        </span>
        <span class="visually-hidden">Step: 1 Complete</span>
        <span class="text-nowrap d-block mt-6">Configure Collection</span>
      </div>
    </li>
    <li class="done">
      <div class="text-decoration-none text-dark py-3 px-7 py-md-7 px-md-9">
        <span class="step-icon position-relative bg-success rounded-circle text-white d-inline-block icon-xl-font-size">
          <svg class="text-white icon-lg-font-size">
            <use xlink:href="${iconSprite}#tabler-check" />
          </svg>
        </span>
        <span class="visually-hidden">Step: 2 Complete</span>
        <span class="text-nowrap d-block mt-6">Add Case Types</span>
      </div>
    </li>
    <li class="current">
      <div class="text-decoration-none text-dark py-3 px-7 py-md-7 px-md-9">
        <span class="step-number position-relative bg-primary rounded-circle text-white d-inline-flex icon-xl-font-size">
          <span class="d-flex justify-content-center">3</span>
        </span>
        <span class="visually-hidden">Step: 3 Current</span>
        <span class="text-nowrap d-block mt-6 fw-bold">
          Review
        </span>
      </div>
    </li>
    <li class="disabled last">
      <div class="text-decoration-none text-dark py-3 px-7 py-md-7 px-md-9">
        <span class="step-number position-relative rounded-circle d-inline-flex icon-xl-font-size">
          <span class="d-flex justify-content-center">4</span>
        </span>
        <span class="visually-hidden">Step: 4</span>
        <span class="text-nowrap d-block mt-6">
          What's Next?
        </span>
      </div>
    </li>
  </ol>
</div>
`

export const SteppingBarFourSteps = () => {
  const container = $(
    '<div style="margin:100px 0 0; overflow-x: auto;" tabindex="0"></div>'
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
<div class="steps d-flex justify-content-start justify-content-md-center position-relative text-center">
  <ol class="d-flex flex-nowrap list-unstyled align-items-center px-1 px-md-3 mb-0">
    <li class="first done">
      <div class="text-decoration-none text-dark py-3 px-7 py-md-7 px-md-9">
        <span class="step-icon position-relative bg-success rounded-circle text-white d-inline-block icon-xl-font-size">
          <svg class="text-white icon-lg-font-size">
            <use xlink:href="${iconSprite}#tabler-check" />
          </svg>
        </span>
        <span class="visually-hidden">Step: 1 Complete</span>
        <span class="text-nowrap d-block mt-6">Build Intake Form</span>
      </div>
    </li>
    <li class="done">
      <div class="text-decoration-none text-dark py-3 px-7 py-md-7 px-md-9">
        <span class="step-icon position-relative bg-success rounded-circle text-white d-inline-block icon-xl-font-size">
          <svg class="text-white icon-lg-font-size">
            <use xlink:href="${iconSprite}#tabler-check" />
          </svg>
        </span>
        <span class="visually-hidden">Step: 2 Complete</span>
        <span class="text-nowrap d-block mt-6">
          Build Processing Form
        </span>
      </div>
    </li>
    <li class="current">
      <div class="text-decoration-none text-dark py-3 px-7 py-md-7 px-md-9">
        <span class="step-number position-relative bg-primary rounded-circle text-white d-inline-flex icon-xl-font-size">
          <span class="d-flex justify-content-center">3</span>
        </span>
        <span class="visually-hidden">Step: 3 Current</span>
        <span class="text-nowrap d-block mt-6 fw-bold">
          Add Stages
        </span>
      </div>
    </li>
    <li class="disabled">
      <div class="text-decoration-none text-dark py-3 px-7 py-md-7 px-md-9">
        <span class="step-number position-relative rounded-circle d-inline-flex icon-xl-font-size">
          <span class="d-flex justify-content-center">4</span>
        </span>
        <span class="visually-hidden">Step: 4</span>
        <span class="text-nowrap d-block mt-6">
          Review
        </span>
      </div>
    </li>
    <li class="disabled">
      <div class="text-decoration-none text-dark py-3 px-7 py-md-7 px-md-9">
        <span class="step-number position-relative rounded-circle d-inline-flex icon-xl-font-size">
          <span class="d-flex justify-content-center">5</span>
        </span>
        <span class="visually-hidden">Step: 5</span>
        <span class="text-nowrap d-block mt-6">
        Configure Add-Ons
        </span>
      </div>
    </li>
    <li class="disabled last">
      <div class="text-decoration-none text-dark py-3 px-7 py-md-7 px-md-9">
        <span class="step-number position-relative rounded-circle d-inline-flex icon-xl-font-size">
          <span class="d-flex justify-content-center">6</span>
        </span>
        <span class="visually-hidden">Step: 6</span>
        <span class="text-nowrap d-block mt-6">
          Publish
        </span>
      </div>
    </li>    
  </ol>
</div>
`

export const SteppingBarSixSteps = () => {
  const container = $(
    '<div style="margin:100px 0 0; overflow-x: auto;" tabindex="0"></div>'
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
