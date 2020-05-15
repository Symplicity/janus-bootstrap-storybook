import { withA11y } from '@storybook/addon-a11y';
import { withActions } from '@storybook/addon-actions';

import buttonNotes from './button.notes.md';
import buttonIconNotes from './button.icon.notes.md';
import buttonOutlineNotes from './button.outline.notes.md';

export default {
  title: 'Components|Button',
  decorators: [withA11y],
  parameters: {
    options: {
      selectedPanel: 'storybook/a11y/panel',
    },
  },
};

// Here is how you use the Actions addon. The click events will be recorded in the Actions tab, like a console/logger.
// Basically, you need to call withAction('eventname')(someStoryFunction), where someStoryFunction is a function that returns an HTML node or snippet.
//const buttonWithAction = () => withActions('click')(() => `<button type="button" class="btn btn-primary">Action Button</button>`);

const primaryHTML = () => withActions('click', 'mouseover')(() => `
<h3>Primary - Large</h3>
<button type="button" class="btn btn-lg btn-primary">Primary</button>
<button type="button" class="btn btn-lg btn-primary" disabled>Primary</button>
<button type="button" class="btn btn-lg btn-primary"><i class="icn-star mr-2"></i>Primary</button>
<button type="button" class="btn btn-lg btn-primary" disabled><i class="icn-star mr-2"></i>Primary</button>
<br><br>
<h3>Primary - Regular</h3>
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-primary" disabled>Primary</button>
<button type="button" class="btn btn-primary"><i class="icn-star mr-2"></i>Primary</button>
<button type="button" class="btn btn-primary" disabled><i class="icn-star mr-2"></i>Primary</button>
<br><br>
<h3>Primary - Small</h3>
<button type="button" class="btn btn-sm btn-primary">Primary</button>
<button type="button" class="btn btn-sm btn-primary" disabled>Primary</button>
<button type="button" class="btn btn-sm btn-primary"><i class="icn-star mr-2"></i>Primary</button>
<button type="button" class="btn btn-sm btn-primary" disabled><i class="icn-star mr-2"></i>Primary</button>
`
);

export const Primary = () => primaryHTML();

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

const altPrimaryHTML = () => withActions('click', 'mouseover')(() => `
<h3>Alt Primary - Large</h3>
<button type="button" class="btn btn-lg btn-outline-primary">Alt Primary</button>
<button type="button" class="btn btn-lg btn-outline-primary" disabled>Alt Primary</button>
<button type="button" class="btn btn-lg btn-outline-primary"><i class="icn-star mr-2"></i>Alt Primary</button>
<button type="button" class="btn btn-lg btn-outline-primary" disabled><i class="icn-star mr-2"></i>Alt Primary</button>
<br><br>
<h3>Alt Primary - Regular</h3>
<button type="button" class="btn btn-outline-primary">Alt Primary</button>
<button type="button" class="btn btn-outline-primary" disabled>Alt Primary</button>
<button type="button" class="btn btn-outline-primary"><i class="icn-star mr-2"></i>Alt Primary</button>
<button type="button" class="btn btn-outline-primary" disabled><i class="icn-star mr-2"></i>Alt Primary</button>
<br><br>
<h3>Alt Primary - Small</h3>
<button type="button" class="btn btn-sm btn-outline-primary">Alt Primary</button>
<button type="button" class="btn btn-sm btn-outline-primary" disabled>Alt Primary</button>
<button type="button" class="btn btn-sm btn-outline-primary"><i class="icn-star mr-2"></i>Alt Primary</button>
<button type="button" class="btn btn-sm btn-outline-primary" disabled><i class="icn-star mr-2"></i>Alt Primary</button>
`
);

export const AltPrimary = () => altPrimaryHTML();

AltPrimary.story = {
  name: 'Alt Primary',
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

const secondaryHTML = () => withActions('click', 'mouseover')(() => `
<h3>Secondary - Large</h3>
<button type="button" class="btn btn-lg btn-outline-secondary">Secondary</button>
<button type="button" class="btn btn-lg btn-outline-secondary" disabled>Secondary</button>
<button type="button" class="btn btn-lg btn-outline-secondary"><i class="icn-star mr-2"></i>Secondary</button>
<button type="button" class="btn btn-lg btn-outline-secondary" disabled><i class="icn-star mr-2"></i>Secondary</button>
<br><br>
<h3>Secondary - Regular</h3>
<button type="button" class="btn btn-outline-secondary">Secondary</button>
<button type="button" class="btn btn-outline-secondary" disabled>Secondary</button>
<button type="button" class="btn btn-outline-secondary"><i class="icn-star mr-2"></i>Secondary</button>
<button type="button" class="btn btn-outline-secondary" disabled><i class="icn-star mr-2"></i>Secondary</button>
<br><br>
<h3>Secondary - Small</h3>
<button type="button" class="btn btn-sm btn-outline-secondary">Secondary</button>
<button type="button" class="btn btn-sm btn-outline-secondary" disabled>Secondary</button>
<button type="button" class="btn btn-sm btn-outline-secondary"><i class="icn-star mr-2"></i>Secondary</button>
<button type="button" class="btn btn-sm btn-outline-secondary" disabled><i class="icn-star mr-2"></i>Secondary</button>
`
);

export const Secondary = () => secondaryHTML();

Secondary.story = {
  name: 'Secondary',
  parameters: {
    notes: `
      # Secondary Buttons

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
