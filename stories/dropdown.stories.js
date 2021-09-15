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
  title: 'Components/Dropdown',
  decorators: [withKnobs],
};

const dropdown_primary_html = `
<div>
  <h3>Primary - Large</h3>
  <div class="dropdown">
    <button class="btn btn-lg btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Primary 
    </button>
    <ul class="dropdown-menu shadow-sm mt-1" aria-labelledby="dropdownMenuButton1">
      <li>
        <a class="dropdown-item d-flex" href="#">
          <span>
            <svg width="1rem" height="1rem" class="me-2 mt-n1">
              <use xlink:href="/path/to/icon-sprite.svg#tabler-search" />
            </svg>
          </span>
          <span class="flex-fill">
            Chad Hampton Is A Very Loooooooooong Name
          </span>
        </a>
      </li>
      <li>
        <a class="dropdown-item d-flex" href="#">
          <span>
            <svg width="1rem" height="1rem" class="me-2 mt-n1">
              <use xlink:href="/path/to/icon-sprite.svg#tabler-search" />
            </svg>
          </span>
          <span class="flex-fill">
            Chad Hampton Is A Very Loooooooooong Name
          </span>
        </a>
      </li>
      <li>
        <a class="dropdown-item d-flex" href="#">
          <span>
            <svg width="1rem" height="1rem" class="me-2 mt-n1">
              <use xlink:href="/path/to/icon-sprite.svg#tabler-search" />
            </svg>
          </span>
          <span class="flex-fill">
            Chad Hampton Is A Very Loooooooooong Name
          </span>
        </a>
      </li>
    </ul>
  </div>
  <br><br>
  <h3>Primary - Regular</h3>
  <div class="dropdown">
    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Primary 
    </button>
    <ul class="dropdown-menu shadow-sm mt-1" aria-labelledby="dropdownMenuButton2">
      <li>
        <a class="dropdown-item d-flex" href="#">
          <span>
            <svg width="1rem" height="1rem" class="me-2 mt-n1">
              <use xlink:href="/path/to/icon-sprite.svg#tabler-search" />
            </svg>
          </span>
          <span class="flex-fill">
            Chad Hampton Is A Very Loooooooooong Name
          </span>
        </a>
      </li>
      <li>
        <a class="dropdown-item d-flex" href="#">
          <span>
            <svg width="1rem" height="1rem" class="me-2 mt-n1">
              <use xlink:href="/path/to/icon-sprite.svg#tabler-search" />
            </svg>
          </span>
          <span class="flex-fill">
            Chad Hampton Is A Very Loooooooooong Name
          </span>
        </a>
      </li>
      <li>
        <a class="dropdown-item d-flex" href="#">
          <span>
            <svg width="1rem" height="1rem" class="me-2 mt-n1">
              <use xlink:href="/path/to/icon-sprite.svg#tabler-search" />
            </svg>
          </span>
          <span class="flex-fill">
            Chad Hampton Is A Very Loooooooooong Name
          </span>
        </a>
      </li>
    </ul>
  </div>
  <br><br>
  <h3>Primary - Small</h3>
  <div class="dropdown">
    <button class="btn btn-sm btn-primary dropdown-toggle" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Primary 
    </button>
    <ul class="dropdown-menu shadow-sm mt-1" aria-labelledby="dropdownMenuButton3">
      <li>
        <a class="dropdown-item d-flex" href="#">
          <span>
            <svg width="1rem" height="1rem" class="me-2 mt-n1">
              <use xlink:href="/path/to/icon-sprite.svg#tabler-search" />
            </svg>
          </span>
          <span class="flex-fill">
            Chad Hampton Is A Very Loooooooooong Name
          </span>
        </a>
      </li>
      <li>
        <a class="dropdown-item d-flex" href="#">
          <span>
            <svg width="1rem" height="1rem" class="me-2 mt-n1">
              <use xlink:href="/path/to/icon-sprite.svg#tabler-search" />
            </svg>
          </span>
          <span class="flex-fill">
            Chad Hampton Is A Very Loooooooooong Name
          </span>
        </a>
      </li>
      <li>
        <a class="dropdown-item d-flex" href="#">
          <span>
            <svg width="1rem" height="1rem" class="me-2 mt-n1">
              <use xlink:href="/path/to/icon-sprite.svg#tabler-search" />
            </svg>
          </span>
          <span class="flex-fill">
            Chad Hampton Is A Very Loooooooooong Name
          </span>
        </a>
      </li>
    </ul>
  </div>
</div>`;

export const DropdownPrimary = () => {
  const dropdown_pl = text(
    'Dropdown Primary - Large',
    'Chad Hampton Is A Very Loooooooooong Name'
  );
  const dropdown_pr = text('Dropdown Primary - Regular', 'Chad Hampton');
  const dropdown_ps = text('Dropdown Primary - Small', 'Chad Hampton');

  return `
    <div>
      <h3>Primary - Large</h3>
      <div class="dropdown">
        <button class="btn btn-lg btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Primary 
        </button>
        <ul class="dropdown-menu shadow-sm mt-1" aria-labelledby="dropdownMenuButton1">
          <li>
            <a class="dropdown-item d-flex" href="#">
              <span>
                <svg width="1rem" height="1rem" class="me-2 mt-n1">
                  <use xlink:href="${iconSprite}#tabler-search" />
                </svg>
              </span>
              <span class="flex-fill">
                ${dropdown_pl}
              </span>
            </a>
          </li>
          <li>
            <a class="dropdown-item d-flex" href="#">
              <span>
                <svg width="1rem" height="1rem" class="me-2 mt-n1">
                  <use xlink:href="${iconSprite}#tabler-search" />
                </svg>
              </span>
              <span class="flex-fill">
                ${dropdown_pl}
              </span>
            </a>
          </li>
          <li>
            <a class="dropdown-item d-flex" href="#">
              <span>
                <svg width="1rem" height="1rem" class="me-2 mt-n1">
                  <use xlink:href="${iconSprite}#tabler-search" />
                </svg>
              </span>
              <span class="flex-fill">
                ${dropdown_pl}
              </span>
            </a>
          </li>
        </ul>
      </div>
      <br><br>
      <h3>Primary - Regular</h3>
      <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Primary 
        </button>
        <ul class="dropdown-menu shadow-sm mt-1" aria-labelledby="dropdownMenuButton2">
          <li>
            <a class="dropdown-item d-flex" href="#">
              <span>
                <svg width="1rem" height="1rem" class="me-2 mt-n1">
                  <use xlink:href="${iconSprite}#tabler-search" />
                </svg>
              </span>
              <span class="flex-fill">
                ${dropdown_pr}
              </span>
            </a>
          </li>
          <li>
            <a class="dropdown-item d-flex" href="#">
              <span>
                <svg width="1rem" height="1rem" class="me-2 mt-n1">
                  <use xlink:href="${iconSprite}#tabler-search" />
                </svg>
              </span>
              <span class="flex-fill">
                ${dropdown_pr}
              </span>
            </a>
          </li>
          <li>
            <a class="dropdown-item d-flex" href="#">
              <span>
                <svg width="1rem" height="1rem" class="me-2 mt-n1">
                  <use xlink:href="${iconSprite}#tabler-search" />
                </svg>
              </span>
              <span class="flex-fill">
                ${dropdown_pr}
              </span>
            </a>
          </li>
        </ul>
      </div>
      <br><br>
      <h3>Primary - Small</h3>
      <div class="dropdown">
        <button class="btn btn-sm btn-primary dropdown-toggle" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Primary 
        </button>
        <ul class="dropdown-menu shadow-sm mt-1" aria-labelledby="dropdownMenuButton3">
          <li>
            <a class="dropdown-item d-flex" href="#">
              <span>
                <svg width="1rem" height="1rem" class="me-2 mt-n1">
                  <use xlink:href="${iconSprite}#tabler-search" />
                </svg>
              </span>
              <span class="flex-fill">
                ${dropdown_ps}
              </span>
            </a>
          </li>
          <li>
            <a class="dropdown-item d-flex" href="#">
              <span>
                <svg width="1rem" height="1rem" class="me-2 mt-n1">
                  <use xlink:href="${iconSprite}#tabler-search" />
                </svg>
              </span>
              <span class="flex-fill">
                ${dropdown_ps}
              </span>
            </a>
          </li>
          <li>
            <a class="dropdown-item d-flex" href="#">
              <span>
                <svg width="1rem" height="1rem" class="me-2 mt-n1">
                  <use xlink:href="${iconSprite}#tabler-search" />
                </svg>
              </span>
              <span class="flex-fill">
                ${dropdown_ps}
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    `;
};

DropdownPrimary.storyName = 'Primary';

DropdownPrimary.parameters = {
  notes: `
  
  #Sample Code

  \`\`\`html
  ${dropdown_primary_html}
  \`\`\`

  `,
};

const dropdown_outline_html = `
<div>
  <h3>Outline - Large</h3>
  <div class="dropdown">
    <button class="btn btn-lg btn-outline-primary dropdown-toggle" type="button" id="dropdownMenuButton4" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Primary 
    </button>
    <ul class="dropdown-menu shadow-sm mt-1" aria-labelledby="dropdownMenuButton4">
      <li>
        <a class="dropdown-item d-flex" href="#">
          <span>
            <svg width="1rem" height="1rem" class="me-2 mt-n1">
              <use xlink:href="/path/to/icon-sprite.svg#tabler-search" />
            </svg>
          </span>
          <span class="flex-fill">
            Chad Hampton Is A Very Loooooooooong Name
          </span>
        </a>
      </li>
      <li>
        <a class="dropdown-item d-flex" href="#">
          <span>
            <svg width="1rem" height="1rem" class="me-2 mt-n1">
              <use xlink:href="/path/to/icon-sprite.svg#tabler-search" />
            </svg>
          </span>
          <span class="flex-fill">
            Chad Hampton Is A Very Loooooooooong Name
          </span>
        </a>
      </li>
      <li>
        <a class="dropdown-item d-flex" href="#">
          <span>
            <svg width="1rem" height="1rem" class="me-2 mt-n1">
              <use xlink:href="/path/to/icon-sprite.svg#tabler-search" />
            </svg>
          </span>
          <span class="flex-fill">
            Chad Hampton Is A Very Loooooooooong Name
          </span>
        </a>
      </li>
    </ul>
  </div>
  <br><br>
  <h3>Outline - Regular</h3>
  <div class="dropdown">
    <button class="btn btn-outline-primary dropdown-toggle" type="button" id="dropdownMenuButton5" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Primary 
    </button>
    <ul class="dropdown-menu shadow-sm mt-1" aria-labelledby="dropdownMenuButton5">
      <li>
        <a class="dropdown-item d-flex" href="#">
          <span>
            <svg width="1rem" height="1rem" class="me-2 mt-n1">
              <use xlink:href="/path/to/icon-sprite.svg#tabler-search" />
            </svg>
          </span>
          <span class="flex-fill">
            Chad Hampton Is A Very Loooooooooong Name
          </span>
        </a>
      </li>
      <li>
        <a class="dropdown-item d-flex" href="#">
          <span>
            <svg width="1rem" height="1rem" class="me-2 mt-n1">
              <use xlink:href="/path/to/icon-sprite.svg#tabler-search" />
            </svg>
          </span>
          <span class="flex-fill">
            Chad Hampton Is A Very Loooooooooong Name
          </span>
        </a>
      </li>
      <li>
        <a class="dropdown-item d-flex" href="#">
          <span>
            <svg width="1rem" height="1rem" class="me-2 mt-n1">
              <use xlink:href="/path/to/icon-sprite.svg#tabler-search" />
            </svg>
          </span>
          <span class="flex-fill">
            Chad Hampton Is A Very Loooooooooong Name
          </span>
        </a>
      </li>
    </ul>
  </div>
  <br><br>
  <h3>Outline - Small</h3>
  <div class="dropdown">
    <button class="btn btn-sm btn-outline-primary dropdown-toggle" type="button" id="dropdownMenuButton6" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Primary 
    </button>
    <ul class="dropdown-menu shadow-sm mt-1" aria-labelledby="dropdownMenuButton6">
      <li>
        <a class="dropdown-item d-flex" href="#">
          <span>
            <svg width="1rem" height="1rem" class="me-2 mt-n1">
              <use xlink:href="/path/to/icon-sprite.svg#tabler-search" />
            </svg>
          </span>
          <span class="flex-fill">
            Chad Hampton Is A Very Loooooooooong Name
          </span>
        </a>
      </li>
      <li>
        <a class="dropdown-item d-flex" href="#">
          <span>
            <svg width="1rem" height="1rem" class="me-2 mt-n1">
              <use xlink:href="/path/to/icon-sprite.svg#tabler-search" />
            </svg>
          </span>
          <span class="flex-fill">
            Chad Hampton Is A Very Loooooooooong Name
          </span>
        </a>
      </li>
      <li>
        <a class="dropdown-item d-flex" href="#">
          <span>
            <svg width="1rem" height="1rem" class="me-2 mt-n1">
              <use xlink:href="/path/to/icon-sprite.svg#tabler-search" />
            </svg>
          </span>
          <span class="flex-fill">
            Chad Hampton Is A Very Loooooooooong Name
          </span>
        </a>
      </li>
    </ul>
  </div>
</div>`;

export const DropdownOutline = () => {
  const dropdown_ol = text(
    'Dropdown Outline - Large',
    'Chad Hampton Is A Very Loooooooooong Name'
  );
  const dropdown_or = text('Dropdown Outline - Regular', 'Chad Hampton');
  const dropdown_os = text('Dropdown Outline - Small', 'Chad Hampton');

  return `
    <div>
      <h3>Outline - Large</h3>
      <div class="dropdown">
        <button class="btn btn-lg btn-outline-primary dropdown-toggle" type="button" id="dropdownMenuButton4" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Primary
        </button>
        <ul class="dropdown-menu shadow-sm mt-1" aria-labelledby="dropdownMenuButton4">
          <li>
            <a class="dropdown-item d-flex" href="#">
              <span>
                <svg width="1rem" height="1rem" class="me-2 mt-n1">
                  <use xlink:href="${iconSprite}#tabler-search" />
                </svg>
              </span>
              <span class="flex-fill">
                ${dropdown_ol}
              </span>
            </a>
          </li>
          <li>
            <a class="dropdown-item d-flex" href="#">
              <span>
                <svg width="1rem" height="1rem" class="me-2 mt-n1">
                  <use xlink:href="${iconSprite}#tabler-search" />
                </svg>
              </span>
              <span class="flex-fill">
                ${dropdown_ol}
              </span>
            </a>
          </li>
          <li>
            <a class="dropdown-item d-flex" href="#">
              <span>
                <svg width="1rem" height="1rem" class="me-2 mt-n1">
                  <use xlink:href="${iconSprite}#tabler-search" />
                </svg>
              </span>
              <span class="flex-fill">
                ${dropdown_ol}
              </span>
            </a>
          </li>
        </ul>
      </div>
      <br><br>
      <h3>Outline - Regular</h3>
      <div class="dropdown">
        <button class="btn btn-outline-primary dropdown-toggle" type="button" id="dropdownMenuButton5" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Primary 
        </button>
        <ul class="dropdown-menu shadow-sm mt-1" aria-labelledby="dropdownMenuButton5">
          <li>
            <a class="dropdown-item d-flex" href="#">
              <span>
                <svg width="1rem" height="1rem" class="me-2 mt-n1">
                  <use xlink:href="${iconSprite}#tabler-search" />
                </svg>
              </span>
              <span class="flex-fill">
                ${dropdown_or}
              </span>
            </a>
          </li>
          <li>
            <a class="dropdown-item d-flex" href="#">
              <span>
                <svg width="1rem" height="1rem" class="me-2 mt-n1">
                  <use xlink:href="${iconSprite}#tabler-search" />
                </svg>
              </span>
              <span class="flex-fill">
                ${dropdown_or}
              </span>
            </a>
          </li>
          <li>
            <a class="dropdown-item d-flex" href="#">
              <span>
                <svg width="1rem" height="1rem" class="me-2 mt-n1">
                  <use xlink:href="${iconSprite}#tabler-search" />
                </svg>
              </span>
              <span class="flex-fill">
                ${dropdown_or}
              </span>
            </a>
          </li>
        </ul>
      </div>
      <br><br>
      <h3>Outline - Small</h3>
      <div class="dropdown">
        <button class="btn btn-sm btn-outline-primary dropdown-toggle" type="button" id="dropdownMenuButton6" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Primary 
        </button>
        <ul class="dropdown-menu shadow-sm mt-1" aria-labelledby="dropdownMenuButton6">
          <li>
            <a class="dropdown-item d-flex" href="#">
              <span>
                <svg width="1rem" height="1rem" class="me-2 mt-n1">
                  <use xlink:href="${iconSprite}#tabler-search" />
                </svg>
              </span>
              <span class="flex-fill">
                ${dropdown_os}
              </span>
            </a>
          </li>
          <li>
            <a class="dropdown-item d-flex" href="#">
              <span>
                <svg width="1rem" height="1rem" class="me-2 mt-n1">
                  <use xlink:href="${iconSprite}#tabler-search" />
                </svg>
              </span>
              <span class="flex-fill">
                ${dropdown_os}
              </span>
            </a>
          </li>
          <li>
            <a class="dropdown-item d-flex" href="#">
              <span>
                <svg width="1rem" height="1rem" class="me-2 mt-n1">
                  <use xlink:href="${iconSprite}#tabler-search" />
                </svg>
              </span>
              <span class="flex-fill">
                ${dropdown_os}
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    `;
};
DropdownOutline.storyName = 'Outline';

DropdownOutline.parameters = {
  notes: `
  
  #Sample Code

  \`\`\`html
  ${dropdown_outline_html}
  \`\`\`

  `,
};
