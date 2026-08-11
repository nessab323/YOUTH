// HERO TITLE LETTER ANIMATION
const title = document.getElementById("youth");

if (title) {
  const text = title.textContent;
  title.textContent = "";

  text.split("").forEach((letter, index) => {
    const span = document.createElement("span");
    span.textContent = letter;
    span.style.opacity = 0;
    span.style.transition = "opacity 0.3s ease";
    title.appendChild(span);

    setTimeout(() => {
      span.style.opacity = 1;
    }, index * 120);
  });
}


// MOBILE MENU
function toggleMenu() {
  const menuLinks = document.querySelector(".menu-links");
  if(menuLinks){
    menuLinks.classList.toggle("open");
  }
}


// LEADER CARD SCROLL ANIMATION
const cards = document.querySelectorAll(".leader-card");

if (cards.length > 0) {

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  cards.forEach(card => observer.observe(card));
}


// RANDOM VERSE
const verseElement = document.getElementById("verse");

if (verseElement) {

  const verses = [
  "Don't let anyone look down on you because you are young, but set an example for the believers. — 1 Timothy 4:12",
  "Let your light shine before others. — Matthew 5:16",
  "I can do all things through Him who strengthens me. — Philippians 4:13",
  "Trust in the Lord with all your heart. — Proverbs 3:5"
  ];

  function showRandomVerse() {
    const randomIndex = Math.floor(Math.random() * verses.length);
    verseElement.textContent = verses[randomIndex];
  }

  showRandomVerse();
}
/* =========================
GALLERY CAROUSEL
========================= */

const galleryCarousels = document.querySelectorAll(".gallery-event");

const galleryPositions = [];

galleryCarousels.forEach((event, eventIndex) => {


const slides = event.querySelectorAll(".gallery-slide");

galleryPositions[eventIndex] = 0;

slides[0].classList.add("active");


/* CREATE DOTS */

const dotsContainer = event.querySelector(".gallery-dots");

slides.forEach((slide, slideIndex) => {

    const dot = document.createElement("span");

    dot.classList.add("gallery-dot");

    if(slideIndex === 0){
        dot.classList.add("active");
    }

    dot.addEventListener("click", () => {

        galleryPositions[eventIndex] = slideIndex;

        showGallerySlide(eventIndex);

    });

    dotsContainer.appendChild(dot);

});


});

function moveSlide(direction, eventIndex){


const event = galleryCarousels[eventIndex];

const slides = event.querySelectorAll(".gallery-slide");

galleryPositions[eventIndex] += direction;


/* LOOP BACK TO FIRST */

if(galleryPositions[eventIndex] >= slides.length){

    galleryPositions[eventIndex] = 0;

}


/* LOOP TO LAST */

if(galleryPositions[eventIndex] < 0){

    galleryPositions[eventIndex] = slides.length - 1;

}


showGallerySlide(eventIndex);


}

function showGallerySlide(eventIndex){

const event = galleryCarousels[eventIndex];

const slides = event.querySelectorAll(".gallery-slide");

const dots = event.querySelectorAll(".gallery-dot");

const current = galleryPositions[eventIndex];


slides.forEach(slide => {

    slide.classList.remove("active");

});


dots.forEach(dot => {

    dot.classList.remove("active");

});


slides[current].classList.add("active");

dots[current].classList.add("active");


}
