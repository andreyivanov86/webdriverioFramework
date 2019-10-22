var ContactUs_Page = require("../pageObjects/ContactUs_Page.js");

beforeEach(function () {
  browser.url('/Contact-Us/contactus.html');
  browser.setViewportSize({
    width: 1200,
    height: 800
  });
});

describe('Test Contact us form.', () => {

  it("Test 1: Should submit with out all of the fields filled", function () {
    ContactUs_Page.submitAllInfoInContactUsForm("Andrey", "Ivanov", "ivanov@mail.ru", "Hello my name is Andrey");
    ContactUs_Page.confirmSumbissionSuccess();
  });

  it("Test 2: Should NOT submit with out all of the fields filled", function () {
    ContactUs_Page.submitAllInfoInContactUsForm("Ivanov", "ivanov@mail.ru", "Hello my name is Andrey");
    expect(browser.getText("body")).to.include("Error: all fields are required");
  });

  it("Test 3: Should NOT work with out all of the fields filled", function () {
    ContactUs_Page.submitAllInfoInContactUsForm("Andrey", "Ivanov", "ivanov@mail.ru");
    ContactUs_Page.confirmSumbissionFail();
  });

});
