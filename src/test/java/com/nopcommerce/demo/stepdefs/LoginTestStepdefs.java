package com.nopcommerce.demo.stepdefs;

import com.nopcommerce.demo.pages.HomePage;
import com.nopcommerce.demo.pages.LoginPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class LoginTestStepdefs {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I click on login link$")
    public void iClickOnLoginLink() {
        new LoginPage().clickOnLoginTab();
    }

    @Then("^I should navigate to login page successfully$")
    public void iShouldNavigateToLoginPageSuccessfully() {
        Assert.assertEquals( "Welcome, Please Sign In!",new LoginPage().welcomePageTextIs() );
    }

    @And("^I enter email \"([^\"]*)\"$")
    public void iEnterEmail(String email) throws InterruptedException {
        Thread.sleep( 1000 );
        new LoginPage().enterEmail( email );


    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String password) {
        new LoginPage().enterPasswordField( password );

    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() {
        new LoginPage().clickOnLoginButton();
    }

    @Then("^I should login successfully$")
    public void iShouldLoginSuccessfully() {
        Assert.assertEquals( "Welcome to our store",new LoginPage().getHomePageText() );
    }

    @Then("^I should see the error message \"([^\"]*)\"$")
    public void iShouldSeeTheErrorMessage(String errormsg) {
        Assert.assertEquals( errormsg,new LoginPage().getErrorMessage());

    }
}
