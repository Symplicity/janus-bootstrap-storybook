import iconSprite from '../node_modules/@symplicity/tabler-icons/symplicity/tabler-sprite-nostroke.svg'

export default {
  title: 'Examples/Lists/Default'
}

const listHTML = `
  <div class="mt-7">
    <table class="table align-middle table-borderless fs-5">
      <thead class="border-bottom border-light text-nowrap">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Actions</th>
          <th scope="col">
            <button class="d-flex border-0 bg-white fw-bold p-0">
              Last Name
              <svg class="icon-lg-font-size d-flex">
                <use xlink:href="${iconSprite}#tabler-chevron-up" />
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
          <td class="lh-1">
            <label class="visually-hidden" for="checkbox1">Select Row</label>
            <input class="form-check-input fs-4 mt-0 align-middle" type="checkbox" id="checkbox1" value="" aria-label="...">
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
          <td class="lh-1">
            <label class="visually-hidden" for="checkbox2">Select Row</label>
            <input class="form-check-input fs-4 mt-0 align-middle" type="checkbox" id="checkbox2" value="" aria-label="...">
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
  </div>
`

export const ListDefault = () => `${listHTML}`

ListDefault.storyName = 'Default'

ListDefault.parameters = {
  notes: `
    # ListDefault

    ## Documentation
    
    Here are some notes on lists. 
    
    ## Code Sample
    
    \`\`\`html
    ${listHTML}
    \`\`\`
    
    `
}
