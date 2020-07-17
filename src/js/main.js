(function() {
  const accordion = document.querySelector('#accordion');
  const items = accordion.querySelectorAll('.menu__item');

  const getActiveElement = (elements, className) => {
    var element = undefined;
    elements.forEach(function (item) {
      if (item.classList.contains(className)) {
        element = item;
      }
    });
    return element;
  };

  const menuClickHandler = (evt) => {
    evt.preventDefault();
    if (!evt.target.classList.contains('menu__item-heading')) {
      return;
    }
    const header = evt.target;
    const item = header.parentElement;
    const itemActive = getActiveElement(items, 'show');

    if (itemActive === undefined) {
      item.classList.add('show');
    } else {
      itemActive.classList.remove('show');
      // если следующая вкладка не равна активной
      if (itemActive !== item) {
        item.classList.add('show');
      }
    }
  };

  accordion.addEventListener('click', menuClickHandler);
})();

