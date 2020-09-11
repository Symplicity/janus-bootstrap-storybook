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
<form>
  <div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <div id="emailHelpBlock" class="form-text">Please enter an email (not school)</div>
    <input type="email" class="form-control" id="email" placeholder="name@example.com" aria-describedby="emailHelpBlock">
  </div>
</form>
<br><br>
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

const select_html = `
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
</form>
<br><br>
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
</form>
`;

export const Select = () => `<div class="container-fluid">${select_html}</div>`;

Select.storyName = '<select>';

Select.parameters = { 
  notes: `
  
  #Sample Code

  \`\`\`html
  ${select_html}
  \`\`\`

  `
};

const textarea_html = `
<form>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
</div>
</form>
<br><br>
<form>
  <div class="mb-3 is-invalid">
    <label for="exampleFormControlTextarea2" class="form-label">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea2" rows="5"></textarea>
  </div>
</form>
`;

export const Textarea = () => `<div class="container-fluid">${textarea_html}</div>`;

Textarea.storyName = '<textarea>';

Textarea.parameters = { 
  notes: `
  
  #Sample Code

  \`\`\`html
  ${textarea_html}
  \`\`\`

  `
};

const input_checkbox_html = `
<form>
  <div class="mb-3">
    <fieldset>
      <legend>Checkbox Group</legend>
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
<br><br>
<form>
  <div class="mb-3 is-invalid">
    <fieldset>
      <legend>Checkbox Group</legend>
      <div class="invalid-feedback">
         <span><span class="icn-error_filled"></span> This field is required.</span>
      </div>
      <div id="checkbox2HelpBlock" class="form-text">Please enter an email (not school)</div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheck4">
        <label class="form-check-label" for="flexCheck4">
          Andre Clayton
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheck5">
        <label class="form-check-label" for="flexCheck5">
          Jimmy Briggs      
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheck6">
        <label class="form-check-label" for="flexCheck6">
          Rosalie Jacobs 
        </label>
      </div>
    </fieldset>
  </div>
</form>
`;

export const InputCheckbox = () => `<div class="container-fluid">${input_checkbox_html}</div>`;

InputCheckbox.storyName = '[type="checkbox"]';

InputCheckbox.parameters = { 
  notes: `
  
  #Sample Code

  \`\`\`html
  ${input_checkbox_html}
  \`\`\`

  `
};

const input_radio_html = `
<form>
  <div class="mb-3">
    <fieldset>
      <legend>Radio Group</legend>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
        <label class="form-check-label" for="flexRadioDefault1">
          Andre Clayton
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
        <label class="form-check-label" for="flexRadioDefault2">
          Jimmy Briggs      
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" checked>
        <label class="form-check-label" for="flexRadioDefault3">
          Rosalie Jacobs 
        </label>
      </div>
    </fieldset>
  </div>
</form>
<br><br>
<form>
  <div class="mb-3 is-invalid">
    <fieldset>
      <legend>Radio Group</legend>
      <div class="invalid-feedback">
         <span><span class="icn-error_filled"></span> This field is required.</span>
      </div>
      <div id="radioHelpBlock" class="form-text">Please enter an email (not school)</div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4">
        <label class="form-check-label" for="flexRadioDefault4">
          Andre Clayton
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5">
        <label class="form-check-label" for="flexRadioDefault5">
          Jimmy Briggs      
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault6">
        <label class="form-check-label" for="flexRadioDefault6">
          Rosalie Jacobs 
        </label>
      </div>
    </fieldset>
  </div>
</form>
`;

export const InputRadio = () => `<div class="container-fluid">${input_radio_html}</div>`;

InputRadio.storyName = '[type="radio"]';

InputRadio.parameters = { 
  notes: `
  
  #Sample Code

  \`\`\`html
  ${input_radio_html}
  \`\`\`

  `
};
