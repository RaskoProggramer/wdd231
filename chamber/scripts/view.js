const directory = document.querySelector("#directory");

const gridButton = document.querySelector("#grid-view");
const listButton = document.querySelector("#list-view");

function changeView(view) {

    if (view === "grid") {
        directory.classList.remove("list-view");

        gridButton.classList.add("active");
        listButton.classList.remove("active");

        gridButton.setAttribute("aria-pressed", "true");
        listButton.setAttribute("aria-pressed", "false");

    } else {
        directory.classList.add("list-view");

        listButton.classList.add("active");
        gridButton.classList.remove("active");

        listButton.setAttribute("aria-pressed", "true");
        gridButton.setAttribute("aria-pressed", "false");
    }
}

gridButton.addEventListener("click", () => {
    changeView("grid");
});

listButton.addEventListener("click", () => {
    changeView("list");
});