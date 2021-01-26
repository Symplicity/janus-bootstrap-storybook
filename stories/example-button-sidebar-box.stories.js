import buttonNotes from './button.notes.md';
import buttonIconNotes from './button.icon.notes.md';
import buttonOutlineNotes from './button.outline.notes.md';

import iconSprite from '../node_modules/@tabler/icons/tabler-sprite.svg';

export default {
  title: 'Examples/Buttons/Sidebar Box',
  parameters: {
    options: {
      selectedPanel: 'storybook/a11y/panel'
    }
  }
};


const sidebarHTML = `
  <div class="sidebar">
    <div class="card bg-light border-0 h6">
      <div class="d-flex">
        <div class="p-7 pt-3 flex-fill">
          <span class="mt-2 d-inline-flex align-middle"><strong>Similar Jobs</strong></span>
        </div>
        <div class="p-7 pt-3">
          <button class="btn btn-action btn-action-icon-only rounded-circle" type="button">
            <svg class="icon-lg-font-size mt-n1">
              <use xlink:href="${iconSprite}#tabler-pencil" />
              <span class="visually-hidden">Edit Similar Jobs</span>
            </svg>
          </button>
        </div>
      </div>
      <ul class="list-unstyled p-7 pt-0 pb-0">
        <li class="pb-7 d-flex">
          <div>
            <img src="https://via.placeholder.com/33" alt="Placeholder" class="d-inline-flex">
          </div>
          <div class="flex-grow-1 ps-2">
            <span><strong>System Engineer System Engineer System Engineer System Engineer </strong></span><br>
            <span>Rockville, MD Rockville, MD Rockville, MD Rockville, MD Rockville, MD </span>
          </div>
        </li>
        <li class="pb-7 d-flex">
          <div>
            <img src="https://via.placeholder.com/33" alt="Placeholder" class="d-inline-flex">
          </div>
          <div class="flex-grow-1 ps-2">
            <span><strong>System Engineer</strong></span><br>
            <span>Rockville, MD</span>
          </div>
        </li>
        <li class="pb-0 d-flex">
          <div>
            <img src="https://via.placeholder.com/33" alt="Placeholder" class="d-inline-flex">
          </div>
          <div class="flex-grow-1 ps-2">
            <span><strong>System Engineer</strong></span><br>
            <span>Rockville, MD</span>
          </div>
        </li>
      </ul>
      <a href="#" class="m-7 mt-0">View all</a>
    </div>
  </div>
`;

export const Sidebar = () => {
  const container = $('<div></div>').append(sidebarHTML);
  
  setTimeout(function() {
    $(function() {
      container.find('[data-bs-toggle="dropdown"]').dropdown('show');
    });
  },0)
  
  return container[0]; 
};

Sidebar.storyName = 'Sidebar';

Sidebar.parameters = {
  notes: `
    # Sidebar Buttons

    ## Documentation
    
    Here are some notes on action buttons. 
    
    ## Code Sample
    
    \`\`\`html
    ${sidebarHTML}
    \`\`\`
    
    ${buttonNotes}
    
    ` 
};
