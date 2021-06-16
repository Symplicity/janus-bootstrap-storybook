import iconSprite from '../node_modules/@symplicity/tabler-icons/symplicity/tabler-sprite-nostroke.svg';

export default {
  title: 'Components/Pagination',
  parameters: {
    options: {
      selectedPanel: 'storybook/a11y/panel',
    },
  },
};

const paginationHTML = `
<div>
  <div class="d-flex align-items-center">
    <div class="d-flex">
      <button type="button" class="btn btn-action btn-action-icon-only rounded-circle border-light">
        <svg class="icon-lg-font-size mt-n1">
          <use xlink:href="${iconSprite}#tabler-chevron-left" />
          <span class="visually-hidden">Previous</span>
        </svg>
      </button>
    </div>
    <div class="d-flex ms-2 me-2">
      <select class="form-select border-0 shadow-none" aria-label="Default select example">
        <option value="2">Page 2</option>
        <option value="3">Page 3</option>
        <option value="4">Page 4</option>
      </select>
    </div>
    <div class="d-flex">
      <button type="button" class="btn btn-action btn-action-icon-only rounded-circle border-light">
        <svg class="icon-lg-font-size mt-n1">
          <use xlink:href="${iconSprite}#tabler-chevron-right" />
          <span class="visually-hidden">Next</span>
        </svg>
      </button>
    </div>
  </div>
</div>
`;

const moreDocumentation = `
#Additional Documentation
For additional documentation, see:

- Bootstrap Documentation
- Design System 

`;

export const Pagination = () => `<div style="margin-top:100px">${paginationHTML}</div>`;

Pagination.storyName = 'Pagination';

Pagination.parameters = {
  notes: `
    # Pagination

    ## Documentation
    
    Here are some notes on pagination. 
    
    ## Code Sample
    
    \`\`\`html
    ${paginationHTML}
    \`\`\`
    
    ${moreDocumentation}
    
    `,
};
