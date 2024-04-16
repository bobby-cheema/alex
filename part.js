// const { Builder, By, Key, until } = require("selenium-webdriver");
// require("chromedriver");

// async function findRefNos(partNumber) {
//   let driver = await new Builder().forBrowser("chrome").build();
//   try {
//     await driver.get("https://partnerportal.dieseltechnic.com/en");
//     let searchInput = await driver.findElement(
//       By.css(
//         "#__nuxt > header > div > div.c-header__top > div.c-header__search > div > form > input"
//       )
//     );
//     await searchInput.sendKeys(partNumber, Key.ENTER); // Triggers the search

//     // Wait for the search results to be visible
//     await driver.wait(
//       until.elementLocated(
//         By.css(
//           "#Productdetails > div:nth-child(5) > table > tbody > tr:nth-child(1) > td:nth-child(2)"
//         )
//       ),
//       20000
//     );

//     // Assuming multiple rows could contain the data of interest, find all matching `td` elements
//     let dataElements = await driver.findElements(
//       By.css(
//         "#Productdetails > div:nth-child(5) > table > tbody > tr > td:nth-child(2)"
//       )
//     );
//     let dataPromises = dataElements.map(
//       async (element) => await element.getText()
//     );
//     let data = await Promise.all(dataPromises);

//     console.log("Data found:", data);
//   } catch (error) {
//     console.error("An error occurred:", error);
//   } finally {
//     await driver.quit();
//   }
// }

// findRefNos("882272").catch(console.error);
//  New one

// const { Builder, By, Key, until } = require("selenium-webdriver");
// require("chromedriver");

// async function findRefNos(partNumber) {
//   let driver = await new Builder().forBrowser("chrome").build();
//   try {
//     await driver.get("https://partnerportal.dieseltechnic.com/en");

//     // Locate the search input and enter the part number
//     let searchInput = await driver.findElement(
//       By.css(
//         "#__nuxt > header > div > div.c-header__top > div.c-header__search > div > form > input"
//       )
//     );
//     await searchInput.sendKeys(partNumber); // Enter the part number

//     // Use JavaScript to perform the click on the search button
//     let searchButton = await driver.findElement(
//       By.css("button.c-search-input__button.cy-search")
//     );
//     // await driver.executeScript("arguments[0].click();", searchButton);
//     await driver.wait(until.elementIsVisible(searchButton), 20000);

//     // Attempt to click using JavaScript
//     await driver.executeScript("arguments[0].click();", searchButton);

//     // Wait for the search results to be visible
//     await driver.wait(
//       until.elementLocated(
//         By.css(
//           "#Productdetails > div:nth-child(5) > table > tbody > tr:nth-child(1) > td:nth-child(2)"
//         )
//       ),
//       20000
//     );

//     // Find and extract the data
//     let dataElements = await driver.findElements(
//       By.css(
//         "#Productdetails > div:nth-child(5) > table > tbody > tr > td:nth-child(2)"
//       )
//     );
//     let dataPromises = dataElements.map(
//       async (element) => await element.getText()
//     );
//     let data = await Promise.all(dataPromises);

//     console.log("Data found:", data);
//   } catch (error) {
//     console.error("An error occurred:", error);
//   } finally {
//     await driver.quit();
//   }
// }

// // findRefNos("882272").catch(console.error);
// // const { Builder, By, Key, until } = require("selenium-webdriver");
// // require("chromedriver");

// // async function findRefNos(partNumber) {
// //   let driver = await new Builder().forBrowser("chrome").build();
// //   try {
// //     await driver.get("https://partnerportal.dieseltechnic.com/en");

// //     // Locate the search input and enter the part number
// //     let searchInput = await driver.findElement(
// //       By.css(
// //         "#__nuxt > header > div > div.c-header__top > div.c-header__search > div > form > input"
// //       )
// //     );
// //     await searchInput.sendKeys(partNumber); // Input the part number

// //     // Wait for the search button to be present and then click
// //     let searchButton = await driver.findElement(
// //       By.css(".c-search-input__button")
// //     );
// //     // await driver.wait(until.elementIsVisible(searchButton), 10000); // Ensure the button is visible
// //     await searchButton.click(); // Click the search button

// //     // Wait for the search results to be visible
// //     await driver.wait(
// //       until.elementLocated(
// //         By.css(
// //           "#Productdetails > div:nth-child(5) > table > tbody > tr:nth-child(1) > td:nth-child(2)"
// //         )
// //       ),
// //       20000
// //     );

// //     // Assuming multiple rows could contain the data of interest
// //     let dataElements = await driver.findElements(
// //       By.css(
// //         "#Productdetails > div:nth-child(5) > table > tbody > tr > td:nth-child(2)"
// //       )
// //     );
// //     let dataPromises = dataElements.map(
// //       async (element) => await element.getText()
// //     );
// //     let data = await Promise.all(dataPromises);

//     console.log("Data found:", data);
//   } catch (error) {
//     console.error("An error occurred:", error);
//   } finally {
//     await driver.quit();
//   }
// }
// const { Builder, By, Key, until } = require("selenium-webdriver");
// require("selenium-webdriver/firefox");

// async function findRefNos(partNumber) {
//   let driver = new Builder().forBrowser("firefox").build();
//   try {
//     await driver.get("https://partnerportal.dieseltechnic.com/en");

//     // Locate the search input and enter the part number
//     let searchInput = await driver.findElement(
//       By.css(
//         "#__nuxt > header > div > div.c-header__top > div.c-header__search > div > form > input"
//       )
//     );
//     await searchInput.sendKeys(partNumber); // Input the part number

//     // Wait for the search button to be present and then click
//     let searchButton = await driver.findElement(
//       By.css(".c-search-input__button")
//     );
//     await driver.wait(until.elementIsVisible(searchButton), 10000);
//     await driver.wait(until.elementIsEnabled(searchButton), 10000);

//     // await driver.wait(until.elementIsVisible(searchButton), 10000); // Ensure the button is visible
//     // await searchButton.click(); // Click the search button
//     // driver.executeScript("arguments[0].click();", searchButton);
//     // await searchButton.sendKeys(Key.ENTER);
//     // const actions = driver.actions({ bridge: true });
//     // await actions.move({ origin: searchButton }).click().perform();
//     await driver.executeScript(
//       "arguments[0].scrollIntoView(true);",
//       searchButton.sendKeys(Key.ENTER)
//     );

//     // Wait for the search results to be visible
//     await driver.wait(
//       until.elementLocated(
//         By.css(
//           "#Productdetails > div:nth-child(5) > table > tbody > tr:nth-child(1) > td:nth-child(2)"
//         )
//       ),
//       20000
//     );

//     // Assuming multiple rows could contain the data of interest
//     let dataElements = await driver.findElements(
//       By.css(
//         "#Productdetails > div:nth-child(5) > table > tbody > tr > td:nth-child(2)"
//       )
//     );
//     let dataPromises = dataElements.map(
//       async (element) => await element.getText()
//     );
//     let data = await Promise.all(dataPromises);

//     console.log("Data found:", data);
//   } catch (error) {
//     console.error("An error occurred:", error);
//   } finally {
//     await driver.quit();
//   }
// }

// // findRefNos("YOUR_PART_NUMBER_HERE").catch(console.error);
// const { Builder, By, Key, until } = require("selenium-webdriver");
// require("chromedriver");

// async function findRefNos(partNumber) {
//   let driver = await new Builder().forBrowser("chrome").build();
//   try {
//     await driver.get("https://partnerportal.dieseltechnic.com/en");

//     // Wait for the search input to be visible and ready for input

//     let searchInput = await driver.findElement(
//       By.css(
//         "#__nuxt > header > div > div.c-header__top > div.c-header__search > div > form > input"
//       )
//     );
//     await searchInput.sendKeys(partNumber);
//     // let searchInput = await driver.wait(
//     //   until.elementLocated(
//     //     By.css(
//     //       "#__nuxt > header > div > div.c-header__top > div.c-header__search > div > form > input"
//     //     )
//     //   ),
//     //   20000
//     // );
//     // await searchInput.sendKeys(partNumber);

//     // Wait for the search button to be visible and ready to be clicked
//     let searchButton = await driver.wait(
//       until.elementLocated(By.css(".c-search-input__button")),
//       10000
//     );

//     // Ensure the button is visible before attempting to click using JavaScript
//     await driver.wait(until.elementIsVisible(searchButton), 20000);

//     // Attempt to click using JavaScript
//     await driver.executeScript("arguments[0].click();", searchButton);

//     // Further actions...
//   } catch (error) {
//     console.error("An error occurred:", error);
//   } finally {
//     await driver.quit();
//   }
// }
// const { Builder, By, Key, until } = require("selenium-webdriver");
// require("chromedriver");

// async function findRefNos(partNumber) {
//   let driver = await new Builder().forBrowser("chrome").build();
//   try {
//     // Step 1: Navigate to the site
//     await driver.get("https://partnerportal.dieseltechnic.com/en");

//     // Step 2: Attempt to dismiss any cookie overlay
//     // This tries to find the cookie accept button and clicks it if found
//     try {
//       const cookieAcceptButton = await driver.wait(
//         until.elementLocated(By.css("#cmpbntyestxt")),
//         5000
//       ); // Adjust the CSS selector
//       await cookieAcceptButton.click();
//     } catch (cookieOverlayError) {
//       console.log(
//         "No cookie overlay found or error dismissing it:",
//         cookieOverlayError
//       );
//     }

//     // Step 3: Input the part number
//     const searchInput = await driver.findElement(
//       By.css(
//         "#__nuxt > header > div > div.c-header__top > div.c-header__search > div > form > input"
//       )
//     );
//     await searchInput.sendKeys(partNumber);

//     // Step 4: Attempt to click the search button directly
//     const searchButton = await driver.findElement(
//       By.css("button.c-search-input__button.cy-search")
//     );
//     await driver.wait(until.elementIsVisible(searchButton), 10000); // Ensure visibility
//     try {
//       await searchButton.click();
//     } catch (clickError) {
//       console.log(
//         "Direct click failed, attempting JavaScript click:",
//         clickError
//       );
//       // Step 5: Fallback to JavaScript click if direct click fails
//       await driver.executeScript("arguments[0].click();", searchButton);
//     }

//     // Step 6: Wait for search results
//     await driver.wait(
//       until.elementLocated(
//         By.css(
//           "#Productdetails > div:nth-child(5) > table > tbody > tr:nth-child(1) > td:nth-child(2)"
//         )
//       ),
//       20000
//     );

//     // Step 7: Extract and log data
//     const dataElements = await driver.findElements(
//       By.css(
//         "#Productdetails > div:nth-child(5) > table > tbody > tr > td:nth-child(2)"
//       )
//     );
//     for (const element of dataElements) {
//       const text = await element.getText();
//       console.log(text);
//     }
//   } catch (error) {
//     console.error("An error occurred:", error);
//   } finally {
//     await driver.quit();
//   }
// }

// // Replace 'YOUR_PART_NUMBER_HERE' with the actual part number

// NEW CODE
// const { Builder, By, Key, until } = require("selenium-webdriver");
// require("chromedriver");

// async function findRefNos(partNumber) {
//   let driver = await new Builder().forBrowser("chrome").build();
//   try {
//     await driver.get("https://partnerportal.dieseltechnic.com/en");

//     // Try to dismiss cookie overlay if present

//     // Proceed to search
//     let searchInput = await driver.findElement(
//       By.className(
//         "c-search-input__input"
//         // "#__nuxt > header > div > div.c-header__top > div.c-header__search > div > form > input"
//       )
//     );
//     // await searchInput.sendKeys(partNumber);
//     // await searchInput.sendKeys(partNumber, Key.ENTER);
//     // Clicking the search button
//     // let searchButton = await driver.findElement(
//     //   By.css("button.c-search-input__button.cy-search")
//     // );

//     //  await searchInput.submit();
//     await driver.actions().sendKeys(searchInput, partNumber).perform();
//     // const textField = driver.findElement(By.id("body"));
//     // await textField.click();
//     // let mycss = driver.findElement(By.css(""))

//     // await mycss.submit();
//     // Wait and check for results
//     try {
//       await driver.wait(
//         until.elementLocated(
//           By.css(
//             "#Productdetails > div:nth-child(5) > table > tbody > tr:nth-child(1) > td:nth-child(2)"
//           )
//         ),
//         90000
//       );
//     } catch (waitError) {
//       console.error("Error waiting for search results:", waitError);
//     }

//     // Extract data
//     let dataElements = await driver.findElements(
//       By.css(
//         "#Productdetails > div:nth-child(5) > table > tbody > tr > td:nth-child(2)"
//       )
//     );
//     for (const element of dataElements) {
//       const text = await element.getText();
//       console.log(text);
//     }
//   } catch (error) {
//     console.error("An error occurred:", error);
//   } finally {
//     await driver.quit();
//   }
// }
const { Builder, By, Key, until } = require("selenium-webdriver");
require("chromedriver");

async function findRefNos(partNumber) {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    // Navigate to the site
    await driver.get("https://partnerportal.dieseltechnic.com/en");

    // Find the search input and enter the part number
    let searchInput = await driver.findElement(
      By.className("c-search-input__input")
    );
    await searchInput.sendKeys(partNumber);

    // Find the search button using the class and perform a click
    await driver.wait(
      until.elementLocated(By.className("c-search-input__icon")),
      10000
    );
    let searchButton = await driver.findElement(
      By.className("c-search-input__icon")
    );
    await searchButton.click();

    // Wait for the search results to be visible
    await driver.wait(
      until.elementLocated(
        By.css(
          "#Productdetails > div:nth-child(5) > table > tbody > tr:nth-child(1) > td:nth-child(2)"
        )
      ),
      10000
    );

    // Assuming multiple rows could contain the data of interest, find all matching `td` elements
    let dataElements = await driver.findElements(
      By.css(
        "#Productdetails > div:nth-child(5) > table > tbody > tr > td:nth-child(2)"
      )
    );
    // let dataPromises = dataElements.map(
    //   async (element) => await element.getText()
    // );
    // let data = await Promise.all(dataPromises);
    let cleanData = [];
    for (const element of dataElements) {
      let text = await element.getText();
      // Use .trim() to remove whitespace from both ends of each string
      let trimmedText = text.trim();
      // Optionally remove all spaces within the text
      let noSpacesText = trimmedText.replace(/\s+/g, "");
      cleanData.push(noSpacesText);
    }

    console.log("Data found:", cleanData);
    // console.log("Data found:", data);
  } catch (error) {
    console.error("An error occurred:", error);
  } finally {
    await driver.quit();
  }
}

// findRefNos("882272").catch(console.error);
// Use the part number provided as a command-line argument
const partNumber = process.argv[2]; // Gets the second command-line argument
if (!partNumber) {
  console.error("Please provide a part number as an argument.");
  process.exit(1);
}

findRefNos(partNumber).catch(console.error);
