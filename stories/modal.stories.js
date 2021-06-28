import { document, setTimeout } from 'global';

export default {
  title: 'Components/Modals',
  parameters: {
    options: {
      selectedPanel: 'storybook/a11y/panel',
    },
  },
};

const modal_basic_html = `
<div class="modal" tabindex="-1" style="display: block; position: relative;">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Modal title</h4>
        <button type="button" class="btn-close d-flex" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p class="mb-0">Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>`;

export const ModalBasic = () => `<div>${modal_basic_html}</div>`;

ModalBasic.storyName = 'Modal Basic';

ModalBasic.parameters = { 
  notes: `
  
  #Sample Code

  \`\`\`html
  ${modal_basic_html}
  \`\`\`

  `
};

const modal_trigger_html = `
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</div>`;

export const ModalTrigger = () => `<div>${modal_trigger_html}</div>`;

ModalTrigger.storyName = 'Modal from Trigger';

ModalTrigger.parameters = { 
  notes: `
  
  #Sample Code

  \`\`\`html
  ${modal_trigger_html}
  \`\`\`

  `
};


const modal_form_html = `<div class="modal" tabindex="-1" style="display: block; position: relative;">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Modal title</h4>
        <button type="button" class="btn-close d-flex" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p class="mb-0">
          <form>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Text Field w/ Blurb
                <br>
                <small class="text-muted">Please enter an email (not school)</small>
              </label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Textarea</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>    
          </form>
        </p>
      </div>
      <div class="modal-footer flex-row">
          <div class="flex-grow-1">
            <button type="button" class="btn btn-link p-0">Other Action (Optional)</button>
          </div>
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>`;

export const ModalForm = () => `<div>${modal_form_html}</div>`;

ModalForm.storyName = 'Modal with Form';

ModalForm.parameters = { 
  notes: `
  
  #Sample Code

  \`\`\`html
  ${modal_form_html}
  \`\`\`

  `
};
