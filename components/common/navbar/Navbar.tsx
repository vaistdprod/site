'use client';

import React, { useEffect, useRef } from 'react';
import NavbarContent from './NavbarContent';

export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);
  const collapseRef = useRef<HTMLDivElement>(null);

    // Handle scroll to add/remove 'nav-scroll' class on the navbar.
    function handleScroll() {
    const bodyScroll = window.scrollY;
    if (navRef.current) {
      if (bodyScroll > 300) navRef.current.classList.add('nav-scroll');
      else navRef.current.classList.remove('nav-scroll');
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    // Dropdown event handlers.
    function handleDropdownMouseMove(event: React.MouseEvent) {
        const dropdownMenu = event.currentTarget.querySelector('.dropdown-menu');
        if (dropdownMenu) dropdownMenu.classList.add('show');
    }

    function handleDropdownMouseLeave(event: React.MouseEvent) {
        const dropdownMenu = event.currentTarget.querySelector('.dropdown-menu');
        if (dropdownMenu) dropdownMenu.classList.remove('show');
    }

    // Toggle the collapsible menu.
    function handleToggleNav() {
        if (collapseRef.current) {
            if (collapseRef.current.classList.contains('show')) {
                collapseRef.current.classList.remove('show');
            } else {
                collapseRef.current.classList.add('show');
            }
        }
    }

  return (
    // Attach the navRef to a wrapping div so that we can add the 'nav-scroll' class.
    <div ref={navRef}>
      <NavbarContent
        onToggleNav={handleToggleNav}
        onDropdownMouseMove={handleDropdownMouseMove}
        onDropdownMouseLeave={handleDropdownMouseLeave}
        collapseRef={collapseRef}
      />
    </div>
  );
}
