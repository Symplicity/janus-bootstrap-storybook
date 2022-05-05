import iconSprite from '../node_modules/@symplicity/tabler-icons/symplicity/tabler-sprite-nostroke.svg'

export default {
  title: 'Examples/Lists/Collection'
}

const listCollectionHTML = `
  <div class="mt-7 table-responsive">
    <table class="table align-middle table-borderless fs-5 expandable-table">
      <thead class="text-nowrap">
        <tr>
          <th scope="col" class="px-3" width="40%">Case Type</th>
          <th scope="col" class="px-3" width="20%">Last Published</th>
          <th scope="col" class="px-3" width="20%">Status</th>
          <th scope="col" class="px-3" width="20%">Actions</th>
        </tr>
      </thead>
      <tbody class="expandable-row-parent">
        <tr class="bg-light">
          <td class="lh-1 p-3" colspan="4">
            <div class="d-flex align-items-center">
              <div class="flex-fill">
                <div>
                  <span class="text-gray-400 me-1">Collection:</span> <button class="btn btn-link fw-normal mt-n1 d-inline-flex fs-5 p-0 lh-lg minw-0">Incidents</button>
                  <svg class="icon-base-font-size">
                    <use xlink:href="${iconSprite}#tabler-link" />
                    <span class="visually-hidden">View Collection</span>
                  </svg>
                </div>
                <div class="mb-1">
                  <span class="text-muted me-1">Status:</span> <span class="text-black">Active</span>
                </div>
              </div>
              <div class="d-flex flex-fill align-items-center justify-content-end">
                <div class="d-inline-flex">
                  <button type="button" class="btn btn-action rounded-2 active py-0">
                    <span class="fs-5 lh-lg">Add Case Type</span> 
                  </button>
                </div>
                <div class="d-inline-flex">
                  <button class="btn btn-action d-flex py-1 px-2 ms-3" type="button" data-bs-toggle="collapse" data-bs-target=".collapse" aria-expanded="false" aria-controls="collapseExample">
                    <svg class="icon-lg-font-size">
                      <use xlink:href="${iconSprite}#tabler-chevron-down" />
                      <span class="visually-hidden">Expand Row</span>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
      <tbody class="collapse">
        <tr id="row-1">
          <td class="px-3 pt-3 pb-0 text-nowrap">
          <button class="btn btn-link fw-normal mt-n1 d-inline-flex fs-5 p-0 lh-lg">Academic Misconduct</button>
            <span class="badge rounded-pill badge-published text-uppercase lh-sm">Published</span>
          </td>
          <td class="px-3 pt-3 pb-0">
            <span>Oct 1, 2021</span>
          </td>
          <td class="px-3 pt-3 pb-0">
            <div class="form-check form-switch m-0 p-0 d-flex align-items-center">
              <input class="form-check-input m-2 ms-0" type="checkbox" role="switch" id="flexSwitchCheckChecked1" checked>
              <label class="form-check-label" for="flexSwitchCheckChecked1">Active</label>
            </div>
          </td>
          <td class="px-3 pt-3 pb-0">
            <div class="d-inline-flex">
              <button class="btn btn-action d-flex py-1 px-2" type="button">
                <svg class="icon-base-font-size">
                  <use xlink:href="${iconSprite}#tabler-copy" />
                  <span class="visually-hidden">View Collection</span>
                </svg>
              </button>
              <button class="btn btn-action d-flex py-1 px-2" type="button">
                <svg class="icon-base-font-size">
                  <use xlink:href="${iconSprite}#tabler-link" />
                  <span class="visually-hidden">View Collection</span>
                </svg>
              </button>
            </div>
          </td>
        </tr>

        <tr id="row-2">
          <td class="px-3 py-0 text-nowrap">
          <svg class="icon-base-font-size">
            <use xlink:href="${iconSprite}#tabler-corner-down-right" />
            <span class="visually-hidden">View Child Case</span>
          </svg>
          <button class="btn btn-link fw-normal mt-n1 d-inline-flex fs-5 p-0 lh-lg minw-0">Academic Misconduct</button>
            <span class="badge rounded-pill badge-draft text-uppercase lh-sm">Draft</span>
          </td>
          <td class="px-3 py-0"></td>
          <td class="px-3 py-0"></td>
          <td class="px-3 py-0">
            <div class="d-inline-flex">
              <button class="btn btn-action d-flex py-1 px-2" type="button">
                <svg class="icon-base-font-size">
                  <use xlink:href="${iconSprite}#tabler-trash" />
                  <span class="visually-hidden">View Collection</span>
                </svg>
              </button>
            </div>
          </td>
        </tr>
        
        <tr id="row-3">
          <td class="px-3 pt-0 pb-3 text-nowrap">
          <button class="btn btn-link fw-normal mt-n1 d-inline-flex fs-5 p-0 lh-lg">Student Grevience or Complaint</button>
            <span class="badge rounded-pill badge-ready-to-publish text-uppercase lh-sm">Ready to Publish</span>
          </td>
          <td class="px-3 pt-0 pb-3">
            <span>Oct 1, 2021</span>
          </td>
          <td class="px-3 pt-0 pb-3">
            <div class="form-check form-switch m-0 p-0 d-flex align-items-center">
              <input class="form-check-input m-2 ms-0" type="checkbox" role="switch" id="flexSwitchCheckChecked2" checked>
              <label class="form-check-label" for="flexSwitchCheckChecked2">Active</label>
            </div>
          </td>
          <td class="px-3 pt-0 pb-3">
            <div class="d-inline-flex">
              <button class="btn btn-action d-flex py-1 px-2" type="button">
                <svg class="icon-base-font-size">
                  <use xlink:href="${iconSprite}#tabler-copy" />
                  <span class="visually-hidden">View Collection</span>
                </svg>
              </button>
              <button class="btn btn-action d-flex py-1 px-2" type="button">
                <svg class="icon-base-font-size">
                  <use xlink:href="${iconSprite}#tabler-link" />
                  <span class="visually-hidden">View Collection</span>
                </svg>
              </button>
            </div>
          </td>
        </tr>
      </tbody>

      <tbody class="expandable-row-parent">
      <tr class="bg-light">
        <td class="lh-1 p-3" colspan="4">
          <div class="d-flex align-items-center">
            <div class="flex-fill">
              <div>
                <span class="text-gray-400 me-1">Collection:</span> <button class="btn btn-link fw-normal mt-n1 d-inline-flex fs-5 p-0 lh-lg minw-0">Incidents</button>
                <svg class="icon-base-font-size">
                  <use xlink:href="${iconSprite}#tabler-link" />
                  <span class="visually-hidden">View Collection</span>
                </svg>
              </div>
              <div class="mb-1">
                <span class="text-muted me-1">Status:</span> <span class="text-black">Active</span>
              </div>
            </div>
            <div class="d-flex flex-fill align-items-center justify-content-end">
              <div class="d-inline-flex">
                <button type="button" class="btn btn-action rounded-2 active py-0">
                  <span class="fs-5 lh-lg">Add Case Type</span> 
                </button>
              </div>
              <div class="d-inline-flex">
                <button class="btn btn-action d-flex py-1 px-2 ms-3" type="button" data-bs-toggle="collapse" data-bs-target=".collapse" aria-expanded="false" aria-controls="collapseExample">
                  <svg class="icon-lg-font-size">
                    <use xlink:href="${iconSprite}#tabler-chevron-down" />
                    <span class="visually-hidden">Expand Row</span>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </tbody>

    <tbody class="collapse">
      <tr id="row-4">
        <td class="px-3 pt-3 pb-0 text-nowrap">
        <button class="btn btn-link fw-normal mt-n1 d-inline-flex fs-5 p-0 lh-lg">Academic Misconduct</button>
          <span class="badge rounded-pill badge-published text-uppercase lh-sm">Published</span>
        </td>
        <td class="px-3 pt-3 pb-0">
          <span>Oct 1, 2021</span>
        </td>
        <td class="px-3 pt-3 pb-0">
          <div class="form-check form-switch m-0 p-0 d-flex align-items-center">
            <input class="form-check-input m-2 ms-0" type="checkbox" role="switch" id="flexSwitchCheckChecked3" checked>
            <label class="form-check-label" for="flexSwitchCheckChecked3">Active</label>
          </div>
        </td>
        <td class="px-3 pt-3 pb-0">
          <div class="d-inline-flex">
            <button class="btn btn-action d-flex py-1 px-2" type="button">
              <svg class="icon-base-font-size">
                <use xlink:href="${iconSprite}#tabler-copy" />
                <span class="visually-hidden">View Collection</span>
              </svg>
            </button>
            <button class="btn btn-action d-flex py-1 px-2" type="button">
              <svg class="icon-base-font-size">
                <use xlink:href="${iconSprite}#tabler-link" />
                <span class="visually-hidden">View Collection</span>
              </svg>
            </button>
          </div>
        </td>
      </tr>

      <tr id="row-5">
        <td class="px-3 pt-0 pb-3 text-nowrap">
        <svg class="icon-base-font-size">
          <use xlink:href="${iconSprite}#tabler-corner-down-right" />
          <span class="visually-hidden">View Child Case</span>
        </svg>
        <button class="btn btn-link fw-normal mt-n1 d-inline-flex fs-5 p-0 lh-lg minw-0">Academic Misconduct</button>
          <span class="badge rounded-pill badge-draft text-uppercase lh-sm">Draft</span>
        </td>
        <td class="px-3 pt-0 pb-3"></td>
        <td class="px-3 pt-0 pb-3"></td>
        <td class="px-3 pt-0 pb-3">
          <div class="d-inline-flex">
            <button class="btn btn-action d-flex py-1 px-2" type="button">
              <svg class="icon-base-font-size">
                <use xlink:href="${iconSprite}#tabler-trash" />
                <span class="visually-hidden">View Collection</span>
              </svg>
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>  
</div>
`

export const ListCollection = () => `<div>${listCollectionHTML}</div>`

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
