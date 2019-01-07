let dataList = [];
let visualGraphDetails = [];
let color = 'rgb(115, 149, 212)';
let height = 20;
const generateBarGraph = function() {
	divs = dataList.map(generateBar);
	let element = document.getElementById('main');
	element.innerHTML = divs.join('');
};

const generateBar = function(value, index) {
	return (
		"<div onclick = 'performActionOn(this.id)'id = " +
		index +
		" style='width: 20px; margin-top:" +
		(400 - value.y_coordinate * 10) +
		'px; margin-left:20px;background:' +
		generateRandomColor() +
		';height : ' +
		value.y_coordinate * 10 +
		"px; border : 1px solid black; float : left;'><div style='width:20px;background-color:white'></div></div>"
	);
};

const createBar = function(x_coordinate, y_coordinate) {
	return { x_coordinate, y_coordinate };
};
const addData = function() {
	let x_coordinate = document.getElementById('x_axis_coordinate').value;
	let y_coordinate = document.getElementById('y_axis_coordinate').value;
	let bar = createBar(x_coordinate, y_coordinate);
	dataList.push(bar);
	generateBarGraph();
};

const changeColor = function() {
	let redIntensity = document.getElementById('redIntensity').value;
	let greenIntensity = document.getElementById('greenIntensity').value;
	let blueIntensity = document.getElementById('blueIntensity').value;
	color =
		'rgb(' + redIntensity + ',' + greenIntensity + ',' + blueIntensity + ')';
	generateBarGraph();
};

const getRandomColorValue = function() {
	return Math.floor(Math.random() * 256);
};
const generateRandomColor = function() {
	return (
		'rgb(' +
		getRandomColorValue() +
		',' +
		getRandomColorValue() +
		',' +
		getRandomColorValue() +
		')'
	);
};
