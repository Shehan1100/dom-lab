console.log("DOM lab ready");



//__A2______________________________________

const title = document.getElementById("title");
const firstItem = document.querySelector("#menu-list li");
const links = document.querySelectorAll(".nav-link");
const tagline = document.querySelector(".tagline");
const menuList = document.getElementById("menu-list");
const menuItems = document.querySelectorAll("#menu-list li");
const message = document.getElementById("message");


console.log(title);
console.log(links.length);

links.forEach((link) => console.log(link.textContent));

console.log(firstItem);
console.log(tagline);

console.log(menuList);
console.log(menuItems);
console.log(message);





//__A3______________________________________

title.textContent = "Lagoon Café · Open now";
tagline.textContent = "Fresh food by the lagoon since 2010.";

menuItems.forEach((item, index) => {
    item.textContent = `${index + 1}. ${item.textContent}`;
});

message.innerHTML = "<strong>Welcome!</strong> Today's special is crab curry.";

const nameBox = document.getElementById("name-input");
console.log(nameBox.value);




//__A4______________________________________

const specialItem = document.querySelector(".special");
specialItem.classList.add("highlight");

const firstLink = document.querySelector(".nav-link");
firstLink.classList.add("active");

nameBox.setAttribute("placeholder", "Type your first name");

const hoursHeading = document.getElementById("hours");
hoursHeading.style.color = "crimson";

menuItems.forEach((item) => {
    console.log(
        item.textContent,
        item.classList.contains("special")
    );
});






//__A5______________________________________

const newItem = document.createElement("li");
newItem.textContent = "Egg hoppers";
newItem.classList.add("item");

menuList.append(newItem);


// Task 2 

const drinks = ["Faluda", "King coconut", "Plain tea"];

const drinksHeading = document.createElement("h2");
drinksHeading.textContent = "Drinks";

const drinksList = document.createElement("ul");

drinks.forEach((drink) => {
    const drinkItem = document.createElement("li");
    drinkItem.textContent = drink;
    drinksList.append(drinkItem);
});


hoursHeading.before(drinksHeading, drinksList);


// Task 3

const allMenuItems = menuList.querySelectorAll("li");

allMenuItems.forEach((item) => {
    if (item.textContent.includes("Kottu")) {
        item.remove();
    }
});



const hours = [
    { day: "Monday to Friday", time: "8 am to 9 pm" },
    { day: "Saturday", time: "8 am to 10 pm" },
    { day: "Sunday", time: "Closed" }
];



const hoursTable = document.createElement("table");

hours.forEach((hour) => {
    const row = document.createElement("tr");

    const dayCell = document.createElement("td");
    dayCell.textContent = hour.day;

    const timeCell = document.createElement("td");
    timeCell.textContent = hour.time;

    row.append(dayCell, timeCell);
    hoursTable.append(row);
});

hoursHeading.nextElementSibling.after(hoursTable);