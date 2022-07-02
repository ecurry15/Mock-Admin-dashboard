const search = document.querySelector('.fa-magnifying-glass')
const inputBar = document.querySelector('.input');
const bell = document.querySelector('.bell');
const bookMark = document.querySelectorAll('.fa-bookmark');


let bellClicked = false;

search.addEventListener("mousedown", function() {
  search.style.transform = "scale(0.93)";
});

search.addEventListener("mouseup", function() {
  inputBar.focus();
  search.style.transform = "scale(1)";
});

bell.addEventListener('click', function() {
if (!bellClicked) {
  bellClicked = true;
  bell.style.color = "#6495ED";
} else {
  bellClicked = false;
  bell.style.color = "black";
}
});

bookMark.forEach(icon => icon.addEventListener('mousedown', function() {
if (!icon.style.color || icon.style.color == "black") {
  icon.style.color = "#6495ED";
} else {
  icon.style.color = "black";
}
}));