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

  // init carousel membres
  const elem6 = document.querySelector('.carousel.carousel-slider');
  M.Carousel.init(elem6, {
    fullWidth: true,
    indicators: true
  });

  // toggle dropdown icon
  $('#liDropdown').click(() => {
    if ($('#dropdown').text() == 'arrow_drop_down') {
      $('#dropdown').text('arrow_drop_up');
    } else if ($('#dropdown').text() == 'arrow_drop_up') {
      $('#dropdown').text('arrow_drop_down');
    }
  });

  // init darkmodeJS
  const darkmode = new Darkmode();

  // init tooltip
  const elem5 = document.querySelector('#dkToggle i');
  M.Tooltip.init(elem5, {
    html: 'Dark Mode',
    position: 'bottom'
  });

  // init etat bouton DarkMode au chargement de la page
  if ( darkmode.isActivated() ) {
    if (elem5.classList.contains('fa-toggle-off')) elem5.classList.replace('fa-toggle-off', 'fa-toggle-on');
  } else if (elem5.classList.contains('fa-toggle-on')) elem5.classList.replace('fa-toggle-on', 'fa-toggle-off');

  
  // // active Dark Mode en fonction de l'heure
  // const hours = new Date().getHours();
  // const isDayTime = hours >= 6 && hours <= 21;
  // let userSet = false;
  // console.log(hours, isDayTime, darkmode.isActivated());
  // if (!isDayTime && !darkmode.isActivated() && !userSet) {
  //   darkmode.toggle()
  // } else {
  //   if (isDayTime && darkmode.isActivated() && !userSet) darkmode.toggle();
  // };
  
  // switch Dark Mode
  $('#dkToggle i').click((e) => {
    if ( !darkmode.isActivated() ) {
      e.target.classList.replace('fa-toggle-off', 'fa-toggle-on');
      userSet = true;
    } else {
      e.target.classList.replace('fa-toggle-on', 'fa-toggle-off');
      userSet = true;
    };
    darkmode.toggle();
    const tooltip = M.Tooltip.getInstance(elem5);
    tooltip.close();
  });
});
