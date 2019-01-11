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
export class LitElement extends UpdatingElement {
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement } from '../node_modules/@polymer/lit-element/lit-element.js';
let default_1 = class extends LitElement {
    render() {
        return html `
      <h2>[Simple Custom Element]</h2>
      `;
    }
};
default_1 = __decorate([
    customElement('simple-custom-element')
], default_1);
//# sourceMappingURL=simple-web-element.js.map