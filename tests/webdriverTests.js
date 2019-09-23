describe("Verify webdriveruniversity homepage links works correctly", function () {
  it("Check the Contact Us button opens the relevant page", function (done) {
    browser.url('http://webdriveruniversity.com/index.html')
    var title = browser.getTitle();
    console.log('Title is: ' + title);
    browser.click('#contact-us');
    browser.pause(1000);
  });
  it("Check that login Button opens relevant page", function (done) {
    browser.url('http://webdriveruniversity.com/index.html')
    browser.click('#login-portal')
    browser.pause(1000)
    var title = browser.getTitle();
    console.log('Title is: ' + title);
  });
});

