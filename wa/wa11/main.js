const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Declaring the array of image filenames */
const fileNames = [
    "images/pic1.jpg",
    "images/pic2.jpg",
    "images/pic3.jpg",
    "images/pic4.jpg",
    "images/pic5.jpg",
];

/* Declaring the alternative text for each image file */
const altText = [
    "Bedroom",
    "Couch",
    "Dining Area",
    "Living Room",
    "Kitchen",
];

/* Looping through images */

fileNames.forEach((img, index) => {
    const newImage = document.createElement("img");
    newImage.setAttribute("src", img);
    newImage.setAttribute("alt", altText[index]);
    newImage.setAttribute("class", "thumb-bar");
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click", (e) => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
        displayedImage.setAttribute("class", "displayed-img");
    });
});

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", darkenLighten);

function darkenLighten() {
    const button = btn.getAttribute("class");
    if (button === "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
    } else {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
    }
}
