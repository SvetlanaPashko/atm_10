@smoke
Feature: General functionality tests

  Scenario: Check the Get Started button is working
    * The "Home" page is opened
    * The GetStarted button should be displayed

    * The GetStarted button is clicked
    * The "Docs" page should be opened

    * The browser back button is clicked on the "Docs" page
    * The "Home" page should be opened