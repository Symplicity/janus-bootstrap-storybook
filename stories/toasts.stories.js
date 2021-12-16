import { document, setTimeout } from 'global'

window.bootstrap = bootstrap

export default {
  title: 'Components/Toasts'
}

const toast_live_html = `
  <button type="button" class="btn btn-primary" id="liveToastBtn">Show live toast</button>

  <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
    <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <svg class="bd-placeholder-img rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#007aff"></rect></svg>
        <strong class="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">
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
    $(function () {
      var toastTrigger = document.getElementById('liveToastBtn')
      var toastLiveExample = document.getElementById('liveToast')
      if (toastTrigger) {
        toastTrigger.addEventListener('click', function () {
          var toast = new bootstrap.Toast(toastLiveExample)
          toast.show()
        })
      }
    })
  }, 0)

  return container[0]
}

ToastLive.storyName = 'Primary'

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
