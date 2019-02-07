var n = parseInt(prompt("Koliko krugova?")); //replace with input

for (let i = 0; i < n; i++) {
  $(".main-box").append("<div></div>");
} //div maker

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

    /* $(function() {
      var positions = [];
      $(".main-box > div").each(function() {
        var ctx = $(this);
        var dim = {
          width: ctx.outerWidth(),
          height: ctx.outerHeight()
        };
        var success = false;
        while (!success) {
          $("#log").append(".");
          dim.left = parseInt(Math.random() * 300);
          dim.top = parseInt(Math.random() * 300);
          var success = true;
          $.each(positions, function() {
            if (
              dim.left < this.left + this.width &&
              dim.left + dim.width > this.left &&
              dim.top < this.top + this.height &&
              dim.top + dim.height > this.top
            ) {
              success = false;
            }
          });
        }
        $("#log").append(
          "<div>" + ctx.text() + ":" + dim.left + "," + dim.top + "</div>"
        );
        positions.push(dim);
        ctx.animate(
          {
            left: dim.left,
            top: dim.top
          },
          "slow"
        );
      });
    }); */

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
