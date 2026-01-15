const CLINICAL_JUDGMENT_QUESTIONS = [
  {
   module: "ClinicalJudgment",
    tags: ["Trauma", "Cardiology"],
    question: "A patient with blunt chest trauma presents with hypotension, JVD, and muffled heart tones. You suspect cardiac tamponade. Which finding would help differentiate this from a tension pneumothorax?",
    options: [
      "Narrowing pulse pressure",
      "Tracheal deviation",
      "Absent breath sounds",
      "Subcutaneous emphysema"
    ],
    correct: 0,
    explanation: "Cardiac tamponade presents with Beck's Triad (JVD, muffled tones, narrowing pulse pressure). Tension pneumothorax presents with JVD, hypotension, but also tracheal deviation and absent breath sounds, which are not typical of tamponade."
  },
  {
   module: "ClinicalJudgment",
    tags: ["Toxicology", "Pharmacology"],
    question: "You are treating a patient with suspected organophosphate poisoning who is seizing. You have administered Atropine. What medication should be considered next to address the underlying enzyme inhibition?",
    options: [
      "Naloxone",
      "Pralidoxime (2-PAM)",
      "Flumazenil",
      "Sodium Bicarbonate"
    ],
    correct: 1,
    explanation: "Atropine manages the muscarinic effects (drying secretions), but Pralidoxime (2-PAM) is needed to reactivate cholinesterase and treat the nicotinic effects (muscle weakness/paralysis)."
  },
  {
   module: "ClinicalJudgment",
    tags: ["Cardiology", "Pharmacology"],
    question: "A patient presents with chest pain and a 12-lead ECG showing ST elevation in leads II, III, and aVF. The patient is hypotensive. Which medication is contraindicated?",
    options: [
      "Aspirin",
      "Fentanyl",
      "Nitroglycerin",
      "Normal Saline"
    ],
    correct: 2,
    explanation: "Inferior wall MIs (II, III, aVF) often involve the right ventricle, which is preload-dependent. Nitroglycerin reduces preload and can cause severe hypotension in these patients."
  },
  {
   module: "ClinicalJudgment",
    tags: ["Pediatrics", "Airway"],
    question: "A child presents with a high fever, drooling, and distress. You suspect epiglottitis. What is your priority action?",
    options: [
      "Visualize the airway with a laryngoscope",
      "Keep the child calm and transport in a position of comfort",
      "Attempt immediate intubation",
      "Insert an OPA"
    ],
    correct: 1,
    explanation: "Agitating a child with epiglottitis can cause laryngospasm and total airway obstruction. Visualization and invasive procedures should be avoided unless the airway is already lost."
  },
  {
   module: "ClinicalJudgment",
    tags: ["Trauma", "Shock"],
    question: "A trauma patient has cool, clammy skin above the nipple line but warm, dry skin below. Their heart rate is 54 and BP is 80/40. What type of shock do you suspect?",
    options: [
      "Hypovolemic",
      "Septic",
      "Neurogenic",
      "Cardiogenic"
    ],
    correct: 2,
    explanation: "Neurogenic shock causes loss of sympathetic tone below the injury, leading to vasodilation (warm/dry skin) and preventing tachycardia (bradycardia), unlike hypovolemic shock."
  },
  {
   module: "ClinicalJudgment",
    tags: ["Endocrine", "Acid-Base"],
    question: "A diabetic patient is unconscious with deep, rapid respirations and a fruity odor on their breath. You suspect DKA. What is the physiological purpose of their breathing pattern?",
    options: [
      "To increase oxygen saturation",
      "To blow off excess CO2 to correct metabolic acidosis",
      "To retain heat",
      "To correct respiratory alkalosis"
    ],
    correct: 1,
    explanation: "Kussmaul respirations are a compensatory mechanism to expel CO2 (an acid) to counteract the metabolic acidosis caused by ketones."
  },
  {
   module: "ClinicalJudgment",
    tags: ["Cardiology", "ACLS"],
    question: "You are treating a patient with a wide-complex tachycardia who is stable. You suspect VT. If the rhythm was actually SVT with aberrancy (a conduction block), which drug would be safe for both, but Adenosine might be risky for VT?",
    options: [
      "Amiodarone",
      "Adenosine",
      "Diltiazem",
      "Digoxin"
    ],
    correct: 0,
    explanation: "Amiodarone is generally safe for both VT and SVT with aberrancy. Adenosine is the first line for SVT but can sometimes cause deterioration in VT."
  },
  {
   module: "ClinicalJudgment",
    tags: ["Trauma", "Assessment"],
    question: "A patient has a suspected pelvic fracture and is hypotensive. Which assessment technique should you AVOID?",
    options: [
      "Visual inspection",
      "Palpation of the femoral pulses",
      "Rocking the pelvis",
      "Gentle inward compression of the iliac crests"
    ],
    correct: 2,
    explanation: "Rocking the pelvis can disrupt clots and worsen internal bleeding. Assessment should be gentle and performed only once."
  },
  {
   module: "ClinicalJudgment",
    tags: ["Environmental", "Diving"],
    question: "A scuba diver surfaces and immediately complains of joint pain and difficulty breathing. You suspect decompression sickness. What is the definitive treatment?",
    options: [
      "High flow oxygen",
      "IV fluids",
      "Hyperbaric chamber",
      "Left lateral recumbent positioning"
    ],
    correct: 2,
    explanation: "While O2 and fluids are supportive, the definitive treatment to re-dissolve nitrogen bubbles is recompression in a hyperbaric chamber."
  },
  {
   module: "ClinicalJudgment",
    tags: ["Cardiology", "Pathology"],
    question: "A patient with a history of COPD presents with right-sided heart failure (Cor Pulmonale). Which finding would you expect?",
    options: [
      "Flash pulmonary edema",
      "JVD and peripheral edema",
      "S3 gallop",
      "Crackles in all fields"
    ],
    correct: 1,
    explanation: "Right-sided failure causes backup into the systemic circulation, leading to JVD and pedal edema, unlike left-sided failure which causes pulmonary edema."
  },
  {
   module: "ClinicalJudgment",
    tags: ["Safety", "HazMat"],
    question: "You respond to a chemical spill. Patients are staggering out of the building. What is your FIRST priority?",
    options: [
      "Triage the patients",
      "Begin decontamination",
      "Park upwind and uphill",
      "Administer oxygen"
    ],
    correct: 2,
    explanation: "Scene safety is the first priority. You must park safely (upwind/uphill) before attempting any patient care or decontamination."
  },
  {
   module: "ClinicalJudgment",
    tags: ["OB/GYN", "Pharmacology"],
    question: "A pregnant patient in her third trimester presents with a seizure. You suspect Eclampsia. What is the correct magnesium sulfate dose?",
    options: [
      "2g IV",
      "4g IV",
      "1g IM",
      "500mg IV"
    ],
    correct: 1,
    explanation: "The standard dose for eclamptic seizures is 4 grams of Magnesium Sulfate over 10 minutes."
  },
  {
   module: "ClinicalJudgment",
    tags: ["Respiratory", "Pathology"],
    question: "A patient with a history of asthma presents with 'silent chest' (no breath sounds). What does this indicate?",
    options: [
      "Resolution of the attack",
      "Severe bronchoconstriction and imminent respiratory arrest",
      "Pneumothorax",
      "Mild exacerbation"
    ],
    correct: 1,
    explanation: "'Silent chest' in an asthmatic indicates so little air movement that wheezing cannot be generated. It is a sign of imminent failure."
  },
  {
   module: "ClinicalJudgment",
    tags: ["Pediatrics", "Trauma"],
    question: "A 7-year-old child has fallen. He is apathetic and not crying despite an obvious deformity to his arm. What should you suspect?",
    options: [
      "Shock",
      "Head injury",
      "Child abuse",
      "Hypoglycemia"
    ],
    correct: 2,
    explanation: "The Pearls state: 'If an injured child is apathetic and does not cry, think child abuse - when hurt, kids should cry'."
  },
  {
   module: "ClinicalJudgment",
    tags: ["Infectious Disease", "Safety"],
    question: "A patient presents with fever, nuchal rigidity, and a petechial rash. What is your most immediate concern for your own safety?",
    options: [
      "Needlestick injury",
      "Airborne/Droplet transmission of Meningitis",
      "Bloodborne pathogens",
      "Contact dermatitis"
    ],
    correct: 1,
    explanation: "These signs suggest Meningococcal Meningitis, which is highly contagious via droplets. Proper PPE (mask) is critical."
  },
  {
   module: "ClinicalJudgment",
    tags: ["Cardiology", "Pathology"],
    question: "A patient with a history of hypertension presents with a 'tearing' pain between the shoulder blades. BP is unequal in the arms. You suspect:",
    options: [
      "Myocardial Infarction",
      "Pulmonary Embolism",
      "Aortic Dissection",
      "Pneumothorax"
    ],
    correct: 2,
    explanation: "Tearing pain to the back and unequal pulses/BP are hallmark signs of a thoracic aortic dissection."
  },
  {
   module: "ClinicalJudgment",
    tags: ["Neurology", "Vitals"],
    question: "A patient with a head injury has a BP of 180/100, HR of 50, and irregular respirations. This pattern is known as:",
    options: [
      "Beck's Triad",
      "Cushing's Reflex",
      "Shock Index",
      "Horner's Syndrome"
    ],
    correct: 1,
    explanation: "Cushing's Reflex (HTN, Bradycardia, Irregular Respirations) indicates increased intracranial pressure (ICP)."
  },
  {
   module: "ClinicalJudgment",
    tags: ["Toxicology", "Pharmacology"],
    question: "You are treating a patient with a tricyclic antidepressant (Amitriptyline) overdose. The ECG shows wide QRS complexes. What is the treatment of choice to narrow the QRS?",
    options: [
      "Lidocaine",
      "Amiodarone",
      "Sodium Bicarbonate",
      "Magnesium Sulfate"
    ],
    correct: 2,
    explanation: "Sodium Bicarbonate is the antidote for the cardiac toxicity (sodium channel blocking) of TCA overdoses."
  },
  {
   module: "ClinicalJudgment",
    tags: ["Trauma", "Airway"],
    question: "You are ventilating a patient and notice increasing resistance. The patient has distended neck veins and tracheal deviation. You suspect a tension pneumothorax. What is your immediate action?",
    options: [
      "Needle Decompression",
      "Increase PEEP",
      "Suction the airway",
      "Administer a bronchodilator"
    ],
    correct: 0,
    explanation: "Signs of tension pneumothorax (hemodynamic compromise, deviation) require immediate decompression, not just supportive care."
  },
  {
   module: "ClinicalJudgment",
    tags: ["Trauma", "Burns"],
    question: "A patient with a chemical burn from dry lime powder should be managed by:",
    options: [
      "Flushing immediately with water",
      "Brushing off the powder before flushing",
      "Applying a neutralizing acid",
      "Covering with an occlusive dressing"
    ],
    correct: 1,
    explanation: "Water can activate dry chemicals like lime, causing heat. Brush first, then flush with copious water."
  },
  {
   module: "ClinicalJudgment",
    tags: ["Trauma", "Abdominal"],
    question: "A patient presents with left shoulder pain (Kehr's sign) after a fall. You should strongly suspect injury to the:",
    options: [
      "Liver",
      "Stomach",
      "Spleen",
      "Kidney"
    ],
    correct: 2,
    explanation: "Kehr's sign is referred pain to the left shoulder due to diaphragmatic irritation, commonly from a ruptured spleen."
  },
  {
   module: "ClinicalJudgment",
    tags: ["Toxicology", "Cardiology"],
    question: "A patient on digitalis presents with nausea, vomiting, and 'yellow vision'. Their ECG shows a heart block. You suspect:",
    options: [
      "Digitalis toxicity",
      "Hyperkalemia",
      "Stroke",
      "Retinal detachment"
    ],
    correct: 0,
    explanation: "Yellow/green vision (xanthopsia) and arrhythmias are classic signs of Digoxin toxicity."
  },
  {
   module: "ClinicalJudgment",
    tags: ["Trauma", "Thoracic"],
    question: "A patient has an open chest wound that is bubbling. You apply an occlusive dressing. Minutes later, the patient becomes hypotensive and more short of breath. You should:",
    options: [
      "Perform needle decompression immediately",
      "Burp (lift) the dressing to release air",
      "Intubate the patient",
      "Add more layers to the dressing"
    ],
    correct: 1,
    explanation: "The occlusive dressing may have created a tension pneumothorax by trapping air. 'Burping' the dressing is the first, least invasive fix."
  },
  {
   module: "ClinicalJudgment",
    tags: ["OB/GYN", "Assessment"],
    question: "A 22-year-old female presents with lower abdominal pain and a 'shuffling' gait. You suspect Pelvic Inflammatory Disease (PID). This gait is used to:",
    options: [
      "Relieve back pressure",
      "Minimize abdominal jarring/pain",
      "Prevent syncope",
      "Mask the pain"
    ],
    correct: 1,
    explanation: "The 'PID Shuffle' minimizes movement of the inflamed pelvic organs."
  },
  {
   module: "ClinicalJudgment",
    tags: ["Cardiology", "Pharmacology"],
    question: "You are treating a patient with symptomatic bradycardia. You try Atropine but it is ineffective. The patient has a history of heart transplant. Why did Atropine fail?",
    options: [
      "Transplanted hearts are denervated (no Vagus nerve connection)",
      "Atropine dose was too low",
      "The patient is on beta blockers",
      "Transplanted hearts do not respond to drugs"
    ],
    correct: 0,
    explanation: "Atropine works by blocking the Vagus nerve. A transplanted heart has no Vagus nerve connection, so Atropine will not work."
  },
  {
   module: "ClinicalJudgment",
    tags: ["Trauma", "Airway"],
    question: "A patient has a suspected basilar skull fracture. Which airway adjunct is CONTRAINDICATED?",
    options: [
      "Oropharyngeal Airway (OPA)",
      "Nasopharyngeal Airway (NPA)",
      "Supraglottic Airway",
      "Endotracheal Tube"
    ],
    correct: 1,
    explanation: "An NPA could potentially pass through a fracture in the cribriform plate into the brain."
  },
  {
   module: "ClinicalJudgment",
    tags: ["Endocrine", "Assessment"],
    question: "You are treating a patient with suspected Addisonian Crisis (Adrenal Insufficiency). Besides fluids, what is a critical consideration?",
    options: [
      "Administering Insulin",
      "Checking for hyperkalemia and hypoglycemia",
      "Administering Beta Blockers",
      "Cooling the patient"
    ],
    correct: 1,
    explanation: "Addison's disease leads to low cortisol (hypoglycemia) and low aldosterone (sodium loss/potassium retention)."
  },
  {
   module: "ClinicalJudgment",
    tags: ["Legal", "Pediatrics"],
    question: "You are legally required to report a case of child abuse. This duty overrides patient confidentiality. This is an example of:",
    options: [
      "Negligence",
      "Immunity",
      "Mandatory Reporting",
      "Res Ipsa Loquitur"
    ],
    correct: 2,
    explanation: "Paramedics are mandatory reporters for suspected child and elder abuse."
  },
  {
   module: "ClinicalJudgment",
    tags: ["Airway", "Vitals"],
    question: "A patient is hyperventilating. You expect their EtCO2 to be:",
    options: [
      "High (>45)",
      "Normal (35-45)",
      "Low (<35)",
      "Variable"
    ],
    correct: 2,
    explanation: "Hyperventilation blows off CO2, leading to hypocarbia (low EtCO2)."
  },
  {
   module: "ClinicalJudgment",
    tags: ["Trauma", "Calculations"],
    question: "A burn patient weighs 80kg and has 50% BSA burns. Using the Parkland Formula (4mL), what is the total fluid volume for 24 hours, and how much do you give in the first 8 hours?",
    options: [
      "8,000 mL total; 4,000 mL in first 8 hours",
      "16,000 mL total; 8,000 mL in first 8 hours",
      "16,000 mL total; 4,000 mL in first 8 hours",
      "32,000 mL total; 16,000 mL in first 8 hours"
    ],
    correct: 1,
    explanation: "4mL * 80kg * 50 = 16,000 mL total. Half (8,000 mL) is given in the first 8 hours."
  },
  {
   module: "ClinicalJudgment",
    tags: ["OB/GYN", "Assessment"],
    question: "A patient with painless, bright red vaginal bleeding in the third trimester likely has:",
    options: [
      "Abruptio Placentae",
      "Placenta Previa",
      "Uterine Rupture",
      "Spontaneous Abortion"
    ],
    correct: 1,
    explanation: "Placenta previa (placenta covering cervix) causes painless bleeding. Abruption is painful."
  },
  {
   module: "ClinicalJudgment",
    tags: ["Trauma", "Vitals"],
    question: "A patient is in cardiac arrest. You notice the dialysis fistula in the left arm has a thrill. Where should you establish IV access?",
    options: [
      "Left EJ",
      "Right arm or IO",
      "Use the fistula",
      "Left hand"
    ],
    correct: 1,
    explanation: "Never use a dialysis fistula for IV access or BP unless it's a life-or-death last resort. Use the other arm or an IO."
  },
  {
   module: "ClinicalJudgment",
    tags: ["Trauma", "Assessment"],
    question: "A patient with a stab wound to the neck is at high risk for:",
    options: [
      "Air embolism",
      "Tension pneumothorax",
      "Esophageal rupture",
      "All of the above"
    ],
    correct: 3,
    explanation: "Neck trauma can involve the jugular (air embolism), the lung apex (pneumo), or the esophagus/trachea."
  },
  {
   module: "ClinicalJudgment",
    tags: ["Endocrine", "Assessment"],
    question: "A patient presents with 'Moon Face' and 'Buffalo Hump'. These are signs of:",
    options: [
      "Addison's Disease",
      "Cushing's Syndrome",
      "Graves' Disease",
      "Hypothyroidism"
    ],
    correct: 1,
    explanation: "These are classic signs of excess cortisol (Cushing's)."
  },
  {
   module: "ClinicalJudgment",
    tags: ["Safety", "Behavioral"],
    question: "You arrive at a scene where a patient is threatening suicide with a knife. Police are not yet on scene. You should:",
    options: [
      "Enter and try to talk him down",
      "Stage a safe distance away until police secure the scene",
      "Have your partner distract him while you restrain him",
      "Yell at him to drop the knife"
    ],
    correct: 1,
    explanation: "Safety is paramount. Do not enter an unsecured scene with an armed patient."
  },
  {
   module: "ClinicalJudgment",
    tags: ["Toxicology", "Pharmacology"],
    question: "A patient with organophosphate poisoning has received Atropine and is now tachycardia with dry skin, but still has muscle fasiculations. What drug addresses the muscle symptoms?",
    options: [
      "More Atropine",
      "Pralidoxime (2-PAM)",
      "Diazepam",
      "Succinylcholine"
    ],
    correct: 1,
    explanation: "2-PAM restores acetylcholinesterase, reversing the neuromuscular blockade (nicotinic effects) that Atropine does not treat."
  },
  {
   module: "ClinicalJudgment",
    tags: ["Neurology", "Head Injury"],
    question: "A patient with a head injury has a fixed and dilated pupil on the right. This suggests herniation compressing which cranial nerve?",
    options: [
      "CN II (Optic)",
      "CN III (Oculomotor)",
      "CN X (Vagus)",
      "CN VII (Facial)"
    ],
    correct: 1,
    explanation: "The Oculomotor nerve controls pupil constriction. Compression leads to dilation."
  },
  {
   module: "ClinicalJudgment",
    tags: ["Airway", "Assessment"],
    question: "Which of the following is the most reliable method for confirming ET tube placement?",
    options: [
      "Auscultation",
      "Misting in the tube",
      "Continuous Waveform Capnography",
      "Pulse Oximetry"
    ],
    correct: 2,
    explanation: "Waveform capnography is the gold standard for tube confirmation."
  },
  {
   module: "ClinicalJudgment",
    tags: ["GI", "Pathology"],
    question: "A patient with a history of alcoholism presents with vomiting bright red blood. You suspect:",
    options: [
      "Peptic Ulcer",
      "Esophageal Varices",
      "Diverticulitis",
      "Colon Cancer"
    ],
    correct: 1,
    explanation: "Portal hypertension from cirrhosis causes varices, which rupture and cause massive hematemesis."
  },
  {
   module: "ClinicalJudgment",
    tags: ["Trauma", "Burns"],
    question: "A burn patient has dry, leathery, white skin that is painless. This is a:",
    options: [
      "Superficial burn",
      "Partial thickness burn",
      "Full thickness (3rd degree) burn",
      "Fourth degree burn"
    ],
    correct: 2,
    explanation: "Full thickness burns destroy nerve endings, making them painless and leathery/white/charred."
  },
  {
   module: "ClinicalJudgment",
    tags: ["Airway", "Adjuncts"],
    question: "You are managing an airway. The patient has a gag reflex. Which adjunct is contraindicated?",
    options: [
      "Nasopharyngeal Airway (NPA)",
      "Oropharyngeal Airway (OPA)",
      "Non-rebreather mask",
      "Nasal cannula"
    ],
    correct: 1,
    explanation: "An OPA will stimulate the gag reflex and cause vomiting/aspiration in a patient with an intact gag."
  },
  {
   module: "ClinicalJudgment",
    tags: ["Toxicology", "Assessment"],
    question: "A patient has 'cherry red' skin. This is a late sign of:",
    options: [
      "Cyanide poisoning",
      "Carbon Monoxide poisoning",
      "Methemoglobinemia",
      "Heat stroke"
    ],
    correct: 1,
    explanation: "Cherry red skin is a classic sign of CO poisoning."
  },
  {
   module: "ClinicalJudgment",
    tags: ["Trauma", "Operations"],
    question: "In a multisystem trauma patient, which intervention should be done en route rather than on scene?",
    options: [
      "Airway management",
      "Control of major bleeding",
      "IV access",
      "Spinal immobilization"
    ],
    correct: 2,
    explanation: "IVs should generally be started en route to minimize scene time (Platinum 10)."
  },
  {
   module: "ClinicalJudgment",
    tags: ["ACLS", "Assessment"],
    question: "A patient in cardiac arrest has been intubated. CPR is in progress. The EtCO2 reading suddenly jumps from 15 to 40. What does this likely indicate?",
    options: [
      "The tube has dislodged",
      "Return of Spontaneous Circulation (ROSC)",
      "The patient is hyperventilating",
      "Equipment failure"
    ],
    correct: 1,
    explanation: "A sudden rise in EtCO2 during CPR is a strong indicator of ROSC."
  },
  {
   module: "ClinicalJudgment",
    tags: ["Infectious Disease", "Assessment"],
    question: "A patient with fever and a stiff neck curls their legs when you flex their neck. This is a positive:",
    options: [
      "Kernig's Sign",
      "Brudzinski's Sign",
      "Babinski Reflex",
      "Cushing's Reflex"
    ],
    correct: 1,
    explanation: "This is Brudzinski's sign, indicative of meningeal irritation."
  },
  {
   module: "ClinicalJudgment",
    tags: ["Operations", "Safety"],
    question: "You are driving an ambulance code 3. You approach a red light. You must:",
    options: [
      "Slow down and check, but proceed without stopping",
      "Come to a complete stop and proceed when safe",
      "Drive through if your siren is on",
      "Follow the police escort"
    ],
    correct: 1,
    explanation: "Safe driving practices require a complete stop at red lights before proceeding, even when driving emergency."
  },
  {
   module: "ClinicalJudgment",
    tags: ["Trauma", "Operations"],
    question: "A patient has an evisceration. You should:",
    options: [
      "Push the organs back in",
      "Cover with dry sterile dressing",
      "Cover with moist sterile dressing and an occlusive layer",
      "Apply ice"
    ],
    correct: 2,
    explanation: "Keep organs moist and warm. Do not try to replace them."
  },
  {
   module: "ClinicalJudgment",
    tags: ["Cardiology", "ECG"],
    question: "Electrical alternans on an ECG is a sign of:",
    options: [
      "Pericardial Tamponade",
      "Hyperkalemia",
      "Hypothermia",
      "Left Ventricular Hypertrophy"
    ],
    correct: 0,
    explanation: "The heart swinging in fluid (tamponade) causes the QRS amplitude to alternate."
  },
  {
   module: "ClinicalJudgment",
    tags: ["Neurology", "Metabolic"],
    question: "A patient with Status Epilepticus has been seizing for 15 minutes. What is a major metabolic concern?",
    options: [
      "Respiratory Alkalosis",
      "Hypoglycemia and Acidosis",
      "Hyperglycemia",
      "Hypothermia"
    ],
    correct: 1,
    explanation: "Prolonged seizures consume massive amounts of glucose and oxygen, and produce lactic acid."
  },
  {
   module: "ClinicalJudgment",
    tags: ["Airway", "Physiology"],
    question: "You are preparing to intubate. What is the purpose of 'pre-oxygenation' or nitrogen washout?",
    options: [
      "To sedate the patient",
      "To replace nitrogen in the functional residual capacity with oxygen",
      "To prevent aspiration",
      "To decrease intracranial pressure"
    ],
    correct: 1,
    explanation: "Pre-oxygenation creates an oxygen reservoir in the lungs, extending safe apnea time."
  }
];