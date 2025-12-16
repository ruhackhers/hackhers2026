document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");
  
    const startCounting = (counter) => {
      const target = +counter.getAttribute("data-target");
      const prefix = counter.getAttribute("data-prefix") || ""; 
      const speed = 150; 
  
      let count = 0;
  
      const updateCount = () => {
        count += Math.ceil(target / speed);
        if (count >= target) {
          counter.textContent = `${prefix}${target}+`; 
        } else {
          counter.textContent = `${prefix}${count}`;
          requestAnimationFrame(updateCount);
        }
      };
  
      updateCount();
    };
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counter = entry.target;
            counter.style.opacity = 1; 
            startCounting(counter);
            observer.unobserve(counter); 
          }
        });
      },
      { threshold: 0.5 } 
    );
  
    counters.forEach((counter) => observer.observe(counter));
  });
  $(document).ready(function () {
    $('.faq li .question').click(function () {
      const currentItem = $(this).parent();
  
      // Close all other FAQ items
      $('.faq li').not(currentItem).removeClass('active');
  
      // Toggle the clicked one
      currentItem.toggleClass('active');
    });
  });

function openTab(event, tabName) {
  var i, tabcontent, tablinks;
  
  // Hide all tab content
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("active");
  }

  // Remove the "active" class from all tab links
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  // Show the selected tab content and add "active" class to the clicked tab
  document.getElementById(tabName).classList.add("active");
  event.currentTarget.classList.add("active");
}
