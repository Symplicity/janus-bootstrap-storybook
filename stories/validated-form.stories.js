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
  title: 'Examples/Forms',
  decorators: [withKnobs],
  parameters: {
    options: {
      selectedPanel: 'storybook/a11y/panel',
    },
  },
};

const validated_form_html = `
<div class="bordered-container" style="max-width: 500px;"> 
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
</div>
`;

export const ValidatedForm = () => `<div class="container-fluid">${validated_form_html}</div>`;

ValidatedForm.storyName = 'Validated Form';

ValidatedForm.parameters = { 
  notes: `
  
  #Sample Code

  \`\`\`html
  ${validated_form_html}
  \`\`\`

  `
};
