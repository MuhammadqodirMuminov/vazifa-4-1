window.addEventListener("DOMContentLoaded", () => {
	const elInput = document.querySelector("#inputText"),
		elFilter = document.querySelector("#inputFilter"),
		elBtn = document.querySelector(".btn"),
		elForm = document.querySelector(".form");

	elForm.addEventListener("submit", (evt) => {
		evt.preventDefault();

		const inputValue = elInput.value;
		console.log(inputValue);
	});

	function renderToDo() {
		
	}
	renderToDo();
});
