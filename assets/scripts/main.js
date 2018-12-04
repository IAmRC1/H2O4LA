var glide = new Glide('.glide', {
  type: 'carousel',
  startAt: 0,
  perView: 1,
  gap: 0,
  autoplay: 2000,
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

var options = {
  useEasing: true,
  useGrouping: true,
  separator: ',',
};
var numAnim = new CountUp('.sw_box', 0, 10000, 0, 2, options);
numAnim.start();
