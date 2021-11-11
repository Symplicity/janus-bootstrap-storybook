import { document, setTimeout } from 'global';

import { radios } from '@storybook/addon-knobs';

export default {
  title: 'Components/Modals',
};

const modal_basic_html = `
<div class="modal" id="exampleModal" tabindex="-1" aria-modal="true" role="dialog" style="display: block; position: relative;" aria-labelledby="exampleModalLabel">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 id="exampleModalLabel" class="modal-title">Modal title</h4>
        <button type="button" class="btn-close d-flex" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p class="mb-0">Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <div class="d-sm-flex d-grid gap-6 w-100 m-0 justify-content-sm-end">
          <div class="d-xs-block">
            <button type="button" class="btn btn-outline-secondary w-100" data-bs-dismiss="modal">Close</button>
          </div>
          <div class="d-xs-block">
            <button type="button" class="btn btn-primary w-100">Save changes</button>
          </div>
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

  `,
};

const modal_from_trigger_html = `
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Launch demo modal
  </button>

  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" aria-modal="true" role="dialog">
    <div class="modal-dialog modal-dialog-scrollable d-flex h-100" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>
            ...
          </p>
        </div>
        <div class="modal-footer">
          <div class="d-sm-flex d-grid gap-6 w-100 m-0 justify-content-sm-end">
            <div class="d-xs-block">
              <button type="button" class="btn btn-outline-secondary w-100" data-bs-dismiss="modal">Close</button>
            </div>
            <div class="d-xs-block">
              <button type="button" class="btn btn-primary w-100">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

export const ModalFromTrigger = () => {
  const label = 'Body Content Length';
  const options = {
    Short: 'short',
    Medium: 'medium',
    Long: 'long',
  };
  const defaultValue = 'medium';

  const value = radios(label, options, defaultValue);

  return `
  <div>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Launch demo modal
    </button>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" aria-modal="true" role="dialog">
      <div class="modal-dialog modal-dialog-scrollable d-flex h-100" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            ${(() => {
              if (value === 'long') {
                return `
                  ...<br><br>
                  ...<br><br>
                  ...<br><br>
                  ...<br><br>
                  ...<br><br>
                  ...<br><br>
                  ...<br><br>
                  ...<br><br>
                  ...<br><br>
                  ...<br><br>
                  ...<br><br>
                  ...<br><br>
                  ...<br><br>
                  ...<br><br>                  
                `;
              }
              if (value === 'medium') {
                return `
                  ...<br><br>
                  ...<br><br>
                  ...<br><br>
                  ...<br><br>
                `;
              }
              if (value === 'short') {
                return `
                  ...
                `;
              }
            })()}
          </div>
          <div class="modal-footer">
            <div class="d-sm-flex d-grid gap-6 w-100 m-0 justify-content-sm-end">
              <div class="d-xs-block">
                <button type="button" class="btn btn-outline-secondary w-100" data-bs-dismiss="modal">Close</button>
              </div>
              <div class="d-xs-block">
                <button type="button" class="btn btn-primary w-100">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
};

ModalFromTrigger.storyName = 'Modal from Trigger';

ModalFromTrigger.parameters = {
  notes: `
  
  #Sample Code

  \`\`\`html
  ${modal_from_trigger_html}
  \`\`\`

  `,
};

const modal_form_html = `<div class="modal" id="exampleModal" tabindex="-1" aria-modal="true" role="dialog" aria-labelledby="exampleModalLabel" style="display: block; position: relative;">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 id="exampleModalLabel" class="modal-title">Modal title</h4>
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
      <div class="modal-footer">
        <div class="d-sm-flex d-grid gap-6 w-100 m-0 justify-content-sm-end">
          <div class="flex-grow-1 d-xs-block align-self-center text-xs-center text-center text-sm-start">
            <button type="button" class="btn btn-link p-0 flex-fill">Other Action (Optional)</button>
          </div>
          <div class="d-xs-block">
            <button type="button" class="btn btn-outline-secondary w-100" data-bs-dismiss="modal">Close</button>
          </div>
          <div class="d-xs-block">
            <button type="button" class="btn btn-primary w-100">Save changes</button>
          </div>
        </div>
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

  `,
};

const modal_scrollable_html = `<div class="modal" id="exampleModal" tabindex="-1" aria-modal="true" role="dialog" aria-labelledby="exampleModalLabel" style="display: block;">
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h4 id="exampleModalLabel" class="modal-title">Modal title</h4>
        <button type="button" class="btn-close d-flex" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec commodo nisi. Integer eget turpis sed ante tincidunt maximus. Fusce ut augue et quam fringilla consectetur eget vitae elit. Aenean pulvinar sem nec elit aliquet, et tempor mauris vehicula. Phasellus iaculis massa turpis, in sollicitudin lectus tincidunt vel. Vestibulum faucibus dolor vel pellentesque vestibulum. Donec vitae laoreet erat, at aliquam mauris. Integer volutpat ligula id risus volutpat pharetra.
        </p>
        <p>
         Mauris id elementum ipsum. Donec sed mi velit. Vivamus nisi risus, vehicula in lacinia nec, accumsan sit amet turpis. Nam vel sem felis. Nullam non imperdiet sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse sollicitudin lacinia magna non cursus. Maecenas ipsum libero, condimentum finibus hendrerit a, pulvinar et lacus. Nulla nunc odio, venenatis vitae fermentum quis, maximus at libero. Etiam et tortor neque. Sed eget accumsan tortor. Nullam lacinia nibh nec dui hendrerit, ac vehicula sem dictum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec commodo nisi. Integer eget turpis sed ante tincidunt maximus. Fusce ut augue et quam fringilla consectetur eget vitae elit. Aenean pulvinar sem nec elit aliquet, et tempor mauris vehicula. Phasellus iaculis massa turpis, in sollicitudin lectus tincidunt vel. Vestibulum faucibus dolor vel pellentesque vestibulum. Donec vitae laoreet erat, at aliquam mauris. Integer volutpat ligula id risus volutpat pharetra.
        </p>
        <p>
         Mauris id elementum ipsum. Donec sed mi velit. Vivamus nisi risus, vehicula in lacinia nec, accumsan sit amet turpis. Nam vel sem felis. Nullam non imperdiet sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse sollicitudin lacinia magna non cursus. Maecenas ipsum libero, condimentum finibus hendrerit a, pulvinar et lacus. Nulla nunc odio, venenatis vitae fermentum quis, maximus at libero. Etiam et tortor neque. Sed eget accumsan tortor. Nullam lacinia nibh nec dui hendrerit, ac vehicula sem dictum. <a href="#">Read More...</a>
        </p>
      </div>
      <div class="modal-footer">
        <div class="d-sm-flex d-grid gap-6 w-100 m-0 justify-content-sm-end">
          <div class="d-xs-block">
            <button type="button" class="btn btn-outline-secondary w-100" data-bs-dismiss="modal">Close</button>
          </div>
          <div class="d-xs-block">
            <button type="button" class="btn btn-primary w-100">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;

export const ModalScrollable = () => `<div>${modal_scrollable_html}</div>`;

ModalScrollable.storyName = 'Modal with Body Scroll';

ModalScrollable.parameters = {
  notes: `
  
  #Sample Code

  \`\`\`html
  ${modal_scrollable_html}
  \`\`\`

  `,
};

const modal_featured_html = `<div class="modal" id="exampleModal" tabindex="-1" aria-modal="true" role="dialog" aria-labelledby="exampleModalLabel" style="display: block;">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header bg-white">
        <h4 id="exampleModalLabel" class="modal-title invisible">Modal title</h4>
        <button type="button" class="btn-close d-flex" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <img src="/minions-placeholder.jpg" alt="Minions" class="img-fluid">
      </div>
      <div class="modal-footer border-0">
        <div class="d-sm-flex d-grid gap-6 w-100 m-0 justify-content-sm-center">
          <div class="d-xs-block">
            <button type="button" class="btn btn-primary w-100">Build Resume Now</button>
          </div>
          <div class="d-xs-block">
            <button type="button" class="btn btn-outline-secondary w-100" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;

export const ModalFeatured = () => `<div>${modal_featured_html}</div>`;

ModalFeatured.storyName = 'Modal with Featured Image';

ModalFeatured.parameters = {
  notes: `
  
  #Sample Code

  \`\`\`html
  ${modal_featured_html}
  \`\`\`

  `,
};
