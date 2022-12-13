window.addEventListener("DOMContentLoaded", () => {
	const elInput = document.querySelector("#inputText"),
		elFilter = document.querySelector("#inputFilter"),
		elCheckBox = document.querySelectorAll("#checkbox"),
		elCamplated = document.querySelector(".camplated-list"),
		elForm = document.querySelector(".form"),
		elParentList = document.querySelector(".active-list");

	// render ToDo items
	console.log(elCamplated);

	function renderToDo(toDo) {
		elParentList.textContent = "";
		toDo.forEach((item) => {
			const li = document.createElement("li");

			li.setAttribute(
				"style",
				`background: rgb(237, 237, 221);
									background: linear-gradient(
										251deg,
										rgba(237, 237, 221, 1) 0%,
										rgba(139, 244, 86, 1) 100%
									);`
			);
			li.className =
				"d-flex justify-content-between align-items-center border border-1 border-dark p-1 px-4 rounded-2 shadow-lg mt-2 list-item";
			li.innerHTML = `        <div
									class="d-flex align-items-center gap-3 fs-4 fw-bold text-secondary">
									<input class="checkbox"
                                        data-id = ${item.id}
										style="
											width: 23px !important;
											height: 23px !important;
										"
										type="checkbox"
										id="checkbox"
                                         />
									<p class="mb-0">${item.title}</p>
								</div>
								<div>
									<button 
										class="edit btn border-1 border-secondary shadow-sm">
										✏️
									</button>
									<button data-id ="${item.id}"
										class="del btn border-1 border-secondary shadow-sm ">
										❌
									</button>
								</div>     `;
			if (elCheckBox.checked) {
                elCamplated.appendChild(li);
                console.log(elCamplated.textContent);
			} else {
				elParentList.appendChild(li);
				elInput.value = "";
			}
		});
	}
	renderToDo(toDoList);

	// add new toDo

	elForm.addEventListener("submit", function (evt) {
		evt.preventDefault();
		elParentList.textContent = "";

		const inputText = elInput.value;
		const id = toDoList.length;
		const post = {
			id: Number(id) + 1,
			title: inputText,
		};

		if (inputText === "") {
			alert("Please enter your todo title");
			renderToDo(toDoList);
		} else {
			toDoList.push(post);
			renderToDo(toDoList);
		}
	});

	// deleting the existing todo

	elParentList.addEventListener("click", function (evt) {
		const elem = evt.target;

		if (elem.matches(".del")) {
			const id = elem.dataset.id;

			const filteredArr = toDoList.filter((item) => {
				if (item.id !== Number(id)) {
					return item;
				}
			});

			toDoList = filteredArr;
			renderToDo(toDoList);
		}
	});

	// search for

	elFilter.addEventListener("input", function (evt) {
		evt.preventDefault();

		const search = elFilter.value;
		console.log(search);
		const searchRegex = new RegExp(search.trim(), "gi");

		const elementSearch = toDoList.filter((item) =>
			item.title.match(searchRegex)
		);

		if (elementSearch.length > 0) {
			renderToDo(elementSearch);
		} else {
			alert("Please enter");
		}
	});

	// camplated massages

	elParentList.addEventListener("click", (e) => {
		const elem = e.target;

		if ((elem.attributes.type = "checkbox") && elem.checked == true) {
			const chekkArr = [];
			toDoList.forEach((item) => {
				if (item.id === Number(elem.dataset.id)) {
					chekkArr.push(item);
				}
            });
			renderToDo(chekkArr);
			
		} else {
			console.log("hato ketti");
		}
	});
});
