beforeEach(() => {
  browser.url("/Accordion/index.html");
});

describe("Verify that correct text appears on the page", function () {
  it("Verifies text is visible after loading is complete", function () {
    this.timeout(20000);
    console.log($("#hidden-text").waitForValue());

  });
});

