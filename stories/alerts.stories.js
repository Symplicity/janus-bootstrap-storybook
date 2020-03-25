import { withA11y } from '@storybook/addon-a11y';

const text = 'Unified Design System';

export default {
  title: 'Components|Alerts',
  decorators: [withA11y],
  parameters: {
    options: { selectedPanel: 'storybook/a11y/panel' },
    notes: 'Use alerts to provide feedback to the user.',
  },
};

export const AlertSuccess = () => `
    <div class="alert alert-success" role="alert">
      <b>Success!</b> Action completed successfully - Messages Alert.
    </div>`;
    
AlertSuccess.story = {
  name: 'Success',
  parameters: {
    notes: 'Success alerts should be used to confirm that an important task or workflow has been completed.',
  },
};

export const AlertInfo = () => `
    <div class="alert alert-primary" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true"><span class="icn-close"></span></span>
        </button>
        Be careful what you believe because is that you will experience, Your belief system is a mechanism which is uniquely yours. It is powered by your desire and controlled by your thoughts and actions. In other words, your success is measured by the strength of god.
        </div>`;
        
AlertInfo.story = {
  name: 'Info',
  parameters: {
    notes: 'Use the Info style when providing information that is safe to ignore, such as usage tips. Always include the ability to permanently dismiss an Info alert.',
  },
};

        
export const AlertWarning = () => `
    <div class="alert alert-warning" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true"><span class="icn-close"></span></span>
        </button>
        <b>Warning! Please be careful to proceed the action.</b><br>
        Sony Laptops Are Still Part Of The Sony Family.<br>
        <button type="button" class="btn btn-secondary">Action</button>
        <button type="button" class="btn btn-secondary">Alernative</button>
</div>`;
    
AlertWarning.story = {
  name: 'Warning',
  parameters: {
    notes: 'Warnings should be used when the user should resolve a likely problem, but the user is free to ignore it.',
  },
};


const dangerHTML = `
    <div class="alert alert-danger" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true"><span class="icn-close"></span></span>
        </button>
        <b>An error has occurred</b><br>
        <ul>
            <li>Photographs are a way of preserving a moment in out lives for the rest of our lives.</li>
            <li>Many of us have at least been tempted at the flashy array of photo printers.</li>
            <li>if surely seems old fashioned to talk about 35mm film and non-digital cameras in  today's day and non-digital cameras in today's day.</li>
        </ul>
    </div>`;

export const Danger = () => dangerHTML;
    
Danger.story = {
  name: 'Danger',
  parameters: { 
    notes: `
    #The Danger
    
    Danger alerts help the user recover from critical problems or errors. They should be used when the user <strong>must</strong> take action to resolve a problem before moving forward.
    
    ##Sample Code
    
    \`\`\`html
    ${dangerHTML}
    \`\`\`
    `
  }
}

/*
<p>Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the eight <strong>required</strong> contextual classes (e.g., <code class="highlighter-rouge">.alert-success</code>). For inline dismissal, use the <a href="#dismissing">alerts jQuery plugin</a>.</p>

<h2 id="symp-toasts"><div>Symp Toasts<a class="anchorjs-link " href="#symp-toasts" aria-label="Anchor" data-anchorjs-icon="#" style="padding-left: 0.375em;"></a></div></h2>

<div class="alert toast alert-danger" role="alert">
  Error message toast.<button type="button" class="btn btn-link">Action</button>
</div>
<p><br></p>
<div class="alert toast alert-success" role="alert">
  Your application has been submitted.<button type="button" class="btn btn-link">Undo</button>
</div>
<p><br></p>
<div class="alert toast alert-neutral" role="alert">
  Your reservation has been cancelled.<button class="btn-link" href="javascript:;">Undo</button>
</div>
*/
