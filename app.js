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
