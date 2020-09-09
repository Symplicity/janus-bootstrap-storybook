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
  title: 'Examples/Validated Form',
  decorators: [withKnobs],
  parameters: {
    options: {
      selectedPanel: 'storybook/a11y/panel',
    },
  },
};

const validated_form_html = `
<div style="max-width: 500px; border: 1px solid #ccc; padding: 20px; border-radius: 4px;"> 
  <form>
  <div class="mb-3 is-invalid">
    <label for="select2" class="form-label">Select</label>
    <div class="invalid-feedback">
       <span><span class="icn-error_filled"></span> This field is required.</span>
    </div>
    <select class="form-select" aria-label="Default select example">
      <option selected>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
  <div class="mb-3 is-invalid">
    <label for="email2" class="form-label">Email</label>
    <div class="invalid-feedback">
        <div class="feedback-icon">
          <span class="icn-error_filled"></span>
        </div>
        <div class="feedback-text">
          <span> This field is required.</span>
        </div>
    </div>
    <div id="email2HelpBlock" class="form-text">Please enter an email (not school)</div>
    <input type="email" class="form-control is-invalid" id="email2" placeholder="name@example.com" aria-describedby="email2HelpBlock">
  </div>
  <div class="mb-3 is-invalid">
    <label for="exampleFormControlTextarea2" class="form-label">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea2" rows="3"></textarea>
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
