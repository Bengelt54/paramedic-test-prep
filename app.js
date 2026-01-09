let currentQuestionIndex = 0;
let shuffledQuestions = [];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function loadQuestions() {
  shuffledQuestions = shuffle([...QUESTIONS]);
}

function showQuestion() {
  const q = shuffledQuestions[currentQuestionIndex];
  document.getElementById("question").innerHTML =
    `<strong>${q.module}</strong><br><br>${q.question}`;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  const shuffledAnswers = shuffle(
    q.options.map((text, index) => ({ text, index }))
  );

  shuffledAnswers.forEach(answer => {
    const btn = document.createElement("button");
    btn.innerText = answer.text;
    btn.onclick = () => checkAnswer(btn, answer.index);
    answersDiv.appendChild(btn);
  });

  document.getElementById("explanation").style.display = "none";
}

function checkAnswer(button, selectedIndex) {
  const q = shuffledQuestions[currentQuestionIndex];
  const buttons = document.querySelectorAll("#answers button");

  buttons.forEach(b => b.disabled = true);

  if (selectedIndex === q.correct) {
    button.classList.add("correct");
  } else {
    button.classList.add("wrong");
    buttons.forEach(b => {
      if (b.innerText === q.options[q.correct]) {
        b.classList.add("correct");
      }
    });
  }

  const explanationDiv = document.getElementById("explanation");
  explanationDiv.innerHTML = `<strong>Explanation:</strong> ${q.explanation}`;
  explanationDiv.style.display = "block";
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex >= shuffledQuestions.length) {
    alert("End of quiz. Reload page to start again.");
    return;
  }
  showQuestion();
}

loadQuestions();
showQuestion();
