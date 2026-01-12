// Global Variables
let quizData = [];
let currentQuestionIndex = 0;
let score = 0;
let missedTags = {};
let currentSelectedTopic = ""; 

// DOM Elements
const screens = {
  topic: document.getElementById("topic-screen"),
  count: document.getElementById("count-screen"),
  quiz: document.getElementById("quiz-screen"),
  results: document.getElementById("results-screen")
};

const topicGrid = document.getElementById("topic-grid");
const countInput = document.getElementById("question-count");

// --- INITIALIZATION ---
window.onload = () => {
  if (typeof QUESTIONS === 'undefined') {
    alert("Error: questions.js is not loaded!");
    return;
  }
  
  // 1. Get unique modules
  const uniqueModules = [...new Set(QUESTIONS.map(q => q.module))].sort();
  
  // 2. Clear grid
  topicGrid.innerHTML = "";

  // 3. Create "All Topics" Button
  createTopicButton("Simulated Exam (All)", "All", true);

  // 4. Create Individual Topic Buttons
  uniqueModules.forEach(module => {
    createTopicButton(module, module, false);
  });
};

// Helper to create the buttons
function createTopicButton(displayText, value, isSpecial) {
  const div = document.createElement("div");
  div.classList.add("topic-card");
  div.innerText = displayText;
  
  if (isSpecial) {
    div.style.background = "#004085"; // Darker blue for "All"
    div.style.color = "white";
  }

  div.onclick = () => selectTopic(value);
  topicGrid.appendChild(div);
}

// --- NAVIGATION ---
function showScreen(screenName) {
  // Hide all screens
  Object.values(screens).forEach(s => s.classList.add("hidden"));
  // Show target
  screens[screenName].classList.remove("hidden");
}

// --- STEP 1: SELECT TOPIC ---
function selectTopic(topic) {
  currentSelectedTopic = topic;
  
  // 1. Calculate how many questions are available
  let availableCount = 0;
  if (topic === "All") {
    availableCount = QUESTIONS.length;
    document.getElementById("selected-topic-title").innerText = "Simulated Exam";
  } else {
    availableCount = QUESTIONS.filter(q => q.module === topic).length;
    document.getElementById("selected-topic-title").innerText = topic;
  }

  // 2. Set limits on the input box
  document.getElementById("max-questions").innerText = availableCount;
  countInput.max = availableCount;
  countInput.value = Math.min(10, availableCount); // Default to 10 or max
  
  // 3. Show Count Screen
  showScreen("count");
}

// --- STEP 2: START QUIZ ---
function startQuiz() {
  const requestedCount = parseInt(countInput.value);
  const maxAvailable = parseInt(countInput.max);

  if (requestedCount < 1 || requestedCount > maxAvailable) {
    alert(`Please enter a number between 1 and ${maxAvailable}`);
    return;
  }

  // 1. Filter Questions
  let filtered = [];
  if (currentSelectedTopic === "All") {
    filtered = [...QUESTIONS];
  } else {
    filtered = QUESTIONS.filter(q => q.module === currentSelectedTopic);
  }

  // 2. Shuffle & Slice
  shuffle(filtered);
  quizData = filtered.slice(0, requestedCount);

  // 3. Reset Game State
  currentQuestionIndex = 0;
  score = 0;
  missedTags = {};

  // 4. Go!
  showScreen("quiz");
  showQuestion();
}

// --- STEP 3: PLAY QUIZ ---
function showQuestion() {
  const q = quizData[currentQuestionIndex];
  
  // Update UI
  document.getElementById("progress-text").innerText = `Question ${currentQuestionIndex + 1} / ${quizData.length}`;
  document.getElementById("topic-badge").innerText = q.module;
  document.getElementById("question-text").innerText = q.question;

  // Reset
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
  // Disable buttons
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

    // Track missed tags
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

// --- STEP 4: RESULTS ---
function showResults() {
  showScreen("results");

  const percentage = Math.round((score / quizData.length) * 100);
  document.getElementById("final-score").innerText = `${percentage}%`;
  document.getElementById("correct-count").innerText = score;
  document.getElementById("total-count").innerText = quizData.length;

  const focusContainer = document.getElementById("study-focus");
  focusContainer.innerHTML = "";

  if (score === quizData.length) {
    focusContainer.innerHTML = "<p style='text-align:center; color: green;'>🎉 Perfect score! No specific study needed.</p>";
  } else {
    // Sort missed tags
    const sortedTags = Object.entries(missedTags).sort((a, b) => b[1] - a[1]);
    
    if (sortedTags.length === 0) {
      focusContainer.innerHTML = "<p style='text-align:center;'>No specific tags tracked.</p>";
    } else {
      sortedTags.forEach(([tag, count]) => {
        const div = document.createElement("div");
        div.classList.add("feedback-item");
        div.innerText = `Review: ${tag} (${count} missed)`;
        focusContainer.appendChild(div);
      });
    }
  }
}

// Helper: Shuffle Array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
