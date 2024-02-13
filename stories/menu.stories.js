import iconSprite from '../node_modules/@tabler/icons/tabler-sprite-nostroke.svg'

import { text } from '@storybook/addon-knobs'

export default {
  title: 'Components/Menus'
}

const menu_basic_html = `
<div class="dropdown-menu show position-relative">
  <a class="dropdown-item" href="#">Action</a>
  <a class="dropdown-item" href="#">Another action</a>
  <a class="dropdown-item" href="#">Something else here here here here here here here</a>
</div>`

export const MenuBasic = () => `${menu_basic_html}`

MenuBasic.storyName = 'Menu Basic'

MenuBasic.parameters = {
  notes: `
  
  #Sample Code

  \`\`\`html
  ${menu_basic_html}
  \`\`\`

  `
}

const menu_prefix_icon_html = `
<div class="dropdown-menu show position-relative">
  <a class="dropdown-item with-prefix-icon d-flex" href="#">
    <div class="flex-shrink-1 me-2">
      <svg width="20" height="20">
        <use xlink:href="${iconSprite}#tabler-search" />
      </svg>
    </div>
    <div class="w-100">
      Chad Hampton is a super long name isn't it, yes it most certainly is?
    </div>
  </a>
  <a class="dropdown-item with-prefix-icon d-flex" href="#">
    <div class="flex-shrink-1 me-2">
      <svg width="20" height="20">
        <use xlink:href="${iconSprite}#tabler-search" />
      </svg>
    </div>
    <div class="w-100">
      Chad Hampton
    </div>
  </a>
  <a class="dropdown-item with-prefix-icon d-flex" href="#">
    <div class="flex-shrink-1 me-2">
      <svg width="20" height="20">
        <use xlink:href="${iconSprite}#tabler-search" />
      </svg>
    </div>
    <div class="w-100">
      Chad Hampton 
    </div>
  </a>
  <a class="dropdown-item with-prefix-icon d-flex" href="#">
    <div class="flex-shrink-1 me-2">
      <svg width="20" height="20">
        <use xlink:href="${iconSprite}#tabler-search" />
      </svg>
    </div>
    <div class="w-100">
      Chad Hampton
    </div>
  </a>
  <a class="dropdown-item with-prefix-icon d-flex" href="#">
    <div class="flex-shrink-1 me-2">
      <svg width="20" height="20">
        <use xlink:href="${iconSprite}#tabler-search" />
      </svg>
    </div>
    <div class="w-100">
      Chad Hampton
    </div>
  </a>
  <a class="dropdown-item with-prefix-icon d-flex" href="#">
    <div class="flex-shrink-1 me-2">
      <svg width="20" height="20">
        <use xlink:href="${iconSprite}#tabler-search" />
      </svg>
    </div>
    <div class="w-100">
      Chad Hampton
    </div>
  </a>
</div>`

export const MenuPrefixIcon = () => `${menu_prefix_icon_html}`

MenuPrefixIcon.storyName = 'Menu Prefix Icon'

MenuPrefixIcon.parameters = {
  notes: `
  
  #Sample Code

  \`\`\`html
  ${menu_prefix_icon_html}
  \`\`\`

  `
}

export const MenuSuffixIcon = () => {
  const item1_text = text('Item 1', 'Chad Hampton')
  const item2_text = text('Item 2', 'Something Very very very long')
  const item3_text = text('Item 3', 'Something Short')

  return `
  <div class="dropdown-menu show position-relative">
    <a class="dropdown-item with-suffix-icon d-flex" href="#">
      <div class="w-100">
        ${item1_text}
      </div>
      <div class="ms-3">
        <span>
          <svg width="20" height="20">
            <use xlink:href="${iconSprite}#tabler-chevron-right" />
          </svg>
        </span>
      </div>
    </a>
    <a class="dropdown-item with-suffix-icon d-flex" href="#">
      <div class="w-100">
        ${item2_text}
      </div>
      <div class="ms-3">
        <span>
          <svg width="20" height="20">
            <use xlink:href="${iconSprite}#tabler-chevron-right" />
          </svg>
        </span>
      </div>
    </a>
    <a class="dropdown-item with-suffix-icon d-flex" href="#">
      <div class="w-100">
        ${item3_text}
      </div>
      <div class="ms-3">
        <span>
          <svg width="20" height="20">
            <use xlink:href="${iconSprite}#tabler-chevron-right" />
          </svg>
        </span>
      </div>
    </a>
  </div>
`
}

MenuSuffixIcon.storyName = 'Menu Suffix Icon'

MenuSuffixIcon.parameters = {
  notes: `
  
  #Sample Code

  \`\`\`html
  <div class="dropdown-menu show position-relative">
    <a class="dropdown-item with-suffix-icon d-flex" href="#">
      <div class="w-100">
        Fname Lname
      </div>
      <div class="flex-shrink-1">
        <span>
          <svg width="20" height="20">
            <use xlink:href="path/to/icon-sprite.svg#tabler-chevron-right" />
          </svg>
        </span>
      </div>
    </a>
    <a class="dropdown-item with-suffix-icon d-flex" href="#">
      <div class="w-100">
        Fname Lname
      </div>
      <div class="flex-shrink-1">
        <span>
          <svg width="20" height="20">
            <use xlink:href="path/to/icon-sprite.svg#tabler-chevron-right" />
          </svg>
        </span>
      </div>
    </a>
    <a class="dropdown-item with-suffix-icon d-flex" href="#">
      <div class="w-100">
        Fname Lname
      </div>
      <div class="flex-shrink-1">
        <span>
          <svg width="20" height="20">
            <use xlink:href="path/to/icon-sprite.svg#tabler-chevron-right" />
          </svg>
        </span>
      </div>
    </a>
  </div>
  \`\`\`

  `
}

const menu_divider_html = `
<div class="dropdown-menu show position-relative">
  <a class="dropdown-item" href="#">Add to Career Portfolio</a>
  <a class="dropdown-item" href="#">Remove QR Code</a>
  <a class="dropdown-item" href="#">View as Word</a>
  <div class="dropdown-divider"></div>
  <a class="dropdown-item text-danger" href="#">Delete</a>
</div>`

export const MenuDivider = () => `${menu_divider_html}`

MenuDivider.storyName = 'Menu with Divider'

MenuDivider.parameters = {
  notes: `
  
  #Sample Code

  \`\`\`html
  ${menu_divider_html}
  \`\`\`

  `
}

const menu_header_html = `
<div class="dropdown-menu show position-relative">
  <h6 class="dropdown-header">16/24 bold</h6>
  <a class="dropdown-item" href="#">Add to Career Portfolio</a>
  <a class="dropdown-item" href="#">Remove QR Code</a>
  <a class="dropdown-item" href="#">View as Word</a>
  <div class="dropdown-divider"></div>
  <h6 class="dropdown-header">Tools</h6>
  <a class="dropdown-item" href="#">Add to Career Portfolio</a>
  <a class="dropdown-item" href="#">Remove QR Code</a>
  <a class="dropdown-item" href="#">View as Word</a>
</div>`

export const MenuHeader = () => `${menu_header_html}`

MenuHeader.storyName = 'Menu with Header'

MenuHeader.parameters = {
  notes: `
  
  #Sample Code

  \`\`\`html
  ${menu_header_html}
  \`\`\`

  `
}

const menu_responsive_html = `
<div class="dropdown-menu show position-relative">
  <h6 class="dropdown-header">16/24 bold</h6>
  <a class="dropdown-item" href="#">Add to Career Portfolio</a>
  <a class="dropdown-item" href="#">Remove QR Code</a>
  <a class="dropdown-item" href="#">View as Word</a>
  <div class="dropdown-divider"></div>
  <h6 class="dropdown-header">Tools</h6>
  <a class="dropdown-item" href="#">Add to Career Portfolio</a>
  <a class="dropdown-item" href="#">Remove QR Code</a>
  <a class="dropdown-item" href="#">View as Word</a>
</div>`

export const MenuResponsive = () => `${menu_responsive_html}`

MenuResponsive.storyName = 'Menu Responsive'

MenuResponsive.parameters = {
  notes: `
  
  #Sample Code

  \`\`\`html
  ${menu_responsive_html}
  \`\`\`

  `
}
