import iconSprite from '../node_modules/@symplicity/tabler-icons/symplicity/tabler-sprite-nostroke.svg'

export default {
  title: 'Components/Navigation'
}

const moreDocumentation = `
#Additional Documentation
For additional documentation, see:

- Bootstrap Documentation
- Design System 

`

const desktop_navigation_html = `
  <div class="bg-light rounded m-3 mb-0 p-3 d-lg-none text-center">
    <p class="fs-4 m-4">
      This component only displays above the "lg" breakpoint (992px).<br><br>
      Increase the width of your screen until this message disappears.
    </p>
  </div>
  <div class="m-0 vh-100 d-none d-lg-block">
    <header class="d-block pt-0" style="max-width: 1400px; margin: 0 auto;">
      <nav class="d-block navbar navbar-light bg-white shadow-lg" aria-label="Main Navigation">
        <div class="d-flex justify-content-between align-items-center">
          <div class="d-flex align-items-center">
            <button class="main-nav-trigger border-0 navbar-toggler btn btn-action btn-action-icon-only btn-action-header ms-7 me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
              <svg width="1rem" height="1rem">
                <use xlink:href="${iconSprite}#tabler-menu-2" />
              </svg>
            </button>
            <svg class="bd-placeholder-img d-none d-md-block" width="170" height="64" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">170x64</text></svg>
          </div>
        </div>
      </nav>
      <nav class="main-nav navbar-collapse show mt-0 fs-5" id="navbarNav">
        <ul class="navbar-nav pt-2 pb-0">
          <li class="nav-item">
            <a class="nav-link text-dark ms-4 me-4 mt-10 mb-10 h-auto active" aria-current="page" href="#">
              <span>
                <svg width="1rem" height="1rem" class="me-2 mt-n1">
                  <use xlink:href="${iconSprite}#tabler-home" />
                </svg>
              </span>
              <span class="flex-fill">
                Home
              </span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark ms-4 me-4 mt-10 mb-10 h-auto" href="#">
              <span>
                <svg width="1rem" height="1rem" class="me-2 mt-n1">
                  <use xlink:href="${iconSprite}#tabler-briefcase" />
                </svg>
              </span>
              <span class="flex-fill">
                Jobs
              </span>
            </a>
          </li>
          <li class="nav-item">
            <div class="list-group">
              <a class="d-flex nav-link text-dark ms-4 me-4 mt-10 mb-10 h-auto text-decoration-none" type="button" id="dropdownMenu2" data-bs-toggle="collapse" data-bs-target="#navbarNav2" aria-controls="navbarNav2" aria-expanded="false" aria-label="Toggle navigation" href="#">
                <span>
                  <svg width="1rem" height="1rem" class="me-2 mt-n1">
                    <use xlink:href="${iconSprite}#tabler-calendar" />
                  </svg>
                </span>
                <span class="w-100">
                  Events
                </span>
                <span class="tabler-chevron-down h4 mt-0 mb-0 me-1 text-right">
                  <svg width="1rem" height="1rem">
                    <use xlink:href="${iconSprite}#tabler-chevron-down" />
                  </svg>
                </span>
              </a>
              <ul class="navbar-nav collapse ps-2" aria-labelledby="dropdownMenu2" id="navbarNav2">
                <li class="nav-item">
                  <a class="nav-link text-dark ms-3 me-4 mt-10 mb-10 h-auto" aria-current="page" href="#">
                    <span>
                      <svg width="1rem" height="1rem" class="me-2 mt-n1">
                        <use xlink:href="${iconSprite}#tabler-point-on" />
                      </svg>
                    </span>
                    <span class="flex-fill">
                      Career Fairs
                    </span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-dark ms-3 me-4 mt-10 mb-10 h-auto" aria-current="page" href="#">
                    <span>
                      <svg width="1rem" height="1rem" class="me-2 mt-n1">
                        <use xlink:href="${iconSprite}#tabler-point-on" />
                      </svg>
                    </span>
                    <span class="flex-fill">
                      Information Sessions
                    </span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-dark ms-3 me-4 mt-10 mb-10 h-auto active" aria-current="page" href="#">
                    <span>
                      <svg width="1rem" height="1rem" class="me-2 mt-n1">
                        <use xlink:href="${iconSprite}#tabler-point-on" />
                      </svg>
                    </span>
                    <span class="flex-fill">
                      On-Campus Job Interviews
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <hr class="ms-4 me-4 mt-2 mb-2">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link text-dark ms-4 me-4 mt-10 mb-10 h-auto" href="#">
              <span>
                <svg width="1rem" height="1rem" class="me-2 mt-n1">
                  <use xlink:href="${iconSprite}#tabler-home" />
                </svg>
              </span>
              <span class="flex-fill">
                Home
              </span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark ms-4 me-4 mt-10 mb-10 h-auto" href="#">
              <span>
                <svg width="1rem" height="1rem" class="me-2 mt-n1">
                  <use xlink:href="${iconSprite}#tabler-home" />
                </svg>
              </span>
              <span class="flex-fill">
                Home
              </span>
            </a>
          </li>
        </ul>
        <hr class="ms-4 me-4 mt-2 mb-2">
        <ul class="navbar-nav pb-4">
          <li class="nav-item">
            <a class="nav-link text-dark ms-4 me-4 mt-10 mb-10 h-auto" href="#">
              <span>
                <svg width="1rem" height="1rem" class="me-2 mt-n1">
                  <use xlink:href="${iconSprite}#tabler-home" />
                </svg>
              </span>
              <span class="flex-fill">
                Home
              </span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark ms-4 me-4 mt-10 mb-10 h-auto" href="#">
              <span>
                <svg width="1rem" height="1rem" class="me-2 mt-n1">
                  <use xlink:href="${iconSprite}#tabler-home" />
                </svg>
              </span>
              <span class="flex-fill">
                Home
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  </div>
`

export const DesktopNavigation = () => `${desktop_navigation_html}`

DesktopNavigation.storyName = 'Desktop'

DesktopNavigation.parameters = {
  notes: `

    ###HTML

    \`\`\`html
    ${desktop_navigation_html}
    \`\`\`
    
  `
}

const mobile_navigation_html = `
  <div class="bg-light rounded m-3 mb-0 p-3 d-none d-lg-block text-center">
    <p class="fs-4 m-4">
      This component only displays below the "lg" breakpoint (992px).<br><br>
      Decrease the width of your screen until this message disappears.
    </p>
  </div>
  <div class="bg-light m-0 vh-100 d-lg-none">
    <header class="d-block bg-white pt-0" style="max-width: 1400px; margin: 0 auto; background: #fff">
      <nav class="d-block navbar navbar-light shadow-lg" aria-label="Main Navigation">
        <div class="d-flex justify-content-between align-items-center">
          <div class="d-flex align-items-center">
            <button class="main-nav-trigger border-0 navbar-toggler btn btn-action btn-action-icon-only btn-action-header ms-8 me-7" data-bs-toggle="modal" data-bs-target="#myModal">
              <svg width="1rem" height="1rem">
                <use xlink:href="${iconSprite}#tabler-menu-2" />
              </svg>
              <span class="visually-hidden">Toggle Main Navigation</span>
            </button>
            <svg class="bd-placeholder-img d-none d-md-block" width="170" height="64" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">170x64</text></svg>
          </div>
        </div>
      </nav>
      <div class="modal p-0" id="myModal">
        <div class="modal-dialog modal-fullscreen">
          <nav class="main-nav pe-auto bg-white mt-0 pt-0 pb-4 overflow-auto h-100 fs-4" id="navbarNav">
            <div class="nav-header d-flex pt-2">
              <div class="main-nav-close d-flex align-items-center justify-content-center">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="d-flex align-items-end">
                <svg class="bd-placeholder-img" width="170" height="64" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">170x64</text></svg>
              </div>
            </div>
            <ul class="navbar-nav pb-0">
              <li class="nav-item">
                <a class="nav-link text-dark ps-3 pe-4 pt-6 pb-6 h-auto active" aria-current="page" href="#">
                  <span>
                    <svg width="1rem" height="1rem" class="me-2 mt-n1">
                      <use xlink:href="${iconSprite}#tabler-home" />
                    </svg>
                  </span>
                  <span class="flex-fill">
                    Home
                  </span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark ps-4 pe-4 pt-6 pb-6 h-auto" href="#">
                  <span>
                    <svg width="1rem" height="1rem" class="me-2 mt-n1">
                      <use xlink:href="${iconSprite}#tabler-briefcase" />
                    </svg>
                  </span>
                  <span class="flex-fill">
                    Jobs
                  </span>
                </a>
              </li>
              <li class="nav-item">
                <div class="list-group">
                  <a class="d-flex nav-link text-dark ps-4 pe-4 pt-6 pb-6 h-auto text-decoration-none" type="button" id="dropdownMenu2" data-bs-toggle="collapse" data-bs-target="#navbarNav2" aria-controls="navbarNav2" aria-expanded="false" aria-label="Toggle navigation" href="#">
                    <span>
                      <svg width="1rem" height="1rem" class="me-2 mt-n1">
                        <use xlink:href="${iconSprite}#tabler-calendar" />
                      </svg>
                    </span>
                    <span class="w-100">
                      Events
                    </span>
                    <span class="tabler-chevron-down h4 mt-0 mb-0 me-1 text-right">
                      <svg width="1rem" height="1rem">
                        <use xlink:href="${iconSprite}#tabler-chevron-down" />
                      </svg>
                    </span>
                  </a>
                  <ul class="navbar-nav collapse ps-2" aria-labelledby="dropdownMenu2" id="navbarNav2">
                    <li class="nav-item">
                      <a class="nav-link text-dark ps-3 pe-4 pt-6 pb-6 h-auto" aria-current="page" href="#">
                        <span>
                          <svg width="1rem" height="1rem" class="me-2 mt-n1">
                            <use xlink:href="${iconSprite}#tabler-point-on" />
                          </svg>
                        </span>
                        <span class="flex-fill">
                          Career Fairs
                        </span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-dark ps-3 pe-4 pt-6 pb-6 h-auto" aria-current="page" href="#">
                        <span>
                          <svg width="1rem" height="1rem" class="me-2 mt-n1">
                            <use xlink:href="${iconSprite}#tabler-point-on" />
                          </svg>
                        </span>
                        <span class="flex-fill">
                          Information Sessions
                        </span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-dark ms-n2 ps-3 pe-4 pt-6 pb-6 h-auto active" aria-current="page" href="#">
                        <span>
                          <svg width="1rem" height="1rem" class="me-2 mt-n1">
                            <use xlink:href="${iconSprite}#tabler-point-on" />
                          </svg>
                        </span>
                        <span class="flex-fill">
                          On-Campus Job Interviews
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <hr class="ms-4 me-4 mt-2 mb-2">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link text-dark ps-4 pe-4 pt-6 pb-6 h-auto" href="#">
                  <span>
                    <svg width="1rem" height="1rem" class="me-2 mt-n1">
                      <use xlink:href="${iconSprite}#tabler-home" />
                    </svg>
                  </span>
                  <span class="flex-fill">
                    Home
                  </span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark ps-4 pe-4 pt-6 pb-6 h-auto" href="#">
                  <span>
                    <svg width="1rem" height="1rem" class="me-2 mt-n1">
                      <use xlink:href="${iconSprite}#tabler-home" />
                    </svg>
                  </span>
                  <span class="flex-fill">
                    Home
                  </span>
                </a>
              </li>
            </ul>
            <hr class="ms-4 me-4 mt-2 mb-2">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link text-dark ps-4 pe-4 pt-6 pb-6 h-auto" href="#">
                  <span>
                    <svg width="1rem" height="1rem" class="me-2 mt-n1">
                      <use xlink:href="${iconSprite}#tabler-home" />
                    </svg>
                  </span>
                  <span class="flex-fill">
                    Home
                  </span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark ps-4 pe-4 pt-6 pb-6 h-auto" href="#">
                  <span>
                    <svg width="1rem" height="1rem" class="me-2 mt-n1">
                      <use xlink:href="${iconSprite}#tabler-home" />
                    </svg>
                  </span>
                  <span class="flex-fill">
                    Home
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  </div>
`

export const MobileNavigation = () => `${mobile_navigation_html}`

MobileNavigation.storyName = 'Mobile'

MobileNavigation.parameters = {
  notes: `

    ###HTML

    \`\`\`html
    ${mobile_navigation_html}
    \`\`\`
    
  `
}
