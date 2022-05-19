import buttonNotes from './button.notes.md'
// import buttonIconNotes from './button.icon.notes.md';
// import buttonOutlineNotes from './button.outline.notes.md';

import iconSprite from '../node_modules/@symplicity/tabler-icons/symplicity/tabler-sprite-nostroke.svg'

export default {
  title: 'Examples/Buttons/Sidebar Box'
}

const sidebar_html = `
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
            <img src="https://dummyimage.com/33x33/aaa/fff" alt="Placeholder" class="d-inline-flex">
          </div>
          <div class="flex-grow-1 ps-2">
            <span><strong>System Engineer System Engineer System Engineer System Engineer </strong></span><br>
            <span>Rockville, MD Rockville, MD Rockville, MD Rockville, MD Rockville, MD </span>
          </div>
        </li>
        <li class="pb-7 d-flex">
          <div>
            <img src="https://dummyimage.com/33x33/aaa/fff" alt="Placeholder" class="d-inline-flex">
          </div>
          <div class="flex-grow-1 ps-2">
            <span><strong>System Engineer</strong></span><br>
            <span>Rockville, MD</span>
          </div>
        </li>
        <li class="pb-0 d-flex">
          <div>
            <img src="https://dummyimage.com/33x33/aaa/fff" alt="Placeholder" class="d-inline-flex">
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
`

export const Sidebar = () => `${sidebar_html}`

Sidebar.storyName = 'Sidebar'

Sidebar.parameters = {
  notes: `
    # Sidebar Buttons

    ## Documentation
    
    Here are some notes on action buttons. 
    
    ## Code Sample
    
    \`\`\`html
    ${sidebar_html}
    \`\`\`
    
    ${buttonNotes}
    
    `
}
