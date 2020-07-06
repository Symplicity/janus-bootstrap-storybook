import { document, setTimeout } from 'global';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Components|Menus',
  decorators: [withA11y],
  parameters: {
    options: {
      selectedPanel: 'storybook/a11y/panel',
    },
  },
};

const menu_basic_html = `<div class="dropdown-menu show" style="position: relative; top: 0; margin: 0 20px 20px 0; max-width: 200px;">
  <a class="dropdown-item" href="#">Action</a>
  <a class="dropdown-item" href="#">Another action</a>
  <a class="dropdown-item" href="#">Something else here here here here</a>
</div>`;

export const MenuBasic = () => `<div class="container-fluid">${menu_basic_html}</div>`;

MenuBasic.story = { 
    name: 'Menu Basic',
    parameters: { 
      notes: `
      
      #Sample Code

      \`\`\`html
      ${menu_basic_html}
      \`\`\`

      `
    }
  
};



const menu_prefix_icon_html = `<div class="dropdown-menu show" style="position: relative; top: 0; margin: 0 20px 20px 0;">
  <a class="dropdown-item with-prefix-icon" href="#"><i class="icn-search mr-2 float-left"></i>Chad Hampton</a>
  <a class="dropdown-item with-prefix-icon" href="#"><i class="icn-search mr-2 float-left"></i>Chad Hampton</a>
  <a class="dropdown-item with-prefix-icon" href="#"><i class="icn-search mr-2 float-left"></i>Chad Hampton</a>
</div>`;

export const MenuPrefixIcon = () => `<div class="container-fluid">${menu_prefix_icon_html}</div>`;

MenuPrefixIcon.story = { 
    name: 'Menu Prefix Icon',
    parameters: { 
      notes: `
      
      #Sample Code

      \`\`\`html
      ${menu_prefix_icon_html}
      \`\`\`

      `
    }
  
};



const menu_suffix_icon_html = `<div class="dropdown-menu show" style="position: relative; top: 0; margin: 0 20px 20px 0;">
  <a class="dropdown-item with-suffix-icon" href="#">Chad Hampton<i class="icn-chevron_right mt-1 float-right"></i></a>
  <a class="dropdown-item with-suffix-icon" href="#">Chad Hampton<i class="icn-chevron_right mt-1 float-right"></i></a>
  <a class="dropdown-item with-suffix-icon" href="#">Chad Hampton<i class="icn-chevron_right mt-1 float-right"></i></a>
</div>`;

export const MenuSuffixIcon = () => `<div class="container-fluid">${menu_suffix_icon_html}</div>`;

MenuSuffixIcon.story = { 
    name: 'Menu Suffix Icon',
    parameters: { 
      notes: `
      
      #Sample Code

      \`\`\`html
      ${menu_suffix_icon_html}
      \`\`\`

      `
    }
  
};


const menu_divider_html = `<div class="dropdown-menu show" style="position: relative; top: 0; margin: 0 20px 20px 0;">
  <a class="dropdown-item" href="#">Add to Career Portfolio</a>
  <a class="dropdown-item" href="#">Remove QR Code</a>
  <a class="dropdown-item" href="#">View as Word</a>
  <div class="dropdown-divider"></div>
  <a class="dropdown-item text-danger" href="#">Delete</a>
</div>`;

export const MenuDivider = () => `<div class="container-fluid">${menu_divider_html}</div>`;

MenuDivider.story = { 
    name: 'Menu with Divider',
    parameters: { 
      notes: `
      
      #Sample Code

      \`\`\`html
      ${menu_divider_html}
      \`\`\`

      `
    }
  
};



const menu_header_html = `<div class="dropdown-menu show" style="position: relative; top: 0; margin: 0 20px 20px 0;">
  <h6 class="dropdown-header">16/24 bold</h6>
  <a class="dropdown-item" href="#">Add to Career Portfolio</a>
  <a class="dropdown-item" href="#">Remove QR Code</a>
  <a class="dropdown-item" href="#">View as Word</a>
  <div class="dropdown-divider"></div>
  <h6 class="dropdown-header">Tools</h6>
  <a class="dropdown-item" href="#">Add to Career Portfolio</a>
  <a class="dropdown-item" href="#">Remove QR Code</a>
  <a class="dropdown-item" href="#">View as Word</a>
</div>`;

export const MenuHeader = () => `<div class="container-fluid">${menu_header_html}</div>`;

MenuHeader.story = { 
    name: 'Menu with Header',
    parameters: { 
      notes: `
      
      #Sample Code

      \`\`\`html
      ${menu_header_html}
      \`\`\`

      `
    }
  
};


const menu_responsive_html = `<div class="dropdown-menu show" style="position: relative; top: 0; margin: 0;">
  <h6 class="dropdown-header">16/24 bold</h6>
  <a class="dropdown-item" href="#">Add to Career Portfolio</a>
  <a class="dropdown-item" href="#">Remove QR Code</a>
  <a class="dropdown-item" href="#">View as Word</a>
  <div class="dropdown-divider"></div>
  <h6 class="dropdown-header">Tools</h6>
  <a class="dropdown-item" href="#">Add to Career Portfolio</a>
  <a class="dropdown-item" href="#">Remove QR Code</a>
  <a class="dropdown-item" href="#">View as Word</a>
</div>`;

export const MenuResponsive = () => `<div class="container-fluid">${menu_responsive_html}</div>`;

MenuResponsive.story = { 
    name: 'Menu Responsive',
    parameters: { 
      notes: `
      
      #Sample Code

      \`\`\`html
      ${menu_responsive_html}
      \`\`\`

      `
    }
  
};
