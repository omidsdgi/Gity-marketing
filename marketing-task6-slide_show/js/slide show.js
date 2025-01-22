// let $ = document;
// let sliderImgElem = $.querySelector("img");
// let prevBtn = $.querySelector(".prev");
// let nextBtn = $.querySelector(".next");
// let dots = $.querySelectorAll(".dots");
// let numsSlideElem = $.querySelector(".nums-slide");

// let imgSrcArray = [
//   "image/lights_wide.jpg",
//   "image/mountains_wide.jpg",
//   "image/nature_wide.jpg",
//   "image/snow_wide.jpg",
// ];

// let imgIndex = 0;

// function prevImage() {
//   imgIndex--;
//   if (imgIndex < 0) {
//     imgIndex = imgSrcArray.length - 1;
//   }

//   sliderImgElem.setAttribute("src", imgSrcArray[imgIndex]);
//   console.log(imgIndex, imgSrcArray[imgIndex]);
// }

// function nextImage() {
//   imgIndex++;
//   if (imgIndex > imgSrcArray.length - 1) {
//     imgIndex = 0;
//   }
//   sliderImgElem.setAttribute("src", imgSrcArray[imgIndex]);
//   console.log(imgIndex, imgSrcArray[imgIndex]);
// }

// setInterval(nextImage, 3000);

// prevBtn.addEventListener("click", prevImage);
// nextBtn.addEventListener("click", nextImage);

// /////////////////////////////////////////////

let $ = document;
let sliderImgElem = $.querySelector('img');
let sliderTitleElem = $.querySelector('.slider-title');
let prevBtn = $.querySelector('.prev');
let nextBtn = $.querySelector('.next');
let dots = $.querySelectorAll('.dots');
let numsSlideElem = $.querySelector('.nums-slide');

let imgSrcArray = [
  'image/lights_wide.jpg',
  'image/mountains_wide.jpg',
  'image/nature_wide.jpg',
  'image/snow_wide.jpg'
];
let imgTitleArray = [
  'Beautiful City Lights',
  'Majestic Mountains',
  'Serene Nature Scene',
  'Snowy Landscape'
];

let imgIndex = 0;

function updateSlider() {

  sliderImgElem.setAttribute('src', imgSrcArray[imgIndex]);

  sliderTitleElem.textContent = imgTitleArray[imgIndex];

  dots.forEach(dot => dot.classList.remove('dot-color'));
  dots[imgIndex].classList.add('dot-color');

 numsSlideElem.textContent = imgIndex + 1;

}

function prevImage() {
  imgIndex--;
  if (imgIndex < 0) {
    imgIndex = imgSrcArray.length - 1;
  }
  updateSlider();
}

function nextImage() {
  imgIndex++;
  if (imgIndex > imgSrcArray.length - 1) {
    imgIndex = 0;
  }
  updateSlider();
}

setInterval(nextImage, 3000);

prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    imgIndex = index;
    updateSlider();
  });
});

updateSlider();
