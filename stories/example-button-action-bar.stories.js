import buttonNotes from './button.notes.md'
// import buttonIconNotes from './button.icon.notes.md';
// import buttonOutlineNotes from './button.outline.notes.md';

import iconSprite from '../node_modules/@tabler/icons/tabler-sprite-nostroke.svg'

export default {
  title: 'Examples/Buttons/Action Bar'
}

const actionHTML = `
  <div class="container">
    <button class="btn btn-action btn-action-icon-only rounded-circle" type="button">
      <svg class="icon-lg-font-size mt-n1">
        <use xlink:href="${iconSprite}#tabler-star" />
        <span class="visually-hidden">More Actions</span>
      </svg>
    </button>
    <button class="btn btn-action btn-action-icon-only rounded-circle" type="button">
      <svg class="icon-lg-font-size mt-n1">
        <use xlink:href="${iconSprite}#tabler-pencil" />
        <span class="visually-hidden">More Actions</span>
      </svg>
    </button>
    <div class="btn-group">
      <button type="button" class="btn btn-action btn-action-icon-only btn-more rounded-circle" aria-expanded="false" id="dropdownMenuButton1" data-bs-toggle="dropdown" data-bs-display="static">
        <svg class="icon-lg-font-size mt-n1">
          <use xlink:href="${iconSprite}#tabler-dots" />
          <span class="visually-hidden">More Actions</span>
        </svg>
      </button>
      <ul class="dropdown-menu dropdown-menu-end shadow-sm mt-2 text-nowrap" aria-labelledby="dropdownMenuButton1" >
        <li>
          <a class="dropdown-item" href="#">
            Add to Career Portfolio
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#">
            Remove QR Code
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#">
            View as Word
          </a>
        </li>
        <li><div class="dropdown-divider"></div></li>
        <li>
          <a class="dropdown-item text-danger" href="#">
            Delete
          </a>
        </li>
      </ul>
    </div>
  </div>
`

export const Action = () => {
  const container = $('<div class="text-center pt-3"></div>').append(actionHTML)

  setTimeout(function () {
    $(function () {
      container.find('[data-bs-toggle="dropdown"]').dropdown('show')
    })
  }, 0)

  return container[0]
}

Action.storyName = 'Actions'

Action.parameters = {
  notes: `
    # Action Buttons

    ## Documentation
    
    Here are some notes on action buttons. 
    
    ## Code Sample
    
    \`\`\`html
    ${actionHTML}
    \`\`\`
    
    ${buttonNotes}
    
    `
}
