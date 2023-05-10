const populationData = {
	cities: [
		"Gulu",
		"Kampala",
		"Soroti",
		"Lira",
		"FortPortal",
		"Masaka",
		"Mbarara",
	],
	addCity(newCity) {
		this.cities.push(newCity);
	},
	removeCity(cityIndex) {
		this.cities.splice(cityIndex, 1);
	},
	updateCity(cityIndex, newCity) {
		this.cities[cityIndex] = newCity;
	},
};
d3.select("ul")
	.selectAll("li")
	.data(populationData.cities, (data) => data)
	.enter()
	.append("li")
	.text((data) => data);

setTimeout(() => {
	populationData.addCity("Arua");
	d3.select("ul")
		.selectAll("li")
		.data(populationData.cities, (data) => data)
		.enter()
		.append("li")
		.classed("added", true)
		.text((data) => data);
}, 2000);

setTimeout(() => {
	populationData.removeCity(0);
	d3.select("ul")
		.selectAll("li")
		.data(populationData.cities, (data) => data)
		.exit()
		.classed("redundant", true)
		.text((data) => data);
}, 4000);

setTimeout(() => {
	populationData.updateCity(2, "Jinja");
	d3.select("ul")
		.selectAll("li")
		.data(populationData.cities, (data) => data)
		.exit()
		.classed("updated", true)
		.text("Jinja");
}, 6000);
