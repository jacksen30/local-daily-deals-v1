 // JavaScript to toggle card rotation on click
 const cards = document.querySelectorAll(".card");
    
 cards.forEach(card => {
   card.addEventListener("click", function() {
     card.classList.toggle("is-flipped");
   });
 });