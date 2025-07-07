const track = document.getElementById("carouselTrack");
const items = document.querySelectorAll(".video-item");
let currentIndex = 0;

function updateCarousel() {
  const itemWidth = items[0].offsetWidth + 10; // 寬度 + margin
  const offset = currentIndex * -itemWidth;
  track.style.transform = `translateX(${offset}px)`;
}

function moveNext() {
  if (currentIndex < items.length - 2) {
    currentIndex++;
    updateCarousel();
  }
}

function movePrev() {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
}
