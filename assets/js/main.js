/**
 * Template Name: Append
 * Updated: Jul 27 2023 with Bootstrap v5.3.1
 * Template URL: https://bootstrapmade.com/append-bootstrap-website-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector(".scroll-top");

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    }
  }
  scrollTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("load", toggleScrollTop);
  document.addEventListener("scroll", toggleScrollTop);

  /**
   * Preloader
   */
  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  const selectBody = document.querySelector("body");
  const selectHeader = document.querySelector("#header");

  function toggleScrolled() {
    if (
      !selectHeader.classList.contains("scroll-up-sticky") &&
      !selectHeader.classList.contains("sticky-top") &&
      !selectHeader.classList.contains("fixed-top")
    )
      return;
    window.scrollY > 100
      ? selectBody.classList.add("scrolled")
      : selectBody.classList.remove("scrolled");
  }

  document.addEventListener("scroll", toggleScrolled);
  window.addEventListener("load", toggleScrolled);

  /**
   * Scroll up sticky header to headers with .scroll-up-sticky class
   */
  let lastScrollTop = 0;
  window.addEventListener("scroll", function () {
    if (!selectHeader.classList.contains("scroll-up-sticky")) return;

    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > selectHeader.offsetHeight) {
      selectHeader.style.setProperty("position", "sticky", "important");
      selectHeader.style.top = `-${header.offsetHeight + 50}px`;
    } else if (scrollTop > selectHeader.offsetHeight) {
      selectHeader.style.setProperty("position", "sticky", "important");
      selectHeader.style.top = "0";
    } else {
      selectHeader.style.removeProperty("top");
      selectHeader.style.removeProperty("position");
    }
    lastScrollTop = scrollTop;
  });

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");

  function mobileNavToogle() {
    document.querySelector("body").classList.toggle("mobile-nav-active");
    mobileNavToggleBtn.classList.toggle("bi-list");
    mobileNavToggleBtn.classList.toggle("bi-x");
  }
  mobileNavToggleBtn.addEventListener("click", mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll("#navmenu a").forEach((navmenu) => {
    navmenu.addEventListener("click", () => {
      if (document.querySelector(".mobile-nav-active")) {
        mobileNavToogle();
      }
    });
  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll(".navmenu .has-dropdown i").forEach((navmenu) => {
    navmenu.addEventListener("click", function (e) {
      if (document.querySelector(".mobile-nav-active")) {
        e.preventDefault();
        this.parentNode.classList.toggle("active");
        this.parentNode.nextElementSibling.classList.toggle("dropdown-active");
        e.stopImmediatePropagation();
      }
    });
  });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener("load", function (e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: "smooth",
          });
        }, 100);
      }
    }
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: ".glightbox",
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init isotope layout and filters
   */
  function initIsotopeLayout() {
    document
      .querySelectorAll(".isotope-layout")
      .forEach(function (isotopeItem) {
        let layout = isotopeItem.getAttribute("data-layout") ?? "masonry";
        let filter = isotopeItem.getAttribute("data-default-filter") ?? "*";
        let sort = isotopeItem.getAttribute("data-sort") ?? "original-order";

        let initIsotope = new Isotope(
          isotopeItem.querySelector(".isotope-container"),
          {
            itemSelector: ".isotope-item",
            layoutMode: layout,
            filter: filter,
            sortBy: sort,
          }
        );

        isotopeItem
          .querySelectorAll(".isotope-filters li")
          .forEach(function (filters) {
            filters.addEventListener(
              "click",
              function () {
                isotopeItem
                  .querySelector(".isotope-filters .filter-active")
                  .classList.remove("filter-active");
                this.classList.add("filter-active");
                initIsotope.arrange({
                  filter: this.getAttribute("data-filter"),
                });
                if (typeof aosInit === "function") {
                  aosInit();
                }
              },
              false
            );
          });
      });
  }
  window.addEventListener("load", initIsotopeLayout);

  /**
   * Frequently Asked Questions Toggle
   */
  document
    .querySelectorAll(".faq-item h3, .faq-item .faq-toggle")
    .forEach((faqItem) => {
      faqItem.addEventListener("click", () => {
        faqItem.parentNode.classList.toggle("faq-active");
      });
    });

  /**
   * Init swiper sliders
   */
  // function initSwiper() {
  //   document.querySelectorAll('.swiper').forEach(function(swiper) {
  //     let config = JSON.parse(swiper.querySelector('.swiper-config').innerHTML.trim());
  //     new Swiper(swiper, config);
  //   });
  // }
  // window.addEventListener('load', initSwiper);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }
  window.addEventListener("load", aosInit);
});
new Swiper(".clients-slider", {
  speed: 400,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 80,
    },
    992: {
      slidesPerView: 6,
      spaceBetween: 120,
    },
  },
});

/**
 * Init swiper slider with 1 slide at once in desktop view
 */
new Swiper(".slides-1", {
  speed: 600,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/**
 * Init swiper slider with 3 slides at once in desktop view
 */
new Swiper(".slides-3", {
  speed: 600,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
    },

    1200: {
      slidesPerView: 3,
    },
  },
});

// Function to handle the form submission
function submitHandler(event) {
  const submitButton = document.getElementById("submit-button");
  submitButton.disabled = true;
  event.preventDefault(); // Prevent the default form submission

  const formData = new FormData(document.getElementById("form-data"));
  // console.log(formData.get("name"));
  // console.log(formData.get("gender"));
  // console.log(formData.get("dob"));
  // console.log(formData.get("graduation"));
  // console.log(formData.get("mobileNumber"));
  // console.log(formData.get("email"));
  // console.log(formData.get("message"));

  fetch(
    "https://script.google.com/macros/s/AKfycbyKB_qyw-gqbLBLamLy6d5BREhg2_WCZwei5W1rL5kIozQQ7pOifHNMnEN_GF1-CyGACg/exec",
    {
      method: "POST",
      body: formData,
    }
  )
    .then((response) => response.text())
    .then((data) => {
      // Handle the response from the server (if needed)
      const successToast = new bootstrap.Toast(
        document.getElementById("successToast")
      );
      successToast.show();
      setTimeout(function () {
        successToast.hide();
      }, 2000);

      // Optionally, you can reset the form fields after submission
      document.getElementById("form-data").reset();
      submitButton.disabled = false;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// Add an event listener to the form submit event
// document.getElementById("form-data").addEventListener("submit", submitHandler);

//English Kannada set time interval

// const kan = document.getElementById("mainText1");
// const eng = document.getElementById("mainText2");

// function showEnglishContent() {
//   eng.style.display = "block";
//   kan.style.display = "none";
// }

// function showKannadaContent() {
//   eng.style.display = "none";
//   kan.style.display = "block";
// }

// function switchContent() {
//   showEnglishContent();
//   setTimeout(showKannadaContent, 10000);
// }

// switchContent();

// setInterval(switchContent, 20000);

//date picker in contact form

document.addEventListener("DOMContentLoaded", function () {
  const dateInput = document.getElementById("dateInput");

  dateInput.addEventListener("click", function () {
    flatpickr(dateInput, {
      dateFormat: "d/m/Y",
      placeholder: "Date of Birth",
    }).open(); // Open the date picker when the input is clicked
  });
});

/**
 * Clients Slider
 */
(function () {
  new Swiper(".gallery-slider", {
    speed: 700,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  });
})();
const galleryLightbox = GLightbox({
  selector: ".gallery-lightbox",
});

const listItems = document.querySelectorAll('li');
const modals = document.querySelectorAll('.modal');

listItems.forEach((item) => {
    item.addEventListener('click', () => {
        const targetModalId = item.getAttribute('data-target');
        const targetModal = document.getElementById(targetModalId);
        targetModal.style.display = 'block';

        // Add a click event listener to the modal's overlay
        targetModal.addEventListener('click', (event) => {
            if (event.target === targetModal) {
                targetModal.style.display = 'none';
            }
        });
    });
});

modals.forEach((modal) => {
    const closeBtn = modal.querySelector('.close');
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
});

//Lazy loading of Images in gallery section
  window.addEventListener('load', function() {
    // When the page is fully loaded, hide the loading spinner
    document.getElementById('loading-spinner').style.display = 'none';
  });

  // Using Intersection Observer to detect when images enter the viewport
  const images = document.querySelectorAll('.lazy-load-img');
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1, // Adjust as needed
  };

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const image = entry.target;
        image.src = image.getAttribute('data-src');
        image.onload = () => {
          // Image is loaded, you can hide a loading animation specific to this image if needed
        };
        observer.unobserve(image);
      }
    });
  }, options);

  images.forEach((image) => {
    imageObserver.observe(image);
  });
