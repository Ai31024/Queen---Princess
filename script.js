// Function to set up event listeners for changing and reverting image and heading
function setupButtonActions(
  buttonChange,
  buttonRevert,
  imgElement,
  newImgSrc,
  originalImgSrc,
  headingElement,
  newHeading,
  originalHeading
) {
  if (buttonChange && buttonRevert && imgElement && headingElement) {
    // Event Listener for Change button
    buttonChange.addEventListener("click", function () {
      imgElement.src = newImgSrc;
      headingElement.textContent = newHeading;
    });

    // Event Listener for Revert button
    buttonRevert.addEventListener("click", function () {
      imgElement.src = originalImgSrc;
      headingElement.textContent = originalHeading;
    });
  } else {
    console.error("One or more elements are missing.");
  }
}

// Querying articles
const article1 = document.querySelectorAll("article")[0];
const article2 = document.querySelectorAll("article")[1];
const article3 = document.querySelectorAll("article")[2];

// Querying elements for the first section
const girl1 = article1.querySelector("img");
const subHeading1 = article1.querySelector("h3");
const button1A = document.querySelector("#button1A");
const button1B = document.querySelector("#button1B");

// Querying elements for the second section
const girl2 = article2.querySelector("img");
const subHeading2 = article2.querySelector("h3");
const button2A = document.querySelector("#button2A");
const button2B = document.querySelector("#button2B");

// Querying elements for the third section
const girl3 = article3.querySelector("img");
const subHeading3 = article3.querySelector("h3");
const button3A = document.querySelector("#button3A");
const button3B = document.querySelector("#button3B");

// Set up button actions for each section
setupButtonActions(
  button1A,
  button1B,
  girl1,
  "./media/girl_1A.jpeg",
  "./media/girl_1.jpeg",
  subHeading1,
  "Queen",
  "Princess"
);
setupButtonActions(
  button2A,
  button2B,
  girl2,
  "./media/girl_2A.jpeg",
  "./media/girl_2.jpeg",
  subHeading2,
  "Queen",
  "Princess"
);
setupButtonActions(
  button3A,
  button3B,
  girl3,
  "./media/girl_3A.jpeg",
  "./media/girl_3.jpeg",
  subHeading3,
  "Queen",
  "Princess"
);
