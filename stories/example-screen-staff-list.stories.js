import iconSprite from '../node_modules/@symplicity/tabler-icons/symplicity/tabler-sprite-nostroke.svg';
import $ from 'jquery';
window.jQuery = window.$ = $;

import {
  withKnobs,
  text,
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


const styles = {
  wrapper: {
    bg: text('Container BG Color', '#F6F6F6'),
    mw: text('Container Max Width', '1400px')
  }
}

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
              <div class="d-flex align-items-center flex-wrap btn-search btn btn-action btn-action-icon-only btn-action-header" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style="background-color: #ECECEC;">
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
    <header class="d-block bg-white pt-0" style="max-width: 1400px; margin: 0 auto; background: #fff">
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
                <div class="d-flex align-items-center flex-wrap btn-search btn btn-action btn-action-icon-only btn-action-header w-100" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false" style="background-color: #ECECEC;">
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
  <ul class="nav nav-tabs bg-white rounded-top border border-light ps-7 pe-7">
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
  <ul class="nav nav-tabs bg-white border border-light border-top-0 ps-7 pe-7">
    <li class="nav-item">
      <a class="nav-link active fs-5" href="#">
        <span>All Jobs</span>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link fs-5" aria-current="page" href="#">
        <span>Recommended Jobs</span>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link fs-5" href="#">
        <span>My Favorites</span>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link fs-5" href="#">
        <span>Applications</span>
      </a>
    </li>
  </ul>
`;

const listFilters = `
  <div class="d-flex align-items-center justify-content-between flex-wrap pt-4 pb-3">
    <div class="d-flex align-items-center justify-content-center">
      <select class="form-select fs-6" aria-label="Default select example" style="padding-right: 2rem; line-height: 1.3;">
        <option selected>Batch Options</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <span class="fs-6 text-muted ms-3" style="min-width: 120px;">1 item selected</span>
    </div>
    <div class="d-flex align-items-center flex-wrap">
      <div class="w-auto me-4">
        <select class="form-select shadow-none border-0 fs-6" aria-label="Default select example" style="line-height: 1.3;">
          <option value="20">Show 20</option>
          <option value="50">Show 50</option>
          <option value="100">Show 100</option>
        </select>
      </div>
      <div class="d-flex">
        <button type="button" class="btn btn-action btn-action-icon-only" style="border: 1px solid #aaaaaa; border-top-right-radius: 0; border-bottom-right-radius: 0;">
          <svg class="icon-lg-font-size mt-n1 text-danger">
            <use xlink:href="${iconSprite}#tabler-chevron-left" />
            <span class="visually-hidden">Previous</span>
          </svg>
        </button>
        <div class="d-flex mx-0">
          <select class="form-select shadow-none fs-6 pr-5 rounded-0 border-end-0 border-start-0" aria-label="Default select example" style="padding-right: 2rem; line-height: 1.3;">
            <option value="3">Page 3</option>
            <option value="1">Page 1</option>
            <option value="2">Page 2</option>
          </select>
        </div>
        <button type="button" class="btn btn-action btn-action-icon-only" style="border: 1px solid #aaaaaa; border-top-left-radius: 0; border-bottom-left-radius: 0;">
          <svg class="icon-lg-font-size mt-n1 text-danger">
            <use xlink:href="${iconSprite}#tabler-chevron-right" />
            <span class="visually-hidden">Next</span>
          </svg>
        </button>
      </div>
    </div>
  </div>
`

const tableContent = `
  <table class="table align-middle fs-5 table-borderless">
    <thead class="border-bottom border-light text-nowrap">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Actions</th>
        <th scope="col">
          <button class="d-flex border-0 bg-white fw-bold p-0">
            Last Name
            <svg class="icon-lg-font-size d-flex">
              <use xlink:href="${iconSprite}#tabler-caret-up" />
            </svg>
            <span class="visually-hidden">Sorted ascending</span>
          </button>
        </th>
        <th scope="col">First Name</th>
        <th scope="col">Student ID</th>
        <th scope="col">Major(s)</th>
        <th scope="col">Email</th>
        <th scope="col">Class Level</th>
        <th scope="col">Graduation Date</th>
        <th scope="col">Email Verified</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-bottom border-light">
        <td>
          <label class="visually-hidden" for="checkbox1">Select Row</label>
          <input type="checkbox" id="checkbox1">
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
        <td>Baldwin</td>
        <td>Steve</td>
        <td>28912003</td>
        <td>
          <span class="line-clamp-2">Zoology, Computer Science, Mathematics, Botany, Chemistry, Political Science</span>
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
      <tr class="border-bottom border-light">
        <td>
          <label class="visually-hidden" for="checkbox3">Select Row</label>
          <input type="checkbox" id="checkbox3">
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
        <td>Adams</td>
        <td>Steve</td>
        <td>28912003</td>
        <td>Zoology</td>
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
      <tr class="border-bottom border-light">
        <td>
          <label class="visually-hidden" for="checkbox4">Select Row</label>
          <input type="checkbox" id="checkbox4">
        </td>
        <td>
          <div class="d-flex">
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
        <td>Baldwin</td>
        <td>Steve</td>
        <td>28912003</td>
        <td>
          <span class="line-clamp-2">Zoology, Computer Science, Mathematics, Botany, Chemistry, Political Science</span>
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
      <tr class="border-bottom border-light">
        <td>
          <label class="visually-hidden" for="checkbox5">Select Row</label>
          <input type="checkbox" id="checkbox5">
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
        <td>Adams</td>
        <td>Steve</td>
        <td>28912003</td>
        <td>Zoology</td>
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
      <tr class="border-bottom border-light">
        <td>
          <label class="visually-hidden" for="checkbox6">Select Row</label>
          <input type="checkbox" id="checkbox6">
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
        <td>Adams</td>
        <td>Steve</td>
        <td>28912003</td>
        <td>Zoology</td>
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
      <tr class="border-bottom border-light">
        <td>
          <label class="visually-hidden" for="checkbox7">Select Row</label>
          <input type="checkbox" id="checkbox7">
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
        <td>Adams</td>
        <td>Steve</td>
        <td>28912003</td>
        <td>Zoology</td>
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
      <tr class="border-bottom border-light">
        <td>
          <label class="visually-hidden" for="checkbox2">Select Row</label>
          <input type="checkbox" id="checkbox2">
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
        <td>Adams</td>
        <td>Steve</td>
        <td>28912003</td>
        <td>Zoology</td>
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
    </tbody>
  </table>
`

const sidebarNavLG = `
  <nav class="main-nav navbar-collapse mt-0 fs-5 show" id="navbarNavLG" style="max-width: 250px;">
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
<div class="m-0" style="background-color: ${styles.wrapper.bg};">
  <div class="mx-auto my-0" style="max-width: ${styles.wrapper.mw}">
    ${headerLG}
    ${headerSM}    
    <div class="d-flex mt-4 w-100">
      <div class="d-none d-lg-block">
        ${sidebarNavLG}
      </div>      
      <div class="d-flex flex-column justify-content-start flex-wrap w-100 px-2">
        <div class="d-flex justify-content-between align-items-center flex-wrap px-2 w-100">
          <h2>Incident Reports</h2> 
          <button type="button" class="btn btn-sm btn-danger">
            <svg width="1.125rem" height="1.125rem" class="mt-n1 me-1">
              <use xlink:href="static/media/node_modules/@symplicity/tabler-icons/symplicity/tabler-sprite-nostroke.svg#tabler-plus" />
            </svg>Add New
          </button>
        </div>
        <div class="bg-white my-3 w-100">
          <div class="text-center">${tabsDoubleRowHTML}</div>          
          <div class="p-4">
            <div style="background-color: #F6F6F6;">
              <form class="row p-3 m-0 align-items-center">
                <div class="col-md-6 col-lg-3 my-1">
                  <input type="text" class="form-control fs-6" id="text" placeholder="Search cases by student, email, IR#" aria-label="Search">
                </div>
                <div class="col-md-6 col-lg-2 my-1">
                  <select class="form-select fs-6" aria-label="Default select example">
                    <option selected>Assigned to</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div class="col-md-6 col-lg-3 d-flex align-items-center flex-wrap my-1">
                  <div class="form-check me-3 my-1">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheck1">
                    <label class="form-check-label fs-6" for="flexCheck1">
                      Parent Case
                    </label>
                  </div>
                  <div class="form-check me-3 my-1">
                    <input class="form-check-input type="checkbox" value="" id="flexCheck2">
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
            ${listFilters}
            <div class="w-100 overflow-auto p-0 my-2 border border-light">
              ${tableContent}              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;

export const ScreenStaffList = () => `${staff_list_html}`;
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
