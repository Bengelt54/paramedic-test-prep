// Global State
let quizData = [];
let currentQuestionIndex = 0;
let score = 0;
let missedTags = {}; 

// DOM Elements
const screens = {
  topic: document.getElementById("topic-screen"),
  count: document.getElementById("count-screen"),
  quiz: document.getElementById("quiz-screen"),
  results: document.getElementById("results-screen")
};

const topicSelect = document.getElementById("topic-select");
const countInput = document.getElementById("question-count");

// --- INITIALIZATION ---
window.onload = () => {
  // 1. Get unique modules
  if (typeof QUESTIONS === 'undefined') {
    alert("Error: Questions not loaded. Check your questions.js file.");
    return;
  }
  const uniqueModules = [...new Set(QUESTIONS.map(q => q.module))].sort();
  
  // 2. Populate Dropdown
  uniqueModules.forEach(module => {
    const option = document.createElement("option");
    option.value = module;
    option.innerText = module;
    topicSelect.appendChild(option);
  });
};

// --- NAVIGATION ---
function showScreen(screenName) {
  // Hide all screens
  Object.values(screens).forEach(s => s.classList.add("hidden"));
  // Show target
  screens[screenName].classList.remove("hidden");
}

function goBackToTopics() {
  showScreen("topic");
}

// --- STEP 1 -> STEP 2 ---
function goToStep2() {
  const selectedTopic = topicSelect.value;
  
  // 1. Calculate how many questions exist for this topic
  let availableCount = 0;
  if (selectedTopic === "All") {
    availableCount = QUESTIONS.length;
  } else {
    availableCount = QUESTIONS.filter(q => q.module === selectedTopic).length;
  }

  // 2. Update UI
  document.getElementById("selected-topic-display").innerText = selectedTopic;
  document.getElementById("max-questions").innerText = availableCount;
  
  // 3. Set Input Constraints
  countInput.max = availableCount;
  countInput.value = Math.min(10, availableCount); // Default to 10 or max if lower
  
  showScreen("count");
}

// --- START QUIZ ---
function startQuiz() {
  const selectedTopic = topicSelect.value;
  const requestedCount = parseInt(countInput.value);
  const maxAvailable = parseInt(countInput.max);

  // Validation
  if (requestedCount < 1 || requestedCount > maxAvailable) {
    alert(`Please enter a number between 1 and ${maxAvailable}`);
    return;
  }

  // 1. Filter Questions
  let filtered = [];
  if (selectedTopic === "All") {
    filtered = [...QUESTIONS];
  } else {
    filtered = QUESTIONS.filter(q => q.module === selectedTopic);
  }

  // 2. Shuffle & Slice
  shuffle(filtered);
  quizData = filtered.slice(0, requestedCount);

  // 3. Reset State
  currentQuestionIndex = 0;
  score = 0;
  missedTags = {};

  // 4. Start
  showScreen("quiz");
  showQuestion();
}

// --- QUIZ LOGIC ---
function showQuestion() {
  const q = quizData[currentQuestionIndex];
  
  // UI Updates
  document.getElementById("progress-text").innerText = `Question ${currentQuestionIndex + 1} / ${quizData.length}`;
  document.getElementById("topic-badge").innerText = q.module;
  document.getElementById("question-text").innerText = q.question;

  // Reset Elements
  document.getElementById("explanation").classList.add("hidden");
  document.getElementById("next-btn").classList.add("hidden");

  // Options
  const optionsContainer = document.getElementById("options-container");
  optionsContainer.innerHTML = "";

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
    // Highlight correct
    const correctText = questionObj.options[questionObj.correct];
    allBtns.forEach(btn => {
      if (btn.innerText === correctText) btn.classList.add("correct");
    });
    // Track miss
    if (questionObj.tags) {
      questionObj.tags.forEach(tag => {
        missedTags[tag] = (missedTags[tag] || 0) + 1;
      });
    }
  }

  // Explanation
  const expDiv = document.getElementById("explanation");
  expDiv.innerHTML = `<strong>Explanation:</strong> ${questionObj.explanation}`;
  expDiv.classList.remove("hidden");
  
  document.getElementById("next-btn").classList.remove("hidden");
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    showQuestion();
  } else {
    showResults();
  }
}

// --- RESULTS ---
function showResults() {
  showScreen("results");

  const percentage = Math.round((score / quizData.length) * 100);
  document.getElementById("final-score").innerText = `${percentage}%`;
  document.getElementById("correct-count").innerText = score;
  document.getElementById("total-count").innerText = quizData.length;

  const focusContainer = document.getElementById("study-focus");
  focusContainer.innerHTML = "";

  if (score === quizData.length) {
    focusContainer.innerHTML = "<p style='text-align:center; color: green;'>🎉 Perfect score! Great job.</p>";
  } else {
    const sortedTags = Object.entries(missedTags).sort((a, b) => b[1] - a[1]);
    if (sortedTags.length === 0) {
       focusContainer.innerHTML = "<p>No specific tags tracked.</p>";
    } else {
      sortedTags.forEach(([tag, count]) => {
        const div = document.createElement("div");
        div.style.padding = "10px";
        div.style.background = "#fff3cd";
        div.style.marginBottom = "8px";
        div.style.borderRadius = "4px";
        div.innerText = `Review: ${tag} (${count} missed)`;
        focusContainer.appendChild(div);
      });
    }
  }
}

// Utility
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
