var jsonData;

function logResult(result) {
	createCatButtons(result);
	jsonData = result;
}

function logError(error) {
	console.log('Looks like there was a problem: \n', error);
}

function validateResponse(response) {
	if (!response.ok) {
		throw Error(response.statusText);
	}
	return response;
}

function readResponseAsJSON(response) {
	return response.json();
}

function fetchJSON(pathToResource) {
	fetch(pathToResource)
	.then(validateResponse)
	.then(readResponseAsJSON)
	.then(logResult)
	.catch(logError);
}

fetchJSON('categories.json');

// * GLOBAL VARIABLES //

const body = document.getElementById("body");
const affScreen = document.getElementById("affirmation");
const catBtnContainer = document.querySelector('#catButtons');

//Creates global variable that controls state based on which category has been selected
var currentList = "";


// * CATEGORIES (MAIN) SCREEN //


var catButtons = "";
var categories = [];

function createCatButtons(result) {
	//console.log(result[0]["color"]);
	//console.log(result.filter(item => item["category"] == 'learning'));
	//console.log(result.filter(item => item["strings"].length > 0));
	// categories = result.map(item => item["category"]);
	// console.log(categories);
	// console.log(JSON.stringify(result[0]["category"]));
	// console.log(result[0]["category"]);
	//JSON.stringify(result);

	//Creates button element for each item in affirmations object where "strings" is not empty
	catButtons = `
		${result
			.filter(item => item["strings"].length > 0)
			.map(item => 
				`<button type="button" id="${item["category"]}" class="cat-button" style="background-color: ${item["color"]}" onclick="selectCat('${item["category"]}', '${item["color"]}')">
					<h3 class="cat-text">${item["category"]}</h3>
				</button>
				`)
			.join('')
		}
	`;

	//Displays the button elements
	catBtnContainer.innerHTML = catButtons;
}


// * NAVIGATION FUNCTIONS //

//Calling this function clears any open screens to reveal categories screen.
//It removes the body classes that control relevant animations.
function animateCats() {
	if (body.classList.contains("aff-open")) {
		body.classList.remove("aff-open");
	}
	if (body.classList.contains("howto-open")) {
		body.classList.remove("howto-open");
	} 
}

//Calling this function clears any open screens and opens affirmations screen.
//It adds and removes body classes that control relevant animations.
function animateAff() {
	if (body.classList.contains("howto-open")) {
		body.classList.remove("howto-open");
	} 
	body.classList.add("aff-open");
}

//Calling this function opens how-to screen.
//It adds the body class that controls relevant animations.
function animateHowTo() {
	body.classList.add("howto-open");
}


// * MORE FUNCTIONS //

//Calling this function generates random affirmation in selected category
function generateNew() {
    //Generates random index based on length of selected category's array of strings
    let index = Math.floor(Math.random()*currentList.strings.length); 
    
    //Stores randomly generated affirmation in a variable
	let currentAff = currentList.strings[index];
	
    //Finds HTML div with ID of aff-text and sets its content to current affirmation
    var affText = document.querySelector('#affText');
	affText.innerHTML = currentAff;
}

//Updates global variable, list of affirmations, and affirmation page heading based on category selected
function updateCurrentCat(cat, color) {
	affScreen.style['background-color'] = color;
	currentList = jsonData.filter(item => item.category == cat)[0];
	var affCat = document.querySelector('#affCat');
	var affHeading = `${cat}`;
	affCat.innerHTML = affHeading;
}

function selectCat(cat, color) {
	animateAff();
	updateCurrentCat(cat, color);
	generateNew();
}