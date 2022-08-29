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

const stepping_bar_horizontal_html = `
<div class="steps-horizontal position-relative d-flex justify-content-lg-center">
  <ol class="list-unstyled list-steps d-flex mb-0">
    <li class="list-steps-item position-relative completed">
      <div class="list-steps-item-body py-3 px-7" tabindex="0">
        <p class="text-muted fs-5 mt-4 mb-0 text-center text-nowrap">
          Build Intake Form
        </p>
      </div>   
    </li>
    <li class="list-steps-item position-relative completed">
      <div class="list-steps-item-body py-3 px-7" tabindex="0">
        <p class="text-muted fs-5 mt-4 mb-0 text-center text-nowrap">
          Build Processing Form
        </p>
      </div>   
    </li>
    <li class="list-steps-item position-relative selected">
      <div class="list-steps-item-body py-3 px-7" tabindex="0">
        <p class="text-muted fs-5 mt-4 mb-0 text-center text-nowrap">
          <strong class="text-dark fw-semibold">Add Stages</strong>
        </p>
      </div>   
    </li>
    <li class="list-steps-item position-relative">
      <div class="list-steps-item-body py-3 px-7" tabindex="0">
        <p class="text-muted fs-5 mt-4 mb-0 text-center text-nowrap">
          Review
        </p>
      </div>   
    </li>
    <li class="list-steps-item position-relative">
      <div class="list-steps-item-body py-3 px-7" tabindex="0">
        <p class="text-muted fs-5 mt-4 text-center text-nowrap">
          Configure Add-Ons
        </p>
      </div>   
    </li>
    <li class="list-steps-item position-relative">
      <div class="list-steps-item-body py-3 px-7" tabindex="0">
        <p class="text-muted fs-5 mt-4 text-center text-nowrap">
          Publish
        </p>
      </div>   
    </li>
  </ol>
</div>
`

export const SteppingBarHorizontal = () => {
  const container = $(
    '<div style="margin: 100px 0 0;" tabindex="0"></div>'
  ).append(stepping_bar_horizontal_html)

  return container[0]
}

SteppingBarHorizontal.storyName = 'Horizontal'

SteppingBarHorizontal.parameters = {
  notes: `

    # Stepping Bar Horizontal

    ###HTML

    \`\`\`html
    ${stepping_bar_horizontal_html}
    \`\`\`
    
    ${moreDocumentation}
    
  `
}

const stepping_bar_vertical_html = `
<div class="steps-vertical d-flex">
  <ol class="list-unstyled list-steps">
    <li class="list-steps-item position-relative p-2 completed">
      <div class="list-steps-item-body d-flex align-items-start">
        <p class="text-muted fs-5 mb-2 mt-n2 top-0">
          <strong class="text-dark fw-semibold">Ipsum Lorem</strong><br/>
          Donec sollicitudin molestie malesuada
        </p>
      </div>   
    </li>
    <li class="list-steps-item position-relative p-2 selected">
      <div class="list-steps-item-body d-flex align-items-start">
        <p class="text-muted fs-5 mb-2 mt-n2 top-0">
          <strong class="text-dark fw-semibold">Ipsum Lorem</strong><br/>
          Donec sollicitudin molestie malesuada
        </p>
      </div>   
    </li>
    <li class="list-steps-item position-relative p-2">
      <div class="list-steps-item-body d-flex align-items-start">
        <p class="text-muted fs-5 mb-2 mt-n2 top-0">
          <strong class="text-dark fw-semibold">Ipsum Lorem</strong><br/>
          Donec sollicitudin molestie malesuada
        </p>
      </div>   
    </li>
    <li class="list-steps-item position-relative p-2">
      <div class="list-steps-item-body d-flex align-items-start">
        <p class="text-muted fs-5 mb-2 mt-n2 top-0">
          <strong class="text-dark fw-semibold">Ipsum Lorem</strong><br/>
          Donec sollicitudin molestie malesuada
        </p>
      </div>   
    </li>
  </ol>
</div>
`

export const SteppingBarVertical = () => {
  const container = $('<div style="margin: 50px; tabindex="0"></div>').append(
    stepping_bar_vertical_html
  )

  return container[0]
}

SteppingBarVertical.storyName = 'Vertical'

SteppingBarVertical.parameters = {
  notes: `

    # Stepping Bar Vertical

    ###HTML

    \`\`\`html
    ${stepping_bar_vertical_html}
    \`\`\`
    
    ${moreDocumentation}
    
  `
}
