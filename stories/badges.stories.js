import { document, setTimeout } from 'global';

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
  title: 'Components/Badges',
  decorators: [withKnobs],
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

export const Badges = () => { 

  const badge_options = {
    Primary: "primary",
    Secondary: "secondary",
    Success: "success",
    Warning: "warning text-dark",
    Danger: "danger",
    Info: "info",
    Light: "light text-dark",
    Dark: "dark"
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
      "light text-dark"
  );
  
  return `
  
  <h2>Example</h2>
  <p>Badges scale to match the size of the immediate parent element by using relative font sizing and em units.</p>
  
  <h2>Design system heading <span class="badge bg-${badge1_level}">${badge1_text}</span> <span class="badge bg-${badge2_level}">${badge2_text}</span></h2>
  <h3>Design system heading <span class="badge bg-${badge1_level}">${badge1_text}</span> <span class="badge bg-${badge2_level}">${badge2_text}</span></h3>
  <h4>Design system heading <span class="badge bg-${badge1_level}">${badge1_text}</span> <span class="badge bg-${badge2_level}">${badge2_text}</span></h4>
  <h5>Design system heading <span class="badge bg-${badge1_level}">${badge1_text}</span> <span class="badge bg-${badge2_level}">${badge2_text}</span></h5>
  <h6>Design system heading <span class="badge bg-${badge1_level}">${badge1_text}</span> <span class="badge bg-${badge2_level}">${badge2_text}</span></h6> 
`;
  
};

Badges.storyName = 'Badges';

Badges.parameters = { 
  notes: `

    #Badges
    Documentation and examples for badges, our small count and labeling component.

    \`\`\`html
    <span class="badge bg-primary">Primary</span>
    <span class="badge bg-secondary">Secondary</span>
    <span class="badge bg-success">Success</span>
    <span class="badge bg-danger">Danger</span>
    <span class="badge bg-warning">Warning</span>
    <span class="badge bg-info">Info</span>
    <span class="badge bg-light">Light</span>
    <span class="badge bg-dark">Dark</span>
    \`\`\`
    
    ${moreDocumentation}
    
  `
};


const button_badges = `
<button type="button" class="btn btn-primary btn-lg">
  Notification <span class="badge bg-light text-dark">9</span>
  <span class="visually-hidden">unread messages</span>
</button>
<button type="button" class="btn btn-primary">
  Notification <span class="badge bg-light text-dark">9</span>
  <span class="visually-hidden">unread messages</span>
</button>`;

export const Buttons = () => button_badges;
Buttons.storyName = "Button Badges";

Buttons.parameters = {
  notes: `
    #Contextual Variations

    \`\`\`html
    ${button_badges}
    \`\`\`

    ${moreDocumentation}

  `
};


const contextual_variations = `
<span class="badge bg-primary">Primary</span>
<span class="badge bg-secondary">Secondary</span>
<span class="badge bg-success">Success</span>
<span class="badge bg-danger">Danger</span>
<span class="badge bg-warning">Warning</span>
<span class="badge bg-info">Info</span>
<span class="badge bg-light text-dark">Light</span>
<span class="badge bg-dark">Dark</span>`;

export const Contexts = () => contextual_variations;
Contexts.storyName = "Contextual Variations";

Contexts.parameters = {
  notes: `
    #Contextual Variations

    \`\`\`html
    ${contextual_variations}
    \`\`\`

    ${moreDocumentation}

  `
};


const pill_badges = `
<span class="badge rounded-pill bg-primary">Primary</span>
<span class="badge rounded-pill bg-secondary">Secondary</span>
<span class="badge rounded-pill bg-success">Success</span>
<span class="badge rounded-pill bg-danger">Danger</span>
<span class="badge rounded-pill bg-warning">Warning</span>
<span class="badge rounded-pill bg-info">Info</span>
<span class="badge rounded-pill bg-light text-dark">Light</span>
<span class="badge rounded-pill bg-dark">Dark</span>`;

export const Pills = () => pill_badges;
Pills.storyName = "Pill Badges";

Pills.parameters = {
  notes: `
    #Pill Badges
  
    \`\`\`html
    ${pill_badges}
    \`\`\`
    
    ${moreDocumentation}

  `
};


const text_badges = `
<span class="h3">Software Engineer <span class="badge bg-primary">New</span></span>
<br>
<span class="h3">Software Engineer <span class="badge rounded-pill bg-primary">New</span></span>
`;

export const Text = () => text_badges;
Text.storyName = "Text Badges";

Text.parameters = {
  notes: `
    #Text Badges

    \`\`\`html
    ${text_badges}
    \`\`\`

    ${moreDocumentation}

  `
};
