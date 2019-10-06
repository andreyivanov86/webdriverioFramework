describe("Verify webdriveruniversity homepage links works correctly", function () {
  it("Check the Contact Us button opens the relevant page", function (done) {
    browser.url('/');
    expect('WebDriverUniversity.com').to.equal(browser.getTitle());
    browser.click('#contact-us');

    var tabIds = browser.getTabIds();
    browser.switchTab(tabIds[1]);
    var url = browser.getUrl();
    expect('WebDriver | Contact Us').to.equal(browser.getTitle());
    expect(url).to.include("Contact-Us", "URL mismatch");

    browser.close();

  });
  it("Check that login Button opens relevant page", function (done) {
    browser.url('/');
    browser.getTitle().should.equal('WebDriverUniversity.com');

    browser.click('#login-portal');

  });
});



