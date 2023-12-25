//Colors Function

// Function to get a cookie
function getCookie(name) {
  let nameEQ = name + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

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

// Apply styles on page load
document.addEventListener("DOMContentLoaded", function () {
  let selectedStyle = getCookie("selectedStyle") || "Tiebreak Digital";
  applyStyles(selectedStyle); // Apply the styles
});
