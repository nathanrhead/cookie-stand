'use strict';

//Creating my object literals for each location: Seattle, Tokyo, Dubai, Paris, Lima

var seattle = {
  name: 'Seattle',
  minCustomersPerHour: 23, // This informaiton is provided by Pat.
  maxCustomersPerHour: 65, // This information is provided by Pat.
  avgCookiesPerCustomer: 6.3, // This informaiton is provided by Pat.
  customersPerHour: [], //we use this information to generate the cookie sales per hour.
  cookieSalesPerHour: [], //This is the information we want.
};

var tokyo = {
  name: 'Tokyo',
  minCustomersPerHour: 3, // This informaiton is provided by Pat.
  maxCustomersPerHour: 24, // This information is provided by Pat.
  avgCookiesPerCustomer: 1.2, // This informaiton is provided by Pat.
  customersPerHour: [], //we use this information to generate the cookie sales per hour.
  cookieSalesPerHour: [], //This is the information we want.
};

var dubai = {
  name: 'Dubai',
  minCustomersPerHour: 11, // This informaiton is provided by Pat.
  maxCustomersPerHour: 38, // This information is provided by Pat.
  avgCookiesPerCustomer: 3.7, // This informaiton is provided by Pat.
  customersPerHour: [], //we use this information to generate the cookie sales per hour.
  cookieSalesPerHour: [], //This is the information we want.
};

var paris = {
  name: 'Paris',
  minCustomersPerHour: 20, // This informaiton is provided by Pat.
  maxCustomersPerHour: 38, // This information is provided by Pat.
  avgCookiesPerCustomer: 2.3, // This informaiton is provided by Pat.
  customersPerHour: [], //we use this information to generate the cookie sales per hour.
  cookieSalesPerHour: [], //This is the information we want.
};

var lima = {
  name: 'Lima',
  minCustomersPerHour: 2, // This informaiton is provided by Pat.
  maxCustomersPerHour: 16, // This information is provided by Pat.
  avgCookiesPerCustomer: 4.6, // This informaiton is provided by Pat.
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
    object.cookieSalesPerHour.push(Math.floor(object.avgCookiesPerCustomer * customersPerHour)); // This pushes the product of average cookie sales and number of customers per hour to the cookieSalesPerHour array of each object.
    // console.log(`Customers per hour: ${object.customersPerHour[i]}.`);
    // console.log(`Cookies per hour: ${object.cookieSalesPerHour[i]}.`);
  }
}

loopCalculator(seattle);
loopCalculator(tokyo);
loopCalculator(dubai);
loopCalculator(paris);
loopCalculator(lima);

//consider creatting an array for the city names.
//nested loop: outer loop through each city; inner through cookie sales for each location

var cityArray = [seattle, tokyo, dubai, paris, lima];
var cookieSales = [seattle, tokyo, dubai, paris, lima];
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

for (var i = 0; i < cityArray.length; i++) {
  var cityName = cityArray[i].name;
  // console.log(cityName);

  // This is the parent element
  var parentElement = document.getElementById(cityName);

  // This is a child element for city names
  var thElement = document.createElement('th');
  thElement.textContent = cityName;
  parentElement.appendChild(thElement);
  //   console.log(thElement, cityHeader);

  var runningCount = 0;

  for (var j = 0; j < 14; j++) {
    var hourlyCookieSales = cookieSales[i].cookieSalesPerHour;
    // console.log(hourlyCookieSales);

    var cookieSalesPh = document.getElementById(cityArray[i].name);
    var tdElement = document.createElement('td');
    tdElement.textContent = `${hours}: ${hourlyCookieSales[j]}`;
    // cookieSalesPh.appendChild(tdElement);

    runningCount += + hourlyCookieSales[j];

  }
  var tdTotalElement = document.createElement('td');
  tdTotalElement.textContent = `Daily total = ${runningCount}`;
  // cookieSalesPh.appendChild(tdTotalElement);
}


// function sumOfDailyCookieSales(dynamicArray) { 
//     var sum = 1;
//       for (var i = 0; i < dynamicArray.length; i++) {
//           totalSum = sum(totalProduct, dynamicArray[i])[0]; // 1: 1 * 1 = 1; 2: 1 * 2 = 2; 3: 2 * 3 = 6; 4: 6 * 4 = 24; 5: 24 * 5 = 120;
//       }
//     }  




// var tokyoCityHeader = document.getElementById('tokyo');
// var headerElement2 = document.createElement('header');
// headerElement2.textContent = tokyo.name;
// tokyoCityHeader.appendChild(headerElement2)
