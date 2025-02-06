(function () {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  const isTouchDevice = 'ontouchstart' in window || 
    navigator.maxTouchPoints > 0 || 
    navigator.msMaxTouchPoints > 0;

  const isHighPerformance = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;

  if (!isTouchDevice) {
    let smoother;
    let resizeTimer;
    let isResizing = false;
    let lastWidth = window.innerWidth;
    let rafId;
    let lastScrollTop = 0;
    let ticking = false;
    
    const wrapper = document.querySelector('#smooth-wrapper');
    
    const updateScroll = () => {
      if (!ticking) {
        rafId = requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          if (Math.abs(scrollTop - lastScrollTop) > 1) {
            lastScrollTop = scrollTop;
            if (smoother) {
              smoother.effects(false);
            }
          } else if (smoother) {
            smoother.effects(true);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    const initSmoother = () => {
      if (smoother) {
        smoother.kill();
        smoother = null;
      }

      ScrollTrigger.getAll().forEach(st => st.kill());
      ScrollTrigger.clearScrollMemory();
      ScrollTrigger.clearMatchMedia();

      if (wrapper) {
        wrapper.style.backfaceVisibility = 'hidden';
        wrapper.style.transformStyle = 'preserve-3d';
        wrapper.style.willChange = 'transform';
        wrapper.style.transform = 'translate3d(0,0,0)';
      }

      smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 2,
        effects: true,
        normalizeScroll: false,
        ignoreMobileResize: true,
        smoothTouch: false,
        renderPriority: 1,
        ease: "power2.out",
        preventDefault: true,
        lockAxis: true,
        syncInterval: 16.67,
        limitVelocity: true,
        maxVelocity: 10,
        smoothTime: 0.5,
        fastScrollEnd: true,
        onUpdate: () => {
          if (wrapper) {
            const currentTransform = wrapper.style.transform;
            if (currentTransform && !currentTransform.includes('translateZ')) {
              wrapper.style.transform = `${currentTransform} translateZ(0)`;
            }
          }
        }
      });

      ScrollTrigger.config({
        limitCallbacks: true,
        ignoreMobileResize: true,
        autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
      });

      ScrollTrigger.refresh(true);
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
        
        if (smoother) {
          smoother.kill();
          smoother = null;
        }

        ScrollTrigger.refresh(true);
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

    if (document.readyState === 'complete') {
      requestAnimationFrame(initSmoother);
    } else {
      window.addEventListener('load', () => requestAnimationFrame(initSmoother));
    }

    window.addEventListener('scroll', updateScroll, { passive: true });
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

    window.addEventListener('beforeunload', () => {
      if (smoother) {
        smoother.kill();
      }
      ScrollTrigger.killAll();
      clearTimeout(resizeTimer);
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', updateScroll);
    });
  }
})();
