 
 
 var isNight = false;

 function toggleNightMod() {
    var element = document.body;

    var iconColorMod = document.getElementById("nightIcon");
    iconColorMod.classList.toggle("fa-moon");
    iconColorMod.classList.toggle("fa-sun");

    if (iconColorMod.classList.contains("fa-sun")) {
        document.getElementById("nightButtonText").innerHTML = "Mode jour";
    } else {
        document.getElementById("nightButtonText").innerHTML = "Mode nuit";
    }
    element.classList.toggle("dark-background");

    isNight = !isNight;
    localStorage.setItem('isNight', isNight.toString());
    changeConfig();
}

    if (localStorage.getItem('isNight') === 'true') {
        document.body.classList.add('dark-background');
    }

 loadNightMode();
 
function goBack() {
    window.history.back();
}

var carousels = bulmaCarousel.attach('.carousel', options);

// Loop on each carousel initialized
for(var i = 0; i < carousels.length; i++) {
	// Add listener to  event
	carousels[i].on('before:show', state => {
		console.log(state);
	});
}

// Access to bulmaCarousel instance of an element
var element = document.querySelector('#my-element');
if (element && element.bulmaCarousel) {
	// bulmaCarousel instance is available as element.bulmaCarousel
	element.bulmaCarousel.on('before-show', function(state) {
		console.log(state);
	});
}   

document.addEventListener('DOMContentLoaded', function () {
    var carousels = bulmaCarousel.attach();
});
 
 function closeMenu(){
     var burger = document.querySelector('.burger');
     var menu = document.querySelector('#'+burger.dataset.target);
     burger.classList.remove('is-active');
     menu.classList.remove('is-active');
 }
 
 var burger = document.querySelector('.burger');
 var menu = document.querySelector('#'+burger.dataset.target);
 
 burger.addEventListener('click', function() {
     burger.classList.toggle('is-active');
     menu.classList.toggle('is-active');
 });
 
 
 function openModal($el) {
     document.body.style.overflow = "hidden";
     $el.classList.add('is-active');
 }
 
 function closeModal($el) {
     document.body.style.removeProperty("overflow");
     $el.classList.remove('is-active');
 }
 
 function closeAllModals() {
     (document.querySelectorAll('.modal') || []).forEach(($modal) => {
     closeModal($modal);
     });
 }
 
 // Add a click event on buttons to open a specific modal
 
 // Add a click event on various child elements to close the parent modal
 
 listeTrigger = new Array();
 
 getAllTrigger = setInterval(function(){
     console.log(listeTrigger.length);
     if(listeTrigger.length > 0){
         clearInterval(getAllTrigger);
     }
     (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
         const modal = $trigger.dataset.target;
         const $target = document.getElementById(modal);
         console.log($trigger);
         listeTrigger.push($trigger);
         $trigger.addEventListener('click', () => {
         openModal($target);
         });
     });
     
     (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
         const $target = $close.closest('.modal');
     
         $close.addEventListener('click', () => {
         closeModal($target);
         });
     });
  }, 100);
 
 // Add a keyboard event to close all modals
 document.addEventListener('keydown', (event) => {
     const e = event || window.event;
 
     if (e.keyCode === 27) { // Escape key
     closeAllModals();
     }
 });
 