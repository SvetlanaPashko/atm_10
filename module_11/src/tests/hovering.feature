@critical
Feature: Hovering tests

  Scenario Outline: 1.<id> Check that hover contains elements on the "<contributor>" card
    * The "Home" page is opened
    * The footer link "About" is present

    * The footer link "About" is clicked
    * The "About" page should be opened
    * The "<contributor>" card is displayed
    * The icon "<icon>" on the "<contributor>" card is not displayed

    * The "<contributor>" card is hovered
    * The icon "<icon>" on the "<contributor>" card is displayed

    Examples:
      | id | icon    | contributor  |
      | 1  | viewBio | Doug Parker  |
      | 2  | gitHub  | Emma Twersky |
      | 3  | twitter | Igor Minar   |