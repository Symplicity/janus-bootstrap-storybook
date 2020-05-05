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

export const Badges = () => { 

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
  
  <h2>Design system heading <span class="badge badge-${badge1_level}">${badge1_text}</span> <span class="badge badge-ghost badge-${badge2_level}">${badge2_text}</span></h2>
  <h3>Design system heading <span class="badge badge-${badge1_level}">${badge1_text}</span> <span class="badge badge-ghost badge-${badge2_level}">${badge2_text}</span></h3>
  <h4>Design system heading <span class="badge badge-${badge1_level}">${badge1_text}</span> <span class="badge badge-ghost badge-${badge2_level}">${badge2_text}</span></h4>
  <h5>Design system heading <span class="badge badge-${badge1_level}">${badge1_text}</span> <span class="badge badge-ghost badge-${badge2_level}">${badge2_text}</span></h5>
  <h6>Design system heading <span class="badge badge-${badge1_level}">${badge1_text}</span> <span class="badge badge-ghost badge-${badge2_level}">${badge2_text}</span></h6> 
  <!--br><br>
  <button type="button" class="btn btn-primary btn-lg">
    Notification <span class="badge badge-light">9</span>
    <span class="sr-only">unread messages</span>
  </button>
  <button type="button" class="btn btn-primary">
    Notification <span class="badge badge-light">9</span>
    <span class="sr-only">unread messages</span>
  </button>
  <br><br>
  <span class="badge badge-primary">Primary</span>
  <span class="badge badge-secondary">Secondary</span>
  <span class="badge badge-success">Success</span>
  <span class="badge badge-danger">Danger</span>
  <span class="badge badge-warning">Warning</span>
  <span class="badge badge-info">Info</span>
  <span class="badge badge-light">Light</span>
  <span class="badge badge-dark">Dark</span>
  <br>
  <span class="badge badge-pill badge-primary">Primary</span>
  <span class="badge badge-pill badge-secondary">Secondary</span>
  <span class="badge badge-pill badge-success">Success</span>
  <span class="badge badge-pill badge-danger">Danger</span>
  <span class="badge badge-pill badge-warning">Warning</span>
  <span class="badge badge-pill badge-info">Info</span>
  <span class="badge badge-pill badge-light">Light</span>
  <span class="badge badge-pill badge-dark">Dark</span>
  <br><br>
  <span class="h3">Software Engineer <span class="badge badge-primary">New</span></span>
  <br>
  <span class="h3">Software Engineer <span class="badge badge-pill badge-primary">New</span></span>
  <br><br-->        
`;
  
};

Badges.story = { 
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


const button_badges = `
<button type="button" class="btn btn-primary btn-lg">
  Notification <span class="badge badge-light">9</span>
  <span class="sr-only">unread messages</span>
</button>
<button type="button" class="btn btn-primary">
  Notification <span class="badge badge-light">9</span>
  <span class="sr-only">unread messages</span>
</button>`;

export const Buttons = () => button_badges;
Buttons.story = {
  name: "Button Badges",
  parameters: {
    notes: `
      #Contextual Variations

      \`\`\`html
      ${button_badges}
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

export const Contexts = () => contextual_variations;
Contexts.story = {
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

export const Pills = () => pill_badges;
Pills.story = {
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


const text_badges = `
<span class="h3">Software Engineer <span class="badge badge-primary">New</span></span>
<br>
<span class="h3">Software Engineer <span class="badge badge-pill badge-primary">New</span></span>
`;

export const Text = () => text_badges;
Text.story = {
  name: "Text Badges",
  parameters: {
    notes: `
      #Text Badges

      \`\`\`html
      ${text_badges}
      \`\`\`

      ${moreDocumentation}

    `
  }
};
