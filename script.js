const sliderLineOther = document.querySelector(".slider-line-more");
const sliderLinePopular = document.querySelector(".slider-line-popular");

let offset = 0;

sliderLineOther.addEventListener("click", () => {
  offset = offset += 320;

  if (offset >= 2880) {
    offset = 0;
  }

  sliderLineOther.style.right = `${offset}px`;
});
sliderLinePopular.addEventListener("click", () => {
  offset = offset += 460;

  if (offset >= 920) {
    offset = 0;
  }

  sliderLinePopular.style.right = `${offset}px`
});
