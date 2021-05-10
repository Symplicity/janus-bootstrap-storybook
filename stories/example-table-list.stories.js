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
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colspan="2" class="text-start">Larry the Bird</td>
          <td>@twitter</td>
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
