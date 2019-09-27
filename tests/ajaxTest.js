describe('Click me button should be availbale once page finished loading.', () => {

  it('Attempt to click the button when page is open', (done) => {
    browser.url('/Ajax-Loader/index.html');
    browser.click('#button1');
  })

  it('Attempt to click the button after 7 seconds', (done) => {
    browser.url('/Ajax-Loader/index.html');
    browser.pause(7001);
    browser.click('#button1');
  })

});


