import buttonNotes from './button.notes.md';
import buttonIconNotes from './button.icon.notes.md';
import buttonOutlineNotes from './button.outline.notes.md';

import iconSprite from '../node_modules/@tabler/icons/tabler-sprite.svg';

export default {
  title: 'Components/Buttons',
  parameters: {
    options: {
      selectedPanel: 'storybook/a11y/panel'
    }
  }
};

const primaryHTML = ` 
  <h3>Primary - Large</h3>
  <button type="button" class="btn btn-lg btn-primary">Primary</button>
  <button type="button" class="btn btn-lg btn-primary" disabled>Primary</button>
  <button type="button" class="btn btn-lg btn-primary">
    <svg width="1.25rem" height="1.25rem" class="mt-n1 mr-2">
      <use xlink:href="${iconSprite}#tabler-star" />
    </svg>Primary
  </button>
  <button type="button" class="btn btn-lg btn-primary" disabled>
    <svg width="1.25rem" height="1.25rem" class="mt-n1 mr-2">
      <use xlink:href="${iconSprite}#tabler-star" />
    </svg>Primary
  </button>
  <br><br>
  <h3>Primary - Regular</h3>
  <button type="button" class="btn btn-primary">Primary</button>
  <button type="button" class="btn btn-primary" disabled>Primary</button>
  <button type="button" class="btn btn-primary">
    <svg width="1rem" height="1rem" class="mt-n1 mr-1">
      <use xlink:href="${iconSprite}#tabler-star" />
    </svg>Primary
  Primary</button>
  <button type="button" class="btn btn-primary" disabled>
    <svg width="1rem" height="1rem" class="mt-n1 mr-1">
      <use xlink:href="${iconSprite}#tabler-star" />
    </svg>Primary
  </button>
  <br><br>
  <h3>Primary - Small</h3>
  <button type="button" class="btn btn-sm btn-primary">Primary</button>
  <button type="button" class="btn btn-sm btn-primary" disabled>Primary</button>
  <button type="button" class="btn btn-sm btn-primary">Primary</button>
  <button type="button" class="btn btn-sm btn-primary" disabled>Primary</button>
`;

export const Primary = () => primaryHTML;

Primary.storyName = 'Primary';

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
};

const altPrimaryHTML = `
<h3>Alt Primary - Large</h3>
<button type="button" class="btn btn-lg btn-outline-primary">Alt Primary</button>
<button type="button" class="btn btn-lg btn-outline-primary" disabled>Alt Primary</button>
<button type="button" class="btn btn-lg btn-outline-primary">
  <svg width="1.25rem" height="1.25rem" class="mt-n1 mr-2">
    <use xlink:href="${iconSprite}#tabler-star" />
  </svg>Alt Primary
</button>
</button>
<button type="button" class="btn btn-lg btn-outline-primary" disabled>
  <svg width="1.25rem" height="1.25rem" class="mt-n1 mr-2">
    <use xlink:href="${iconSprite}#tabler-star" />
  </svg>Alt Primary
</button>
<br><br>
<h3>Alt Primary - Regular</h3>
<button type="button" class="btn btn-outline-primary">Alt Primary</button>
<button type="button" class="btn btn-outline-primary" disabled>Alt Primary</button>
<button type="button" class="btn btn-outline-primary">
  <svg width="1rem" height="1rem" class="mt-n1 mr-1">
    <use xlink:href="${iconSprite}#tabler-star" />
  </svg>Alt Primary
</button>
<button type="button" class="btn btn-outline-primary" disabled>
  <svg width="1rem" height="1rem" class="mt-n1 mr-1">
    <use xlink:href="${iconSprite}#tabler-star" />
  </svg>Alt Primary
</button>
<br><br>
<h3>Alt Primary - Small</h3>
<button type="button" class="btn btn-sm btn-outline-primary">Alt Primary</button>
<button type="button" class="btn btn-sm btn-outline-primary" disabled>Alt Primary</button>
<button type="button" class="btn btn-sm btn-outline-primary">Alt Primary</button>
<button type="button" class="btn btn-sm btn-outline-primary" disabled>Alt Primary</button>
`;

export const AltPrimary = () => altPrimaryHTML;

AltPrimary.storyName = 'Alt Primary (Outline)';

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
};

const secondaryHTML = `
<h3>Secondary - Large</h3>
<button type="button" class="btn btn-lg btn-outline-secondary">Secondary</button>
<button type="button" class="btn btn-lg btn-outline-secondary" disabled>Secondary</button>
<button type="button" class="btn btn-lg btn-outline-secondary">
  <svg width="1.25rem" height="1.25rem" class="mt-n1 mr-2">
    <use xlink:href="${iconSprite}#tabler-star" />
  </svg>Secondary
</button>
<button type="button" class="btn btn-lg btn-outline-secondary" disabled>
  <svg width="1.25rem" height="1.25rem" class="mt-n1 mr-2">
    <use xlink:href="${iconSprite}#tabler-star" />
  </svg>Secondary
</button>
<br><br>
<h3>Secondary - Regular</h3>
<button type="button" class="btn btn-outline-secondary">Secondary</button>
<button type="button" class="btn btn-outline-secondary" disabled>Secondary</button>
<button type="button" class="btn btn-outline-secondary">
  <svg width="1rem" height="1rem" class="mt-n1 mr-1">
    <use xlink:href="${iconSprite}#tabler-star" />
  </svg>Secondary
</button>
<button type="button" class="btn btn-outline-secondary" disabled>
  <svg width="1rem" height="1rem" class="mt-n1 mr-1">
    <use xlink:href="${iconSprite}#tabler-star" />
  </svg>Secondary
</button>
<br><br>
<h3>Secondary - Small</h3>
<button type="button" class="btn btn-sm btn-outline-secondary">Secondary</button>
<button type="button" class="btn btn-sm btn-outline-secondary" disabled>Secondary</button>
<button type="button" class="btn btn-sm btn-outline-secondary">Secondary</button>
<button type="button" class="btn btn-sm btn-outline-secondary" disabled>Secondary</button>
`;

export const Secondary = () => secondaryHTML;

Secondary.storyName = 'Secondary (Outline)';

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
};

const otherHTML = `
<h3>Other - Large</h3>
<button type="button" class="btn btn-lg btn-danger">Leave</button>
<button type="button" class="btn btn-lg btn-danger" disabled>Leave</button>
<button type="button" class="btn btn-lg btn-danger">
  <svg width="1.25rem" height="1.25rem" class="mt-n1 mr-2">
    <use xlink:href="${iconSprite}#tabler-trash" />
  </svg>Delete
</button>
<button type="button" class="btn btn-lg btn-danger" disabled>
  <svg width="1.25rem" height="1.25rem" class="mt-n1 mr-2">
    <use xlink:href="${iconSprite}#tabler-trash" />
  </svg>Delete
</button>
<br><br>
<h3>Other - Regular</h3>
<button type="button" class="btn btn-danger">Leave</button>
<button type="button" class="btn btn-danger" disabled>Leave</button>
<button type="button" class="btn btn-danger">
  <svg width="1rem" height="1rem" class="mt-n1 mr-1">
    <use xlink:href="${iconSprite}#tabler-trash" />
  </svg>Delete
</button>
<button type="button" class="btn btn-danger" disabled>
  <svg width="1rem" height="1rem" class="mt-n1 mr-1">
    <use xlink:href="${iconSprite}#tabler-trash" />
  </svg>Delete
</button>
<br><br>
<h3>Other - Small</h3>
<button type="button" class="btn btn-sm btn-danger">Leave</button>
<button type="button" class="btn btn-sm btn-danger" disabled>Leave</button>
<button type="button" class="btn btn-sm btn-danger">Delete</button>
<button type="button" class="btn btn-sm btn-danger" disabled>Delete</button>
`;

export const Other = () => otherHTML;

Other.storyName = 'Other';

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
};


const groupHTML = `
<h3>Basic</h3>
<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-outline-primary">Action1</button>
  <button type="button" class="btn btn-outline-primary">Action2</button>
  <button type="button" class="btn btn-outline-primary pt-0 pb-0" aria-label="More Actions">
    <svg width="1.125rem" height="1.125rem" class="m-0">
      <use xlink:href="${iconSprite}#tabler-dots" />
    </svg>
  </button>
</div>
<br><br>
<h3>Usage</h3>
<div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
  <button type="button" class="btn btn-primary mr-2">Process Incident</button>
  <div class="btn-group" role="group" aria-label="Usage example">
    <button type="button" class="btn btn-outline-primary">Edit</button>
    <button type="button" class="btn btn-outline-primary">Forward</button>
    <button type="button" class="btn btn-outline-primary pt-0 pb-0" aria-label="More Actions">
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
<br>
`;

export const Group = () => groupHTML;

Group.storyName = 'Group';

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
};


const iconHTML = `
<h3>Icon with Text</h3>
<div class="d-flex flex-row">
  <div class="p-2">
    <button type="button" class="btn btn-icon-with-text">
      <svg class="icon-lg-font-size mt-n1">
        <use xlink:href="${iconSprite}#tabler-thumb-down" />
      </svg>
      Dislike
    </button>
    <br><br>
    <button type="button" class="btn btn-icon-with-text active">
      <svg class="icon-lg-font-size mt-n1">
        <use xlink:href="${iconSprite}#tabler-thumb-down" />
      </svg>
      Dislike
    </button>
  </div>
  <div class="p-2">
    <button type="button" class="btn btn-icon-with-text text-primary">
      <svg class="icon-lg-font-size mt-n1">
        <use xlink:href="${iconSprite}#tabler-thumb-down" />
      </svg>
      Dislike
    </button>
    <br><br>
    <button type="button" class="btn btn-icon-with-text text-primary active">
      <svg class="icon-lg-font-size mt-n1">
        <use xlink:href="${iconSprite}#tabler-thumb-down" />
      </svg>
      Dislike
    </button>
  </div>
</div>
`;

export const Icon = () => iconHTML;

Icon.storyName = 'Icon';

Icon.parameters = {
  notes: `
    # Icon Buttons

    ## Documentation
    
    Here are some notes on icon buttons. 
    
    ## Code Sample
    
    \`\`\`html
    ${iconHTML}
    \`\`\`
    
    ${buttonNotes}
    
    ` 
};
