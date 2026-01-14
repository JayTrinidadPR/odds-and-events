const app= document.querySelector("#app");

const state = {
    bank: [],
    odds: [],
    evens: [],
};

function NumberBucket(title, number) {
    const section = document.createElement("section")
    section.className = "bucket";
    const h2 = document.createElement("h2");
    h2.textContent = title;
    const list = document.createElement("div");
    list.className = "bucket-list";

    list.textContent = number.length ? number.join(", ") : "(empty)";

    section.append(h2, list);
    return section;
}

function Header() {
    const header = document.createElement("header");

    const h1 = document.createElement("h1")
    h1.textContent = "Odds and Evens";

    const p = document.createElement("p");
    p.textContent =
    "Add numbers to the bank, then sort them into odds or evens";

    header.append(h1, p);

    return header;
}

function Controls() {
    const wrapper = document.createElement("section");
    wrapper.className = "controls";

    const form = document.createElement("form");

    const input = document.createElement("input");
    input.type = "number";
    input.name = "number";
    input.placeholder = "Enter a number";
    input.required = true;

    const addBtn = document.createElement("button");
    addBtn.type = "submit";
    addBtn.textContent = "Add number";

    form.append(input, addBtn);
//--------
// Sort Buttons
//--------

const sort1Btn = document.createElement("button");
sort1Btn.type = "button";
sort1Btn.id = "sort-1";
sort1Btn.textContent = "Sort 1";

const sortAllBtn = document.createElement("button");
sortAllBtn.type = "button";
sortAllBtn.id = "sort-all";
sortAllBtn.textContent = "Sort All";

const btnRow = document.createElement("div");
btnRow.className = "button-row";
btnRow.append(sort1Btn, sortAllBtn);

wrapper.append(form, btnRow);
return wrapper;
}

function App() {

    const container = document.createElement("div");
    container.className = "container";

    container.append(
        Header(),
        Controls(),
        NumberBucket("Number Bank", state.bank),
        NumberBucket("Odds", state.odds),
        NumberBucket("Evens", state.evens)
    );
    return container;
}

function render() {
    app.innerHTML = "";
    app.appendChild(App());
}

render();