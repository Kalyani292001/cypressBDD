Feature: add to card

    Scenario: Check Add to card functionality
        Given Visit the Ecommerce Site
        When Search the product starts with "Ca"
        Then Add "Carrot" in the cart
        Then Proceed to checkout
        And Click on place order
        Then Select country and check condition tab
        And Click on Proceed
        And Validate the Sucessfull msg