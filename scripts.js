const mainContainer = document.querySelector(".main");
const thanksContainer = document.querySelector(".thankyou");
const submitButton = document.getElementById("submit");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".list-btn");

submitButton.addEventListener("click", () => {
  thanksContainer.classList.remove("hidden");
  mainContainer.classList.add("hidden");
});

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});
