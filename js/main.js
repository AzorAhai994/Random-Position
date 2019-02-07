var n = parseInt(prompt("Koliko krugova?"));

for (let i = 0; i < n; i++) {
  $(".main-box").append("<div></div>");
}
$("body").on("click", function() {
  $(".main-box > div").each(function() {
    var $t = $(this);
    var bodyWidth = window.innerWidth;
    var bodyHeight = window.innerHeight;
    //var link = "https://picsum.photos/35/35?image=" + n;

    var link = "https://placeimg.com/40/40/any";

    var size = Math.floor(Math.random() * (40 - 8 + 1)) + 8;

    var contWidth = window.innerWidth;
    var contHeight = window.innerHeight;

    // var color = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
    var color = randomColor({
      luminosity: "light",
      hue: "random"
    }); // a hex code for an attractive color
    //var scale = Math.floor(Math.random() * $t.width());

    var randomTopPos = Math.floor(Math.random() * (bodyHeight - $t.width()));
    var randomLeftPos = Math.floor(Math.random() * (bodyWidth - $t.height()));

    /*   var randomTopPos = Math.floor(
          Math.random() * ($(".main-box").height() - $t.width())
        );
        var randomTopPos = Math.floor(
          Math.random() * ($(".main-box").widtht() - $t.height())
        ); */
    // alert(contHeight);
    $t.css({
      top: randomTopPos,
      left: randomLeftPos,

      background: /* "url(" + link + ")" */ color,
      width: size,
      height: size
      //transform: "scale(" + scale + ")"
    });
  });
});
