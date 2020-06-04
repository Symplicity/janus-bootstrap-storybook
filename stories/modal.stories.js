import { document, setTimeout } from 'global';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Components|Modals',
  decorators: [withA11y],
  parameters: {
    options: {
      selectedPanel: 'storybook/a11y/panel',
    },
  },
};

const modal_basic_html = `<div class="modal" tabindex="-1" role="dialog" style="display: block; position: relative;">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" class="icn-close"></span>
        </button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>`;

export const ModalBasic = () => `<div class="container-fluid">${modal_basic_html}</div>`;

ModalBasic.story = { 
    name: 'Modal Basic',
    parameters: { 
      notes: `
      
      #Sample Code

      \`\`\`html
      ${modal_basic_html}
      \`\`\`

      `
    }
  
};

const modal_trigger_html = `<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" class="icn-close"></span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</div>`;

export const ModalTrigger = () => `<div class="container-fluid">${modal_trigger_html}</div>`;

ModalTrigger.story = { 
    name: 'Modal from Trigger',
    parameters: { 
      notes: `
      
      #Sample Code

      \`\`\`html
      ${modal_trigger_html}
      \`\`\`

      `
    }
  
};
