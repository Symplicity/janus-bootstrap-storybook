import { document, setTimeout } from 'global';
import { withA11y } from '@storybook/addon-a11y';

import {
  array,
  boolean,
  button,
  color,
  date,
  select,
  withKnobs,
  text,
  number,
} from '@storybook/addon-knobs';

export default {
  title: 'Components|Badges',
  decorators: [withA11y,withKnobs],
  parameters: {
    options: {
      selectedPanel: 'storybook/a11y/panel',
    },
  },
};

const moreDocumentation = `
#Additional Documentation
For additional documentation, see:

- Bootstrap
- Design System 

`;

export const story1 = () => { 

  const badge_options = {
    Primary: "primary",
    Secondary: "secondary",
    Success: "success",
    Warning: "warning",
    Danger: "danger",
    Info: "info",
    Light: "light",
    Dark: "dark",
    Ghost: "ghost-primary",
  };

  const badge1_text = text("Badge 1 Text", "New");
  const badge1_level = select(
      "Badge 1 Level",
      badge_options,
      "secondary"
  );
  
  const badge2_text = text("Badge 2 Text", "Default Ghost");
  const badge2_level = select(
      "Badge 2 Level",
      badge_options,
      "ghost-primary"
  );
  
  return `
  
  <h2>Example</h2>
  <p>Badges scale to match the size of the immediate parent element by using relative font sizing and em units.</p>
  
  <h2>Example heading <span class="badge badge-${badge1_level}">${badge1_text}</span> <span class="badge badge-ghost badge-${badge2_level}">${badge2_text}</span></h2>
  <h3>Example heading <span class="badge badge-${badge1_level}">${badge1_text}</span> <span class="badge badge-ghost badge-${badge2_level}">${badge2_text}</span></h3>
  <h4>Example heading <span class="badge badge-${badge1_level}">${badge1_text}</span> <span class="badge badge-ghost badge-${badge2_level}">${badge2_text}</span></h4>
  <h5>Example heading <span class="badge badge-${badge1_level}">${badge1_text}</span> <span class="badge badge-ghost badge-${badge2_level}">${badge2_text}</span></h5>
  <h6>Example heading <span class="badge badge-${badge1_level}">${badge1_text}</span> <span class="badge badge-ghost badge-${badge2_level}">${badge2_text}</span></h6> 
`;
  
};
story1.story = { 
    name: 'Badges',
    parameters: { 
      notes: `

        #Badges
        Documentation and examples for badges, our small count and labeling component.

        \`\`\`html
        <span class="badge badge-primary">Primary</span>
        <span class="badge badge-secondary">Secondary</span>
        <span class="badge badge-success">Success</span>
        <span class="badge badge-danger">Danger</span>
        <span class="badge badge-warning">Warning</span>
        <span class="badge badge-info">Info</span>
        <span class="badge badge-light">Light</span>
        <span class="badge badge-dark">Dark</span>
        \`\`\`
        
        ${moreDocumentation}
        
      `
    }
};


const contextual_variations = `
<span class="badge badge-primary">Primary</span>
<span class="badge badge-secondary">Secondary</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-danger">Danger</span>
<span class="badge badge-warning">Warning</span>
<span class="badge badge-info">Info</span>
<span class="badge badge-light">Light</span>
<span class="badge badge-dark">Dark</span>`;


export const story2 = () => contextual_variations;
story2.story = {
  name: "Contextual Variations",
  parameters: {
    notes: `
      #Contextual Variations

      \`\`\`html
      ${contextual_variations}
      \`\`\`

      ${moreDocumentation}

    `
  }
};


const pill_badges = `
<span class="badge badge-pill badge-primary">Primary</span>
<span class="badge badge-pill badge-secondary">Secondary</span>
<span class="badge badge-pill badge-success">Success</span>
<span class="badge badge-pill badge-danger">Danger</span>
<span class="badge badge-pill badge-warning">Warning</span>
<span class="badge badge-pill badge-info">Info</span>
<span class="badge badge-pill badge-light">Light</span>
<span class="badge badge-pill badge-dark">Dark</span>`;

export const story3 = () => pill_badges;
story3.story = {
  name: "Pill Badges",
  parameters: {
    notes: `
      #Pill Badges
    
      \`\`\`html
      ${pill_badges}
      \`\`\`
      
      ${moreDocumentation}

    `
  }
};

