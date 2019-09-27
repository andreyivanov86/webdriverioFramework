
beforeEach(function () {
  browser.url('/Contact-Us/contactus.html');
})

describe('Test Contact us form.', () => {

  beforeEach(function () {
    console.log("before each inside describe block")
  })

  it('Successfully submit', () => {
    browser.setValue("[name = 'first_name']", "Andrey");
    browser.setValue("[name = 'last_name']", "Ivanov");
    browser.setValue("[name = 'email']", "Andrey@gmail.com");
    browser.setValue("[name = 'message']", "Andrey is Ivanov.");
    browser.click("[type='submit']");
  });

  it('Should not submit with out all of the fields filled', () => {
    // browser.setValue("[name = 'first_name']", "Andrey");
    browser.setValue("[name = 'last_name']", "Ivanov");
    browser.setValue("[name = 'email']", "Andrey@gmail.com");
    browser.setValue("[name = 'message']", "Andrey is Ivanov.");
    browser.click("[type='submit']");
  });

  it('Should not submit with out all of the fields filled', () => {
    browser.setValue("[name = 'first_name']", "Andrey");
    // browser.setValue("[name = 'last_name']", "Ivanov");
    browser.setValue("[name = 'email']", "Andrey@gmail.com");
    browser.setValue("[name = 'message']", "Andrey is Ivanov.");
    browser.click("[type='submit']");
  });

  it('Should not submit with out all of the fields filled', () => {
    browser.setValue("[name = 'first_name']", "Andrey");
    browser.setValue("[name = 'last_name']", "Ivanov");
    browser.setValue("[name = 'email']", "Andrey");
    browser.setValue("[name = 'message']", "Andrey is Ivanov.");
    browser.click("[type='submit']");
  });
})
