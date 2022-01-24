import { document, setTimeout } from 'global'

import iconSprite from '../node_modules/@symplicity/tabler-icons/symplicity/tabler-sprite-nostroke.svg'

export default {
  title: 'Components/Search'
}

const search_desktop_input_html = `
<div class="bg-light rounded m-3 mb-0 p-3 d-lg-none text-center">
  <p class="fs-4 m-4">
    This component only displays above the "lg" breakpoint (992px).<br><br>
    Increase the width of your screen until this message disappears.
  </p>
</div>

<div class="m-3 d-none d-lg-block">
  <div class="dropdown">
    <div class="d-flex align-items-center btn-search btn btn-action btn-action-icon-only btn-action-header" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="true">
      <svg class="icon-xl-font-size mt-n1 ms-0 me-2">
        <use xlink:href="${iconSprite}#tabler-search" />
        <span class="visually-hidden">Open Search Dialog</span>
      </svg>
      <form class="d-flex w-100">
        <label for="search-input" class="visually-hidden">Search</label>
        <input type="text" id="search-input" class="form-control border-0 p-1 bg-transparent" autofocus>
      </form>
    </div>
    <ul class="dropdown-menu btn-search-results p-0" aria-labelledby="dropdownMenuButton2">

    </ul>
  </div>
</div>
`

export const SearchDesktopInput = () => {
  const container = $('<div style="margin: 0;"></div>').append(
    search_desktop_input_html
  )

  setTimeout(function () {
    const createListItems = document.querySelector('.dropdown-menu')
    createListItems.innerHTML = `
      ${Array(5)
        .fill()
        .map(
          (item, i) => `
        <li>
          <a class="dropdown-item d-flex mb-2" href="#" id="item-${i + 1}">
            <span>
              <svg width="1.25rem" height="1.25rem" class="me-2 mt-n1">
                <use xlink:href="${iconSprite}#tabler-search"></use>
              </svg>
            </span>
            <span class="flex-fill">
              Chad Hampton Is A Very Loooooooooong Name - ${i + 1}
            </span>
          </a>
        </li>
      `
        )
        .join('')}
    `
  }, 0)

  return container[0]
}

SearchDesktopInput.storyName = 'Desktop Input'

SearchDesktopInput.parameters = {
  notes: `
  
  #Sample Code

  \`\`\`html
  ${search_desktop_input_html}
  \`\`\`

  `
}

const search_desktop_combo_input_html = `
<div class="bg-light rounded m-3 mb-0 p-3 d-lg-none text-center">
  <p class="fs-4 m-4">
    This component only displays above the "lg" breakpoint (992px).<br><br>
    Increase the width of your screen until this message disappears.
  </p>
</div>

<div class="m-3 d-none d-lg-block">
  <div class="">
    <div class="d-flex align-items-center btn-search btn btn-action btn-action-icon-only btn-action-header" type="button" id="dropdownMenuButton1" data-toggle="collapse">
      <svg class="icon-xl-font-size mt-n1 ms-0 me-2">
        <use xlink:href="${iconSprite}#tabler-search" />
        <span class="visually-hidden">Open Search Dialog</span>
      </svg>
    </div>
  </div>
</div>

<div class="m-3 d-none d-lg-block">
  <div class="d-flex align-items-center btn-search btn-search-combo btn btn-action btn-action-icon-only btn-action-header p-0 border-0 shadow-lg" role="button">
    <form class="d-flex w-100 rounded-pill">
      <!-- input -->
      <select class="search-select fs-6 form-select rounded-pill mr-0" aria-label="Search input">
        <option selected>search in...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Threeeeeeeee</option>
      </select>
      <div class="input-group flex-nowrap rounded-pill overflow-hidden">
        <input class="search-input fs-6 form-control border-0" type="text" id="myInput" aria-label="Search input" aria-describedby="addon-wrapping" autofocus>
        <button class="input-group-text border-0 ms-0" id="addon-wrapping">
          <svg class="icon-lg-font-size m-0">
            <use xlink:href="${iconSprite}#tabler-search" />
            <span class="visually-hidden">Open Search Dialog</span>
          </svg>
        </button>
      </div>
    </form>
  </div>
</div>
`

export const SearchDesktopComboInput = () => {
  const container = $('<div style="margin: 0;"></div>').append(
    search_desktop_combo_input_html
  )

  setTimeout(function () {
    // For demonstration purposes only, do not use in production

    var $myInput = $('#myInput')
    $myInput.focus()

    $('select')
      .change(function () {
        var text = $(this).find('option:selected').text()
        var $aux = $('<select/>').append($('<option/>').text(text))
        var myInput = $('#myInput')
        $(this).after($aux)
        $(this).width($aux.width() + 30)
        $aux.remove()

        $myInput.focus()
      })
      .change()
  }, 0)

  return container[0]
}

SearchDesktopComboInput.storyName = 'Desktop Combo Input'

SearchDesktopComboInput.parameters = {
  notes: `
  
  #Sample Code

  \`\`\`html
  ${search_desktop_combo_input_html}
  \`\`\`

  `
}

const search_mobile_input_html = `
<div class="m-3">
  <button data-bs-toggle="modal" data-bs-target="#myModal" class="rounded-circle btn btn-action btn-action-icon-only btn-action-header" type="button">
    <svg class="icon-xl-font-size mt-n1">
      <use xlink:href="${iconSprite}#tabler-search" />
      <span class="visually-hidden">Open Search Dialog</span>
    </svg>
  </button>
</div>

<div class="modal" tabindex="-1" id="myModal" aria-labelledby="modal-title">
  <div class="modal-dialog modal-fullscreen-lg-down" role="document">
    <div class="modal-content">
        <div class="modal-header bg-white p-0">
          <h4 id="modal-title" class="modal-title visually-hidden">Search</h4>
        </div>
        <form>
          <div class="modal-search d-flex m-8 pt-0 mb-0">
            <!-- Back -->
            <div class="d-flex">
              <button type="button" class="btn ms-n3" data-bs-dismiss="modal" aria-label="Close">
                <svg width="1.5rem" height="1.5rem" class="mt-n1">
                  <use xlink:href="${iconSprite}#tabler-chevron-left" />
                </svg>
              </button>
            </div>
            <!-- Input -->
            <div class="d-flex justify-content-between w-100">
              <input type="text" id="myInput" class="form-control border-0 p-0" aria-label="Search" aria-describedby="modal-title">
            </div>
            <!-- Clear --> 
            <div class="d-flex">
              <button type="reset" class="btn btn-close me-n3" aria-label="Clear"></button>
            </div>
          </div>
      </form>
      <hr class="ms-8 me-8">
      <div class="modal-body align-items-start justify-content-center p-0 p-8 pt-0">
        <!-- results -->
        <div class="d-flex">
          <ul class="list-unstyled w-100"></ul>
        </div>
      </div>
    </div>
  </div>
</div>`

export const SearchMobileInput = () => {
  const container = $('<div style="margin: 0;"></div>').append(
    search_mobile_input_html
  )

  setTimeout(function () {
    /* Mimic autofocus attribute in bs.modal: http://localhost:9001/docs/5.0/components/modal/#how-it-works */

    var myModal = document.getElementById('myModal')
    var myInput = document.getElementById('myInput')

    myModal.addEventListener('shown.bs.modal', function () {
      myInput.focus()
    })

    /* Populate results list for testing overflow */

    const createListItems = document.querySelector('.list-unstyled')
    createListItems.innerHTML = `
      ${Array(20)
        .fill()
        .map(
          (item, i) => `
        <li>
          <a class="dropdown-item d-flex p-0 mb-2" href="#" id="item-${i + 1}">
            <span>
              <svg width="1rem" height="1rem" class="me-2 mt-n1">
                <use xlink:href="static/media/tabler-sprite.3d36b3c4.svg#tabler-search"></use>
              </svg>
            </span>
            <span class="flex-fill">
              Chad Hampton Is A Very Loooooooooong Name - ${i + 1}
            </span>
          </a>
        </li>
      `
        )
        .join('')}
    `
  }, 0)

  return container[0]
}

SearchMobileInput.storyName = 'Mobile Input'

SearchMobileInput.parameters = {
  notes: `
  
  #Sample Code

  \`\`\`html
  ${search_mobile_input_html}
  \`\`\`

  `
}

const search_mobile_input_complex_results_html = `
<div class="m-3">
  <button data-bs-toggle="modal" data-bs-target="#myModal" class="rounded-circle btn btn-action btn-action-icon-only btn-action-header me-7" type="button">
    <svg class="icon-xl-font-size mt-n1">
      <use xlink:href="${iconSprite}#tabler-search" />
      <span class="visually-hidden">Open Search Dialog</span>
    </svg>
  </button>
</div>

<div class="modal" tabindex="-1" id="myModal" aria-labelledby="modal-title">
  <div class="modal-dialog modal-fullscreen-lg-down" role="document">
    <div class="modal-content">
        <div class="modal-header bg-white p-0">
          <h4 id="modal-title" class="modal-title visually-hidden">Search</h4>
        </div>
        <form>
          <div class="modal-search d-flex m-8 pt-0 mb-0">
            <!-- Back -->
            <div class="d-flex">
              <button type="button" class="btn ms-n3" data-bs-dismiss="modal" aria-label="Close">
                <svg width="1.5rem" height="1.5rem" class="mt-n1">
                  <use xlink:href="${iconSprite}#tabler-chevron-left" />
                </svg>
              </button>
            </div>
            <!-- Input -->
            <div class="d-flex justify-content-between w-100">
              <input type="text" id="myInput" class="form-control border-0 p-0" aria-label="Search" aria-describedby="modal-title">
            </div>
            <!-- Clear --> 
            <div class="d-flex">
              <button type="reset" class="btn btn-close me-n3" aria-label="Clear"></button>
            </div>
          </div>
      </form>
      <hr class="ms-8 me-8">
      <div class="modal-body align-items-start justify-content-center p-0 p-8 pt-0">
        <!-- results -->
        <div class="d-flex">
          <ul class="list-unstyled w-100"></ul>
        </div>
        <a href="#" class="mt-n2 d-block fw-normal">
          Search all "goog" results
        </a>
      </div>
    </div>
  </div>
</div>`

export const SearchMobileInputComplexResults = () => {
  const container = $('<div style="margin: 0;"></div>').append(
    search_mobile_input_complex_results_html
  )

  setTimeout(function () {
    /* Mimic autofocus attribute in bs.modal: http://localhost:9001/docs/5.0/components/modal/#how-it-works */

    var myModal = document.getElementById('myModal')
    var myInput = document.getElementById('myInput')

    myModal.addEventListener('shown.bs.modal', function () {
      myInput.focus()
    })

    /* Populate results list for testing overflow */

    const createListItems = document.querySelector('.list-unstyled')
    createListItems.innerHTML = `
      ${Array(5)
        .fill()
        .map(
          (item, i) => `
        <li>
          <button class="dropdown-item d-flex p-0 mb-2" href="#" id="item-${
            i + 1
          }">
            <span class="list-avatar rounded-circle m-1 text-center">
              <svg class="icon-lg-font-size mt-2">
                <use xlink:href="${iconSprite}#tabler-building" />
                <span class="visually-hidden">Open Search Dialog</span>
              </svg>
            </span>
            <span class="flex-fill ms-1">
              <span class="d-flex">
                <span class="line-clamp-1">Google</span>
              </span>
              <span class="d-flex">
                <span class="line-clamp-1 fs-6">Employer at a very prestigious institution</span>
              </span>
            </span>
          </button>
        </li>
      `
        )
        .join('')}
    `
  }, 0)

  return container[0]
}

SearchMobileInputComplexResults.storyName = 'Mobile Input Complex Results'

SearchMobileInputComplexResults.parameters = {
  notes: `
  
  #Sample Code

  \`\`\`html
  ${search_mobile_input_complex_results_html}
  \`\`\`

  `
}

const search_mobile_combo_input_html = `
<div class="m-3">
  <button data-bs-toggle="modal" data-bs-target="#myModal" class="rounded-circle btn btn-action btn-action-icon-only btn-action-header me-7" type="button">
    <svg class="icon-xl-font-size mt-n1">
      <use xlink:href="${iconSprite}#tabler-search" />
      <span class="visually-hidden">Open Search Dialog</span>
    </svg>
  </button>
</div>

<div class="modal" tabindex="-1" id="myModal">
  <div class="modal-dialog modal-fullscreen-lg-down" role="document">
    <div class="modal-content">
      <div class="modal-header bg-white">
        <h4 class="modal-title visually-hidden">Search</h4>
        <button type="button" class="btn-close d-flex" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body align-items-start justify-content-center">
        <!-- input -->
        <select class="search-select fs-6 form-select rounded-pill border-0 shadow-lg mb-7" aria-label="Search input">
          <option selected>search in...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <div class="input-group flex-nowrap rounded-pill shadow-lg overflow-hidden">
          <input class="search-input fs-6 form-control border-0" type="text" id="myInput" aria-label="Search input" aria-describedby="addon-wrapping">
          <span class="input-group-text border-0" id="addon-wrapping">
            <svg class="icon-lg-font-size">
              <use xlink:href="${iconSprite}#tabler-search" />
              <span class="visually-hidden">Open Search Dialog</span>
            </svg>
          </span>
        </div>
      </div>
    </div>
  </div>
</div>`

export const SearchMobileComboInput = () => {
  const container = $('<div style="margin: 0;"></div>').append(
    search_mobile_combo_input_html
  )

  setTimeout(function () {
    /* Mimic autofocus attribute in bs.modal: http://localhost:9001/docs/5.0/components/modal/#how-it-works */

    var myModal = document.getElementById('myModal')
    var myInput = document.getElementById('myInput')

    myModal.addEventListener('shown.bs.modal', function () {
      myInput.focus()
    })
  }, 0)

  return container[0]
}

SearchMobileComboInput.storyName = 'Mobile Combo Input'

SearchMobileComboInput.parameters = {
  notes: `
  
  #Sample Code

  \`\`\`html
  ${search_mobile_combo_input_html}
  \`\`\`

  `
}
