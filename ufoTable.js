var ufoData = dataSet;

var table = document.getElementById('ufo-table')
var tbody = document.getElementById('ufo-table-body')

function addItem(row, text) {

	var newCell = row.insertCell();
	var newText = document.createTextNode(text);
	newCell.appendChild(newText);

}

function renderTable() {
	tbody.innnerhtml = "";
	for (var i = 0; i < ufoData.length; i++) {
		var entry = ufoData[i];
		var tr = tbody.insertRow();
		var sightingDate = addItem(tr, entry.datetime);
		var sightingCity = addItem(tr, entry.city);
		var sightingState = addItem(tr, entry.state);
		var sightingCountry = addItem(tr, entry.country);
		var sightingShape = addItem(tr, entry.shape);
		var sightingDuration = addItem(tr, entry.durationMinutes);
		var sightingComment = addItem(tr, entry.comments);
		};
	};

renderTable();

var useFilter = document.querySelector("#filter-input"); 

function handleFilterSubmit() {

	event.preventDefault();
	console.log(filterInput);
}

		// var sightingDate = ufoData[i].datetime;
		// var sightingCity = ufoData[i].city;
		// var sightingState = ufoData[i].state;
		// var sightingCountry = ufoData[i].country;
		// var sightingShape = ufoData[i].shape;
		// var sightingDuration = ufoData[i].durationMinutes;
		// var sightingComment = ufoData[i].comments;

		// var sightingDate = addItem(tr, entry.datetime)
		// var sightingCity = addItem(tr, entry.city);
		// var sightingState = addItem(tr, entry.state);
		// var sightingCountry = addItem(tr, entry.country);
		// var sightingShape = addItem(tr, entry.shape);
		// var sightingDuration = addItem(tr, entry.durationMinutes);
		// var sightingComment = addItem(tr, entry.comments);
