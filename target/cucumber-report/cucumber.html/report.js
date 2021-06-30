$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "\r\nAs a User I want to login into nopcommerce website",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6510260300,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "User should navigate to login page successfully",
  "description": "",
  "id": "login-test;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should navigate to login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 213681300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1503151800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepdefs.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 94259200,
  "status": "passed"
});
formatter.after({
  "duration": 1196653000,
  "status": "passed"
});
formatter.before({
  "duration": 4157273600,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User should login successfully with valid credentials",
  "description": "",
  "id": "login-test;user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I enter email \"rickymartin@yahoo.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter password \"password04\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 106300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1428892200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rickymartin@yahoo.com",
      "offset": 15
    }
  ],
  "location": "LoginTestStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 1318711000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password04",
      "offset": 18
    }
  ],
  "location": "LoginTestStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 201933500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1187609600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepdefs.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 10065351500,
  "error_message": "org.openqa.selenium.json.JsonException: java.lang.reflect.InvocationTargetException\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-3F7DLL86\u0027, ip: \u0027192.168.1.115\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.json.JsonOutput.convertUsingMethod(JsonOutput.java:332)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$16(JsonOutput.java:155)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$21(JsonOutput.java:168)\r\n\tat java.util.LinkedHashMap$LinkedValues.forEach(LinkedHashMap.java:608)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$22(JsonOutput.java:168)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$23(JsonOutput.java:177)\r\n\tat com.google.common.collect.SingletonImmutableBiMap.forEach(SingletonImmutableBiMap.java:65)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$24(JsonOutput.java:176)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:255)\r\n\tat org.openqa.selenium.json.Json.toJson(Json.java:42)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:227)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:117)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:152)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:618)\r\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:639)\r\n\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:595)\r\n\tat com.nopcommerce.demo.utility.Utility.mouseHoverToElement(Utility.java:80)\r\n\tat com.nopcommerce.demo.pages.LoginPage.getHomePageText(LoginPage.java:79)\r\n\tat com.nopcommerce.demo.stepdefs.LoginTestStepdefs.iShouldLoginSuccessfully(LoginTestStepdefs.java:48)\r\n\tat ✽.Then I should login successfully(src/test/java/resources/featurefile/login.feature:19)\r\n\tSuppressed: org.openqa.selenium.json.JsonException: Attempting to close incomplete json stream\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-3F7DLL86\u0027, ip: \u0027192.168.1.115\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\t\tat org.openqa.selenium.json.JsonOutput.close(JsonOutput.java:279)\r\n\t\tat org.openqa.selenium.json.Json.toJson(Json.java:44)\r\n\t\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:227)\r\n\t\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:117)\r\n\t\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:152)\r\n\t\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\t\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\t\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:618)\r\n\t\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:639)\r\n\t\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:595)\r\n\t\tat com.nopcommerce.demo.utility.Utility.mouseHoverToElement(Utility.java:80)\r\n\t\tat com.nopcommerce.demo.pages.LoginPage.getHomePageText(LoginPage.java:79)\r\n\t\tat com.nopcommerce.demo.stepdefs.LoginTestStepdefs.iShouldLoginSuccessfully(LoginTestStepdefs.java:48)\r\n\t\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\t\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\t\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\t\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\t\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\t\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\t\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\t\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\t\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\t\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\t\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\t\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\t\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\t\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\t\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\t\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\t\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\t\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\t\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\t\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\t\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\t\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\t\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\t\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\t\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\t\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\t\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\t\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\t\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\t\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\t\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\t\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\t\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\t\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\t\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\t\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\t\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\t\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.json.JsonOutput.convertUsingMethod(JsonOutput.java:328)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$16(JsonOutput.java:155)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$21(JsonOutput.java:168)\r\n\tat java.util.LinkedHashMap$LinkedValues.forEach(LinkedHashMap.java:608)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$22(JsonOutput.java:168)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$23(JsonOutput.java:177)\r\n\tat com.google.common.collect.SingletonImmutableBiMap.forEach(SingletonImmutableBiMap.java:65)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$24(JsonOutput.java:176)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:255)\r\n\tat org.openqa.selenium.json.Json.toJson(Json.java:42)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:227)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:117)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:152)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:618)\r\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:639)\r\n\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:595)\r\n\tat com.nopcommerce.demo.utility.Utility.mouseHoverToElement(Utility.java:80)\r\n\tat com.nopcommerce.demo.pages.LoginPage.getHomePageText(LoginPage.java:79)\r\n\tat com.nopcommerce.demo.stepdefs.LoginTestStepdefs.iShouldLoginSuccessfully(LoginTestStepdefs.java:48)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h2[text()\u003d\u0027Welcome to our store\u0027]\"}\n  (Session info: chrome\u003d91.0.4472.114)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-3F7DLL86\u0027, ip: \u0027192.168.1.115\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 91.0.4472.114, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\mital\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:55092}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 2d310cd5b3850359962986e2c994019d\n*** Element info: {Using\u003dxpath, value\u003d//h2[text()\u003d\u0027Welcome to our store\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.getWrappedElement(Unknown Source)\r\n\tat org.openqa.selenium.interactions.PointerInput$Origin.asArg(PointerInput.java:204)\r\n\tat org.openqa.selenium.interactions.PointerInput$Move.encode(PointerInput.java:155)\r\n\tat org.openqa.selenium.interactions.Sequence.encode(Sequence.java:75)\r\n\tat org.openqa.selenium.interactions.Sequence.toJson(Sequence.java:84)\r\n\t... 66 more\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1356646000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 21,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I enter email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should see the error message \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "errorMessage"
      ],
      "line": 29,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "abcd123@gmail.com",
        "xyz123",
        "Login was unsuccessful. Please correct the errors and try again. No customer account found"
      ],
      "line": 30,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "y2k123@gmail.com",
        "abc123",
        "Login was unsuccessful. Please correct the errors and try again. No customer account found"
      ],
      "line": 31,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "adfa123@gmail.com",
        "xyz123",
        "Login was unsuccessful. Please correct the errors and try again. No customer account found"
      ],
      "line": 32,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4234487800,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I enter email \"abcd123@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter password \"xyz123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should see the error message \"Login was unsuccessful. Please correct the errors and try again. No customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 99400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1379119800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd123@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginTestStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 1296595500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123",
      "offset": 18
    }
  ],
  "location": "LoginTestStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 154881400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1229044100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again. No customer account found",
      "offset": 32
    }
  ],
  "location": "LoginTestStepdefs.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 59768100,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c...rrors and try again.[ ]No customer account ...\u003e but was:\u003c...rrors and try again.[\n]No customer account ...\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.nopcommerce.demo.stepdefs.LoginTestStepdefs.iShouldSeeTheErrorMessage(LoginTestStepdefs.java:53)\r\n\tat ✽.Then I should see the error message \"Login was unsuccessful. Please correct the errors and try again. No customer account found\"(src/test/java/resources/featurefile/login.feature:27)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1483015900,
  "status": "passed"
});
formatter.before({
  "duration": 4312952200,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I enter email \"y2k123@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter password \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should see the error message \"Login was unsuccessful. Please correct the errors and try again. No customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 46800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1020843600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "y2k123@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginTestStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 1322532900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 18
    }
  ],
  "location": "LoginTestStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 170376900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1258911200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again. No customer account found",
      "offset": 32
    }
  ],
  "location": "LoginTestStepdefs.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 91783800,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c...rrors and try again.[ ]No customer account ...\u003e but was:\u003c...rrors and try again.[\n]No customer account ...\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.nopcommerce.demo.stepdefs.LoginTestStepdefs.iShouldSeeTheErrorMessage(LoginTestStepdefs.java:53)\r\n\tat ✽.Then I should see the error message \"Login was unsuccessful. Please correct the errors and try again. No customer account found\"(src/test/java/resources/featurefile/login.feature:27)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1699734600,
  "status": "passed"
});
formatter.before({
  "duration": 4396701800,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I enter email \"adfa123@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter password \"xyz123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should see the error message \"Login was unsuccessful. Please correct the errors and try again. No customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 36600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1505374500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adfa123@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginTestStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 1292029900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123",
      "offset": 18
    }
  ],
  "location": "LoginTestStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 170175800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1233628300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again. No customer account found",
      "offset": 32
    }
  ],
  "location": "LoginTestStepdefs.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 69350900,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c...rrors and try again.[ ]No customer account ...\u003e but was:\u003c...rrors and try again.[\n]No customer account ...\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.nopcommerce.demo.stepdefs.LoginTestStepdefs.iShouldSeeTheErrorMessage(LoginTestStepdefs.java:53)\r\n\tat ✽.Then I should see the error message \"Login was unsuccessful. Please correct the errors and try again. No customer account found\"(src/test/java/resources/featurefile/login.feature:27)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1420575000,
  "status": "passed"
});
});