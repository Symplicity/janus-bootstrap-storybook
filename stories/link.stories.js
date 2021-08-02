import linkNotes from './link.notes.md';

export default {
  title: 'Components/Links',
};

const defaultHTML = ` 
<h3>Default</h3>
<a href="#">Text link 1</a>

<p>Adwords Keyword research for beginners
When you embard on your first PPC
journey, you need to keep a small number
of keywords at first. Keyword lists are
thousands of <a href="#">Text link 1</a> 
should be left to the more experienced PPC marketer.
Ideally, a beginner should use around 100</p>

`;

export const Default = () => `<div>${defaultHTML}</div>`;

Default.storyName = 'Default';

Default.parameters = {
  notes: `
    # Default Links

    ## Documentation
    
    Here are some notes on default links. 
    
    ## Code Sample
    
    \`\`\`html
    ${defaultHTML}
    \`\`\`
    
    ${linkNotes}
    
    `
};


const primaryHTML = ` 
<h3>Primary</h3>
<a href="#" class="link-primary">Text link 1</a>

<p>Adwords Keyword research for beginners
When you embard on your first PPC
journey, you need to keep a small number
of keywords at first. Keyword lists are
thousands of <a href="#" class="link-primary">Text link 1</a> 
should be left to the more experienced PPC marketer.
Ideally, a beginner should use around 100</p>

`;

export const Primary = () => `<div>${primaryHTML}</div>`;

Primary.storyName = 'Primary';

Primary.parameters = {
  notes: `
    # Primary Links

    ## Documentation
    
    Here are some notes on primary links. 
    
    ## Code Sample
    
    \`\`\`html
    ${primaryHTML}
    \`\`\`
    
    ${linkNotes}
    
    `
};


const secondaryHTML = ` 
<h3>Secondary</h3>
<a href="#" class="link-secondary">Text link 1</a>

<p>Adwords Keyword research for beginners
When you embard on your first PPC
journey, you need to keep a small number
of keywords at first. Keyword lists are
thousands of <a href="#" class="link-secondary">Text link 1</a> 
should be left to the more experienced PPC marketer.
Ideally, a beginner should use around 100</p>

`;

export const Secondary = () => `<div>${secondaryHTML}</div>`;

Secondary.storyName = 'Secondary';

Secondary.parameters = {
  notes: `
    # Secondary Links

    ## Documentation
    
    Here are some notes on secondary links. 
    
    ## Code Sample
    
    \`\`\`html
    ${secondaryHTML}
    \`\`\`
    
    ${linkNotes}
    
    `
};


const coloredHTML = ` 
<h3>Colored</h3>

Lorem ipsum dolor sit amet, consectetur adipiscing elit.
<a href="#" class="link-primary">Primary link</a>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
<a href="#" class="link-secondary">Secondary link</a>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
<a href="#" class="link-success">Success link</a>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
<a href="#" class="link-danger">Danger link</a>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
<a href="#" class="link-warning">Warning link</a>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
<a href="#" class="link-info">Info link</a>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
<a href="#" class="link-light">Light link</a>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
<a href="#" class="link-dark">Dark link</a>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.

`;

export const Colored = () => `<div>${coloredHTML}</div>`;

Colored.storyName = 'Colored';

Colored.parameters = {
  notes: `
    # Colored Links

    ## Documentation
    
    Here are some notes on Colored links. 
    
    ## Code Sample
    
    \`\`\`html
    ${coloredHTML}
    \`\`\`
    
    ${linkNotes}
    
    `
};
