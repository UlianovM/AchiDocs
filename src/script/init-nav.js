const title   = document.querySelector("header h1");
const content = document.querySelector("main > .content");
const nav     = document.querySelector("nav");

const heads = content.querySelectorAll("h2, h3[id], .anchor[id]");



function createElement(tag, text, anchor) {
    const link = document.createElement("a");
    link.href = anchor;
    link.classList.add(tag);

    const elem = document.createElement(tag);
    elem.textContent = text;

    link.appendChild(elem);
    return link;
}



nav.appendChild(createElement("h1", title.textContent, ""));

var unique = 0;

heads.forEach(elem => {
    if (!elem.id) {
        elem.id = String(unique);
        unique++;
    }

    var tag = elem.tagName;

    if (tag != "H2" && tag != "H3") {
        tag = "H4";
    }

    const head = createElement(tag, elem.textContent, "#" + elem.id);
    nav.appendChild(head);
});



const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        elem = document.querySelector("nav a[href='#" + entry.target.id + "']");

        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            elem.classList.add("visible");
        }
        else {
            entry.target.classList.remove("visible");
            elem.classList.remove("visible");
        }}
    )},
    {
        threshold: 0
    }
);

heads.forEach(head => observer.observe(head));
