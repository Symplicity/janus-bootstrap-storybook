import iconSprite from '../node_modules/@symplicity/tabler-icons/tabler-sprite-nostroke.svg'

import $ from 'jquery'
window.jQuery = window.$ = $

export default {
  title: 'Examples/Layout'
}

const sidebarHtml = `
  <nav class="main-nav navbar-collapse mt-0 fs-5 show" id="navbarNavLG">
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
        <a class="nav-link text-dark ms-4 me-4 mt-10 mb-10 h-auto" href="#">
          <span>
            <svg width="1rem" height="1rem" class="me-2 mt-n1">
              <use xlink:href="${iconSprite}#tabler-lego" />
            </svg>
          </span>
          <span class="flex-fill">
            Profile
          </span>
        </a>
      </li>
      <li class="nav-item">
        <div class="list-group">
          <a class="d-flex nav-link text-dark ms-4 me-4 mt-10 mb-10 h-auto text-decoration-none" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" data-bs-target="#navbarNav2" aria-controls="navbarNav2" aria-expanded="false" aria-label="Toggle navigation" href="#">
            <span>
              <svg width="1rem" height="1rem" class="me-2 mt-n1">
                <use xlink:href="${iconSprite}#tabler-calendar" />
              </svg>
            </span>
            <span class="w-100">
              Documents
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
      <li class="nav-item">
        <a class="nav-link text-dark ms-4 me-4 mt-10 mb-10 h-auto" href="#">
          <span>
            <svg width="1rem" height="1rem" class="me-2 mt-n1">
              <use xlink:href="${iconSprite}#tabler-briefcase" />
            </svg>
          </span>
          <span class="flex-fill">
            Networking
          </span>
        </a>
      </li>
      <li class="nav-item">
        <div class="list-group">
          <a class="d-flex nav-link text-dark ms-4 me-4 mt-10 mb-10 h-auto text-decoration-none" type="button" id="dropdownMenu3" data-bs-toggle="dropdown" data-bs-target="#navbarNav3" aria-controls="navbarNav3" aria-expanded="false" aria-label="Toggle navigation" href="#">
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
          <ul class="navbar-nav collapse ps-2" aria-labelledby="dropdownMenu3" id="navbarNav3">
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
      <li class="nav-item">
        <a class="nav-link text-dark ms-4 me-4 mt-10 mb-10 h-auto" href="#">
          <span>
            <svg width="1rem" height="1rem" class="me-2 mt-n1">
              <use xlink:href="${iconSprite}#tabler-briefcase" />
            </svg>
          </span>
          <span class="flex-fill">
            Interviews
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
            Employers
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
            Recommendations
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
            Surveys
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
            Resources
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
            Calendars
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
            My Account
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
            Help Center
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
            System Info
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
            Neighborhood Login
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
              <use xlink:href="${iconSprite}#tabler-point" />
            </svg>
          </span>
          <span class="flex-fill">
            Online Staff (2)
          </span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-dark ms-4 me-4 mt-10 mb-10 h-auto" href="#">
          <span>
            <svg width="1rem" height="1rem" class="me-2 mt-n1">
              <use xlink:href="${iconSprite}#tabler-point" />
            </svg>
          </span>
          <span class="flex-fill">
            Online Resident Assistant (2)
          </span>
        </a>
      </li>
    </ul>
  </nav>
`

export const LayoutSidebar = () => {
  return sidebarHtml
}

LayoutSidebar.storyName = 'Sidebar'

LayoutSidebar.parameters = {
  notes: `

    #Declarative Popovers

    ###HTML

    \`\`\`html
    ${sidebarHtml}
    \`\`\`
    
  `
}
