let images = ["assets/ccs-merch-black.png", "assets/ccs-merch-orange.png", "assets/ccs-merch-white.png"];
let currentIndex = 0;

function changeImage() {
  document.querySelector("#merch-images").style.opacity = 0;
  setTimeout(function() {
    document.querySelector("#merch-images").src = images[currentIndex];
    document.querySelector("#merch-images").style.opacity = 1;
  }, 500);
  currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeImage, 5500);

document.addEventListener("click", function(e) {
  if(e.target.classList.contains("gallery-item")) {
    let src = e.target.getAttribute("src");
    document.querySelector(".modal-img").src = src;

    let modal = new bootstrap.Modal(document.getElementById("gallery-popup"));
    modal.show();
  }
});