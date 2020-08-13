import buttonNotes from './button.notes.md';
import buttonIconNotes from './button.icon.notes.md';
import buttonOutlineNotes from './button.outline.notes.md';

export default {
  title: 'Components/Button',
  parameters: {
    options: {
      selectedPanel: 'storybook/a11y/panel'
    }
  }
};

// Here is how you use the Actions addon. The click events will be recorded in the Actions tab, like a console/logger.
// Basically, you need to call withAction('eventname')(someStoryFunction), where someStoryFunction is a function that returns an HTML node or snippet.
//const buttonWithAction = () => withActions('click')(() => `<button type="button" class="btn btn-primary">Action Button</button>`);

const primaryHTML = ` 
<h3>Primary - Large</h3>
<button type="button" class="btn btn-lg btn-primary">Primary</button>
<button type="button" class="btn btn-lg btn-primary" disabled>Primary</button>
<button type="button" class="btn btn-lg btn-primary"><i class="icn-star mr-2"></i>Primary</button>
<button type="button" class="btn btn-lg btn-primary" disabled><i class="icn-star mr-2"></i>Primary</button>
<br><br>
<h3>Primary - Regular</h3>
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-primary" disabled>Primary</button>
<button type="button" class="btn btn-primary"><i class="icn-star mr-1"></i>Primary</button>
<button type="button" class="btn btn-primary" disabled><i class="icn-star mr-1"></i>Primary</button>
<br><br>
<h3>Primary - Small</h3>
<button type="button" class="btn btn-sm btn-primary">Primary</button>
<button type="button" class="btn btn-sm btn-primary" disabled>Primary</button>
<button type="button" class="btn btn-sm btn-primary">Primary</button>
<button type="button" class="btn btn-sm btn-primary" disabled>Primary</button>
`;

export const Primary = () => primaryHTML;

Primary.story = {
  name: 'Primary',
  parameters: {
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
};

const altPrimaryHTML = `
<h3>Alt Primary - Large</h3>
<button type="button" class="btn btn-lg btn-outline-primary">Alt Primary</button>
<button type="button" class="btn btn-lg btn-outline-primary" disabled>Alt Primary</button>
<button type="button" class="btn btn-lg btn-outline-primary"><i class="icn-star mr-2"></i>Alt Primary</button>
<button type="button" class="btn btn-lg btn-outline-primary" disabled><i class="icn-star mr-2"></i>Alt Primary</button>
<br><br>
<h3>Alt Primary - Regular</h3>
<button type="button" class="btn btn-outline-primary">Alt Primary</button>
<button type="button" class="btn btn-outline-primary" disabled>Alt Primary</button>
<button type="button" class="btn btn-outline-primary"><i class="icn-star mr-1"></i>Alt Primary</button>
<button type="button" class="btn btn-outline-primary" disabled><i class="icn-star mr-1"></i>Alt Primary</button>
<br><br>
<h3>Alt Primary - Small</h3>
<button type="button" class="btn btn-sm btn-outline-primary">Alt Primary</button>
<button type="button" class="btn btn-sm btn-outline-primary" disabled>Alt Primary</button>
<button type="button" class="btn btn-sm btn-outline-primary">Alt Primary</button>
<button type="button" class="btn btn-sm btn-outline-primary" disabled>Alt Primary</button>
`;

export const AltPrimary = () => altPrimaryHTML;

AltPrimary.story = {
  name: 'Alt Primary (Outline)',
  parameters: {
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
};

const secondaryHTML = `
<h3>Secondary - Large</h3>
<button type="button" class="btn btn-lg btn-outline-secondary">Secondary</button>
<button type="button" class="btn btn-lg btn-outline-secondary" disabled>Secondary</button>
<button type="button" class="btn btn-lg btn-outline-secondary"><i class="icn-star mr-2"></i>Secondary</button>
<button type="button" class="btn btn-lg btn-outline-secondary" disabled><i class="icn-star mr-2"></i>Secondary</button>
<br><br>
<h3>Secondary - Regular</h3>
<button type="button" class="btn btn-outline-secondary">Secondary</button>
<button type="button" class="btn btn-outline-secondary" disabled>Secondary</button>
<button type="button" class="btn btn-outline-secondary"><i class="icn-star mr-1"></i>Secondary</button>
<button type="button" class="btn btn-outline-secondary" disabled><i class="icn-star mr-1"></i>Secondary</button>
<br><br>
<h3>Secondary - Small</h3>
<button type="button" class="btn btn-sm btn-outline-secondary">Secondary</button>
<button type="button" class="btn btn-sm btn-outline-secondary" disabled>Secondary</button>
<button type="button" class="btn btn-sm btn-outline-secondary">Secondary</button>
<button type="button" class="btn btn-sm btn-outline-secondary" disabled>Secondary</button>
`;

export const Secondary = () => secondaryHTML;

Secondary.story = {
  name: 'Secondary (Outline)',
  parameters: {
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
};

const otherHTML = `
<h3>Other - Large</h3>
<button type="button" class="btn btn-lg btn-danger">Leave</button>
<button type="button" class="btn btn-lg btn-danger" disabled>Leave</button>
<button type="button" class="btn btn-lg btn-danger"><i class="icn-delete mr-2"></i>Delete</button>
<button type="button" class="btn btn-lg btn-danger" disabled><i class="icn-delete mr-2"></i>Delete</button>
<br><br>
<h3>Other - Regular</h3>
<button type="button" class="btn btn-danger">Leave</button>
<button type="button" class="btn btn-danger" disabled>Leave</button>
<button type="button" class="btn btn-danger"><i class="icn-delete mr-2"></i>Delete</button>
<button type="button" class="btn btn-danger" disabled><i class="icn-delete mr-2"></i>Delete</button>
<br><br>
<h3>Other - Small</h3>
<button type="button" class="btn btn-sm btn-danger">Leave</button>
<button type="button" class="btn btn-sm btn-danger" disabled>Leave</button>
<button type="button" class="btn btn-sm btn-danger">Delete</button>
<button type="button" class="btn btn-sm btn-danger" disabled>Delete</button>
`;

export const Other = () => otherHTML;

Other.story = {
  name: 'Other',
  parameters: {
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
};


const groupHTML = `
<h3>Basic</h3>
<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-outline-primary">Action1</button>
  <button type="button" class="btn btn-outline-primary">Action2</button>
  <button type="button" class="btn btn-outline-primary pt-0 pb-0" aria-label="More Actions"><i class="icn icn-more_horizontal h2 m-0"></i></button>
</div>
<br><br>
<h3>Usage</h3>
<div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
  <button type="button" class="btn btn-primary mr-2">Process Incident</button>
  <div class="btn-group" role="group" aria-label="Usage example">
    <button type="button" class="btn btn-outline-primary">Edit</button>
    <button type="button" class="btn btn-outline-primary">Forward</button>
    <button type="button" class="btn btn-outline-primary pt-0 pb-0" aria-label="More Actions"><i class="icn icn-more_horizontal h2 m-0"></i></button>
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

Group.story = {
  name: 'Group',
  parameters: {
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
};
