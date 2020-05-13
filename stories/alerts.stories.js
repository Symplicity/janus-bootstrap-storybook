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

export const AlertDark = () => `
    <div class="alert alert-dark" role="alert">
        This is a dark alert - check it out!
    </div>`;
        
AlertDark.story = {
  name: 'Dark',
  parameters: {
    notes: 'Use the Dark style when ???',
  },
};

const errorHTML = `
    <div class="alert alert-danger alert-dismissible d-flex" role="alert">
      <div class="flex-shrink-1 d-flex align-items-top justify-content-center">
        <span class="icn-error_filled mr-2 icon-lg-font-size"></span>
      </div>
      <div class="flex-grow-1">
        <b>An error has occurred</b><br>
        <ul class="pl-3 mb-0">
          <li>This is a danger alert - check it out!</li>
          <li>This is a danger alert - check it out!</li>
          <li>This is a danger alert - check it out!</li>
        </ul>
      </div>
      <div class="flex-shrink-1">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true"><span class="icn-close icon-sm-font-size"></span></span>
        </button>
      </div>
    </div>`;

export const Error = () => errorHTML;
    
Error.story = {
  name: 'Error',
  parameters: { 
    notes: `
    #Error
    
    Error alerts help the user recover from critical problems or errors. They should be used when the user <strong>must</strong> take action to resolve a problem before moving forward.
    
    ##Sample Code
    
    \`\`\`html
    ${errorHTML}
    \`\`\`
    `
  }
}

const alertExpandableHTML = `
    <div class="alert alert-success d-flex" role="alert">
      <div class="flex-shrink-1 mr-2">
        <span class="icn-check_circle_filled icon-lg-font-size"></span>
      </div>
      <div class="flex-grow-1">
        <p class="mb-2"><strong>Bold body text</strong></p>
        <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Praesent gravida felis quis lorem efficitur pellentesque. 
          Donec viverra felis et ex ullamcorper rutrum. 
          Donec non nulla aliquam, porta ligula vitae, aliquet turpis. 
          Phasellus in dapibus nisl, vitae hendrerit massa. 
          Quisque et molestie mauris. Cras at magna ex. <a href="#" class="alert-success">an example link</a>.
        </p>
        <div class="collapse show" id="collapseExample">
          <hr class="mt-2 mb-2">
          <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Praesent gravida felis quis lorem efficitur pellentesque. 
            Donec viverra felis et ex ullamcorper rutrum. 
            Donec non nulla aliquam, porta ligula vitae, aliquet turpis. 
            Phasellus in dapibus nisl, vitae hendrerit massa. 
            Quisque et molestie mauris. Cras at magna ex. <a href="#" class="alert-success">an example link</a>.
          </p>
        </div>
      </div>
      <div class="flex-shrink-1 ml-2">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true"><span class="icn-close text-success icon-sm-font-size"></span></span>
        </button>
      </div>
    </div>
  </div>`;

export const AlertExpandable = () => alertExpandableHTML;

AlertExpandable.story = {
  name: 'Expandable',
  parameters: {
    notes: `
    #Expandable
      
    Use the Expandable alert when you need to show more information

    ##Sample Code
    
    \`\`\`html
    ${alertExpandableHTML}
    \`\`\`
    `
  },
};

const alertInfoHTML = `
    <div class="alert alert-info alert-dismissible d-flex" role="alert">
        <div class="flex-shrink-1 d-flex align-items-top justify-content-center">
          <span class="icn-info_filled mr-2 icon-lg-font-size"></span>
        </div>
        <div class="flex-grow-1">
          <p><strong>This is a info alert - check it out!</strong></p>
          <p>This is a info alert - check it out!</p>
          <p class="mb-0">This is a info alert - check it out!</p>
        </div>
        <div class="flex-shrink-1">
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true"><span class="icn-close icon-sm-font-size"></span></span>
          </button>
        </div>
    </div>`;

export const AlertInfo = () => alertInfoHTML;

AlertInfo.story = {
  name: 'Info',
  parameters: {
    notes: `

    #Info

    Use the Info style when providing information that is safe to ignore, such as usage tips. Always include the ability to permanently dismiss an Info alert.

    ##Sample Code
    
    \`\`\`html
    ${alertInfoHTML}
    \`\`\`
    `
  },
};

export const AlertLight = () => `
    <div class="alert alert-light" role="alert">
        This is a light alert - check it out!
    </div>`;
        
AlertLight.story = {
  name: 'Light',
  parameters: {
    notes: 'Use the Light style when ???',
  },
};

export const AlertPrimary = () => `
    <div class="alert alert-primary" role="alert">
      This is a primary alert - check it out!<br>
    </div>`;
    
AlertPrimary.story = {
  name: 'Primary',
  parameters: {
    notes: 'Primary alerts should be used to confirm that an important task or workflow has been completed.',
  },
};

export const AlertSecondary = () => `
    <div class="alert alert-secondary" role="alert">
      This is a secondary alert - check it out!<br>
    </div>`;
    
AlertSecondary.story = {
  name: 'Secondary',
  parameters: {
    notes: 'Secondary alerts should be used to confirm that an important task or workflow has been completed.',
  },
};

const alertSuccessHTML = `
    <div class="alert alert-success alert-dismissible d-flex" role="alert">
      <div class="flex-shrink-1 d-flex align-items-top justify-content-center">
        <span class="icn-check_circle_filled mr-2 icon-lg-font-size"></span>
      </div>
      <div class="flex-grow-1">
        This is a success alert - check it out! 
      </div>
      <div class="flex-shrink-1">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true"><span class="icn-close text-shadow-none icon-sm-font-size"></span></span>
        </button>
      </div>
    </div>`;
  
export const AlertSuccess = () => alertSuccessHTML;

AlertSuccess.story = {
  name: 'Success',
  parameters: {
    notes: `
    #Success
      
    Success alerts should be used to confirm that an important task or workflow has been completed.
    
    ##Sample Code
    
    \`\`\`html
    ${alertSuccessHTML}
    \`\`\`
    `
  },
};

const alertWarningHTML = `
    <div class="alert alert-warning alert-dismissible d-flex" role="alert">
      <div class="flex-shrink-1 d-flex align-items-top justify-content-center">
        <span class="icn-warning_filled mr-2 icon-lg-font-size"></span>
      </div>
      <div class="flex-grow-1">
        <p class="mb-2">
          <b>Warning! Please be careful to proceed the action.</b>
        </p>
        This is a warning alert - check it out!
        <!--br>
        <button type="button" class="btn btn-secondary">Action</button>
        <button type="button" class="btn btn-secondary">Alernative</button-->
      </div>
      <div class="flex-shrink-1">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true"><span class="icn-close icon-sm-font-size"></span></span>
        </button>
      </div>
    </div>`;
   
export const AlertWarning = () => alertWarningHTML;

AlertWarning.story = {
  name: 'Warning',
  parameters: {
    notes: `
    #Warning

    Warnings should be used when the user should resolve a likely problem, but the user is free to ignore it.

    ##Sample Code
    
    \`\`\`html
    ${alertWarningHTML}
    \`\`\`
    `
  },
};

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
