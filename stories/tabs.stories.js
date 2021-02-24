import { document, setTimeout } from 'global';

import $ from 'jquery';
window.jQuery = window.$ = $;

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
  title: 'Components/Tabs',
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

let tabsSingleRowHTML = `
<ul class="nav nav-tabs bg-white rounded-top border border-light d-inline-flex ps-7 pe-7">
  <li class="nav-item">
    <a class="nav-link fs-5 active" aria-current="page" href="#">
      <span>Core Information</span>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link fs-5" href="#">
      <span>Summaries</span>
      <span class="badge bg-light count-badge text-dark rounded-circle p-1 ms-1">2</span>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link fs-5" href="#">
      <span>Actions</span>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link fs-5" href="#">
      <span>Meetings</span>
      <span class="badge bg-light count-badge text-dark rounded-circle p-1 ms-1">44</span>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link fs-5" href="#">
      <span class="line-clamp-2 text-start">
        On-Campus Interview and Other Non Campus Interview Placement
      </span>
      <span class="badge bg-light count-badge text-dark rounded-circle p-1 ms-1">44</span>
    </a>
  </li>
</ul>
`;


export const TabsSingleRow = () => `<div class="text-center" style="margin-top:100px">${tabsSingleRowHTML}</div>`;

TabsSingleRow.storyName = 'Single Row';

TabsSingleRow.parameters = { 
  notes: `

    #Tabs

    ###HTML

    \`\`\`html
    ${TabsSingleRow}
    \`\`\`
    
    ###JavaScript (Bootstrap/jQuery)
    Call the popover plugin function for each popover.

    ${moreDocumentation}
    
  `
};

let tabsDoubleRowHTML = `
<ul class="nav nav-tabs bg-white rounded-top border border-light d-inline-flex ps-7 pe-7">
  <li class="nav-item">
    <a class="nav-link fs-5 active" aria-current="page" href="#">
      <span>Core Information</span>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link fs-5" href="#">
      <span>Summaries</span>
      <span class="badge bg-light count-badge text-dark rounded-circle p-1 ms-1">2</span>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link fs-5" href="#">
      <span>Actions</span>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link fs-5" href="#">
      <span>Meetings</span>
      <span class="badge bg-light count-badge text-dark rounded-circle p-1 ms-1">44</span>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link fs-5" href="#">
      <span class="line-clamp-2 text-start">
        On-Campus Interview and Other Non Campus Interview Placement
      </span>
      <span class="badge bg-light count-badge text-dark rounded-circle p-1 ms-1">44</span>
    </a>
  </li>
</ul>
<ul class="nav nav-tabs bg-white border border-light border-top-0 d-inline-flex ps-7 pe-7 w-100">
  <li class="nav-item">
    <a class="nav-link fs-5" href="#">
      <span>Core Information</span>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link fs-5 active" aria-current="page" href="#">
      <span>Summaries</span>
      <span class="badge bg-light count-badge text-dark rounded-circle p-1 ms-1">2</span>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link fs-5" href="#">
      <span>Actions</span>
    </a>
  </li>
</ul>
`;


export const TabsDoubleRow = () => `<div class="text-center" style="margin-top:100px">${tabsDoubleRowHTML}</div>`;

TabsDoubleRow.storyName = 'Double Row';

TabsDoubleRow.parameters = { 
  notes: `

    #Tabs

    ###HTML

    \`\`\`html
    ${TabsDoubleRow}
    \`\`\`
    
    ###JavaScript (Bootstrap/jQuery)
    Call the popover plugin function for each popover.

    ${moreDocumentation}
    
  `
};


