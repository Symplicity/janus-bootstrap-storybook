import iconSprite from '../node_modules/@symplicity/tabler-icons/symplicity/tabler-sprite-nostroke.svg'

export default {
  title: 'Components/List Items'
}

const moreDocumentation = `
#Additional Documentation
For additional documentation, see:

- Bootstrap Documentation
- Design System 

`

const case_type_html = `
<div>test</div>
`

export const CaseType = () => {
  const container = $('<div style="margin: 0;"></div>').append(case_type_html)

  return container[0]
}

CaseType.storyName = 'Case Type'

CaseType.parameters = {
  notes: `

    # Case Type

    ###HTML

    \`\`\`html
    ${case_type_html}
    \`\`\`
    
    ${moreDocumentation}
    
  `
}
