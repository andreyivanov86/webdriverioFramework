var request = require('sync-request');

browser.addCommand("submitDataToContactUsForm", function (firstName, lastName, eMail, comments) {
  if (firstName) {
    browser.setValue("[name = 'first_name']", firstName);
  }
  if(lastName) {
    browser.setValue("[name = 'last_name']", lastName);
  }
  if(eMail) {
    browser.setValue("[name = 'email']", eMail);
  }
  if(comments) {
    browser.setValue("[name = 'message']", comments);
  }
  browser.click("[type='submit']");
})

beforeEach(function () {
  browser.url('/Contact-Us/contactus.html');
  browser.setViewportSize({
		width: 1200,
		height: 800
	});
});

describe('Test Contact us form.', () => {
  //extract test data using sync-request
  var res = request("GET", "https://jsonplaceholder.typicode.com/comments?postId=1");
  var contactusTestData = JSON.parse(res.getBody().toString("utf8"));

  contactusTestData.forEach(function (contactusItem) {
    it('Successfully submit', () => {
      browser.submitDataToContactUsForm(contactusItem.name, "Ivanov", contactusItem.email, contactusItem.body);
      expect(browser.isVisible("#contact_reply h1")).to.be.true;
      expect(browser.getText("#contact_reply h1")).to.equal("Thank You for your Message!");
    });
  });

  contactusTestData.forEach(function(dataItem) {
    it("Should not submit with out all of the fields filled", function() {
      browser.submitDataToContactUsForm(dataItem.name, null, dataItem.email, dataItem.body);
      expect(browser.isVisible("body")).to.be.true;
    });
  });

  contactusTestData.forEach(function(dataItem) {
    it("Should not submit with out all of the fields filled", function() {
      browser.submitDataToContactUsForm(null, dataItem.name, dataItem.email, dataItem.body);
      expect(browser.isVisible("body")).to.be.true;
    });
  });

  contactusTestData.forEach(function(dataItem) {
    it("Should not submit with out all of the fields filled", function() {
      browser.submitDataToContactUsForm(dataItem.name, "Ivanov", "dumb.com", dataItem.body);
      expect(browser.isVisible("body"), "Wrong email format. Should be error window.").to.be.true;
    });
  });
});
