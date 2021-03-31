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
  title: 'Components/Profile Header',
  decorators: [withKnobs],
  parameters: {
    options: {
      selectedPanel: 'storybook/a11y/panel',
    },
  },
};

const profile_header = `
    <!-- add back html once final -->
`;

export const ProfileHeader = () => {
  const line_clamp = {
    '1 line': 'line-clamp-1',
    '2 lines': 'line-clamp-2',
    '3 lines': 'line-clamp-3',
    '4 lines': 'line-clamp-4',
    '5 lines': 'line-clamp-5',
  };

  const profile_header_heading_text = text('Heading Text', 'Full-Time, Internship');

  const profile_header_title_text = text('Title Text', 'Senior Software Engineer - 2201989');

  const profile_header_additional_info_text = text('Additional Info', 'Posted on Oct 14, 2020');

  const profile_header_heading_line_clamp = select(
    'Heading Line Clamp',
    line_clamp,
    'line-clamp-2'
  );

  const profile_header_title_line_clamp = select(
    'Title Line Clamp',
    line_clamp,
    'line-clamp-2'
  );

  const profile_header_additional_info_line_clamp = select(
    'Additional Info Line Clamp',
    line_clamp,
    'line-clamp-5'
  );

  return `
      <div class="profile-header p-9 border border-light">
        <div class="w-100 p-0">
          <div class="row m-0">
            <div class="col col-11 p-0">
              <div class="profile-header-logo d-inline-block align-top">
                <span class="avatar avatar-xl avatar-icon rounded-4 bg-pale-purple d-flex me-9">
                  <svg class="text-white">
                    <use xlink:href="${iconSprite}#tabler-briefcase" />
                    <span class="visually-hidden">Work</span>
                  </svg>
                </span>
              </div>
              <div class="profile-header-body d-inline-block">
                <!-- Use IIFE to conditionally render this based on corresponding Knob value -->
                ${(() => {
                  if (profile_header_heading_text) {
                    return `
                      <h5 class="profile-header-title text-uppercase h6"><b>${profile_header_heading_text}</b></h5>
                    `
                  } else {
                    return `` 
                  }
                })()}
                <h6 class="h3 text-capitalize mb-1">
                  <span class="${profile_header_title_line_clamp}">${profile_header_title_text}</span>
                </h6>
                <p class="profile-header-text mb-3">
                  <span class="${profile_header_additional_info_line_clamp}">${profile_header_additional_info_text}</span>
                </p>
                <p class="profile-header-text mb-0">
                  <span class="fs-6 text-muted mb-0">Expires on Nov 14, 2020</span>
                </p>
              </div>
            </div>
            <div class="col col-1 p-0">
              <div class="profile-header-secondary-actions d-flex flex-grow-1 justify-content-end">
                <button type="button" class="btn btn-action btn-action-icon-only rounded-circle mt-n2">
                  <svg class="icon-xl-font-size mt-n1">
                    <use xlink:href="${iconSprite}#tabler-star" />
                    <span class="visually-hidden">Favorite</span>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="row profile-header-primary-actions">
            <div class="btn-toolbar w-auto p-0" role="toolbar" aria-label="Toolbar with button groups">
              <button type="button" class="btn btn-primary me-6">Auto Renew</button>
              <button type="button" class="btn btn-outline-primary me-6">Edit Job Details</button>
              <button type="button" class="btn btn-outline-primary d-flex align-items-center justify-content-center" aria-label="More Actions">
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

ProfileHeader.storyName = 'Profile Header';

ProfileHeader.parameters = {
  notes: `

  #Notes
  This HTML is copied from Examples > Cards > Job Post.

  Changes made in one of these stories will need to be applied to the other accordingly.
  
  #Sample Code

  \`\`\`html
  ${profile_header}
  \`\`\`

  `,
};
