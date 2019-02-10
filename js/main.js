function divMaker() {

  var n = parseInt(prompt("Koliko krugova?"));
  // replace with input

  /*  for (let i = 0; i < n; i++) {
     $(".main-box").append("<div></div>");
   } */
  // div maker



  var a = [];
  for (var i = 0; i < n; i++) {
    a.push("<div></div>");
    console.log("div#" + n);
  }
  $(".main-box").append(a.join(""));
}


function manipulations() {

  $(window).on("load", function () {



    $(".main-box > div").each(function () {
      var $t = $(this);
      var bodyWidth = window.innerWidth;
      var bodyHeight = window.innerHeight;
      //var link = "https://picsum.photos/35/35?image=" + n;

      var link = "https://placeimg.com/40/40/any";

      var size = Math.floor(Math.random() * (40 - 8 + 1)) + 8;
      var zIndex = Math.floor(Math.random() * (10 - (-2) + 1)) + (-2);

      if (zIndex < 1) {
        var blur = 10 + 'px';
      } else if (zIndex > 1) {
        var blur = 0 + 'px';
      } // add blur to z-index
      var contWidth = window.innerWidth;
      var contHeight = window.innerHeight;

      // var color = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
      var color = randomColor({
        luminosity: "light",
        hue: "random"
      });
      // a hex code for an attractive color

      //var scale = Math.floor(Math.random() * $t.width());

      var randomTopPos = Math.floor(Math.random() * (bodyHeight - $t.width()));
      var randomLeftPos = Math.floor(Math.random() * (bodyWidth - $t.height()));



      $t.css({
        top: randomTopPos,
        left: randomLeftPos,
        // filter: "blur(" + blur / zIndex + "px)",
        /* "url(" + link + ")" */
        background: color,
        width: size,
        height: size,
        //transform: "scale(" + 1.5 + ")",
        zIndex: zIndex
      }); // assign all values to css
    });
  });

}

$("body").on('click', function () {
  $(".main-box > div").each(function () {
    var $t = $(this);
    var bodyWidth = window.innerWidth;
    var bodyHeight = window.innerHeight;
    //var link = "https://picsum.photos/35/35?image=" + n;

    var link = "https://placeimg.com/40/40/any";

    var size = Math.floor(Math.random() * (40 - 8 + 1)) + 8;
    var zIndex = Math.floor(Math.random() * (10 - (-2) + 1)) + (-2);

    if (zIndex < 1) {
      var blur = 10 + 'px';
    } else if (zIndex > 1) {
      var blur = 0 + 'px';
    } // add blur to z-index
    var contWidth = window.innerWidth;
    var contHeight = window.innerHeight;

    // var color = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
    var color = randomColor({
      luminosity: "light",
      hue: "random"
    });
    // a hex code for an attractive color

    //var scale = Math.floor(Math.random() * $t.width());

    var randomTopPos = Math.floor(Math.random() * (bodyHeight - $t.width()));
    var randomLeftPos = Math.floor(Math.random() * (bodyWidth - $t.height()));



    $t.css({
      top: randomTopPos,
      left: randomLeftPos,
      // filter: "blur(" + blur / zIndex + "px)",
      /* "url(" + link + ")" */
      background: color,
      width: size,
      height: size,
      //transform: "scale(" + 1.5 + ")",
      zIndex: zIndex
    }); // assign all values to css
  });
});

// call functions
divMaker();
manipulations();