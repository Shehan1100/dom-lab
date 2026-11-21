console.log("DOM lab ready");



//__A2______________________________________ 

const title = document.getElementById("title");
const firstItem = document.querySelector("#menu-list li");
const links = document.querySelectorAll(".nav-link");
const tagline = document.querySelector(".tagline");
const menuList = document.getElementById("menu-list");
const menuItems = document.querySelectorAll("#menu-list li");
const message = document.getElementById("message");

// Display selected elements

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




//__A4___________________________________________

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
