Feature:outline test case scenerio

    Scenario Outline: Scenario Outline name:validate the login functionality
        Given open the url
        When enter the '<userName>'
        And enter the pass '<password>'
        Then Click On login button
        Then validate the logo

    Examples:
        
            | userName | password |
            | Admin    | admin123 |
            # | Kalyani    | kalyni123 |

@focus

Scenario Outline: Scenario Outline name:User login dashBoard
Given User open dashBoard

