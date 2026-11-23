console.log("Part B ready");


// Get HTML Elements

const title = document.getElementById("title");
const message = document.getElementById("message");
const menuList = document.getElementById("menu-list");
const menuItems = document.querySelectorAll("#menu-list li");

const greetBtn = document.getElementById("greet-btn");
const themeBtn = document.getElementById("theme-btn");

const nameBox = document.getElementById("name-input");
const preview = document.getElementById("preview");
const counter = document.getElementById("counter");

const navLinks = document.querySelectorAll(".nav-link");






// B1 - Click Events
// Task 1 - Say Hello Button

greetBtn.addEventListener("click", () => {

    const currentTime = new Date().toLocaleTimeString();

    message.textContent = `Hello! The time is ${currentTime}`;

});


// Task 2 - Dark Mode Button

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeBtn.textContent = "Light mode";

    } else {

        themeBtn.textContent = "Dark mode";

    }

});


// Task 3 - Title Click Counter

let titleClicks = 0;

title.addEventListener("click", () => {

    titleClicks++;

    message.textContent = `Title clicked ${titleClicks} times`;

});





// B2 - Input and Mouse Events
// Task 1 - Name Input Preview

nameBox.addEventListener("input", () => {

    const name = nameBox.value.trim();

    if (name === "") {

        preview.textContent = "";

    } else {

        preview.textContent = `Hello, ${name}!`;

    }

    counter.textContent = `${nameBox.value.length} / 20`;


    // Task 2 - Character Limit

    counter.classList.toggle(
        "error",
        nameBox.value.length > 20
    );

});


// Task 3 - Mouse Events

menuItems.forEach((item) => {

    item.addEventListener("mouseover", () => {

        item.classList.add("highlight");

    });

    item.addEventListener("mouseout", () => {

        item.classList.remove("highlight");

    });

});




// B3 - Event Object
// Task 1 - Keyboard Events

nameBox.addEventListener("keydown", (e) => {

    console.log(e.key);

    if (e.key === "Enter") {

        message.textContent = `Saved name: ${nameBox.value}`;

    }

});




// Task 2 - Navigation Link Events

navLinks.forEach((link) => {

    link.addEventListener("click", (e) => {

        e.preventDefault();

        navLinks.forEach((navLink) => {

            navLink.classList.remove("active");

        });

        e.target.classList.add("active");

        message.textContent = `You chose ${e.target.textContent}`;

    });

});





// B4 - Event Delegation
// Task 1 - Click Menu Item

menuList.addEventListener("click", (e) => {

    const item = e.target.closest("li");

    if (!item) return;

    item.classList.toggle("done");

    console.log(e.target, e.currentTarget);

});




// B4 Challenge - Double Click to Delete

menuList.addEventListener("dblclick", (e) => {

    const item = e.target.closest("li");

    if (!item) return;

    item.remove();

});
