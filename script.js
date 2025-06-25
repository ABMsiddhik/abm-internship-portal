 
  // Mobile menu toggle
  document.getElementById('mobile-menu-button').addEventListener('click', function() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
  });

  // Modal functions
  function showModal(id) {
    const modal = document.getElementById(id);
    modal.classList.remove('hidden');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function hideModal(id) {
    const modal = document.getElementById(id);
    modal.classList.add('hidden');
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }

  // Close modals when clicking outside
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === this) {
        hideModal(this.id);
      }
    });
  });

  // View details functionality
  document.querySelectorAll('.view-details').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = this.getAttribute('href').substring(1);
      showModal(target);
    });
  });
// Modify your showModal function to accept a second parameter for modal to hide
function showModal(id, hideOther = null) {
    const modal = document.getElementById(id);
    modal.classList.remove('hidden');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    
    // Hide another modal if specified
    if (hideOther) {
        hideModal(hideOther);
    }
}




  // Back to top button
  const backToTopButton = document.getElementById('back-to-top');
  
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add('visible');
    } else {
      backToTopButton.classList.remove('visible');
    }
  });
  
  backToTopButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  

  // Search functionality
  document.getElementById('internship-search').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const cards = document.querySelectorAll('.internship-card');
    
    cards.forEach(card => {
      const title = card.querySelector('h3').textContent.toLowerCase();
      const description = card.querySelector('p').textContent.toLowerCase();
      
      if (title.includes(searchTerm) || description.includes(searchTerm)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });


  // Handle form submission
  document.getElementById('application-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('applicant-name').value;
    const email = document.getElementById('applicant-email').value;
    const phone = document.getElementById('applicant-phone').value;
    const program = document.getElementById('internship-program').value;
    const message = document.getElementById('applicant-message').value;
    
    // Create WhatsApp message
    const whatsappMessage = `New Application for Intern:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nProgram: ${program}\nMessage: ${message}`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Replace with your WhatsApp number (with country code, remove +)
    const whatsappNumber = '918012626222'; // Example: 91 for India, followed by number
    
    // Open WhatsApp with the message
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    
    // Hide the modal
    hideModal('apply-now');
    
    // Reset form
    this.reset();
    
    // Show success message (optional)
    alert('Your application has been submitted! We will contact you soon.');
  });

  // <!-- Swiper Initialization -->

  var swiper = new Swiper(".reviewSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 1.5,
        centeredSlides: true
      },
      768: {
        slidesPerView: 2,
        centeredSlides: false
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });
