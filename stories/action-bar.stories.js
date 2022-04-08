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
<div class="content position-absolute">test</div>
<div class="action-bar-container position-absolute align-items-center end-0 bg-light justify-content-md-end" tabindex="0">
  <div class="action-bar fixed-bottom d-flex flex-row flex-md-column align-items-center align-self-end align-self-md-center justify-content-center bg-light">
    <a href="/" class="d-block p-3 link-dark text-decoration-none" title="" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-original-title="Icon-only">
      <svg class="icon-lg-font-size">
        <use xlink:href="${iconSprite}#tabler-check" role="image" aria-label="Home" />
      </svg>
    </a>
    <ul class="nav nav-pills nav-flush flex-row flex-md-column mb-auto text-center d-flex-column flex-nowrap">
      <li class="nav-item">
        <a href="#" class="nav-link active py-3 border-bottom" aria-current="page" title="" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-original-title="Home">
          <svg class="icon-lg-font-size">
            <use xlink:href="${iconSprite}#tabler-check" role="image" aria-label="Home" />
          </svg>
        </a>
      </li>
      <li>
        <a href="#" class="nav-link py-3 border-bottom" title="" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-original-title="Dashboard">
          <svg class="icon-lg-font-size">
            <use xlink:href="${iconSprite}#tabler-check" role="image" aria-label="Home" />
          </svg>
        </a>
      </li>
      <li>
        <a href="#" class="nav-link py-3 border-bottom" title="" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-original-title="Orders">
          <svg class="icon-lg-font-size">
            <use xlink:href="${iconSprite}#tabler-check" role="image" aria-label="Home" />
          </svg>
        </a>
      </li>
      <li>
        <a href="#" class="nav-link py-3 border-bottom" title="" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-original-title="Products">
          <svg class="bi" width="24" height="24" role="img" aria-label="Products"><use xlink:href="${iconSprite}#tabler-check"></use></svg>
        </a>
      </li>
      <li>
        <a href="#" class="nav-link py-3 border-bottom" title="" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-original-title="Customers">
          <svg class="icon-lg-font-size">
            <use xlink:href="${iconSprite}#tabler-check" role="image" aria-label="Home" />
          </svg>
        </a>
      </li>
    </ul>
    <div class="dropdown border-top">
      <a href="#" class="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="mdo" width="24" height="24" class="rounded-circle">
      </a>
      <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
        <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
</div>
`

export const ActionBar = () => {
  const container = $(
    '<div style="position: unset !important; height: 100%; margin: 0; box-shadow: 0 0 5px 2px red inset;"></div>'
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
