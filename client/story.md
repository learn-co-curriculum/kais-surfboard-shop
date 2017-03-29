User story 

  Root Route
  - Renders a navbar with certain links that are clickable 
  - Shows Welcome to Kai's Surfboard Shop
  - User click on a /surfboards link and get redirect to the surfboards show page 
 
  =>

  Surfboards Route 
  - Renders a text of ...loading 
  - Rendering a navbar with certain links that are clickable 
  - User Click on the /about lnk and gets redirected to the about show page 

  => 

  About Route 
  - Renders text of "About Kai's Surboard Shop" 
  - Rendering a navbar with certain links that are clickable 
  - User click on the the / link and get redirect to the home page 
  - validate that the current browser location is '/'

  User leave application

# Integration Test Setup 

## Tools 

### Selenium Standalone CLI 

1) npm install selenium-standalone@latest -g 

2) selenium-standalone install 

3) selenium-standalone start

### Nightwatch JS

1) npm install nightwatch -g

2) create a nightwatch.json 

// code for nightwatch.json is @ https://gist.github.com/Lukeghenco/339cd355c9d78186d8a05b51f7ba85a1

3) nightwatch

### Tests folder in the root directory

1) Create /tests/userStory.test.js


# React Unit Test Setup

## Tools 

By defualt you get Jest, React Tools, 

### Enzyme

1) npm install enzyme --dev

2) npm install react-addons-test-utils --dev

3) npm test