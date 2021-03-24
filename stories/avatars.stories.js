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
  title: 'Components/Avatars',
  decorators: [withKnobs],
  parameters: {
    options: {
      selectedPanel: 'storybook/a11y/panel',
    },
  },
};

const moreDocumentation = `
#Additional Documentation
For additional documentation, see:

- Bootstrap Documentation
- Design System 

`;

const avatar_text_html = `
<div class="container">
  <div class="row">
    <div class="col">
      <button class="avatar avatar-sm avatar-text rounded-circle bg-pale-blue" type="button">
        <span class="text-white">WW</span>
      </button>
    </div>
    <div class="col">
      <button class="avatar avatar-md avatar-text rounded-circle bg-pale-blue" type="button">
        <span class="text-white">WW</span>
      </button>
    </div>
    <div class="col">
      <button class="avatar avatar-lg avatar-text rounded-circle bg-pale-blue" type="button">
        <span class="text-white">WW</span>
      </button>
    </div>
    <div class="col">
      <button class="avatar avatar-xl avatar-text rounded-circle bg-pale-blue" type="button">
        <span class="text-white">WW</span>
      </button>
    </div>
  </div>
</div>
`;


export const AvatarText = () => { 

  const container = $('<div class="text-center" style="margin-top:100px"></div>').append(avatar_text_html);
  
  return container[0]; 
    
};

AvatarText.storyName = 'Text Avatar';

AvatarText.parameters = { 
  notes: `

    # Text Avatar

    ###HTML

    \`\`\`html
    ${avatar_text_html}
    \`\`\`
    
    ${moreDocumentation}
    
  `
};

const avatar_image_html = `
<div class="container">
  <div class="row">
    <div class="col">
      <button class="avatar avatar-sm avatar-image rounded-circle" type="button">
        <img role="button" class="" src="https://www.edge.org/sites/default/files/styles/member-photo/public/member-pictures/picture-510-1416068804.jpg?itok=cnAQyDr5" alt="...">
      </button>
    </div>
    <div class="col">
      <button class="avatar avatar-md avatar-image rounded-circle" type="button">
        <img role="button" class="" src="https://www.edge.org/sites/default/files/styles/member-photo/public/member-pictures/picture-510-1416068804.jpg?itok=cnAQyDr5" alt="...">
      </button>
    </div>
    <div class="col">
      <button class="avatar avatar-lg avatar-image rounded-circle" type="button">
        <img role="button" class="" src="https://www.edge.org/sites/default/files/styles/member-photo/public/member-pictures/picture-510-1416068804.jpg?itok=cnAQyDr5" alt="...">
      </button>
    </div>
    <div class="col">
      <button class="avatar avatar-xl avatar-image rounded-circle" type="button">
        <img role="button" class="" src="https://www.edge.org/sites/default/files/styles/member-photo/public/member-pictures/picture-510-1416068804.jpg?itok=cnAQyDr5" alt="...">
      </button>
    </div>
  </div>
</div>
`;


export const AvatarImage = () => { 

  const container = $('<div class="text-center" style="margin-top:100px"></div>').append(avatar_image_html);
  
  return container[0]; 
    
};
AvatarImage.storyName = 'Image Avatar';

AvatarImage.parameters = { 
  notes: `

    # Image Avatar

    ###HTML

    \`\`\`html
    ${avatar_image_html}
    \`\`\`
    
    ${moreDocumentation}
    
  `
};


const avatar_icon_html = `
<div class="container">
  <div class="row">
    <div class="col">
      <button class="avatar avatar-sm avatar-icon rounded bg-pale-purple" type="button">
        <svg class="text-white">
          <use xlink:href="${iconSprite}#tabler-briefcase" />
          <span class="visually-hidden">Work</span>
        </svg>
      </button>
    </div>
    <div class="col">
      <button class="avatar avatar-md avatar-icon rounded bg-pale-purple" type="button">
        <svg class="text-white">
          <use xlink:href="${iconSprite}#tabler-briefcase" />
          <span class="visually-hidden">Work</span>
        </svg>
      </button>
    </div>
    <div class="col">
      <button class="avatar avatar-lg avatar-icon rounded-4 bg-pale-purple" type="button">
        <svg class="text-white">
          <use xlink:href="${iconSprite}#tabler-briefcase" />
          <span class="visually-hidden">Work</span>
        </svg>
      </button>
    </div>
    <div class="col">
      <button class="avatar avatar-xl avatar-icon rounded-4 bg-pale-purple" type="button">
        <svg class="text-white">
          <use xlink:href="${iconSprite}#tabler-briefcase" />
          <span class="visually-hidden">Work</span>
        </svg>
      </button>
    </div>
  </div>
</div>
`;


export const AvatarIcon = () => { 

  const container = $('<div class="text-center" style="margin-top:100px"></div>').append(avatar_icon_html);
  
  return container[0]; 
    
};
AvatarIcon.storyName = 'Icon Avatar';

AvatarIcon.parameters = { 
  notes: `

    # Icon Avatar

    ###HTML

    \`\`\`html
    ${avatar_icon_html}
    \`\`\`
    
    ${moreDocumentation}
    
  `
};


const avatar_logo_html = `
<div class="container">
  <div class="row">
    <div class="col">
      <button class="avatar avatar-sm avatar-image rounded" type="button">
        <img role="button" class="" src="https://cdn.shopify.com/s/files/1/1846/4053/products/tesla_black-800_600x.jpg" alt="...">
      </button>
    </div>
    <div class="col">
      <button class="avatar avatar-md avatar-image rounded" type="button">
        <img role="button" class="" src="https://cdn.shopify.com/s/files/1/1846/4053/products/tesla_black-800_600x.jpg" alt="...">
      </button>
    </div>
    <div class="col">
      <button class="avatar avatar-lg avatar-image rounded" type="button">
        <img role="button" class="" src="https://cdn.shopify.com/s/files/1/1846/4053/products/tesla_black-800_600x.jpg" alt="...">
      </button>
    </div>
    <div class="col">
      <button class="avatar avatar-xl avatar-image rounded" type="button">
        <img role="button" class="" src="https://cdn.shopify.com/s/files/1/1846/4053/products/tesla_black-800_600x.jpg" alt="...">
      </button>
    </div>
  </div>
</div>
`;


export const AvatarLogo = () => { 

  const container = $('<div class="text-center" style="margin-top:100px"></div>').append(avatar_logo_html);
  
  return container[0]; 
    
};
AvatarLogo.storyName = 'Logo Avatar';

AvatarLogo.parameters = { 
  notes: `

    # Logo Avatar

    ###HTML

    \`\`\`html
    ${avatar_logo_html}
    \`\`\`
    
    ${moreDocumentation}
    
  `
};

