Feature:login funtionality

Check the login funtionality

Scenario:Validate the login functionality with valid credentials

Given Open the Orangehrm demo url
Then Fill the user-name
Then Fill the password
Then Click on login button
When Validate the sucessfull msg

@focus
Scenario:Validate the login functionality with valid credentials

Given Open the Orangehrm demo url.
Then Fill the user-name.
Then Fill the password.
Then Click on login button.
#When Validate the sucessfull msg