var webdriverio = require('webdriverio');
var options = {
  desiredCapabilities: {
    browserName: 'chrome'
  }
};
var client = webdriverio.remote(options);

// browser
client
  .init()
  .url('http://webdriveruniversity.com/index.html')
  .getTitle().then(function(title) {
    console.log('Title is: ' + title)
  })
  .click('#contact-us')
  .pause(1000)
  .end();
