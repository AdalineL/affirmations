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

setInterval(nextAffirmation, 6000);
