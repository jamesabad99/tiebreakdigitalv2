let heroTitle = new SplitType("#hero-title", { types: "lines" });
let heroParagraph = new SplitType("#hero-paragraph", { types: "lines" });
let videoSection = document.getElementsByClassName("hero_video-content")[0];
let videoContainer = document.getElementsByClassName("hero_video-wrapper")[0];
let video = document.getElementsByClassName("hero_content-bottom")[0];
let preloader = document.getElementsByClassName("preloader")[0];
let navBar = document.getElementsByClassName("navbar_component")[0];
let navBarLine = document.getElementsByClassName("navbar_line")[0];
let heroButton1 = document.getElementById("hero-button-1");
let heroButton2 = document.getElementById("hero-button-2");

let tl = gsap.timeline();
const state = Flip.getState(videoSection, videoContainer, video);
function preloaderDisplay() {
  preloader.style.display = "none";
}
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
  onStart: () => {
    preloaderDisplay();
  },
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
  },
  "<1"
);
tl.from(
  navBarLine,
  {
    width: "0%",
    duration: 0.5,
    ease: "power4.inOut",
  },
  "<"
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
