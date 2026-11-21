console.log("DOM lab ready");



// A2 

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