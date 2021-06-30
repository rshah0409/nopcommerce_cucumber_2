package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;



public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger( HomePage.class.getName());
         @FindBy(xpath ="//body/div[6]/div[2]/ul[1]/li[1]/a[1]" )
         WebElement _computers;

         @FindBy(xpath ="//body/div[6]/div[2]/ul[1]/li[2]/a[1]" )
         WebElement electronics;

        @FindBy(xpath ="//body/div[6]/div[2]/ul[1]/li[3]/a[1]" )
         WebElement apparel;

        @FindBy(xpath = "//body/div[6]/div[2]/ul[1]/li[4]/a[1])")
        WebElement digitalDownloads;

        @FindBy(xpath = "//body/div[6]/div[2]/ul[1]/li[5]/a[1]" )
        WebElement books;

        @FindBy(xpath ="//body/div[6]/div[2]/ul[1]/li[6]/a[1]"  )
        WebElement jwelery;

        @FindBy(xpath = "//body/div[6]/div[2]/ul[1]/li[7]/a[1]" )
        WebElement giftCards;

    public void selectMenu(String menu) {


        if (menu.equalsIgnoreCase( "Computers" )) {

            clickOnElement( _computers);
            log.info("Clicking on computer's tab"  +_computers.toString() );
        } else if (menu.equalsIgnoreCase( "Electronics" )) {

            clickOnElement( electronics );
            log.info("Clicking on electronics's tab"  +electronics.toString());

        } else if (menu.equalsIgnoreCase( "Apparel" )) {

            clickOnElement( apparel );
            log.info("Clicking on Apparel's tab"  +apparel.toString() );

        } else if (menu.equalsIgnoreCase( "Digital downloads" )) {

            clickOnElement( digitalDownloads );
            log.info( "Clicking on Digital download's tab"  +digitalDownloads.toString()  );

        } else if (menu.equalsIgnoreCase( "Books" )) {

            clickOnElement( books );
            log.info( "Clicking on Books's tab"  +books.toString() );

        } else if (menu.equalsIgnoreCase( "Jewelry" )) {

          clickOnElement( jwelery );
            log.info( "Clicking on Jwellery's tab"  +jwelery.toString()  );

        } else if (menu.equalsIgnoreCase( "Gift Cards" )) {

          clickOnElement( giftCards );
            log.info( "Clicking on Gift cards's tab"  +giftCards.toString()  );

        }

    }
}