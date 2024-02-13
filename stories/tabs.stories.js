import iconSprite from '../node_modules/@tabler/icons/tabler-sprite-nostroke.svg'

export default {
  title: 'Components/Tabs'
}

const moreDocumentation = `
#Additional Documentation
For additional documentation, see:

- Bootstrap Documentation
- Design System 

`

let tabsSingleRowHTML = `
<ul class="nav nav-tabs bg-white rounded-top border border-light ps-7 pe-7">
  <li class="nav-item">
    <a class="nav-link fs-5 active" aria-current="page" href="#">
      <span>Core Information</span>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link fs-5" href="#">
      <span>Summaries</span>
      <span class="badge bg-light count-badge fw-bold text-dark rounded-circle p-1 ms-1 mt-1">2</span>
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
      <span class="badge bg-light count-badge fw-bold text-dark rounded-circle p-1 ms-1 mt-1">44</span>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link fs-5" href="#">
      <span class="line-clamp-2 text-start">
        On-Campus Interview and Other Non Campus Interview Placement
      </span>
      <span class="badge bg-light count-badge fw-bold text-dark rounded-circle p-1 ms-1 mt-1">44</span>
    </a>
  </li>
</ul>
`

export const TabsSingleRow = () =>
  `<div class="text-center" style="margin-top:100px">${tabsSingleRowHTML}</div>`

TabsSingleRow.storyName = 'Single Row'

TabsSingleRow.parameters = {
  notes: `

    #Tabs

    ###HTML

    \`\`\`html
    ${TabsSingleRow}
    \`\`\`
    
    ${moreDocumentation}
    
  `
}

let tabsDoubleRowHTML = `
<ul class="nav nav-tabs bg-white rounded-top border border-light ps-7 pe-7">
  <li class="nav-item">
    <a class="nav-link fs-5 active" aria-current="page" href="#">
      <span>Core Information</span>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link fs-5" href="#">
      <span>Summaries</span>
      <span class="badge bg-light count-badge fw-bold text-dark rounded-circle p-1 ms-1 mt-1">2</span>
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
      <span class="badge bg-light count-badge fw-bold text-dark rounded-circle p-1 ms-1 mt-1">44</span>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link fs-5" href="#">
      <span class="line-clamp-2 text-start">
        On-Campus Interview and Other Non Campus Interview Placement
      </span>
      <span class="badge bg-light count-badge fw-bold text-dark rounded-circle p-1 ms-1 mt-1">44</span>
    </a>
  </li>
</ul>
<ul class="nav nav-tabs bg-white border border-light border-top-0 ps-7 pe-7">
  <li class="nav-item">
    <a class="nav-link fs-5" href="#">
      <span>Core Information</span>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link fs-5 active" aria-current="page" href="#">
      <span>Summaries</span>
      <span class="badge bg-primary count-badge fw-bold text-white rounded-circle p-1 ms-1 mt-1">2</span>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link fs-5" href="#">
      <span>Actions</span>
    </a>
  </li>
</ul>
`

export const TabsDoubleRow = () =>
  `<div class="text-center" style="margin-top:100px">${tabsDoubleRowHTML}</div>`

TabsDoubleRow.storyName = 'Double Row'

TabsDoubleRow.parameters = {
  notes: `

    #Tabs

    ###HTML

    \`\`\`html
    ${TabsDoubleRow}
    \`\`\`
    
    ${moreDocumentation}
    
  `
}

let tabsWithControlsSingleRowHTML = `
  <div class="bg-white rounded-top border border-light d-flex">
    <button class="d-flex align-items-center bg-white border-0 text-light rounded-top">
      <svg class="icon-lg-font-size">
        <use xlink:href="${iconSprite}#tabler-chevron-left" />
        <span class="visually-hidden">Open Search Dialog</span>
      </svg>
    </button>
    <ul class="flex-grow-1 nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link fs-5 active" aria-current="page" href="#">
          <span>Core Information</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link fs-5" href="#">
          <span>Summaries</span>
          <span class="badge bg-light count-badge fw-bold text-dark rounded-circle p-1 ms-1 mt-1">2</span>
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
          <span class="badge bg-light count-badge fw-bold text-dark rounded-circle p-1 ms-1 mt-1">44</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link fs-5" href="#">
          <span class="line-clamp-2 text-start">
            On-Campus Interview and Other Non Campus Interview Placement
          </span>
          <span class="badge bg-light count-badge fw-bold text-dark rounded-circle p-1 ms-1 mt-1">44</span>
        </a>
      </li>
    </ul>
    <button class="d-flex align-items-center bg-white border-0 text-primary rounded-top">
      <svg class="icon-lg-font-size">
        <use xlink:href="${iconSprite}#tabler-chevron-right" />
        <span class="visually-hidden">Open Search Dialog</span>
      </svg>
    </button>
  </div>
`

export const TabsWithControlsSingleRow = () =>
  `<div class="text-center" style="margin-top:100px">${tabsWithControlsSingleRowHTML}</div>`

TabsWithControlsSingleRow.storyName = 'SRow with Controls'

TabsWithControlsSingleRow.parameters = {
  notes: `

    #Tabs

    ###HTML

    \`\`\`html
    ${TabsWithControlsSingleRow}
    \`\`\`
    
    ${moreDocumentation}
    
  `
}

let tabsWithControlsDoubleRowHTML = `
  <div class="bg-white rounded-top border border-light d-flex">
    <button class="d-flex align-items-center bg-white border-0 text-light rounded-top">
      <svg class="icon-lg-font-size">
        <use xlink:href="${iconSprite}#tabler-chevron-left" />
        <span class="visually-hidden">Open Search Dialog</span>
      </svg>
    </button>
    <ul class="flex-grow-1 nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link fs-5 active" aria-current="page" href="#">
          <span>Core Information</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link fs-5" href="#">
          <span>Summaries</span>
          <span class="badge bg-light count-badge fw-bold text-dark rounded-circle p-1 ms-1 mt-1">2</span>
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
          <span class="badge bg-light count-badge fw-bold text-dark rounded-circle p-1 ms-1 mt-1">44</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link fs-5" href="#">
          <span class="line-clamp-2 text-start">
            On-Campus Interview and Other Non Campus Interview Placement
          </span>
          <span class="badge bg-light count-badge fw-bold text-dark rounded-circle p-1 ms-1 mt-1">44</span>
        </a>
      </li>
    </ul>
    <button class="d-flex align-items-center bg-white border-0 text-primary rounded-top">
      <svg class="icon-lg-font-size">
        <use xlink:href="${iconSprite}#tabler-chevron-right" />
        <span class="visually-hidden">Open Search Dialog</span>
      </svg>
    </button>
  </div>
  <div class="bg-white border border-light border-top-0 d-flex">
    <!--button class="d-flex align-items-center bg-white border-0 text-light rounded-top">
      <svg class="icon-lg-font-size">
        <use xlink:href="${iconSprite}#tabler-chevron-left" />
        <span class="visually-hidden">Open Search Dialog</span>
      </svg>
    </button-->
    <div class="ps-3 pe-3"></div>
    <ul class="flex-grow-1 nav nav-tabs border-top-0">
      <li class="nav-item">
        <a class="nav-link fs-5" href="#">
          <span>Core Information</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link fs-5 active" aria-current="page" href="#">
          <span>Summaries</span>
          <span class="badge bg-primary count-badge fw-bold text-white rounded-circle p-1 ms-1 mt-1">2</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link fs-5" href="#">
          <span>Actions</span>
        </a>
      </li>
    </ul>
    </div>
    <!--button class="d-flex align-items-center bg-white border-0 text-primary rounded-top">
      <svg class="icon-lg-font-size">
        <use xlink:href="${iconSprite}#tabler-chevron-right" />
        <span class="visually-hidden">Open Search Dialog</span>
      </svg>
    </button-->
    <div class="ps-3 pe-3"></div>
  </div>
`

export const TabsWithControlsDoubleRow = () =>
  `<div class="text-center" style="margin-top:100px">${tabsWithControlsDoubleRowHTML}</div>`

TabsWithControlsDoubleRow.storyName = 'DRow with Controls'

TabsWithControlsDoubleRow.parameters = {
  notes: `

    #Tabs

    ###HTML

    \`\`\`html
    ${TabsWithControlsDoubleRow}
    \`\`\`
    
    ${moreDocumentation}
    
  `
}
