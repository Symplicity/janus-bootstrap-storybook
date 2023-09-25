import iconSprite from '../node_modules/@symplicity/tabler-icons/tabler-sprite-nostroke.svg'

export default {
  title: 'Components/Timeline'
}

const moreDocumentation = `
#Additional Documentation
For additional documentation, see:

- Bootstrap Documentation
- Design System 

`

const timeline_collapsed_html = `
  <div>
    <ol class="list-unstyled mb-0">
      <li class="list-item-timeline position-relative">
        <div class="list-item-timeline-body pb-4 ms-4">
          <h3 class="d-flex h4 fw-semibold align-items-center gap-2">
            Sep 21, 2020 
            <span class="badge bg-primary">Overturned</span> 
          </h3>
          <p class="m-0">Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Pellentesque in ipsum id orci porta dapibus.</p>
        </div>
      </li>
    </ol>
    <button type="button" class="btn d-flex align-items-center gap-1 fw-normal">
      <svg class="icon-base-font-size mt-n1">
        <use xlink:href="${iconSprite}#tabler-chevron-right" />
      </svg>
    Show History (2)</button>
  </div>
`

export const TimelineCollapsed = () => {
  const container = $('<div style="margin: 50px;"></div>').append(
    timeline_collapsed_html
  )

  return container[0]
}

TimelineCollapsed.storyName = 'Collapsed'

TimelineCollapsed.parameters = {
  notes: `

    # Timeline Collapsed

    ###HTML

    \`\`\`html
    ${timeline_collapsed_html}
    \`\`\`
    
    ${moreDocumentation}
    
  `
}

const timeline_expanded_html = `
  <div>
    <ol class="list-unstyled mb-0">
      <li class="list-item-timeline position-relative">
        <div class="list-item-timeline-body pb-4 ms-4">
          <h3 class="d-flex h4 fw-semibold align-items-center gap-2">
            Sep 21, 2020 
            <span class="badge bg-primary">Overturned</span> 
          </h3>
          <p class="m-0">Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Pellentesque in ipsum id orci porta dapibus.</p>
          <div class="mt-2">
          <button type="button" class="btn btn-primary minw-0">action</button>
          </div>
        </div>
      </li>
      <li class="list-item-timeline position-relative">
        <div class="list-item-timeline-body pb-4 ms-4">
          <h3 class="d-flex h4 fw-semibold align-items-center gap-2">
            Sep 21, 2020 
            <span class="badge bg-light text-dark">Responsible</span> 
          </h3>
          <p class="m-0">Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Pellentesque in ipsum id orci porta dapibus.</p>
        </div>
      </li>
      <li class="list-item-timeline position-relative">
        <div class="list-item-timeline-body pb-4 ms-4">
          <h3 class="d-flex h4 fw-semibold align-items-center gap-2">
            Sep 21, 2020 
            <span class="badge bg-light text-dark">Responsible</span> 
          </h3>
          <p class="m-0">Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Pellentesque in ipsum id orci porta dapibus.</p>
        </div>
      </li>
    </ol>
    <button type="button" class="btn d-flex align-items-center gap-1 fw-normal">
      <svg class="icon-base-font-size mt-n1">
        <use xlink:href="${iconSprite}#tabler-chevron-up" />
      </svg>
    Hide History (2)</button>
  </div>
`

export const TimelineExpanded = () => {
  const container = $('<div style="margin: 50px;"></div>').append(
    timeline_expanded_html
  )

  return container[0]
}

TimelineExpanded.storyName = 'Expanded'

TimelineExpanded.parameters = {
  notes: `

    # Timeline Expanded

    ###HTML

    \`\`\`html
    ${timeline_expanded_html}
    \`\`\`
    
    ${moreDocumentation}
    
  `
}
