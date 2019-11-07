"use strict"

const searchBox = document.getElementById("search-box");
document.querySelector("form").addEventListener("submit", e => {
	const option = document.querySelector(`option[value=${searchBox.value}]`);
	if (option)
		window.location.href = option.dataset.url;
});