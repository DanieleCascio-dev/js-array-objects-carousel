//Dichiarazioni variabili
const items = document.querySelector(".items");
let imgMess = "";

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

for (let i = 0; i < images.length; i++) {
  const curImg = images[i];
  imgMess += ` <div class="item">
  <img src="${curImg.image}" alt="" />
  <div class="img-info">
    <h2>${curImg.title}</h2>
    <p>${curImg.text}</p>
  </div>
</div>`;
  // console.log(imgMess);
}

//Put the img into html
items.innerHTML += imgMess;

//Array with all item in html
const allImg = document.querySelectorAll(".item");
console.log(allImg);

//set a variable for last postion of allImg
const lastPos = allImg.length - 1;

//set a variable for index
let indexImg = 0;

//Set the first img to display block
allImg[0].classList.add("active");

//Event listener and for iterations to "next" div
document.querySelector(".next").addEventListener("click", function () {
  allImg[indexImg].classList.remove("active");
  if (indexImg >= lastPos) {
    indexImg = 0;
  } else {
    indexImg++;
  }
  allImg[indexImg].classList.add("active");
});

//Event listener and for iterations to "prev" div
document.querySelector(".prev").addEventListener("click", function () {
  allImg[indexImg].classList.remove("active");
  if (indexImg <= 0) {
    indexImg = lastPos;
  } else {
    indexImg--;
  }
  allImg[indexImg].classList.add("active");
});
