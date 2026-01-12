// Global State
let quizData = [];         // The filtered list of questions for this session
let currentQuestionIndex = 0;
let score = 0;
let missedTags = {};       // Tracks which tags the user missed (e.g., {"Cardiology": 2, "Trauma": 1})
let selectedTopic = null;

// DOM Elements
const setupScreen = document.getElementById("setup-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultsScreen = document.getElementById("results-screen");
const topicSelect = document.getElementById("topic-select");

// --- INITIALIZATION ---
window.onload = () => {
  const topicButtonsDiv = document.getElementById("topic-buttons");

  const uniqueModules = [...new Set(QUESTIONS.map(q => q.module))];
  uniqueModules.sort();

  // Add "All Topics" option
  uniqueModules.unshift("All");

  uniqueModules.forEach(module => {
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = module === "All" ? "All Topics (Simulated Exam)" : module;

    btn.onclick = () => {
      selectedTopic = module;
      document.getElementById("question-count-container").classList.remove("hidden");
    };

    topicButtonsDiv.appendChild(btn);
  });
};


// --- START QUIZ ---
function startQuiz() {
  //const selectedTopic = topicSelect.value;
  const numQuestions = parseInt(document.getElementById("question-count").value);

  // 1. Filter Questions based on topic
  let filtered = [];
  if (selectedTopic === "All") {
    filtered = [...QUESTIONS];
  } else {
    filtered = QUESTIONS.filter(q => q.module === selectedTopic);
  }

  // 2. Shuffle and Slice to get the requested number
  shuffle(filtered);
  quizData = filtered.slice(0, numQuestions);

  if (quizData.length === 0) {
    alert("No questions found for this topic!");
    return;
  }

  // 3. Reset State
  currentQuestionIndex = 0;
  score = 0;
  missedTags = {};

  // 4. Switch Screens
  setupScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  
  showQuestion();
}

// --- DISPLAY QUESTION ---
function showQuestion() {
  const q = quizData[currentQuestionIndex];
  
  // Update UI Text
  document.getElementById("progress-text").innerText = `Question ${currentQuestionIndex + 1} of ${quizData.length}`;
  document.getElementById("topic-badge").innerText = q.module;
  document.getElementById("question-text").innerText = q.question;

  // Reset Explanation & Next Button
  document.getElementById("explanation").classList.add("hidden");
  document.getElementById("next-btn").classList.add("hidden");

  // Generate Answer Buttons
  const optionsContainer = document.getElementById("options-container");
  optionsContainer.innerHTML = "";

  // Create an array of objects to shuffle answers but keep track of the original index
  let answers = q.options.map((text, originalIndex) => ({ text, originalIndex }));
  shuffle(answers);

  answers.forEach(ans => {
    const btn = document.createElement("button");
    btn.classList.add("btn", "option-btn");
    btn.innerText = ans.text;
    btn.onclick = () => handleAnswer(btn, ans.originalIndex, q);
    optionsContainer.appendChild(btn);
  });
}

// --- HANDLE ANSWER ---
function handleAnswer(selectedBtn, selectedIndex, questionObj) {
  // Disable all buttons
  const allBtns = document.querySelectorAll(".option-btn");
  allBtns.forEach(btn => btn.disabled = true);

  const isCorrect = selectedIndex === questionObj.correct;

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("wrong");
    
    // Highlight the correct answer
    // We have to find the button with the text matching the correct option
    const correctText = questionObj.options[questionObj.correct];
    allBtns.forEach(btn => {
      if (btn.innerText === correctText) {
        btn.classList.add("correct");
      }
    });

    // Track missed tags for the results screen
    if (questionObj.tags) {
      questionObj.tags.forEach(tag => {
        missedTags[tag] = (missedTags[tag] || 0) + 1;
      });
    }
  }

  // Show Explanation
  const expDiv = document.getElementById("explanation");
  expDiv.innerHTML = `<strong>Explanation:</strong> ${questionObj.explanation}`;
  expDiv.classList.remove("hidden");
  
  // Show Next Button
  document.getElementById("next-btn").classList.remove("hidden");
}

// --- NEXT QUESTION ---
function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    showQuestion();
  } else {
    showResults();
  }
}

// --- SHOW RESULTS ---
function showResults() {
  quizScreen.classList.add("hidden");
  resultsScreen.classList.remove("hidden");

  // Calculate Score
  const percentage = Math.round((score / quizData.length) * 100);
  document.getElementById("final-score").innerText = `${percentage}%`;
  document.getElementById("correct-count").innerText = score;
  document.getElementById("total-count").innerText = quizData.length;

  // Generate Study Advice
  const focusContainer = document.getElementById("study-focus");
  focusContainer.innerHTML = "";

  if (score === quizData.length) {
    focusContainer.innerHTML = "<p>🎉 Perfect score! You are ready for this topic.</p>";
  } else {
    // Sort missed tags by frequency
    const sortedTags = Object.entries(missedTags).sort((a, b) => b[1] - a[1]);
    
    sortedTags.forEach(([tag, count]) => {
      const div = document.createElement("div");
      div.classList.add("feedback-item");
      div.innerText = `Review: ${tag} (${count} missed)`;
      focusContainer.appendChild(div);
    });
  }
}

// --- UTILITY: SHUFFLE ARRAY ---
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

