interface GSAPAnimation {
    kill: () => void;
  }
  
  interface GSAPTimelineVars extends GSAPTweenVars {
    scrollTrigger?: {
      trigger: Element;
      start?: string;
      end?: string;
      toggleActions?: string;
      markers?: boolean;
      scrub?: boolean | number;
      pin?: boolean | string | Element;
      anticipatePin?: number;
      snap?: number | number[] | object;
    };
  }
  
  interface GSAPTweenVars {
    x?: number | string;
    y?: number | string;
    opacity?: number;
    duration?: number;
    ease?: string;
    stagger?: number;
    delay?: number;
    [key: string]: any;
  }
  
  interface GSAPUtils {
    selector: (scope: Element) => (selector: string) => Element[];
    toArray: (targets: string | Element | Element[]) => Element[];
  }
  
  declare module 'gsap' {
    export function timeline(vars?: GSAPTimelineVars): GSAPTimeline;
    export function from(targets: string | Element | Element[], vars: GSAPTweenVars): GSAPAnimation;
    export function to(targets: string | Element | Element[], vars: GSAPTweenVars): GSAPAnimation;
    export const utils: GSAPUtils;
  }
  
  declare module '@gsap/react' {
    export function useGSAP(
      callback: () => void | (() => void),
      config?: { 
        scope?: React.RefObject<Element> | null;
        dependencies?: any[];
      }
    ): void;
  }