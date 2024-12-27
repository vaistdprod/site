// We do NOT import Isotope at the top-level
// Instead, we load it inside the function so no DOM usage on the server.

const initIsotope = async () => {
  // Async import of isotope-layout
  const Isotope = (await import('isotope-layout')).default;

  let iso;
  let grid = document.querySelectorAll('.gallery');
  let filtersElem = document.querySelector('.filtering');
  let buttonGroups = document.querySelectorAll('.filtering');

  if (grid.length >= 1) {
    grid.forEach((item) => {
      iso = new Isotope(item, {
        itemSelector: '.items',
      });
    });
  }

  if (filtersElem) {
    filtersElem.addEventListener('click', function (event) {
      if (!matchesSelector(event.target, 'span')) return;
      let filterValue = event.target.getAttribute('data-filter');
      iso.arrange({ filter: filterValue });
    });

    const radioButtonGroup = (buttonGroup) => {
      buttonGroup.addEventListener('click', (event) => {
        if (!matchesSelector(event.target, 'span')) return;
        buttonGroup.querySelector('.active').classList.remove('active');
        event.target.classList.add('active');
      });
    };
    for (var i = 0, len = buttonGroups.length; i < len; i++) {
      var buttonGroup = buttonGroups[i];
      radioButtonGroup(buttonGroup);
    }
  }
};

export default initIsotope;

// Optional: If you see an error about matchesSelector, you can import it dynamically
// from 'desandro-matches-selector' as well, or use event.target.matches('span').