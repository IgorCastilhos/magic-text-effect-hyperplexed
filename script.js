let index = 0,
  interval = 1000;

const range = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const animate = star => {
  star.style.setProperty("--star-left", `${range(-10, 100)}%`)
  star.style.setProperty("--star-top", `${range(-40, 80)}%`)

  star.style.animation = "none";
  star.offsetHeight;
  star.style.animation = "";
}

for(const star of document.getElementsByClassName("magic-star")) {
  setTimeout(() => {
    animate(star);

    setInterval(() => animate(star), 1000);
  }, index++ * (interval / 3))
}
