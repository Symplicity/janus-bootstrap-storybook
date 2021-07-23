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
  title: 'Components/Filters',
  decorators: [withKnobs],
  parameters: {
    options: {
      selectedPanel: 'storybook/a11y/panel',
    },
  },
};

const filter_button_html = `
<div class="dropdown">
  <h3>Primary - Large</h3>
  <div>
    <button class="btn btn-lg btn-outline-secondary dropdown-toggle rounded-pill" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Primary 
    </button>
    <div class="dropdown-menu shadow-sm mt-1" aria-labelledby="dropdownMenuButton1">
      <a class="dropdown-item d-flex" href="#">
        <span>
          <svg width="1rem" height="1rem" class="me-2 mt-n1">
            <use xlink:href="/path/to/icon-sprite.svg#tabler-search" />
          </svg>
        </span>
        <span class="flex-fill">
          Chad Hampton Is A Very Loooooooooong Name
        </span>
      </a>
      <a class="dropdown-item d-flex" href="#">
        <span>
          <svg width="1rem" height="1rem" class="me-2 mt-n1">
            <use xlink:href="/path/to/icon-sprite.svg#tabler-search" />
          </svg>
        </span>
        <span class="flex-fill">
          Chad Hampton Is A Very Loooooooooong Name
        </span>
      </a>
      <a class="dropdown-item d-flex" href="#">
        <span>
          <svg width="1rem" height="1rem" class="me-2 mt-n1">
            <use xlink:href="/path/to/icon-sprite.svg#tabler-search" />
          </svg>
        </span>
        <span class="flex-fill">
          Chad Hampton Is A Very Loooooooooong Name
        </span>
      </a>
    </div>
  </div>
  <br><br>
  <h3>Primary - Regular</h3>
  <div>
    <button class="btn btn-outline-secondary dropdown-toggle rounded-pill" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Primary 
    </button>
    <div class="dropdown-menu shadow-sm mt-1" aria-labelledby="dropdownMenuButton2">
      <a class="dropdown-item d-flex" href="#">
        <span>
          <svg width="1rem" height="1rem" class="me-2 mt-n1">
            <use xlink:href="/path/to/icon-sprite.svg#tabler-search" />
          </svg>
        </span>
        <span class="flex-fill">
          Chad Hampton Is A Very Loooooooooong Name
        </span>
      </a>
      <a class="dropdown-item d-flex" href="#">
        <span>
          <svg width="1rem" height="1rem" class="me-2 mt-n1">
            <use xlink:href="/path/to/icon-sprite.svg#tabler-search" />
          </svg>
        </span>
        <span class="flex-fill">
          Chad Hampton Is A Very Loooooooooong Name
        </span>
      </a>
      <a class="dropdown-item d-flex" href="#">
        <span>
          <svg width="1rem" height="1rem" class="me-2 mt-n1">
            <use xlink:href="/path/to/icon-sprite.svg#tabler-search" />
          </svg>
        </span>
        <span class="flex-fill">
          Chad Hampton Is A Very Loooooooooong Name
        </span>
      </a>
    </div>
  </div>
  <br><br>
  <h3>Primary - Small</h3>
  <div>
    <button class="btn btn-sm btn-outline-secondary dropdown-toggle rounded-pill" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Primary 
    </button>
    <div class="dropdown-menu shadow-sm mt-1" aria-labelledby="dropdownMenuButton3">
      <a class="dropdown-item d-flex" href="#">
        <span>
          <svg width="1rem" height="1rem" class="me-2 mt-n1">
            <use xlink:href="/path/to/icon-sprite.svg#tabler-search" />
          </svg>
        </span>
        <span class="flex-fill">
          Chad Hampton Is A Very Loooooooooong Name
        </span>
      </a>
      <a class="dropdown-item d-flex" href="#">
        <span>
          <svg width="1rem" height="1rem" class="me-2 mt-n1">
            <use xlink:href="/path/to/icon-sprite.svg#tabler-search" />
          </svg>
        </span>
        <span class="flex-fill">
          Chad Hampton Is A Very Loooooooooong Name
        </span>
      </a>
      <a class="dropdown-item d-flex" href="#">
        <span>
          <svg width="1rem" height="1rem" class="me-2 mt-n1">
            <use xlink:href="/path/to/icon-sprite.svg#tabler-search" />
          </svg>
        </span>
        <span class="flex-fill">
          Chad Hampton Is A Very Loooooooooong Name
        </span>
      </a>
    </div>
  </div>
</div>`;

export const FilterButton = () => {
  const filter_pl = text(
    'Dropdown Primary - Large',
    'Chad Hampton Is A Very Loooooooooong Name'
  );
  const filter_pr = text('Dropdown Primary - Regular', 'Chad Hampton');
  const filter_ps = text('Dropdown Primary - Small', 'Chad Hampton');

  return `
    <div class="dropdown">
      <h3>Primary - Large</h3>
      <div>
        <button class="btn btn-lg btn-outline-secondary dropdown-toggle rounded-pill" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Primary 
        </button>
        <div class="dropdown-menu shadow-sm mt-1" aria-labelledby="dropdownMenuButton1">
          <a class="dropdown-item d-flex" href="#">
            <span>
              <svg width="1rem" height="1rem" class="me-2 mt-n1">
                <use xlink:href="${iconSprite}#tabler-search" />
              </svg>
            </span>
            <span class="flex-fill">
              ${filter_pl}
            </span>
          </a>
          <a class="dropdown-item d-flex" href="#">
            <span>
              <svg width="1rem" height="1rem" class="me-2 mt-n1">
                <use xlink:href="${iconSprite}#tabler-search" />
              </svg>
            </span>
            <span class="flex-fill">
              ${filter_pl}
            </span>
          </a>
          <a class="dropdown-item d-flex" href="#">
            <span>
              <svg width="1rem" height="1rem" class="me-2 mt-n1">
                <use xlink:href="${iconSprite}#tabler-search" />
              </svg>
            </span>
            <span class="flex-fill">
              ${filter_pl}
            </span>
          </a>
        </div>
      </div>
      <br><br>
      <h3>Primary - Regular</h3>
      <div>
        <button class="btn btn-outline-secondary dropdown-toggle rounded-pill" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Primary 
        </button>
        <div class="dropdown-menu shadow-sm mt-1" aria-labelledby="dropdownMenuButton2">
          <a class="dropdown-item d-flex" href="#">
            <span>
              <svg width="1rem" height="1rem" class="me-2 mt-n1">
                <use xlink:href="${iconSprite}#tabler-search" />
              </svg>
            </span>
            <span class="flex-fill">
              ${filter_pr}
            </span>
          </a>
          <a class="dropdown-item d-flex" href="#">
            <span>
              <svg width="1rem" height="1rem" class="me-2 mt-n1">
                <use xlink:href="${iconSprite}#tabler-search" />
              </svg>
            </span>
            <span class="flex-fill">
              ${filter_pr}
            </span>
          </a>
          <a class="dropdown-item d-flex" href="#">
            <span>
              <svg width="1rem" height="1rem" class="me-2 mt-n1">
                <use xlink:href="${iconSprite}#tabler-search" />
              </svg>
            </span>
            <span class="flex-fill">
              ${filter_pr}
            </span>
          </a>
        </div>
      </div>
      <br><br>
      <h3>Primary - Small</h3>
      <div>
        <button class="btn btn-sm btn-outline-secondary dropdown-toggle rounded-pill" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Primary 
        </button>
        <div class="dropdown-menu shadow-sm mt-1" aria-labelledby="dropdownMenuButton3">
          <a class="dropdown-item d-flex" href="#">
            <span>
              <svg width="1rem" height="1rem" class="me-2 mt-n1">
                <use xlink:href="${iconSprite}#tabler-search" />
              </svg>
            </span>
            <span class="flex-fill">
              ${filter_ps}
            </span>
          </a>
          <a class="dropdown-item d-flex" href="#">
            <span>
              <svg width="1rem" height="1rem" class="me-2 mt-n1">
                <use xlink:href="${iconSprite}#tabler-search" />
              </svg>
            </span>
            <span class="flex-fill">
              ${filter_ps}
            </span>
          </a>
          <a class="dropdown-item d-flex" href="#">
            <span>
              <svg width="1rem" height="1rem" class="me-2 mt-n1">
                <use xlink:href="${iconSprite}#tabler-search" />
              </svg>
            </span>
            <span class="flex-fill">
              ${filter_ps}
            </span>
          </a>
        </div>
      </div>
    </div>
    `;
};

FilterButton.storyName = 'Filter Button Regular';

FilterButton.parameters = {
  notes: `
  
  #Sample Code

  \`\`\`html
  ${filter_button_html}
  \`\`\`

  `,
};
