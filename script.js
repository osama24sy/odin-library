var modal = document.querySelector(".modal");
var addBtn = document.querySelector("#add-btn");
var span = document.getElementsByClassName("close")[0];

addBtn.onclick = function() {
	modal.style.display = "block";
}

span.onclick = function() {
	modal.style.display = "none";
}

window.onclick = function(event) {
	if (event.target == modal) {
	modal.style.display = "none";
	}
}

/**
 * Data Stored in an array of objects
 * Add book to library function
 */
if (!localStorage.library) {
	let library = [];
	localStorage.setItem("library",JSON.stringify(library));	
}
var data = JSON.parse(localStorage.getItem("library"));

/* Functions */
function updateDisplay() {
	books.innerHTML = "";
	for (let i = 0; i < data.length; i++) {
		const element = data[i];
		books.innerHTML += `
		<div class="book" id="${i}">
            <p class="title">
                "${element.title}"
            </p>
            <p class="author">
                ${element.author}
            </p>
            <p class="page-number">
                ${element.pageNumber}
            </p>
            <p class="read">
                ${element.readCheck?"Read":"Not Read"}
            </p>
            <button class="remove-btn">Remove</button>
        </div>
		`
	}
}


/* UI */
const title = document.getElementById("title");
const author = document.getElementById("author");
const pageNumber = document.getElementById("page-number");
const readCheck = document.getElementById("read");
const submitBtn = document.getElementById("submit-book");
const books = document.querySelector(".books");
/* Event Listeners */
updateDisplay();

submitBtn.addEventListener("click", () => {
	let book = {
		"title" : title.value,
		"author" : author.value,
		"pageNumber" : pageNumber.value,
		"readCheck" : readCheck.checked
	}
	data.push(book);
	localStorage.setItem("library", JSON.stringify(data));
	updateDisplay();
});

const removeBtn = document.querySelectorAll(".remove-btn");

for (let i = 0; i < removeBtn.length; i++) {
	const btn = removeBtn[i];
	btn.addEventListener("click", () => {
		data.splice(btn.parentElement.id, 1);
		localStorage.setItem("library", JSON.stringify(data));
		updateDisplay();
	});
}