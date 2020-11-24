// * GLOBAL FUNCTIONS AND VARIABLES //

const body = document.getElementById("body");
const affScreen = document.getElementById("affirmation");

//Stores all affirmations in an array of objects organized by category
var affirmations=[
	{
		category: "learning",
		color: "#3C6138",
		strings: [
			"learning string one My mind is open, my space is calm, and I can let go of all distractions.",
			"learning string two",
			"learning string three"
		]
	},
	{
		category: "confidence",
		color: "#922D50",
		strings: [
			"confidence string one",
			"confidence string two",
			"confidence string three"
		]
	},
	{
		category: "creativity",
		color: "#392B58",
		strings: [
			"creativity string one",
			"creativity string two",
			"creativity string three"
		]
	},
	{
		category: "rest",
		color: "#2B4162",
		strings: [
			"rest string one",
			"rest string two",
			"rest string three"
		]
	},
	{
		category: "connection",
		color: "#8A6270",
		strings: [
			"connection string one",
			"connection string two",
			"connection string three"
		]
	},
	{
		category: "time",
		color: "#50808E",
		strings: [
			"time string one",
			"time string two",
			"time string three"
		]
	},
];

//Creates a global variable currentCat for "state", i.e. which category has been selected
var currentCat = "";
var currentList = "";
var backgroundColor = "";

// * NAVIGATION FUNCTIONS //

//A button that calls this function clears any open screens to reveal the categories screen.
//It removes the body classes that control relevant animations.
//It also clears the global variable that controls what category we're in.
function animateCats() {
	if (body.classList.contains("aff-open")) {
		body.classList.remove("aff-open");
	}
	if (body.classList.contains("howto-open")) {
		body.classList.remove("howto-open");
	} 
	currentCat = "";
}

//A button that calls this function clears any open screens and opens the affirmations screen.
//It adds and removes the body classes that control relevant animations.
function animateAff() {
	if (body.classList.contains("howto-open")) {
		body.classList.remove("howto-open");
	} 
	body.classList.add("aff-open");
}

//A button that calls this function opens the how-to screen.
//It adds the body class that controls relevant animations.
function animateHowTo() {
	body.classList.add("howto-open");
}

function generateNew() {
    //Generates a random index to retrieve a random affirmation from the list
    let index = Math.floor(Math.random()*currentList.strings.length); 
    
    //Stores randomly generated affirmation in a variable
	let currentAff = currentList.strings[index];
	
    //Finds HTML div with an ID of aff-text and sets its content to the affirmation variable
    let affText = document.querySelector('#affText');
	affText.innerHTML = currentAff;
}

//Updates global variable, list of affirmations, and affirmation page heading based on button click
function updateCurrentCat(cat, color) {
	backgroundColor = color;
	affScreen.style['background-color'] = backgroundColor;
	currentCat = cat;
	currentList = affirmations.filter(item => item.category == currentCat)[0];
	var affCat = document.querySelector('#affCat');
	var affHeading = `Positive affirmations for ${currentCat}`;
	affCat.innerHTML = affHeading;
}

function selectCat(cat, color) {
	animateAff();
	updateCurrentCat(cat, color);
	generateNew();
}


// * CATEGORIES (MAIN) SCREEN //

//Creates a button element for each item in the affirmations object where "strings" is not empty
var catButtons = `
	${affirmations
		.filter(item => item.strings.length > 0)
		.map(item => 
			`<button type="button" id="${item.category}" class="cat-button" style="background-color: ${item.color}" onclick="selectCat('${item.category}', '${item.color}')">
				<h3 class="cat-text">${item.category}</h3>
			</button>
			`)
		.join('')}
`;

//Displays the button elements
var catBtnContainer = document.querySelector('#catButtons');
catBtnContainer.innerHTML = catButtons;