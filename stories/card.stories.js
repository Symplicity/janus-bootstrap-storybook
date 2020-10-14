import { document, setTimeout } from 'global';

export default {
  title: 'Components/Cards',
  parameters: {
    options: {
      selectedPanel: 'storybook/a11y/panel',
    },
  },
};

const card_basic_html = `
<div style="width: 18rem;">
  <div class="card">
    <h3 class="card-header text-uppercase"><span class="icn-clock_filled bg-pale-blue"></span>Events</h3>
    <div class="card-body">
      <h3 class="card-title">Special title treatment</h3>
      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</div>`;

export const CardBasic = () => `<div class="container-fluid">${card_basic_html}</div>`;

CardBasic.storyName = 'Card Basic';

CardBasic.parameters = { 
  notes: `
  
  #Sample Code

  \`\`\`html
  ${card_basic_html}
  \`\`\`

  `
}
