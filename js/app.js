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
let tpIpad = new Product('Ipad & TP Holder', "img/bathroom.jpg");
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
    let numberOfMatchUps = 0;
    let numberOfMatchupsAllowed = 25;

// DOM Elements
// Selects and saves indivdual cards and buttons as seperate variables for manipulation later
let leftImage = document.getElementById('leftImage');
let leftButton = document.getElementById('leftButton');
let centerImage = document.getElementById('centerImage');
let centerButton = document.getElementById('centerButton');
let rightImage = document.getElementById('rightImage');
let rightButton = document.getElementById('rightButton');


// functions
function getRandomIndex() {
    let productChoices = allProductsArray;
    return Math.floor(Math.random() * (productChoices.length));
}

function renderProduct() {
    let product1 = allProductsArray[getRandomIndex()];
    product1.numOfTimesShown++;
    let product2 = allProductsArray[getRandomIndex()];
    product2.numOfTimesShown++;
    let product3 = allProductsArray[getRandomIndex()];
    product3.numOfTimesShown++;
    if (product1 === product2) {
        product2 = allProductsArray[getRandomIndex()];
    }
    if (product3 === product1 || product3 === product2){
        product3 = allProductsArray[getRandomIndex()];
    }
    leftImage.src = product1.filePath;
    leftImage.alt = product1.productName;
    centerImage.src = product2.filePath;
    centerImage.alt = product2.productName;
    rightImage.src = product3.filePath
    rightImage.alt = product3.productName;
}


renderProduct();
/*


Attach an event listener to the section of the HTML page where the images are going to be displayed.

Once the users ‘clicks’ a product, generate three new products for the user to pick from.


As a user, I would like to track the selections made by viewers so that I can determine which products to begin production on.
In the constructor function define a property to hold the number of times a product has been clicked.

After every selection by the viewer, update the newly added property to reflect if it was clicked.

As a user, I would like to view a report of results after all rounds of voting have concluded so that I can evaluate which products were the most popular.

After voting rounds have been completed, remove the event listeners on the product.

Add a button with the text View Results, which when clicked displays the list of all the products followed by the votes received, and number of times seen for each. Example: banana had 3 votes, and was seen 5 times.

NOTE: Displayed product names should match the file name for the product. Example: the product represented with dog-duck.jpg should be displayed to the user as exactly “dog-duck” when the results are shown
*/