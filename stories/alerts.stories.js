import iconSprite from '../node_modules/@symplicity/tabler-icons/symplicity/tabler-sprite-nostroke.svg';

const text = 'Unified Design System';

export default {
  title: 'Components/Alerts',
  parameters: {
    options: { selectedPanel: 'storybook/a11y/panel' },
    notes: 'Use alerts to provide feedback to the user.',
  },
};

const alert_primary_html = `
    <div class="alert alert-primary" role="alert">
      This is a primary alert - check it out!
    </div>
`;

export const AlertPrimary = () => `${alert_primary_html}`;

AlertPrimary.storyName = 'Primary';

AlertPrimary.parameters = {
  notes: `
  #Primary
    
  Primary alerts should be used to confirm that an important task or workflow has been completed.

  ##Sample Code
  
  \`\`\`html
  ${alert_primary_html}
  \`\`\`
  `,
};

const alert_secondary_html = `
    <div class="alert alert-secondary" role="alert">
      This is a secondary alert - check it out!
    </div>
`;

export const AlertSecondary = () => `${alert_secondary_html}`;

AlertSecondary.storyName = 'Secondary';

AlertSecondary.parameters = {
  notes: `
  #Secondary
    
  Secondary alerts should be used to confirm that an important task or workflow has been completed.

  ##Sample Code
  
  \`\`\`html
  ${alert_secondary_html}
  \`\`\`
  `,
};

const alert_success_html = `
    <div class="alert alert-success alert-dismissible d-flex" role="alert">
      <div class="flex-shrink-1 d-flex">
        <svg width="1.25rem" height="1.25rem" class="alert-icon me-2 icon-lg-font-size">
          <use xlink:href="${iconSprite}#tabler-circle-check" />
        </svg>
      </div>
      <div class="flex-grow-1">
        This is a success alert - check it out! 
      </div>
      <div class="flex-shrink-1">
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
        </button>
      </div>
    </div>
`;

export const AlertSuccess = () => `${alert_success_html}`;

AlertSuccess.storyName = 'Success';

AlertSuccess.parameters = {
  notes: `
  #Success
    
  Success alerts should be used to confirm that an important task or workflow has been completed.
  
  ##Sample Code
  
  \`\`\`html
  ${alert_success_html}
  \`\`\`
  `,
};

const alert_error_html = `
    <div class="alert alert-danger alert-dismissible d-flex" role="alert">
      <div class="flex-shrink-1 d-flex">
        <svg width="1.25rem" height="1.25rem" class="alert-icon me-2 icon-lg-font-size">
          <use xlink:href="${iconSprite}#tabler-alert-circle" />
        </svg>
      </div>
      <div class="flex-grow-1">
        <b>An error has occurred</b>
        <ul class="ps-3 mb-0">
          <li>This is a danger alert - check it out!</li>
          <li>This is a danger alert - check it out!</li>
          <li>This is a danger alert - check it out!</li>
        </ul>
      </div>
      <div class="flex-shrink-1">
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
        </button>
      </div>
    </div>
`;

export const AlertError = () => `${alert_error_html}`;

AlertError.storyName = 'Error';

AlertError.parameters = {
  notes: `
  #Error
  
  Error alerts help the user recover from critical problems or errors. They should be used when the user <strong>must</strong> take action to resolve a problem before moving forward.
  
  ##Sample Code
  
  \`\`\`html
  ${alert_error_html}
  \`\`\`
  `,
};

const alert_warning_html = `
    <div class="alert alert-warning alert-dismissible d-flex" role="alert">
      <div class="flex-shrink-1 d-flex">
        <svg width="1.25rem" height="1.25rem" class="alert-icon me-2 icon-lg-font-size">
          <use xlink:href="${iconSprite}#tabler-alert-triangle" />
        </svg>
      </div>
      <div class="flex-grow-1">
        <p class="mb-2">
          <b>Warning! Please be careful to proceed the action.</b>
        </p>
        This is a warning alert - check it out!
      </div>
      <div class="flex-shrink-1">
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
        </button>
      </div>
    </div>
`;

export const AlertWarning = () => `${alert_warning_html}`;

AlertWarning.storyName = 'Warning';

AlertWarning.parameters = {
  notes: `
  #Warning

  Warnings should be used when the user should resolve a likely problem, but the user is free to ignore it.

  ##Sample Code
  
  \`\`\`html
  ${alert_warning_html}
  \`\`\`
  `,
};

const alert_info_html = `
    <div class="alert alert-info alert-dismissible d-flex" role="alert">
      <div class="flex-shrink-1 d-flex">
        <svg width="1.25rem" height="1.25rem" class="alert-icon me-2 icon-lg-font-size">
          <use xlink:href="${iconSprite}#tabler-info-circle" />
        </svg>
      </div>
      <div class="flex-grow-1">
        <p class="mb-2"><strong>This is a info alert - check it out!</strong></p>
        <p class="mb-2">This is a info alert - check it out!</p>
        <p class="mb-0">This is a info alert - check it out!</p>
      </div>
      <div class="flex-shrink-1">
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
        </button>
      </div>
    </div>
`;

export const AlertInfo = () => `${alert_info_html}`;

AlertInfo.storyName = 'Info';

AlertInfo.parameters = {
  notes: `

  #Info

  Use the Info style when providing information that is safe to ignore, such as usage tips. Always include the ability to permanently dismiss an Info alert.

  ##Sample Code
  
  \`\`\`html
  ${alert_info_html}
  \`\`\`
  `,
};
