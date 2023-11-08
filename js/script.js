//Dichiarazioni variabili
const items = document.querySelector(".items");
const thumbnailElem = document.querySelector(".thumbnail");
console.log(thumbnailElem);
let imgMess = "";
let thumbnailMess = "";

const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

//Create slides and thumbnail
createSliderWithThumbs(images);

//Put the img into html
items.innerHTML += imgMess;

//Array with all item in html
const allImg = document.querySelectorAll(".item");
const allThumbnail = document.querySelectorAll(".small-img");

//set a variable for last postion of allImg
const lastPos = allImg.length - 1;

//set a variable for index
let indexImg = 0;

//Set the first img to display block
allImg[0].classList.add("active");
allThumbnail[indexImg].classList.add("selected");

//add interval
let interval = setInterval(nextImg, 3000);

//Event listener to "next" div
document.querySelector(".next").addEventListener("click", nextImg);

//Event listener to "prev" div
document.querySelector(".prev").addEventListener("click", prevImg);

/* Quando clicco su un thumb cambia anche la img nello slides */
allThumbnail.forEach((currThumbnail, index) => {
  currThumbnail.addEventListener("click", function () {
    clearInterval(interval);
    removeSlidesAndThumb(indexImg);
    showSlidesAndThumb(index);
    indexImg = index;
    interval = setInterval(nextImg, 3000);
  });
});

/* *************************** */
/* FUNCTION */

function createSliderWithThumbs(slidesArray) {
  slidesArray.forEach((curImg) => {
    imgMess += createSlides(curImg);

    createThumbnail(curImg);
  });
}

/* Crea un elemento che rappresenta uno slide */
function createSlides(singleSlide) {
  return ` <div class="item">
  <img src="${singleSlide.image}" alt="" />
  <div class="img-info">
    <h2>${singleSlide.title}</h2>
    <p>${singleSlide.text}</p>
  </div>
</div>`;
}

/* Crea un elemento che rappresenta un thumbnail */
function createThumbnail(singleSlide) {
  const thumbnailDiv = document.createElement("div");
  thumbnailElem.append(thumbnailDiv);
  thumbnailDiv.classList.add("small-img");
  thumbnailDiv.style.backgroundImage = `url(${singleSlide.image})`;
}

function removeSlidesAndThumb(indexImg) {
  allImg[indexImg].classList.remove("active");
  allThumbnail[indexImg].classList.remove("selected");
}

function showSlidesAndThumb(indexImg) {
  allImg[indexImg].classList.add("active");
  allThumbnail[indexImg].classList.add("selected");
}

function nextImg() {
  clearInterval(interval);
  removeSlidesAndThumb(indexImg);
  if (indexImg >= lastPos) {
    indexImg = 0;
  } else {
    indexImg++;
  }
  showSlidesAndThumb(indexImg);
  interval = setInterval(nextImg, 3000);
}

function prevImg() {
  clearInterval(interval);
  removeSlidesAndThumb(indexImg);
  if (indexImg <= 0) {
    indexImg = lastPos;
  } else {
    indexImg--;
  }
  showSlidesAndThumb(indexImg);
  interval = setInterval(nextImg, 3000);
}
