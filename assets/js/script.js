var owl;
var previousButton, nextButton;
var cardsContainer, allCards, uniqueCards;

window.addEventListener('DOMContentLoaded', function(e) {
  previousButton = document.querySelector('.carousel .previous-button');
  nextButton = document.querySelector('.carousel .next-button');
  cardsContainer = document.querySelector('.carousel .cards');
  
  // Set up Owl Carousel
  owl = $('.carousel .cards').owlCarousel({
    items: 2,
    loop: true,
    nav: false,
    dots: false,

    onInitialized: handleInitialized, // called when Owl has finished initializing
    onTranslate: handleBeforeChange,  // called before transition happens
    onTranslated: handleAfterChange,  // called after transition completes
    
    // Responsive breakpoints added for demo purposes only (so embeds look better).
    responsive: {
      600: {
        items: 3
      }
    }
  });
  
  // Go to the previous slide when the Previous button is activated
  previousButton.addEventListener('click', function(e) {
    owl.trigger('prev.owl.carousel');
  });
  
  // Go to the next slide when the Next button is activated
  nextButton.addEventListener('click', function(e) {
    owl.trigger('next.owl.carousel');
  });
});


/**
  When Owl loads, make sure all non-visible slides are fully hidden
*/
function handleInitialized() {
  // Get a fresh list of DOM references to the slides, now that they've been wrapped
  allCards = document.querySelectorAll('.carousel .cards .owl-item');
  uniqueCards = document.querySelectorAll('.carousel .cards .owl-item:not(.cloned)');
  
  // Ensure all the non-visible slides and their content are impossible to reach by keyboard
  hideNonVisibleCards();
}


/**
  Before a transition happens, ensure all slides are visible
*/
function handleBeforeChange(e) {
  // Make each slide visible during the transition animation
  allCards.forEach(function(card) {
    card.removeAttribute('aria-hidden');
  });
}

/**
  After a transition is completed, fully hide all the newly non-visible slides
*/
function handleAfterChange(e) {
  // Ensure all the non-visible slides and their content are impossible to reach by keyboard
  hideNonVisibleCards();
  
  // Allow interactive elements on the new current slide to receive keyboard focus
  showVisibleCards();
}


/**
  Make visible slides fully perceivable for all users
*/
function showVisibleCards() {
  setTimeout(function (params) {
    visibleCards.item(0).style.transform = "scale(1.2)";
    visibleCards.item(2).style.transform = "scale(1.2)";
    visibleCards.item(0).style.zIndex = "1";
    visibleCards.item(2).style.zIndex = "1";
  },100)
  let visibleCards = document.querySelectorAll('.carousel .cards .owl-item.active');
  // console.log(visibleCards.item(1).style.transform = "scale(1.5)")
  visibleCards.item(1).style.transform = "scale(1.4)";
  visibleCards.item(1).style.zIndex = "9";

  

  visibleCards.forEach(function(card) {
    // Make the tile available to screen readers
    card.removeAttribute('aria-hidden');

    // Allow all operable child elements to be focusable
    card.querySelectorAll('a, button').forEach(function(element) {
      element.removeAttribute('tabindex');
    });
  });
}

/**
  Fully hide non-visible slides for all users when they exit the view.
*/
function hideNonVisibleCards() {
  var hiddenCards = document.querySelectorAll('.carousel .cards .owl-item:not(.active)');


  hiddenCards.forEach(function(card) {
    // Hide each slide using `visibility: hidden` to be extra-sure
    card.setAttribute('aria-hidden', true);

    // Prevent any interactive element on non-visible slides from receiving keyboard focus
    card.querySelectorAll('a, button').forEach(function(element) {
      element.setAttribute('tabindex', -1);
    });
  });
}