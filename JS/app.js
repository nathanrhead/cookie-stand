'use strict';
var hours = ['Store Locations', '6:00 a.m.', '7:00 a.m.', '8:00 a.m.', '9:00 a.m.', '10:00 a.m.', '11:00 a.m.', '12:00 p.m.', '1:00 p.m.', '2:00 p.m.', '3:00 p.m.', '4:00 p.m.', '5:00 p.m.', '6:00 p.m.', '7:00 p.m.', 'Grand Total'];

var parentElementThead = document.getElementById('hours');
// The parent element for the header (each hour)

var parentElementTbody = document.getElementById('cityRow');
// The parent element for the rows of data (including the city names

var parentElementTfoot = document.getElementById('');
// The parent element for the footer (totals for all stores per hour)


function City(name, minimumCustomersPerHour, maximumCustomersPerHour, averageCookiesPerCustomer, totalCookiesForTheDay) {
  this.name = name;
  this.minimumCustomersPerHour = minimumCustomersPerHour;
  this.maximumCustomersPerHour = maximumCustomersPerHour;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;
  this.totalCookiesForTheDay = totalCookiesForTheDay;
  this.customersPerHour = [];
  this.cookiesSoldPerHour = [];
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
    this.totalCookiesForTheDay += cookiesSoldThisHour; // Tallies the cookies throughout the day
    this.cookiesSoldPerHour.push(cookiesSoldThisHour);
  }
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
    console.log(this.cookiesSoldPerHour);
    trChild.appendChild(tdChildData);
  }
};

// These are called object instances
var seattle = new City('Seattle', 23, 65, 6.3, 0);
var tokyo = new City('Tokyo', 3, 24, 1.2, 0);
var dubai = new City('Dubai', 11, 38, 3.7, 0);
var paris = new City('Paris', 20, 38, 2.3, 0);
var lima = new City('Lima', 2, 16, 4.6, 0);

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
  tdChildFoot.textContent = this.totalCookiesForTheDay
};

renderHeaderHours();

seattle.renderRows();
tokyo.renderRows();
dubai.renderRows();
paris.renderRows();
lima.renderRows();






// console.log(seattle, tokyo, dubai, paris, lima);




// render: function(){
//   // get the section with the id of seattle from the DOM - that is going to be our parent element for the h2
//   var parentSection = document.getElementById('seattle');

//   // create an h2
//   var headingSeattle = document.createElement('h2');
//   // fill it with content - this.name
//   headingSeattle.textContent = this.name;
//   // append it to the parent
//   parentSection.appendChild(headingSeattle);

//   // get the ul with the id of seattle-sales from the DOM - that is going to be our parent element
//   var salesList = document.getElementById('seattle-sales');

//   // loop over our cookieSoldEachHour array
//   for(var i=0; i<this.cookiesSoldEachHour.length; i++){
//     // create an li
//     var liElement = document.createElement('li');
//     // fill it with the content from the cookies sold each hour
//     liElement.textContent = `${hours[i]}: ${this.cookiesSoldEachHour[i]} cookies`;
//     // append it to the parent
//     salesList.appendChild(liElement);
//   }

