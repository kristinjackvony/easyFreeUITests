var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;

var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

var driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();

driver.get('http://www.google.com');

driver.findElement(By.name('q')).sendKeys('webdriver\n');

driver.findElement(By.partialLinkText("seleniumhq")).click();

driver.wait(until.elementLocated(By.id('sidebar')));
  
driver.getTitle().then(function(title) {
    if(title === 'Selenium WebDriver') {
      console.log('Test passed');
    } else {
      console.log('Test failed');
    }
    driver.quit();
});


