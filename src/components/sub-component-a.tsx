import { Component, h } from '@stencil/core';

@Component({
  tag: 'sub-component-a'
})
export class SubComponentA {
  render() {
    return <div>
      <h2>Sub component A</h2>
      <listener-component></listener-component>
    </div>;
  }
}