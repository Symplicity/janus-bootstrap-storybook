import { withA11y } from '@storybook/addon-a11y';
import { withActions } from '@storybook/addon-actions';

import buttonNotes from './button.notes.md';



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
const buttonWithAction = () => withActions('click')(() => `<button type="button" class="btn btn-primary">Action Button</button>`);


const basic_html = () => `
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-primary"><i class="fa fa-home"></i> Primary</button>
<button type="button" class="btn btn-primary btn-sm">Primary</button>
<br/><br/>
<button type="button" class="btn btn-secondary">Default Secondary State</button>
<button type="button" class="btn btn-secondary"><i class="fa fa-home"></i> Default Secondary State</button>
<button type="button" class="btn btn-secondary btn-sm">Default Secondary State</button>
<br/><br/>
<button type="button" class="btn btn-alt-secondary">Alt Secondary State</button>
<button type="button" class="btn btn-alt-secondary"><i class="fa fa-home"></i> Alt Secondary State</button>
<button type="button" class="btn btn-alt-secondary btn-sm">Alt Secondary State</button>
<br/><br/>
<button type="button" class="btn" disabled>Disabled</button>
<button type="button" class="btn" disabled><i class="fa fa-home"></i> Disabled</button>
<button type="button" class="btn btn-sm" disabled>Disabled</button>
<br/><br/>
<button type="button" class="btn btn-link">Primary Link</button>
<button type="button" class="btn btn-link secondary-link">Secondary Link</button>
<button type="button" class="btn btn-link danger-link">Danger Link</button>
`;



export const Basic = () => buttonWithAction() + `<br><br>` + basic_html();
Basic.story = {
  name: 'Basic',
  parameters: {
    notes: `
      # Basic Buttons

      ## Documentation
      
      Here are some notes on basic buttons. 
      
      ## Code Sample
      
      \`\`\`html
      ${basic_html}
      \`\`\`
      
      ${buttonNotes}
      
      ` 
  }
};


const outline_html = `
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

export const Outlined = () => outline_html;
Outlined.story = {
  name: 'Outline',
  parameters: {
    notes: `
      # Outline Buttons

      ## Documentation
      
      Here are some notes on outline buttons. 
      
      ## Code Sample
      
      \`\`\`html
      ${outline_html}
      \`\`\`
      
      ${buttonNotes}
      
      ` 
  },
};
