const CARDIOLOGY_QUESTIONS = [
  {
    module: "Cardiology",
    tags: ["Physiology"],
    question: "The primary energy source for the sodium-potassium pump in cardiac cells is:",
    options: ["ADP", "ATP", "Glucose", "Calcium"],
    correct: 1,
    explanation: "The heart is a sodium-potassium pump which requires energy in the form of ATP created by aerobic metabolism."
  },
  {
    module: "Cardiology",
    tags: ["Physiology", "Calculations"],
    question: "Cardiac Output (CO) is determined by multiplying Heart Rate (HR) by:",
    options: ["Blood Pressure", "Systemic Vascular Resistance", "Stroke Volume", "Ejection Fraction"],
    correct: 2,
    explanation: "Cardiac output (CO) = Stroke Volume (SV) X Heart Rate (HR)."
  },
  {
    module: "Cardiology",
    tags: ["Physiology"],
    question: "According to Starling's Law of the heart, an increase in end-diastolic volume (stretch) leads to:",
    options: [
      "A decrease in stroke volume",
      "A decrease in heart rate",
      "An increase in the force of contraction",
      "An increase in electrical conductivity"
    ],
    correct: 2,
    explanation: "Starling's law states that the greater the volume of blood entering the heart (stretch), the greater the force of contraction (snap back)."
  },
  {
    module: "Cardiology",
    tags: ["Anatomy", "Physiology"],
    question: "Coronary arteries fill with blood primarily during which phase of the cardiac cycle?",
    options: ["Systole", "Diastole", "Atrial contraction", "Ventricular ejection"],
    correct: 1,
    explanation: "Coronary arteries fill during diastole."
  },
  {
    module: "Cardiology",
    tags: ["Anatomy", "Physiology"],
    question: "The coronary veins empty into the coronary sinus during:",
    options: ["Diastole", "Systole", "Atrial kick", "Isovolumetric relaxation"],
    correct: 1,
    explanation: "Coronary veins empty into the coronary sinus during systole."
  },
  {
    module: "Cardiology",
    tags: ["Neurology", "Anatomy"],
    question: "Which portion of the nervous system supplies the heart via the cardiac plexus?",
    options: [
      "Parasympathetic nervous system",
      "Sympathetic nervous system",
      "Somatic nervous system",
      "Central nervous system"
    ],
    correct: 1,
    explanation: "The cardiac plexus is the connection for the sympathetic nervous system."
  },
  {
    module: "Cardiology",
    tags: ["Neurology", "Anatomy"],
    question: "The Vagus nerve provides which type of innervation to the heart?",
    options: ["Sympathetic", "Parasympathetic", "Somatic", "Sensory only"],
    correct: 1,
    explanation: "The Vagus nerve is the connection for the parasympathetic nervous system."
  },
  {
    module: "Cardiology",
    tags: ["Anatomy"],
    question: "The innermost layer of a blood vessel is called the:",
    options: ["Tunica media", "Tunica adventitia", "Tunica intima", "Endothelium"],
    correct: 2,
    explanation: "The tunica intima is the innermost layer of a blood vessel."
  },
  {
    module: "Cardiology",
    tags: ["Physics", "Physiology"],
    question: "Poiseuille's Law states that doubling the diameter of a tube increases the flow rate by how many times?",
    options: ["2 times", "4 times", "8 times", "16 times"],
    correct: 3,
    explanation: "Poiseuille's Law states that if you double the diameter of a tube, you increase the flow rate by 16 times."
  },
  {
    module: "Cardiology",
    tags: ["Pathology"],
    question: "Prinzmetal's angina is caused by:",
    options: ["Atherosclerosis", "Coronary artery spasm", "Thrombosis", "Embolism"],
    correct: 1,
    explanation: "Prinzmetal's angina is caused by coronary artery vasospasm."
  },
  {
    module: "Cardiology",
    tags: ["ECG"],
    question: "In lead I of the ECG, the positive electrode is placed on the:",
    options: ["Right arm", "Left arm", "Left leg", "Right leg"],
    correct: 1,
    explanation: "In lead I, the positive electrode is on the left arm and the negative is on the right arm."
  },
  {
    module: "Cardiology",
    tags: ["ECG"],
    question: "Lead II records the electrical difference between the:",
    options: [
      "Right arm and left arm",
      "Right arm and left leg",
      "Left arm and left leg",
      "Right arm and right leg"
    ],
    correct: 1,
    explanation: "Lead II records the difference between the Right Arm (-) and Left Leg (+)."
  },
  {
    module: "Cardiology",
    tags: ["ECG", "Anatomy"],
    question: "Which leads view the inferior wall of the heart?",
    options: ["I, aVL, V5, V6", "V1, V2", "II, III, aVF", "V3, V4"],
    correct: 2,
    explanation: "Leads II, III, and aVF view the inferior wall of the left ventricle."
  },
  {
    module: "Cardiology",
    tags: ["ECG", "Anatomy"],
    question: "Which leads view the lateral wall of the heart?",
    options: ["II, III, aVF", "I, aVL, V5, V6", "V1, V2", "V3, V4"],
    correct: 1,
    explanation: "Leads I, aVL, V5, and V6 view the lateral wall of the left ventricle."
  },
  {
    module: "Cardiology",
    tags: ["ECG", "Anatomy"],
    question: "Septal wall involvement is best seen in leads:",
    options: ["V1 and V2", "V3 and V4", "II and III", "I and aVL"],
    correct: 0,
    explanation: "Leads V1 and V2 view the septal wall of the heart."
  },
  {
    module: "Cardiology",
    tags: ["ECG", "Anatomy"],
    question: "The anterior wall of the heart is best viewed in leads:",
    options: ["V1 and V2", "V3 and V4", "II, III, aVF", "I, aVL"],
    correct: 1,
    explanation: "Leads V3 and V4 view the anterior wall of the left ventricle."
  },
  {
    module: "Cardiology",
    tags: ["ECG", "Pathology"],
    question: "Pathological Q waves on an ECG indicate:",
    options: ["Acute ischemia", "Acute injury", "Tissue necrosis (infarction)", "Electrolyte imbalance"],
    correct: 2,
    explanation: "Pathological Q waves indicate tissue necrosis (dead tissue) or infarction."
  },
  {
    module: "Cardiology",
    tags: ["ECG", "Pathology"],
    question: "ST-segment elevation is a sign of:",
    options: ["Ischemia", "Injury", "Infarction (completed)", "Hypertrophy"],
    correct: 1,
    explanation: "ST elevation indicates myocardial injury."
  },
  {
    module: "Cardiology",
    tags: ["ECG", "Physiology"],
    question: "The absolute refractory period occurs during which part of the ECG cycle?",
    options: [
      "From the P wave to the QRS",
      "From the Q wave to the beginning of the T wave",
      "From the peak of the T wave to the end of the T wave",
      "During the TP segment"
    ],
    correct: 1,
    explanation: "The absolute refractory period is from the Q wave to the beginning of the T wave. No stimulus can cause a contraction during this time."
  },
  {
    module: "Cardiology",
    tags: ["ECG", "Physiology"],
    question: "The relative refractory period corresponds to which part of the T wave?",
    options: ["The upstroke", "The peak", "The downslope", "The entire T wave"],
    correct: 2,
    explanation: "The relative refractory period is the downslope of the T wave. A strong stimulus here can cause V-Fib (R on T phenomenon)."
  },
  {
    module: "Cardiology",
    tags: ["ECG", "Pathology"],
    question: "A delta wave on an ECG is a hallmark sign of:",
    options: [
      "Lown-Ganong-Levine Syndrome",
      "Wolff-Parkinson-White (WPW) Syndrome",
      "Left Bundle Branch Block",
      "Right Bundle Branch Block"
    ],
    correct: 1,
    explanation: "A delta wave indicates pre-excitation associated with Wolff-Parkinson-White (WPW) syndrome."
  },
  {
    module: "Cardiology",
    tags: ["ECG", "Pathology"],
    question: "Electrical alternans is specifically associated with:",
    options: [
      "Pericardial tamponade",
      "Tension pneumothorax",
      "Myocardial infarction",
      "Pulmonary embolism"
    ],
    correct: 0,
    explanation: "Electrical alternans is associated with pericardial tamponade."
  },
  {
    module: "Cardiology",
    tags: ["ECG"],
    question: "In a junctional rhythm, the P wave is:",
    options: [
      "Always upright",
      "Inverted, absent, or retrograde",
      "Always after the QRS",
      "Not related to the QRS"
    ],
    correct: 1,
    explanation: "In junctional rhythms, the P wave is inverted, buried (absent), or retrograde (after the QRS) because the impulse originates in the AV junction."
  },
  {
    module: "Cardiology",
    tags: ["ECG"],
    question: "Wenckebach (Second Degree Type I) heart block is characterized by:",
    options: [
      "A constant PR interval with dropped beats",
      "A PR interval that gets longer until a beat is dropped",
      "No relationship between P waves and QRS complexes",
      "A widened QRS complex"
    ],
    correct: 1,
    explanation: "Wenckebach is characterized by a PR interval that progressively lengthens until a QRS complex is dropped ('Longer, longer, longer, drop!')."
  },
  {
    module: "Cardiology",
    tags: ["ECG"],
    question: "If lead V1 shows a QRS complex that looks like 'thumbs up' (positive deflection), this suggests a:",
    options: [
      "Left Bundle Branch Block",
      "Right Bundle Branch Block",
      "Left Anterior Hemiblock",
      "Bifascicular Block"
    ],
    correct: 1,
    explanation: "Turn the V1 signal sideways; if it is 'thumbs up' (positive), it is a Right Bundle Branch Block."
  },
  {
    module: "Cardiology",
    tags: ["Pharmacology"],
    question: "Low-dose dopamine (1-2 mcg/kg/min) primarily stimulates which receptors?",
    options: ["Alpha", "Beta-1", "Beta-2", "Dopaminergic"],
    correct: 3,
    explanation: "At low doses (1-2 mcg/kg/min), dopamine stimulates dopaminergic receptors, causing renal and mesenteric artery dilation."
  },
  {
    module: "Cardiology",
    tags: ["Pharmacology"],
    question: "Moderate-dose dopamine (2-10 mcg/kg/min) primarily stimulates:",
    options: ["Alpha receptors", "Beta-1 receptors", "Beta-2 receptors", "Dopaminergic receptors"],
    correct: 1,
    explanation: "At moderate doses (2-10 mcg/kg/min), dopamine primarily stimulates Beta-1 receptors, increasing heart rate and contractility."
  },
  {
    module: "Cardiology",
    tags: ["Pharmacology"],
    question: "High-dose dopamine (10-20 mcg/kg/min) primarily stimulates:",
    options: ["Alpha receptors", "Beta-1 receptors", "Beta-2 receptors", "Dopaminergic receptors"],
    correct: 0,
    explanation: "At high doses (10-20 mcg/kg/min), dopamine primarily stimulates Alpha receptors, causing vasoconstriction."
  },
  {
    module: "Cardiology",
    tags: ["Pharmacology"],
    question: "The therapeutic action of nitroglycerin in angina is primarily due to:",
    options: [
      "Increased heart rate",
      "Increased contractility",
      "Dilation of coronary arteries and reduction of preload",
      "Constriction of peripheral vessels"
    ],
    correct: 2,
    explanation: "Nitroglycerin works by dilating the coronary arteries and reducing preload (venous return)."
  },
  {
    module: "Cardiology",
    tags: ["Pharmacology", "Toxicology"],
    question: "Digitalis toxicity typically presents with which visual disturbance?",
    options: ["Double vision", "Tunnel vision", "Yellow vision", "Red vision"],
    correct: 2,
    explanation: "Digitalis toxicity is associated with yellow vision and heart blocks."
  },
  {
    module: "Cardiology",
    tags: ["Pharmacology", "ACLS"],
    question: "The first-line drug of choice for stable Supraventricular Tachycardia (SVT) is:",
    options: ["Lidocaine", "Amiodarone", "Adenosine", "Atropine"],
    correct: 2,
    explanation: "Adenosine is the drug of choice for stable SVT."
  },
  {
    module: "Cardiology",
    tags: ["Pediatrics", "Pharmacology"],
    question: "The pediatric dose for Atropine is:",
    options: ["0.01 mg/kg", "0.02 mg/kg", "0.1 mg/kg", "0.5 mg/kg"],
    correct: 1,
    explanation: "The pediatric dose for Atropine is 0.02 mg/kg."
  },
  {
    module: "Cardiology",
    tags: ["Toxicology", "Pharmacology"],
    question: "Which drug is used to treat a beta-blocker overdose?",
    options: ["Naloxone", "Flumazenil", "Glucagon", "Atropine"],
    correct: 2,
    explanation: "Glucagon is used to treat beta-blocker overdoses."
  },
  {
    module: "Cardiology",
    tags: ["Pharmacology"],
    question: "Calcium channel blockers, such as verapamil or diltiazem, commonly cause which side effects?",
    options: [
      "Hypertension and tachycardia",
      "Hypotension and bradycardia",
      "Hypertension and bradycardia",
      "Hypotension and tachycardia"
    ],
    correct: 1,
    explanation: "Calcium channel blockers cause hypotension and bradycardia."
  },
  {
    module: "Cardiology",
    tags: ["Pharmacology"],
    question: "Morphine is beneficial in pulmonary edema primarily because it causes:",
    options: ["Bronchodilation", "Venodilation", "Arterial constriction", "Increased heart rate"],
    correct: 1,
    explanation: "Morphine causes venodilation, which reduces preload and helps alleviate pulmonary edema."
  },
  {
    module: "Cardiology",
    tags: ["Toxicology"],
    question: "Signs of lidocaine overdose include:",
    options: [
      "Bradycardia and hypotension",
      "Numbness, tingling, and seizures",
      "Tachycardia and hypertension",
      "Respiratory depression and pinpoint pupils"
    ],
    correct: 1,
    explanation: "Lidocaine overdose is characterized by numbness, tingling, and seizures."
  },
  {
    module: "Cardiology",
    tags: ["Pathology", "Trauma"],
    question: "Beck's Triad, indicative of cardiac tamponade, consists of:",
    options: [
      "Hypertension, bradycardia, irregular respirations",
      "JVD, muffled heart tones, narrowing pulse pressure",
      "Hypotension, tachycardia, flat neck veins",
      "Tracheal deviation, absent breath sounds, hypotension"
    ],
    correct: 1,
    explanation: "Beck's Triad consists of JVD, muffled heart tones, and narrowing pulse pressure."
  },
  {
    module: "Cardiology",
    tags: ["Pathology"],
    question: "Cor Pulmonale is right-sided heart failure caused by:",
    options: ["Myocardial infarction", "Systemic hypertension", "Pulmonary hypertension", "Aortic stenosis"],
    correct: 2,
    explanation: "Cor Pulmonale is right ventricular hypertrophy/failure secondary to pulmonary hypertension (often from COPD)."
  },
  {
    module: "Cardiology",
    tags: ["Assessment"],
    question: "Pulsus paradoxus is defined as a drop in systolic blood pressure of greater than 10 mmHg during:",
    options: ["Inhalation", "Exhalation", "Rest", "Exertion"],
    correct: 0,
    explanation: "Pulsus paradoxus is a decrease in systolic BP > 10 mmHg during inhalation."
  },
  {
    module: "Cardiology",
    tags: ["Pathology"],
    question: "A dissecting abdominal aortic aneurysm (AAA) is characterized by:",
    options: [
      "Crushing chest pain radiating to the jaw",
      "Tearing back/flank pain and an urge to defecate",
      "Right upper quadrant pain",
      "Epigastric pain radiating to the umbilicus"
    ],
    correct: 1,
    explanation: "AAA dissection often presents with tearing back or flank pain and an urge to defecate."
  },
  {
    module: "Cardiology",
    tags: ["Pathology"],
    question: "The number one cause of left-sided heart failure is:",
    options: ["Chronic hypertension", "Myocardial infarction (MI)", "Valve disease", "COPD"],
    correct: 1,
    explanation: "The number one cause of left-sided failure is MI."
  },
  {
    module: "Cardiology",
    tags: ["Pathology"],
    question: "Right-sided heart failure typically presents with:",
    options: [
      "Pulmonary edema and dyspnea",
      "JVD and peripheral edema",
      "Chest pain and diaphoresis",
      "Hemoptysis and stridor"
    ],
    correct: 1,
    explanation: "Right-sided failure causes blood to back up into the body, leading to JVD and peripheral edema."
  },
  {
    module: "Cardiology",
    tags: ["Pathology"],
    question: "Stokes-Adams syndrome is characterized by syncope caused by:",
    options: ["Neurogenic shock", "Intermittent heart blocks", "Hypoglycemia", "Seizures"],
    correct: 1,
    explanation: "Stokes-Adams syndrome involves syncope caused by transient heart blocks."
  },
  {
    module: "Cardiology",
    tags: ["Pathology"],
    question: "Claudication is leg pain during walking caused by:",
    options: ["Venous insufficiency", "Peripheral artery disease (PAD)", "Deep vein thrombosis", "Sciatica"],
    correct: 1,
    explanation: "Claudication is pain caused by a decrease in arterial perfusion to the calf muscles (PAD) during exercise."
  },
  {
    module: "Cardiology",
    tags: ["Physiology"],
    question: "The atrial kick contributes approximately how much to cardiac output?",
    options: ["10-15%", "20-25%", "30-40%", "50%"],
    correct: 1,
    explanation: "Atrial kick (atrial contraction) contributes 20-25% to cardiac output."
  }
];