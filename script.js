const affirmations = [
  "You can do this, I believe in you!",
  "Every step counts, keep going!",
  "Rome wasn't built in a day, you got this.",
  "Where there is a will, there is a way.",
  "You are incredible, amazing, and awesome!!",
];

const affirmationEl = document.querySelector(".affirmation");

function showAffirmation(text) {
  affirmationEl.innerHTML = "";

  const words = text.split(" ");

  words.forEach((word, wIndex) => {
    const wordSpan = document.createElement("span");
    wordSpan.style.display = "inline-block";
    wordSpan.style.whiteSpace = "nowrap";
    wordSpan.style.marginRight = "0.25em";

    word.split("").forEach((char, i) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.display = "inline-block";
      span.style.opacity = "0";
      span.style.transform = "translateY(10px) scaleY(1)";
      span.style.transition = `all 0.4s ease ${i * 0.05}s`;
      wordSpan.appendChild(span);

      setTimeout(() => {
        span.style.opacity = "1";
        span.style.transform = "translateY(0) scaleY(1.2)";

        setTimeout(() => {
          span.style.transition = "all 0.15s ease";
          span.style.transform = "translateY(0) scaleY(1)";
        }, 400);
      }, 50);
    });

    affirmationEl.appendChild(wordSpan);
  });
}

function fadeOutAffirmation(callback) {
  const spans = affirmationEl.querySelectorAll("span");
  const stagger = 0.05;

  spans.forEach((span, i) => {
    span.style.transition = `all 0.4s ease ${i * stagger}s`;
    span.style.opacity = "0";
    span.style.transform = "translateY(-10px) scaleY(1)";
  });

  const totalDuration = 400 + spans.length * stagger * 1000;
  setTimeout(callback, totalDuration);
}

function nextAffirmation() {
  fadeOutAffirmation(() => {
    const next = affirmations[Math.floor(Math.random() * affirmations.length)];
    showAffirmation(next);
  });
}

showAffirmation(affirmations[Math.floor(Math.random() * affirmations.length)]);

const colors = [
  "#3cb371",
  "#61c48eff",
  "#1f9f59ff",
  "#7db194ff",
  "#2c8755ff",
  "#9ad6b5ff",
];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function getRandomRotation(min, max) {
  return Math.random() * (max - min) + min;
}

window.onload = () => {
  const leaves = document.querySelectorAll(".leaf");

  leaves.forEach((leaf) => {
    const randomLeft = Math.random() * 100;
    const randomTop = -30 + Math.random() * 20;
    const randomDelay = Math.random() * 5;

    leaf.style.backgroundColor = getRandomColor();
    const randomRotation = getRandomRotation(-20, 20);
    leaf.style.transform = `rotate(${randomRotation}deg)`;
    leaf.style.left = `${randomLeft}%`;
    leaf.style.top = `${randomTop}px`;
    leaf.style.animationDelay = `${randomDelay}s`;
  });
};
