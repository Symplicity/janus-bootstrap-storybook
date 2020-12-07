import { document, setTimeout } from 'global';

import iconSprite from '../node_modules/@tabler/icons/tabler-sprite.svg';

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
  title: 'Examples/Forms/Unvalidated Form',
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
    <div class="mb-4">
      <label for="select" class="form-label">Select</label>
      <select class="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <div class="mb-4">
      <label for="email" class="form-label">Email</label>
      <div id="emailHelpBlock" class="form-text">Please enter an email (not school)</div>
      <input type="email" class="form-control" id="email" placeholder="name@example.com">
    </div>
    <div class="mb-4">
      <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
    </div>
    <p class="h3 fieldgroup-label">More Fields</p>
    <div class="mb-4">
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
    <div class="mb-4">
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
    <div class="mb-6">
      <fieldset>
        <legend>Subform</legend>
        <div id="checkboxHelpBlock2" class="form-text">Enter your permanent address</div>
        <div class="subform-body bg-light p-3 rounded">
          <div class="mb-6">
            <label for="select" class="form-label">Country</label>
            <select class="form-select" aria-label="Country select example">
              <option value=""></option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="mb-6">
            <label for="formGroupExampleInputStreet" class="form-label">Street</label>
            <input type="text" class="form-control" id="formGroupExampleInputStreet">
          </div>
          <div class="mb-6">
            <label for="formGroupExampleInputCity" class="form-label">City</label>
            <input type="text" class="form-control" id="formGroupExampleInputCity">
          </div>
          <div class="mb-0 row">
            <div class="col pr-2">
              <label for="selectState" class="form-label">State</label>
              <select class="form-select" id="selectState" aria-label="State select example">
                <option value=""></option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="col pl-2">
              <label for="zip" class="form-label">Zip</label>
              <input type="text" id="zip" class="form-control">
            </div>
          </div>
        </div>
      </fieldset>
    </div>
    <div class="mb-4">
      <button type="button" class="btn btn-outline-secondary">
        <svg width="1.25rem" height="1.25rem" class="me-1 mt-n1">
          <use xlink:href="${iconSprite}#tabler-plus" />
        </svg>Add Address
      </button>
    </div>
    <div class="mb-4">
      <fieldset>
        <legend id="file-label">Simple File Upload</legend>
        <div class="form-file">
          <input type="file" aria-labelledby="file-label" class="form-control" id="customFile">
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
