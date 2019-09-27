beforeEach(function() {
  browser.url("/Hidden-Elements/index.html");
})

describe('Test whether hidden elements exist', function() {
  it('Button display is set to non display but still exists in html dom therefore should return true', function(done) {
    let hiddenButtonElem = $("#not-displayed");
    expect(hiddenButtonElem.isExisting()).to.equal(true);

  });

  it('Button display is set to visibility hidden but still exists in html dom therefore should return true', function(done) {
    let hiddenButtonElem = $("#visibility-hidden");
    expect(hiddenButtonElem.isExisting()).to.equal(true);
  });

  it('Button display is set to zero opacity but still exists in html dom therefore should return true', function(done) {
    let hiddenElem = $("#zero-opacity");
    expect(hiddenElem.isExisting()).to.equal(true);
  });

  it('Header text is visible and exists in the html dom therefore should return true', function(done) {
    let hiddenElem = $("h1");
    expect(hiddenElem.isExisting()).to.equal(true);
  });

  it('There is no such element with the id of #no-such-element within the html dom therefore should return false', function(done) {
    // #no-such-element
    let hiddenElem = $("#no-such-element");
    expect(hiddenElem.isExisting()).to.equal(false);
  });
});
