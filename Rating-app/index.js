let selectedRating = 0;

const ratingCard = document.getElementById("ratingCard");
const thankYouCard = document.getElementById("thankYouCard");
const submitButton = document.getElementById("submitButton");
const ratingDisplay = document.getElementById("ratingDisplay");

// get the ratings
const rating1 = document.querySelector(".rate-1");
const rating2 = document.querySelector(".rate-2");
const rating3 = document.querySelector(".rate-3");
const rating4 = document.querySelector(".rate-4");
const rating5 = document.querySelector(".rate-5");

// Array of all the rating buttons
const ratingButtons = [rating1, rating2, rating3, rating4, rating5];

function selectRating(rating) {
  selectRating = rating;

  ratingButtons.forEach((btn) => {
    const parent = btn.parentElement;
    parent.classList.remove("bg-[#262f38]","text-[#969eac]");
    parent.classList.add("bg-[#7c8798]","text-white");
  });

  const selectedButton = document.querySelector(
    ".rate-" + rating
  ).parentElement;
  selectedButton.classList.remove("bg-[#262f38]","text-[#969eac]");
  selectedButton.classList.add("bg-[#7c8798]","text-white");
}

rating1.addEventListener("click", function () {
  selectRating(1);
});

rating2.addEventListener("click", function () {
  selectRating(2);
});
rating3.addEventListener("click", function () {
  selectRating(3);
});
rating4.addEventListener("click", function () {
  selectRating(4);
});
rating5.addEventListener("click", function () {
  selectRating(5);
});

function submitRating() {
  console.log("clicked" )
  if (selectRating > 0) {
    ratingDisplay.textContent = selectRating;
    ratingCard.classList.add("hidden");
    thankYouCard.classList.remove("hidden");
    thankYouCard.classList.add("flex");
  } else {
    alert("Pls select a rating");
  }
}

submitButton.addEventListener("click",submitRating);
