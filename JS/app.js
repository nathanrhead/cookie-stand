'use strict';

var hours = ['Store Locations', '6:00 a.m.', '7:00 a.m.', '8:00 a.m.', '9:00 a.m.', '10:00 a.m.', '11:00 a.m.', '12:00 p.m.', '1:00 p.m.', '2:00 p.m.', '3:00 p.m.', '4:00 p.m.', '5:00 p.m.', '6:00 p.m.', '7:00 p.m.', 'Grand Total'];

var storeLocations = [];
console.log(storeLocations);

var dailyTotalAllLocations = [];
console.log(dailyTotalAllLocations);

var dailyGrandTotalAllCities = 0;


var parentElementThead = document.getElementById('hours');
// The parent element for the header (each hour)

var parentElementTbody = document.getElementById('cityRow');
// The parent element for the rows of data (including the city names

var parentElementTfoot = document.getElementById('hourlyTotals');
// The parent element for the footer (totals for all stores per hour)


function City(name, minimumCustomersPerHour, maximumCustomersPerHour, averageCookiesPerCustomer) {
  this.name = name;
  this.minimumCustomersPerHour = minimumCustomersPerHour;
  this.maximumCustomersPerHour = maximumCustomersPerHour;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;
  this.totalCookiesForTheDay = 0;
  this.customersPerHour = [];
  this.cookiesSoldPerHour = [];

  storeLocations.push(this);
  dailyTotalAllLocations.push(this.totalCookiesForTheDay);
}

City.prototype.generateCustomersPerHour = function(){
  // generate the customersEachHour array
  // get a random number somewhere between the min and max and put that random number into the customersEachHour array for each hour
  for(var i=0; i<hours.length - 2; i++){
    var randomNumber = Math.floor(Math.random() * (this.maximumCustomersPerHour - this.minimumCustomersPerHour + 1) + this.minimumCustomersPerHour);

    this.customersPerHour.push(randomNumber);
  }
};

City.prototype.cookiesSoldEachHour = function() {
  this.generateCustomersPerHour();
  for(var i=0; i<hours.length - 2; i++){
    var cookiesSoldThisHour = Math.ceil(this.customersPerHour[i] * this.averageCookiesPerCustomer);
    this.totalCookiesForTheDay += cookiesSoldThisHour;

    this.cookiesSoldPerHour.push(cookiesSoldThisHour);
  }
  dailyGrandTotalAllCities += this.totalCookiesForTheDay;
  console.log(dailyGrandTotalAllCities);
};

City.prototype.renderRows = function() {
  this.cookiesSoldEachHour();
  var trChild = document.createElement('tr');
  var tdChild = document.createElement('td');
  tdChild.textContent = this.name;
  trChild.appendChild(tdChild);
  parentElementTbody.appendChild(trChild);

  for (var j = 0; j < hours.length - 2; j++) {
    var tdChildData = document.createElement('td');
    tdChildData.textContent = this.cookiesSoldPerHour[j];
    trChild.appendChild(tdChildData);
  }
  // This writes the total cookies to the DOM in the column "Grand Total"
  var tdChildCityTotal = document.createElement('td');
  tdChildCityTotal.textContent = this.totalCookiesForTheDay;
  trChild.appendChild(tdChildCityTotal);
};


new City('Seattle', 23, 65, 6.3);
new City('Tokyo', 3, 24, 1.2);
new City('Dubai', 11, 38, 3.7);
new City('Paris', 20, 38, 2.3);
new City('Lima', 2, 16, 4.6);

// This function writes the total cookies sold per hour, per location.
function renderHeaderHours() {
  var trChild = document.createElement('tr');
  for (var i = 0; i < hours.length; i++) {
    var thChild = document.createElement('th');
    thChild.textContent = hours[i];
    trChild.appendChild(thChild);
    parentElementThead.appendChild(trChild);
  }
}

function renderFooterTotals() {
  var trChild = document.createElement('tr');
  var tdChildFoot = document.createElement('td');
  tdChildFoot.textContent = 'Hourly Totals';
  trChild.appendChild(tdChildFoot);
  parentElementTfoot.appendChild(trChild);

  for (var i = 0; i < hours.length - 2; i++) {
    var dailyCookieSalesAllLocations = 0;

    for (var j = 0; j < storeLocations.length; j++) {
      dailyCookieSalesAllLocations += storeLocations[j].cookiesSoldPerHour[i];
      var tdFooterTotal = document.createElement('td');
      tdFooterTotal.textContent = dailyCookieSalesAllLocations;
    }
    trChild.appendChild(tdFooterTotal);
  }
  var tdGrandTotal = document.createElement('td');
  tdGrandTotal.textContent = dailyGrandTotalAllCities;
  trChild.appendChild(tdGrandTotal);
}

renderHeaderHours();

for (var i = 0; i < storeLocations.length; i++) {
  storeLocations[i].renderRows();
  // storeLocations[i].renderCityTotals();
}

renderFooterTotals();
