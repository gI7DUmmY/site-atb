$(document).ready(function() {
  // init sidenav
  var elem1 = document.querySelectorAll(".sidenav");
  var instance1 = M.Sidenav.init(elem1);

  // init collapsible sidenav
  var elem2 = document.querySelectorAll('.collapsible');
  var instance2 = M.Collapsible.init(elem2);

  // init dropdown
  var elem3 = document.querySelectorAll(".dropdown-trigger");
  var instance3 = M.Dropdown.init(elem3);

  // parsing rss feed
  var url =
    "https://www.youtube.com/feeds/videos.xml?channel_id=UCA9Mku7prq0xSWZ8GuGtf2g";

  feednami.load(url, function(result) {
    if (result.error) {
      console.log(result.error);
    } else {
      var entries = result.feed.entries;
      // console.log(entries);
      // console.log(entries[0].image.url);
      $("#titre1").text(entries[0].title);
      $("#image1").attr({ src: entries[0].image.url });
      $("#link1").attr({ href: entries[0].link });

      $("#titre2").text(entries[1].title);
      $("#image2").attr({ src: entries[1].image.url });
      $("#link2").attr({ href: entries[1].link });

      $("#titre3").text(entries[2].title);
      $("#image3").attr({ src: entries[2].image.url });
      $("#link3").attr({ href: entries[2].link });
    }
  });
});
