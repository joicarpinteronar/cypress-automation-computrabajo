Feature: Computrabajo

    Since a user enters the computrabajo portal to search for a job offer and apply for said application.

    Background:
        Given Since a user enters the computrabajo web portal
    Scenario: Validate the registration of a job application
        When A user enters a location "Guainia" and searches for an offer in "QA"
        When Apply for the offer found
        When Enter an email "prueba@test.com"
        When We enter the user information "Prueba", "Test", "Bogota2020", "Tester QA", "0000"
        Then The registration of the request is validated, validating the condition of the incorrect captcha       