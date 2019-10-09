var ContactUs_Page = require("../pageObjects/ContactUs_Page.js");

beforeEach(function () {
  browser.url('/Contact-Us/contactus.html');
  browser.setViewportSize({
    width: 1200,
    height: 800
  });
});

describe('Test Contact us form.', () => {
  // Methods:
  // Send Keys methods
  function inputFirstName(firstName) {
    return ContactUs_Page.firstName.setValue(firstName);
  };
  function inputLastName(lastName) {
    return ContactUs_Page.lastName.setValue(lastName);
  };
  function inputEmail(email) {
    return ContactUs_Page.eMail.setValue(email);
  };
  function inputComment(comments) {Î
    return ContactUs_Page.comments.setValue(comments);
  };
  function clickSubmit() {
    return ContactUs_Page.submitButton.click();
  }
  // Confirmations methods
  function confirmSumbissionSuccess() {
    var validateSuccessMessageHeader = browser.waitUntil(function () {
      return ContactUs_Page.successfulSubmissionHeader.getText() == "Thank You for your Message!";
    }, 3000);
    expect(validateSuccessMessageHeader, "No success message").to.be.true;
  }
  function confirmSumbissionFail() {
    var validateSuccessMessageHeader = browser.waitUntil(function () {
      return ContactUs_Page.unseccessfulSubmitionHeader.getText() == "Error: all fields are required";
    }, 3000);
    expect(ContactUs_Page.unseccessfulSubmitionHeader.getText()).to.include("Error: all fields are required");
  }

  it("Should not submit with out all of the fields filled", function () {
    inputFirstName("Andrey");
    inputLastName("Ivanov");
    inputEmail("ivanov@gmail.com");
    inputComment("Hello my name is andrey");
    clickSubmit();
    confirmSumbissionSuccess();
  });

  it("Should NOT submit with out all of the fields filled", function () {
    inputFirstName("Andrey");
    inputLastName("Ivanov");
    inputEmail("ivanov@gmail.com");
    // inputComment("Hello my name is andrey");
    clickSubmit();
    confirmSumbissionFail();
  });

  it("Should NOT submit with out all of the fields filled", function () {
    inputFirstName("Andrey");
    // inputLastName("Ivanov");
    inputEmail("ivanov@gmail.com");
    inputComment("Hello my name is andrey");
    clickSubmit();
    confirmSumbissionFail();
  });

});
