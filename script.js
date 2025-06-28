// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
if (mobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// Close mobile menu
function closeMobileMenu() {
  if (mobileMenu) {
    mobileMenu.classList.add('hidden');
  }
}

// Modal functions
function showModal(id, hideOther = null) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    if (hideOther) {
      hideModal(hideOther);
    }
  }
}

function hideModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }
}

// Close modals when clicking outside
document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      hideModal(modal.id);
    }
  });
});

// View details functionality
document.querySelectorAll('.view-details').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = link.getAttribute('href')?.substring(1);
    if (target) {
      showModal(target);
    }
  });
});
//view highlights functionality
const button = document.getElementById('viewAllBtn');

button.addEventListener('click', function () {
  // Get all elements with the 'hidden-more' class
  const hiddenItems = document.querySelectorAll('.hidden-more');

  // Toggle visibility for each item
  hiddenItems.forEach(item => {
    item.classList.toggle('show-more');
  });

  // Change button text based on current text
  if (button.textContent === 'Show Less') {
    button.textContent = 'Show More';
  } else {
    button.textContent = 'Show Less';
  }
});




// Track switching functionality
function showTrack(trackName) {
  document.querySelectorAll('.track-content').forEach(content => {
    content.classList.add('hidden');
  });
  const trackContent = document.getElementById(`${trackName}-track`);
  if (trackContent) {
    trackContent.classList.remove('hidden');
  }
  document.querySelectorAll('.track-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.track === trackName) {
      btn.classList.add('active');
    }
  });
}

// Initialize with frontend track visible
document.addEventListener('DOMContentLoaded', () => {
  const frontendTrack = document.getElementById('frontend-track');
  if (frontendTrack) {
    frontendTrack.classList.remove('hidden');
  }
});

// Back to top button
const backToTopButton = document.getElementById('back-to-top');
if (backToTopButton) {
  window.addEventListener('scroll', () => {
    backToTopButton.classList.toggle('visible', window.pageYOffset > 300);
  });
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Search functionality
const internshipSearch = document.getElementById('internship-search');
if (internshipSearch) {
  internshipSearch.addEventListener('input', () => {
    const searchTerm = internshipSearch.value.toLowerCase();
    document.querySelectorAll('.internship-card').forEach(card => {
      const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
      const description = card.querySelector('p')?.textContent.toLowerCase() || '';
      card.style.display = title.includes(searchTerm) || description.includes(searchTerm) ? 'block' : 'none';
    });
  });
}

// Handle form submission
const applicationForm = document.getElementById('application-form');
if (applicationForm) {
  applicationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('applicant-name')?.value;
    const email = document.getElementById('applicant-email')?.value;
    const phone = document.getElementById('applicant-phone')?.value;
    const program = document.getElementById('internship-program')?.value;
    const message = document.getElementById('applicant-message')?.value;

    if (name && email && phone && program) {
      const whatsappMessage = `New Application for Intern:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nProgram: ${program}\nMessage: ${message || 'N/A'}`;
      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappNumber = '918012626222';
      window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
      hideModal('apply-now');
      applicationForm.reset();
      alert('Your application has been submitted! We will contact you soon.');
    } else {
      alert('Please fill out all required fields.');
    }
  });
}

// Swiper Initialization
if (typeof Swiper !== 'undefined') {
  new Swiper('.reviewSwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 1.5,
        centeredSlides: true,
      },
      768: {
        slidesPerView: 2,
        centeredSlides: false,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
} else {
  console.warn('Swiper library is not loaded.');
}