/* eslint-disable @typescript-eslint/no-empty-object-type, @typescript-eslint/no-explicit-any */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'bootstrap' {
  export class Toast {
    constructor(element: any, options?: any);
    show(): void;
    hide(): void;
  }
  export class Modal {
    constructor(element: any, options?: any);
    show(): void;
    hide(): void;
  }
  export class Tooltip {
    constructor(element: any, options?: any);
  }
  export class Popover {
    constructor(element: any, options?: any);
  }
  export class Alert {
    constructor(element: any);
  }
  export class Button {
    constructor(element: any);
  }
  export class Carousel {
    constructor(element: any, options?: any);
  }
  export class Collapse {
    constructor(element: any, options?: any);
  }
  export class Dropdown {
    constructor(element: any, options?: any);
  }
  export class Offcanvas {
    constructor(element: any, options?: any);
  }
  export class ScrollSpy {
    constructor(element: any, options?: any);
  }
  export class Tab {
    constructor(element: any);
  }
}