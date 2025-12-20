const moods = {
  happy: {
    color: "#FFD700",
    message: "Stay shiny!",
    emoji: "😄"
  },
  sad: {
    color: "#87CEEB",
    message: "It’s okay to slow down.",
    emoji: "😢"
  },
  angry: {
    color: "#FF6347",
    message: "Take a breath.",
    emoji: "😠"
  },
  confused: {
    color: "#DDA0DD",
    message: "What should I do.",
    emoji: "😕"
  }
};

const body = document.body;
const moodMessage = document.getElementById("mood-message");
const moodIcon = document.getElementById("mood-icon");
const buttons = document.querySelectorAll(".mood-btn");

function changeMood(moodName) {
  const mood = moods[moodName];

  if (!mood) return;

  body.style.backgroundColor = mood.color;
  moodMessage.textContent = mood.message;
  moodIcon.textContent = mood.emoji;
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    changeMood(button.id);
  });
});