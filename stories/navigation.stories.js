import { document, setTimeout } from 'global';

import iconSprite from '../node_modules/@symplicity/tabler-icons/symplicity/tabler-sprite.svg';

import {
  array,
  boolean,
  button,
  color,
  date,
  select,
  withKnobs,
  text,
  number,
} from '@storybook/addon-knobs';

export default {
  title: 'Components/Navigation',
  decorators: [withKnobs],
  parameters: {
    options: {
      selectedPanel: 'storybook/a11y/panel',
    },
  },
};

const moreDocumentation = `
#Additional Documentation
For additional documentation, see:

- Bootstrap Documentation
- Design System 

`;

const desktop_navigation_html = `
    <header class="d-block bg-white pt-0" style="max-width: 1400px; margin: 0 auto; background: #fff">
      <nav class="d-block navbar navbar-light shadow-lg" aria-label="Main Navigation">
        <div class="d-flex justify-content-between align-items-center">
          <div class="d-flex align-items-center">
            <button class="border-0 navbar-toggler btn btn-action btn-action-icon-only btn-action-header ms-8 me-7" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
              <svg width="1rem" height="1rem">
                <use xlink:href="${iconSprite}#tabler-menu-2" />
              </svg>
            </button>
            <svg class="bd-placeholder-img d-none d-md-block" width="170" height="64" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">170x64</text></svg>
          </div>
        </div>
      </nav>
      <nav class="main-nav navbar-collapse show bg-light mt-0" id="navbarNav">
        <ul class="navbar-nav pt-4 pb-0">
          <li class="nav-item">
            <a class="nav-link text-dark ps-3 pe-4 pt-2 pb-2 h-auto active" aria-current="page" href="#">
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
            <a class="nav-link text-dark ps-4 pe-4 pt-2 pb-2 h-auto" href="#">
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
              <a class="d-flex nav-link text-dark ps-4 pe-4 pt-2 pb-2 h-auto text-decoration-none" type="button" id="dropdownMenu2" data-bs-toggle="collapse" data-bs-target="#navbarNav2" aria-controls="navbarNav2" aria-expanded="false" aria-label="Toggle navigation" href="#">
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
                  <a class="nav-link text-dark ps-3 pe-4 pt-2 pb-2 h-auto" aria-current="page" href="#">
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
                  <a class="nav-link text-dark ps-3 pe-4 pt-2 pb-2 h-auto" aria-current="page" href="#">
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
                  <a class="nav-link text-dark ms-n2 ps-3 pe-4 pt-2 pb-2 h-auto active" aria-current="page" href="#">
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
        <hr>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link text-dark ps-4 pe-4 pt-2 pb-2 h-auto" href="#">
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
            <a class="nav-link text-dark ps-4 pe-4 pt-2 pb-2 h-auto" href="#">
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
        <hr>
        <ul class="navbar-nav pb-4">
          <li class="nav-item">
            <a class="nav-link text-dark ps-4 pe-4 pt-2 pb-2 h-auto" href="#">
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
            <a class="nav-link text-dark ps-4 pe-4 pt-2 pb-2 h-auto" href="#">
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
`;

export const DesktopNavigation = () => `${desktop_navigation_html}`;

DesktopNavigation.storyName = 'Desktop';

DesktopNavigation.parameters = {
  notes: `

    ###HTML

    \`\`\`html
    ${desktop_navigation_html}
    \`\`\`
    
  `,
};

const mobile_navigation_html = `
    <header class="d-block bg-white pt-0" style="max-width: 1400px; margin: 0 auto; background: #fff">
      <nav class="d-block navbar navbar-light shadow-lg" aria-label="Main Navigation">
        <div class="d-flex justify-content-between align-items-center">
          <div class="d-flex align-items-center">
            <button class="border-0 navbar-toggler btn btn-action btn-action-icon-only btn-action-header ms-8 me-7" data-bs-toggle="modal" data-bs-target="#myModal">
              <svg width="1rem" height="1rem">
                <use xlink:href="${iconSprite}#tabler-menu-2" />
              </svg>
              <span class="visually-hidden">Toggle Main Navigation</span>
            </button>
            <svg class="bd-placeholder-img d-none d-md-block" width="170" height="64" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">170x64</text></svg>
          </div>
        </div>
      </nav>
      <div class="modal" id="myModal">
        <div class="modal-dialog modal-fullscreen">
          <nav class="main-nav pe-auto bg-white mt-0 bg-light vh-100 pt-4 pb-4" id="navbarNav">
            <ul class="navbar-nav pb-0">
              <li class="nav-item">
                <a class="nav-link text-dark ps-3 pe-4 pt-2 pb-2 h-auto active" aria-current="page" href="#">
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
                <a class="nav-link text-dark ps-4 pe-4 pt-2 pb-2 h-auto" href="#">
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
                  <a class="d-flex nav-link text-dark ps-4 pe-4 pt-2 pb-2 h-auto text-decoration-none" type="button" id="dropdownMenu2" data-bs-toggle="collapse" data-bs-target="#navbarNav2" aria-controls="navbarNav2" aria-expanded="false" aria-label="Toggle navigation" href="#">
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
                      <a class="nav-link text-dark ps-3 pe-4 pt-2 pb-2 h-auto" aria-current="page" href="#">
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
                      <a class="nav-link text-dark ps-3 pe-4 pt-2 pb-2 h-auto" aria-current="page" href="#">
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
                      <a class="nav-link text-dark ms-n2 ps-3 pe-4 pt-2 pb-2 h-auto active" aria-current="page" href="#">
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
            <hr>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link text-dark ps-4 pe-4 pt-2 pb-2 h-auto" href="#">
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
                <a class="nav-link text-dark ps-4 pe-4 pt-2 pb-2 h-auto" href="#">
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
            <hr>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link text-dark ps-4 pe-4 pt-2 pb-2 h-auto" href="#">
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
                <a class="nav-link text-dark ps-4 pe-4 pt-2 pb-2 h-auto" href="#">
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
`;

export const MobileNavigation = () => `${mobile_navigation_html}`;

MobileNavigation.storyName = 'Mobile';

MobileNavigation.parameters = {
  notes: `

    ###HTML

    \`\`\`html
    ${mobile_navigation_html}
    \`\`\`
    
  `,
};
