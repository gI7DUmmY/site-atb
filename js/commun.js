$(document).ready(function() {
  // init sidenav
  const elem1 = document.querySelectorAll('.sidenav');
  M.Sidenav.init(elem1);

  // init collapsible sidenav
  const elem2 = document.querySelector('.collapsible');
  const instance2 = M.Collapsible.init(elem2);
  instance2.open();

  // init dropdown
  const elem3 = document.querySelectorAll('.dropdown-trigger');
  M.Dropdown.init(elem3);

  // toggle dropdown icon
  $('#liDropdown').click(() => {
    if ($('#dropdown').text() == 'arrow_drop_down') {
      $('#dropdown').text('arrow_drop_up');
    } else if ($('#dropdown').text() == 'arrow_drop_up') {
      $('#dropdown').text('arrow_drop_down');
    }
  });
});
