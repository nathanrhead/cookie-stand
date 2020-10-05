'use strict';

//Creating my object literals for each location: Seattle, Tokyo, Dubai, Paris, Lima

var seattle = {
  name: 'Seattle',
  minCustomersPerHour: 23, // This informaiton is provided by Pat.
  maxCustomersPerHour: 65, // This information is provided by Pat.
  avgCookieSales: 6.3, // This informaiton is provided by Pat.
  customersPerHour: [], //we use this information to generate the cookie sales per hour.
  cookieSalesPerHour: [], //This is the information we want.
};

function randomCustomersPerHour(minCustomersPerHour, maxCustomersPerHour) {
  var min = Math.ceil(minCustomersPerHour);
  var max = Math.floor(maxCustomersPerHour);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function loopCalculator(object) {
  for (var i = 0; i < 14; i++) {
    var customersPerHour = randomCustomersPerHour(object.minCustomersPerHour, object.maxCustomersPerHour);
    object.customersPerHour.push(customersPerHour); // Pushes a new random number from the randCustomersPerHour function to the customersPerHour array of each object.
    object.cookieSalesPerHour.push(Math.floor(object.avgCookieSales * customersPerHour)); // This pushes the product of average cookie sales and number of customers per hour to the cookieSalesPerHour array of each object.
    console.log(`In ${seattle.name} there were ${seattle.customersPerHour[i]} customers this hour.`);
    console.log(`The number of cookies sold this hour was ${seattle.cookieSalesPerHour[i]}.`);
  }
}

loopCalculator(seattle);
