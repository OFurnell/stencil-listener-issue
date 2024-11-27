import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'my-component'
})
export class MyComponent {
  @State() page = "a";
  render() {
    return <div>
      <h1>My Component</h1>
      <button onClick={() => this.page = "a"}>A</button>
      <button onClick={() => this.page = "b"}>B</button>
      {this.page === "a" ? <sub-component-a></sub-component-a> : <sub-component-b></sub-component-b>}
    </div>;
  }
}
