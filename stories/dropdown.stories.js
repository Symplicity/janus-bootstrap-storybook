import { document, setTimeout } from 'global';

export default {
  title: 'Components/Dropdown',
  parameters: {
    options: {
      selectedPanel: 'storybook/a11y/panel',
    },
  },
};

const dropdown_primary_html = `<div class="dropdown">
  <h3>Primary - Large</h3>
  <div>
    <button class="btn btn-lg btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Primary 
    </button>
    <div class="dropdown-menu shadow-sm" aria-labelledby="dropdownMenuButton1">
      <a class="dropdown-item" href="#"><i class="icn-search mr-2 mt-1 float-left"></i>Chad Hampton</a>
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

export const DropdownPrimary = () => `${dropdown_primary_html}`;

DropdownPrimary.story = { 
    name: 'Primary',
    parameters: { 
      notes: `
      
      #Sample Code

      \`\`\`html
      ${dropdown_primary_html}
      \`\`\`

      `
    }
  
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

export const DropdownOutline = () => `${dropdown_outline_html}`;

DropdownOutline.story = { 
    name: 'Outline',
    parameters: { 
      notes: `
      
      #Sample Code

      \`\`\`html
      ${dropdown_outline_html}
      \`\`\`

      `
    }
  
};

