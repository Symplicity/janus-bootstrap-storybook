import buttonNotes from './button.notes.md'
// import buttonIconNotes from './button.icon.notes.md';
// import buttonOutlineNotes from './button.outline.notes.md';

import iconSprite from '../node_modules/@symplicity/tabler-icons/symplicity/tabler-sprite-nostroke.svg'

export default {
  title: 'Components/Buttons'
}

const primaryHTML = `
<div>
  <h3>Primary - Large</h3>
  <button type="button" class="btn btn-lg btn-primary">Primary</button>
  <button type="button" class="btn btn-lg btn-primary" disabled>Primary</button>
  <button type="button" class="btn btn-lg btn-primary">
    <svg width="1.25rem" height="1.25rem" class="mt-n1 me-2">
      <use xlink:href="${iconSprite}#tabler-star" />
    </svg>Primary
  </button>
  <button type="button" class="btn btn-lg btn-primary" disabled>
    <svg width="1.25rem" height="1.25rem" class="mt-n1 me-2">
      <use xlink:href="${iconSprite}#tabler-star" />
    </svg>Primary
  </button>
  <br><br>
  <h3>Primary - Regular</h3>
  <button type="button" class="btn btn-primary">Primary</button>
  <button type="button" class="btn btn-primary" disabled>Primary</button>
  <button type="button" class="btn btn-primary">
    <svg width="1.125rem" height="1.125rem" class="mt-n1 me-1">
      <use xlink:href="${iconSprite}#tabler-star" />
    </svg>Primary
  </button>
  <button type="button" class="btn btn-primary" disabled>
    <svg width="1.125rem" height="1.125rem" class="mt-n1 me-1">
      <use xlink:href="${iconSprite}#tabler-star" />
    </svg>Primary
  </button>
  <br><br>
  <h3>Primary - Small</h3>
  <button type="button" class="btn btn-sm btn-primary">Primary</button>
  <button type="button" class="btn btn-sm btn-primary" disabled>Primary</button>
  <button type="button" class="btn btn-sm btn-primary">Primary</button>
  <button type="button" class="btn btn-sm btn-primary" disabled>Primary</button>
</div>
`

export const Primary = () => primaryHTML

Primary.storyName = 'Primary'

Primary.parameters = {
  notes: `
    # Primary Buttons

    ## Documentation
    
    Here are some notes on primary buttons. 
    
    ## Code Sample
    
    \`\`\`html
    ${primaryHTML}
    \`\`\`
    
    ${buttonNotes}
    
    `
}

const altPrimaryHTML = `
<div>
  <h3>Alt Primary - Large</h3>
  <button type="button" class="btn btn-lg btn-outline-primary">Alt Primary</button>
  <button type="button" class="btn btn-lg btn-outline-primary" disabled>Alt Primary</button>
  <button type="button" class="btn btn-lg btn-outline-primary">
    <svg width="1.25rem" height="1.25rem" class="mt-n1 me-2">
      <use xlink:href="${iconSprite}#tabler-star" />
    </svg>Alt Primary
  </button>
  </button>
  <button type="button" class="btn btn-lg btn-outline-primary" disabled>
    <svg width="1.25rem" height="1.25rem" class="mt-n1 me-2">
      <use xlink:href="${iconSprite}#tabler-star" />
    </svg>Alt Primary
  </button>
  <br><br>
  <h3>Alt Primary - Regular</h3>
  <button type="button" class="btn btn-outline-primary">Alt Primary</button>
  <button type="button" class="btn btn-outline-primary" disabled>Alt Primary</button>
  <button type="button" class="btn btn-outline-primary">
    <svg width="1.125rem" height="1.125rem" class="mt-n1 me-1">
      <use xlink:href="${iconSprite}#tabler-star" />
    </svg>Alt Primary
  </button>
  <button type="button" class="btn btn-outline-primary" disabled>
    <svg width="1.125rem" height="1.125rem" class="mt-n1 me-1">
      <use xlink:href="${iconSprite}#tabler-star" />
    </svg>Alt Primary
  </button>
  <br><br>
  <h3>Alt Primary - Small</h3>
  <button type="button" class="btn btn-sm btn-outline-primary">Alt Primary</button>
  <button type="button" class="btn btn-sm btn-outline-primary" disabled>Alt Primary</button>
  <button type="button" class="btn btn-sm btn-outline-primary">Alt Primary</button>
  <button type="button" class="btn btn-sm btn-outline-primary" disabled>Alt Primary</button>
</div>
`

export const AltPrimary = () => altPrimaryHTML

AltPrimary.storyName = 'Alt Primary (Outline)'

AltPrimary.parameters = {
  notes: `
    # Alt Primary Buttons

    ## Documentation
    
    Here are some notes on alt primary buttons. 
    
    ## Code Sample
    
    \`\`\`html
    ${altPrimaryHTML}
    \`\`\`
    
    ${buttonNotes}
    
    `
}

const secondaryHTML = `
<div>
  <h3>Secondary - Large</h3>
  <button type="button" class="btn btn-lg btn-outline-secondary">Secondary</button>
  <button type="button" class="btn btn-lg btn-outline-secondary" disabled>Secondary</button>
  <button type="button" class="btn btn-lg btn-outline-secondary">
    <svg width="1.25rem" height="1.25rem" class="mt-n1 me-2">
      <use xlink:href="${iconSprite}#tabler-star" />
    </svg>Secondary
  </button>
  <button type="button" class="btn btn-lg btn-outline-secondary" disabled>
    <svg width="1.25rem" height="1.25rem" class="mt-n1 me-2">
      <use xlink:href="${iconSprite}#tabler-star" />
    </svg>Secondary
  </button>
  <br><br>
  <h3>Secondary - Regular</h3>
  <button type="button" class="btn btn-outline-secondary">Secondary</button>
  <button type="button" class="btn btn-outline-secondary" disabled>Secondary</button>
  <button type="button" class="btn btn-outline-secondary">
    <svg width="1.125rem" height="1.125rem" class="mt-n1 me-1">
      <use xlink:href="${iconSprite}#tabler-star" />
    </svg>Secondary
  </button>
  <button type="button" class="btn btn-outline-secondary" disabled>
    <svg width="1.125rem" height="1.125rem" class="mt-n1 me-1">
      <use xlink:href="${iconSprite}#tabler-star" />
    </svg>Secondary
  </button>
  <br><br>
  <h3>Secondary - Small</h3>
  <button type="button" class="btn btn-sm btn-outline-secondary">Secondary</button>
  <button type="button" class="btn btn-sm btn-outline-secondary" disabled>Secondary</button>
  <button type="button" class="btn btn-sm btn-outline-secondary">Secondary</button>
  <button type="button" class="btn btn-sm btn-outline-secondary" disabled>Secondary</button>
</div>
`

export const Secondary = () => secondaryHTML

Secondary.storyName = 'Secondary (Outline)'

Secondary.parameters = {
  notes: `
    # Secondary Buttons

    ## Documentation
    
    Here are some notes on alt primary buttons. 
    
    ## Code Sample
    
    \`\`\`html
    ${secondaryHTML}
    \`\`\`
    
    ${buttonNotes}
    
    `
}

const otherHTML = `
<div>
  <h3>Other - Large</h3>
  <button type="button" class="btn btn-lg btn-danger">Leave</button>
  <button type="button" class="btn btn-lg btn-danger" disabled>Leave</button>
  <button type="button" class="btn btn-lg btn-danger">
    <svg width="1.25rem" height="1.25rem" class="mt-n1 me-2">
      <use xlink:href="${iconSprite}#tabler-trash" />
    </svg>Delete
  </button>
  <button type="button" class="btn btn-lg btn-danger" disabled>
    <svg width="1.25rem" height="1.25rem" class="mt-n1 me-2">
      <use xlink:href="${iconSprite}#tabler-trash" />
    </svg>Delete
  </button>
  <br><br>
  <h3>Other - Regular</h3>
  <button type="button" class="btn btn-danger">Leave</button>
  <button type="button" class="btn btn-danger" disabled>Leave</button>
  <button type="button" class="btn btn-danger">
    <svg width="1.125rem" height="1.125rem" class="mt-n1 me-1">
      <use xlink:href="${iconSprite}#tabler-trash" />
    </svg>Delete
  </button>
  <button type="button" class="btn btn-danger" disabled>
    <svg width="1.125rem" height="1.125rem" class="mt-n1 me-1">
      <use xlink:href="${iconSprite}#tabler-trash" />
    </svg>Delete
  </button>
  <br><br>
  <h3>Other - Small</h3>
  <button type="button" class="btn btn-sm btn-danger">Leave</button>
  <button type="button" class="btn btn-sm btn-danger" disabled>Leave</button>
  <button type="button" class="btn btn-sm btn-danger">Delete</button>
  <button type="button" class="btn btn-sm btn-danger" disabled>Delete</button>
</div>
`

export const Other = () => otherHTML

Other.storyName = 'Other'

Other.parameters = {
  notes: `
    # Other Buttons

    ## Documentation
    
    Here are some notes on alt primary buttons. 
    
    ## Code Sample
    
    \`\`\`html
    ${altPrimaryHTML}
    \`\`\`
    
    ${buttonNotes}
    
    `
}

const groupHTML = `
<div>
  <h3>Basic</h3>
  <div class="btn-group" role="group" aria-label="Basic example">
    <button type="button" class="btn btn-outline-primary">Action1</button>
    <button type="button" class="btn btn-outline-primary">Action2</button>
    <button type="button" class="btn btn-outline-primary btn-more" aria-label="More Actions">
      <svg width="1.125rem" height="1.125rem" class="m-0">
        <use xlink:href="${iconSprite}#tabler-dots" />
      </svg>
    </button>
  </div>
  <br><br>
  <h3>Usage</h3>
  <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
    <button type="button" class="btn btn-primary me-2">Process Incident</button>
    <div class="btn-group" role="group" aria-label="Usage example">
      <button type="button" class="btn btn-outline-primary">Edit</button>
      <button type="button" class="btn btn-outline-primary">Forward</button>
      <button type="button" class="btn btn-outline-primary btn-more" aria-label="More Actions">
      <svg width="1.125rem" height="1.125rem" class="m-0">
        <use xlink:href="${iconSprite}#tabler-dots" />
      </svg>
      </button>
    </div>
  </div>
  <br>
  <h3>Sizing</h3>
  <div class="btn-group btn-group-lg" role="group" aria-label="Sizing example">
    <button type="button" class="btn btn-outline-primary">Left</button>
    <button type="button" class="btn btn-outline-primary">Middle</button>
    <button type="button" class="btn btn-outline-primary">Right</button>
  </div>
  <br><br>
  <div class="btn-group" role="group" aria-label="Sizing example">
    <button type="button" class="btn btn-outline-primary">Left</button>
    <button type="button" class="btn btn-outline-primary">Middle</button>
    <button type="button" class="btn btn-outline-primary">Right</button>
  </div>
  <br><br>
  <div class="btn-group btn-group-sm" role="group" aria-label="Sizing example">
    <button type="button" class="btn btn-outline-primary">Left</button>
    <button type="button" class="btn btn-outline-primary">Middle</button>
    <button type="button" class="btn btn-outline-primary">Right</button>
  </div>
</div>
`

export const Group = () => groupHTML

Group.storyName = 'Group'

Group.parameters = {
  notes: `
    # Other Buttons

    ## Documentation
    
    Here are some notes on alt primary buttons. 
    
    ## Code Sample
    
    \`\`\`html
    ${groupHTML}
    \`\`\`
    
    ${buttonNotes}
    
    `
}

const actionHTML = `
<div>
  <h3>Icon with Text</h3>
  <div class="d-flex flex-row">
    <div class="p-2">
      <button type="button" class="btn btn-action rounded-pill">
        <svg class="icon-lg-font-size mt-n1">
          <use xlink:href="${iconSprite}#tabler-thumb-down" />
        </svg>
        Dislike
      </button>
      <br><br>
      <button type="button" class="btn btn-action rounded-pill active">
        <svg class="icon-lg-font-size mt-n1">
          <use xlink:href="${iconSprite}#tabler-thumb-down" />
        </svg>
        Dislike
      </button>
    </div>
    <div class="p-2">
      <button type="button" class="btn btn-action text-primary rounded-pill">
        <svg class="icon-lg-font-size mt-n1">
          <use xlink:href="${iconSprite}#tabler-thumb-down" />
        </svg>
        Dislike
      </button>
      <br><br>
      <button type="button" class="btn btn-action text-primary rounded-pill active">
        <svg class="icon-lg-font-size mt-n1">
          <use xlink:href="${iconSprite}#tabler-thumb-down" />
        </svg>
        Dislike
      </button>
    </div>
  </div>
  <br><br>
  <h3>Text only</h3>
  <div class="d-flex flex-row">
    <div class="p-2">
      <button type="button" class="btn btn-action text-primary rounded-pill">
        Edit 
      </button>
      <br><br>
      <button type="button" class="btn btn-action text-primary rounded-pill active">
        Edit 
      </button>
    </div>
  </div>
  <br><br>
  <h3>Icon only</h3>
  <div class="d-flex flex-row">
    <div class="p-2">
      <button type="button" class="btn btn-action btn-action-icon-only rounded-circle">
        <svg class="icon-lg-font-size mt-n1">
          <use xlink:href="${iconSprite}#tabler-thumb-down" />
          <span class="visually-hidden">Thumbs Down</span>
        </svg>
      </button>
      <br><br>
      <button type="button" class="btn btn-action btn-action-icon-only rounded-circle active">
        <svg class="icon-lg-font-size mt-n1">
          <use xlink:href="${iconSprite}#tabler-thumb-down" />
          <span class="visually-hidden">Thumbs Down</span>
        </svg>
      </button>
    </div>
    <div class="p-2">
      <button type="button" class="btn btn-action btn-action-icon-only text-primary rounded-circle">
        <svg class="icon-lg-font-size mt-n1">
          <use xlink:href="${iconSprite}#tabler-thumb-down" />
          <span class="visually-hidden">Thumbs Down</span>
        </svg>
      </button>
      <br><br>
      <button type="button" class="btn btn-action btn-action-icon-only text-primary rounded-circle active">
        <svg class="icon-lg-font-size mt-n1">
          <use xlink:href="${iconSprite}#tabler-thumb-down" />
          <span class="visually-hidden">Thumbs Down</span>
        </svg>
      </button>
    </div>
  </div>
  <br><br>
  <h3>Outline Icon only</h3>
  <div class="d-flex flex-row">
    <div class="p-2">
      <button type="button" class="btn btn-action btn-action-icon-only rounded-circle border-light">
        <svg class="icon-lg-font-size mt-n1">
          <use xlink:href="${iconSprite}#tabler-chevron-left" />
          <span class="visually-hidden">Previous</span>
        </svg>
      </button>
    </div>
    <div class="p-2">
      <button type="button" class="btn btn-action btn-action-icon-only rounded-circle border-light">
        <svg class="icon-lg-font-size mt-n1">
          <use xlink:href="${iconSprite}#tabler-chevron-right" />
          <span class="visually-hidden">Next</span>
        </svg>
      </button>
    </div>
  </div>
</div>
`

export const Action = () => actionHTML

Action.storyName = 'Action'

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

const toggleButtonHTML = `
<div>
  <h3>Toggle (Button)</h3>
  <div class="d-flex flex-row">
    <div class="p-2">
      <button class="btn">
        <svg class="icon-lg-font-size mt-n1">
          <use xlink:href="${iconSprite}#tabler-star" />
          <span class="visually-hidden">Favorite</span>
        </svg>
      </button>
      <br><br>
      <button class="btn">
        <svg class="icon-lg-font-size mt-n1 text-warning">
          <use xlink:href="${iconSprite}#tabler-zz-star-on" />
          <span class="visually-hidden">Favorite</span>
        </svg>
      </button>
    </div>
    <div class="p-2">
      <button class="btn">
        <svg class="icon-lg-font-size mt-n1">
          <use xlink:href="${iconSprite}#tabler-star" />
        </svg>
        <span>Favorite</span>
      </button>
      <br><br>
      <button class="btn">
        <svg class="icon-lg-font-size mt-n1 text-warning">
          <use xlink:href="${iconSprite}#tabler-zz-star-on" />
        </svg>
        <span class="text-warning">Favorited</span>
      </button>
    </div>
  </div>
  <br><br>
  <div class="d-flex flex-row">
    <div class="p-2">
      <button class="btn btn-action btn-action-toggle rounded-pill" for="btn-check-outlined5">
        <svg class="icon-lg-font-size mt-n1">
          <use xlink:href="${iconSprite}#tabler-plus" />
        </svg>
        <span class="visually-hidden">Favorited</span>
      </button>
      <br><br>
      <button class="btn btn-action btn-action-toggle rounded-pill active" for="btn-check-outlined6">
        <svg class="icon-lg-font-size mt-n1">
          <use xlink:href="${iconSprite}#tabler-check" />
        </svg>
        <span class="visually-hidden">OK</span>
      </button>
    </div>
    <div class="p-2">
      <button class="btn btn-action btn-action-toggle rounded-pill" for="btn-check-outlined7">
        Add
      </button>
      <br><br>
      <button class="btn btn-action btn-action-toggle rounded-pill active" for="btn-check-outlined8">
        Added
      </button>
    </div>
    <div class="p-2">
      <button class="btn btn-action btn-action-toggle rounded-pill" for="btn-check-outlined9">
        xxx
      </button>
      <br><br>
      <button class="btn btn-action btn-action-toggle rounded-pill active" for="btn-check-outlined10">
        xxxx
      </button>
    </div>
  </div>
</div>
`

export const ToggleButton = () => toggleButtonHTML

ToggleButton.storyName = 'Toggle (Button)'

ToggleButton.parameters = {
  notes: `
    # Toggle (Button)

    ## Documentation
    
    Here are some notes on toggle buttons. 
    
    ## Code Sample
    
    \`\`\`html
    ${toggleButtonHTML}
    \`\`\`
    
    ${buttonNotes}
    
    `
}

const toggleCheckboxHTML = `
<div>
  <h3>Toggle (Checkbox)</h3>
  <div class="d-flex flex-row">
    <div class="p-2">
      <input type="checkbox" class="btn-check" id="btn-check-outlined1" autocomplete="off">
      <label class="btn btn-action-toggle" for="btn-check-outlined1">
        <svg class="icon-lg-font-size mt-n1">
          <use xlink:href="${iconSprite}#tabler-star" />
          <span class="visually-hidden">Favorite</span>
        </svg>
      </label>
      <br><br>
      <input type="checkbox" class="btn-check" id="btn-check-outlined2" checked autocomplete="off">
      <label class="btn btn-action-toggle" for="btn-check-outlined2">
        <svg class="icon-lg-font-size mt-n1 text-warning">
          <use xlink:href="${iconSprite}#tabler-zz-star-on" />
          <span class="visually-hidden">Favorite</span>
        </svg>
      </label>
    </div>
    <div class="p-2">
      <input type="checkbox" class="btn-check" id="btn-check-outlined3" autocomplete="off">
      <label class="btn btn-action-toggle" for="btn-check-outlined3">
        <svg class="icon-lg-font-size mt-n1">
          <use xlink:href="${iconSprite}#tabler-star" />
        </svg>
        <span>Favorite</span>
      </label>
      <br><br>
      <input type="checkbox" class="btn-check" id="btn-check-outlined4" checked autocomplete="off">
      <label class="btn btn-action-toggle" for="btn-check-outlined4">
        <svg class="icon-lg-font-size mt-n1 text-warning">
          <use xlink:href="${iconSprite}#tabler-zz-star-on" />
        </svg>
        <span class="text-warning">Favorited</span>
      </label>
    </div>
  </div>
  <br><br>
  <div class="d-flex flex-row">
    <div class="p-2">
      <input type="checkbox" class="btn-check" id="btn-check-outlined5" autocomplete="off">
      <label class="btn btn-action btn-action-toggle rounded-pill" for="btn-check-outlined5">
        <svg class="icon-lg-font-size mt-n1">
          <use xlink:href="${iconSprite}#tabler-plus" />
        </svg>
        <span class="visually-hidden">Favorited</span>
      </label>
      <br><br>
      <input type="checkbox" class="btn-check" id="btn-check-outlined6" checked autocomplete="off">
      <label class="btn btn-action btn-action-toggle rounded-pill active" for="btn-check-outlined6">
        <svg class="icon-lg-font-size mt-n1">
          <use xlink:href="${iconSprite}#tabler-check" />
        </svg>
        <span class="visually-hidden">OK</span>
      </label>
    </div>
    <div class="p-2">
      <input type="checkbox" class="btn-check" id="btn-check-outlined7" autocomplete="off">
      <label class="btn btn-action btn-action-toggle rounded-pill" for="btn-check-outlined7">
        Add
      </label>
      <br><br>
      <input type="checkbox" class="btn-check" id="btn-check-outlined8" checked autocomplete="off">
      <label class="btn btn-action btn-action-toggle rounded-pill active" for="btn-check-outlined8">
        Added
      </label>
    </div>
    <div class="p-2">
      <input type="checkbox" class="btn-check" id="btn-check-outlined9" autocomplete="off">
      <label class="btn btn-action btn-action-toggle rounded-pill" for="btn-check-outlined9">
        xxx
      </label>
      <br><br>
      <input type="checkbox" class="btn-check" id="btn-check-outlined10" checked autocomplete="off">
      <label class="btn btn-action btn-action-toggle rounded-pill active" for="btn-check-outlined10">
        xxxx
      </label>
    </div>
  </div>
</div>
`

export const ToggleCheckbox = () => toggleCheckboxHTML

ToggleCheckbox.storyName = 'Toggle (Checkbox)'

ToggleCheckbox.parameters = {
  notes: `
    # Toggle (Checkbox)

    ## Documentation
    
    Here are some notes on toggle checkboxes. 
    
    ## Code Sample
    
    \`\`\`html
    ${toggleCheckboxHTML}
    \`\`\`
    
    ${buttonNotes}
    
    `
}

const extendedHTML = `
<div>
  <ul class="d-flex flex-row list-unstyled">
    <li class="p-2">
      <a href="#" role="button" class="text-dark h6">
        <svg class="icon-lg-font-size mt-n1">
          <use xlink:href="${iconSprite}#tabler-file-search" />
        </svg>
        <span><strong>Subject:</strong> Fname Lname (1234567890)</span>
      </a>
    </li>
  </ul>
  <div class="p-2">
    <label for="exampleFormControlInput1" class="form-label h6">Lookup Field</label>
    <div class="input-group">
      <input class="form-control border-end-0" id="exampleFormControlInput1">
      <span class="input-group-text bg-white border-start-0">
        <svg class="icon-lg-font-size">
          <use xlink:href="${iconSprite}#tabler-search" />
        </svg>
      </span>
    </div>
  </div>
</div>
`

export const Extended = () => extendedHTML

Extended.storyName = 'Extended Icon Actions'

Extended.parameters = {
  notes: `
    # Extended Icon Actions

    ## Documentation
    
    Here are some notes on extended icon actions. 
    
    ## Code Sample
    
    \`\`\`html
    ${extendedHTML}
    \`\`\`
    
    ${buttonNotes}
    
    `
}

const filterChipHTML = `
<div>
  <h3>Filter Chip</h3>
  <button class="btn text-white d-inline-flex badge bg-primary minw-0">
        Engineering
        <span class="d-flex align-items-center btn-close btn-close-white ms-2 me-0 p-0"></span>
  </button>
</div>
`

export const FilterChip = () => filterChipHTML

FilterChip.storyName = 'Filter Chip'

FilterChip.parameters = {
  notes: `
    # Filter Chip

    ## Documentation
    
    Here are some notes on filter chips. 
    
    ## Code Sample
    
    \`\`\`html
    ${filterChipHTML}
    \`\`\`
    
    `
}

const fileWithActionsHTML = `
<div>
  <div class="rounded bg-light d-inline-flex align-items-center">
    <button type="button" class="btn bg-light d-flex align-items-center fw-normal" aria-label="Download Filename.pdf">
      <svg class="icon-base-font-size me-2">
        <use xlink:href="${iconSprite}#tabler-file" />
      </svg>
      Filename.pdf
    </button>
    <div class="dropdown">
      <button type="button" class="btn text-reset p-2 minw-0" href="#" title="Actions for Damian Wayne" aria-label="Actions for Filename.pdf" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
        <svg class="icon-lg-font-size mt-n1">
          <use xlink:href="${iconSprite}#tabler-dots" />
        </svg>
      </button>
      <ul class="dropdown-menu shadow-sm" aria-labelledby="dropdownMenuLink">
        <li><a class="dropdown-item" href="#">Download</a></li>
        <li><a class="dropdown-item" href="#">Remove</a></li>
      </ul>
    </div>
  </div>
</div>

`

export const FileWithActions = () => fileWithActionsHTML

FileWithActions.storyName = 'File with Actions'

FileWithActions.parameters = {
  notes: `
    # File With Actions

    ## Documentation
    
    Here are some notes on file with actions button variant. 
    
    ## Code Sample
    
    \`\`\`html
    ${fileWithActionsHTML}
    \`\`\`
    
    `
}
