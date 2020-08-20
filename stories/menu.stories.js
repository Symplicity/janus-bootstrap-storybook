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
  title: 'Components/Menus',
  decorators: [withKnobs],
  parameters: {
    options: {
      selectedPanel: 'storybook/a11y/panel',
    },
  },
};

const menu_basic_html = `
<div class="dropdown-menu shadow-sm show" style="position: relative; top: 0; margin: 0 20px 20px 0;">
  <a class="dropdown-item" href="#">Action</a>
  <a class="dropdown-item" href="#">Another action</a>
  <a class="dropdown-item" href="#">Something else here here here here here here here</a>
</div>
<br>
<div class="dropdown-menu shadow-sm show" style="position: relative; top: 0; margin: 0 20px 20px 0;">
  <a class="dropdown-item" href="#">A</a>
  <a class="dropdown-item" href="#">B</a>
  <a class="dropdown-item" href="#">C</a>
</div>`;

export const MenuBasic = () => `<div class="container-fluid">${menu_basic_html}</div>`;

MenuBasic.storyName = 'Menu Basic';

MenuBasic.parameters = { 
  notes: `
  
  #Sample Code

  \`\`\`html
  ${menu_basic_html}
  \`\`\`

  `
};



const menu_prefix_icon_html = `<div class="dropdown-menu shadow-sm show" style="position: relative; top: 0; margin: 0 20px 20px 0;">
  <a class="dropdown-item with-prefix-icon" href="#"><i class="icn-search mr-2 float-left"></i>Chad Hampton</a>
  <a class="dropdown-item with-prefix-icon" href="#"><i class="icn-withdraw_filled mr-2 float-left"></i>Chad Hampton</a>
  <a class="dropdown-item with-prefix-icon" href="#"><i class="icn-donut mr-2 float-left"></i>Chad Hampton</a>
  <a class="dropdown-item with-prefix-icon" href="#"><i class="icn-copy mr-2 float-left"></i>Chad Hampton</a>
  <a class="dropdown-item with-prefix-icon" href="#"><i class="icn-care-report mr-2 float-left"></i>Chad Hampton</a>
  <a class="dropdown-item with-prefix-icon" href="#"><i class="icn-rss mr-2 float-left"></i>Chad Hampton</a>
</div>`;

export const MenuPrefixIcon = () => `<div class="container-fluid">${menu_prefix_icon_html}</div>`;

MenuPrefixIcon.storyName = 'Menu Prefix Icon';

MenuPrefixIcon.parameters = { 
  notes: `
  
  #Sample Code

  \`\`\`html
  ${menu_prefix_icon_html}
  \`\`\`

  `
};

export const MenuSuffixIcon = () => {

const item1_text = text("Item 1", "Chad Hampton");
const item2_text = text("Item 2", "Something Verylong");
const item3_text = text("Item 3", "Something Short");

return `

<div class="dropdown-menu shadow-sm show" style="position: relative; top: 0; margin: 0 20px 20px 0;">
  <a class="dropdown-item with-suffix-icon" href="#">${item1_text}<i class="icn-chevron_right"></i></a>
  <a class="dropdown-item with-suffix-icon" href="#">${item2_text}<i class="icn-chevron_right"></i></a>
  <a class="dropdown-item with-suffix-icon" href="#">${item3_text}<i class="icn-chevron_right"></i></a>
</div>
`;

};

MenuSuffixIcon.storyName = 'Menu Suffix Icon';

MenuSuffixIcon.parameters = { 
  notes: `
  
  #Sample Code

  \`\`\`html
  <div class="dropdown-menu shadow-sm show">
    <a class="dropdown-item with-suffix-icon" href="#">Fname Lname<i class="icn-chevron_right"></i></a>
    <a class="dropdown-item with-suffix-icon" href="#">Fname Lname<i class="icn-chevron_right"></i></a>
    <a class="dropdown-item with-suffix-icon" href="#">Fname Lname<i class="icn-chevron_right"></i></a>
  </div>
  \`\`\`

  `
};


const menu_divider_html = `<div class="dropdown-menu shadow-sm show" style="position: relative; top: 0; margin: 0 20px 20px 0;">
  <a class="dropdown-item" href="#">Add to Career Portfolio</a>
  <a class="dropdown-item" href="#">Remove QR Code</a>
  <a class="dropdown-item" href="#">View as Word</a>
  <div class="dropdown-divider"></div>
  <a class="dropdown-item text-danger" href="#">Delete</a>
</div>`;

export const MenuDivider = () => `<div class="container-fluid">${menu_divider_html}</div>`;

MenuDivider.storyName = 'Menu with Divider';

MenuDivider.parameters = { 
  notes: `
  
  #Sample Code

  \`\`\`html
  ${menu_divider_html}
  \`\`\`

  `
};



const menu_header_html = `<div class="dropdown-menu shadow-sm show" style="position: relative; top: 0; margin: 0 20px 20px 0;">
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

MenuHeader.storyName = 'Menu with Header';

MenuHeader.parameters = { 
  notes: `
  
  #Sample Code

  \`\`\`html
  ${menu_header_html}
  \`\`\`

  `
};


const menu_responsive_html = `<div class="dropdown-menu shadow-sm show" style="position: relative; top: 0; margin: 0;">
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

MenuResponsive.storyName = 'Menu Responsive';

MenuResponsive.parameters = { 
  notes: `
  
  #Sample Code

  \`\`\`html
  ${menu_responsive_html}
  \`\`\`

  `
};
