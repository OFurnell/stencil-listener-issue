/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ListenerComponent {
    }
    interface MyComponent {
    }
    interface SubComponentA {
    }
    interface SubComponentB {
    }
}
declare global {
    interface HTMLListenerComponentElement extends Components.ListenerComponent, HTMLStencilElement {
    }
    var HTMLListenerComponentElement: {
        prototype: HTMLListenerComponentElement;
        new (): HTMLListenerComponentElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLSubComponentAElement extends Components.SubComponentA, HTMLStencilElement {
    }
    var HTMLSubComponentAElement: {
        prototype: HTMLSubComponentAElement;
        new (): HTMLSubComponentAElement;
    };
    interface HTMLSubComponentBElement extends Components.SubComponentB, HTMLStencilElement {
    }
    var HTMLSubComponentBElement: {
        prototype: HTMLSubComponentBElement;
        new (): HTMLSubComponentBElement;
    };
    interface HTMLElementTagNameMap {
        "listener-component": HTMLListenerComponentElement;
        "my-component": HTMLMyComponentElement;
        "sub-component-a": HTMLSubComponentAElement;
        "sub-component-b": HTMLSubComponentBElement;
    }
}
declare namespace LocalJSX {
    interface ListenerComponent {
    }
    interface MyComponent {
    }
    interface SubComponentA {
    }
    interface SubComponentB {
    }
    interface IntrinsicElements {
        "listener-component": ListenerComponent;
        "my-component": MyComponent;
        "sub-component-a": SubComponentA;
        "sub-component-b": SubComponentB;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "listener-component": LocalJSX.ListenerComponent & JSXBase.HTMLAttributes<HTMLListenerComponentElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "sub-component-a": LocalJSX.SubComponentA & JSXBase.HTMLAttributes<HTMLSubComponentAElement>;
            "sub-component-b": LocalJSX.SubComponentB & JSXBase.HTMLAttributes<HTMLSubComponentBElement>;
        }
    }
}
