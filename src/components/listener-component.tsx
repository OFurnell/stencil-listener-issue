import { Component, Listen, h } from '@stencil/core';

@Component({
  tag: 'listener-component'
})
export class SubComponentB {
  @Listen('click')
  handleClick() {
    console.log('click', new Date());
  }

  render() {
    return <button>Click me</button>;
  }
}