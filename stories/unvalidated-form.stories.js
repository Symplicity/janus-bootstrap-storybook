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
  title: 'Examples/Unvalidated Form',
  decorators: [withKnobs],
  parameters: {
    options: {
      selectedPanel: 'storybook/a11y/panel',
    },
  },
};

const unvalidated_form_html = `
<div style="max-width: 500px; border: 1px solid #ccc; padding: 20px;  border-radius: 4px;"> 
  <form>
    <div class="mb-3">
      <label for="select" class="form-label">Select</label>
      <select class="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <div id="emailHelpBlock" class="form-text">Please enter an email (not school)</div>
      <input type="email" class="form-control" id="email" placeholder="name@example.com" aria-describedby="emailHelpBlock">
    </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
    </div>
    <fieldset>
      <div class="mb-3">
        <legend>More Fields</legend>
        <label for="email" class="form-label">Checkbox Group</label>
        <div id="checkboxHelpBlock" class="form-text">Select ones that apply to you</div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheck1">
          <label class="form-check-label" for="flexCheck1">
            Andre Clayton
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheck2">
          <label class="form-check-label" for="flexCheck2">
            Jimmy Briggs      
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheck3" checked>
          <label class="form-check-label" for="flexCheck3">
            Rosalie Jacobs 
          </label>
        </div>
      </fieldset>
    </div>
  </form>
</div>
`;

export const UnvalidatedForm = () => `<div class="container-fluid">${unvalidated_form_html}</div>`;

UnvalidatedForm.storyName = 'Unvalidated Form';

UnvalidatedForm.parameters = { 
  notes: `
  
  #Sample Code

  \`\`\`html
  ${unvalidated_form_html}
  \`\`\`

  `
};
