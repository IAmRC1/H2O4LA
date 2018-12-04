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

$(function(){
var options = {
  useEasing: true,
  useGrouping: true,
  separator: ',',
};
var numAnim = new CountUp('.counter', 0, 10000, 0, 2, options);
numAnim.start();
});
