const slider: HTMLInputElement = document.querySelector('input[type="range"]');
const views = document.querySelector("#pvNumber");
const money = document.querySelector("#monthNumber");
const switcher = document.querySelector("#switch");
const discount = document.querySelector("#circle");

let array = [8, 12, 16, 24, 36];
let arrayDisc: number[] = [];

const reduce = () => {
  arrayDisc = [];
  if (discount.classList.contains("toggled")) {
    for (let i = 0; i <= 4; i++) {
      arrayDisc.push(Math.round(Number((array[i] * 0.75).toPrecision(2))));
    }
  } else {
    arrayDisc = array;
  }
};

const slide = () => {
  reduce();
  let sliderValue: number = Number(slider.value);
  if (sliderValue <= 20) {
    views.innerHTML = "10K";
    money.innerHTML = `${arrayDisc[0]}.00`;
  } else if (sliderValue <= 40) {
    views.innerHTML = "50K";
    money.innerHTML = `${arrayDisc[1]}.00`;
  } else if (sliderValue <= 60) {
    views.innerHTML = "100K";
    money.innerHTML = `${arrayDisc[2]}.00`;
  } else if (sliderValue <= 80) {
    views.innerHTML = "500K";
    money.innerHTML = `${arrayDisc[3]}.00`;
  } else {
    views.innerHTML = "1M";
    money.innerHTML = `${arrayDisc[4]}.00`;
  }
  slider.style.backgroundSize = `${slider.value}%`;
};

switcher.addEventListener("click", (change) => {
  discount.classList.toggle("toggled");
  slide();
});

slider.addEventListener("input", slide);
