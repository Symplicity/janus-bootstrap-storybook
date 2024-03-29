export default {
  title: 'Components/Popovers'
}

const moreDocumentation = `
#Additional Documentation
For additional documentation, see:

- Bootstrap Documentation
- Design System 

`

let popovers_html = `
<button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
Popover on top
</button>

<button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="right" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
Popover on right
</button>

<button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
Popover on bottom
</button>

<button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
Popover on left
</button>`

export const story1 = () => {
  const container = $(
    '<div class="text-center" style="margin-top:100px"></div>'
  ).append(popovers_html)

  setTimeout(function () {
    var popoverTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="popover"]')
    )
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl)
    })
  }, 0)

  return container[0]
}
story1.storyName = 'Popovers'

story1.parameters = {
  notes: `

    #Declarative Popovers

    ###HTML

    \`\`\`html
    ${popovers_html}
    \`\`\`
    
    ###JavaScript (Bootstrap/jQuery)
    Call the popover plugin function for each popover.

    \`\`\`js
    $('[data-bs-toggle="popover"]').popover();
    \`\`\`
    
    ${moreDocumentation}
    
  `
}
