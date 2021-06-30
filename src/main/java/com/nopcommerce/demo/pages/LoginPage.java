package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;


public class LoginPage extends Utility {
    private static final Logger log = LogManager.getLogger( LoginPage.class.getName() );

    @FindBy(xpath = "//a[text()='Log in']")
    WebElement loginTab;
    @FindBy(xpath = "//h1[text()='Welcome, Please Sign In!']")
    WebElement welcomeText;
    @FindBy(xpath = "//input[@id='Email']")
    WebElement emailField;
    @FindBy(xpath = "//input[@id='Password']")
    WebElement passwordField;
    @FindBy(xpath = "//div[@class='buttons']/button[@class='button-1 login-button']")
    WebElement loginButton;
    @FindBy(xpath = "//div[@class='message-error validation-summary-errors']")
    WebElement errorMsg;
    @FindBy(xpath = "//h2[text()='Welcome to our store']")
    WebElement homePageText;
    @FindBy(xpath = "//div[@class='message-error validation-summary-errors']")
    WebElement errorMessage;

    public void clickOnLoginTab(){

        clickOnElement( loginTab);
        log.info( "Clicking On login Tab" + loginTab.toString() );
    }
    public String welcomePageTextIs() {

        log.info("Get Welcome Page Text" + welcomeText.toString() );
        return getTextFromElement( welcomeText );
    }
    public void enterEmail(String email){

        mouseHoverToElement( emailField );
        sendTextToElement( emailField, email );
        log.info( "Email field" + emailField.toString() + "with" + email );
    }
    public void enterPasswordField(String passWord) {
     //   waitUntilVisibilityOfElementLocated( passwordField,5 );

        sendTextToElement( passwordField, passWord );
        log.info( "Password field" + passwordField.toString() + "with" + passWord );
    }
    public void clickOnLoginButton(){

        clickOnElement( loginButton );
        log.info( "Clicking On Register Button" + loginButton.toString() );
    }
    public String getErrorMsg() throws InterruptedException {


        log.info("Get Error Msg Text" + errorMsg.toString());
        Thread.sleep( 1000 );
        return getTextFromElement( errorMsg );
    }
    public void sliderExample() {
        Actions actions = new Actions( driver );

        WebElement mainSlider = driver.findElement( By.id( "slider" ) );

        int width = mainSlider.getSize().width;
        int halfWidth = width / 2;

        WebElement slider = driver.findElement( By.xpath( "//body/div[@id='slider']/span[1]" ) );

        actions.dragAndDropBy( slider, halfWidth, 0 ).build().perform();
    }
        public String getHomePageText(){
        mouseHoverToElement( homePageText );

        log.info("Get homepage Msg Text" + homePageText.toString());
        return getTextFromElement( homePageText );

    }
    public String getErrorMessage(){
        log.info("Getting error message text" + errorMessage.toString());
        return getTextFromElement( errorMessage );
    }


}
