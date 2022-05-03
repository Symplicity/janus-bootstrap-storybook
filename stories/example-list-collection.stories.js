import iconSprite from '../node_modules/@symplicity/tabler-icons/symplicity/tabler-sprite-nostroke.svg'

export default {
  title: 'Examples/Lists/Collection'
}

const listCollectionHTML = `
  <div class="mt-7">
    <table class="table align-middle table-borderless fs-5">
      <thead class="border-bottom border-light text-nowrap">
        <tr>
          <th scope="col">Case Type</th>
          <th scope="col">Last Published</th>
          <th scope="col">Status</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-bottom border-light bg-light">
          <td class="lh-1 p-3" colspan="4">
            <div class="d-flex align-items-center">
              <div class="flex-fill">
                <div>
                  <span class="text-muted me-1">Collection:</span> <button class="btn btn-link p-0 lh-1 fs-5 minw-0 me-1 mt-n1">Incidents</button>
                  <svg class="icon-base-font-size">
                    <use xlink:href="${iconSprite}#tabler-link" />
                    <span class="visually-hidden">View Collection</span>
                  </svg>
                </div>
                <div>
                  <span class="text-muted me-1">Status:</span> <span class="fw-semibold">Active</span>
                </div>
              </div>
              <div class="d-flex flex-fill align-items-center justify-content-end">
                <div class="d-inline-flex">
                  <button type="button" class="btn btn-action rounded-2 active py-0">
                    <span class="fs-5 lh-lg">Add Case Type</span> 
                  </button>
                </div>
                <div class="d-inline-flex">
                  <button class="btn btn-action d-flex py-1 px-2 ms-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
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
        <tr class="border-bottom border-light collapse" id="collapseExample">
          <td class="lh-1">1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
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
