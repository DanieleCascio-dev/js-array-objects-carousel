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
// console.log(arrayImg);

createSliderWithThumbs(images);
/* 
for (let i = 0; i < images.length; i++) {
  const curImg = images[i];
  imgMess += ` <div class="item">
  <img src="${curImg.image}" alt="" />
  <div class="img-info">
    <h2>${curImg.title}</h2>
    <p>${curImg.text}</p>
  </div>
</div>`;

  const thumbnailDiv = document.createElement("div");
  thumbnailElem.append(thumbnailDiv);
  thumbnailDiv.classList.add("small-img");
  thumbnailDiv.style.backgroundImage = `url(${curImg.image})`;
} */

//Put the img into html
items.innerHTML += imgMess;

//Array with all item in html
const allImg = document.querySelectorAll(".item");
const allThumbnail = document.querySelectorAll(".small-img");
console.log(allThumbnail);
/* console.log(allImg); */

//set a variable for last postion of allImg
const lastPos = allImg.length - 1;

//set a variable for index
let indexImg = 0;

//Set the first img to display block
allImg[0].classList.add("active");
allThumbnail[indexImg].classList.add("selected");

//add interval
const interval = setInterval(function () {
  allImg[indexImg].classList.remove("active");
  if (indexImg >= lastPos) {
    indexImg = 0;
  } else {
    indexImg++;
  }
  allImg[indexImg].classList.add("active");
}, 3000);

//Event listener and for iterations to "next" div
document.querySelector(".next").addEventListener("click", function () {
  clearInterval(interval);
  allImg[indexImg].classList.remove("active");
  allThumbnail[indexImg].classList.remove("selected");
  if (indexImg >= lastPos) {
    indexImg = 0;
  } else {
    indexImg++;
  }
  allImg[indexImg].classList.add("active");
  allThumbnail[indexImg].classList.add("selected");
});

//Event listener and for iterations to "prev" div
document.querySelector(".prev").addEventListener("click", function () {
  allImg[indexImg].classList.remove("active");
  allThumbnail[indexImg].classList.remove("selected");
  if (indexImg <= 0) {
    indexImg = lastPos;
  } else {
    indexImg--;
  }
  allImg[indexImg].classList.add("active");
  allThumbnail[indexImg].classList.add("selected");
});

allThumbnail.forEach((currThumbnail, index) => {
  currThumbnail.addEventListener("click", function () {
    allImg[indexImg].classList.remove("active");
    allImg[index].classList.add("active");
    indexImg = index;
  });
});

/* FUNCTION */

function createSliderWithThumbs(slidesArray) {
  for (let i = 0; i < slidesArray.length; i++) {
    const curImg = slidesArray[i];

    imgMess += createSlides(curImg);

    createThumbnail(curImg);
  }
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

function createThumbnail(singleSlide) {
  const thumbnailDiv = document.createElement("div");
  thumbnailElem.append(thumbnailDiv);
  thumbnailDiv.classList.add("small-img");
  thumbnailDiv.style.backgroundImage = `url(${singleSlide.image})`;
}

function nextImg(allImg, indexImg, lastPos) {
  allImg[indexImg].classList.remove("active");
  if (indexImg >= lastPos) {
    indexImg = 0;
  } else {
    indexImg++;
  }
  allImg[indexImg].classList.add("active");
}
