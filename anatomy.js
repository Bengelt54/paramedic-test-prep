const ANATOMY_QUESTIONS = [
  {
    module: "Anatomy",
    tags: ["Pediatrics", "Vitals"],
    question: "A pediatric patient presents with a systolic blood pressure of 100 mmHg. Based on the standard formula for estimating pediatric blood pressure (90 + 2 x age), what is the approximate age of this child?",
    options: [
      "3 years old",
      "5 years old",
      "7 years old",
      "10 years old"
    ],
    correct: 1,
    explanation: "Using the formula 90 + (2 * age) = systolic BP: 90 + (2 * 5) = 100 mmHg."
  },
  {
    module: "Anatomy",
    tags: ["Neurology", "Infectious Disease"],
    question: "A patient presents with a high fever, headache, and phonophobia. You note a red/purple rash on the trunk. Which finding would most strongly suggest meningitis?",
    options: [
      "Pain in the legs upon extension",
      "Nuchal rigidity",
      "Unequal pupils",
      "Loss of sensation in the fingers"
    ],
    correct: 1,
    explanation: "Nuchal rigidity (stiff neck) is a hallmark sign of meningitis, often accompanied by fever and petechiae (rash)."
  },
  {
    module: "Anatomy",
    tags: ["Trauma", "Abdominal"],
    question: "A patient complains of left shoulder pain after a blunt trauma to the upper abdomen. This referred pain pattern, known as Kehr's Sign, is indicative of injury to which organ?",
    options: [
      "Liver",
      "Stomach",
      "Spleen",
      "Pancreas"
    ],
    correct: 2,
    explanation: "Kehr's Sign is referred pain to the left shoulder caused by irritation of the diaphragm, often from a ruptured spleen."
  },
  {
    module: "Anatomy",
    tags: ["Neurology", "Pediatrics"],
    question: "When assessing an infant, you stroke the bottom of the foot and the toes fan upward. In an adult, this same response would be considered pathological. What is this reflex called?",
    options: [
      "Moro Reflex",
      "Babinski Reflex",
      "Palmar Grasp",
      "Rooting Reflex"
    ],
    correct: 1,
    explanation: "A positive Babinski reflex (fanning of toes) is normal in infants but pathological in adults, indicating a neurological issue."
  },
  {
    module: "Anatomy",
    tags: ["Acid-Base", "GI"],
    question: "A patient has been vomiting for several days. Loss of stomach acid (HCl) would most likely lead to which acid-base imbalance?",
    options: [
      "Metabolic Acidosis",
      "Respiratory Acidosis",
      "Metabolic Alkalosis",
      "Respiratory Alkalosis"
    ],
    correct: 2,
    explanation: "Vomiting causes the loss of hydrochloric acid from the stomach, leaving an excess of bicarbonate in the blood, leading to metabolic alkalosis."
  },
  {
    module: "Anatomy",
    tags: ["Respiratory", "Acid-Base"],
    question: "A patient with COPD is found to have shallow respirations. Retained CO2 in this patient will likely result in:",
    options: [
      "Respiratory Alkalosis",
      "Metabolic Alkalosis",
      "Respiratory Acidosis",
      "Metabolic Acidosis"
    ],
    correct: 2,
    explanation: "Hypoventilation causes CO2 retention. Excess CO2 combines with water to form carbonic acid, lowering blood pH (Respiratory Acidosis)."
  },
  {
    module: "Anatomy",
    tags: ["Neurology", "Trauma"],
    question: "A patient has sustained a spinal cord injury and lost the ability to breathe spontaneously. Which nerve roots are likely damaged?",
    options: [
      "C1-C2",
      "C3-C5",
      "T1-T4",
      "L1-L5"
    ],
    correct: 1,
    explanation: "The Phrenic Nerve, which controls the diaphragm, originates from C3, C4, and C5. ('C3, 4, 5 keep the diaphragm alive')."
  },
  {
    module: "Anatomy",
    tags: ["Pediatrics", "Pathophysiology"],
    question: "A child presents with flu-like symptoms and lethargy after being given Aspirin. You suspect Reye's Syndrome. This condition primarily affects which organs?",
    options: [
      "Heart and Lungs",
      "Liver and Brain",
      "Kidneys and Spleen",
      "Pancreas and Gallbladder"
    ],
    correct: 1,
    explanation: "Reye's Syndrome is a rare but serious condition causing swelling in the liver and brain, often linked to aspirin use in children recovering from viral infections."
  },
  {
    module: "Anatomy",
    tags: ["GI", "Assessment"],
    question: "During an assessment, you palpate the right upper quadrant (RUQ) and the patient experiences pain upon inspiration, causing them to stop breathing. This is known as Murphy's Sign and suggests inflammation of the:",
    options: [
      "Appendix",
      "Gallbladder",
      "Spleen",
      "Kidney"
    ],
    correct: 1,
    explanation: "Murphy's Sign (inspiratory arrest on palpation of the RUQ) is a classic sign of Cholecystitis (gallbladder inflammation)."
  },
  {
    module: "Anatomy",
    tags: ["Toxicology", "Acid-Base"],
    question: "A patient has ingested a large quantity of Aspirin (ASA). Given that aspirin is a salicylate acid, what initial acid-base disturbance would you expect?",
    options: [
      "Respiratory Alkalosis",
      "Metabolic Alkalosis",
      "Metabolic Acidosis",
      "Respiratory Acidosis"
    ],
    correct: 2,
    explanation: "Ingestion of acidic substances like aspirin directly increases the acid load in the body, leading to Metabolic Acidosis."
  },
  {
    module: "Anatomy",
    tags: ["Neurology", "Trauma"],
    question: "A patient has lost sensation below the level of the umbilicus. This dermatome landmark correlates with which spinal level?",
    options: [
      "T4",
      "T10",
      "C7",
      "L1"
    ],
    correct: 1,
    explanation: "The T10 dermatome corresponds to the level of the umbilicus. T4 is at the nipple line."
  },
  {
    module: "Anatomy",
    tags: ["Cellular Biology"],
    question: "The movement of water across a semipermeable membrane from an area of low solute concentration to high solute concentration is called:",
    options: [
      "Diffusion",
      "Active Transport",
      "Osmosis",
      "Facilitated Diffusion"
    ],
    correct: 2,
    explanation: "Osmosis is the specific term for the movement of water down its concentration gradient (or towards higher solute concentration)."
  },
  {
    module: "Anatomy",
    tags: ["Cellular Biology", "Electrolytes"],
    question: "Which cation is the most abundant intracellular ion?",
    options: [
      "Sodium (Na+)",
      "Calcium (Ca++)",
      "Potassium (K+)",
      "Magnesium (Mg++)"
    ],
    correct: 2,
    explanation: "Potassium is the primary intracellular cation, while Sodium is the primary extracellular cation."
  },
  {
    module: "Anatomy",
    tags: ["Pediatrics", "Neonatal"],
    question: "You are assessing a newborn. If the heart rate remains below 100 bpm after initial steps and oxygen administration, what is the next appropriate action?",
    options: [
      "Begin chest compressions",
      "Administer Epinephrine",
      "Warm the infant",
      "Ventilate with BVM"
    ],
    correct: 3,
    explanation: "Per the text, CPR (chest compressions) should be initiated on a newborn if the HR does not go up after O2/ventilation."
  },
  {
    module: "Anatomy",
    tags: ["GI", "Assessment"],
    question: "You are assessing a patient with abdominal pain. Tenderness at McBurney's point is most strongly associated with:",
    options: [
      "Cholecystitis",
      "Pancreatitis",
      "Appendicitis",
      "Diverticulitis"
    ],
    correct: 2,
    explanation: "McBurney's point is located in the Right Lower Quadrant (RLQ) and is the classic site of tenderness for Appendicitis."
  },
  {
    module: "Anatomy",
    tags: ["Cellular Biology", "Acid-Base"],
    question: "Anaerobic metabolism occurs in the absence of oxygen. A primary byproduct of this process that can lead to acidosis is:",
    options: [
      "Carbon Dioxide",
      "Lactic Acid",
      "Pyruvic Acid",
      "Water"
    ],
    correct: 1,
    explanation: "Without oxygen, cells rely on anaerobic metabolism, which produces lactic acid as a waste product, potentially causing metabolic acidosis."
  },
  {
    module: "Anatomy",
    tags: ["Neurology"],
    question: "Which part of the brain is primarily responsible for coordination, balance, and fine motor movement?",
    options: [
      "Cerebrum",
      "Brainstem",
      "Cerebellum",
      "Diencephalon"
    ],
    correct: 2,
    explanation: "The cerebellum ('little brain') regulates balance, posture, and fine motor coordination."
  },
  {
    module: "Anatomy",
    tags: ["Cardiovascular", "Respiratory"],
    question: "Cor Pulmonale is best described as:",
    options: [
      "Left-sided heart failure due to hypertension",
      "Right-sided heart failure due to pulmonary hypertension",
      "Heart failure due to valve regurgitation",
      "Myocardial infarction of the right ventricle"
    ],
    correct: 1,
    explanation: "Cor Pulmonale is failure of the right side of the heart caused by high pressure in the pulmonary arteries (pulmonary hypertension), often from chronic lung disease."
  },
  {
    module: "Anatomy",
    tags: ["Trauma", "Abdominal"],
    question: "A patient presents with bruising around the umbilicus. This finding is known as Cullen's Sign and suggests:",
    options: [
      "Retroperitoneal bleeding",
      "Intraperitoneal bleeding",
      "Kidney trauma",
      "Aortic aneurysm"
    ],
    correct: 1,
    explanation: "Cullen's Sign (periumbilical ecchymosis) indicates bleeding within the abdominal cavity (intraperitoneal hemorrhage)."
  },
  {
    module: "Anatomy",
    tags: ["Trauma", "Musculoskeletal"],
    question: "A 'Hangman's Fracture' involves a fracture of which specific cervical vertebrae structure?",
    options: [
      "C1 (Atlas)",
      "Odontoid process (Dens) of C2",
      "Spinous process of C7",
      "Body of C3"
    ],
    correct: 1,
    explanation: "A Hangman's fracture is a fracture of the axis (C2), specifically involving the odontoid process (dens), often caused by hyperextension."
  }
];