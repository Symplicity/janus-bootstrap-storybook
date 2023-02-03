import iconSprite from '../node_modules/@symplicity/tabler-icons/symplicity/tabler-sprite-nostroke.svg'

export default {
  title: 'Examples/Lists'
}

const listHTML = `
<div class="universal-list-container mx-12">
  <div class="container">
    <h2 class="text-uppercase fs-7 text-spaced  text-muted mb-3">Non-Expandable List</h2>
    <ul class="list-unstyled">
      <li class="">
        <div class="group focus-within ms-4 ms-lg-0 mb-3">
          <div class="card border-lg-primary position-relative transition-all">
            <div class="group-hover-lg-opacity group-hover-mt-0 transition-all drag-handle ms-n9 d-flex position-absolute -ml-2 mt-0 mt-lg-1 h-100 pe-2">
              <button type="button" title="Drag to Position" aria-title="Drag to Position" tabindex="-1" class="btn p-2 d-flex align-items-center justify-content-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-grid-dots" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <use xlink:href="${iconSprite}#tabler-grid-dots" />
                </svg>
              </button>
            </div>
            <div class="d-flex py-3 align-items-center ps-4 pe-2 gap-2 pe-lg-4">
              <div class="minw-0">
                <div class="position-relative">
                  <h4 class="d-none d-md-flex align-items-center m-0 mb-1 gap-2 ">
                    <div class="flex-grow-1 text-truncate h3">
                      <a href="#" class="stretched-link">
                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                      </a>
                    </div>
                    <span class="badge bg-secondary flex-shrink-0">Some Label</span>
                  </h4>
                  <h5 class="d-flex d-md-none align-items-center m-0 mb-1 gap-2">
                    <div class="flex-grow-1 text-truncate h4">
                      <a href="#" class="stretched-link">
                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                      </a>
                    </div>
                    <span class="badge bg-secondary flex-shrink-0">Some Label</span>
                  </h5>
                  <p class="m-0 text-truncate minw-0">Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p>
                  <dl class="d-flex flex-wrap flex-column flex-lg-row gap-0 gap-lg-4 m-0">
                    <div class="d-flex gap-1">
                      <dt class="text-muted fw-normal">Meta:</dt>
                      <dd class="m-0">Value</dd>
                    </div>
                    <div class="d-flex gap-1">
                      <dt class="text-muted fw-normal">Meta:</dt>
                      <dd class="m-0">Value</dd>
                    </div>
                    <div class="d-flex gap-1">
                      <dt class="text-muted fw-normal">Meta:</dt>
                      <dd class="m-0">Value</dd>
                    </div>
                  </dl>
                </div>
              </div>

              <div class="d-lg-none">

                <div class="btn-group">
                  <button type="button" class="btn p-2 d-flex align-items-center justify-content-center" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dots" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <circle cx="5" cy="12" r="1" />
                      <circle cx="12" cy="12" r="1" />
                      <circle cx="19" cy="12" r="1" />
                    </svg>
                  </button>

                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Add Below</a></li>
                    <li><a class="dropdown-item" href="#">Copy</a></li>
                    <li><a class="dropdown-item" href="#">Move Up</a></li>
                    <li><a class="dropdown-item" href="#">Move Down</a></li>
                    <li>
                      <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="#">Delete</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="d-none d-lg-block card-actions group-hover-opacity h-100 transition-all me-n3 group-hover-me-0 position-absolute top-0 bottom-0">
              <div class="card-actions-container d-flex h-100 px-2">

                <div class="d-flex flex-row align-items-center gap-2 bg-white">
                  <button type="button" title="Add Below" aria-title="Add Below" class="btn p-2 d-flex align-items-center justify-content-center">

                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <circle cx="12" cy="12" r="9" />
                      <line x1="9" y1="12" x2="15" y2="12" />
                      <line x1="12" y1="9" x2="12" y2="15" />
                    </svg>
                  </button>
                  <button type="button" title="Copy" aria-title="Copy" class="btn p-2 d-flex align-items-center justify-content-center">

                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-copy" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <rect x="8" y="8" width="12" height="12" rx="2" />
                      <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />
                    </svg>
                  </button>
                  <button type="button" title="Move Up" aria-title="Move Up" class="btn p-2 d-flex align-items-center justify-content-center">

                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-up" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="16" y1="9" x2="12" y2="5" />
                      <line x1="8" y1="9" x2="12" y2="5" />
                    </svg>
                  </button>
                  <button type="button" title="Move Down" aria-title="Move Down" class="btn p-2 d-flex align-items-center justify-content-center">

                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-down" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="18" y1="13" x2="12" y2="19" />
                      <line x1="6" y1="13" x2="12" y2="19" />
                    </svg>
                  </button>
                  <button type="button" title="Delete" aria-title="Delete" class="btn p-2 d-flex align-items-center justify-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5"        stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <use xlink:href="${iconSprite}#tabler-tabler-trash" />
                    </svg>
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </li>
      <li class="">
        <div class="group focus-within ms-4 ms-lg-0 mb-3">

          <div class="card border-lg-primary position-relative transition-all">
            <div class="group-hover-lg-opacity group-hover-mt-0 transition-all drag-handle ms-n9 d-flex position-absolute -ml-2 mt-0 mt-lg-1 h-100 pe-2">
              <button type="button" title="Drag to Position" aria-title="Drag to Position" tabindex="-1" class="btn p-2 d-flex align-items-center justify-content-center">

                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-grid-dots" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="5" cy="5" r="1" />
                  <circle cx="12" cy="5" r="1" />
                  <circle cx="19" cy="5" r="1" />
                  <circle cx="5" cy="12" r="1" />
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="19" cy="12" r="1" />
                  <circle cx="5" cy="19" r="1" />
                  <circle cx="12" cy="19" r="1" />
                  <circle cx="19" cy="19" r="1" />
                </svg>
              </button>
            </div>

            <div class="d-flex py-3 align-items-center ps-4 pe-2 gap-2 pe-lg-4">

              <div class="minw-0">
                <div class="position-relative">
                  <h4 class="d-none d-md-flex align-items-center m-0 mb-1 gap-2 ">
                    <div class="flex-grow-1 text-truncate h3">
                      <a href="#" class="stretched-link">
                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                      </a>
                    </div>
                    <span class="badge bg-secondary flex-shrink-0">Some Label</span>
                  </h4>
                  <h5 class="d-flex d-md-none align-items-center m-0 mb-1 gap-2">
                    <div class="flex-grow-1 text-truncate h4">
                      <a href="#" class="stretched-link">
                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                      </a>
                    </div>
                    <span class="badge bg-secondary flex-shrink-0">Some Label</span>
                  </h5>
                  <p class="m-0 text-truncate minw-0">Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p>
                  <dl class="d-flex flex-wrap flex-column flex-lg-row gap-0 gap-lg-4 m-0">
                    <div class="d-flex gap-1">
                      <dt class="text-muted fw-normal">Meta:</dt>
                      <dd class="m-0">Value</dd>
                    </div>
                    <div class="d-flex gap-1">
                      <dt class="text-muted fw-normal">Meta:</dt>
                      <dd class="m-0">Value</dd>
                    </div>
                    <div class="d-flex gap-1">
                      <dt class="text-muted fw-normal">Meta:</dt>
                      <dd class="m-0">Value</dd>
                    </div>
                  </dl>
                </div>
              </div>

              <div class="d-lg-none">

                <div class="btn-group">
                  <button type="button" class="btn p-2 d-flex align-items-center justify-content-center" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dots" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <circle cx="5" cy="12" r="1" />
                      <circle cx="12" cy="12" r="1" />
                      <circle cx="19" cy="12" r="1" />
                    </svg>
                  </button>

                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Add Below</a></li>
                    <li><a class="dropdown-item" href="#">Copy</a></li>
                    <li><a class="dropdown-item" href="#">Move Up</a></li>
                    <li><a class="dropdown-item" href="#">Move Down</a></li>
                    <li>
                      <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="#">Delete</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="d-none d-lg-block card-actions group-hover-opacity h-100 transition-all me-n3 group-hover-me-0 position-absolute top-0 bottom-0">
              <div class="card-actions-container d-flex h-100 px-2">

                <div class="d-flex flex-row align-items-center gap-2 bg-white">
                  <button type="button" title="Add Below" aria-title="Add Below" class="btn p-2 d-flex align-items-center justify-content-center">

                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <circle cx="12" cy="12" r="9" />
                      <line x1="9" y1="12" x2="15" y2="12" />
                      <line x1="12" y1="9" x2="12" y2="15" />
                    </svg>
                  </button>
                  <button type="button" title="Copy" aria-title="Copy" class="btn p-2 d-flex align-items-center justify-content-center">

                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-copy" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <rect x="8" y="8" width="12" height="12" rx="2" />
                      <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />
                    </svg>
                  </button>
                  <button type="button" title="Move Up" aria-title="Move Up" class="btn p-2 d-flex align-items-center justify-content-center">

                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-up" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="16" y1="9" x2="12" y2="5" />
                      <line x1="8" y1="9" x2="12" y2="5" />
                    </svg>
                  </button>
                  <button type="button" title="Move Down" aria-title="Move Down" class="btn p-2 d-flex align-items-center justify-content-center">

                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-down" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="18" y1="13" x2="12" y2="19" />
                      <line x1="6" y1="13" x2="12" y2="19" />
                    </svg>
                  </button>
                  <button type="button" title="Delete" aria-title="Delete" class="btn p-2 d-flex align-items-center justify-content-center">

                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1="4" y1="7" x2="20" y2="7" />
                      <line x1="10" y1="11" x2="10" y2="17" />
                      <line x1="14" y1="11" x2="14" y2="17" />
                      <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                      <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                    </svg>
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </li>

    </ul>
  </div>
  <div class="container">
    <h2 class="text-uppercase fs-7 text-spaced  text-muted mb-3">Expandable List</h2>
    <ul aria-label="Expandable List" role="tree" class="list-unstyled">
      <li role="none">

        <div class="group focus-within ms-4 ms-lg-0 mb-3">
          <div class="card border-lg-primary position-relative transition-all">
            <div class="group-hover-lg-opacity group-hover-mt-0 transition-all drag-handle ms-n9 d-flex position-absolute -ml-2 mt-0 mt-lg-1 h-100 pe-2">
              <button type="button" title="Drag to Position" aria-title="Drag to Position" tabindex="-1" class="btn p-2 d-flex align-items-center justify-content-center">

                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-grid-dots" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="5" cy="5" r="1" />
                  <circle cx="12" cy="5" r="1" />
                  <circle cx="19" cy="5" r="1" />
                  <circle cx="5" cy="12" r="1" />
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="19" cy="12" r="1" />
                  <circle cx="5" cy="19" r="1" />
                  <circle cx="12" cy="19" r="1" />
                  <circle cx="19" cy="19" r="1" />
                </svg>
              </button>
            </div>

            <div class="d-flex py-3 align-items-center px-2 gap-2 pe-lg-4">
              <div class="">
                <button type="button" title="Collapse" aria-title="Collapse" aria-expanded="false" aria-owns="my-list-1" class="btn p-2 d-flex align-items-center justify-content-center">

                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
              </div>

              <div class="minw-0">
                <div class="position-relative">
                  <h4 class="d-none d-md-flex align-items-center m-0 mb-1 gap-2 ">
                    <div class="flex-grow-1 text-truncate h3">
                      <a href="#" class="stretched-link">
                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                      </a>
                    </div>
                    <span class="badge bg-secondary flex-shrink-0">Some Label</span>
                  </h4>
                  <h5 class="d-flex d-md-none align-items-center m-0 mb-1 gap-2">
                    <div class="flex-grow-1 text-truncate h4">
                      <a href="#" class="stretched-link">
                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                      </a>
                    </div>
                    <span class="badge bg-secondary flex-shrink-0">Some Label</span>
                  </h5>
                  <p class="m-0 text-truncate minw-0">Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p>
                  <dl class="d-flex flex-wrap flex-column flex-lg-row gap-0 gap-lg-4 m-0">
                    <div class="d-flex gap-1">
                      <dt class="text-muted fw-normal">Meta:</dt>
                      <dd class="m-0">Value</dd>
                    </div>
                    <div class="d-flex gap-1">
                      <dt class="text-muted fw-normal">Meta:</dt>
                      <dd class="m-0">Value</dd>
                    </div>
                    <div class="d-flex gap-1">
                      <dt class="text-muted fw-normal">Meta:</dt>
                      <dd class="m-0">Value</dd>
                    </div>
                  </dl>
                </div>
              </div>

              <div class="d-lg-none">

                <div class="btn-group">
                  <button type="button" class="btn p-2 d-flex align-items-center justify-content-center" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dots" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <circle cx="5" cy="12" r="1" />
                      <circle cx="12" cy="12" r="1" />
                      <circle cx="19" cy="12" r="1" />
                    </svg>
                  </button>

                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Add Below</a></li>
                    <li><a class="dropdown-item" href="#">Copy</a></li>
                    <li><a class="dropdown-item" href="#">Move Up</a></li>
                    <li><a class="dropdown-item" href="#">Move Down</a></li>
                    <li>
                      <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="#">Delete</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="d-none d-lg-block card-actions group-hover-opacity h-100 transition-all me-n3 group-hover-me-0 position-absolute top-0 bottom-0">
              <div class="card-actions-container d-flex h-100 px-2">

                <div class="d-flex flex-row align-items-center gap-2 bg-white">
                  <button type="button" title="Add Below" aria-title="Add Below" class="btn p-2 d-flex align-items-center justify-content-center">

                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <circle cx="12" cy="12" r="9" />
                      <line x1="9" y1="12" x2="15" y2="12" />
                      <line x1="12" y1="9" x2="12" y2="15" />
                    </svg>
                  </button>
                  <button type="button" title="Copy" aria-title="Copy" class="btn p-2 d-flex align-items-center justify-content-center">

                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-copy" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <rect x="8" y="8" width="12" height="12" rx="2" />
                      <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />
                    </svg>
                  </button>
                  <button type="button" title="Move Up" aria-title="Move Up" class="btn p-2 d-flex align-items-center justify-content-center">

                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-up" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="16" y1="9" x2="12" y2="5" />
                      <line x1="8" y1="9" x2="12" y2="5" />
                    </svg>
                  </button>
                  <button type="button" title="Move Down" aria-title="Move Down" class="btn p-2 d-flex align-items-center justify-content-center">

                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-down" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="18" y1="13" x2="12" y2="19" />
                      <line x1="6" y1="13" x2="12" y2="19" />
                    </svg>
                  </button>
                  <button type="button" title="Delete" aria-title="Delete" class="btn p-2 d-flex align-items-center justify-content-center">

                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1="4" y1="7" x2="20" y2="7" />
                      <line x1="10" y1="11" x2="10" y2="17" />
                      <line x1="14" y1="11" x2="14" y2="17" />
                      <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                      <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                    </svg>
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
        <ul role="group" aria-label="Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Quisque velit nisi, pretium ut lacinia in, elementum id enim." class="list-unstyled ms-5 mt-3" id="my-list-1">
          <li role="none">
            <div class="group focus-within ms-4 ms-lg-0 mb-3">
              <div class="card border-lg-primary position-relative transition-all">
                <div class="group-hover-lg-opacity group-hover-mt-0 transition-all drag-handle ms-n9 d-flex position-absolute -ml-2 mt-0 mt-lg-1 h-100 pe-2">
                  <button type="button" title="Drag to Position" aria-title="Drag to Position" tabindex="-1" class="btn p-2 d-flex align-items-center justify-content-center">

                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-grid-dots" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <circle cx="5" cy="5" r="1" />
                      <circle cx="12" cy="5" r="1" />
                      <circle cx="19" cy="5" r="1" />
                      <circle cx="5" cy="12" r="1" />
                      <circle cx="12" cy="12" r="1" />
                      <circle cx="19" cy="12" r="1" />
                      <circle cx="5" cy="19" r="1" />
                      <circle cx="12" cy="19" r="1" />
                      <circle cx="19" cy="19" r="1" />
                    </svg>
                  </button>
                </div>

                <div class="d-flex py-3 align-items-center px-2 gap-2 pe-lg-4">
                  <div class="">
                    <button type="button" title="Expand" aria-expanded="false" aria-owns="my-list-2" aria-title="Expand" class="btn p-2 d-flex align-items-center justify-content-center">

                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <polyline points="9 6 15 12 9 18" />
                      </svg>
                    </button>
                  </div>

                  <div class="minw-0">
                    <div class="position-relative">
                      <h4 class="d-none d-md-flex align-items-center m-0 mb-1 gap-2 ">
                        <div class="flex-grow-1 text-truncate h3">
                          <a href="#" class="stretched-link">
                            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                          </a>
                        </div>
                        <span class="badge bg-secondary flex-shrink-0">Some Label</span>
                      </h4>
                      <h5 class="d-flex d-md-none align-items-center m-0 mb-1 gap-2">
                        <div class="flex-grow-1 text-truncate h4">
                          <a href="#" class="stretched-link">
                            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                          </a>
                        </div>
                        <span class="badge bg-secondary flex-shrink-0">Some Label</span>
                      </h5>
                      <p class="m-0 text-truncate minw-0">Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p>
                      <dl class="d-flex flex-wrap flex-column flex-lg-row gap-0 gap-lg-4 m-0">
                        <div class="d-flex gap-1">
                          <dt class="text-muted fw-normal">Meta:</dt>
                          <dd class="m-0">Value</dd>
                        </div>
                        <div class="d-flex gap-1">
                          <dt class="text-muted fw-normal">Meta:</dt>
                          <dd class="m-0">Value</dd>
                        </div>
                        <div class="d-flex gap-1">
                          <dt class="text-muted fw-normal">Meta:</dt>
                          <dd class="m-0">Value</dd>
                        </div>
                      </dl>
                    </div>
                  </div>

                  <div class="d-lg-none">

                    <div class="btn-group">
                      <button type="button" class="btn p-2 d-flex align-items-center justify-content-center" data-bs-toggle="dropdown" aria-expanded="false">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dots" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <circle cx="5" cy="12" r="1" />
                          <circle cx="12" cy="12" r="1" />
                          <circle cx="19" cy="12" r="1" />
                        </svg>
                      </button>

                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Add Below</a></li>
                        <li><a class="dropdown-item" href="#">Copy</a></li>
                        <li><a class="dropdown-item" href="#">Move Up</a></li>
                        <li><a class="dropdown-item" href="#">Move Down</a></li>
                        <li>
                          <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="#">Delete</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="d-none d-lg-block card-actions group-hover-opacity h-100 transition-all me-n3 group-hover-me-0 position-absolute top-0 bottom-0">
                  <div class="card-actions-container d-flex h-100 px-2">

                    <div class="d-flex flex-row align-items-center gap-2 bg-white">
                      <button type="button" title="Add Below" aria-title="Add Below" class="btn p-2 d-flex align-items-center justify-content-center">

                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <circle cx="12" cy="12" r="9" />
                          <line x1="9" y1="12" x2="15" y2="12" />
                          <line x1="12" y1="9" x2="12" y2="15" />
                        </svg>
                      </button>
                      <button type="button" title="Copy" aria-title="Copy" class="btn p-2 d-flex align-items-center justify-content-center">

                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-copy" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <rect x="8" y="8" width="12" height="12" rx="2" />
                          <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />
                        </svg>
                      </button>
                      <button type="button" title="Move Up" aria-title="Move Up" class="btn p-2 d-flex align-items-center justify-content-center">

                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-up" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="16" y1="9" x2="12" y2="5" />
                          <line x1="8" y1="9" x2="12" y2="5" />
                        </svg>
                      </button>
                      <button type="button" title="Move Down" aria-title="Move Down" class="btn p-2 d-flex align-items-center justify-content-center">

                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-down" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="18" y1="13" x2="12" y2="19" />
                          <line x1="6" y1="13" x2="12" y2="19" />
                        </svg>
                      </button>
                      <button type="button" title="Delete" aria-title="Delete" class="btn p-2 d-flex align-items-center justify-content-center">

                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <line x1="4" y1="7" x2="20" y2="7" />
                          <line x1="10" y1="11" x2="10" y2="17" />
                          <line x1="14" y1="11" x2="14" y2="17" />
                          <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                          <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                        </svg>
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            </div>

        
            <ul role="group" aria-label="Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Quisque velit nisi, pretium ut lacinia in, elementum id enim." class="list-unstyled ms-5 mt-3" id="my-list-2">
            <li role="none">
            <div class="group focus-within ms-4 ms-lg-0 mb-3">
              <div class="card border-lg-primary position-relative transition-all">
                <div class="group-hover-lg-opacity group-hover-mt-0 transition-all drag-handle ms-n9 d-flex position-absolute -ml-2 mt-0 mt-lg-1 h-100 pe-2">
                  <button type="button" title="Drag to Position" aria-title="Drag to Position" tabindex="-1" class="btn p-2 d-flex align-items-center justify-content-center">

                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-grid-dots" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <circle cx="5" cy="5" r="1" />
                      <circle cx="12" cy="5" r="1" />
                      <circle cx="19" cy="5" r="1" />
                      <circle cx="5" cy="12" r="1" />
                      <circle cx="12" cy="12" r="1" />
                      <circle cx="19" cy="12" r="1" />
                      <circle cx="5" cy="19" r="1" />
                      <circle cx="12" cy="19" r="1" />
                      <circle cx="19" cy="19" r="1" />
                    </svg>
                  </button>
                </div>

                <div class="d-flex py-3 align-items-center px-2 gap-2 pe-lg-4">
                  <div class="">
                    <button type="button" title="Expand" aria-expanded="false" aria-owns="my-list-2" aria-title="Expand" class="btn p-2 d-flex align-items-center justify-content-center">

                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <polyline points="9 6 15 12 9 18" />
                      </svg>
                    </button>
                  </div>

                  <div class="minw-0">
                    <div class="position-relative">
                      <h4 class="d-none d-md-flex align-items-center m-0 mb-1 gap-2 ">
                        <div class="flex-grow-1 text-truncate h3">
                          <a href="#" class="stretched-link">
                            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                          </a>
                        </div>
                        <span class="badge bg-secondary flex-shrink-0">Some Label</span>
                      </h4>
                      <h5 class="d-flex d-md-none align-items-center m-0 mb-1 gap-2">
                        <div class="flex-grow-1 text-truncate h4">
                          <a href="#" class="stretched-link">
                            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                          </a>
                        </div>
                        <span class="badge bg-secondary flex-shrink-0">Some Label</span>
                      </h5>
                      <p class="m-0 text-truncate minw-0">Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p>
                      <dl class="d-flex flex-wrap flex-column flex-lg-row gap-0 gap-lg-4 m-0">
                        <div class="d-flex gap-1">
                          <dt class="text-muted fw-normal">Meta:</dt>
                          <dd class="m-0">Value</dd>
                        </div>
                        <div class="d-flex gap-1">
                          <dt class="text-muted fw-normal">Meta:</dt>
                          <dd class="m-0">Value</dd>
                        </div>
                        <div class="d-flex gap-1">
                          <dt class="text-muted fw-normal">Meta:</dt>
                          <dd class="m-0">Value</dd>
                        </div>
                      </dl>
                    </div>
                  </div>

                  <div class="d-lg-none">

                    <div class="btn-group">
                      <button type="button" class="btn p-2 d-flex align-items-center justify-content-center" data-bs-toggle="dropdown" aria-expanded="false">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dots" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <circle cx="5" cy="12" r="1" />
                          <circle cx="12" cy="12" r="1" />
                          <circle cx="19" cy="12" r="1" />
                        </svg>
                      </button>

                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Add Below</a></li>
                        <li><a class="dropdown-item" href="#">Copy</a></li>
                        <li><a class="dropdown-item" href="#">Move Up</a></li>
                        <li><a class="dropdown-item" href="#">Move Down</a></li>
                        <li>
                          <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="#">Delete</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="d-none d-lg-block card-actions group-hover-opacity h-100 transition-all me-n3 group-hover-me-0 position-absolute top-0 bottom-0">
                  <div class="card-actions-container d-flex h-100 px-2">

                    <div class="d-flex flex-row align-items-center gap-2 bg-white">
                      <button type="button" title="Add Below" aria-title="Add Below" class="btn p-2 d-flex align-items-center justify-content-center">

                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <circle cx="12" cy="12" r="9" />
                          <line x1="9" y1="12" x2="15" y2="12" />
                          <line x1="12" y1="9" x2="12" y2="15" />
                        </svg>
                      </button>
                      <button type="button" title="Copy" aria-title="Copy" class="btn p-2 d-flex align-items-center justify-content-center">

                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-copy" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <rect x="8" y="8" width="12" height="12" rx="2" />
                          <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />
                        </svg>
                      </button>
                      <button type="button" title="Move Up" aria-title="Move Up" class="btn p-2 d-flex align-items-center justify-content-center">

                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-up" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="16" y1="9" x2="12" y2="5" />
                          <line x1="8" y1="9" x2="12" y2="5" />
                        </svg>
                      </button>
                      <button type="button" title="Move Down" aria-title="Move Down" class="btn p-2 d-flex align-items-center justify-content-center">

                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-down" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="18" y1="13" x2="12" y2="19" />
                          <line x1="6" y1="13" x2="12" y2="19" />
                        </svg>
                      </button>
                      <button type="button" title="Delete" aria-title="Delete" class="btn p-2 d-flex align-items-center justify-content-center">

                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <line x1="4" y1="7" x2="20" y2="7" />
                          <line x1="10" y1="11" x2="10" y2="17" />
                          <line x1="14" y1="11" x2="14" y2="17" />
                          <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                          <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                        </svg>
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            </div>

        
            <ul role="group" aria-label="Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Quisque velit nisi, pretium ut lacinia in, elementum id enim." class="list-unstyled ms-5 mt-3" id="my-list-2">
          <!-- more items go here -->
        </ul>
            
          </li>
        </ul>
            
          </li>
          <li role="none">

            <div class="group focus-within ms-4 ms-lg-0 mb-3">
              <div class="card border-lg-primary position-relative transition-all">
                <div class="group-hover-lg-opacity group-hover-mt-0 transition-all drag-handle ms-n9 d-flex position-absolute -ml-2 mt-0 mt-lg-1 h-100 pe-2">
                  <button type="button" title="Drag to Position" aria-title="Drag to Position" tabindex="-1" class="btn p-2 d-flex align-items-center justify-content-center">

                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-grid-dots" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <circle cx="5" cy="5" r="1" />
                      <circle cx="12" cy="5" r="1" />
                      <circle cx="19" cy="5" r="1" />
                      <circle cx="5" cy="12" r="1" />
                      <circle cx="12" cy="12" r="1" />
                      <circle cx="19" cy="12" r="1" />
                      <circle cx="5" cy="19" r="1" />
                      <circle cx="12" cy="19" r="1" />
                      <circle cx="19" cy="19" r="1" />
                    </svg>
                  </button>
                </div>

                <div class="d-flex py-3 align-items-center px-12 gap-2 pe-lg-4">

                  <div class="minw-0">
                    <div class="position-relative">
                      <h4 class="d-none d-md-flex align-items-center m-0 mb-1 gap-2 ">
                        <div class="flex-grow-1 text-truncate h3">
                          <a href="#" class="stretched-link">
                            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                          </a>
                        </div>
                        <span class="badge bg-secondary flex-shrink-0">Some Label</span>
                      </h4>
                      <h5 class="d-flex d-md-none align-items-center m-0 mb-1 gap-2">
                        <div class="flex-grow-1 text-truncate h4">
                          <a href="#" class="stretched-link">
                            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                          </a>
                        </div>
                        <span class="badge bg-secondary flex-shrink-0">Some Label</span>
                      </h5>
                      <p class="m-0 text-truncate minw-0">Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p>
                      <dl class="d-flex flex-wrap flex-column flex-lg-row gap-0 gap-lg-4 m-0">
                        <div class="d-flex gap-1">
                          <dt class="text-muted fw-normal">Meta:</dt>
                          <dd class="m-0">Value</dd>
                        </div>
                        <div class="d-flex gap-1">
                          <dt class="text-muted fw-normal">Meta:</dt>
                          <dd class="m-0">Value</dd>
                        </div>
                        <div class="d-flex gap-1">
                          <dt class="text-muted fw-normal">Meta:</dt>
                          <dd class="m-0">Value</dd>
                        </div>
                      </dl>
                    </div>
                  </div>

                  <div class="d-lg-none">

                    <div class="btn-group">
                      <button type="button" class="btn p-2 d-flex align-items-center justify-content-center" data-bs-toggle="dropdown" aria-expanded="false">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dots" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <circle cx="5" cy="12" r="1" />
                          <circle cx="12" cy="12" r="1" />
                          <circle cx="19" cy="12" r="1" />
                        </svg>
                      </button>

                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Add Below</a></li>
                        <li><a class="dropdown-item" href="#">Copy</a></li>
                        <li><a class="dropdown-item" href="#">Move Up</a></li>
                        <li><a class="dropdown-item" href="#">Move Down</a></li>
                        <li>
                          <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="#">Delete</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="d-none d-lg-block card-actions group-hover-opacity h-100 transition-all me-n3 group-hover-me-0 position-absolute top-0 bottom-0">
                  <div class="card-actions-container d-flex h-100 px-2">

                    <div class="d-flex flex-row align-items-center gap-2 bg-white">
                      <button type="button" title="Add Below" aria-title="Add Below" class="btn p-2 d-flex align-items-center justify-content-center">

                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <circle cx="12" cy="12" r="9" />
                          <line x1="9" y1="12" x2="15" y2="12" />
                          <line x1="12" y1="9" x2="12" y2="15" />
                        </svg>
                      </button>
                      <button type="button" title="Copy" aria-title="Copy" class="btn p-2 d-flex align-items-center justify-content-center">

                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-copy" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <rect x="8" y="8" width="12" height="12" rx="2" />
                          <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />
                        </svg>
                      </button>
                      <button type="button" title="Move Up" aria-title="Move Up" class="btn p-2 d-flex align-items-center justify-content-center">

                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-up" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="16" y1="9" x2="12" y2="5" />
                          <line x1="8" y1="9" x2="12" y2="5" />
                        </svg>
                      </button>
                      <button type="button" title="Move Down" aria-title="Move Down" class="btn p-2 d-flex align-items-center justify-content-center">

                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-down" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="18" y1="13" x2="12" y2="19" />
                          <line x1="6" y1="13" x2="12" y2="19" />
                        </svg>
                      </button>
                      <button type="button" title="Delete" aria-title="Delete" class="btn p-2 d-flex align-items-center justify-content-center">

                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <line x1="4" y1="7" x2="20" y2="7" />
                          <line x1="10" y1="11" x2="10" y2="17" />
                          <line x1="14" y1="11" x2="14" y2="17" />
                          <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                          <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                        </svg>
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </li>
      <li role="none">

        <div class="group focus-within ms-4 ms-lg-0 mb-3">
          <div class="card border-lg-primary position-relative transition-all">
            <div class="group-hover-lg-opacity group-hover-mt-0 transition-all drag-handle ms-n9 d-flex position-absolute -ml-2 mt-0 mt-lg-1 h-100 pe-2">
              <button type="button" title="Drag to Position" aria-title="Drag to Position" tabindex="-1" class="btn p-2 d-flex align-items-center justify-content-center">

                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-grid-dots" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="5" cy="5" r="1" />
                  <circle cx="12" cy="5" r="1" />
                  <circle cx="19" cy="5" r="1" />
                  <circle cx="5" cy="12" r="1" />
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="19" cy="12" r="1" />
                  <circle cx="5" cy="19" r="1" />
                  <circle cx="12" cy="19" r="1" />
                  <circle cx="19" cy="19" r="1" />
                </svg>
              </button>
            </div>
            <div class="d-flex py-3 align-items-center px-12 gap-2 pe-lg-4">
              <div class="minw-0">
                <div class="position-relative">
                  <h4 class="d-none d-md-flex align-items-center m-0 mb-1 gap-2 ">
                    <div class="flex-grow-1 text-truncate h3">
                      <a href="#" class="stretched-link">
                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                      </a>
                    </div>
                    <span class="badge bg-secondary flex-shrink-0">Some Label</span>
                  </h4>
                  <h5 class="d-flex d-md-none align-items-center m-0 mb-1 gap-2">
                    <div class="flex-grow-1 text-truncate h4">
                      <a href="#" class="stretched-link">
                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                      </a>
                    </div>
                    <span class="badge bg-secondary flex-shrink-0">Some Label</span>
                  </h5>
                  <p class="m-0 text-truncate minw-0">Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p>
                  <dl class="d-flex flex-wrap flex-column flex-lg-row gap-0 gap-lg-4 m-0">
                    <div class="d-flex gap-1">
                      <dt class="text-muted fw-normal">Meta:</dt>
                      <dd class="m-0">Value</dd>
                    </div>
                    <div class="d-flex gap-1">
                      <dt class="text-muted fw-normal">Meta:</dt>
                      <dd class="m-0">Value</dd>
                    </div>
                    <div class="d-flex gap-1">
                      <dt class="text-muted fw-normal">Meta:</dt>
                      <dd class="m-0">Value</dd>
                    </div>
                  </dl>
                </div>
              </div>

              <div class="d-lg-none">

                <div class="btn-group">
                  <button type="button" class="btn p-2 d-flex align-items-center justify-content-center" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dots" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <circle cx="5" cy="12" r="1" />
                      <circle cx="12" cy="12" r="1" />
                      <circle cx="19" cy="12" r="1" />
                    </svg>
                  </button>

                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Add Below</a></li>
                    <li><a class="dropdown-item" href="#">Copy</a></li>
                    <li><a class="dropdown-item" href="#">Move Up</a></li>
                    <li><a class="dropdown-item" href="#">Move Down</a></li>
                    <li>
                      <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="#">Delete</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="d-none d-lg-block card-actions group-hover-opacity h-100 transition-all me-n3 group-hover-me-0 position-absolute top-0 bottom-0">
              <div class="card-actions-container d-flex h-100 px-2">

                <div class="d-flex flex-row align-items-center gap-2 bg-white">
                  <button type="button" title="Add Below" aria-title="Add Below" class="btn p-2 d-flex align-items-center justify-content-center">

                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <circle cx="12" cy="12" r="9" />
                      <line x1="9" y1="12" x2="15" y2="12" />
                      <line x1="12" y1="9" x2="12" y2="15" />
                    </svg>
                  </button>
                  <button type="button" title="Copy" aria-title="Copy" class="btn p-2 d-flex align-items-center justify-content-center">

                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-copy" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <rect x="8" y="8" width="12" height="12" rx="2" />
                      <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />
                    </svg>
                  </button>
                  <button type="button" title="Move Up" aria-title="Move Up" class="btn p-2 d-flex align-items-center justify-content-center">

                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-up" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="16" y1="9" x2="12" y2="5" />
                      <line x1="8" y1="9" x2="12" y2="5" />
                    </svg>
                  </button>
                  <button type="button" title="Move Down" aria-title="Move Down" class="btn p-2 d-flex align-items-center justify-content-center">

                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-down" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="18" y1="13" x2="12" y2="19" />
                      <line x1="6" y1="13" x2="12" y2="19" />
                    </svg>
                  </button>
                  <button type="button" title="Delete" aria-title="Delete" class="btn p-2 d-flex align-items-center justify-content-center">

                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <use xlink:href="${iconSprite}#tabler-tabler-trash" />
                    </svg>
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>

</div>
`
export const GeneralizedList = () => `${listHTML}`

GeneralizedList.storyName = 'Generalized List'

GeneralizedList.parameters = {
  notes: `
    # GeneralizedList

    ## Documentation
    
    Here are some notes on lists. 
    
    ## Code Sample
    
    \`\`\`html
    ${listHTML}
    \`\`\`
    
    `
}
