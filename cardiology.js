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
  },
  {
    module: "Cardiology",
    tags: ["ACLS", "Pharmacology"],
    question: "Epinephrine should be repeated at what frequency for the treatment of Asystole?",
    options: ["1-2 minutes", "3-5 minutes", "5-10 minutes", "Once only"],
    correct: 1,
    explanation: "Per ACLS guidelines, Epinephrine 1mg (1:10,000) should be administered every 3-5 minutes during cardiac arrest."
  },
  {
    module: "Cardiology",
    tags: ["ACLS", "Assessment"],
    question: "You are doing CPR on a patient with PEA. You see electrical rhythm on the monitor. What should you do?",
    options: ["Defibrillate immediately", "Check for a pulse", "Administer Adenosine", "Stop CPR and monitor"],
    correct: 1,
    explanation: "If an organized electrical rhythm appears on the monitor during a pulse check, you must immediately check for a carotid pulse to determine if the patient has achieved ROSC."
  },
  {
    module: "Cardiology",
    tags: ["Pharmacology", "Pathology"],
    question: "Aspirin (ASA) treats an MI by...",
    options: ["Dissolving the existing clot", "Preventing further platelet aggregation", "Dilating the coronary arteries", "Decreasing the heart rate"],
    correct: 1,
    explanation: "Aspirin is an antiplatelet agent; it prevents platelets from sticking together (aggregation) and making the current clot larger."
  },
  {
    module: "Cardiology",
    tags: ["Pharmacology"],
    question: "In small doses, nitroglycerin acts to reduce chest pain due to myocardial ischemia by:",
    options: ["Decreasing heart rate", "Decreasing preload via venodilation", "Increasing systemic vascular resistance", "Inhibiting pain receptors"],
    correct: 1,
    explanation: "Nitroglycerin is primarily a venodilator at lower doses, which reduces the amount of blood returning to the heart (preload), thereby reducing myocardial oxygen demand."
  },
  {
    module: "Cardiology",
    tags: ["Pathology", "Assessment"],
    question: "Which symptom is most commonly associated with left-sided heart failure?",
    options: ["Jugular Vein Distention (JVD)", "Peripheral edema", "Pulmonary edema/Crackles", "Hepatic engorgement"],
    correct: 2,
    explanation: "Left-sided heart failure causes blood to back up into the lungs, leading to pulmonary edema and crackles (rales)."
  },
  {
    module: "Cardiology",
    tags: ["ECG"],
    question: "Which of the following is NOT a characteristic of V-Tach?",
    options: ["Rate usually >100 bpm", "Wide QRS complexes", "Regular rhythm", "Frequent P waves"],
    correct: 3,
    explanation: "Ventricular Tachycardia originates in the ventricles; therefore, P waves are typically absent, buried, or dissociated from the QRS."
  },
  {
    module: "Cardiology",
    tags: ["Pathology", "Vitals"],
    question: "Which of the following vital sign patterns is most commonly observed in patients with right-sided heart failure?",
    options: ["Hypotension and clear lung sounds", "Hypertension and crackles", "Bradycardia and JVD", "Narrow pulse pressure and wheezing"],
    correct: 0,
    explanation: "Right-sided heart failure presents with clear lung sounds (the problem is 'after' the lungs) and can lead to hypotension if preload to the left ventricle is severely reduced."
  },
  {
    module: "Cardiology",
    tags: ["Pathology"],
    question: "An aortic aneurysm occurs when:",
    options: ["A valve fails to close", "The wall of the aorta weakens and bulges", "The aorta becomes completely blocked", "The heart muscle thickens"],
    correct: 1,
    explanation: "An aneurysm is a localized dilation or 'ballooning' of a blood vessel caused by a weakened area in the vessel wall."
  },
  {
    module: "Cardiology",
    tags: ["Pathology", "Assessment"],
    question: "Which is NOT a diagnostic sign for pericarditis?",
    options: ["Diffuse ST elevation", "Pericardial friction rub", "Chest pain relieved by leaning forward", "JVD and muffled heart tones"],
    correct: 3,
    explanation: "JVD and muffled heart tones are part of Beck's Triad, which indicates cardiac tamponade (a potential complication of pericarditis, but not the same thing)."
  },
  {
    module: "Cardiology",
    tags: ["ECG"],
    question: "Second-degree AV block type 1 (Wenckebach) is characterized by:",
    options: ["Constant PR interval", "Progressive PR lengthening until a QRS is dropped", "More QRS complexes than P waves", "Randomly dropped QRS complexes"],
    correct: 1,
    explanation: "Wenckebach involves a progressive lengthening of the PR interval until a QRS complex is dropped."
  },
  {
    module: "Cardiology",
    tags: ["Pathology", "Risk Factors"],
    question: "Which is NOT a common cause of arteriosclerosis?",
    options: ["Hypertension", "Diabetes Mellitus", "High levels of HDL cholesterol", "Smoking"],
    correct: 2,
    explanation: "HDL (High-Density Lipoprotein) is often called 'good' cholesterol because it helps remove other forms of cholesterol from the bloodstream. Low HDL or high LDL (Low-Density Lipoprotein) are risks for arteriosclerosis."
  },
  {
    module: "Cardiology",
    tags: ["Pathology", "Assessment"],
    question: "Pitting edema in lower extremities, jugular venous distention, ascites, and hepatomegaly are related to which condition?",
    options: ["Left-sided heart failure", "Right-sided heart failure", "Pulmonary Embolism", "Pneumonia"],
    correct: 1,
    explanation: "Right-sided heart failure causes blood to back up into the systemic circulation, leading to JVD, peripheral edema, and organ engorgement (hepatomegaly/ascites)."
  },
  {
    module: "Cardiology",
    tags: ["Pathology", "Respiratory"],
    question: "Cardiac asthma is a condition in which a patient:",
    options: [
      "Develops wheezing due to bronchospasm from an allergic reaction",
      "Develops wheezing due to pulmonary congestion from left-sided heart failure",
      "Has a history of asthma that triggers a myocardial infarction",
      "Experiences shortness of breath only during exercise"
    ],
    correct: 1,
    explanation: "Cardiac asthma is not true asthma; it is wheezing caused by fluid backing up into the lungs (pulmonary edema) from a failing left ventricle."
  },
  {
    module: "Cardiology",
    tags: ["Pathology", "Genetics"],
    question: "Which of the following would be most likely to predispose a patient to develop an abdominal aortic aneurysm, and is described as a disorder of the connective tissue characterized by tall stature and aortic and mitral valve insufficiency?",
    options: ["Down Syndrome", "Marfan Syndrome", "Cushing's Syndrome", "Addison's Disease"],
    correct: 1,
    explanation: "Marfan Syndrome is a genetic connective tissue disorder that weakens the walls of major blood vessels, making patients highly susceptible to aortic aneurysms and dissections."
  },
  {
    module: "Cardiology",
    tags: ["Physiology"],
    question: "The Frank-Starling law of the heart states that:",
    options: [
      "The heart rate increases as blood pressure decreases",
      "The force of ventricular contraction is proportional to the initial length of the muscle fibers",
      "The heart will always pump exactly 5 liters of blood per minute",
      "Electrical impulses must start at the SA node to be effective"
    ],
    correct: 1,
    explanation: "The Frank-Starling law states that the more the myocardial fibers are stretched (preload), the more forcefully they will contract (increased stroke volume)."
  },
  {
    module: "Cardiology",
    tags: ["ACLS", "Operations"],
    question: "In the management of pulseless electrical activity (PEA), the initial treatment involves:",
    options: [
      "Immediate defibrillation at 200J",
      "High-quality CPR and administration of Epinephrine",
      "Synchronized cardioversion",
      "Administration of Amiodarone 300mg"
    ],
    correct: 1,
    explanation: "PEA is a non-shockable rhythm. Treatment focuses on high-quality CPR, vasopressors (Epinephrine), and identifying/treating reversible causes (H's and T's)."
  },
  {
    module: "Cardiology",
    tags: ["Pathology", "Risk Factors"],
    question: "All of the following predispose patients to having an aneurysm except:",
    options: ["Atherosclerosis", "Hypertension", "Hypotension", "Trauma"],
    correct: 2,
    explanation: "Aneurysms are caused by factors that weaken the vessel wall (atherosclerosis/trauma) or increase the pressure against it (hypertension). Hypotension does not cause the wall to bulge."
  },
  {
    module: "Cardiology",
    tags: ["Pathology", "Assessment"],
    question: "Claudication, a symptom of peripheral artery disease, is characterized by pain in the legs that occurs with exercise and is relieved by rest. To differentiate claudication from musculoskeletal pain, it is important to assess whether the pain:",
    options: [
      "Is sharp or dull",
      "Is consistent and reproducible with the same level of exertion",
      "Radiates to the lower back",
      "Is relieved by changing position"
    ],
    correct: 1,
    explanation: "Arterial claudication is highly predictable; it occurs after the same amount of exercise and disappears quickly with rest, unlike most musculoskeletal injuries."
  },
  {
    module: "Cardiology",
    tags: ["Pathology"],
    question: "Which of the following best describes the impact of Coronary Artery Disease (CAD) on heart function?",
    options: [
      "It improves blood flow by hardening the vessels",
      "It narrows the coronary arteries, reducing oxygen delivery to the myocardium",
      "It causes the heart to grow new, more efficient valves",
      "It primarily affects the electrical system, not the blood supply"
    ],
    correct: 1,
    explanation: "CAD involves the buildup of plaque in the coronary arteries, which restricts blood flow and can lead to ischemia (angina) or infarction (MI)."
  },
  {
    module: "Cardiology",
    tags: ["Pathology", "Physiology"],
    question: "What physiological change occurs in the heart as a result of Cor Pulmonale?",
    options: [
      "Left ventricular hypertrophy",
      "Right ventricular hypertrophy and failure",
      "Dilation of the mitral valve",
      "Thinning of the atrial walls"
    ],
    correct: 1,
    explanation: "Cor Pulmonale is right ventricular hypertrophy and eventual failure caused by high pressure in the pulmonary arteries, often due to chronic lung disease."
  },
  {
    module: "Cardiology",
    tags: ["Physiology", "Heart Failure"],
    question: "There are 4 major changes to a patient's cardiovascular system that will decrease cardiac output and lead to heart failure. Which of the following is NOT one of those changes?",
    options: [
      "Increased afterload",
      "Increased preload",
      "Decreased contractility",
      "Increased heart rate"
    ],
    correct: 3,
    explanation: "Heart failure is generally driven by impaired contractility, excessive preload (volume), or high afterload (resistance). While tachycardia often occurs as a compensation, it is not a primary cause of the failure itself."
  },
  {
    module: "Cardiology",
    tags: ["Pathology", "Genetics"],
    question: "Which of the following statements accurately describes the relationship between Marfan Syndrome and cardiovascular complications?",
    options: [
      "It causes hardening of the coronary arteries",
      "It results in connective tissue weakness, predisposing patients to aortic aneurysms",
      "It primarily leads to electrical conduction blocks",
      "It is the leading cause of pediatric myocardial infarction"
    ],
    correct: 1,
    explanation: "Marfan Syndrome is a connective tissue disorder that weakens the aortic wall, significantly increasing the risk of aortic dissection and aneurysms."
  },
  {
    module: "Cardiology",
    tags: ["Pharmacology"],
    question: "What is the primary mechanism of action of calcium channel blockers in the treatment of cardiovascular conditions?",
    options: [
      "Increasing sodium influx to speed up the heart rate",
      "Inhibiting calcium ion influx to decrease contractility and cause vasodilation",
      "Blocking beta receptors to prevent adrenaline from binding",
      "Stimulating the Vagus nerve to slow conduction"
    ],
    correct: 1,
    explanation: "Calcium channel blockers inhibit the movement of calcium into cardiac and smooth muscle cells, leading to decreased heart rate, reduced contractility, and vasodilation."
  },
  {
    module: "Cardiology",
    tags: ["Physiology", "ECG"],
    question: "What physiological event marks the onset of the relative refractory period in cardiac action potentials?",
    options: [
      "The beginning of the P wave",
      "The peak of the T wave",
      "The down-slope of the T wave",
      "The beginning of the QRS complex"
    ],
    correct: 2,
    explanation: "The relative refractory period occurs during the down-slope of the T wave, where a strong enough stimulus can trigger a premature and potentially dangerous contraction (R on T phenomenon)."
  },
  {
    module: "Cardiology",
    tags: ["Pathology", "Risk Factors"],
    question: "Which of the following is NOT a leading cause of arteriosclerosis?",
    options: [
      "Hypertension",
      "Smoking",
      "High HDL levels",
      "Diabetes Mellitus"
    ],
    correct: 2,
    explanation: "High levels of HDL (High-Density Lipoprotein) are considered protective against arteriosclerosis; low HDL or high LDL are the actual risk factors."
  },
  {
    module: "Cardiology",
    tags: ["Pathology", "Assessment"],
    question: "Which of the following is NOT a typical symptom of an MI?",
    options: [
      "Diaphoresis",
      "Nausea and vomiting",
      "Sharp pain that increases with inspiration",
      "Radiating pain to the jaw or left arm"
    ],
    correct: 2,
    explanation: "Pain that changes with inspiration (pleuritic pain) is more common in pericarditis or pulmonary issues; MI pain is typically constant, crushing pressure."
  },
  {
    module: "Cardiology",
    tags: ["Physiology"],
    question: "Starling's Law of the Heart relates:",
    options: [
      "Heart rate to blood pressure",
      "Stroke volume to the end-diastolic volume (stretch)",
      "Oxygen consumption to respiratory rate",
      "Electrical conductivity to electrolyte levels"
    ],
    correct: 1,
    explanation: "Starling's Law states that the force of ventricular contraction is determined by the degree to which the muscle fibers are stretched by incoming blood (preload)."
  },
  {
    module: "Cardiology",
    tags: ["Pharmacology", "Physiology"],
    question: "A patient has been administered epinephrine. Subsequent stimulation of beta1-adrenergic receptors in the heart results in:",
    options: [
      "Bronchodilation and vasodilation",
      "Increased heart rate and contractility",
      "Vasoconstriction and increased blood pressure",
      "Decreased conduction through the AV node"
    ],
    correct: 1,
    explanation: "Beta-1 receptors are primarily located in the heart; their stimulation increases heart rate (chronotropy), contractility (inotropy), and conduction speed (dromotropy)."
  },
  {
    module: "Cardiology",
    tags: ["Pathology", "Assessment"],
    question: "Which of the following is NOT a common sign or symptom of left-sided heart failure?",
    options: [
      "Dyspnea on exertion",
      "Pulmonary crackles (rales)",
      "Jugular Vein Distention (JVD)",
      "Orthopnea"
    ],
    correct: 2,
    explanation: "JVD is a classic sign of right-sided heart failure; left-sided failure primarily manifests as respiratory symptoms due to fluid backing up into the lungs."
  },
  {
    module: "Cardiology",
    tags: ["Pathology", "Assessment"],
    question: "Which of the following symptoms is commonly associated with an abdominal aortic aneurysm (AAA)?",
    options: [
      "Crushing retrosternal chest pain",
      "Pulsatile mass in the abdomen and tearing back pain",
      "Productive cough with pink frothy sputum",
      "Yellow vision and bradycardia"
    ],
    correct: 1,
    explanation: "AAA often presents with a pulsating mass near the umbilicus and deep, tearing pain in the back or abdomen."
  }, 
  {
    module: "Cardiology",
    tags: ["Pathology", "Assessment"],
    question: "Which of the following best describes an aortic aneurysm and its associated symptoms?",
    options: [
      "A narrowing of the aorta causing high blood pressure in the arms",
      "A localized dilation of the arterial wall that is often asymptomatic until it expands or ruptures",
      "A complete blockage of the aorta causing immediate lower limb paralysis",
      "An inflammation of the aortic valve causing a loud murmur"
    ],
    correct: 1,
    explanation: "An aortic aneurysm is a weakened, bulging area in the wall of the aorta; it often remains silent until it grows large enough to cause pain or ruptures."
  },
  {
    module: "Cardiology",
    tags: ["ECG"],
    question: "Idioventricular Rhythm can be described as all of the following EXCEPT:",
    options: [
      "Rate of 20-40 beats per minute",
      "Wide and bizarre QRS complexes",
      "Regularity in the rhythm",
      "Presence of upright P waves before every QRS"
    ],
    correct: 3,
    explanation: "Idioventricular rhythm originates in the ventricles, so P waves are absent because the SA and AV nodes are not controlling the heart rate."
  },
  {
    module: "Cardiology",
    tags: ["Pathology", "Risk Factors"],
    question: "What is the most common cause of atherosclerosis?",
    options: [
      "Chronic low blood pressure",
      "High intake of vitamin C",
      "Injury to the endothelial lining often caused by hypertension and high cholesterol",
      "Genetic absence of cardiac valves"
    ],
    correct: 2,
    explanation: "Atherosclerosis typically begins with damage to the inner layer of an artery (endothelium), leading to the accumulation of plaque over time."
  },
  {
    module: "Cardiology",
    tags: ["Pathology", "Diagnostics"],
    question: "A patient presents to the emergency room reporting severe back pain and shortness of breath. A CT scan would most likely reveal an aneurysm in the:",
    options: [
      "Abdominal aorta",
      "Thoracic aorta",
      "Carotid artery",
      "Femoral artery"
    ],
    correct: 1,
    explanation: "A thoracic aortic aneurysm is more likely to cause chest or back pain and shortness of breath due to its proximity to the lungs and chest wall."
  },
  {
    module: "Cardiology",
    tags: ["ACLS", "ECG"],
    question: "Which dysrhythmia is frequently observed following successful re-perfusion therapy in patients with myocardial infarction?",
    options: [
      "Accelerated Idioventricular Rhythm (AIVR)",
      "Supraventricular Tachycardia (SVT)",
      "Wenckebach",
      "Asystole"
    ],
    correct: 0,
    explanation: "AIVR is often called a 'reperfusion arrhythmia' and is a common, usually benign sign that blood flow has been restored to the heart muscle."
  },
  {
    module: "Cardiology",
    tags: ["Pathology"],
    question: "An aortic aneurysm is defined as:",
    options: [
      "A tear in the inner layer of the aortic wall",
      "A localized dilation of the aorta to at least 1.5 times its normal diameter",
      "The buildup of calcium on the aortic valve",
      "A congenital narrowing of the aortic arch"
    ],
    correct: 1,
    explanation: "An aneurysm is a permanent localized dilation of an artery having at least a 50% increase in diameter compared with the expected normal diameter."
  },
  {
    module: "Cardiology",
    tags: ["Pathology", "ECG"],
    question: "What condition is characterized by diffuse ST segment elevation in multiple leads and may be accompanied by pleuritic chest pain and a pericardial friction rub?",
    options: [
      "Acute Myocardial Infarction",
      "Stable Angina",
      "Pericarditis",
      "Left Bundle Branch Block"
    ],
    correct: 2,
    explanation: "Pericarditis typically shows 'global' or diffuse ST elevation across most leads, unlike an MI which is localized to specific vascular territories."
  },
  {
    module: "Cardiology",
    tags: ["Pathology", "Assessment"],
    question: "Signs of right-sided heart failure are associated with all of the following EXCEPT:",
    options: [
      "Jugular Venous Distention (JVD)",
      "Peripheral pitting edema",
      "Pulmonary edema and crackles",
      "Hepatomegaly (enlarged liver)"
    ],
    correct: 2,
    explanation: "Pulmonary edema and crackles are hallmark signs of left-sided heart failure; right-sided failure backs up into the body, not the lungs."
  },
  {
    module: "Cardiology",
    tags: ["Pathology", "Assessment"],
    question: "What clinical signs are indicative of cardiac tamponade, often referred to as Beck's Triad?",
    options: [
      "Hypertension, bradycardia, and irregular respirations",
      "Hypotension, JVD, and muffled heart tones",
      "Tachycardia, wheezing, and pale skin",
      "Narrow pulse pressure, fever, and chest pain"
    ],
    correct: 1,
    explanation: "Beck's Triad consists of three classic signs: muffled heart sounds, JVD, and hypotension."
  },
  {
    module: "Cardiology",
    tags: ["ECG"],
    question: "Unlike an idioventricular rhythm, an agonal rhythm:",
    options: [
      "Is faster than 40 beats per minute",
      "Is characterized by narrow QRS complexes",
      "Is an extremely slow, irregular ventricular rhythm seen in dying patients",
      "Always produces a palpable pulse"
    ],
    correct: 2,
    explanation: "Agonal rhythms are terminal events where the heart's electrical system is failing, resulting in very slow and irregular ventricular complexes."
  },
  {
    module: "Cardiology",
    tags: ["Pathology", "Assessment"],
    question: "Angina pectoris is:",
    options: [
      "Permanent damage to the heart muscle due to lack of oxygen",
      "Chest pain or discomfort that occurs when the heart muscle does not get enough blood",
      "A sharp, stabbing pain caused by inflammation of the pericardium",
      "The clinical term for a total blockage of a coronary artery"
    ],
    correct: 1,
    explanation: "Angina pectoris is the medical term for chest pain or discomfort caused by myocardial ischemia, which is a temporary lack of oxygen to the heart muscle."
  },
  {
    module: "Cardiology",
    tags: ["ECG", "Pathology"],
    question: "The following SVT occurs more often in younger women and may be comorbid with WPW:",
    options: [
      "Atrial Fibrillation",
      "Atrioventricular Nodal Reentrant Tachycardia (AVNRT)",
      "Atrial Flutter",
      "Junctional Tachycardia"
    ],
    correct: 1,
    explanation: "AVNRT is the most common regular SVT, frequently appearing in younger women, and involves a reentry circuit that can be associated with accessory pathways like those in Wolff-Parkinson-White syndrome."
  },
  {
    module: "Cardiology",
    tags: ["Pathology"],
    question: "Which pathological process is primarily responsible for the narrowing of coronary arteries in Coronary Artery Disease (CAD)?",
    options: [
      "Vasodilation of the tunica media",
      "Atherosclerosis (accumulation of plaque)",
      "Thinning of the endothelial lining",
      "Excessive production of red blood cells"
    ],
    correct: 1,
    explanation: "CAD is primarily caused by atherosclerosis, where plaque builds up inside the coronary arteries, restricting blood flow to the heart muscle."
  },
  {
    module: "Cardiology",
    tags: ["Pharmacology"],
    question: "Which of the following is a common adverse effect associated with the use of calcium channel blockers?",
    options: [
      "Hypertension and tachycardia",
      "Hypotension and bradycardia",
      "Hyperglycemia and seizures",
      "Visual disturbances and yellow halos"
    ],
    correct: 1,
    explanation: "Calcium channel blockers slow the heart rate and cause vasodilation, which can lead to the side effects of low blood pressure and a slow heart rate."
  },
  {
    module: "Cardiology",
    tags: ["Pathology", "Assessment"],
    question: "Which statement accurately describes the primary difference between stable angina and myocardial infarction (MI)?",
    options: [
      "Angina pain lasts longer than 30 minutes",
      "Angina is relieved by rest or nitroglycerin, while MI pain typically is not",
      "Angina involves permanent tissue necrosis, while MI does not",
      "Angina only occurs in the legs, while MI occurs in the chest"
    ],
    correct: 1,
    explanation: "Stable angina is predictable and relieved by rest or medication; an MI involves actual death of heart tissue and the pain typically does not resolve with simple rest."
  },
  {
    module: "Cardiology",
    tags: ["ACLS", "Pathology"],
    question: "In the case of a patient experiencing cardiac arrest with a confirmed diagnosis of an abdominal aortic aneurysm (AAA) and presenting an idioventricular rhythm, what is the recommended initial management approach?",
    options: [
      "Immediate synchronized cardioversion",
      "High-quality CPR and identifying reversible causes",
      "Administration of high-dose Atropine",
      "Immediate surgical intervention on-scene"
    ],
    correct: 1,
    explanation: "Initial management of cardiac arrest with an idioventricular rhythm (a form of PEA) focuses on high-quality CPR and addressing the underlying cause, which in this case is likely catastrophic hypovolemia from the AAA."
  },
  {
    module: "Cardiology",
    tags: ["Pathology", "Assessment"],
    question: "Back pain, nausea, and weak femoral pulses are symptoms of what aneurysm location?",
    options: [
      "Thoracic aorta",
      "Abdominal aorta",
      "Cerebral artery",
      "Carotid artery"
    ],
    correct: 1,
    explanation: "Weak or absent femoral pulses combined with abdominal or back pain are classic indicators of an abdominal aortic aneurysm (AAA) that is expanding or dissecting."
  },
  {
    module: "Cardiology",
    tags: ["ECG"],
    question: "Which of the following best describes the key feature of junctional rhythms in an electrocardiogram (ECG)?",
    options: [
      "Wide and bizarre QRS complexes",
      "Absent, inverted, or retrograde P waves",
      "A PR interval greater than 0.20 seconds",
      "A heart rate consistently above 150 bpm"
    ],
    correct: 1,
    explanation: "In junctional rhythms, the impulse originates in the AV junction, meaning P waves are often inverted, buried in the QRS, or appear immediately after it."
  },
  {
    module: "Cardiology",
    tags: ["Pharmacology", "Pathology"],
    question: "A patient has an MI, CHF, and pulmonary edema. At the ICU they are started on nitroglycerin, why?",
    options: [
      "To increase heart rate and cardiac output",
      "To reduce preload and myocardial oxygen demand",
      "To cause systemic vasoconstriction and raise BP",
      "To directly dissolve the coronary clot"
    ],
    correct: 1,
    explanation: "Nitroglycerin acts as a venodilator, reducing preload (the amount of blood returning to the heart), which helps alleviate pulmonary edema and lowers the workload on the damaged heart muscle."
  },
  {
    module: "Cardiology",
    tags: ["Pathology"],
    question: "What is an MI?",
    options: [
      "A temporary narrowing of the heart valves",
      "Death of heart muscle tissue due to prolonged lack of oxygen",
      "An infection of the inner lining of the heart chambers",
      "A sudden drop in blood pressure caused by dehydration"
    ],
    correct: 1,
    explanation: "A Myocardial Infarction (MI) occurs when blood flow to a part of the heart is blocked long enough that the heart muscle begins to die (necrosis)."
  },
  {
    module: "Cardiology",
    tags: ["Physiology"],
    question: "According to Starling's Law, what is the primary determinant of stroke volume?",
    options: [
      "The heart rate at the time of contraction",
      "The volume of blood entering the heart during diastole (preload)",
      "The systemic vascular resistance (afterload)",
      "The level of circulating epinephrine"
    ],
    correct: 1,
    explanation: "Starling's Law states that the greater the volume of blood entering the heart during diastole (end-diastolic volume), the greater the volume of blood ejected during systolic contraction (stroke volume)."
  },
  {
    module: "Cardiology",
    tags: ["Physics", "Physiology"],
    question: "Poiseuille’s Law suggests that fluid flow through a vessel is most significantly affected by which factor?",
    options: [
      "The length of the vessel",
      "The viscosity of the blood",
      "The diameter of the vessel",
      "The temperature of the fluid"
    ],
    correct: 2,
    explanation: "Poiseuille’s Law states that the larger the diameter of a tube, the more fluid can flow through it, increased to the 4th power."
  },
  {
    module: "Cardiology",
    tags: ["Vitals"],
    question: "Pulse pressure is mathematically defined as:",
    options: [
      "The sum of systolic and diastolic pressures",
      "The difference between systolic and diastolic pressures",
      "One-third of the systolic pressure",
      "The average pressure throughout the cardiac cycle"
    ],
    correct: 1,
    explanation: "Pulse pressure is the numerical difference between the systolic and diastolic blood pressure readings."
  },
  {
    module: "Cardiology",
    tags: ["Vitals"],
    question: "What is considered the normal range for Mean Arterial Pressure (MAP)?",
    options: [
      "40 - 60 mmHg",
      "70 - 100 mmHg",
      "110 - 140 mmHg",
      "60 - 80 mmHg"
    ],
    correct: 1,
    explanation: "The normal range for Mean Arterial Pressure (MAP) is typically between 70 and 100 mmHg."
  },
  {
    module: "Cardiology",
    tags: ["Neurology", "Anatomy"],
    question: "Which structure provides the sympathetic nervous system connection to the heart?",
    options: [
      "The Vagus Nerve",
      "The Cardiac Plexus",
      "The Phrenic Nerve",
      "The Medulla Oblongata"
    ],
    correct: 1,
    explanation: "The Cardiac Plexus, situated near the arch of the aorta, supplies the heart with its sympathetic nervous system connections, while the Vagus nerve provides parasympathetic input."
  },
  {
    module: "Cardiology",
    tags: ["Physiology", "Renal"],
    question: "In the Renin-Angiotensin system, what is the role of Angiotensin-Converting Enzyme (ACE)?",
    options: [
      "It converts Angiotensinogen into Renin",
      "It converts Angiotensin 1 into Angiotensin 2",
      "It causes the kidneys to secrete more Renin",
      "It directly triggers the release of Aldosterone"
    ],
    correct: 1,
    explanation: "The kidneys secrete renin to create Angiotensin 1; the lungs then secrete ACE to change Angiotensin 1 into Angiotensin 2."
  },
  {
    module: "Cardiology",
    tags: ["Physiology", "Endocrine"],
    question: "How does Angiotensin 2 work to increase blood pressure?",
    options: [
      "By causing systemic vasodilation",
      "By inhibiting the release of Aldosterone",
      "By causing vasoconstriction and stimulating Aldosterone to retain water",
      "By decreasing the heart rate"
    ],
    correct: 2,
    explanation: "Angiotensin 2 causes potent vasoconstriction and triggers the adrenals to secrete aldosterone, which causes the body to retain water, both of which raise blood pressure."
  },
  {
    module: "Cardiology",
    tags: ["ACLS", "Assessment"],
    question: "What is the appropriate prehospital care for a patient in Atrial Flutter who is hemodynamically stable (no signs of shock)?",
    options: [
      "Immediate synchronized cardioversion at 50J",
      "Administration of Adenosine 6mg rapid IV push",
      "IV access, O2, supportive care, and transport",
      "Vagal maneuvers and immediate pacing"
    ],
    correct: 2,
    explanation: "A stable patient in atrial flutter without signs of shock requires standard supportive care: IV, oxygen if indicated, monitoring, and transport."
  },
  {
    module: "Cardiology",
    tags: ["Physiology", "ECG"],
    question: "During the absolute refractory period, which of the following is true?",
    options: [
      "The heart can be stimulated by a very strong electrical impulse",
      "Myocytes are unable to fire or conduct an impulse regardless of stimulus",
      "The heart is in a state of hyper-excitability",
      "It corresponds exactly with the P-wave on an ECG"
    ],
    correct: 1,
    explanation: "The absolute refractory period is a short time after depolarization where myocytes are not yet repolarized and cannot fire or conduct an impulse; a heartbeat cannot be generated during this time."
  },
  {
    module: "Cardiology",
    tags: ["Shock", "Pharmacology"],
    question: "Which medication is the primary choice for treating Cardiogenic Shock with hypotension?",
    options: [
      "Amiodarone 150mg",
      "Dopamine 2-20 mcg/kg/min",
      "Nitroglycerin 0.4mg",
      "Atropine 1mg"
    ],
    correct: 1,
    explanation: "Cardiogenic shock is caused by cardiac origin where the heart cannot meet metabolic demands; Dopamine (2-20 mcg/kg/min) is the primary drug used to increase BP and contractility."
  },
  {
    module: "Cardiology",
    tags: ["Shock", "Assessment"],
    question: "When managing a patient in cardiogenic shock, in what order should you address clinical issues?",
    options: [
      "BP, then Rate, then Rhythm",
      "Rate, then BP, then Rhythm",
      "Rhythm, then BP, then Rate",
      "Rate, then Rhythm, then BP"
    ],
    correct: 1,
    explanation: "When treating cardiac-driven emergencies like cardiogenic shock, remember the order of priority: Treat the RATE first, then the BP, and then the RHYTHM."
  }
];
