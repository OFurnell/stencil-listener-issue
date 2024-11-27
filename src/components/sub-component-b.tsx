import { Component, h } from '@stencil/core';

@Component({
  tag: 'sub-component-b'
})
export class SubComponentB {
  render() {
    return <div>
      <h2>Sub component B</h2>
      <listener-component></listener-component>
    </div>;
  }
}