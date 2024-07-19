
class JobOfferPage {
  elements = {
    colombiaLink: () => cy.get("#Colombialink"),
    placeEmploymentInput: () => cy.get("#place-search-input"),
    employmentBtn: () => cy.get("#search-button"),
    positionInput: () => cy.get('input[placeholder="Cargo o categoría"]'),
    salarySel: () => cy.get('.field_select_links:nth-child(7) > p'),
    optionSalary1Lbl: () => cy.get('span[data-path="?sal=2"]'),
    experienceSel: () => cy.get('.field_select_links:nth-child(7) > p'),
    optionExperience1Lbl: () => cy.get('.open li:nth-child(2) > .buildLink'),
    namePost: () => cy.get("article[data-id='7A797577CC74F11161373E686DCF3405'] a[class='js-o-link fc_base']"),
    posulateIcn: () => cy.get("article[id='7A797577CC74F11161373E686DCF3405'] div[class='opt_dots']"),
    posulateLbl: () => cy.get('.show > .dB:nth-child(1)'),
    emailInput: () => cy.get("#LoginModel_Email"),
    sendBtn: () => cy.get("#continueWithMailButton"),
    nameInput: () => cy.get("#Name"),
    lastNameInput: () => cy.get("#SurName"),
    passwordInput: () => cy.get("#Password"),
    jobPositionInput: () => cy.get('input[data-autocomplete-idholder="CargoId"]'),
    departmentSel: () => cy.get('div.nice-select.cm-12'),
    departmentOpt: () => cy.get('body > main > form > div > div:nth-child(3) > div > div > div > ul > li:nth-child(17)'),
    captchaInput: () => cy.get("#CaptchaInputText"),
    continueBtn: () => cy.get("#continueButton"),
    captchaLbl: () => cy.get("body > main > form > div > div:nth-child(4) > label"),
  
  };

  clickColombiaLink() {
    this.elements.colombiaLink().click();
  }

  submitPlaceEmployment(placeEmployment) {
    this.elements.placeEmploymentInput().type(placeEmployment);
    this.elements.employmentBtn().click();
  }  

  submitPosition(position) {
    //this.elements.positionInput().type(position);
    this.elements.salarySel().click();
    //this.elements.optionSalary1Lbl().click();
    this.elements.experienceSel().click();
   // this.elements.optionExperience1Lbl().click();    
  }

  searchPosulate(){
    this.elements.posulateIcn().click();
    this.elements.posulateLbl().click();
  } 

  submitEmail(email){
    this.elements.emailInput().type(email);    
    this.elements.sendBtn().click();
  }

  submitAccount(name, lastName, password, jobPosition, captcha){
    this.elements.nameInput().type(name);
    this.elements.lastNameInput().type(lastName);
    this.elements.passwordInput().type(password);
    this.elements.jobPositionInput().type(jobPosition);
    this.elements.departmentSel().click();
    this.elements.departmentOpt().click();
    this.elements.captchaInput().type(captcha);    
    this.elements.continueBtn().click();
  }   

}

export const jobOfferPage = new JobOfferPage();