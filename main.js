// * GLOBAL VARIABLES //

const body = document.getElementById("body");
const affScreen = document.getElementById("affirmation");
const catBtnContainer = document.querySelector('#catButtons');

//Creates global variable that controls state based on which category has been selected
var currentList = "";

//Stores all affirmations in array of objects organized by category
const affirmations=[
	{
		category: "learning",
		color: "#3C6138",
		strings: [
			"My mind is open, my space is calm, and I can let go of all distractions.",
			"I believe I can learn anything that I put my mind to.",
			"My mind is strong and disciplined.",
			"I am more than capable of achieving my goals.",
			"I have all the time and energy I need to accomplish my goals.",
			"I refuse to let anything distract me from my goals.",
			"My mind is sharp and focused.",
			"I am ready to learn at my own pace.",
			"I am excited to learn something new today.",
			"My ability to learn is improving every day.",
			"I am patient with myself and learn at my own pace.",
			"I am confident asking for help when I need it.",
			"I always do my best.",
			"I know that I can solve any problem that I encounter.",
			"If I fall, I will get right back up.",
			"I am exactly where I need to be right now.",
			"I never give up on myself.",
			"I create healthy balance in my life.",
			"Every day I am discovering new skills.",
			"I am grateful for my ability to learn new things.",
			"My mind is clear and focused.",
			"I set aside all distractions to be present in this moment.",
			"My focus is getting better every day.",
			"My dedication inspires others.",
			"My mind is focused and clear."
		]
	},
	{
		category: "confidence",
		color: "#922D50",
		strings: [
			"I have the power to change anything in my life that isn't working for me.",
			"Every day I am becoming stronger in mind and body.",
			"Mistakes and failures are leading me closer to achieving my goals.",
			"I am capable of handling anything that comes my way.",
			"I act from a place of courage, not fear.",
			"I am surrounded by people who believe in me and support me.",
			"I trust myself to make good decisions.",
			"I am becoming the person I want to be.",
			"I will face any challenge with wisdom and clarity.",
			"Every day I am becoming a better version of myself.",
			"I have a right to speak my truth.",
			"I have the courage to approach difficult conversations.",
			"I know that I am on the right path.",
			"I am proud to share my unique gifts and abilities with others.",
			"I embrace what makes me different.",
			"My confidence inspires others.",
			"My challenges help me grow.",
			"I live my life on my own terms.",
			"I let go of any limiting thoughts and beliefs.",
			"I am allowed to feel good about myself.",
			"The past holds no power over me."
		]
	},
	{
		category: "creativity",
		color: "#392B58",
		strings: [
			"Today I am making time to create.",
			"Inspiration is all around me.",
			"I open myself to the flow of creativity from within.",
			"I express myself with ease and confidence.",
			"I allow my intuition to guide me.",
			"I consider all my ideas without judgment.",
			"I set aside any thoughts that don't serve me.",
			"My creative energy is limitless.",
			"My ideas are innovative and useful.",
			"I follow my creative inclinations.",
			"Using my imagination makes me feel free.",
			"My expression is in alignment with my true self.",
			"My creativity is an authentic expression of myself.",
			"My natural creativity shines through everything I do.",
			"I have endless creative potential.",
			"My creative energy is valuable to the world around me.",
			"I am excited to share my ideas with the world.",
			"My creativity inspires others.",
			"My creativity brings me joy and healing.",
			"I am worthy of good things."
		]
	},
	{
		category: "calm",
		color: "#2B4162",
		strings: [
			"I am surrounded by peace and quiet.",
			"Everything is well in this moment.",
			"Being calm and relaxed is my priority now.",
			"I choose calm no matter what is happening around me.",
			"I choose to be calm, clear, and focused even in times of stress.",
			"I don't worry over things that aren't in my control.",
			"I am OK with being imperfect.",
			"I have the power to change anything I want.",
			"I accept myself unconditionally.",
			"I am in control of my thoughts.",
			"I am proud of myself for doing my best.",
			"It's OK that I feel this way.",
			"Everything I am feeling is only temporary.",
			"I am proud of how far I've come.",
			"I only need to deal with one thing at a time.",
			"The most important thing right now is to breathe.",
			"I care for myself as much as I would care for a loved one.",
			"I feel centered and grounded.",
			"I am enough.",
			"I have all the tools I need to face my fears head-on.",
			"I feel safe, calm, and at peace.",
			"My body is healthy, my heart is at peace."
		]
	},
	{
		category: "connection",
		color: "#8A6270",
		strings: [
			"I deserve love in abundance.",
			"I attract loving and caring people into my life.",
			"I am grateful for the love in my life.",
			"I seek fulfilling, balanced relationships.",
			"I take time to truly listen and connect with others.",
			"I accept others for who they are.",
			"I forgive those who have hurt me.",
			"I make time to cultivate connection with others.",
			"I feel safe expressing myself to others.",
			"I am more courageous and vulnerable every day.",
			"I am loved and appreciated for who I am.",
			"I communicate with kindness and understanding.",
			"I can comfortably express my needs.",
			"I am free to be myself.",
			"I honor myself by honoring my boundaries.",
			"I set boundaries that support my mental and physical health.",
			"I attract people who respect my boundaries.",
			"I am open to healthy and loving relationships.",
			"I am ready to receive love.",
			"I am forgiving and understanding with the people I love.",
			"I am a supportive and dependable friend.",
			"I am safe revealing my true self in my relationships.",
			"I seek true connection with others.",
			"I trust my instincts, not my fears.",
			"I will reach out to a trusted friend when I am struggling.",
			"I approach conflict with kindness and courage.",
			"I help others to feel good about themselves.",
			"I seek out people who inspire and empower me.",
			"Everyone I meet accepts me for who I am.",
			"It's ok to be myself around my friends.",
			"I communicate with honesty and compassion.",
			"I choose to surround myself only with positive people who lift me up."
		]
	},
	{
		category: "happiness",
		color: "#50808E",
		strings: [
			"I will find ways to bring happiness to other people.",
			"I deserve happiness.",
			"I am thankful for all the people in my life who love and support me.",
			"I have an abundance of peace, love, and joy in my life.",
			"My happiness comes from within me.",
			"I deserve to feel good.",
			"Expressing my joy inspires joy in others.",
			"I believe I can find joy in everything I do.",
			"I let go of any limiting thoughts and beliefs.",
			"I already have everything I need to create the life I want.",
			"I deserve to be healthy, happy, and successful.",
			"I'm good with who I am and proud of who I'm becoming.",
			"Nothing can stop me from finding joy today.",
			"I am making a conscious effort to be happier.",
			"I choose to feel good.",
			"I let go of old patterns and embrace positivity.",
			"Amazing opportunities are in my future.",
			"I am moving toward a future of happiness and success.",
			"I deserve all the good things in my life.",
			"I choose to find what feels good."
		]
	},
];


// * CATEGORIES (MAIN) SCREEN //

//Creates button element for each item in affirmations object where "strings" is not empty
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
catBtnContainer.innerHTML = catButtons;


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
	currentList = affirmations.filter(item => item.category == cat)[0];
	var affCat = document.querySelector('#affCat');
	var affHeading = `${cat}`;
	affCat.innerHTML = affHeading;
}

function selectCat(cat, color) {
	animateAff();
	updateCurrentCat(cat, color);
	generateNew();
}