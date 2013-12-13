 /* window.onload = function () {

            var logo = Snap.selectAll("#bigGear");
            logo.drag();
}

  */


Template.home.rendered = function () {
  $('#myCarousel').carousel({
  interval: 10000
})
};
