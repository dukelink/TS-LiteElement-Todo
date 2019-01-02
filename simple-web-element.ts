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

import {LitElement, html, property, customElement} from './node_modules/@polymer/lit-element/lit-element.js'

@customElement('simple-custom-element') default class extends LitElement {
  render() {
    return html`
      <h2>[Simple Custom Element]</h2>
      `
  }
}
