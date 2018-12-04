var glide = new Glide('.glide', {
  type: 'carousel',
  startAt: 0,
  perView: 1,
  gap: 0,
  autoplay: 3000,
  breakpoints: {
    1024: {
      perView: 1
    },
    600: {
      perView: 1
    }
  }
})
glide.mount()
