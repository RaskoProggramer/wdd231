const directories = document.querySelector("#directory");
const gridButton = document.querySelector("#grid-view");
const listButton = document.querySelector("#list-view");

// Change directory view
function changeView(view) {

    if (view === "grid") {
        directories.classList.remove("list-view");

        gridButton.classList.add("active");
        listButton.classList.remove("active");` `

        gridButton.setAttribute("aria-pressed", "true");
        listButton.setAttribute("aria-pressed", "false");

    } else {
        directories.classList.add("list-view");

        listButton.classList.add("active");
        gridButton.classList.remove("active");

        listButton.setAttribute("aria-pressed", "true");
        gridButton.setAttribute("aria-pressed", "false");
    }
}

// Grid button event
gridButton.addEventListener("click", () => {
    changeView("grid");
});

// List button event
listButton.addEventListener("click", () => {
    changeView("list");
});
