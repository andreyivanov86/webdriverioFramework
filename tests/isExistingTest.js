let assert = require('chai').assert;
beforeEach(function() {
  browser.url("/Hidden-Elements/index.html");
})

describe('Test whether hidden elements exist', function() {
  it('Button display is set to non display but still exists in html dom therefore should return true', function(done) {
    let hiddenButtonElem = $("#not-displayed");
    expect(hiddenButtonElem.isExisting()).to.equal(true);
    assert.equal(hiddenButtonElem.isVisible(), false);
    console.log(hiddenButtonElem.isVisible());
  });

  it('Button display is set to visibility hidden but still exists in html dom therefore should return true', function(done) {
    let hiddenButtonElem = $("#visibility-hidden");
    expect(hiddenButtonElem.isExisting()).to.equal(true);
    expect(hiddenButtonElem.isVisible()).to.be.false;
    console.log(hiddenButtonElem.isVisible())
  });

  it('Button display is set to zero opacity but still exists in html dom therefore should return true', function(done) {
    let hiddenElem = $("#zero-opacity");
    expect(hiddenElem.isExisting()).to.equal(true);
    expect(hiddenElem.isVisible()).to.be.false;
    console.log(hiddenElem.isVisible());
  });

  it('Header text is visible and exists in the html dom therefore should return true', function(done) {
    let hiddenElem = $("h1");
    expect(hiddenElem.isExisting()).to.equal(true);
    expect(hiddenElem.isVisible()).to.be.true;
    console.log(hiddenElem.isVisible());
  });

  it('There is no such element with the id of #no-such-element within the html dom therefore should return false', function(done) {
    let hiddenElem = $("#no-such-element");
    expect(hiddenElem.isExisting()).to.equal(false);
  });
});
