import { document, setTimeout } from 'global';

export default {
  title: 'Components/Typography',
};


const global_html = `<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt purus sit amet rutrum pretium. Aenean neque ligula, accumsan et scelerisque eget, egestas sit amet odio. Nam sollicitudin egestas aliquet. Curabitur lacinia leo vel ornare viverra. Nunc ornare luctus ligula.
</p>`;
export const Global = () => `<div>${global_html}</div>`;

Global.storyName = 'Global';

Global.parameters = { 
  notes: `
  
  #Sample Code

  \`\`\`html
  ${global_html}
  \`\`\`

  `
};

const headings_html = `<div>
    <h1>h1. Bootstrap heading</h1>
    <h2>h2. Bootstrap heading</h2>
    <h3>h3. Bootstrap heading</h3>
    <h4>h4. Bootstrap heading</h4>
    <h5>h5. Bootstrap heading</h5>
    <h6>h6. Bootstrap heading</h6>
</div>`;
export const Headings = () => `<div>${headings_html}</div>`;

Headings.storyName = 'Headings';

Headings.parameters = { 
  notes: `
  
  #Sample Code

  \`\`\`html
  ${headings_html}
  \`\`\`

  `
};
