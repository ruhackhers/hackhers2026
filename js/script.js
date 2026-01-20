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

// TEAM CAROUSEL
(function() {
    const teams = {
        eboard: [
            { name: "Katrina Bawar", image: "images/team-pics/katrina-bawar.jpg", role: "HackHERS Executive Director" },
            { name: "Divya Israni", image: "images/team-pics/divya-israni.JPG", role: "HackHERS Executive Director" },
            { name: "Sara Deshmukh", image: "images/team-pics/sara-deshmukh.jpeg", role: "Spring '26 President" },
            { name: "Natalie Chow", image: "images/team-pics/natalie-chow.JPG", role: "Fall '25 President"},
            { name: "Nithya Konduru", image: "images/team-pics/nithya-konduru.jpg", role: "Fall '25 President" },
            { name: "Vannessa Chan", image: "images/team-pics/vannessa-chan.jpeg", role: "Day-Of Events Director" },
            { name: "Sanika Deshmukh", image: "images/team-pics/sanika-deshmukh.jpg", role: "Day-Of Events Director" },
            { name: "Tanushree Mehta", image: "images/team-pics/thanushree-mehta.jpg", role: "Workshop Director" },
            { name: "Tanvi Yamarthy", image: "images/team-pics/no-image.jpg", role: "Fall '25 Education Director" },
            { name: "Audrey Wang", image: "images/team-pics/audrey-wang.jpeg", role: "Design Director" },
            { name: "Radha Ghate", image: "images/team-pics/radha-ghate.jpeg", role: "Marketing Director" },
            { name: "Rani Shah", image: "images/team-pics/rani-shah.jpeg", role: "Outreach Director" },
            { name: "Ranvitha Kandru", image: "images/team-pics/ranvitha-kandru.jpg", role: "Outreach Director" },
            { name: "Zeal Shah", image: "images/team-pics/zeal-shah.jpg", role: "Girls Who Code Director" },
        ],
        'design committee': [
            { name: "Parinita Chandrashekar", image: "images/team-pics/no-image.jpg", role: ""},
            { name: "Cheryl Lopes", image: "images/team-pics/no-image.jpg", role: ""},
            { name: "Giannah Obando", image: "images/team-pics/no-image.jpg", role: ""},
            { name: "Haaniah Syed Ali", image: "images/team-pics/no-image.jpg", role: ""},
            { name: "Prit Bhathawala", image: "images/team-pics/no-image.jpg", role: ""},
        ],
        'marketing committee': [
            { name: "Allie Domanski", image: "images/team-pics/no-image.jpg", role: "Media" },
            { name: "Kavya Barathy", image: "images/team-pics/no-image.jpg", role: "Web Development" },
            { name: "Akhila Mahidhara", image: "images/team-pics/akhila-mahidhara.jpg", role: "Web Development" },
            { name: "Ananya Almeida", image: "images/team-pics/no-image.jpg", role: "Outreach/Media" },
            { name: "Rebecca Yu", image: "images/team-pics/no-image.jpg", role: "Outreach" },
        ]
    };

    let currentTab = 'eboard';
    let currentIndex = 0;

    function renderCarousel() {
        const carousel = document.getElementById('carousel');
        if (!carousel) return;
        
        carousel.innerHTML = '';

        const teamMembers = teams[currentTab];

        const farLeftIndex = (currentIndex - 2 + teamMembers.length) % teamMembers.length;
        const nearLeftIndex = (currentIndex - 1 + teamMembers.length) % teamMembers.length;
        const nearRightIndex = (currentIndex + 1) % teamMembers.length;
        const farRightIndex = (currentIndex + 2) % teamMembers.length;

        const positions = [
            { index: farLeftIndex, className: 'far-left' },
            { index: nearLeftIndex, className: 'near-left' },
            { index: currentIndex, className: 'center' },
            { index: nearRightIndex, className: 'near-right' },
            { index: farRightIndex, className: 'far-right' }
        ];

        positions.forEach(({ index, className }) => {
            const member = teamMembers[index];
            const memberDiv = document.createElement('div');
            memberDiv.className = `team-member ${className}`;
            
            memberDiv.innerHTML = `
                <div class="member-bubble">
                    <div class="member-image-wrapper">
                        ${member.image 
                            ? `<img src="${member.image}" alt="${member.name}" class="member-image">`
                            : `<div class="member-placeholder">${member.emoji}</div>`
                        }
                    </div>
                </div>
                <div class="member-info">
                    <h3 class="member-name">${member.name}</h3>
                    <p class="member-role">${member.role}</p>
                </div>
            `;
            
            carousel.appendChild(memberDiv);
        });
    }

    function nextMember() {
        const teamMembers = teams[currentTab];
        currentIndex = (currentIndex + 1) % teamMembers.length;
        renderCarousel();
    }

    function prevMember() {
        const teamMembers = teams[currentTab];
        currentIndex = (currentIndex - 1 + teamMembers.length) % teamMembers.length;
        renderCarousel();
    }

    window.switchTeamTab = function(event, tab) {
        const tabs = document.querySelectorAll('.team-tab');
        tabs.forEach(t => t.classList.remove('active'));
        event.currentTarget.classList.add('active');
        
        currentTab = tab;
        currentIndex = 0;
        renderCarousel();
    };

    function init() {
        const nextBtn = document.getElementById('nextBtn');
        const prevBtn = document.getElementById('prevBtn');
        
        if (nextBtn) nextBtn.addEventListener('click', nextMember);
        if (prevBtn) prevBtn.addEventListener('click', prevMember);

        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') nextMember();
            if (e.key === 'ArrowLeft') prevMember();
        });

        renderCarousel();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();