const moods = {
  happy: {
    color: '#ffd166',
    message: 'Keep that sunshine energy!',
    description: 'Your joy is contagious. Share a little sparkle today.',
    status: 'A bright little moment',
    emoji: '😄'
  },
  sad: {
    color: '#9bd7e5',
    message: 'Go gently with yourself.',
    description: 'Soft days count too. Take the next tiny step when you are ready.',
    status: 'A quiet check-in',
    emoji: '😢'
  },
  angry: {
    color: '#ff9b85',
    message: 'Feel it, then find your calm.',
    description: 'Pause, breathe, and give yourself room before you react.',
    status: 'Big feelings detected',
    emoji: '😠'
  },
  confused: {
    color: '#d5b8ed',
    message: 'You do not need all the answers yet.',
    description: 'Curiosity is a mood too. Follow the next question.',
    status: 'A plot twist moment',
    emoji: '😕'
  }
};

const body = document.body;
const moodDisplay = document.getElementById('mood-display');
const moodStatus = document.getElementById('mood-status');
const moodMessage = document.getElementById('mood-message');
const moodDescription = document.getElementById('mood-description');
const moodIcon = document.getElementById('mood-icon');
const buttons = document.querySelectorAll('.mood-btn');

function changeMood(moodName) {
  const mood = moods[moodName];

  if (!mood) return;

  body.style.background = `radial-gradient(circle at top left, ${mood.color} 0, transparent 38%), #f8f5ff`;
  moodDisplay.style.backgroundColor = `${mood.color}66`;
  moodStatus.textContent = mood.status;
  moodMessage.textContent = mood.message;
  moodDescription.textContent = mood.description;
  moodIcon.textContent = mood.emoji;

  buttons.forEach(button => {
    button.classList.toggle('active', button.id === moodName);
  });
}

buttons.forEach(button => {
  button.addEventListener('click', () => changeMood(button.id));
});
