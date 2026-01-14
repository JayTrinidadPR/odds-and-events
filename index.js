const app= document.querySelector("#app");

const state = {
    bank: [],
    odds: [],
    evens: [],
};

function NumberBucket(title, number) {
    const section = document.createElement("selection")
    section.className = "bucket";
    const h2 = document.createElement("h2");
    const list = document.createElement("div");
    list.className = "bucket-list";

    list.textContent = SVGAnimatedNumberList.length
    ? numbers.join(", ")
    : "(empty)";
    section.append(h2, list);
    return section;
}

function Header() {
    const header = document.createElement("header");
    const h1 = document.createElement("h1")
    history.textContent = "Odss and Evens";
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
    input.type = "number";
    input.name = "number";
    input.placeholder = "Enter a number";
    input.required = true;

    const addBtns = document.createElement("button");
    addBtn.type = "submit";
    addBtn.textContent = "Add number";

    form.append(input, addBtn);

}