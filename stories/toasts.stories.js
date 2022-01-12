import iconSprite from '../node_modules/@symplicity/tabler-icons/symplicity/tabler-sprite-nostroke.svg'

import * as bootstrap from 'bootstrap'

window.bootstrap = bootstrap

export default {
  title: 'Components/Toasts'
}

const toast_live_html = `
  <button type="button" class="btn btn-primary" id="liveToastBtn">Show live toast</button>

  <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
    <div id="liveToast" class="toast w-sm-auto" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <svg class="bd-placeholder-img rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#007aff"></rect></svg>
        <strong class="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body text-start">
        Hello, world! This is a toast message.
      </div>
    </div>
  </div>
`

export const ToastLive = () => {
  const container = $(
    '<div class="text-center" style="margin-top:100px"></div>'
  ).append(toast_live_html)

  setTimeout(function () {
    var toastTrigger = document.getElementById('liveToastBtn')
    var toastLiveExample = document.getElementById('liveToast')
    if (toastTrigger) {
      toastTrigger.addEventListener('click', function () {
        var toast = new bootstrap.Toast(toastLiveExample)
        toast.show()
      })
    }
  }, 0)

  return container[0]
}

ToastLive.storyName = 'Live'

ToastLive.parameters = {
  notes: `
  #Toast Live
    
  Toast Live alerts should be used to confirm that an important task or workflow has been completed.

  ##Sample Code
  
  \`\`\`html
  ${toast_live_html}
  \`\`\`
  `
}

const toast_html = `
<div class="toast align-items-center text-white bg-success border-0 fade show" role="alert" aria-live="assertive" aria-atomic="true" style="max-width: fit-content">
  <div class="toast-body d-flex">
    <div class="flex-shrink-1 d-flex">
      <svg width="1.5rem" height="1.5rem" class="me-2">
        <use xlink:href="/path/to/icon-sprite.svg#tabler-icon-name" />
      </svg>
    </div>
    <div class="flex-grow-1 me-3">
      <p class="mb-0">File updated.</p>
    </div>
    <div class="flex-shrink-1 mt-n1 mb-n1">
      <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close">
      </button>
    </div>
  </div>
</div>

<div class="toast align-items-center text-white bg-success border-0 fade show" role="alert" aria-live="assertive" aria-atomic="true" style="max-width: fit-content">
  <div class="toast-body d-flex">
    <div class="flex-shrink-1 d-flex">
      <svg width="1.5rem" height="1.5rem" class="me-2">
        <use xlink:href="/path/to/icon-sprite.svg#tabler-icon-name" />
      </svg>
    </div>
    <div class="flex-grow-1 me-3">
      <div class="d-flex">
        <div class="flex-fill">
          <p class="mb-0">File updated.</p>
        </div>
        <div class="flex-fill text-end">
          <a href="#" class="text-white text-decoration-underline fw-normal ms-4">Action</a>
        </div>
      </div>
    </div>
    <div class="flex-shrink-1 mt-n1 mb-n1">
      <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close">
      </button>
    </div>
  </div>
</div>

<div class="toast align-items-center text-white bg-success border-0 fade show" role="alert" aria-live="assertive" aria-atomic="true" style="max-width: fit-content">
  <div class="toast-body d-flex">
    <div class="flex-shrink-1 d-flex">
      <svg width="1.5rem" height="1.5rem" class="me-2">
        <use xlink:href="/path/to/icon-sprite.svg#tabler-icon-name" />
      </svg>
    </div>
    <div class="flex-grow-1">
      <div>
        <p class="mb-0">
          Multiple lines of text. Curabitur blandit temppus porttitor. Nullam id dolor id nibh ultricies vehicula.
        </p>
      </div>
      <div class="text-end">
        <a href="#" class="text-white text-decoration-underline fw-normal ms-4">Action</a>
      </div>
    </div>
    <div class="flex-shrink-1 mt-n1 mb-n1">
      <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close">
      </button>
    </div>
  </div>
</div>
`

const Toasts = (args) => `
<div class="toast align-items-center text-white bg-${
  args.class
} border-0 fade show" role="alert" aria-live="assertive" aria-atomic="true" style="max-width: fit-content">
  <div class="toast-body d-flex">
    <div class="flex-shrink-1 ${args.show ? `d-flex` : `d-none`}">
      <svg width="1.5rem" height="1.5rem" class="me-2">
        <use xlink:href="${iconSprite}#tabler-${args.icon}" />
      </svg>
    </div>
    <div class="flex-grow-1 me-3">
      <p class="mb-0">File updated.</p>
    </div>
    <div class="flex-shrink-1 mt-n1 mb-n1">
      <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close">
      </button>
    </div>
  </div>
</div>

<div class="toast align-items-center text-white bg-${
  args.class
} border-0 fade show" role="alert" aria-live="assertive" aria-atomic="true" style="max-width: fit-content">
  <div class="toast-body d-flex">
    <div class="flex-shrink-1 ${args.show ? `d-flex` : `d-none`}">
      <svg width="1.5rem" height="1.5rem" class="me-2">
        <use xlink:href="${iconSprite}#tabler-${args.icon}" />
      </svg>
    </div>
    <div class="flex-grow-1 me-3">
      <div class="d-flex">
        <div class="flex-fill">
          <p class="mb-0">File updated.</p>
        </div>
        <div class="flex-fill text-end">
          <a href="#" class="text-white text-decoration-underline fw-normal ms-4">Action</a>
        </div>
      </div>
    </div>
    <div class="flex-shrink-1 mt-n1 mb-n1">
      <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close">
      </button>
    </div>
  </div>
</div>

<div class="toast align-items-center text-white bg-${
  args.class
} border-0 fade show" role="alert" aria-live="assertive" aria-atomic="true" style="max-width: fit-content">
  <div class="toast-body d-flex">
    <div class="flex-shrink-1 ${args.show ? `d-flex` : `d-none`}">
      <svg width="1.5rem" height="1.5rem" class="me-2">
        <use xlink:href="${iconSprite}#tabler-${args.icon}" />
      </svg>
    </div>
    <div class="flex-grow-1">
      <div>
        <p class="mb-0">
          Multiple lines of text. Curabitur blandit temppus porttitor. Nullam id dolor id nibh ultricies vehicula.
        </p>
      </div>
      <div class="text-end">
        <a href="#" class="text-white text-decoration-underline fw-normal ms-4">Action</a>
      </div>
    </div>
    <div class="flex-shrink-1 mt-n1 mb-n1">
      <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close">
      </button>
    </div>
  </div>
</div>
`

export const Info = Toasts.bind()

Info.args = {
  icon: 'info-circle',
  class: 'info',
  show: true
}

Info.parameters = {
  notes: `
  #Info Toast
    
  Info Toasts should be used to confirm that an important task or workflow has been completed.

  ##Sample Code
  
  \`\`\`html
  ${toast_html}
  \`\`\`
  `
}

export const Success = Toasts.bind()

Success.args = {
  icon: 'circle-check',
  class: 'success',
  show: true
}

Success.parameters = {
  notes: `
  #Success Toast
    
  Success Toasts should be used to confirm that an important task or workflow has been completed.

  ##Sample Code
  
  \`\`\`html
  ${toast_html}
  \`\`\`
  `
}

export const Error = Toasts.bind()

Error.args = {
  icon: 'alert-circle',
  class: 'danger',
  show: true
}

Error.parameters = {
  notes: `
  #Error Toast
    
  Error Toasts should be used to confirm that an important task or workflow has been completed.

  ##Sample Code
  
  \`\`\`html
  ${toast_html}
  \`\`\`
  `
}

export const Warning = Toasts.bind()

Warning.args = {
  icon: 'alert-triangle',
  class: 'warning',
  show: true
}

Warning.parameters = {
  notes: `
  #Warning Toast
    
  Warning Toasts should be used to confirm that an important task or workflow has been completed.

  ##Sample Code
  
  \`\`\`html
  ${toast_html}
  \`\`\`
  `
}

export const Neutral = Toasts.bind()

Neutral.args = {
  icon: '',
  class: 'dark',
  show: false
}

Neutral.parameters = {
  notes: `
  #Neutral Toast
    
  Neutral Toasts should be used to confirm that an important task or workflow has been completed.

  ##Sample Code
  
  \`\`\`html
  ${toast_html}
  \`\`\`
  `
}
