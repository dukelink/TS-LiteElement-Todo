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

@customElement('todo-item') default class extends LitElement {
  
  @property() todo=''

  @property({type: Function}) remove

  render() {
    return html`
    <style>
      div { display: inline; }
    </style>

    <div>${this.todo}</div> <button @click=${this.remove}>-</button>
    `
  }

}

@customElement('todo-list') default class extends LitElement {

  @property() list = ['clean the house!','buy milk']

  constructor() {
    super();
    for (let i=0; i<1000; i++)
      this.list.push('Item #'+i);
  }

  @property() todo = ''

  newTodo(){
    this.list = [...this.list, this.todo]
    this.todo=''
  }

  render() {
    return html`
      <h2>ToDo List</h2>
      <ul>
        ${this.list.map( (v, index) => html`<li>
           <todo-item .todo=${v} .remove=${() => this.list = this.list.filter((_,i)=> index !== i)}></todo-item>
         </li>`)}
      </ul>
      <input
        .value=${this.todo}
        @input=${e=>this.todo = e.target.value}
        @keypress=${e=> e.target.value !== '' && e.key === 'Enter' && this.newTodo()}>
      <button @click=${()=>this.todo !== '' && this.newTodo()}>+</button>
      `
  }
}
