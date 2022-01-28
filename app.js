const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
      menu.classList.remove("showMenu");
      closeIcon.style.display = "none";
      menuIcon.style.display = "block";
    } else {
      menu.classList.add("showMenu");
      closeIcon.style.display = "block";
      menuIcon.style.display = "none";
    }
  }

  // Clicking on the hamburger button will call toggleMenu()
hamburger.addEventListener("click", toggleMenu);

//iterate through each link and add a call to toggleMenu().
menuItems.forEach( 
function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
    menuItem.addEventListener("keypress", toggleMenu); 
    }
)

//-------------- Carousel code ----------//

let appreciation = document.getElementById("testim"),
recomDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
recomInfo = Array.prototype.slice.call(document.getElementById("testim-content").children),
leftArrowRecom = document.getElementById("left-arrow"),
rightArrowRecom = document.getElementById("right-arrow"),
recomSpeed = 4500,
presentSlide = 0,
presentActive = 0,
recomTimer
;

window.onload = function () {
  // The code for the testimonials
  function startSlide(slide) {
    for(let i = 0; i < recomDots.length; i++){
      recomInfo[i].classList.remove("active");
      recomInfo[i].classList.remove("inactive");
      recomDots[i].classList.remove("active");
    }
    if(slide < 0){
      slide = presentSlide = recomInfo.length - 1;
    }
    if(slide > recomInfo.length - 1){
       slide = presentSlide = 0;
    }
    if(presentActive != presentSlide){
      recomInfo[presentActive].classList.add("inactive");
    }
    recomInfo[slide].classList.add("active");
    recomDots[slide].classList.add("active");

    presentActive = presentSlide;

    clearTimeout(recomTimer);
    recomTimer = setTimeout(function () {
      startSlide(presentSlide += 1);
    }, recomSpeed)
  }
  
   leftArrowRecom.addEventListener("click", function () {
      startSlide(presentSlide -= 1);
   })
   rightArrowRecom.addEventListener("click", function () {
    startSlide(presentSlide += 1);
    })
    
    for(let j = 0; j < recomDots.length; j++){
        recomDots[j].addEventListener("click", function() {
          startSlide(presentSlide = recomDots.indexOf(this));
        })
    }
    startSlide(presentSlide);
}






  