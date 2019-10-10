class ContactUs_Page {

  get firstName() { return $("[name = 'first_name']") }
  get lastName() { return $("[name = 'last_name']") }
  get email() { return $("[name = 'email']") }
  get comments() { return $("[name = 'message']") }
  get submitButton() { return $("[type='submit']") }

  // Methods:
  // Send Keys methods
  inputFirstName(firstName) {
    return this.firstName.setValue(firstName);
  };
  inputLastName(lastName) {
    return this.lastName.setValue(lastName);
  };
  inputEmail(email) {
    return this.email.setValue(email);
  };
  inputComment(comments) {
    return this.comments.setValue(comments);
  };
  clickSubmit() {
    return this.submitButton.click();
  }
  // Send keys in one function
  submitAllInfoInContactUsForm(firstName, lastName, email, comments) {
    if (firstName) this.firstName.setValue(firstName);
    if (lastName) this.lastName.setValue(lastName);
    if (email) this.email.setValue(email);
    if (comments) this.comments.setValue(comments);
    this.submitButton.click();
  };
  // Confirmations methods
  confirmSumbissionSuccess() {
    var validateSuccessMessageHeader = browser.waitUntil(function () {
      return browser.getText("#contact_reply h1") == "Thank You for your Message!";
    }, 3000);
    expect(validateSuccessMessageHeader, "No success message").to.be.true;
  }
  confirmSumbissionFail() {
    browser.waitUntil(function () {
      return browser.getText("body") == "Error: all fields are required";
    }, 3000);
    expect(browser.getText("body")).to.include("Error: all fields are required");
  }
}

module.exports = new ContactUs_Page();
