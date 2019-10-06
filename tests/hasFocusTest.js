let assert = require('chai').assert;

describe("Test Radio buttons page", () => {
  browser.url("./Dropdown-Checkboxes-RadioButtons/index.html");

  browser.setViewportSize({
    width: 1200,
    height: 800
  });

  it("Should be able to focus on radio button elements", (done) => {
    console.log("before click : " + browser.hasFocus("#checkboxes label:nth-of-type(1) [type]"));
    console.log("before click : " + browser.hasFocus("//label[contains(text(),'Option 3')]//input"));

    browser.click("#checkboxes label:nth-of-type(1) [type]");
    browser.click("//label[contains(text(),'Option 3')]//input")
    console.log("after click : " + browser.hasFocus("#checkboxes label:nth-of-type(1) [type]"));
    console.log("before click : " + browser.hasFocus("//label[contains(text(),'Option 3')]//input"));
    // browser.click("//label[contains(text(),'Option 1')]//input");
    // var radioBtn1Focus = browser.hasFocus("//label[contains(text(),'Option 1')]//input");
    // assert.equal(radioBtn1Focus, true);
  });

  // it("Should be able to unfocus radio button", () => {
  //   // console.log(browser.hasFocus("//label[contains(text(),'Option 3')]//input"));
  //   // browser.click("#checkboxes label:nth-child(5) [type]");
  //   // browser.pause(2000);
  //   // expect(browser.hasFocus("//label[contains(text(),'Option 3')]//input"), "Option 3 should be unchecked",).to.be.false;
  // });
});
