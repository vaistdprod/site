import { Context } from 'gsap';

import { Context } from 'gsap';

export interface GSAPContext {
  selector: (selector: string) => NodeListOf<Element>;
  add(callback: () => void): void;
  revert(revertOption?: boolean): void;
  kill(): void;
}

declare module '@gsap/react' {
  export interface useGSAPConfig {
    scope?: React.RefObject<Element>;
    dependencies?: any[];
  }

  export type ContextFunc = () => void;
}

declare module 'gsap' {
  export interface Context {
    selector(selector: string): NodeListOf<Element>;
  }
}
