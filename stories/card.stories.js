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
      <h3 class="card-title">Special title treatment</h3>
      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
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
  <div style="width: 18rem;">
    <div class="card">
      <h3 class="card-header text-uppercase"><span class="${card_icon_class} ${card_icon_bg_color}"></span>${card_title_text}</h3>
      <div class="card-body">
        <h3 class="card-title">Special title treatment</h3>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
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
