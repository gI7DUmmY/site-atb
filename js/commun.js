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

  // toggle dropdown icon
  $('#liDropdown').click(() => {
    if ($('#dropdown').text() == 'arrow_drop_down') {
      $('#dropdown').text('arrow_drop_up');
    } else if ($('#dropdown').text() == 'arrow_drop_up') {
      $('#dropdown').text('arrow_drop_down');
    }
  });

  // init tooltip
  const elem5 = document.querySelector('#dkToggle i');
  M.Tooltip.init(elem5, {
    html: 'Dark Mode',
    position: 'bottom'
  });

  // init darkmodeJS
  const darkmode = new Darkmode();

  $('#dkToggle i').click((e) => {
    if ( !darkmode.isActivated() ) {
      e.target.classList.replace('fa-toggle-off', 'fa-toggle-on');
    } else {
      e.target.classList.replace('fa-toggle-on', 'fa-toggle-off');
    };
    darkmode.toggle();
    // const elem = document.querySelector('#dkToggle i');
    const tooltip = M.Tooltip.getInstance(elem5);
    tooltip.close();
  });
});
