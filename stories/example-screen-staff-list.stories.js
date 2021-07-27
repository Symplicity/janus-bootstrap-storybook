import iconSprite from '../node_modules/@symplicity/tabler-icons/symplicity/tabler-sprite-nostroke.svg';
import $ from 'jquery';
window.jQuery = window.$ = $;

import {
  withKnobs
} from '@storybook/addon-knobs';

export default {
  title: 'Examples/Screens/Staff List',
  decorators: [withKnobs],
  parameters: {
    options: {
      selectedPanel: 'storybook/a11y/panel',
    },
  },
};

// TODO change docs
const moreDocumentation = `
#Additional Documentation
For additional documentation, see:

- Bootstrap Documentation
- Design System 
`;

const headerLG = `
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

const headerSM = `
  <div class="bg-light m-0 d-lg-none">
    <header class="d-block py-2 mx-auto bg-white">
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

const tabsDoubleRowHTML = `
  <ul class="nav nav-tabs bg-white rounded-4 ps-7 pe-7">
    <li class="nav-item">
      <a class="nav-link fs-5 active" aria-current="page" href="#">
        <span>All Jobs</span>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link fs-5" href="#">
        <span>Public</span>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link fs-5" href="#">
        <span>Pending</span>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link fs-5" href="#">
        <span>Processing</span>
      </a>
    </li>
  </ul>
  <ul class="nav nav-tabs bg-white ps-7 pe-7 border-top border-light">
    <li class="nav-item">
      <a class="nav-link fs-5 fw-normal text-primary" href="#">
        <span>All Jobs</span>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link fs-5 fw-normal text-muted" href="#">
        <span>Recommended Jobs</span>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link fs-5 fw-normal text-muted" href="#">
        <span>My Favorites</span>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link fs-5 fw-normal text-muted" href="#">
        <span>Applications</span>
      </a>
    </li>
  </ul>
`;

const batchAndPagination = `
  <div class="d-flex align-items-center justify-content-between flex-wrap mx-3 mt-4 mb-3">
    <div class="d-flex align-items-center justify-content-center">
      <select class="form-select fs-6 pe-8 lh-sm" aria-label="Default select example">
        <option selected>Batch Options</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <span class="fs-6 text-muted ms-3 w-100">1 item selected</span>
    </div>
    <div class="d-flex align-items-center flex-wrap">
      <div class="w-auto me-4">
        <select class="form-select border-0 lh-sm fs-6" aria-label="Default select example">
          <option value="20">Show 20</option>
          <option value="50">Show 50</option>
          <option value="100">Show 100</option>
        </select>
      </div>
      <nav aria-label="Page navigation example">
        <ul class="pagination pagination-sm m-0">
          <li class="page-item">
            <a class="page-link border-end-0 m-0" href="#" aria-label="Previous">
              <svg class="icon-lg-font-size mt-n1 text-danger">
                <use xlink:href="${iconSprite}#tabler-chevron-left" />
                <span class="visually-hidden">Previous</span>
              </svg>
            </a>
          </li>
          <li class="page-item">
            <select class="form-select fs-6 ps-3 pe-9 h-100 lh-sm rounded-0 page-link text-secondary m-0" aria-label="Default select example">
              <option value="1">Page 1</option>
              <option value="2">Page 2</option>
              <option value="3">Page 3</option>
            </select>
          </li>
          <li class="page-item">
            <a class="page-link border-start-0 m-0" href="#" aria-label="Next">
              <svg class="icon-lg-font-size mt-n1 text-danger">
                <use xlink:href="${iconSprite}#tabler-chevron-right" />
                <span class="visually-hidden">Next</span>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
`

const tableContent = `
  <table class="table align-middle fs-5 mb-0 table-borderless">
    <thead class="border-bottom border-light text-nowrap">
      <tr>
        <th class="fw-normal" scope="col">
          <label class="visually-hidden" for="checkboxHeader">Select Row</label>
          <input type="checkbox" id="checkboxHeader">
        </th>
        <th class="fw-normal" scope="col">Actions</th>
        <th class="fw-normal" scope="col">
          <button class="d-flex border-0 bg-white p-0">
            Last Name
            <svg class="icon-lg-font-size d-flex">
              <use xlink:href="${iconSprite}#tabler-caret-up" />
            </svg>
            <span class="visually-hidden">Sorted ascending</span>
          </button>
        </th>
        <th class="fw-normal" scope="col">First Name</th>
        <th class="fw-normal" scope="col">Student ID</th>
        <th class="fw-normal" scope="col">Major(s)</th>
        <th class="fw-normal" scope="col">Email</th>
        <th class="fw-normal" scope="col">Class Level</th>
        <th class="fw-normal" scope="col">Graduation Date</th>
        <th class="fw-normal" scope="col">Email Verified</th>
      </tr>
    </thead>
    <tbody class="table-data"></tbody>
  </table>
`

const sidebarNavLG = `
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
          <a class="d-flex nav-link text-dark ms-4 me-4 mt-10 mb-10 h-auto text-decoration-none" type="button" id="dropdownMenu2" data-bs-toggle="collapse" data-bs-target="#navbarNav2" aria-controls="navbarNav2" aria-expanded="false" aria-label="Toggle navigation" href="#">
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
          <a class="d-flex nav-link text-dark ms-4 me-4 mt-10 mb-10 h-auto text-decoration-none" type="button" id="dropdownMenu3" data-bs-toggle="collapse" data-bs-target="#navbarNav3" aria-controls="navbarNav3" aria-expanded="false" aria-label="Toggle navigation" href="#">
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

const staff_list_html = `
<div class="m-0 bg-light">
  <div class="mx-auto my-0">
    ${headerLG}
    ${headerSM}    
    <div class="d-flex mt-4 w-100">
      <div class="d-none d-lg-block">
        ${sidebarNavLG}
      </div>      
      <div class="d-flex flex-column justify-content-start flex-wrap w-100 px-4">
        <div class="d-flex justify-content-between align-items-center flex-wrap px-2 w-100">
          <h2>Incident Reports</h2> 
          <button type="button" class="btn btn-danger fs-6">
            <svg width="1.125rem" height="1.125rem" class="mt-n1 me-1">
              <use xlink:href="static/media/node_modules/@symplicity/tabler-icons/symplicity/tabler-sprite-nostroke.svg#tabler-plus" />
            </svg>Add New
          </button>
        </div>
        <div class="bg-white my-3 w-100 rounded-4">
          <div class="text-center">${tabsDoubleRowHTML}</div>          
            <div class="bg-white">
              <form class="row px-2 py-3 mx-3 mt-2 align-items-center bg-light">
                <div class="col-md-6 col-lg-3 my-1 pe-lg-0">
                  <div class="input-group">
                    <span class="input-group-text border-end-0 bg-white p-1" id="basic-addon1">
                      <svg class="icon-lg-font-size ps-1">
                        <use xlink:href="${iconSprite}#tabler-search" />
                        <span class="visually-hidden">Open Search Dialog</span>
                      </svg>
                    </span>
                    <input type="text" class="form-control border-start-0 fs-6" placeholder="Search cases by student, email, IR#" aria-label="Search" aria-describedby="basic-addon1">
                  </div>
                </div>
                <div class="col-md-6 col-lg-2 my-1">
                  <select class="form-select fs-6 text-muted" aria-label="Default select example">
                    <option selected>Assigned to</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div class="col-md-6 col-lg-3 d-flex align-items-center flex-wrap my-1">
                  <div class="form-check me-3 my-1">
                    <input class="form-check-input" type="checkbox" value="true" id="flexCheck1">
                    <label class="form-check-label fs-6" for="flexCheck1">
                      Parent Case
                    </label>
                  </div>
                  <div class="form-check me-3 my-1">
                    <input class="form-check-input" type="checkbox" value="true" id="flexCheck2">
                    <label class="form-check-label fs-6" for="flexCheck2">
                      Child Case
                    </label>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 d-flex justify-content-end flex-wrap my-1">
                  <button type="button" class="btn btn-outline-secondary ms-2 fs-6">
                    <svg width="1.125rem" height="1.125rem" class="mt-n1 me-1">
                      <use xlink:href="static/media/node_modules/@symplicity/tabler-icons/symplicity/tabler-sprite-nostroke.svg#tabler-search" />
                    </svg>Apply Search
                  </button>
                  <button type="button" class="btn btn-outline-secondary ms-2 fs-6">
                    <svg width="1.125rem" height="1.125rem" class="mt-n1 me-1">
                      <use xlink:href="static/media/node_modules/@symplicity/tabler-icons/symplicity/tabler-sprite-nostroke.svg#tabler-adjustments-horizontal" />
                    </svg>More Filters
                  </button>
                </div>
              </form>
            </div>
            ${batchAndPagination}
            <div class="w-100 overflow-auto p-0 my-2 mb-0 border border-light">
              ${tableContent}              
            </div>
          </div>
      </div>
    </div>
  </div>
</div>
`;

export const ScreenStaffList = () => {
  const container = $('<div class="m-0"></div>').append(
    staff_list_html
  );
  const surnames = [["Wang", "Li"], ["Li", "Zhang"], ["Zhang", "Chen"], ["Chen", "Liu"], ["Liu", "Devi"], ["Devi", "Yang"], ["Yang", "Huang"], ["Huang", "Singh"], ["Singh", "Wu"], ["Wu", "Kumar"], ["Kumar", "Xu"], ["Xu", "Ali"], ["Ali", "Zhao"], ["Zhao", "Zhou"], ["Zhou", "Nguyen"], ["Nguyen", "Khan"], ["Khan", "Ma"], ["Ma", "Lu"], ["Lu", "Zhu"], ["Zhu", "Wang"]];

  setTimeout(() => {
    const createListItems = document.querySelector('.table-data');
    createListItems.innerHTML = `
      ${Array(20)
        .fill()
        .map(
          (item, i) => `
          <tr class="border-bottom border-light">
            <td>
              <label class="visually-hidden" for="checkbox${i + 1}">Select Row</label>
              <input type="checkbox" id="checkbox${i + 1}">
            </td>
            <td>
              <div class="d-flex flex-wrap">
                <button type="button" class="btn btn-action p-0 me-2 border-0">
                  <svg class="icon-lg-font-size d-flex">
                    <use xlink:href="${iconSprite}#tabler-file-search" />
                  </svg>
                  <span class="visually-hidden">View</span>
                </button>
                <button type="button" class="btn btn-action p-0 border-0">
                  <svg class="icon-lg-font-size d-flex">
                    <use xlink:href="${iconSprite}#tabler-pencil" />
                  </svg>
                  <span class="visually-hidden">Edit</span>
                </button>
              </div>
            </td>
            <td>${surnames[i][1]}</td>
            <td>${surnames[i][0]}</td>
            <td>28912003</td>
            <td>
              <span class="line-clamp-2">Zoology</span>
            </td>
            <td>smarsh@symp.com</td>
            <td>Freshman</td>
            <td>May, 2017</td>
            <td>
              <button type="button" class="btn btn-action p-0 me-2 border-0">
                <svg class="icon-lg-font-size d-flex text-success">
                  <use xlink:href="${iconSprite}#tabler-circle-check" />
                </svg>
                <span class="visually-hidden">View</span>
              </button>
            </td>
          </tr>
          `
        )
      .join('')}
    `;
  }, 100);
  return container[0];
}

ScreenStaffList.storyName = 'Staff List';

ScreenStaffList.parameters = {
  notes: `
    #Declarative Popovers

    ###HTML

    \`\`\`html
    ${staff_list_html}
    \`\`\`
    ${moreDocumentation}
  `,
};
