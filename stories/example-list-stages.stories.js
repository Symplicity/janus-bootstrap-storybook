import iconSprite from '../node_modules/@symplicity/tabler-icons/symplicity/tabler-sprite-nostroke.svg'

export default {
  title: 'Examples/Lists/Stages'
}

const listStagesHTML = `
<div class="d-flex flex-column vh-100 overflow-hidden">
  <header>LOGO</header>
  <main class="d-flex flex-column flex-grow-1 overflow-auto">
    <div>STEPPER</div>

    <fw-case-type-stage-list class="flex-grow-1 d-flex flex-column overflow-hidden bg-success">
      <div class="p-2 overflow-auto d-flex flex-column">
        <div class="d-flex align-items-center px-4 py-1">
          <span class="fs-4 text-muted">STAGES</span> 
          <button class="btn btn-action">
            <i class="icn-add_circle fs-4 text-muted me-1"></i> <span>Add Stage</span>
          </button>
        </div>

        <div class="bg-danger flex-grow-1 d-flex overflow-hidden">
          <ul class="m-0 bg-success list-unstyled flex-grow-0 d-flex flex-column flex-md-row w-100 h-100 overflow-auto flex-md-nowrap">
            <li class="h-md-100 flex-shrink-0 p-2">
              <div class="card w-100 h-100">
                <div class="card-body overflow-scroll">
                  <section class="p-4">Stage section</section>
                  <section class="p-4">Stage section</section>
                  <section class="p-4">Stage section</section>
                  <section class="p-4">Stage section</section>
                  <section class="p-4">Stage section</section>
                  <section class="p-4">Stage section</section>
                  <section class="p-4">Stage section</section>
                  <section class="p-4">Stage section</section>
                  <section class="p-4">Stage section</section>
                  <section class="p-4">Stage section</section>
                  <section class="p-4">Stage section</section>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </fw-case-type-stage-list>
  </main>

  <footer class="overflow-hidden">
    <button type="button" class="btn btn-primary">Next</button>
  </footer>
</div>
`

export const ListStages = () =>
  `<div style="margin: 0; overflow-x: auto;">${listStagesHTML}</div>`

ListStages.storyName = 'Stages'

ListStages.parameters = {
  notes: `
    # List Stages

    ## Documentation
    
    Here are some notes on lists. 
    
    ## Code Sample
    
    \`\`\`html
    ${listStagesHTML}
    \`\`\`
    
    `
}
