/*
To get things working, I needed to edit some paths in lit-element.js (node_modules)...

import { TemplateResult } from 'lit-html';
import { render } from 'lit-html/lib/shady-render';
import { UpdatingElement } from './lib/updating-element.js';
export * from './lib/updating-element.js';
export * from './lib/decorators.js';
export { html, svg } from 'lit-html/lit-html';

import { TemplateResult } from '../../lit-html/lit-html.js';
import { render } from '../../lit-html/lib/shady-render.js';
import { UpdatingElement } from './lib/updating-element.js';
export * from './lib/updating-element.js';
export * from './lib/decorators.js';
export { html, svg } from '../../lit-html/lit-html.js';

The following may offer a better solution:
https://medium.com/@caludio/how-to-use-module-path-aliases-in-visual-studio-typescript-and-javascript-e7851df8eeaa
*/
import './todo-lists.js';
import './simple-web-element.js';
//# sourceMappingURL=index.js.map