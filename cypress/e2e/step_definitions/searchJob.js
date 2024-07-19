import {
  Given,
  When,  
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import {jobOfferPage} from '@pages/JobOfferPage'

Given("Since a user enters the computrabajo web portal", () => {
  cy.visit("/");
});

When("A user enters a location {string} and searches for an offer in {string}", (placeEmployment, position) => {
  jobOfferPage.clickColombiaLink();
  jobOfferPage.submitPlaceEmployment(placeEmployment);
  jobOfferPage.submitPosition(position);
  jobOfferPage.elements.namePost().contains("Test automation Engineer QA");
  
});

When("Apply for the offer found", () => {
  jobOfferPage.searchPosulate();  
  
});

When("Enter an email {string}", (email) => {
  jobOfferPage.submitEmail(email);  
  
});

When("We enter the user information {string}, {string}, {string}, {string}, {string}", (name, lastName, password, jobPosition, captcha) => {
  jobOfferPage.submitAccount(name, lastName, password, jobPosition, captcha);  
  
});

Then("The registration of the request is validated, validating the condition of the incorrect captcha", () => {
  //jobOfferPage.elements.captchaLbl().contains("Captch incorrecto");
  
});