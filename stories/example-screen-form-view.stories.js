import iconSprite from '../node_modules/@symplicity/tabler-icons/symplicity/tabler-sprite-nostroke.svg';
import $ from 'jquery';
window.jQuery = window.$ = $;
import { LayoutLoggedHeader } from './example-layout-header-logged.stories';
import { LayoutSidebar } from './example-layout-sidebar';

import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Examples/Screens/Form View',
  decorators: [withKnobs],
};

const moreDocumentation = `
#Additional Documentation
For additional documentation, see:

- Bootstrap Documentation
- Design System 
`;

const additionalInfoOne = `
  <div class="card bg-light border-0 mb-2">
    <div class="card-header bg-light mb-0 rounded">
      <div class="d-flex justify-content-between align-items-center">
        <button class="d-flex text-left btn text-warning text-decoration-none p-0 mb-0" data-bs-toggle="collapse" href="#collapseInfoOne" aria-expanded="false" aria-controls="collapseInfoOne">
          <span class="tabler-chevron-down lh-1 my-0 me-1">
            <svg width="1rem" height="1rem">
              <use xlink:href="${iconSprite}#tabler-chevron-down" />
            </svg>
          </span>
          <span class="fs-5 fw-bolder lh-sm">
            Incident Information
          </span>
        </button>
      </div>
    </div>
    <div class="collapse show" id="collapseInfoOne">
      <div class="card-body text-left pt-0 fs-6">
        <div class="row mb-2">
          <div class="col-lg-4 col-md-12">Created:</div>
          <div class="col-lg-8 col-md-12 text-muted">Fri, May 19, 2017, 11:49 am</div>
        </div>
        <div class="row mb-2">
          <div class="col-lg-4 col-md-12">By:</div>
          <div class="col-lg-8 col-md-12 text-muted">John Smith [Staff Member]</div>
        </div>
        <div class="row mb-2">
          <div class="col-lg-4 col-md-12">Modified:</div>
          <div class="col-lg-8 col-md-12 text-muted">Fri, May 19, 2017, 11:51 am</div>
        </div>
        <div class="row mb-2">
          <div class="col-lg-4 col-md-12">By:</div>
          <div class="col-lg-8 col-md-12 text-muted">John Smith [Staff Member]</div>
        </div>
      </div>
    </div>
  </div>
`

const additionalInfoTwo = `
  <div class="card bg-light border-0 mb-2">
    <div class="card-header bg-light mb-0 rounded">
      <div class="d-flex justify-content-between align-items-center">
        <button class="d-flex text-left btn text-warning text-decoration-none p-0 mb-0" data-bs-toggle="collapse" href="#collapseInfoTwo" aria-expanded="false" aria-controls="collapseInfoTwo">
          <span class="tabler-chevron-down lh-1 my-0 me-1">
            <svg width="1rem" height="1rem">
              <use xlink:href="${iconSprite}#tabler-chevron-down" />
            </svg>
          </span>
          <span class="fs-5 fw-bolder lh-sm">
            Incident Report Flags
          </span>
        </button>
        <button class="btn text-warning text-decoration-none p-0 mb-0">
          <span class="fs-6 fw-light">Edit</span>
        </button>
      </div>
    </div>
    <div class="collapse" id="collapseInfoTwo">
      <div class="card-body text-left pt-0 fs-6">
        <fieldset>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="flexCheck1">
            <label class="form-check-label fs-6 lh-sm fw-light text-muted" for="flexCheck1">
              South Georgia and South Sandwich Islands South Georgia and South Sandwich Islands 
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="flexCheck2">
            <label class="form-check-label fs-6 lh-sm fw-light text-muted" for="flexCheck2">
              Falkland Islands (Malvinas)     
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="flexCheckChecked" checked>
            <label class="form-check-label fs-6 lh-sm fw-light text-muted" for="flexCheckChecked">
              Belize
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="flexCheck3">
            <label class="form-check-label fs-6 lh-sm fw-light text-muted" for="flexCheck3">
              Latvia
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="flexCheck4">
            <label class="form-check-label fs-6 lh-sm fw-light text-muted" for="flexCheck4">
              Honduras
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="flexCheck5">
            <label class="form-check-label fs-6 lh-sm fw-light text-muted" for="flexCheck5">
              Czech Republic
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="flexCheck6">
            <label class="form-check-label fs-6 lh-sm fw-light text-muted" for="flexCheck6">
              Bouvet Island (Bouvetoya)
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="flexCheck7">
            <label class="form-check-label fs-6 lh-sm fw-light text-muted" for="flexCheck7">
              New Zealand
            </label>
          </div>
        </fieldset>
        <form class="d-flex mt-2">
          <input type="text" class="w-75" id="infoHelpBlock" placeholder="" aria-describedby="infoHelpBlock">
          <button type="button" class="btn btn-sm btn-more btn-outline-secondary px-0 fs-7 me-3 ms-2">Add</button>
        </form>
      </div>
    </div>
  </div>
`

const additionalInfoThree = `
  <div class="card bg-light border-0 mb-2">
    <div class="card-header bg-light mb-0 rounded">
      <div class="d-flex justify-content-between align-items-center">
        <button class="d-flex text-left btn text-warning text-decoration-none p-0 mb-0" data-bs-toggle="collapse" href="#collapseInfoThree" aria-expanded="false" aria-controls="collapseInfoThree">
          <span class="tabler-chevron-down lh-1 my-0 me-1">
            <svg width="1rem" height="1rem">
              <use xlink:href="${iconSprite}#tabler-chevron-down" />
            </svg>
          </span>
          <span class="fs-5 fw-bolder lh-sm">
            Charge Information
          </span>
        </button>
        <button class="btn text-warning text-decoration-none p-0 mb-0">
          <span class="fs-6 fw-light">Edit</span>
        </button>
      </div>
    </div>
    <div class="collapse" id="collapseInfoThree">
      <div class="card-body text-left pt-0 fs-6">
        <div class="row mb-2">
          <div class="col-md-4 col-sm-12">Charges</div>
          <div class="col-md-8 col-sm-12 text-muted">Lawrence Herrera</div>
        </div>
      </div>
    </div>
  </div>
`
const additionalInfoFour = `
  <div class="card bg-light border-0 mb-2">
    <div class="card-header bg-light mb-0 rounded">
      <div class="d-flex justify-content-between align-items-center">
        <button class="d-flex text-left btn text-warning text-decoration-none p-0 mb-0" data-bs-toggle="collapse" href="#collapseInfoFour" aria-expanded="false" aria-controls="collapseInfoFour">
          <span class="tabler-chevron-down lh-1 my-0 me-1">
            <svg width="1rem" height="1rem">
              <use xlink:href="${iconSprite}#tabler-chevron-down" />
            </svg>
          </span>
          <span class="fs-5 fw-bolder lh-sm">
            Meetings
          </span>
        </button>
      </div>
    </div>
    <div class="collapse show" id="collapseInfoFour">
      <div class="card-body text-left pt-0 fs-6">
        <div class="d-flex justify-content-between align-items-start mb-2">
          <svg width="1.125rem" height="1.125rem" class="mt-1 me-2" role="button" tabindex="0">
            <use xlink:href="${iconSprite}#tabler-file-search" />
          </svg>
          <div class="d-flex flex-column w-100">
            <div>
              <span class="me-1">Date:</span>
              <span class="text-muted">2019-06-14 12:03:00</span>
            </div>
            <div>
              <span class="me-1">Status:</span>
              <span class="text-muted">Meeting Scheduled</span>
            </div>
          </div>
          <div class="d-flex justify-content-right">
            <span class="fs-6 fw-light" role="button" tabindex="0">Edit</span>
          </div>
        </div>
        <div class="d-flex justify-content-between align-items-start mb-2">
          <svg width="1.125rem" height="1.125rem" class="mt-1 me-2" role="button" tabindex="0">
            <use xlink:href="${iconSprite}#tabler-file-search" />
          </svg>
          <div class="d-flex flex-column w-100">
            <div>
              <span class="me-1">Date:</span>
              <span class="text-muted">2019-06-14 12:03:00</span>
            </div>
            <div>
              <span class="me-1">Status:</span>
              <span class="text-muted">Meeting Scheduled</span>
            </div>
          </div>
          <div class="d-flex justify-content-right">
            <span class="fs-6 fw-light" role="button" tabindex="0">Edit</span>
          </div>
        </div>
      </div>
    </div>
  </div>
`

const tabsNavigationHtml = `
  <div class="overflow-auto p-0 mb-0 border-light border-bottom">
    <div class="bg-white rounded-top d-flex">
      <button class="d-flex align-items-center bg-white border-0 text-light rounded-top">
        <svg class="icon-lg-font-size">
          <use xlink:href="${iconSprite}#tabler-chevron-left" />
          <span class="visually-hidden">Extend tabs' options</span>
        </svg>
      </button>
      <ul class="overflow-hidden nav nav-tabs nav-tabs-single-row-with-controls" style="height: 60px;"></ul>
      <button class="d-flex align-items-center bg-white border-0 text-warning rounded-top">
        <svg class="icon-lg-font-size">
          <use xlink:href="${iconSprite}#tabler-chevron-right" />
          <span class="visually-hidden">Extend tabs' options</span>
        </svg>
      </button>
    </div>
  </div>
`

const form_view_html = `
  <div class="m-0 bg-light">
    <div class="mx-auto my-0">
      ${LayoutLoggedHeader()}
      <div class="d-flex mt-4">
        <div class="d-none d-lg-block">
          ${LayoutSidebar()}
        </div>      
        <div class="d-flex flex-column justify-content-start flex-wrap px-md-4 px-sm-0">
          <div class="d-flex justify-content-between align-items-center flex-wrap px-3">
            <h2 class="m-0">00012-001-2020 (Billy Goatgruff - A1234421)</h2> 
            <button type="button" class="btn btn-danger fs-6">
              <svg width="1.125rem" height="1.125rem" class="mt-n1 me-1">
                <use xlink:href="${iconSprite}#tabler-chevron-down" />
              </svg>Other Actions
            </button>
          </div>
          <div class="bg-white my-3 rounded-4">
            ${tabsNavigationHtml}
            <div class="row g-0">
              <div class="col-md-8 col-sm-12 p-7">
                <span class="text-warning fw-bold">Incident Info</span>
                <div class="fs-5 py-4 incident-report-list"></div>
                <div>
                  <button type="button" class="btn btn-outline-secondary fs-5 me-2">
                    <svg width="1.125rem" height="1.125rem" class="mt-n1 me-1">
                      <use xlink:href="${iconSprite}#tabler-pencil" />
                    </svg>Edit
                  </button>
                  <button type="button" class="btn btn-outline-secondary fs-5">
                    <svg width="1.125rem" height="1.125rem" class="mt-n1 me-1">
                      <use xlink:href="${iconSprite}#tabler-letter-x" />
                    </svg>Cancel
                  </button>
                </div>
              </div>
              <div class="col-md-4 col-sm-12 p-7">
                ${additionalInfoOne}
                ${additionalInfoTwo}
                ${additionalInfoThree}
                ${additionalInfoFour}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

export const ScreenFormView = () => {
  let tabItemsData = [
    {
      "label": "Core Information",
      "badges": 3
    },
    {
      "label": "Summaries",
      "badges": 2
    },
    {
      "label": "Actions",
      "badges": 0
    },
    {
      "label": "Meetings",
      "badges": 2
    },
    {
      "label": "Provisions",
      "badges": 2
    },
    {
      "label": "Sanctions",
      "badges": 2
    },
    {
      "label": "Letters",
      "badges": 2
    },
    {
      "label": "Appeals",
      "badges": 0
    },
    {
      "label": "Documents",
      "badges": 2
    },
    {
      "label": "Notes",
      "badges": 0
    },
    {
      "label": "Event",
      "badges": 0
    }
  ];

  let incidentInfoData = [
    {
      "label": "IR#",
      "content": "00012-001-2020"
    },
    {
      "label": "Student",
      "content": "Viola Collins"
    },
    {
      "label": "Location",
      "content": "Billions are spent each year on cosmetic products that promise to delete wrinkles, lighten age spots and eliminate itching, flaking, or redness. But the simplest and cheapest way to keep your skin healthy and youthful looking is to stay out of sun."
    },
    {
      "label": "Students Involved",
      "content": "902 Tressie Centers"
    },
    {
      "label": "EMS Called",
      "content": "No"
    },
    {
      "label": "Police Called",
      "content": "No"
    },
    {
      "label": "Incident Description",
      "content": "Billions are spent each year on cosmetic products that promise to delete wrinkles, lighten age spots and eliminate itching, flaking, or redness. But the simplest and cheapest way to keep your skin healthy and youthful looking is to stay out of sun."
    },
    {
      "label": "Alcohol Involved",
      "content": "902 Tressie Centers"
    },
    {
      "label": "Period of Recurrence",
      "content": "902 Tressie Centers"
    },
    {
      "label": "Status",
      "content": "00012-001-2020"
    },
    {
      "label": "Student",
      "content": "Viola Collins"
    }
  ];

  setTimeout(() => {
    const createTabItems = document.querySelector('.nav-tabs-single-row-with-controls');
    const createIncidentItems = document.querySelector('.incident-report-list');

    createTabItems.innerHTML = `
      ${tabItemsData
        .map(
          (item, i) => `
          <li class="nav-item">
            <a class="nav-link fs-5 ${i === 0 ? 'active' : ''}" href="#">
              <span class="${item.label.length > 10 ? 'line-clamp-2 lh-sm text-center' : ''}">${item.label}</span>
              <span class="${item.badges === 0 ? 'd-none ' : ''}badge bg-secondary bg-gradient count-badge fw-bold text-white rounded-circle p-1 ms-1 mt-1">${item.badges}</span>
            </a>
          </li>
          `
        )
      .join('')}
    `;

    createIncidentItems.innerHTML = `
    ${incidentInfoData
      .map(
        (item, i) => `
        <div class="row mb-3">
          <div class="col-md-4 col-sm-12 fw-bolder">${item.label}</div>
          <div class="col-md-8 col-sm-12">${item.content}</div>
        </div>
        `
      )
    .join('')}
  `;
  }, 100);

  const container = $('<div class="m-0"></div>').append(
    form_view_html
  );
  
  return container[0];
}

ScreenFormView.storyName = 'Form View';

ScreenFormView.parameters = {
  notes: `
    #Declarative Popovers

    ###HTML

    \`\`\`html
    ${form_view_html}
    \`\`\`
    ${moreDocumentation}
  `,
};
