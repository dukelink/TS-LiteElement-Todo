var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
import { LitElement, html, property, customElement } from './node_modules/@polymer/lit-element/lit-element.js';
let default_1 = class default_1 extends LitElement {
    constructor() {
        super(...arguments);
        this.todo = '';
    }
    render() {
        return html `
    <style>
      div { display: inline; }
    </style>

    <div>${this.todo}</div> <button @click=${this.remove}>-</button>
    `;
    }
};
__decorate([
    property()
], default_1.prototype, "todo", void 0);
__decorate([
    property({ type: Function })
], default_1.prototype, "remove", void 0);
default_1 = __decorate([
    customElement('todo-item')
], default_1);
let default_2 = class default_2 extends LitElement {
    constructor() {
        super();
        this.list = ['clean the house!', 'buy milk'];
        this.todo = '';
        for (let i = 0; i < 1000; i++)
            this.list.push('Item #' + i);
    }
    newTodo() {
        this.list = [...this.list, this.todo];
        this.todo = '';
    }
    render() {
        return html `
      <h2>ToDo List</h2>
      <ul>
        ${this.list.map((v, index) => html `<li>
           <todo-item .todo=${v} .remove=${() => this.list = this.list.filter((_, i) => index !== i)}></todo-item>
         </li>`)}
      </ul>
      <input
        .value=${this.todo}
        @input=${e => this.todo = e.target.value}
        @keypress=${e => e.target.value !== '' && e.key === 'Enter' && this.newTodo()}>
      <button @click=${() => this.todo !== '' && this.newTodo()}>+</button>
      `;
    }
};
__decorate([
    property()
], default_2.prototype, "list", void 0);
__decorate([
    property()
], default_2.prototype, "todo", void 0);
default_2 = __decorate([
    customElement('todo-list')
], default_2);
//# sourceMappingURL=todo-lists.js.map