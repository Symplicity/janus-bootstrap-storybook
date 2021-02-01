import { document, setTimeout } from 'global';

import iconSprite from '../node_modules/@tabler/icons/tabler-sprite.svg';

export default {
  title: 'Components/Search',
  parameters: {
    options: {
      selectedPanel: 'storybook/a11y/panel',
    },
  },
};

const search_mobile_input_html = `
<div class="m-3">
  <button data-bs-toggle="modal" data-bs-target="#myModal" class="rounded-circle btn btn-action btn-action-icon-only btn-action-header me-7" type="button">
    <svg class="icon-xl-font-size mt-n1">
      <use xlink:href="${iconSprite}#tabler-search" />
      <span class="visually-hidden">Open Search Dialog</span>
    </svg>
  </button>
</div>

<div class="modal" tabindex="-1" id="myModal">
  <div class="modal-dialog modal-fullscreen-lg-down" role="document">
    <div class="modal-content">
      <div class="modal-header bg-white">
        <h4 class="modal-title visually-hidden">Search</h4>
        <button type="button" class="btn-close d-flex" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body align-items-start justify-content-center">
        <!-- input -->
        <div class="input-group mb-3">
          <span class="input-group-text border-0 bg-white pt-0 pe-0 pb-0" id="basic-addon1">
            <svg class="icon-lg-font-size">
              <use xlink:href="${iconSprite}#tabler-chevron-left" />
              <span class="visually-hidden">Exit Search Dialog</span>
            </svg>
          </span>
          <input type="text" id="myInput" class="form-control border-0" aria-label="Username" aria-describedby="basic-addon1">
        </div>
        <hr>
        <!-- results -->
        <div>
          <ul class="list-unstyled">
            <li>
              <a class="dropdown-item d-flex" href="#">
                <span>
                  <svg width="1rem" height="1rem" class="me-2 mt-n1">
                    <use xlink:href="static/media/tabler-sprite.3d36b3c4.svg#tabler-search"></use>
                  </svg>
                </span>
                <span class="flex-fill">
                  Chad Hampton Is A Very Loooooooooong Name
                </span>
              </a>
            </li>
            <li>
              <a class="dropdown-item d-flex" href="#">
                <span>
                  <svg width="1rem" height="1rem" class="me-2 mt-n1">
                    <use xlink:href="static/media/tabler-sprite.3d36b3c4.svg#tabler-search"></use>
                  </svg>
                </span>
                <span class="flex-fill">
                  Chad Hampton Is A Very Loooooooooong Name
                </span>
              </a>
            </li>
            <li>
              <a class="dropdown-item d-flex" href="#">
                <span>
                  <svg width="1rem" height="1rem" class="me-2 mt-n1">
                    <use xlink:href="static/media/tabler-sprite.3d36b3c4.svg#tabler-search"></use>
                  </svg>
                </span>
                <span class="flex-fill">
                  Chad Hampton Is A Very Loooooooooong Name
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>`;

export const SearchMobileInput = () => {
  const container = $('<div style="margin: 0;"></div>').append(search_mobile_input_html)

  setTimeout(function() {
    /* Mimic autofocus attribute in bs.modal: http://localhost:9001/docs/5.0/components/modal/#how-it-works */

    var myModal = document.getElementById('myModal')
    var myInput = document.getElementById('myInput')
  
    myModal.addEventListener('shown.bs.modal', function () {
      myInput.focus()
    })
  },0)

  return container[0];
};

SearchMobileInput.storyName = 'Search Mobile Input';

SearchMobileInput.parameters = { 
  notes: `
  
  #Sample Code

  \`\`\`html
  ${search_mobile_input_html}
  \`\`\`

  `
};
