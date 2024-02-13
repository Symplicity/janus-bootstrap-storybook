import iconSprite from '../node_modules/@tabler/icons/tabler-sprite-nostroke.svg'

export default {
  title: 'Examples/Lists/Collection'
}

const listCollectionHTML = `
  <div class="m-3 table-responsive">
    <table role="grid" class="table align-middle table-borderless fs-5 mb-0 expandable-table">
      <caption class="visually-hidden">
        List of all Collections and their associated Case Types
      </caption>
      <thead role="rowgroup" class="text-nowrap border-0">
        <tr role="row">
          <th id="column-1" role="columnheader" scope="col" class="px-3" width="40%">Case Type</th>
          <th id="column-2" role="columnheader" scope="col" class="px-3" width="20%">Last Published</th>
          <th id="column-3" role="columnheader" scope="col" class="px-3" width="20%">Status</th>
          <th id="column-4" role="columnheader" scope="col" class="px-3" width="20%">Actions</th>
        </tr>
      </thead>
      <tbody role="rowgroup" class="expandable-row-parent border-0">
        <tr role="row" class="bg-light shadow-none">
          <th id="row-1" class="lh-1 p-3" colspan="4" scope="colgroup">
            <div class="d-flex align-items-center">
              <div class="flex-fill fw-normal">
                <div class="d-flex align-items-center mb-1">
                  <span class="text-muted">Collection:</span> <a class="fw-semibold ms-1" aria-label="View Collection Overview">Incidents</a>
                  <button type="button" class="btn btn-action p-0 d-flex align-items-center ms-1 text-muted" aria-label="Copy Link to Title IX Reports" title="Copy Link to Title IX Reports">
                    <svg class="icon-base-font-size">
                      <use xlink:href="${iconSprite}#tabler-link" />
                    </svg>
                  </button>
                </div>
                <div class="mb-1">
                  <span class="text-muted me-1">Status:</span> <span class="text-black">Active</span>
                </div>
              </div>
              <div class="d-flex flex-fill align-items-center justify-content-end">
                <div class="d-inline-flex">
                  <button type="button" class="btn btn-action rounded-2 active py-0" aria-label="Add Case to TitleIX Reports">
                    <span class="fs-5 lh-lg">Add Case Type</span> 
                  </button>
                </div>
                <div class="d-inline-flex">
                  <button class="btn btn-action d-flex py-1 px-2 ms-3 row-toggle" type="button" data-bs-toggle="collapse" data-bs-target=".collapse" aria-expanded="true" aria-controls="content-1 content-2 content-3 content-4" aria-label="Expand Collection to View Associated Case Types">
                    <svg class="icon-lg-font-size">
                      <use xlink:href="${iconSprite}#tabler-chevron-down" />
                      <span class="visually-hidden">Expand Row</span>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </th>
        </tr>
      </tbody>

      <tbody role="rowgroup" class="expandable-row-child show">
        <tr id="content-1" role="row">
          <td role="cell" headers="column-1" class="px-3 py-1 text-nowrap">
            <button class="btn btn-link fw-normal mt-n1 d-inline-flex fs-5 p-0 me-2 minw-0">Academic Misconduct</button>
            <span class="badge bg-success rounded-pill text-uppercase lh-1 fs-7">Published</span>
          </td>
          <td role="cell" headers="column-2" class="px-3 py-1 text-nowrap">
            <span>Oct 1, 2021</span>
          </td>
          <td role="cell" headers="column-3" class="px-3 py-1 text-nowrap">
            <div class="form-check form-switch m-0 p-0 d-flex align-items-center">
              <input class="form-check-input m-2 ms-0" type="checkbox" role="switch" id="flexSwitchCheckChecked1" checked>
              <label class="form-check-label" for="flexSwitchCheckChecked1" aria-label="Case Type Active">Active</label>
            </div>
          </td>
          <td role="cell" headers="column-4" class="px-3 py-1 text-nowrap">
            <div class="d-inline-flex">
              <button class="btn btn-action d-flex py-1 px-2" type="button" aria-label="Copy Link to Public Form">
                <svg class="icon-base-font-size">
                  <use xlink:href="${iconSprite}#tabler-copy" />
                </svg>
              </button>
              <button class="btn btn-action d-flex py-1 px-2" type="button" aria-label="View Case Type">
                <svg class="icon-base-font-size">
                  <use xlink:href="${iconSprite}#tabler-link" />
                </svg>
              </button>
            </div>
          </td>
        </tr>

        <tr id="content-2" role="row">
          <td role="cell" headers="column-1" class="px-3 py-1 text-nowrap">
            <svg class="icon-base-font-size">
              <use xlink:href="${iconSprite}#tabler-corner-down-right" />
              <span class="visually-hidden">View Child Case</span>
            </svg>
            <button class="btn btn-link fw-normal mt-n1 d-inline-flex fs-5 p-0 me-2 minw-0 minw-0">Academic Misconduct</button>
            <span class="badge bg-dark rounded-pill text-uppercase lh-1 fs-7">Draft</span>
          </td>
          <td role="cell" headers="column-2" class="px-3 py-1"></td>
          <td role="cell" headers="column-3" class="px-3 py-1"></td>
          <td role="cell" headers="column-4" class="px-3 py-1">
            <div class="d-inline-flex">
              <button class="btn btn-action d-flex py-1 px-2" type="button" aria-label="Delete Draft Case Type">
                <svg class="icon-base-font-size">
                  <use xlink:href="${iconSprite}#tabler-trash" />
                </svg>
              </button>
            </div>
          </td>
        </tr>
        
        <tr id="content-3" role="row">
          <td role="cell" headers="column-1" class="px-3 py-1 text-nowrap">
          <button class="btn btn-link fw-normal mt-n1 d-inline-flex fs-5 p-0 me-2 minw-0">Student Grevience or Complaint</button>
            <span class="badge bg-warning rounded-pill text-uppercase lh-1 fs-7">Ready to Publish</span>
          </td>
          <td role="cell" headers="column-2" class="px-3 py-1">
            <span>Oct 1, 2021</span>
          </td>
          <td role="cell" headers="column-3" class="px-3 py-1">
            <div class="form-check form-switch m-0 p-0 d-flex align-items-center">
              <input class="form-check-input m-2 ms-0" type="checkbox" role="switch" id="flexSwitchCheckChecked2" checked>
              <label class="form-check-label" for="flexSwitchCheckChecked2" aria-label="Case Type Active">Active</label>
            </div>
          </td>
          <td role="cell" headers="column-4" class="px-3 py-1">
            <div class="d-inline-flex">
              <button class="btn btn-action d-flex py-1 px-2" type="button" aria-label="Copy Link to Public Form">
                <svg class="icon-base-font-size">
                  <use xlink:href="${iconSprite}#tabler-copy" />
                </svg>
              </button>
              <button class="btn btn-action d-flex py-1 px-2" type="button" aria-label="Copy Link to Public Form">
                <svg class="icon-base-font-size">
                  <use xlink:href="${iconSprite}#tabler-link" />
                </svg>
              </button>
            </div>
          </td>
        </tr>

        <tr id="content-4" role="row">
          <td role="cell" headers="column-1" class="px-3 py-1 text-nowrap">
            <button class="btn btn-link fw-normal mt-n1 d-inline-flex fs-5 p-0 me-2 minw-0">Staff Misconduct / Serious Misconduct</button>
            <span class="badge bg-danger rounded-pill text-uppercase lh-1 fs-7">Not Published</span>
          </td>
          <td role="cell" headers="column-2" class="px-3 py-1">
            <span>Oct 1, 2021</span>
          </td>
          <td role="cell" headers="column-3" class="px-3 py-1">
            <div class="form-check form-switch m-0 p-0 d-flex align-items-center">
              <input class="form-check-input m-2 ms-0" type="checkbox" role="switch" id="flexSwitchCheckChecked3">
              <label class="form-check-label" for="flexSwitchCheckChecked3" aria-label="Case Type Inactive">Inactive</label>
            </div>
          </td>
          <td role="cell" headers="column-4" class="px-3 py-1">
            <div class="d-inline-flex">
              <button class="btn btn-action d-flex py-1 px-2" type="button" aria-label="Copy Link to Public Form">
                <svg class="icon-base-font-size">
                  <use xlink:href="${iconSprite}#tabler-copy" />
                </svg>
              </button>
              <button class="btn btn-action d-flex py-1 px-2" type="button" aria-label="View Case Type">
                <svg class="icon-base-font-size">
                  <use xlink:href="${iconSprite}#tabler-link" />
                </svg>
              </button>
            </div>
          </td>
        </tr>

        <tr id="content-5" role="row">
          <td role="cell" headers="column-1" class="px-3 py-1 text-nowrap">
            <button class="btn btn-link fw-normal mt-n1 d-inline-flex fs-5 p-0 me-2 minw-0">Staff Misconduct / Serious Misconduct</button>
            <span class="badge bg-info rounded-pill text-uppercase lh-1 fs-7">Public</span>
          </td>
          <td role="cell" headers="column-2" class="px-3 py-1">
            <span>Oct 1, 2021</span>
          </td>
          <td role="cell" headers="column-3" class="px-3 py-1">
            <div class="form-check form-switch m-0 p-0 d-flex align-items-center">
              <input class="form-check-input m-2 ms-0" type="checkbox" role="switch" id="flexSwitchCheckChecked4">
              <label class="form-check-label" for="flexSwitchCheckChecked4" aria-label="Case Type Inactive">Inactive</label>
            </div>
          </td>
          <td role="cell" headers="column-4" class="px-3 py-1">
            <div class="d-inline-flex">
              <button class="btn btn-action d-flex py-1 px-2" type="button" aria-label="Copy Link to Public Form">
                <svg class="icon-base-font-size">
                  <use xlink:href="${iconSprite}#tabler-copy" />
                </svg>
              </button>
              <button class="btn btn-action d-flex py-1 px-2" type="button" aria-label="View Case Type">
                <svg class="icon-base-font-size">
                  <use xlink:href="${iconSprite}#tabler-link" />
                </svg>
              </button>
            </div>
          </td>
        </tr>

        <tr id="content-6" role="row">
          <td role="cell" headers="column-1" class="px-3 py-1 text-nowrap">
            <button class="btn btn-link fw-normal mt-n1 d-inline-flex fs-5 p-0 me-2 minw-0">Staff Misconduct / Serious Misconduct</button>
            <span class="badge bg-info rounded-pill text-uppercase lh-1 fs-7">Internal</span>
          </td>
          <td role="cell" headers="column-2" class="px-3 py-1">
            <span>Oct 1, 2021</span>
          </td>
          <td role="cell" headers="column-3" class="px-3 py-1">
            <div class="form-check form-switch m-0 p-0 d-flex align-items-center">
              <input class="form-check-input m-2 ms-0" type="checkbox" role="switch" id="flexSwitchCheckChecked5">
              <label class="form-check-label" for="flexSwitchCheckChecked5" aria-label="Case Type Inactive">Inactive</label>
            </div>
          </td>
          <td role="cell" headers="column-4" class="px-3 py-1">
            <div class="d-inline-flex">
              <button class="btn btn-action d-flex py-1 px-2" type="button" aria-label="Copy Link to Public Form">
                <svg class="icon-base-font-size">
                  <use xlink:href="${iconSprite}#tabler-copy" />
                </svg>
              </button>
              <button class="btn btn-action d-flex py-1 px-2" type="button" aria-label="View Case Type">
                <svg class="icon-base-font-size">
                  <use xlink:href="${iconSprite}#tabler-link" />
                </svg>
              </button>
            </div>
          </td>
        </tr>
      </tbody>

      <tbody role="rowgroup" class="expandable-row-parent">
        <tr role="row" class="bg-light shadow-none">
          <th id="row-2" class="lh-1 p-3" colspan="4" scope="colgroup">
            <div class="d-flex align-items-center">
              <div class="flex-fill fw-normal">
                <div>
                  <span class="text-muted me-1">Collection:</span> <button role="link" class="btn btn-link fw-normal mt-n1 d-inline-flex fs-5 p-0 me-2 minw-0 minw-0" aria-label="View Collection Overview">Incidents</button>
                  <button type="button" class="btn btn-action p-0 d-inline-flex text-muted" aria-label="Copy Link to Public Form">
                    <svg class="icon-base-font-size">
                      <use xlink:href="${iconSprite}#tabler-link" />
                    </svg>
                  </button>
                </div>
                <div class="mb-1">
                  <span class="text-muted me-1">Status:</span> <span class="text-black">Active</span>
                </div>
              </div>
              <div class="d-flex flex-fill align-items-center justify-content-end">
                <div class="d-inline-flex">
                  <button type="button" class="btn btn-action rounded-2 active py-0" aria-label="Add Case to TitleIX Reports">
                    <span class="fs-5 lh-lg">Add Case Type</span> 
                  </button>
                </div>
                <div class="d-inline-flex">
                  <button class="btn btn-action d-flex py-1 px-2 ms-3 row-toggle" type="button" data-bs-toggle="collapse" data-bs-target=".collapse" aria-expanded="true" aria-controls="content-1 content-2 content-3 content-4" aria-label="Expand Collection to View Associated Case Types">
                    <svg class="icon-lg-font-size">
                      <use xlink:href="${iconSprite}#tabler-chevron-down" />
                      <span class="visually-hidden">Expand Row</span>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </th>
        </tr>
      </tbody>

      <tbody role="rowgroup" class="expandable-row-child show">
        <tr id="content-7" role="row">
          <td role="cell" headers="column-1" class="px-3 py-1 text-nowrap">
            <button class="btn btn-link fw-normal mt-n1 d-inline-flex fs-5 p-0 me-2 minw-0">Academic Misconduct</button>
            <span class="badge bg-success rounded-pill text-uppercase lh-1 fs-7">Published</span>
          </td>
          <td role="cell" headers="column-2" class="px-3 py-1 text-nowrap">
            <span>Oct 1, 2021</span>
          </td>
          <td role="cell" headers="column-3" class="px-3 py-1 text-nowrap">
            <div class="form-check form-switch m-0 p-0 d-flex align-items-center">
              <input class="form-check-input m-2 ms-0" type="checkbox" role="switch" id="flexSwitchCheckChecked6" checked>
              <label class="form-check-label" for="flexSwitchCheckChecked6" aria-label="Case Type Active">Active</label>
            </div>
          </td>
          <td role="cell" headers="column-4" class="px-3 py-1 text-nowrap">
            <div class="d-inline-flex">
              <button class="btn btn-action d-flex py-1 px-2" type="button" aria-label="Copy Link to Public Form">
                <svg class="icon-base-font-size">
                  <use xlink:href="${iconSprite}#tabler-copy" />
                </svg>
              </button>
              <button class="btn btn-action d-flex py-1 px-2" type="button" aria-label="View Case Type">
                <svg class="icon-base-font-size">
                  <use xlink:href="${iconSprite}#tabler-link" />
                </svg>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>  
  </div>
`

export const ListCollection = () =>
  `<div style="margin: 0; overflow-x: auto;">${listCollectionHTML}</div>`

ListCollection.storyName = 'Collection'

ListCollection.parameters = {
  notes: `
    # ListCollection

    ## Documentation
    
    Here are some notes on lists. 
    
    ## Code Sample
    
    \`\`\`html
    ${listCollectionHTML}
    \`\`\`
    
    `
}
