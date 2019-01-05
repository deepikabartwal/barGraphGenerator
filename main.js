let dataList = [];
let visualGraphDetails = [];
let color = 'rgb(115, 149, 212)';
let height = 20;
const generateBarGraph = function() {
	divs = dataList.map(generateBar);
	document.getElementById('main').innerHTML = divs.join('');
	document.getElementById('main').setAttribute('style', 'height : 200px');
};

const generateBar = function(value, index) {
	return (
		"<div onclick = 'performActionOn(this.id)'id = " +
		index +
		" style='width: 20px; margin-top:" +
		(200 - value.y_coordinate * 10) +
		'px; background:' +
		color +
		';height : ' +
		value.y_coordinate * 10 +
		"px; border : 1px solid black; float : left;'></div><div style='width : 20px;background-color:white;padding:2px; float:left'></div>"
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
