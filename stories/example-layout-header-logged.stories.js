import iconSprite from '../node_modules/@symplicity/tabler-icons/symplicity/tabler-sprite-nostroke.svg';

import $ from 'jquery';
window.jQuery = window.$ = $;

import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Examples/Layout',
  decorators: [withKnobs],
};


const loggedSystemHeaderLG = `
  <div class="m-0 d-none d-lg-block">
    <header class="d-block pt-0">
      <nav class="d-block navbar navbar-light bg-white shadow-lg" aria-label="Main Navigation">
        <div class="row justify-content-between align-items-center w-100">
          <div class="col-4 d-flex align-items-center flex-wrap">
            <button class="main-nav-trigger border-0 navbar-toggler btn btn-action btn-action-icon-only btn-action-header ms-7 me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavLG" aria-controls="navbarNavLG" aria-expanded="true" aria-label="Toggle navigation">
              <svg width="1rem" height="1rem">
                <use xlink:href="${iconSprite}#tabler-menu-2" />
              </svg>
            </button>
            <svg class="bd-placeholder-img d-none d-md-block" width="170" height="64" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">170x64</text></svg>
          </div>
          <div class="col-4">
            <div class="dropdown">
              <div class="d-flex align-items-center flex-wrap btn-search btn btn-action btn-action-icon-only btn-action-header bg-light" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <svg class="icon-xl-font-size mt-n1 ms-0 me-2">
                  <use xlink:href="${iconSprite}#tabler-search" />
                  <span class="visually-hidden">Open Search Dialog</span>
                </svg>
              </div>
            </div>
          </div>
          <div class="col-4 d-flex justify-content-end flex-wrap">
            <button type="button" class="btn btn-action btn-action-icon-only btn-action-header rounded-circle">
              <svg class="icon-lg-font-size mt-n1">
                <use xlink:href="${iconSprite}#tabler-adjustments-horizontal" />
                <span class="visually-hidden">Thumbs Down</span>
              </svg>
            </button>
            <button class="avatar avatar-md avatar-image rounded-circle ms-2 me-7" type="button">
              <img role="button" class="" src="https://www.edge.org/sites/default/files/styles/member-photo/public/member-pictures/picture-510-1416068804.jpg?itok=cnAQyDr5" alt="...">
            </button>
          </div>
        </div>
      </nav>
    </header>
  </div>
`

const loggedSystemHeaderSM = `
  <div class="bg-light m-0 d-lg-none">
    <header class="d-block mb-2 mx-auto bg-white">
      <nav class="d-block navbar navbar-light shadow-lg" aria-label="Main Navigation">
        <div class="d-flex justify-content-between align-items-center flex-wrap w-100">
          <div class="d-flex align-items-center flex-wrap">
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
            <div class="nav-header d-flex pt-2 flex-wrap">
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
                  <a class="d-flex nav-link text-dark ps-4 pe-4 pt-6 pb-6 h-auto text-decoration-none" type="button" id="dropdownMenu1" data-bs-toggle="collapse" data-bs-target="#navbarNav1" aria-controls="navbarNav1" aria-expanded="false" aria-label="Toggle navigation" href="#">
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
                  <ul class="navbar-nav collapse ps-2" aria-labelledby="dropdownMenu1" id="navbarNav1">
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
            <div class="ps-4 pe-4 pt-6 pb-6 my-2">
              <div class="dropdown">
                <div class="d-flex align-items-center flex-wrap btn-search btn btn-action btn-action-icon-only btn-action-header w-100 bg-light" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                  <svg class="icon-xl-font-size mx-2">
                    <use xlink:href="${iconSprite}#tabler-search" />
                    <span class="visually-hidden">Open Search Dialog</span>
                  </svg>
                </div>
              </div>
            </div>
            <div class="d-flex flex-column justify-content-start ps-4 pe-4 pt-6 pb-6">
              <button type="button" class="btn btn-action btn-action-icon-only btn-action-header rounded-circle">
                <svg class="icon-lg-font-size mt-n1">
                  <use xlink:href="${iconSprite}#tabler-adjustments-horizontal" />
                  <span class="visually-hidden">Thumbs Down</span>
                </svg>
              </button>
              <button class="avatar avatar-md avatar-image rounded-circle mt-2" type="button">
                <img role="button" class="" src="https://www.edge.org/sites/default/files/styles/member-photo/public/member-pictures/picture-510-1416068804.jpg?itok=cnAQyDr5" alt="...">
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  </div>
`

const logged_system_header_html = `
  ${loggedSystemHeaderLG}
  ${loggedSystemHeaderSM}
`;


export const LayoutLoggedHeader = () => {
  return logged_system_header_html
};
LayoutLoggedHeader.storyName = 'Header Logged';

LayoutLoggedHeader.parameters = {
  notes: `

    #Declarative Popovers

    ###HTML

    \`\`\`html
    ${logged_system_header_html}
    \`\`\`
    
  `,
};
