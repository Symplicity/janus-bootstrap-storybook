import iconSprite from '../node_modules/@symplicity/tabler-icons/symplicity/tabler-sprite-nostroke.svg'

export default {
  title: 'Components/Action Bar'
}

const moreDocumentation = `
#Additional Documentation
For additional documentation, see:

- Bootstrap Documentation
- Design System 

`

const action_bar_html = `
<div class="action-bar-container position-absolute align-items-center end-0 justify-content-md-end" tabindex="0">
  <div class="action-bar fixed-bottom d-flex flex-row flex-md-column align-items-center align-self-end align-self-md-center justify-content-center">
    <ul class="nav nav-pills nav-flush flex-row flex-md-column mb-0 text-center d-flex-column flex-nowrap w-100 justify-content-between justify-content-md-center">
      <li class="nav-item pb-md-2">
        <a href="#" class="nav-link active p-3" aria-current="page" title="" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-original-title="Home">
          <svg class="icon-lg-font-size">
            <use xlink:href="${iconSprite}#tabler-check" role="image" aria-label="Home" />
          </svg>
        </a>
      </li>
      <li class="nav-item py-md-2">
        <a href="#" class="nav-link p-3" title="" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-original-title="Dashboard">
          <svg class="icon-lg-font-size">
            <use xlink:href="${iconSprite}#tabler-check" role="image" aria-label="Home" />
          </svg>
        </a>
      </li>
      <li class="nav-item py-md-2">
        <a href="#" class="nav-link p-3" title="" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-original-title="Orders">
          <svg class="icon-lg-font-size">
            <use xlink:href="${iconSprite}#tabler-check" role="image" aria-label="Home" />
          </svg>
        </a>
      </li>
      <li class="nav-item px-md-0 py-md-2">
        <a href="#" class="nav-link p-3" title="" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-original-title="Products">
          <svg class="icon-lg-font-size">
            <use xlink:href="${iconSprite}#tabler-check" role="image" aria-label="Home" />
          </svg>
        </a>
      </li>
      <li class="nav-item px-md-0 pt-md-2">
        <a href="#" class="nav-link p-3" title="" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-original-title="Customers">
          <svg class="icon-lg-font-size">
            <use xlink:href="${iconSprite}#tabler-check" role="image" aria-label="Home" />
          </svg>
        </a>
      </li>
    </ul>
  </div>
</div>
`

export const ActionBar = () => {
  const container = $(
    '<div style="position: unset !important; height: 100%; margin: 0;"></div>'
  ).append(action_bar_html)

  if (!('ontouchstart' in window)) {
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

ActionBar.storyName = 'Action Bar'

ActionBar.parameters = {
  notes: `

    # Action Bar

    ###HTML

    \`\`\`html
    ${action_bar_html}
    \`\`\`
    
    ${moreDocumentation}
    
  `
}
