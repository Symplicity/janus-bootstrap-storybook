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

const basicHTML = () => withActions('click', 'mouseover')(() => `
<button type="button" class="btn btn-primary btn-lg">Primary</button>
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-primary btn-sm">Primary</button>
<br/><br/>
<button type="button" class="btn btn-secondary btn-lg">Default Secondary State</button>
<button type="button" class="btn btn-secondary">Default Secondary State</button>
<button type="button" class="btn btn-secondary btn-sm">Default Secondary State</button>
<br/><br/>
<button type="button" class="btn btn-alt-secondary btn-lg">Alt Secondary State</button>
<button type="button" class="btn btn-alt-secondary">Alt Secondary State</button>
<button type="button" class="btn btn-alt-secondary btn-sm">Alt Secondary State</button>
<br/><br/>
<button type="button" class="btn btn-lg" disabled>Disabled</button>
<button type="button" class="btn" disabled>Disabled</button>
<button type="button" class="btn btn-sm" disabled>Disabled</button>
<br/><br/>
<button type="button" class="btn btn-link btn-lg">Primary Link</button>
<button type="button" class="btn btn-link secondary-link">Secondary Link</button>
<button type="button" class="btn btn-link danger-link">Danger Link</button>
`
);

export const Basic = () => basicHTML();

Basic.story = {
  name: 'Basic',
  parameters: {
    notes: `
      # Basic Buttons

      ## Documentation
      
      Here are some notes on basic buttons. 
      
      ## Code Sample
      
      \`\`\`html
      ${basicHTML}
      \`\`\`
      
      ${buttonNotes}
      
      ` 
  }
};

const iconHTML = `
<button type="button" class="btn btn-primary btn-lg"><i class="icn-star mr-2"></i>Primary Large</button>
<button type="button" class="btn btn-primary"><i class="icn-star mr-1"></i>Primary Default</button>
<button type="button" class="btn btn-primary btn-sm"><i class="icn-star mr-1"></i>Primary Small</button>
<br/><br/>
<button type="button" class="btn btn-secondary btn-lg"><i class="icn-star mr-2"></i>Secondary Large</button>
<button type="button" class="btn btn-secondary"><i class="icn-star mr-2"></i>Secondary Default</button>
<button type="button" class="btn btn-secondary btn-sm"><i class="icn-star mr-1"></i>Secondary Small</button>
<br/><br/>
<button type="button" class="btn btn-alt-secondary btn-lg"><i class="icn-star mr-2"></i>Alt Secondary Large</button>
<button type="button" class="btn btn-alt-secondary"><i class="icn-star mr-2"></i>Alt Secondary Default</button>
<button type="button" class="btn btn-alt-secondary btn-sm"><i class="icn-star mr-1"></i>Alt Secondary Small</button>
<br/><br/>
<button type="button" class="btn btn-lg" disabled><i class="icn-star mr-2"></i>Disabled Large Link</button>
<button type="button" class="btn text-danger" disabled><i class="icn-star mr-2"></i>Disabled Default Link</button>
<button type="button" class="btn btn-sm" disabled><i class="icn-star mr-1"></i>Disabled Small Link</button>
<br/><br/>
<button type="button" class="btn btn-link btn-lg"><i class="icn-star mr-2"></i>Primary Large Link</button>
<button type="button" class="btn btn-link secondary-link text-danger"><i class="icn-star mr-2"></i>Default Danger Link</button>
<button type="button" class="btn btn-link btn-sm"><i class="icn-star mr-1"></i>Small Link</button>
`;

export const Icon = () => iconHTML;

Icon.story = {
  name: 'Icon',
  parameters: {
    notes: `
      # Icon Buttons

      ## Documentation
      
      Here are some notes on icon buttons. 
      
      ## Code Sample
      
      \`\`\`html
      ${iconHTML}
      \`\`\`
      
      ${buttonIconNotes}
      
      ` 
  },
};

const outlineHTML = `
<button type="button" class="btn btn-outline-primary">Primary</button>
<button type="button" class="btn btn-outline-secondary">Secondary</button>
<button type="button" class="btn btn-outline-success">Success</button>
<button type="button" class="btn btn-outline-danger">Danger</button>
<button type="button" class="btn btn-outline-warning">Warning</button>
<button type="button" class="btn btn-outline-info">Info</button>
<button type="button" class="btn btn-outline-dark">Dark</button>

<div class="p-5 mt-5" style="background:dimgrey;">
  <button type="button" class="btn btn-outline-light">Light</button>
</div>
`;

export const Outline = () => outlineHTML;

Outline.story = {
  name: 'Outline',
  parameters: {
    notes: `
      # Outline Buttons

      ## Documentation
      
      Here are some notes on outline buttons. 
      
      ## Code Sample
      
      \`\`\`html
      ${outlineHTML}
      \`\`\`
      
      ${buttonOutlineNotes}
      
      ` 
  },
};
