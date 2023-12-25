let heroTitle = new SplitType("#hero-title", { types: "lines" });
let heroParagraph = new SplitType("#hero-paragraph", { types: "lines" });
let videoSection = document.getElementsByClassName("hero_video-content")[0];
let videoContainer = document.getElementsByClassName("hero_video-wrapper")[0];
let video = document.getElementsByClassName("hero_content-bottom")[0];
let navBar = document.getElementsByClassName("nav-bar_component")[0];
let heroButton1 = document.getElementById("hero-button-1");
let heroButton2 = document.getElementById("hero-button-2");
let preloader = document.getElementById("preloader");
let pageWrapper = document.getElementsByClassName("page-wrapper")[0];

let tl = gsap.timeline();
const state = Flip.getState(videoSection, videoContainer, video);
function preloaderDisplay() {
  pageWrapper.classList.remove("is-preloader");
  preloader.style.display = "none";
  videoSection.style.zIndex = 5;
}
pageWrapper.classList.add("is-preloader");
videoSection.classList.add("is-preloader");

tl.set(videoContainer, {
  width: "50%",
});

tl.from(videoContainer, {
  y: "150%",
  duration: 1.5,
  ease: "power4.out",
});

tl.to(videoContainer, {
  width: "100%",
  duration: 1.5,
  ease: "power4.inOut",
})
  .add(Flip.to(state, { duration: 1.5, ease: "power4.inOut" }))
  .to(
    videoSection,
    {
      padding: "0rem",
      duration: 1.5,
      ease: "power4.inOut",
    },
    "<"
  )
  .to(
    video,
    {
      borderRadius: "0.25rem",
      duration: 1.5,
      ease: "power4.inOut",
    },
    "<"
  )
  .to(
    videoContainer,
    {
      borderRadius: "0.25rem",
      duration: 1.5,
      ease: "power4.inOut",
    },
    "<"
  );
tl.from(
  navBar,
  {
    opacity: 0,
    y: -50,
    duration: 0.5,
    ease: "power4.out",
    onStart: () => {
      preloaderDisplay();
    },
  },
  "<1"
);
tl.from(
  heroTitle.lines,
  {
    opacity: 0,
    y: -50,
    duration: 0.25,
    stagger: { each: 0.015 },
    ease: "power4.Out",
  },
  "<"
);
tl.from(
  heroParagraph.lines,
  {
    opacity: 0,
    y: -50,
    duration: 0.25,
    stagger: { each: 0.015 },
    ease: "power4.Out",
  },
  "<0.1"
);
tl.from(
  heroButton1,
  {
    opacity: 0,
    y: -50,
    duration: 0.25,
    ease: "power4.Out",
  },
  "<0.1"
);
tl.from(
  heroButton2,
  {
    opacity: 0,
    y: -50,
    duration: 0.25,
    ease: "power4.Out",
  },
  "<"
);

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  disabledClass: "swiper-button-disabled",
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
});

const swiper2 = new Swiper(".swiper2", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  centeredSlides: true,
  centeredSlidesBounds: true,
  initialSlide: 0,
  navigation: {
    nextEl: ".reviews_arrow-next",
    prevEl: ".reviews_arrow-prev",
  },

  disabledClass: "swiper-button-disabled",
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 60,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
      spaceBetween: 100,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 1,
      spaceBetween: 200,
    },
  },
});

const swiper3 = new Swiper(".swiper3", {
  // Optional parameters
  direction: "horizontal",
  loop: false,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  disabledClass: "swiper-button-disabled",
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
  },
});

// Close Menu

$(document).ready(function () {
  $(".nav-bar_link").on("click", function () {
    $(".menu_button").click();
  });
});

// Function to set a cookie
function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Function to apply styles (reuse from the first script)
// Function to apply styles
function applyStyles(styleName) {
  if (styleName == "Tiebreak Digital") {
    document.documentElement.style.setProperty("--color--main-bg", "#989898");
    document.documentElement.style.setProperty(
      "--color--main-button-bg",
      "#6154f6"
    );
    document.documentElement.style.setProperty(
      "--color--tennis-court",
      "#929292"
    );
    document.documentElement.style.setProperty(
      "--color--text-highlight",
      "#6154f6"
    );
    // ... other style properties
  } else if (styleName == "Australia Open") {
    document.documentElement.style.setProperty("--color--main-bg", "#1C91D0");
    document.documentElement.style.setProperty(
      "--color--main-button-bg",
      "#092442"
    );
    document.documentElement.style.setProperty(
      "--color--tennis-court",
      "#177AB0"
    );
    document.documentElement.style.setProperty(
      "--color--text-highlight",
      "#092442"
    );
  } else if (styleName == "Roland Garros") {
    document.documentElement.style.setProperty("--color--main-bg", "#812C19");
    document.documentElement.style.setProperty(
      "--color--main-button-bg",
      "#092442"
    );
    document.documentElement.style.setProperty(
      "--color--tennis-court",
      "#812C19"
    );
    document.documentElement.style.setProperty(
      "--color--text-highlight",
      "#FFD36F"
    );
  } else if (styleName == "Wimbledon") {
    document.documentElement.style.setProperty("--color--main-bg", "#006634");
    document.documentElement.style.setProperty(
      "--color--main-button-bg",
      "#54008C"
    );
    document.documentElement.style.setProperty(
      "--color--tennis-court",
      "#006634"
    );
    document.documentElement.style.setProperty(
      "--color--text-highlight",
      "#FFD36F"
    );
  } else if (styleName == "US Open") {
    document.documentElement.style.setProperty("--color--main-bg", "#3C5C4B");
    document.documentElement.style.setProperty(
      "--color--main-button-bg",
      "#8E0A06"
    );
    document.documentElement.style.setProperty(
      "--color--tennis-court",
      "#3E3658"
    );
    document.documentElement.style.setProperty(
      "--color--text-highlight",
      "#FFD36F"
    );
  }
}

// Handle select element
document.addEventListener("DOMContentLoaded", function () {
  let select = document.querySelector('[wized="site_styles"]');
  if (select) {
    select.addEventListener("change", function () {
      applyStyles(select.value);
      setCookie("selectedStyle", select.value, 7); // Save the selection in a cookie for 7 days
    });

    // Set the value of the select element based on the cookie
    let selectedStyle = getCookie("selectedStyle") || "Tiebreak Digital";
    select.value = selectedStyle;
  }
});

// Request Portfolio

document
  .getElementById("form-step-1")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents default form submission

    const fullName = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const submitButton = document.getElementById("form-step-1-button");

    // Add the 'is-loading' class to the button
    submitButton.classList.add("is-loading");

    // Making the POST request
    fetch("https://xmlm-tvsy-xdlb.n7c.xano.io/api:xuKWibon/request_portfolio", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ full_name: fullName, email: email }),
    })
      .then((response) => response.json())
      .then((data) => {})
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        // Remove the 'is-loading' class from the button
        submitButton.classList.remove("is-loading");
      });
  });
