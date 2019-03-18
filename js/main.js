$(document).ready(function() {
  // parsing rss feed
  const url =
    "https://www.youtube.com/feeds/videos.xml?channel_id=UCA9Mku7prq0xSWZ8GuGtf2g";

  feednami.load(url, function(result) {
    if (result.error) {
      console.log(result.error);
    } else {
      const entries = result.feed.entries;
      // console.log(entries);
      // console.log(entries[0].image.url);
      $("#titre1").text(entries[0].title);
      $("#image1").attr({
        src: entries[0].image.url.replace("hqdefault", "maxresdefault")
      });
      $("#link1").attr({ href: entries[0].link });

      $("#titre2").text(entries[1].title);
      $("#image2").attr({
        src: entries[1].image.url.replace("hqdefault", "maxresdefault")
      });
      $("#link2").attr({ href: entries[1].link });

      $("#titre3").text(entries[2].title);
      $("#image3").attr({
        src: entries[2].image.url.replace("hqdefault", "maxresdefault")
      });
      $("#link3").attr({ href: entries[2].link });
    }
  });

  // init smooth-scroll
  const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000
  });

  // EmailJS
  const myform = $("form#contact");
  myform.submit(function(event) {
    event.preventDefault();

    // Change to your service ID, or keep using the default service
    const service_id = "ovh_atb";
    const template_id = "contact_site_atb";

    myform.find("button#send").addClass("disabled");
    myform.find("button#reset").addClass("disabled");
    myform.find("button#send").text("Envoi en cours...");
    $('#data').val(
      $('#msg').val().replace(/\n/g, "<br />")
    );

    emailjs.sendForm(service_id, template_id, myform[0]).then(
      function() {
        M.toast({html: 'Email envoyé !', classes: 'rounded'});
        myform.find("button#send").text("Envoyer");
        myform.find("button#send").removeClass("disabled");
        myform.find("button#reset").removeClass("disabled");
        $('button#reset').click();
      },
      function(err) {
        M.toast({html: `L'envoi a échoué :\r\n ${JSON.stringify(err)}`, classes: 'rounded'});
        myform.find("button#send").text("Envoyer");
        myform.find("button#send").removeClass("disabled");
        myform.find("button#reset").removeClass("disabled");
      }
    );
    return false;
  });
});
