const dialog = require('../../pageobjects/dialog.page').default;
const expect = require('chai').expect;


describe('Dialog', () => {
  beforeEach(() => {
    //Any setup code goes here.
  });

  it('Verify that the text entry dialog username & password fields are editable', () => {
    dialog.appBtn.click();
    dialog.alertDialogBtn.click();
    dialog.textEntryDialogBtn.click();


    dialog.userNameField.addValue("Test User");
    dialog.userNameField.clearValue();
    dialog.userNameField.addValue("Actual User");

    dialog.passwordField.clearValue();
    dialog.passwordField.addValue("Test Pass");


    let text = dialog.userNameField.getText();
    console.log(text);
    expect(text).equal("Actual User");

    dialog.dialogOkBtn.click();
  });

  afterEach(async () => {
    //Any teardown code goes here.

  })

})
