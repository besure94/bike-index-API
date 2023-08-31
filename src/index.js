import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import BikeSearch from './bike-search.js';

async function getBike(city) {
  const response = await BikeSearch.getBike(city);
  console.log(response);
  if (response.bikes) {
    printElements(response, city);
  } else {
    printError(response, city);
  }
}

function printElements(response) {
  let bikeInfo = document.querySelector('div#showBikes');
  bikeInfo.innerHTML = null;
  let ulBikesList = document.createElement("ul");
  // create individual bikes for bike list
  for (let i = 0; i < 25; i++) {
    // create list item and div with bike info for each bike
    let liSingleBike = document.createElement("li");
    let bikeInfoDiv = document.createElement("div");
    // create bike title and add to div
    let bikeTitle = document.createElement("h2");
    bikeTitle = response.bikes[i].title;
    bikeInfoDiv.append(bikeTitle);
    let lineBreak = document.createElement("br");
    bikeInfoDiv.append(lineBreak);
    // create bike link and add to div
    let bikeLink = document.createElement("a");
    bikeLink.setAttribute("href", response.bikes[i].url);
    bikeLink.innerText = "link";
    bikeInfoDiv.append(bikeLink);
    // add bike info div and list item to bike list
    liSingleBike.append(bikeInfoDiv);
    ulBikesList.append(liSingleBike);
  }
  // add bike list to DOM
  bikeInfo.append(ulBikesList);
}

function printError(error, response) {
  document.querySelector('#showBikes').innerHTML = `There was an error accessing the data for ${error[2]}: ${error[0].status} ${error[0].statusText}: ${error[1].message}`;
  console.log(response);
}

function handleFormSubmission(event) {
  event.preventDefault();
  const city = document.querySelector('#location').value;
  document.querySelector('#location').value = null;
  console.log(city);
  getBike(city);
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});