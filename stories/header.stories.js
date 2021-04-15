import { document, setTimeout } from 'global';

import iconSprite from '../node_modules/@symplicity/tabler-icons/symplicity/tabler-sprite-nostroke.svg';

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
  title: 'Components/Headers',
  decorators: [withKnobs],
  parameters: {
    options: {
      selectedPanel: 'storybook/a11y/panel',
    },
  },
};


const job_profile_header = `
  <div class="profile-header">
    <div class="w-100 p-9 border border-light">
      <div class="m-0">
        <div class="profile-header-secondary-actions position-relative">
          <button type="button" class="btn btn-action btn-action-icon-only rounded-circle position-absolute end-0 mt-n2">
            <svg class="icon-xl-font-size mt-n1">
              <use xlink:href="/path/to/icon-sprite.svg#tabler-star" />
              <span class="visually-hidden">Favorite</span>
            </svg>
          </button>
        </div>
        <div class="profile-header-logo align-top me-9">
          <span class="avatar avatar-xl avatar-icon rounded-4 bg-pale-purple d-flex">
            <svg class="text-white">
              <use xlink:href="$/path/to/icon-sprite.svg#tabler-briefcase" />
              <span class="visually-hidden">Work</span>
            </svg>
          </span>
        </div>
        <div class="profile-header-body">
          <span class="profile-header-title text-uppercase h6"><b>Full-Time, Internship</b></span>
          <span class="h3 text-capitalize mb-1">
            <span class="line-clamp-2">Senior Software Engineer - 2201989</span>
          </span>
          <p class="profile-header-text mb-3">
            <span class="line-clamp-5">Posted on Oct 14, 2020</span>
          </p>
          <p class="profile-header-text mb-0">
            <span class="fs-6 text-muted mb-0">Expires on Nov 14, 2020</span>
          </p>
        </div>
      </div>
      <div class="profile-header-primary-actions p-0 mt-7">
        <div class="btn-toolbar w-auto p-0" role="toolbar" aria-label="Toolbar with button groups">
          <button type="button" class="btn btn-primary me-6">Auto Renew</button>
          <button type="button" class="btn btn-outline-primary me-6">Edit Job Details</button>
          <button type="button" class="btn btn-outline-primary btn-more d-flex align-items-center justify-content-center" aria-label="More Actions">
            <svg width="1.125rem" height="1.125rem">
              <use xlink:href="/path/to/icon-sprite.svg#tabler-dots" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
`;

export const JobProfileHeader = () => {
  const line_clamp = {
    '1 line': 'line-clamp-1',
    '2 lines': 'line-clamp-2',
    '3 lines': 'line-clamp-3',
    '4 lines': 'line-clamp-4',
    '5 lines': 'line-clamp-5',
  };

  const job_profile_header_heading_text = text('Heading Text', 'Full-Time, Internship');

  const job_profile_header_title_text = text('Title Text', 'Senior Software Engineer - 2201989');

  const job_profile_header_additional_info_text = text('Additional Info', 'Posted on Oct 14, 2020');

  const job_profile_header_heading_line_clamp = select(
    'Heading Line Clamp',
    line_clamp,
    'line-clamp-2'
  );

  const job_profile_header_title_line_clamp = select(
    'Title Line Clamp',
    line_clamp,
    'line-clamp-2'
  );

  const job_profile_header_additional_info_line_clamp = select(
    'Additional Info Line Clamp',
    line_clamp,
    'line-clamp-5'
  );

  return `
      <div class="profile-header">
        <div class="w-100 p-9 border border-light">
          <div class="m-0">
            <div class="profile-header-secondary-actions position-relative">
              <button type="button" class="btn btn-action btn-action-icon-only rounded-circle position-absolute end-0 mt-n2">
                <svg class="icon-xl-font-size mt-n1">
                  <use xlink:href="${iconSprite}#tabler-star" />
                  <span class="visually-hidden">Favorite</span>
                </svg>
              </button>
            </div>
            <div class="profile-header-logo align-top me-9">
              <span class="avatar avatar-xl avatar-icon rounded-4 bg-pale-purple d-flex">
                <svg class="text-white">
                  <use xlink:href="${iconSprite}#tabler-briefcase" />
                  <span class="visually-hidden">Work</span>
                </svg>
              </span>
            </div>
            <div class="profile-header-body">
              <!-- Use IIFE to conditionally render this based on corresponding Knob value -->
              ${(() => {
                if (job_profile_header_heading_text) {
                  return `
                    <span class="profile-header-title text-uppercase h6"><b>${job_profile_header_heading_text}</b></span>
                  `
                } else {
                  return `` 
                }
              })()}
              <span class="h3 text-capitalize mb-1">
                <span class="${job_profile_header_title_line_clamp}">${job_profile_header_title_text}</span>
              </span>
              <p class="profile-header-text mb-3">
                <span class="${job_profile_header_additional_info_line_clamp}">${job_profile_header_additional_info_text}</span>
              </p>
              <p class="profile-header-text mb-0">
                <span class="fs-6 text-muted mb-0">Expires on Nov 14, 2020</span>
              </p>
            </div>
          </div>
          <div class="profile-header-primary-actions p-0 mt-7">
            <div class="btn-toolbar w-auto p-0" role="toolbar" aria-label="Toolbar with button groups">
              <button type="button" class="btn btn-primary me-6">Auto Renew</button>
              <button type="button" class="btn btn-outline-primary me-6">Edit Job Details</button>
              <button type="button" class="btn btn-outline-primary btn-more d-flex align-items-center justify-content-center" aria-label="More Actions">
                <svg width="1.125rem" height="1.125rem">
                  <use xlink:href="${iconSprite}#tabler-dots" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
  `;
};

JobProfileHeader.storyName = 'Job Profile';

JobProfileHeader.parameters = {
  notes: `

  #Notes
  This HTML is copied from Examples > Cards > Job Post.

  Changes made in one of these stories will need to be applied to the other accordingly.
  
  #Sample Code

  \`\`\`html
  ${job_profile_header}
  \`\`\`

  `,
};


const employer_profile_header = `
  <div class="profile-header">
    <div class="w-100 p-9 border border-light">
      <div class="m-0">
        <div class="profile-header-secondary-actions position-relative">
          <button type="button" class="btn btn-action btn-action-icon-only rounded-circle position-absolute end-0 mt-1">
            <svg class="icon-xl-font-size mt-n1">
              <use xlink:href="${iconSprite}#tabler-star" />
              <span class="visually-hidden">Favorite</span>
            </svg>
          </button>
        </div>
        <div class="profile-header-logo me-9">
          <span class="avatar avatar-xl avatar-icon rounded-4 d-flex">
            <img role="button" class="" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="...">
          </span>
        </div>
        <div class="profile-header-body">
          <!--h5 class="profile-header-title text-uppercase h6"><b>Dec 15 4:00pm - Dec 18 4:00pm</b></h5-->
          <span class="h3 text-capitalize mb-1">
            <span>Open Interviews Position <span class="badge bg-danger fs-7">Campus Interview</span></span>
          </span>
          <p class="profile-header-text mb-3">
            <span>Google, Inc</span>
          </p>
          <p class="profile-header-text mb-0">
            <span class="fs-6 text-muted mb-0">Expires on Nov 14, 2020</span>
          </p>
        </div>
      </div>
      <div class="profile-header-primary-actions p-0 mt-7">
        <div class="btn-toolbar w-auto p-0" role="toolbar" aria-label="Toolbar with button groups">
          <button type="button" class="btn btn-primary me-6">Schedule Interview</button>
        </div>
      </div>
    </div>
  </div>
`;

export const EmployerProfileHeader = () => `${employer_profile_header}`;

EmployerProfileHeader.storyName = 'Employer';

EmployerProfileHeader.parameters = {
  notes: `

  #Notes
  This HTML is copied from Examples > Cards > Employer Post.

  Changes made in one of these stories will need to be applied to the other accordingly.
  
  #Sample Code

  \`\`\`html
  ${employer_profile_header}
  \`\`\`

  `,
};


const event_profile_header = `
  <div class="profile-header">
    <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" class="card-img-top" height="150" width="100%" style="object-fit: cover;" alt="...">
    <div class="w-100 p-9 border border-light">
      <div class="m-0">
        <div class="profile-header-secondary-actions position-relative">
          <button type="button" class="btn btn-action btn-action-icon-only rounded-circle position-absolute end-0 mt-n2">
            <svg class="icon-xl-font-size mt-n1">
              <use xlink:href="${iconSprite}#tabler-star" />
              <span class="visually-hidden">Favorite</span>
            </svg>
          </button>
        </div>
        <div class="profile-header-body d-inline-block">
          <span class="profile-header-title text-uppercase h6"><b>Dec 15 4:00pm - Dec 18 4:00pm</b></span>
          <span class="h3 text-capitalize mb-1">
            <span>2020 Fall Virtual Engineering Career Fair</span>
          </span>
          <p class="profile-header-text mb-0">
            <span>Online</span>
          </p>
        </div>
      </div>
      <div class="profile-header-primary-actions p-0 mt-7">
        <div class="btn-toolbar w-auto p-0" role="toolbar" aria-label="Toolbar with button groups">
          <button type="button" class="btn btn-outline-primary me-6">Chat</button>
          <button type="button" class="btn btn-primary">Attend</button>
        </div>
      </div>
    </div>
    <div class="bg-success d-flex align-items-center ps-9 pe-9 pt-10 pb-10">
      <svg class="icon-xl-font-size text-white">
        <use xlink:href="${iconSprite}#tabler-calendar-plus" />
        <span class="visually-hidden">Favorite</span>
      </svg>
    </div>
  </div>
`;

export const EventProfileHeader = () => `${event_profile_header}`;

EventProfileHeader.storyName = 'Event';

EventProfileHeader.parameters = {
  notes: `

  #Notes
  This HTML is copied from Examples > Cards > Event Post.

  Changes made in one of these stories will need to be applied to the other accordingly.
  
  #Sample Code

  \`\`\`html
  ${event_profile_header}
  \`\`\`

  `,
};


const career_plan_profile_header_html = `
  <div class="profile-header">
    <div class="w-100 p-9 border border-light">
      <div class="m-0">
        <div class="profile-header-body d-flex">
          <div class="flex-grow-1">
            <span class="h3 text-capitalize mb-1">
              <span>Minimum Number of Activities</span>
            </span>
            <p class="profile-header-text mb-3">
              <span>Career Plan</span>
            </p>
            <p class="profile-header-text mb-0 d-flex">
              <span class="fs-6 text-muted mb-0">Started on Jun 10, 2020</span>
              <a href="#" class="fs-6 ms-6">Give Up</a>
            </p>
          </div>
          <div>
            <img src="/progress-bar-placeholder.png" alt="Static Placeholder">
          </div>
        </div>
      </div>
    </div>
  </div>
`;

export const CareerPlanProfileHeader = () => `${career_plan_profile_header_html}`;

CareerPlanProfileHeader.storyName = 'Career Plan';

CareerPlanProfileHeader.parameters = {
  notes: `

  #Notes
  This HTML is copied from Examples > Cards > Event Post.

  Changes made in one of these stories will need to be applied to the other accordingly.
  
  #Sample Code

  \`\`\`html
  ${career_plan_profile_header_html}
  \`\`\`

  `,
};


const connection_profile_header = `
  <div class="profile-header">
    <div class="w-100 p-9 border border-light">
      <div class="m-0">
        <div class="profile-header-logo align-top me-9">
          <span class="avatar avatar-xl avatar-icon rounded-4 d-flex">
            <img role="button" class="" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="...">
          </span>
        </div>
        <div class="profile-header-body">
          <span class="d-flex fs-6">
            <svg class="icon-lg-font-size">
              <use xlink:href="${iconSprite}#tabler-check" />
              <span class="visually-hidden">Connected</span>
            </svg>
            <span class="h6 text-uppercase mb-0 ms-1 fw-bolder">Connected</span>
          </span>
          <span class="h3 text-capitalize mb-1">
            UI2 Stage CSM
            <span class="badge rounded-pill bg-light text-dark">6 Following</span></span>
          </span>
          <p class="profile-header-text mb-3">
            <span>Niagra, US-NY</span>
          </p>
          <p class="profile-header-text mb-0">
            <span class="fs-6 text-muted mb-0">20.0k Undergraduates | 3.5k Graduates</span>
          </p>
        </div>
      </div>
      <div class="profile-header-primary-actions p-0 mt-7">
        <div class="btn-toolbar w-auto p-0" role="toolbar" aria-label="Toolbar with button groups">
          <button type="button" class="btn btn-primary me-6">Login</button>
        </div>
      </div>
    </div>
  </div>
`;

export const ConnectionProfileHeader = () => `${connection_profile_header}`;

ConnectionProfileHeader.storyName = 'Connection';

ConnectionProfileHeader.parameters = {
  notes: `

  #Notes
  This HTML is copied from Examples > Cards > Employer Post.

  Changes made in one of these stories will need to be applied to the other accordingly.
  
  #Sample Code

  \`\`\`html
  ${connection_profile_header}
  \`\`\`

  `,
};
