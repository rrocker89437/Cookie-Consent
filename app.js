const modal = document.getElementById("modal");
const modalInner = document.getElementById("modal-inner");
const modalText = document.getElementById("modal-text");
const modalCloseBtn = document.getElementById("modal-close-btn");
const modalBtnContainer = document.getElementById("modal-choice-btns");
const modalDeclineBtn = document.getElementById("modal-decline");
const consentForm = document.getElementById("consent-form");

// Modal Pops Up after 1.5sec
setTimeout(function () {
  modal.style.display = "inline";
}, 1500);

// Move the decline btn when hovered
modalDeclineBtn.addEventListener("mouseover", function () {
  modalBtnContainer.classList.toggle("reverse");
});

// Prevent page reload when form submitted
consentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form Submitted");

  //   Store User Input
  const consentFormData = new FormData(consentForm);
  const fullName = consentFormData.get("fullName");

  modalText.innerHTML = `
  <div class="modal-inner-loading">
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
        <filter id="gooey">
        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo"></feColorMatrix>
        <feBlend in="SourceGraphic" in2="goo"></feBlend>
        </filter>
        </defs>
    </svg>
    <div class="blob blob-0"></div>
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
    <div class="blob blob-3"></div>
    <div class="blob blob-4"></div>
    <div class="blob blob-5"></div>
    <p id="uploadText">
        Uploading your data to the dark web...
    </p>
    </div>
  `;
  setTimeout(function () {
    uploadText.innerHTML = `Selling it to a "reputable" company...`;
  }, 5500);

  setTimeout(function () {
    modalText.innerHTML = "";
    modalInner.innerHTML = `
    <h2 class="sucker-heading">Thanks <span class="modal-display-name">${fullName}</span>, you sucker!</h2>
    <p class="sucker-desc">We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="images/idiot.gif">
    </div>
    `;

    modalCloseBtn.disabled = false;
  }, 7000);
});

// Close modal
modalCloseBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
