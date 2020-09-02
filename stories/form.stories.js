import { document, setTimeout } from 'global';

import {
  array,
  boolean,
  button,
  color,
  date,
  select,
  withKnobs,
  text,
  number,
} from '@storybook/addon-knobs';


export default {
  title: 'Components/Forms',
  decorators: [withKnobs],
  parameters: {
    options: {
      selectedPanel: 'storybook/a11y/panel',
    },
  },
};

const input_email_html = `
<h4>Default</h4>
<hr>
<form>
  <div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <div id="emailHelpBlock" class="form-text">Please enter an email (not school)</div>
    <input type="email" class="form-control" id="email" placeholder="name@example.com" aria-describedby="emailHelpBlock">
  </div>
</form>
<br><br>
<h4>Invalid/Error</h4>
<hr>
<form>
  <div class="mb-3 is-invalid">
    <label for="email2" class="form-label">Email</label>
    <div class="invalid-feedback">
       <span><span class="icn-error_filled"></span> This field is required.</span>
    </div>
    <div id="email2HelpBlock" class="form-text">Please enter an email (not school)</div>
    <input type="email" class="form-control is-invalid" id="email2" placeholder="name@example.com" aria-describedby="email2HelpBlock">
  </div>
</form>
`;

export const InputEmail = () => `<div class="container-fluid">${input_email_html}</div>`;

InputEmail.storyName = '[type="email"]';

InputEmail.parameters = { 
  notes: `
  
  #Sample Code

  \`\`\`html
  ${input_email_html}
  \`\`\`

  `
};
