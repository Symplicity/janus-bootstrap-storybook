import iconSprite from '../node_modules/@tabler/icons/tabler-sprite-nostroke.svg'

import { select, text } from '@storybook/addon-knobs'

export default {
  title: 'Examples/Cards/Job Post'
}

const card = `
    <div class="card">
      <div class="card-header bg-transparent d-flex pb-0 mb-0 align-items-start">
        <div class="card-logo">
          <svg class="bd-placeholder-img rounded" width="80" height="80" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Logo" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Logo</text></svg>
        </div>
        <div class="card-actions d-flex flex-grow-1 justify-content-end align-items-start">
          <button type="button" class="btn btn-action btn-action-icon-only rounded-circle me-3">
            <svg class="icon-xl-font-size mt-n1">
              <use xlink:href="/path/to/icon-sprite.svg#tabler-thumb-down" />
              <span class="visually-hidden">Thumbs Down</span>
            </svg>
          </button>
          <button type="button" class="btn btn-action btn-action-icon-only rounded-circle">
            <svg class="icon-xl-font-size mt-n1">
              <use xlink:href="/path/to/icon-sprite.svg#tabler-star" />
              <span class="visually-hidden">Favorite</span>
            </svg>
          </button>
        </div>
      </div>
      <div class="card-body">
        <svg class="bd-placeholder-img rounded-top" width="100%" height="150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Logo" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Logo</text></svg>
        <h5 class="card-title text-uppercase h6"><b>Full-Time, Internship</b></h5>
        <h6 class="h3 text-capitalize mb-1">
          <span class="line-clamp-3">Software Engineer</span>
        </h6>
        <p class="card-text mb-3">
          <span class="line-clamp-5">
            Mountain View, CA
          </span>
        </p>
        <p class="card-text mb-0">
          <span class="fs-6 text-muted mb-0">5d ago</span>
        </p>
      </div>
    </div>  
`

export const Card = () => {
  const line_clamp = {
    '1 line': 'line-clamp-1',
    '2 lines': 'line-clamp-2',
    '3 lines': 'line-clamp-3',
    '4 lines': 'line-clamp-4',
    '5 lines': 'line-clamp-5'
  }

  const card_heading_text = text('Heading Text', 'Full-Time, Internship')

  const card_subheading_text = text('Subheading Text', 'Software Engineer')

  const card_location_text = text('Location Text', 'Mountain View, CA')

  const card_heading_line_clamp = select(
    'Heading Line Clamp',
    line_clamp,
    'line-clamp-1'
  )

  const card_subheading_line_clamp = select(
    'Subheading Line Clamp',
    line_clamp,
    'line-clamp-2'
  )

  const card_location_line_clamp = select(
    'Location Line Clamp',
    line_clamp,
    'line-clamp-5'
  )

  return `
    <div class="card">
      <div class="card-header bg-transparent d-flex pb-0 mb-0 align-items-start">
        <div class="card-logo">
          <svg class="bd-placeholder-img rounded" width="80" height="80" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Logo" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Logo</text></svg>
        </div>
        <div class="card-actions d-flex flex-grow-1 justify-content-end align-items-start">
          <button type="button" class="btn btn-action btn-action-icon-only rounded-circle me-3">
            <svg class="icon-xl-font-size mt-n1">
              <use xlink:href="${iconSprite}#tabler-thumb-down" />
              <span class="visually-hidden">Thumbs Down</span>
            </svg>
          </button>
          <button type="button" class="btn btn-action btn-action-icon-only rounded-circle">
            <svg class="icon-xl-font-size mt-n1">
              <use xlink:href="${iconSprite}#tabler-star" />
              <span class="visually-hidden">Favorite</span>
            </svg>
          </button>
        </div>
      </div>
      <div class="card-body">
        <h5 class="card-title text-uppercase h6">
          <b><span class="${card_heading_line_clamp}">${card_heading_text}</span></b>
        </h5>
        <h6 class="h3 text-capitalize mb-1">
          <span class="${card_subheading_line_clamp}">${card_subheading_text}</span>
        </h6>
        <p class="card-text mb-3">
          <span class="${card_location_line_clamp}">${card_location_text}</span>
        </p>
        <p class="card-text mb-0">
          <span class="fs-6 text-muted mb-0">5d ago</span>
        </p>
      </div>
    </div>  
  `
}

Card.storyName = 'Job Post'

Card.parameters = {
  notes: `

  #Notes
  Some info about cards: https://www.nngroup.com/articles/cards-component/
  
  #Sample Code

  \`\`\`html
  ${card}
  \`\`\`

  `
}
