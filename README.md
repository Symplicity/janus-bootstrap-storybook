
Introduction
---------------

This storybook in an environment to build, test, certify, and document reference components with [Janus-Bootstrap](https://github.com/Symplicity/bootstrap/tree/v4.4.1-janus).

Installation
---------------

1. If you haven't already, install [Node](https://nodejs.org/en/) and [Docker](https://www.docker.com/products/docker-desktop)
2. Clone this repository to your local machine: `git clone git@github.com:Symplicity/janus-bootstrap-storybook.git`
3. `npm install`
4. `npm run storybook`


Contributing
---------------

1. First, have a look at the [Writing Stories](https://storybook.js.org/basics/writing-stories) section in the Storybook documentation
1. Before you begin:
   1. `npm update` to ensure you have the latest versions of supporting libraries.
   2. `npm run test` to detect visual regressions resulting from the update. Any regressions found should be reported to contributors and resolved.
2. Create or modify stories in the stories folder
3. Pass all of the _Development Checkpoints_ outlined herein


Development Checkpoints (Proposed)
--------------------------------

1. Desktop, tablet and mobile breakpoints have been evaluated.
2. There are no Accessibility errors reported in the accessibility panel.
3. The component is entirely keyboard accessible, with standard keyboard interactions. See: [ARIA Design Pattern Examples](https://www.w3.org/TR/wai-aria-practices/examples/).
4. JAWS Inspect describes good reading order and clear labels.
5. UX has reviewed and approved the final build of the UI.
6. Any additions or changes to supporting libraries have been reviewed and approved by design and technical leads.
7. Documentation covers usage scenarios, dos and don'ts and configuration.
8. Visual regression tests have been added/updated, run and approved.
10. Code review is approved.
11. Version number _(breaking.patch.fix)_ is updated in package.json. See [Semantic Versioning](semver.org).
12. CHANGELOG.md is updated to reflect your additions. See [format requirements](http://keepachangelog.com/en/1.0.0/).


Visual Regression Testing
---------------

Visual regression testing opens storybook pages in a headless browser, takes screenshots, and compares those screenshots to the reference (previously approved) versions. We use Docker to ensure that the platform you are running does not influence test results. **Important: Manual review of test results is essential,** because visual regression is imperfect. 

###Running a test
1. Run `npm run test`
2. If you see npm errors, the test has probably failed. Review the log for something like: 

   ```code
   report | Test completed...
   report | 15 Passed
   report | 3 Failed
   ```
3. Always review test results manually, because visual regression is imperfect.

###Reviewing test results
1. If the test results automatically opened in your browser, you probably passed. You must verify this manually.
2. To open test results, use `npm run test:view-report`

###Approving test results
1. To approve test results and update the reference tests, use `npm run approve`


###Adding new tests
1. Edit `backstop.json` and add your test in the `scenarios` array. See [the docs](https://github.com/garris/BackstopJS#using-backstopjs)
2. If this is a new scenario and component you will need to generate a set of reference images before running a test, for example you would use `npm run reference --filter=Typography-SB` if your new sceario had a label of `Typography-SB`.
3. Run all tests using `npm run test`.
4. In the test report, the only failures reported should be for your new test.
5. If there are other failures, **you must resolve them** with contributors before continuing.
6. Run `npm run approve` to approve all of the results of your test, including your new test.


Sharing your work
---------------

If you need others to review your work, an easy option is to export and publish it on the web. Storybook comes with a tool for this:

1. To export your site into a directory called _export:_ `npx build-storybook -c .storybook -o `
2. Upload the _export_ directory to an online location, such as a dev sandbox: `scp -r ../storybook-export [some_server]:[web/root/path]`


Storybook Addons
---------------

Supercharge your documentation and scenario testing with the Addons that are already available in this Storybook:

   - [Notes](https://github.com/storybookjs/storybook/tree/master/addons/notes) for documenting your stories
   - [Viewport](https://github.com/storybookjs/storybook/tree/master/addons/viewport) for testing mobile, tablet and desktop viewports
   - [Backgrounds](https://github.com/storybookjs/storybook/tree/master/addons/backgrounds) to test components on different backgrounds. Colors are populated from [Janus tokens](https://github.com/Symplicity/janus-tokens).
   - [a11y](https://github.com/storybookjs/storybook/tree/master/addons/a11y) for accessibility checks and color-blindness previews
   - [RTL](https://github.com/unindented/storybook-addon-rtl/) to toggle between left-to-right and right-to-left text direction of the preview frame
   - [Knobs](https://github.com/storybookjs/storybook/tree/master/addons/knobs) to dynamically set variables/properties in your story
   - [Events](https://github.com/storybookjs/storybook/tree/master/addons/events) to create and emit events. Check out the awesome [storybook-html-lab](https://github.com/derhess/storybook-html-lab/tree/master/stories) for examples.
   - [Actions](https://github.com/storybookjs/storybook/tree/master/addons/actions) to display data received by event handlers. Examples at [storybook-html-lab](https://github.com/derhess/storybook-html-lab/tree/master/stories).


FAQ
---------------

1. **What if I need to add new CSS?**
   <br>Answer: This storybook is intended to document usage of [Janus-Bootstrap](https://github.com/Symplicity/bootstrap/tree/v4.4.1-janus), so all CSS and JS should come from that framework. Additional packages could be added  via `npm install --save-dev <package>`, and documented in your stories. You will need to edit `.storybook/webpack.config.js` and potentially other configs to make new JS packages available in stories. 
2. **Something is confusing or not covered in this Read Me. What do I do?**
   <br>Answer: Be a contributor and fix it! 
3. **I want to use another Storybook Addon. What do I do?**
   <br>Answer: Add it in, get feedback, and fully configure it
   

Architecture Notes
---------------

- [Janus-Bootstrap](https://github.com/Symplicity/bootstrap/tree/v4.4.1-janus) and [Janus-Tokens](https://github.com/Symplicity/janus-tokens) are both installed as dependencies in package.json
- The compiled bootstrap.css and bootstrap.js files are automatically included via `.storybook/css-loader.scss` and `.storybook/webpack.config.js`


TO DO
---------------

- Update changelog
- Add to Symplicity Github
