var ufoData = dataSet;

var table = document.getElementById('ufo-table')
var tbody = document.getElementById('ufo-table-body')

var useFilter = document.querySelector("#filter-submit"); 
useFilter.addEventListener('click', handleFilterSubmit);
var filterInput;
var dateInput;

var filteredArray = [];

function addItem(row, text) {

	var newCell = row.insertCell();
	var newText = document.createTextNode(text);
	newCell.appendChild(newText);

};
// Render table with all entries if no filters have been specified
if (!filterInput) {
	console.log("filterInput has no value");
	if (!dateInput) {
		console.log("dateInput has no value");
		renderTable(ufoData);
	};
}

function filterByDate(date) {
	for (var i = 0; i < ufoData.length; i++) {
		var currentDate = new Date(ufoData[i].datetime).toString().slice(0, 15);
		console.log(currentDate);
		if (currentDate == date) {
			console.log(ufoData[i]);
			currentEntry = ufoData[i];
			for (var j = 0; j < Object.keys(currentEntry).length; j++) {
				console.log(currentEntry);
				filteredArray.push( {
					datetime: currentEntry.datetime,
					city: currentEntry.city,
					state: currentEntry.state,
					country: currentEntry.country,
					shape: currentEntry.shape,
					durationMinutes: currentEntry.durationMinutes,
					comments: currentEntry.comments
				})
			};
		};
	};
	if (filteredArray.length > 0) {
		console.log(Object.entries(filteredArray));
		renderTable(filteredArray);
	};
}



function handleFilterSubmit(event) {
	dateInput = new Date(document.querySelector("#date-input").value);
	filterInput = document.querySelector("#filter-input").value.trim().toLowerCase();
	event.preventDefault();
	if (dateInput) {
		var simpleDate = new Date(dateInput).toString().slice(0, 15);
		console.log(`Filtering entries for ${simpleDate}`)
		filterByDate(simpleDate);
	};
	if (filterInput) {
		console.log(`Filtering based on input: "${filterInput}`);
	};

	renderTable();
};

function renderTable(dataset) {
	tbody.innnerhtml = "";
	if (!dataset) {
		dataset = ufoData;
	};
	for (var i = 0; i < dataset.length; i++) {
		var entry = dataset[i];
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