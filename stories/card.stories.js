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
  title: 'Components/Cards',
  decorators: [withKnobs],
  parameters: {
    options: {
      selectedPanel: 'storybook/a11y/panel',
    },
  },
};

const card_basic_html = `
<div style="width: 18rem;">
  <div class="card">
    <h3 class="card-header text-uppercase"><span class="icn-clock_filled bg-pale-blue"></span>Events</h3>
    <div class="card-body">
     <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
      <div class="btn-group mr-2" role="group" aria-label="First group">
        <button class="btn btn-outline-secondary dropdown-toggle" type="button" id="cardButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Create New 
        </button>
        <div class="dropdown-menu shadow-sm" aria-labelledby="cardButton1">
          <a class="dropdown-item" href="#"><i class="icn-search mr-2 mt-1"></i>Chad Hampton</a>
          <a class="dropdown-item" href="#"><i class="icn-search mr-2 mt-1"></i>Chad Hampton</a>
          <a class="dropdown-item" href="#"><i class="icn-search mr-2 mt-1"></i>Chad Hampton</a>    
        </div>
      </div> 
      <div class="btn-group mr-2" role="group" aria-label="Second group">
        <button class="btn btn-outline-secondary" type="button" id="cardButton2">
          Edit Draft Reports 
        </button>
      </div>
    </div>
  </div>
</div>`;

export const CardBasic = () => {

//`<div class="container-fluid">${card_basic_html}</div>`;

  const icon_bg_color_options = {
    "Pale Green": "bg-pale-green",
    "Pale Orange": "bg-pale-orange",
    "Pale Indigo": "bg-pale-indigo",
    "Pale Purple": "bg-pale-purple",
    "Pale Blue": "bg-pale-blue",
    "Pale Red": "bg-pale-red"      
  }

  const card_title_text = text("Title", "Events");
  const card_icon_class = text("Unicon Class", "icn-clock_filled");
  const card_icon_bg_color = select(
      "Icon Background Color",
      icon_bg_color_options,
      "bg-pale-green"
  );

  return `
  <div>
    <div class="card">
      <h3 class="card-header text-uppercase"><span class="${card_icon_class} ${card_icon_bg_color}"></span>${card_title_text}</h3>
      <div class="card-body">
        <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
          <div class="btn-group mr-2" role="group" aria-label="First group">
            <button class="btn btn-outline-secondary dropdown-toggle" type="button" id="cardButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Create New 
            </button>
            <div class="dropdown-menu shadow-sm" aria-labelledby="cardButton1">
              <a class="dropdown-item" href="#"><i class="icn-search mr-2 mt-1"></i>Chad Hampton</a>
              <a class="dropdown-item" href="#"><i class="icn-search mr-2 mt-1"></i>Chad Hampton</a>
              <a class="dropdown-item" href="#"><i class="icn-search mr-2 mt-1"></i>Chad Hampton</a>    
            </div>
          </div> 
          <button class="btn btn-outline-secondary" type="button" id="cardButton2">
            Edit Draft Reports 
          </button>
        </div>
      </div>
    </div>
  </div>
  `
};

CardBasic.storyName = 'Card Basic';
  
CardBasic.parameters = { 
  notes: `
  
  #Sample Code 

  \`\`\`html
  ${card_basic_html}
  \`\`\`
  
  `
}
