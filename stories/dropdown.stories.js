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
  title: 'Components/Dropdown',
  decorators: [withKnobs],
  parameters: {
    options: {
      selectedPanel: 'storybook/a11y/panel',
    },
  },
};

const dropdown_primary_html = `
<div class="dropdown">
  <h3>Primary - Large</h3>
  <div>
    <button class="btn btn-lg btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Primary 
    </button>
    <div class="dropdown-menu shadow-sm" aria-labelledby="dropdownMenuButton1">
      <a class="dropdown-item" href="#"><i class="icn-search mr-2 mt-1 float-left"></i>Chad Hampton Is A Very Loooooooooong Name</a>
      <a class="dropdown-item" href="#"><i class="icn-search mr-2 mt-1 float-left"></i>Chad Hampton</a>
      <a class="dropdown-item" href="#"><i class="icn-search mr-2 mt-1 float-left"></i>Chad Hampton</a>    
    </div>
  </div>
  <br><br>
  <h3>Primary - Regular</h3>
  <div>
    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Primary 
    </button>
    <div class="dropdown-menu shadow-sm" aria-labelledby="dropdownMenuButton2">
      <a class="dropdown-item" href="#"><i class="icn-search mr-2 mt-1 float-left"></i>Chad Hampton</a>
      <a class="dropdown-item" href="#"><i class="icn-search mr-2 mt-1 float-left"></i>Chad Hampton</a>
      <a class="dropdown-item" href="#"><i class="icn-search mr-2 mt-1 float-left"></i>Chad Hampton</a>    
    </div>
  </div>
  <br><br>
  <h3>Primary - Small</h3>
  <div>
    <button class="btn btn-sm btn-primary dropdown-toggle" type="button" id="dropdownMenuButton3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Primary 
    </button>
    <div class="dropdown-menu shadow-sm" aria-labelledby="dropdownMenuButton3">
      <a class="dropdown-item" href="#"><i class="icn-search mr-2 mt-1 float-left"></i>Chad Hampton</a>
      <a class="dropdown-item" href="#"><i class="icn-search mr-2 mt-1 float-left"></i>Chad Hampton</a>
      <a class="dropdown-item" href="#"><i class="icn-search mr-2 mt-1 float-left"></i>Chad Hampton</a>    
    </div>
  </div>
</div>`;

export const DropdownPrimary = () => {

  const dropdown_pl = text("Dropdown Primary - Large", "Chad Hampton Is A Very Loooooooooong Name");
  const dropdown_pr = text("Dropdown Primary - Regular", "Chad Hampton");
  const dropdown_ps = text("Dropdown Primary - Small", "Chad Hampton");

  return `
    <div class="dropdown">
      <h3>Primary - Large</h3>
      <div>
        <button class="btn btn-lg btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Primary 
        </button>
        <div class="dropdown-menu shadow-sm" aria-labelledby="dropdownMenuButton1">
          <a class="dropdown-item" href="#"><i class="icn-search mr-2 mt-1 float-left"></i>${dropdown_pl}</a>
          <a class="dropdown-item" href="#"><i class="icn-search mr-2 mt-1 float-left"></i>${dropdown_pl}</a>
          <a class="dropdown-item" href="#"><i class="icn-search mr-2 mt-1 float-left"></i>${dropdown_pl}</a>    
        </div>
      </div>
      <br><br>
      <h3>Primary - Regular</h3>
      <div>
        <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Primary 
        </button>
        <div class="dropdown-menu shadow-sm" aria-labelledby="dropdownMenuButton2">
          <a class="dropdown-item" href="#"><i class="icn-search mr-2 mt-1 float-left"></i>${dropdown_pr}</a>
          <a class="dropdown-item" href="#"><i class="icn-search mr-2 mt-1 float-left"></i>${dropdown_pr}</a>
          <a class="dropdown-item" href="#"><i class="icn-search mr-2 mt-1 float-left"></i>${dropdown_pr}</a>    
        </div>
      </div>
      <br><br>
      <h3>Primary - Small</h3>
      <div>
        <button class="btn btn-sm btn-primary dropdown-toggle" type="button" id="dropdownMenuButton3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Primary 
        </button>
        <div class="dropdown-menu shadow-sm" aria-labelledby="dropdownMenuButton3">
          <a class="dropdown-item" href="#"><i class="icn-search mr-2 mt-1 float-left"></i>${dropdown_ps}</a>
          <a class="dropdown-item" href="#"><i class="icn-search mr-2 mt-1 float-left"></i>${dropdown_ps}</a>
          <a class="dropdown-item" href="#"><i class="icn-search mr-2 mt-1 float-left"></i>${dropdown_ps}</a>    
        </div>
      </div>
    </div>
    `
};

DropdownPrimary.storyName = 'Primary';

DropdownPrimary.parameters = { 
  notes: `
  
  #Sample Code

  \`\`\`html
  ${dropdown_primary_html}
  \`\`\`

  `
};


const dropdown_outline_html = `<div class="dropdown">
  <h3>Outline - Large</h3>
  <div>
    <button class="btn btn-lg btn-outline-primary dropdown-toggle" type="button" id="dropdownMenuButton4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Primary 
    </button>
    <div class="dropdown-menu shadow-sm" aria-labelledby="dropdownMenuButton4">
      <a class="dropdown-item" href="#"><i class="icn-search mr-2 mt-1 float-left"></i>Chad Hampton</a>
      <a class="dropdown-item" href="#"><i class="icn-search mr-2 mt-1 float-left"></i>Chad Hampton</a>
      <a class="dropdown-item" href="#"><i class="icn-search mr-2 mt-1 float-left"></i>Chad Hampton</a>    
    </div>
  </div>
  <br><br>
  <h3>Outline - Regular</h3>
  <div>
    <button class="btn btn-outline-primary dropdown-toggle" type="button" id="dropdownMenuButton5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Primary 
    </button>
    <div class="dropdown-menu shadow-sm" aria-labelledby="dropdownMenuButton5">
      <a class="dropdown-item" href="#"><i class="icn-search mr-2 mt-1 float-left"></i>Chad Hampton</a>
      <a class="dropdown-item" href="#"><i class="icn-search mr-2 mt-1 float-left"></i>Chad Hampton</a>
      <a class="dropdown-item" href="#"><i class="icn-search mr-2 mt-1 float-left"></i>Chad Hampton</a>    
    </div>
  </div>
  <br><br>
  <h3>Outline - Small</h3>
  <div>
    <button class="btn btn-sm btn-outline-primary dropdown-toggle" type="button" id="dropdownMenuButton6" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Primary 
    </button>
    <div class="dropdown-menu shadow-sm" aria-labelledby="dropdownMenuButton6">
      <a class="dropdown-item" href="#"><i class="icn-search mr-2 mt-1 float-left"></i>Chad Hampton</a>
      <a class="dropdown-item" href="#"><i class="icn-search mr-2 mt-1 float-left"></i>Chad Hampton</a>
      <a class="dropdown-item" href="#"><i class="icn-search mr-2 mt-1 float-left"></i>Chad Hampton</a>    
    </div>
  </div>
</div>`;

//export const DropdownOutline = () => `${dropdown_outline_html}`;

export const DropdownOutline = () => {

  const dropdown_ol = text("Dropdown Outline - Large", "Chad Hampton Is A Very Loooooooooong Name");
  const dropdown_or = text("Dropdown Outline - Regular", "Chad Hampton");
  const dropdown_os = text("Dropdown Outline - Small", "Chad Hampton");

  return `
    <div class="dropdown">
      <h3>Outline - Large</h3>
      <div>
        <button class="btn btn-lg btn-outline-primary dropdown-toggle" type="button" id="dropdownMenuButton4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Primary
        </button>
        <div class="dropdown-menu shadow-sm" aria-labelledby="dropdownMenuButton4">
          <a class="dropdown-item" href="#"><i class="icn-search mr-2 mt-1 float-left"></i>${dropdown_ol}</a>
          <a class="dropdown-item" href="#"><i class="icn-search mr-2 mt-1 float-left"></i>${dropdown_ol}</a>
          <a class="dropdown-item" href="#"><i class="icn-search mr-2 mt-1 float-left"></i>${dropdown_ol}</a>    
        </div>
      </div>
      <br><br>
      <h3>Outline - Regular</h3>
      <div>
        <button class="btn btn-outline-primary dropdown-toggle" type="button" id="dropdownMenuButton5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Primary 
        </button>
        <div class="dropdown-menu shadow-sm" aria-labelledby="dropdownMenuButton5">
          <a class="dropdown-item" href="#"><i class="icn-search mr-2 mt-1 float-left"></i>${dropdown_or}</a>
          <a class="dropdown-item" href="#"><i class="icn-search mr-2 mt-1 float-left"></i>${dropdown_or}</a>
          <a class="dropdown-item" href="#"><i class="icn-search mr-2 mt-1 float-left"></i>${dropdown_or}</a>    
        </div>
      </div>
      <br><br>
      <h3>Outline - Small</h3>
      <div>
        <button class="btn btn-sm btn-outline-primary dropdown-toggle" type="button" id="dropdownMenuButton6" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Primary 
        </button>
        <div class="dropdown-menu shadow-sm" aria-labelledby="dropdownMenuButton6">
          <a class="dropdown-item" href="#"><i class="icn-search mr-2 mt-1 float-left"></i>${dropdown_os}</a>
          <a class="dropdown-item" href="#"><i class="icn-search mr-2 mt-1 float-left"></i>${dropdown_os}</a>
          <a class="dropdown-item" href="#"><i class="icn-search mr-2 mt-1 float-left"></i>${dropdown_os}</a>    
        </div>
      </div>
    </div>
    `
};
DropdownOutline.storyName = 'Outline';

DropdownOutline.parameters = { 
  notes: `
  
  #Sample Code

  \`\`\`html
  ${dropdown_outline_html}
  \`\`\`

  `
};

