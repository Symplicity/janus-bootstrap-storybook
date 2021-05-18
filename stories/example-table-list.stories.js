import iconSprite from '../node_modules/@symplicity/tabler-icons/symplicity/tabler-sprite-nostroke.svg';

export default {
  title: 'Examples/Tables/List',
  parameters: {
    options: {
      selectedPanel: 'storybook/a11y/panel',
    },
  },
};

const listHTML = `
  <div class="mt-7">
    <table class="table align-middle fs-5 text-nowrap table-borderless">
      <thead class="border-bottom border-light">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Actions</th>
          <th scope="col">Last Name</th>
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
          <td>Marsh</td>
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
          <td>Marsh</td>
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
`;

export const List = () => {
  const container = $('<div></div>').append(
    listHTML
  );

  setTimeout(function () {
    $(function () {
      container.find('[data-bs-toggle="dropdown"]').dropdown('show');
    });
  }, 0);

  return container[0];
};

List.storyName = 'List';

List.parameters = {
  notes: `
    # List

    ## Documentation
    
    Here are some notes on lists. 
    
    ## Code Sample
    
    \`\`\`html
    ${listHTML}
    \`\`\`
    
    `,
};
