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
  title: 'Examples/Cards/Quick Actions',
  decorators: [withKnobs],
};

const card_basic_html = `
    <div class="card">
      <h3 class="card-header text-uppercase bg-white">
        <div class="card-header-icon d-inline-block">
          <span class="bg-accent-purple d-block">
            <svg width="1rem" height="1rem">
              <use xlink:href="/path/to/icon-sprite.svg#tabler-link" />
            </svg>
          </span>
        </div>
        <div class="card-header-text d-inline-block">
          Quick Actions
        </div>
      </h3>
      <div class="card-body">
        <div class="btn-toolbar mt-n3 mb-n1" role="toolbar" aria-label="Toolbar with button groups">
          <div class="btn-group flex-wrap" role="group" aria-label="First group">
            <div class="mt-1 mb-1 me-6">
              <button class="btn btn-outline-secondary dropdown-toggle" type="button" id="cardButton1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Create New 
              </button>
              <ul class="dropdown-menu shadow-sm" aria-labelledby="cardButton1">
                <li>
                  <a class="dropdown-item" href="#">
                    <span class="me-1 mt-1">
                      <svg width="1rem" height="1rem">
                        <use xlink:href="/path/to/icon-sprite.svg#tabler-search" />
                      </svg>
                    </span>
                    Chad Hampton
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    <span class="me-1 mt-1">
                      <svg width="1rem" height="1rem">
                        <use xlink:href="/path/to/icon-sprite.svg#tabler-search" />
                      </svg>
                    </span>
                    Chad Hampton
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    <span class="me-1 mt-1">
                      <svg width="1rem" height="1rem">
                        <use xlink:href="/path/to/icon-sprite.svg#tabler-search" />
                      </svg>
                    </span>
                    Chad Hampton
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <button class="btn btn-outline-secondary mt-1 mb-1 me-6" type="button" id="cardButton2">
                Edit Draft Reports 
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>`;

export const CardBasic = () => {
  const icon_bg_color_options = {
    'Accent Green': 'bg-accent-green',
    'Accent Orange': 'bg-accent-orange',
    'Accent Indigo': 'bg-accent-indigo',
    'Accent Purple': 'bg-accent-purple',
    'Accent Blue': 'bg-accent-blue',
    'Accent Red': 'bg-accent-red',
  };

  const card_title_text = text('Title', 'Quick Actions');
  const card_icon_class = text('Icon Class', 'tabler-link');
  const card_item_icon_class = text(
    'Dropdown Item Icon Class',
    'tabler-search'
  );
  const card_icon_bg_color = select(
    'Icon Background Color',
    icon_bg_color_options,
    'bg-accent-purple'
  );

  return `
    <div class="card">
      <h3 class="card-header text-uppercase bg-white">
        <div class="card-header-icon d-inline-block">
          <span class="${card_icon_bg_color} d-block">
            <svg width="1rem" height="1rem">
              <use xlink:href="${iconSprite}#${card_icon_class}" />
            </svg>
          </span>
        </div>
        <div class="card-header-text d-inline-block">
          ${card_title_text}
        </div>
      </h3>
      <div class="card-body">
        <div class="btn-toolbar mt-n3 mb-n1" role="toolbar" aria-label="Toolbar with button groups">
          <div class="btn-group flex-wrap" role="group" aria-label="First group">
            <div class="mt-1 mb-1 me-6">
              <button class="btn btn-outline-secondary dropdown-toggle" type="button" id="cardButton1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Create New 
              </button>
              <ul class="dropdown-menu shadow-sm" aria-labelledby="cardButton1">
                <li>
                  <a class="dropdown-item" href="#">
                    <span class="me-1 mt-1">
                      <svg width="1rem" height="1rem">
                        <use xlink:href="${iconSprite}#${card_item_icon_class}" />
                      </svg>
                    </span>
                    Chad Hampton
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    <span class="me-1 mt-1">
                      <svg width="1rem" height="1rem">
                        <use xlink:href="${iconSprite}#${card_item_icon_class}" />
                      </svg>
                    </span>
                    Chad Hampton
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    <span class="me-1 mt-1">
                      <svg width="1rem" height="1rem">
                        <use xlink:href="${iconSprite}#${card_item_icon_class}" />
                      </svg>
                    </span>
                    Chad Hampton
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <button class="btn btn-outline-secondary mt-1 mb-1 me-6" type="button" id="cardButton2">
                Edit Draft Reports 
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>`;
};

CardBasic.storyName = 'Quick Actions';

CardBasic.parameters = {
  notes: `
  
  #Sample Code 

  \`\`\`html
  ${card_basic_html}
  \`\`\`
  
  `,
};
