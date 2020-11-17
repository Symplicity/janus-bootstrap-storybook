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
  title: 'Components/Cards',
  decorators: [withKnobs],
  parameters: {
    options: {
      selectedPanel: 'storybook/a11y/panel',
    },
  },
};

const card_basic_html = `
    <div class="card">
      <h3 class="card-header text-uppercase bg-white">
        <div class="card-header-icon d-inline-block">
          <span class="bg-pale-purple d-block">
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
          <div class="btn-group" role="group" aria-label="First group">
            <button class="btn btn-outline-secondary dropdown-toggle mt-1 mb-1 mr-6" type="button" id="cardButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Create New 
            </button>
            <div class="dropdown-menu shadow-sm" aria-labelledby="cardButton1">
              <a class="dropdown-item" href="#"><i class="icn-search mr-2 mt-1"></i>Chad Hampton</a>
              <a class="dropdown-item" href="#"><i class="icn-search mr-2 mt-1"></i>Chad Hampton</a>
              <a class="dropdown-item" href="#"><i class="icn-search mr-2 mt-1"></i>Chad Hampton</a>    
            </div>
          </div> 
          <button class="btn btn-outline-secondary mt-1 mb-1 mr-6" type="button" id="cardButton2">
            Edit Draft Reports 
          </button>
        </div>
      </div>
    </div>
`;

export const CardBasic = () => {

  const icon_bg_color_options = {
    "Pale Green": "bg-pale-green",
    "Pale Orange": "bg-pale-orange",
    "Pale Indigo": "bg-pale-indigo",
    "Pale Purple": "bg-pale-purple",
    "Pale Blue": "bg-pale-blue",
    "Pale Red": "bg-pale-red"      
  }

  const card_title_text = text("Title", "Quick Actions");
  const card_icon_class = text("Icon Class", "tabler-link");
  const card_icon_bg_color = select(
      "Icon Background Color",
      icon_bg_color_options,
      "bg-pale-purple"
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
          <div class="btn-group" role="group" aria-label="First group">
            <button class="btn btn-outline-secondary dropdown-toggle mt-1 mb-1 mr-6" type="button" id="cardButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Create New 
            </button>
            <div class="dropdown-menu shadow-sm" aria-labelledby="cardButton1">
              <a class="dropdown-item" href="#"><i class="icn-search mr-2 mt-1"></i>Chad Hampton</a>
              <a class="dropdown-item" href="#"><i class="icn-search mr-2 mt-1"></i>Chad Hampton</a>
              <a class="dropdown-item" href="#"><i class="icn-search mr-2 mt-1"></i>Chad Hampton</a>    
            </div>
          </div> 
          <button class="btn btn-outline-secondary mt-1 mb-1 mr-6" type="button" id="cardButton2">
            Edit Draft Reports 
          </button>
        </div>
      </div>
    </div>
`
};

CardBasic.storyName = 'Basic';
  
CardBasic.parameters = { 
  notes: `
  
  #Sample Code 

  \`\`\`html
  ${card_basic_html}
  \`\`\`
  
  `
}

const card_empty_state_with_icons_html = `
  <div class="card">
    <h3 class="card-header text-uppercase bg-white">
      <div class="card-header-icon d-inline-block">
        <span class="bg-pale-purple d-block">
          <svg width="1rem" height="1rem">
            <use xlink:href="${iconSprite}#tabler-link" />
          </svg>
        </span>
      </div>
      <div class="card-header-text d-inline-block">
        Events
      </div>
    </h3>
    <div class="card-body text-center text-muted pt-0">
      <span class="d-block">
        <svg width="2.5rem" height="2.5rem">
          <use xlink:href="${iconSprite}#tabler-calendar" />
        </svg>
      </span>
      <span class="display-7">You're all caught up.</span>
    </div>
  </div>
`;

export const CardEmptyStateWithIcons = () => `${card_empty_state_with_icons_html}`;

CardEmptyStateWithIcons.storyName = 'Empty State / Icons';

CardEmptyStateWithIcons.parameters = { 
  notes: `
  
  #Sample Code

  \`\`\`html
  ${card_empty_state_with_icons_html}
  \`\`\`

  `
};

const card_empty_state_no_icons_html = `
  <div class="card">
    <h3 class="card-header text-uppercase bg-white">
      <div class="card-header-text d-inline-block">
        Events
      </div>
    </h3>
    <div class="card-body text-center text-muted pt-0">
      <span class="display-7">You're all caught up.</span>
    </div>
  </div>
`;

export const CardEmptyStateNoIcons = () => `${card_empty_state_no_icons_html}`;

CardEmptyStateNoIcons.storyName = 'Empty State / No Icons';

CardEmptyStateNoIcons.parameters = { 
  notes: `
  
  #Sample Code

  \`\`\`html
  ${card_empty_state_with_icons_html}
  \`\`\`

  `
};

const card_sidebar = `
  <div class="sidebar">
    <div class="card bg-light border-0">
      <h3 class="card-header bg-light mb-0">
        <div class="d-flex">
          <div>
            <button class="btn btn-link text-decoration-none p-0 mb-0" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
              <span class="tabler-chevron-down d-inline-block h4 mt-0 mb-0 mr-1">
                <svg width="1rem" height="1rem">
                  <use xlink:href="${iconSprite}#tabler-chevron-down" />
                </svg>
              </span>
              Sidebar Box Title
            </button>
          </div>
          <div class="ml-auto">
            <button class="btn btn-link text-decoration-none p-0 mb-0">
              <svg width="1rem" height="1rem">
                <use xlink:href="${iconSprite}#tabler-pencil" />
              </svg> Edit
            </button>
          </div>
        </div>
      </h3>
      <div class="collapse" id="collapseExample">
        <div class="card-body text-center pt-0">
          <button class="btn btn-link text-decoration-none">
            Add Document
          </button>
        </div>
      </div>
    </div>
  </div>
`;

export const CardSidebar = () => `${card_sidebar}`;

CardSidebar.storyName = 'Sidebar';

CardSidebar.parameters = { 
  notes: `

  #Notes
  - Handling for caret rotation is controlled based on the state of the
  aria-expanded attribute and presence of a .sidebar container class.
  
  #Sample Code

  \`\`\`html
  ${card_sidebar}
  \`\`\`

  `
};

