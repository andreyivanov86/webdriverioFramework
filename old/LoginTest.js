var webdriverio = require('webdriverio');
var options = {
  desiredCapabilities: {
    browserName: 'chrome'
  }
};
var client = webdriverio.remote(options);

client
  .init()
// browser
  .url('http://webdriveruniversity.com/index.html')
  .click('#login-portal')
  .pause(1000)
  .getTitle()
  .then(function(title) {
    console.log('Title is: ' + title)
  })
  .end();
