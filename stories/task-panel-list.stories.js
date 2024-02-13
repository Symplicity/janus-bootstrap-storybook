import iconSprite from '../node_modules/@tabler/icons/tabler-sprite-nostroke.svg'

export default {
  title: 'Components/Task Panel/List'
}

const moreDocumentation = `
#Additional Documentation
For additional documentation, see:

- Bootstrap Documentation
- Design System 

`

const task_panel_list_received_html = `
<h2 class="text-muted fs-7 text-uppercase text-spaced mt-3 mb-2 mx-3">Case Received</h2>
  <ol class="list-unstyled my-1 list-on-hover">
    <li class="d-flex align-items-center">
      <div class="flex-grow-1 position-relative px-3 py-2">
        <h3 class="m-0">
          <a class="stretched-link fs-4 text-decoration-underline" href="#">Task 1</a>
        </h3>
        <p class="m-0 text-mute">Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec rutrum congue leo eget malesuada. Donec sollicitudin molestie malesuada.
        </p>
        <p class="m-0">
          <span class="visually-hidden">Due on:</span>
          <span class="text-muted fs-7">November 1, 2021 at 2:30 pm</span>
        </p>
        <p class="m-0">
          <span class="visually-hidden">Assigned to:</span>
          <span class="text-muted fs-7">Clint Barton</span>
        </p>
        <p class="m-0 mt-1">
          <span class="visually-hidden">Status:</span>
          <span class="badge bg-secondary">Required</span>
          <span class="badge bg-secondary">Incomplete</span>
        </p>
      </div>
      <div class="dropdown show-on-focus me-2">
        <button type="button" class="btn p-2" href="#" title="Actions for Task 1" aria-label="Actions for Task 1" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
          <svg class="icon-base-font-size">
            <use xlink:href="${iconSprite}#tabler-dots" />
          </svg>
        </button>
        <ul class="dropdown-menu shadow-sm" aria-labelledby="dropdownMenuLink">
          <li><a class="dropdown-item" href="#">Mark Completed</a></li>
          <li><a class="dropdown-item" href="#">Edit</a></li>
          <li><a class="dropdown-item" href="#">Cancel</a></li>
        </ul>
      </div>
    </li>
    <li class="d-flex align-items-center">
      <div class="flex-grow-1 position-relative px-3 py-2">
        <h3 class="m-0 text-muted">
          <a class="stretched-link fs-4 text-decoration-underline" href="#"><strike>Task 1</strike></a>
        </h3>
        <p class="m-0 text-muted"><strike>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec rutrum congue leo eget malesuada. Donec sollicitudin molestie malesuada.</strike>
        </p>
        <p class="m-0">
          <span class="visually-hidden">Due on:</span>
          <span class="text-muted fs-7">November 1, 2021 at 2:30 pm</span>
        </p>
        <p class="m-0">
          <span class="visually-hidden">Assigned to:</span>
          <span class="text-muted fs-7">Clint Barton</span>
        </p>
        <p class="m-0 mt-1">
          <span class="visually-hidden">Status:</span>
          <span class="badge bg-success">Completed</span>
        </p>
      </div>
      <div class="dropdown show-on-focus me-2">
        <button type="button" class="btn p-2" href="#" title="Actions for Task 1" aria-label="Actions for Task 1" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
          <svg class="icon-base-font-size">
            <use xlink:href="${iconSprite}#tabler-dots" />
          </svg>
        </button>
        <ul class="dropdown-menu shadow-sm" aria-labelledby="dropdownMenuLink">
          <li><a class="dropdown-item" href="#">Mark Incomplete</a></li>
        </ul>
      </div>
    </li>
    <li class="d-flex align-items-center">
      <div class="flex-grow-1 position-relative px-3 py-2">
        <h3 class="m-0 text-muted">
          <a class="stretched-link fs-4 text-decoration-underline" href="#"><strike>Task 1</strike></a>
        </h3>
        <p class="m-0 text-muted"><strike>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec rutrum congue leo eget malesuada. Donec sollicitudin molestie malesuada.</strike>
        </p>
        <p class="m-0">
          <span class="visually-hidden">Due on:</span>
          <span class="text-muted fs-7">November 1, 2021 at 2:30 pm</span>
        </p>
        <p class="m-0">
          <span class="visually-hidden">Assigned to:</span>
          <span class="text-muted fs-7">Clint Barton</span>
        </p>
        <p class="m-0 mt-1">
          <span class="visually-hidden">Status:</span>
          <span class="badge bg-danger">Cancelled</span>
        </p>
      </div>
      <div class="dropdown show-on-focus me-2">
        <button type="button" class="btn p-2" href="#" title="Actions for Task 1" aria-label="Actions for Discuss Incident" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
          <svg class="icon-base-font-size">
            <use xlink:href="${iconSprite}#tabler-dots" />
          </svg>
        </button>
        <ul class="dropdown-menu shadow-sm" aria-labelledby="dropdownMenuLink">
          <li><a class="dropdown-item" href="#">Restore</a></li>
        </ul>
      </div>
    </li>
  </ol>
`

export const TaskPanelListReceived = () => {
  const container = $('<div style="margin: 50px;"></div>').append(
    task_panel_list_received_html
  )

  return container[0]
}

TaskPanelListReceived.storyName = 'Received'

TaskPanelListReceived.parameters = {
  notes: `

    # Task Panel List Received

    ###HTML

    \`\`\`html
    ${task_panel_list_received_html}
    \`\`\`
    
    ${moreDocumentation}
    
  `
}

const task_panel_list_opened_html = `
<h2 class="text-muted fs-7 text-uppercase text-spaced mt-5 mb-2 mx-3">Case Opened</h2>
  <ol class="list-unstyled my-1 list-on-hover">
    <li class="d-flex align-items-center">
      <div class="flex-grow-1 position-relative px-3 py-2">
        <h3 class="m-0">
          <a class="stretched-link fs-4 text-decoration-underline" href="#">Task 1</a>
        </h3>
        <p class="m-0 text-mute">Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec rutrum congue leo eget malesuada. Donec sollicitudin molestie malesuada.
        </p>
        <p class="m-0">
          <span class="visually-hidden">Due on:</span>
          <span class="text-muted fs-7">November 1, 2021 at 2:30 pm</span>
        </p>
        <p class="m-0">
          <span class="visually-hidden">Assigned to:</span>
          <span class="text-muted fs-7">Clint Barton</span>
        </p>
        <p class="m-0 mt-1">
          <span class="visually-hidden">Status:</span>
          <span class="badge bg-secondary">Required</span>
          <span class="badge bg-secondary">Incomplete</span>
        </p>
      </div>
      <div class="dropdown show-on-focus me-2">
        <button type="button" class="btn p-2" href="#" title="Actions for Task 1" aria-label="Actions for Task 1" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
          <svg class="icon-base-font-size">
            <use xlink:href="${iconSprite}#tabler-dots" />
          </svg>
        </button>
        <ul class="dropdown-menu shadow-sm" aria-labelledby="dropdownMenuLink">
          <li><a class="dropdown-item" href="#">Mark Completed</a></li>
          <li><a class="dropdown-item" href="#">Edit</a></li>
          <li><a class="dropdown-item" href="#">Cancel</a></li>
        </ul>
      </div>
    </li>
  </ol>
`

export const TaskPanelListOpened = () => {
  const container = $('<div style="margin: 50px;"></div>').append(
    task_panel_list_opened_html
  )

  return container[0]
}

TaskPanelListOpened.storyName = 'Opened'

TaskPanelListOpened.parameters = {
  notes: `

    # Task Panel List Opened

    ###HTML

    \`\`\`html
    ${task_panel_list_opened_html}
    \`\`\`
    
    ${moreDocumentation}
    
  `
}

const task_panel_list_closed_html = `
<h2 class="text-muted fs-7 text-uppercase text-spaced mt-5 mb-2 mx-3">Case Closed</h2>
  <ol class="list-unstyled my-1 list-on-hover">
    <li class="d-flex align-items-center">
      <div class="flex-grow-1 position-relative px-3 py-2">
        <h3 class="m-0">
          <a class="stretched-link fs-4 text-decoration-underline" href="#">Task 1</a>
        </h3>
        <p class="m-0 text-mute">Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec rutrum congue leo eget malesuada. Donec sollicitudin molestie malesuada.
        </p>
        <p class="m-0">
          <span class="visually-hidden">Due on:</span>
          <span class="text-muted fs-7">November 1, 2021 at 2:30 pm</span>
        </p>
        <p class="m-0">
          <span class="visually-hidden">Assigned to:</span>
          <span class="text-muted fs-7">Clint Barton</span>
        </p>
        <p class="m-0 mt-1">
          <span class="visually-hidden">Status:</span>
          <span class="badge bg-secondary">Required</span>
          <span class="badge bg-secondary">Incomplete</span>
        </p>
      </div>
      <div class="dropdown show-on-focus me-2">
        <button type="button" class="btn p-2" href="#" title="Actions for Task 1" aria-label="Actions for Task 1" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
          <svg class="icon-base-font-size">
            <use xlink:href="${iconSprite}#tabler-dots" />
          </svg>
        </button>
        <ul class="dropdown-menu shadow-sm" aria-labelledby="dropdownMenuLink">
          <li><a class="dropdown-item" href="#">Mark Completed</a></li>
          <li><a class="dropdown-item" href="#">Edit</a></li>
          <li><a class="dropdown-item" href="#">Cancel</a></li>
        </ul>
      </div>
    </li>
  </ol>
`

export const TaskPanelListClosed = () => {
  const container = $('<div style="margin: 50px;"></div>').append(
    task_panel_list_closed_html
  )

  return container[0]
}

TaskPanelListClosed.storyName = 'Closed'

TaskPanelListClosed.parameters = {
  notes: `

    # Task Panel List Closed

    ###HTML

    \`\`\`html
    ${task_panel_list_closed_html}
    \`\`\`
    
    ${moreDocumentation}
    
  `
}
