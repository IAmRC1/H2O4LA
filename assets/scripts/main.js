var glide = new Glide('.glide', {
  type: 'carousel',
  startAt: 0,
  perView: 1,
  gap: 0,
  autoplay: false,
  breakpoints: {
    1024: {
      perView: 1
    },
    480: {
      perView: 1
    }
  }
})
glide.mount();


$(window).scroll(function() {
  var a = 0;
  var oTop = $('.counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },
        {
          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});
