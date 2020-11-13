import { document, setTimeout } from 'global';

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
  parameters: {
    options: {
      selectedPanel: 'storybook/a11y/panel',
    },
  },
};

const card_basic_html = `
  <div class="card">
    <h3 class="card-header text-uppercase bg-white">
      <div class="d-flex">
        <div class="card-header-icon flex-shrink-1">
          <span class="icn-clock_filled bg-pale-blue"></span>
        </div>
        <div class="card-header-text w-100">
          Quick Actions
        </div>
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
  </div>`;

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
  const card_icon_class = text("Icon Class", "icn-link");
  const card_icon_bg_color = select(
      "Icon Background Color",
      icon_bg_color_options,
      "bg-pale-purple"
  );

  return `
    <div class="card">
      <h3 class="card-header text-uppercase bg-white">
        <div class="d-flex">
          <div class="card-header-icon flex-shrink-1">
            <span class="${card_icon_class} ${card_icon_bg_color}"></span>
          </div>
          <div class="card-header-text w-100">
            ${card_title_text}
          </div>
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
    </div>`
};

CardBasic.storyName = 'Quick Actions';
  
CardBasic.parameters = { 
  notes: `
  
  #Sample Code 

  \`\`\`html
  ${card_basic_html}
  \`\`\`
  
  `
}
