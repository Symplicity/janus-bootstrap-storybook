import iconSprite from '../node_modules/@symplicity/tabler-icons/symplicity/tabler-sprite-nostroke.svg'

export default {
  title: 'Examples/Lists/Collection'
}

const listHTML = `
  <div class="mt-7">
    <table class="table align-middle table-borderless fs-5">
      <thead class="border-bottom border-light text-nowrap">
        <tr>
          <th scope="col">Case Type</th>
          <th scope="col">Last Published</th>
          <th scope="col">Status</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-bottom border-light bg-light">
          <td class="lh-1" colspan="4">
            <div class="d-flex align-items-center">
              <div class="flex-fill">
                <div>
                  1
                </div>
                <div>
                  2
                </div>
              </div>
              <div class="flex-fill text-end">
                <div class="d-inline-flex">
                  3
                </div>
                <div class="d-inline-flex">
                  4
                </div>
              </div>
            </div>
          </td>
        </tr>
        <tr class="border-bottom border-light">
          <td class="lh-1">1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
        </tr>
      </tbody>
    </table>  
  </div>
`

export const ListCollection = () => `${listHTML}`

ListCollection.storyName = 'Collection'

ListCollection.parameters = {
  notes: `
    # ListCollection

    ## Documentation
    
    Here are some notes on lists. 
    
    ## Code Sample
    
    \`\`\`html
    ${listHTML}
    \`\`\`
    
    `
}
