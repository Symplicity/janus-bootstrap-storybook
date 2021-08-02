import iconSprite from '../node_modules/@symplicity/tabler-icons/symplicity/tabler-sprite-nostroke.svg';

const text = 'Unified Design System';

export default {
  title: 'Components/Alerts',
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
        <svg width="1.5rem" height="1.5rem" class="me-2">
          <use xlink:href="${iconSprite}#tabler-circle-check" />
        </svg>
      </div>
      <div class="flex-grow-1">
        This is a success alert - check it out! 
      </div>
      <div class="flex-shrink-1 mt-n1 mb-n1">
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
        <svg width="1.5rem" height="1.5rem" class="me-2">
          <use xlink:href="${iconSprite}#tabler-circle-x" />
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
      <div class="flex-shrink-1 mt-n1 mb-n1">
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
        <svg width="1.5rem" height="1.5rem" class="me-2">
          <use xlink:href="${iconSprite}#tabler-alert-circle" />
        </svg>
      </div>
      <div class="flex-grow-1">
        <p class="mb-2">
          <b>Warning! Please be careful to proceed the action.</b>
        </p>
        This is a warning alert - check it out!
      </div>
      <div class="flex-shrink-1  mt-n1 mb-n1">
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
        <svg width="1.5rem" height="1.5rem" class="me-2">
          <use xlink:href="${iconSprite}#tabler-info-circle" />
        </svg>
      </div>
      <div class="flex-grow-1">
        <p class="mb-2"><strong>This is a info alert - check it out!</strong></p>
        <p class="mb-2">This is a info alert - check it out!</p>
        <p class="mb-0">This is a info alert - check it out!</p>
      </div>
      <div class="flex-shrink-1 mt-n1 mb-n1">
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

const alert_with_divider_html = `
    <div class="alert alert-success alert-dismissible d-flex" role="alert">
      <div class="flex-shrink-1 d-flex">
        <svg width="1.5rem" height="1.5rem" class="me-2">
          <use xlink:href="${iconSprite}#tabler-circle-check" />
        </svg>
      </div>
      <div class="flex-grow-1">
        <p class="mb-0 line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu dignissim purus. Nulla posuere lobortis sapien, a rutrum diam imperdiet vitae. Cras volutpat elit ipsum, quis varius libero maximus sed. Sed id interdum magna. Mauris hendrerit dolor sit amet eleifend rhoncus. Suspendisse vel nisl scelerisque, faucibus mi a, tempus orci. Morbi lacinia velit facilisis diam posuere facilisis. Vivamus vel ipsum ac mi rutrum posuere molestie sit amet odio. Mauris vel ipsum sit amet lorem egestas tristique. Integer eu dolor id purus rutrum consequat.</p>
        <hr>
        <p class="mb-0 line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu dignissim purus. Nulla posuere lobortis sapien, a rutrum diam imperdiet vitae. Cras volutpat elit ipsum, quis varius libero maximus sed. Sed id interdum magna. Mauris hendrerit dolor sit amet eleifend rhoncus. Suspendisse vel nisl scelerisque, faucibus mi a, tempus orci. Morbi lacinia velit facilisis diam posuere facilisis. Vivamus vel ipsum ac mi rutrum posuere molestie sit amet odio. Mauris vel ipsum sit amet lorem egestas tristique. Integer eu dolor id purus rutrum consequat.</p>
      </div>
      <div class="flex-shrink-1 mt-n1 mb-n1">
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
        </button>
      </div>
    </div>
`;

export const AlertWithDivider = () => `${alert_with_divider_html}`;

AlertWithDivider.storyName = 'With Divider';

AlertWithDivider.parameters = {
  notes: `
  #With Divider
    
  Success alerts should be used to confirm that an important task or workflow has been completed.
  
  ##Sample Code
  
  \`\`\`html
  ${alert_with_divider_html}
  \`\`\`
  `,
};

