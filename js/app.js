'use strict'
// class declaration
function Product(name, filepath) {
  this.productName = name;
  this.filePath = filepath;
  this.numOfTimesShown = 0;
  this.numOfTimesSelected = 0;
};

// all object initialization
let rollingBag = new Product('R2D2 Bag', "img/bag.jpg");
let bananaSlicer = new Product('Banana slicer', "img/banana.jpg");
let tpIpad = new Product('Ipap/TP Holder', "img/bathroom.jpg");
let toelessBoots = new Product('Toeless Boots', "img/boots.jpg");
let futureToaster = new Product('Toaster of 3023', "img/breakfast.jpg");
let meatGum = new Product('MeatBall Gum', "img/bubblegum.jpg");
let redChair = new Product('Convex Chair', "img/chair.jpg");
let evilToy = new Product('Cthulhu Toy', "img/cthulhu.jpg");
let duckbillMuzzle = new Product('Duckbill Muzzle', "img/dog-duck.jpg");
let dragonMeat = new Product('Dragon Meat', "img/dragon.jpg");
let penSilverware = new Product('Pen Silverware', "img/pen.jpg");
let pawMop = new Product('Paw Mop', "img/pet-sweep.jpg");
let pizzaScissors = new Product('Pizza Scissors', "img/scissors.jpg");
let sharkBlanket = new Product('Shark Blanket', "img/shark.jpg");
let babyMop = new Product('Baby Mop', "img/sweep.png");
let tauntaunBlanket = new Product('Tauntaun Blanket', "img/tauntaun.jpg");
let unicornMeat = new Product('Unicorn Meat', "img/unicorn.jpg");
let wateringCan = new Product('Unlimited Watering Can', "img/water-can.jpg");
let wineGlass = new Product('Wine Glass', "img/wine-glass.jpg");

// Global Variable
let allProductsArray = [rollingBag, bananaSlicer, tpIpad, toelessBoots, futureToaster, meatGum, redChair, evilToy, duckbillMuzzle,
  dragonMeat, penSilverware, pawMop, pizzaScissors, sharkBlanket, babyMop, tauntaunBlanket, unicornMeat, wateringCan, wineGlass];
let indexArray = [];
let lastGroupArray = [];
let numberOfMatchUps = 0;
let numberOfMatchupsAllowed = 25;

// DOM Elements
// Selects and saves indivdual cards and buttons as seperate variables for manipulation later
let resultButton = document.getElementById('resultsButton');
let leftImage = document.getElementById('leftImage');
let leftButton = document.getElementById('leftButton');
let centerImage = document.getElementById('centerImage');
let centerButton = document.getElementById('centerButton');
let rightImage = document.getElementById('rightImage');
let rightButton = document.getElementById('rightButton');


// functions
function getRandomIndex() {
  return Math.floor(Math.random() * (allProductsArray.length));
}

function getRandomGroup() {
  while (indexArray.length < 3) {
    let ranNum = getRandomIndex();
    if (!indexArray.includes(ranNum)) {
      indexArray.push(ranNum);
    }
  }
}

function renderProduct() {
  getRandomGroup();
  for (let i = 0; i < indexArray.length; i++){
    if (lastGroupArray.includes(indexArray[i])){
      //lastGroupArray.pop();
      console.log(indexArray[i]);
    }
  }
  console.log(indexArray);
  console.log(lastGroupArray.splice(0, 3));
  let product1 = indexArray.shift();
  let product2 = indexArray.shift();
  let product3 = indexArray.shift();
  lastGroupArray.push(product1);
  lastGroupArray.push(product2);
  lastGroupArray.push(product3);
  allProductsArray[product1].numOfTimesShown++;
  allProductsArray[product2].numOfTimesShown++;
  allProductsArray[product3].numOfTimesShown++;
  leftImage.src = allProductsArray[product1].filePath;
  leftImage.alt = allProductsArray[product1].productName;
  centerImage.src = allProductsArray[product2].filePath;
  centerImage.alt = allProductsArray[product2].productName;
  rightImage.src = allProductsArray[product3].filePath;
  rightImage.alt = allProductsArray[product3].productName;
}

function voteHandler(event) {
  // Selects the parent node of what button was selected
  let parentNode = event.target.parentNode;
  // Selects the image thats a sibling of the button clicked
  let imageNodeAlt = parentNode.querySelector('img').alt;
  if (numberOfMatchUps < numberOfMatchupsAllowed) {
    renderProduct();
    numberOfMatchUps++;
  }
  for (let i = 0; i < allProductsArray.length; i++){
    if (allProductsArray[i].productName === imageNodeAlt){
      allProductsArray[i].numOfTimesSelected++;
    }
  }
  let rounds = numberOfMatchUps;
  let maxRounds = numberOfMatchupsAllowed;
  if (rounds === maxRounds) {
    event.target.removeEventListener('click', voteHandler);
  }
}


function resultHandler() {
  // Selects the ul by id 
  let resultsList = document.getElementById('resultsList');
  for (let i = 0; i < allProductsArray.length; i++){
    let runningObject = allProductsArray[i];
    let newItem = document.createElement('li');
    newItem.innerHTML = `${runningObject.productName}: Shown:${runningObject.numOfTimesShown} Clicked:${runningObject.numOfTimesSelected}`;
    resultsList.appendChild(newItem);
  }
}

leftButton.addEventListener('click', voteHandler);
centerButton.addEventListener('click', voteHandler);
rightButton.addEventListener('click', voteHandler);
resultButton.addEventListener('click', resultHandler);
renderProduct();




