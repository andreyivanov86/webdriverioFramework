describe('Test the webdriveruniver home page.', () => {
  it('Outputs the heigh of the homepage carousel', () => {
    browser.url('/');
    var carouselElem = $('#udemy-promo-video');
    var carouselProps = carouselElem.getCssProperty('border-color');
    // var carouselDivHeight = browser.getCssProperty('#udemy-promo-thumbnail', 'height');
    console.log(carouselProps);
  })
})
