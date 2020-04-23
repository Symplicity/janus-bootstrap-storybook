

import readme from '../README.md';
import changelog from '../CHANGELOG.md';
import pkg from '../package.json';
import janusBoostrapPkg from '../node_modules/bootstrap/package.json';
import janusDesignTokensPkg from '../node_modules/@symplicity/janus-tokens/package.json';

import designTokensDocs from '../node_modules/@symplicity/janus-tokens/docs/index.html';

import unicon from '../node_modules/@symplicity/unicon/style.css';

export default {
  title: 'About|Start Here',
   parameters: { 
      notes: readme
   }
};

export const story1 = () => `<h1>Welcome</h1><p>To get started with this storybook, check out the <a href="/?path=/info/about-start-here--story">read me</a>.</p>`;

story1.story = {
   name: 'Read Me'
};


export const story2 = () => `<p>View the changelog in the <a href="/?path=/info/about-start-here--story2">notes tab</a>.</p>`;

story2.story = {
   name: 'Changelog',
   parameters: { 
      notes: changelog
   }
};


export const story3 = () => {
   
   var thisVersion = pkg.version;
   
   return `
   
      <h2>Janus Bootstrap Storybook</h2>
      Version ${thisVersion}
      
      <br>
      <br>
      
      <h3>Dependencies</h3>
      <table class="table">
         <thead>
            <tr>
               <th>Dependency</th>
               <th>Version</th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td>Janus-Bootstrap</td>
               <td>${janusBoostrapPkg.version}</td>
            </tr>
            <tr>
               <td>Janus Design Tokens</td>
               <td>${janusDesignTokensPkg.version}</td>
            </tr>
         </tbody>
      </table>
      
   `;
   
};

story3.story = {
   name: 'Versions',
   parameters: { 
      notes: ''
   }   
};
