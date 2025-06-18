document.addEventListener("DOMContentLoaded", () => {
    const coords = { x: 0, y: 0 }; 
    const stars = []; 
    const numStars = 300; // Number of stars in the trail
    
    // Create star elements dynamically and add them to the body
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
      star.x = 0; 
      star.y = 0;
      star.inUse = false;
      stars.push(star);
      document.body.appendChild(star);
    }
  
    // Event listener to track mouse movement
    window.addEventListener("mousemove", (e) => {
      coords.x = e.pageX; 
      coords.y = e.pageY; 
      createStarTrail(); 
    });
  
    function createStarTrail() {
      let x = coords.x; 
      let y = coords.y; 
  
      // Find the first available (not in-use) star
      const availableStar = stars.find((star) => !star.inUse);
      if (availableStar) {
        availableStar.inUse = true; 
        availableStar.style.left = `${x - 5}px`; 
        availableStar.style.top = `${y - 5}px`; 
        availableStar.style.opacity = 1; 
        availableStar.style.transform = `scale(1)`; 
  
        setTimeout(() => {
          availableStar.style.opacity = 0; 
          availableStar.style.transform = `scale(0.5)`; 
          setTimeout(() => {
            availableStar.inUse = false; 
          }, 100); // Time to reset star after fade-out
        }, 200); // Duration to keep the star visible
      }
    }
  });