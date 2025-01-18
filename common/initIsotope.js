const initIsotope = async () => {
  const Isotope = (await import('isotope-layout')).default;

  let iso;
  let grid = document.querySelectorAll('.gallery');
  let filtersElem = document.querySelector('.filtering');
  let buttonGroups = document.querySelectorAll('.filtering');

  const isSpan = (el) => el.tagName && el.tagName.toLowerCase() === 'span';

  if (grid.length >= 1) {
    grid.forEach((item) => {
      iso = new Isotope(item, {
        itemSelector: '.items',
      });
    });
  }

  if (filtersElem) {
    filtersElem.addEventListener('click', function (event) {
      if (!isSpan(event.target)) return;
      let filterValue = event.target.getAttribute('data-filter');
      iso.arrange({ filter: filterValue });
    });

    const radioButtonGroup = (buttonGroup) => {
      buttonGroup.addEventListener('click', (event) => {
        if (!isSpan(event.target)) return;
        buttonGroup.querySelector('.active')?.classList.remove('active');
        event.target.classList.add('active');
      });
    };

    for (let i = 0; i < buttonGroups.length; i++) {
      let buttonGroup = buttonGroups[i];
      radioButtonGroup(buttonGroup);
    }
  }
};

export default initIsotope;