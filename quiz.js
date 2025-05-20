const questions = [
  {
    question: "Quel médicament est un antibiotique ?",
    options: ["Ibuprofène", "Amoxicilline", "Paracétamol"],
    answer: 1
  },
  {
    question: "Le paracétamol est utilisé pour...",
    options: ["Traiter les infections", "Réduire la douleur", "Soigner le cancer"],
    answer: 1
  }
];

let current = 0;
let score = 0;

document.addEventListener("DOMContentLoaded", () => {
  const username = localStorage.getItem("username");
  if (!username) {
    window.location.href = "login.html";
  } else {
    document.getElementById("welcome").textContent = `Bonjour ${username} !`;
    showQuestion();
  }
});

function showQuestion() {
  const q = questions[current];
  const container = document.getElementById("quiz-container");
  container.innerHTML = `<h2>${q.question}</h2>`;
  q.options.forEach((option, index) => {
    container.innerHTML += `<button onclick="checkAnswer(${index})">${option}</button><br>`;
  });
}

function checkAnswer(index) {
  if (index === questions[current].answer) {
    score++;
    alert("Bonne réponse !");
  } else {
    alert("Mauvaise réponse !");
  }
  current++;
  if (current < questions.length) {
    showQuestion();
  } else {
    document.getElementById("quiz-container").innerHTML = "Quiz terminé !";
    document.getElementById("score").textContent = `Votre score est : ${score}/${questions.length}`;
  }
}
