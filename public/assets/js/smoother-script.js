(function () {
  if (typeof window === 'undefined') return;

  // Ensure GSAP and plugins are available
  if (!window.gsap) {
    console.warn('GSAP not loaded');
    return;
  }

  const { gsap, ScrollTrigger, ScrollSmoother } = window;

  if (!ScrollTrigger || !ScrollSmoother) {
    console.warn('Required GSAP plugins not loaded');
    return;
  }

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  const isTouchDevice = 'ontouchstart' in window || 
    navigator.maxTouchPoints > 0 || 
    navigator.msMaxTouchPoints > 0;

  if (!isTouchDevice) {
    let smoother;
    let resizeTimer;
    let isResizing = false;
    let lastWidth = window.innerWidth;
    let rafId;
    let ctx;
    
    const getWrapper = () => {
      const wrapper = document.querySelector('#smooth-wrapper');
      return wrapper instanceof Element ? wrapper : null;
    };

    const initSmoother = () => {
      // Kill previous context if it exists
      if (ctx) {
        ctx.revert();
        ctx = null;
      }

      if (smoother) {
        smoother.kill();
        smoother = null;
      }

      const wrapper = getWrapper();
      if (!wrapper) return;

      // Create new GSAP context
      ctx = gsap.context(() => {
        wrapper.style.backfaceVisibility = 'hidden';
        wrapper.style.transformStyle = 'preserve-3d';
        wrapper.style.willChange = 'transform';
        wrapper.style.transform = 'translate3d(0,0,0)';

        try {
          smoother = ScrollSmoother.create({
            wrapper: wrapper,
            content: wrapper.querySelector('#smooth-content'),
            smooth: 1.2,
            normalizeScroll: false,
            ignoreMobileResize: true,
            smoothTouch: false,
            renderPriority: 1,
            ease: "power3.out"
          });

          // Configure ScrollTrigger
          ScrollTrigger.config({
            limitCallbacks: true,
            ignoreMobileResize: true,
            autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
          });

          // Refresh ScrollTrigger after a short delay to ensure DOM is ready
          setTimeout(() => {
            ScrollTrigger.refresh(true);
          }, 100);

        } catch (error) {
          console.warn('Error initializing ScrollSmoother:', error);
        }
      }, wrapper); // Scope context to wrapper element
    };

    const handleResize = () => {
      if (resizeTimer) {
        clearTimeout(resizeTimer);
      }

      const currentWidth = window.innerWidth;
      if (Math.abs(currentWidth - lastWidth) < 50) {
        return;
      }
      lastWidth = currentWidth;

      if (!isResizing) {
        isResizing = true;
        document.documentElement.style.setProperty('scroll-behavior', 'auto');
        if (smoother) {
          smoother.paused(true);
        }
      }

      resizeTimer = setTimeout(() => {
        const scrollPos = window.scrollY;
        
        // Kill context and smoother
        if (ctx) {
          ctx.revert();
          ctx = null;
        }
        if (smoother) {
          smoother.kill();
          smoother = null;
        }

        requestAnimationFrame(() => {
          initSmoother();
          window.scrollTo(0, scrollPos);
          
          setTimeout(() => {
            if (smoother) {
              smoother.paused(false);
              document.documentElement.style.removeProperty('scroll-behavior');
              isResizing = false;
            }
          }, 50);
        });
      }, 100);
    };

    // Initialize only when DOM is ready
    const initialize = () => {
      if (document.readyState === 'complete') {
        requestAnimationFrame(initSmoother);
      } else {
        window.addEventListener('load', () => requestAnimationFrame(initSmoother));
      }
    };

    initialize();

    // Event listeners with cleanup
    const cleanup = () => {
      if (ctx) {
        ctx.revert();
        ctx = null;
      }
      if (smoother) {
        smoother.kill();
        smoother = null;
      }
      ScrollTrigger.killAll();
      clearTimeout(resizeTimer);
      cancelAnimationFrame(rafId);
      window.removeEventListener('beforeunload', cleanup);
    };

    window.addEventListener('resize', () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      rafId = requestAnimationFrame(handleResize);
    }, { passive: true });

    document.addEventListener('visibilitychange', () => {
      if (!document.hidden && !isResizing) {
        requestAnimationFrame(() => {
          ScrollTrigger.refresh(true);
        });
      }
    });

    window.addEventListener('beforeunload', cleanup);
  }
})();