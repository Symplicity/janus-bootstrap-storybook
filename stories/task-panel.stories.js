import iconSprite from '../node_modules/@symplicity/tabler-icons/symplicity/tabler-sprite-nostroke.svg'

export default {
  title: 'Components/Task Panel'
}

const moreDocumentation = `
#Additional Documentation
For additional documentation, see:

- Bootstrap Documentation
- Design System 

`

const task_panel_collapsed_html = `
<section id="collapse-3" class="card">
      <div class="d-flex align-items-center bg-light rounded">
          <p class="flex-grow-1 m-0 p-0">
            <button aria-expanded="false" aria-controls="collapse-content-3" class="d-flex align-items-center flex btn w-100 fw-normal text-start py-2 px-3" type="button">
              <svg class="icon-lg-font-size">
                <use xlink:href="${iconSprite}#tabler-chevron-right" />
              </svg>
              <span>
                Tasks
                <span class="text-muted">(0)</span>
              </span>
            </button>
          </p>
          <button type="button" class="py-2 px-3 btn minw-0" aria-label="Add Task" title="Add Task">
            <svg class="icon-lg-font-size mt-n1">
              <use xlink:href="${iconSprite}#tabler-circle-plus" />
            </svg>
          </button>
      </div>
      <div id="collapse-content-3" class="card-body p-0 d-none">
        <p class="text-muted">No tasks</p>
      </div>
    </section>
`

export const TaskPanelCollapsed = () => {
  const container = $('<div style="margin: 50px;"></div>').append(
    task_panel_collapsed_html
  )

  return container[0]
}

TaskPanelCollapsed.storyName = 'Collapsed'

TaskPanelCollapsed.parameters = {
  notes: `

    # Task Panel Collapsed

    ###HTML

    \`\`\`html
    ${task_panel_collapsed_html}
    \`\`\`
    
    ${moreDocumentation}
    
  `
}

const task_panel_empty_html = `
<section id="collapse-2" class="card">
    <div class="d-flex align-items-center bg-light rounded-top">
        <p class="flex-grow-1 m-0 p-0">
          <button aria-expanded="true" aria-controls="collapse-content-2" class="d-flex align-items-center btn w-100 fw-normal text-start py-2 px-3" type="button">
            <svg class="icon-lg-font-size me-2">
              <use xlink:href="${iconSprite}#tabler-chevron-down" />
            </svg>
            <span>
              Tasks
              <span class="text-muted">(0)</span>
            </span>
          </button>
        </p>
        <button type="button" class="py-2 px-3 btn minw-0" aria-label="Add Task" title="Add Task">
          <svg class="icon-lg-font-size mt-n1">
            <use xlink:href="${iconSprite}#tabler-circle-plus" />
          </svg>
        </button>
    </div>
    <div id="collapse-content-2" class="card-body p-0">
      <p class="text-muted py-2 px-3 m-0">No tasks</p>
    </div>
  </section>
`

export const TaskPanelEmpty = () => {
  const container = $('<div style="margin: 50px;"></div>').append(
    task_panel_empty_html
  )

  return container[0]
}

TaskPanelEmpty.storyName = 'Empty'

TaskPanelEmpty.parameters = {
  notes: `

    # Task Panel Empty

    ###HTML

    \`\`\`html
    ${task_panel_empty_html}
    \`\`\`
    
    ${moreDocumentation}
    
  `
}

const task_panel_expanded_html = `
<section id="collapse-1" class="card">
      <div class="d-flex align-items-center bg-light rounded-top">
          <p class="flex-grow-1 m-0 p-0">
            <button aria-expanded="true" aria-controls="collapse-content-1" class="d-flex align-items-center btn w-100 fw-normal text-start py-2 px-3" type="button">
              <svg class="icon-lg-font-size me-2">
                <use xlink:href="${iconSprite}#tabler-chevron-down" />
              </svg>
              <span>
                Tasks
                <span class="text-muted">(3)</span>
              </span>
            </button>
          </p>
          <button type="button" class="py-2 px-3 btn minw-0" aria-label="Add Task" title="Add Task">
            <svg class="icon-lg-font-size mt-n1">
              <use xlink:href="${iconSprite}#tabler-circle-plus" />
            </svg>
          </button>
      </div>
      <div id="collapse-content-1" class="card-body p-0">
        <form>
          <fieldset>
            <legend class="visually-hidden">Tasks for this stage</legend>
            <ol class="list-unstyled list-on-hover my-1">
              <li>
                <div class="d-flex align-items-start ps-3 pe-2 py-2">
                  <div class="flex-grow-1">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="task-1">
                      <label class="form-check-label" for="task-1">
                        Task 1
                        <span class="badge bg-secondary ms-1">Required</span>
                        <span class="visually-hidden">Incomplete</span>
                        <br />
                        <span class="text-muted">Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec rutrum congue leo eget malesuada. Donec sollicitudin molestie malesuada.</span>
                        <br />
                        <span class="visually-hidden">Due on:</span>
                        <span class="text-muted fs-7">November 1, 2021 at 2:30 pm</span>
                        <br />
                        <span class="visually-hidden">Assigned to:</span>
                        <span class="text-muted fs-7">Clint Barton</span>
                      </label>
                    </div>
                    <div class="mt-2 ms-4"><button type="button" class="btn btn-sm btn-primary">Upload Document</button></div>
                  </div>
                  
                  <div class="dropdown show-on-focus">
                    <button type="button" class="btn p-2" href="#" title="Actions for Task 1" aria-label="Actions for Task 1" id="dropdownMenuLink1" data-bs-toggle="dropdown" aria-expanded="false">
                      <svg class="icon-base-font-size mt-n1">
                        <use xlink:href="${iconSprite}#tabler-dots" />
                      </svg>
                    </button>
                    <ul class="dropdown-menu shadow-sm" aria-labelledby="dropdownMenuLink1">
                      <li><a class="dropdown-item" href="#">Mark Completed</a></li>
                      <li><a class="dropdown-item" href="#">Edit</a></li>
                      <li><a class="dropdown-item" href="#">Cancel</a></li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <div class="d-flex align-items-start ps-3 pe-2 py-2">
                  <div class="flex-grow-1">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="task-2" checked>
                      <label class="form-check-label text-muted" for="task-2">
                        <strike>
                          Task 2
                        <span class="visually-hidden">Completed</span>
                        <br />
                        <span class="text-muted">Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec rutrum congue leo eget malesuada. Donec sollicitudin molestie malesuada.</span></strike>
                      </label>
                    </div>
                    <div class="mt-2 ms-4"><button type="button" class="btn btn-sm btn-primary" disabled>Upload Document</button></div>
                  </div>
                  <div class="dropdown show-on-focus">
                    <button type="button" class="btn p-2" href="#" title="Actions for Task 1" aria-label="Actions for Task 1" id="dropdownMenuLink2" data-bs-toggle="dropdown" aria-expanded="false">
                      <svg class="icon-base-font-size mt-n1">
                        <use xlink:href="${iconSprite}#tabler-dots" />
                      </svg>
                    </button>
                    <ul class="dropdown-menu shadow-sm" aria-labelledby="dropdownMenuLink2">
                      <li><a class="dropdown-item" href="#">Mark Incomplete</a></li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <div class="d-flex align-items-start ps-3 pe-2 py-2">
                  <div class="flex-grow-1">
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="task-3" checked>
                    <label class="form-check-label text-muted" for="task-3">
                      <strike>
                        Task 3 <span class="visually-hidden">Completed</span>
                      <br />
                      <span class="text-muted">Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec rutrum congue leo eget malesuada. Donec sollicitudin molestie malesuada.</span></strike>
                      
                    </label>
                  </div>
                  </div>
                  <div class="dropdown show-on-focus">
                    <button type="button" class="btn p-2" href="#" title="Actions for Task 1" aria-label="Actions for Task 1" id="dropdownMenuLink3" data-bs-toggle="dropdown" aria-expanded="false">
                      <svg class="icon-base-font-size mt-n1">
                        <use xlink:href="${iconSprite}#tabler-dots" />
                      </svg>
                    </button>
                    <ul class="dropdown-menu shadow-sm" aria-labelledby="dropdownMenuLink3">
                      <li><a class="dropdown-item" href="#">Mark Incomplete</a></li>
                    </ul>
                  </div>
                </div>
            </li>
          </ol>
          </fieldset>
        </form>
      </div>
      <div class="p-2 pt-0">
        <a href="#" class="btn fs-7">View all Tasks</a>
      </div>
    </section>
`

export const TaskPanelExpanded = () => {
  const container = $('<div style="margin: 50px;"></div>').append(
    task_panel_expanded_html
  )

  return container[0]
}

TaskPanelExpanded.storyName = 'Expanded'

TaskPanelExpanded.parameters = {
  notes: `

    # Task Panel Expanded

    ###HTML

    \`\`\`html
    ${task_panel_expanded_html}
    \`\`\`
    
    ${moreDocumentation}
    
  `
}
