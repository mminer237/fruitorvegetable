"use strict"

const searchBox = document.getElementById("search-box");
searchBox.addEventListener("input", e => {
	if (getOption())
		searchBox.setCustomValidity("");
});
document.querySelector("form").addEventListener("submit", e => {
	e.preventDefault();
	const option = getOption();
	if (option)
		window.location.href = option.dataset.url;
	else
		searchBox.setCustomValidity("Invalid item.");
});

function getOption() {
	return document.querySelector(`option[value="${searchBox.value}" i]`);
}