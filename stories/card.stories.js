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

const card_homepage_html = `
    <div class="card">
      <h3 class="card-header text-uppercase bg-white d-flex">
        <div class="card-header-icon">
          <span class="bg-pale-purple d-block">
            <svg width="1rem" height="1rem">
              <use xlink:href="/path/to/icon-sprite.svg#tabler-link" />
            </svg>
          </span>
        </div>
        <div class="card-header-text">
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
    </div>
`;

export const CardHomepage = () => {

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
  const card_item_icon_class = text("Item Icon Class", "tabler-search");
  const card_icon_bg_color = select(
      "Icon Background Color",
      icon_bg_color_options,
      "bg-pale-purple"
  );

  return `
    <div class="card">
      <h3 class="card-header text-uppercase bg-white d-flex">
        <div class="card-header-icon">
          <span class="${card_icon_bg_color} d-block">
            <svg width="1rem" height="1rem">
              <use xlink:href="${iconSprite}#${card_icon_class}" />
            </svg>
          </span>
        </div>
        <div class="card-header-text">
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
`
};

CardHomepage.storyName = 'Homepage';
  
CardHomepage.parameters = { 
  notes: `
  
  #Sample Code 

  \`\`\`html
  ${card_homepage_html}
  \`\`\`
  
  `
}

const card_empty_state_with_icons_html = `
  <div class="card">
    <h3 class="card-header text-uppercase bg-white d-flex">
      <div class="card-header-icon">
        <span class="bg-pale-purple d-block">
          <svg width="1rem" height="1rem">
            <use xlink:href="${iconSprite}#tabler-link" />
          </svg>
        </span>
      </div>
      <div class="card-header-text">
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
    <h3 class="card-header text-uppercase bg-white d-flex">
      <div class="card-header-text">
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
        <div class="d-flex justify-content-between">
          <div>
            <button class="d-flex text-left btn btn-link text-decoration-none p-0 mb-0" data-bs-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
              <span class="tabler-chevron-down h4 mt-0 mb-0 me-1">
                <svg width="1rem" height="1rem">
                  <use xlink:href="${iconSprite}#tabler-chevron-down" />
                </svg>
              </span>
              <span>
                Sidebar Box Title
              </span>
            </button>
          </div>
          <div>
            <button class="d-flex btn btn-link text-decoration-none p-0 mb-0">
              <span class="me-1">
                <svg width="1rem" height="1rem">
                  <use xlink:href="${iconSprite}#tabler-pencil" />
                </svg> 
              </span>
              <span>Edit</span>
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

const card_group = `
    <div class="card card-alt">
      <!--svg class="bd-placeholder-img rounded-top" width="100%" height="150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg-->
      <img class="rounded-top img-fluid" src="https://media.istockphoto.com/photos/hot-air-balloons-flying-at-sunset-cappadocia-turkey-picture-id1164258121" alt="Hot air balloons">
      <div class="card-body">
        <h5 class="card-title text-uppercase h6"><b>Career Plan</b></h5>
        <h6 class="h3 text-capitalize">
          <span class="line-clamp-3">thrill friends and family with a make it yourself pizza party make it as cool as you can imagine</span>
        </h6>
        <p class="card-text">
          <span class="line-clamp-5">
            No matter how far along you are in your sophistication 
            as an amateur astronomer, there is always one fundamental 
            moment that we all go back to. That is that very first thing 
            to know.

            No matter how far along you are in your sophistication 
            as an amateur astronomer, there is always one fundamental 
            moment that we all go back to. That is that very first thing 
            to know.

            No matter how far along you are in your sophistication 
            as an amateur astronomer, there is always one fundamental 
            moment that we all go back to. That is that very first thing 
            to know.
          </span>
        </p>
      </div>
      <div class="card-body pt-0">
        <a href="#" class="card-link">Text link 1</a>
        <a href="#" class="card-link">Text link 2</a>
      </div>
    </div>  
`;

export const CardGroup = () => {

  const line_clamp = {
    "1 line": "line-clamp-1",
    "2 lines": "line-clamp-2",
    "3 lines": "line-clamp-3",
    "4 lines": "line-clamp-4",
    "5 lines": "line-clamp-5"
  }

  const card_subheading_text = text("Subheading Text", "thrill friends and family with a make it yourself pizza party make it as cool as you can imagine"); 

  const card_subheading_line_clamp = select(
      "Subheading Line Clamp",
      line_clamp,
      "line-clamp-2"
  );

  const card_body_text = text("Body Text", "\
    No matter how far along you are in your sophistication as an amateur astronomer, there is always one fundamental moment that we all go back to. That is that very first thing to know. (1) \
    No matter how far along you are in your sophistication as an amateur astronomer, there is always one fundamental moment that we all go back to. That is that very first thing to know. (2) \
    No matter how far along you are in your sophistication as an amateur astronomer, there is always one fundamental moment that we all go back to. That is that very first thing to know. (3) \
  ");

  const card_body_line_clamp = select(
      "Body Line Clamp",
      line_clamp,
      "line-clamp-5"
  );

  return `
    <div class="card card-alt">
      <!--svg class="bd-placeholder-img rounded-top" width="100%" height="150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg-->
      <img class="rounded-top img-fluid" src="https://media.istockphoto.com/photos/hot-air-balloons-flying-at-sunset-cappadocia-turkey-picture-id1164258121" alt="Hot air balloons">
      <div class="card-body">
        <h5 class="card-title text-uppercase h6"><b>Career Plan</b></h5>
        <h6 class="h3 text-capitalize">
          <span class="${card_subheading_line_clamp}">${card_subheading_text}</span>
        </h6>
        <p class="card-text">
          <span class="${card_body_line_clamp}">${card_body_text}</span>
        </p>
      </div>
      <div class="card-body pt-0">
        <a href="#" class="card-link">Text link 1</a>
        <a href="#" class="card-link">Text link 2</a>
      </div>
    </div>  
  `
};

CardGroup.storyName = 'Group';

CardGroup.parameters = { 
  notes: `

  #Notes
  Some info about cards: https://www.nngroup.com/articles/cards-component/
  
  #Sample Code

  \`\`\`html
  ${card_group}
  \`\`\`

  `
};

const card_group_horizontal = `
    <div class="card" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <svg class="bd-placeholder-img" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
          <!--img src="https://media.istockphoto.com/photos/hot-air-balloons-flying-at-sunset-cappadocia-turkey-picture-id1164258121" alt="Hot air balloons"-->
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title text-uppercase h6"><b>Career Plan</b></h5>
            <h6 class="h3 text-capitalize">
              <span class="line-clamp-3">thrill friends and family with a make it yourself pizza party make it as cool as you can imagine</span>
            </h6>
            <p class="card-text">
              <span class="line-clamp-5">
                No matter how far along you are in your sophistication 
                as an amateur astronomer, there is always one fundamental 
                moment that we all go back to. That is that very first thing 
                to know.
    
                No matter how far along you are in your sophistication 
                as an amateur astronomer, there is always one fundamental 
                moment that we all go back to. That is that very first thing 
                to know.
    
                No matter how far along you are in your sophistication 
                as an amateur astronomer, there is always one fundamental 
                moment that we all go back to. That is that very first thing 
                to know.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>  
`;

export const CardGroupHorizontal = () => {

  const line_clamp = {
    "1 line": "line-clamp-1",
    "2 lines": "line-clamp-2",
    "3 lines": "line-clamp-3",
    "4 lines": "line-clamp-4",
    "5 lines": "line-clamp-5"
  }

  const card_subheading_text = text("Subheading Text", "thrill friends and family with a make it yourself pizza party make it as cool as you can imagine"); 

  const card_subheading_line_clamp = select(
      "Subheading Line Clamp",
      line_clamp,
      "line-clamp-2"
  );

  const card_body_text = text("Body Text", "\
    No matter how far along you are in your sophistication as an amateur astronomer, there is always one fundamental moment that we all go back to. That is that very first thing to know. (1) \
    No matter how far along you are in your sophistication as an amateur astronomer, there is always one fundamental moment that we all go back to. That is that very first thing to know. (2) \
    No matter how far along you are in your sophistication as an amateur astronomer, there is always one fundamental moment that we all go back to. That is that very first thing to know. (3) \
  ");

  const card_body_line_clamp = select(
      "Body Line Clamp",
      line_clamp,
      "line-clamp-5"
  );

  return `
    <div class="card" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <svg class="bd-placeholder-img" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
          <!--img src="https://media.istockphoto.com/photos/hot-air-balloons-flying-at-sunset-cappadocia-turkey-picture-id1164258121" alt="Hot air balloons"-->
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title text-uppercase h6"><b>Career Plan</b></h5>
            <h6 class="h3 text-capitalize">
              <span class="${card_subheading_line_clamp}">${card_subheading_text}</span>
            </h6>
            <p class="card-text">
              <span class="${card_body_line_clamp}">${card_body_text}</span>
            </p>
          </div>
        </div>
      </div>
    </div>  
  `
};

CardGroupHorizontal.storyName = 'Group Horizontal';

CardGroupHorizontal.parameters = { 
  notes: `

  #Notes
  Some info about cards: https://www.nngroup.com/articles/cards-component/
  
  #Sample Code

  \`\`\`html
  ${card_group_horizontal}
  \`\`\`

  `
};
