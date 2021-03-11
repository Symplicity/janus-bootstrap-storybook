import { document, setTimeout } from 'global';

import iconSprite from '../node_modules/@symplicity/tabler-icons/symplicity/tabler-sprite-nostroke.svg';

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
  title: 'Examples/Forms/Validated Form',
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
    <div class="mb-4 is-invalid">
      <label for="select2" class="form-label">Select</label>
      <div class="invalid-feedback">
        <svg width="1.25rem" height="1.25rem" class="mt-n1 me-1">
          <use xlink:href="${iconSprite}#tabler-alert-circle" />
        </svg>This field is required.
      </div>
      <select class="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <div class="mb-4 is-invalid">
      <label for="email2" class="form-label">Email</label>
      <div class="invalid-feedback">
        <svg width="1.25rem" height="1.25rem" class="mt-n1 me-1">
          <use xlink:href="${iconSprite}#tabler-alert-circle" />
        </svg>This field is required.
      </div>
      <div id="email2HelpBlock" class="form-text">Please enter an email (not school)</div>
      <input type="email" class="form-control is-invalid" id="email2" placeholder="name@example.com">
    </div>
    <div class="mb-4 is-invalid">
      <label for="exampleFormControlTextarea2" class="form-label">Example textarea</label>
      <textarea class="form-control" id="exampleFormControlTextarea2" rows="5"></textarea>
    </div>
    <p class="h3 fieldgroup-label">More Fields</p>
    <div class="mb-4 is-invalid">
      <fieldset>
        <legend>Checkbox Group</legend>
        <div class="invalid-feedback">
          <svg width="1.25rem" height="1.25rem" class="mt-n1 me-1">
            <use xlink:href="${iconSprite}#tabler-alert-circle" />
          </svg>This field is required.
        </div>
        <div id="checkbox2HelpBlock" class="form-text">Select ones that apply to you</div>
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
    <div class="mb-4 is-invalid">
      <fieldset>
        <legend>Radio Group</legend>
        <div class="invalid-feedback">
          <svg width="1.25rem" height="1.25rem" class="mt-n1 me-1">
            <use xlink:href="${iconSprite}#tabler-alert-circle" />
          </svg>This field is required.
        </div>
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
    <div class="mb-6 is-invalid">
      <fieldset>
        <legend>Subform</legend>
        <div id="checkboxHelpBlock2" class="form-text">Enter your permanent address</div>
        <div class="subform bg-light p-3 rounded">
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
          <div class="subform-footer">
            <button type="button" class="btn btn-link text-decoration-none text-danger">
              <svg width="1.25rem" height="1.25rem" class="mt-n1 me-2">
                <use xlink:href="${iconSprite}#tabler-trash" />
              </svg>Delete
            </button>
          </div>
        </div>
      </fieldset>
    </div>
    <div class="mb-4">
      <button type="button" class="btn btn-outline-secondary">
        <svg width="1.25rem" height="1.25rem" class="mt-n1 me-1">
          <use xlink:href="${iconSprite}#tabler-plus" />
        </svg>Add Address
      </button>
    </div>
    <div class="mb-4 is-invalid">
      <fieldset>
        <div class="form-file">
          <label class="form-label" for="inputGroupFile02">
            Simple File Upload
          </label>
          <div class="invalid-feedback">
            <svg width="1.25rem" height="1.25rem" class="mt-n1 me-1">
              <use xlink:href="${iconSprite}#tabler-alert-circle" />
            </svg>This field is required.
          </div>
          <input type="file" class="form-control" id="inputGroupFile02">
        </div>
      </fieldset>
    </div>
  </form>
</div>
`;

export const ValidatedForm = () =>
  `<div class="container-fluid">${validated_form_html}</div>`;

ValidatedForm.storyName = 'Validated Form';

ValidatedForm.parameters = {
  notes: `
  
  #Sample Code

  \`\`\`html
  ${validated_form_html}
  \`\`\`

  `,
};
