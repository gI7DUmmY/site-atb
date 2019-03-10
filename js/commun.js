$(document).ready(function() {
  // init sidenav
  const elem1 = document.querySelectorAll('.sidenav');
  M.Sidenav.init(elem1);

  // init collapsible sidenav
  const elem2 = document.querySelector('.sidenav .collapsible');
  const instance2 = M.Collapsible.init(elem2);
  instance2.open();

  // init dropdown
  const elem3 = document.querySelectorAll('.dropdown-trigger');
  M.Dropdown.init(elem3);

  // init collapsible palmares
  const elem4 = document.querySelector('.palmares .collapsible');
  M.Collapsible.init(elem4);

  // init animations carousel
  var elem5 = document.querySelector('.carousel');
  M.Carousel.init(elem5, {
    numVisible: 2,
    indicators: true,
    duration: 500
  });

  // toggle dropdown icon
  $('#liDropdown').click(() => {
    if ($('#dropdown').text() == 'arrow_drop_down') {
      $('#dropdown').text('arrow_drop_up');
    } else if ($('#dropdown').text() == 'arrow_drop_up') {
      $('#dropdown').text('arrow_drop_down');
    }
  });
});
