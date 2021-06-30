package com.nopcommerce.demo.stepdefs;

import com.nopcommerce.demo.pages.HomePage;
import com.nopcommerce.demo.pages.RegisterPage;
import com.nopcommerce.demo.utility.Utility;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

import java.util.Random;

public class RegisterTestStepodefs {
    @Given("^I am on homepage\\.$")
    public void iAmOnHomepage() {
    }

    @And("^I click on 'Register' tab on homepage\\.$")
    public void iClickOnRegisterTabOnHomepage() {
      new RegisterPage().clickOnRegisterTab();
    }

    @And("^I navigate successfully to 'Register' page$")
    public void iNavigateSuccessfullyToRegisterPage() {
        Assert.assertEquals( "Register" ,new RegisterPage().regPageTextIs());
    }

    @When("^I select gender 'female'$")
    public void iSelectGenderFemale() throws InterruptedException {
        Thread.sleep( 1000 );
        new RegisterPage().clickOnGenderradioButton();
    }

    @And("^I enter \"([^\"]*)\" as 'Firstname'$")
    public void iEnterAsFirstname(String firstname) throws InterruptedException {
        Thread.sleep( 1000 );
        new RegisterPage().firstNameField( firstname );
    }

    @And("^I enter \"([^\"]*)\" as 'Lastname'$")
    public void iEnterAsLastname(String lastname)  {
        new RegisterPage().lastNameField( lastname );
    }
    @And("^I select DOB as \"([^\"]*)\",MONTH as \"([^\"]*)\",YEAR as \"([^\"]*)\"$")
    public void iSelectDOBAsMONTHAsYEARAs(String date, String month, String year)  {
        new RegisterPage().selectBirthDateMonthAndYear( date,month,year );
    }


    @And("^I enter 'Email' as \"([^\"]*)\"$")
    public void iEnterEmailAs(String email)  {
        Random r = new Random();
         email= "primetime" + r.nextInt() + "@gmail.com";
        new RegisterPage().enterEmailField( email );
        System.out.println(email);
    }

    @And("^I 'Company name' as \"([^\"]*)\"$")
    public void iCompanyNameAs(String companyname)  {
        new RegisterPage().enterCompanynameField( companyname );
    }

    @And("^I enter 'password' as \"([^\"]*)\"$")
    public void iEnterPasswordAs(String password)  {
        new RegisterPage().enterPasswordField(password  );

    }

    @And("^I enter same password in 'confirmpassword' as \"([^\"]*)\"$")
    public void iEnterSamePasswordInConfirmpasswordAs(String confirmPassword)  {
        new RegisterPage().enterConfirmPasswordField( confirmPassword );
    }

    @And("^I click on 'REGISTER' button$")
    public void iClickOnREGISTERButton() {
        new RegisterPage().clickOnRegButton();
    }

    @Then("^I should register successfully and I should see message 'Your registration completed'$")
    public void iShouldRegisterSuccessfullyAndIShouldSeeMessageYourRegistrationCompleted() {
        Assert.assertEquals( "Your registration completed",new RegisterPage().regPageSuccessTextIs() );
    }


    @Then("^I should see text \"([^\"]*)\"below firstname field$")
    public void iShouldSeeTextBelowFirstnameField(String errorMessage)  {
        Assert.assertEquals( "First name is required.",new RegisterPage().getFirstNameErrorMessage() );
    }
}
