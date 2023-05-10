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
	.data(populationData.cities)
	.enter()
	.append("li")
	.text((data) => data);

setTimeout(() => {
	populationData.addCity("Arua");
	d3.select("ul")
		.selectAll("li")
		.data(populationData.cities)
		.enter()
		.append("li")
		.classed("added", true)
		.text((data) => data);
}, 2000);
