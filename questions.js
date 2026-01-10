const QUESTIONS = [
  // --- IMPORTED ANATOMY QUESTIONS ---
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
    [cite_start]explanation: "Using the formula 90 + (2 * age) = systolic BP: 90 + (2 * 5) = 100 mmHg. [cite: 1]"
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
    [cite_start]explanation: "Nuchal rigidity (stiff neck) is a hallmark sign of meningitis, often accompanied by fever and petechiae (rash). [cite: 2]"
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
    [cite_start]explanation: "Kehr's Sign is referred pain to the left shoulder caused by irritation of the diaphragm, often from a ruptured spleen. [cite: 3]"
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
    [cite_start]explanation: "A positive Babinski reflex (fanning of toes) is normal in infants but pathological in adults, indicating a neurological issue. [cite: 4]"
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
    [cite_start]explanation: "Vomiting causes the loss of hydrochloric acid from the stomach, leaving an excess of bicarbonate in the blood, leading to metabolic alkalosis. [cite: 5]"
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
    explanation: "Hypoventilation causes CO2 retention. [cite_start]Excess CO2 combines with water to form carbonic acid, lowering blood pH (Respiratory Acidosis). [cite: 6]"
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
    explanation: "The Phrenic Nerve, which controls the diaphragm, originates from C3, C4, and C5. ('C3, 4, 5 keep the diaphragm alive')[cite_start]. [cite: 7]"
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
    [cite_start]explanation: "Reye's Syndrome is a rare but serious condition causing swelling in the liver and brain, often linked to aspirin use in children recovering from viral infections. [cite: 8]"
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
    [cite_start]explanation: "Murphy's Sign (inspiratory arrest on palpation of the RUQ) is a classic sign of Cholecystitis (gallbladder inflammation). [cite: 9]"
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
    [cite_start]explanation: "Ingestion of acidic substances like aspirin directly increases the acid load in the body, leading to Metabolic Acidosis. [cite: 10]"
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
    explanation: "The T10 dermatome corresponds to the level of the umbilicus. [cite_start]T4 is at the nipple line. [cite: 11]"
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
    [cite_start]explanation: "Osmosis is the specific term for the movement of water down its concentration gradient (or towards higher solute concentration). [cite: 12]"
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
    [cite_start]explanation: "Potassium is the primary intracellular cation, while Sodium is the primary extracellular cation. [cite: 13]"
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
    correct: 0,
    [cite_start]explanation: "Per the text, CPR (chest compressions) should be initiated on a newborn if the HR does not go up after O2/ventilation. [cite: 14]"
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
    [cite_start]explanation: "McBurney's point is located in the Right Lower Quadrant (RLQ) and is the classic site of tenderness for Appendicitis. [cite: 15]"
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
    [cite_start]explanation: "Without oxygen, cells rely on anaerobic metabolism, which produces lactic acid as a waste product, potentially causing metabolic acidosis. [cite: 16]"
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
    [cite_start]explanation: "The cerebellum ('little brain') regulates balance, posture, and fine motor coordination. [cite: 17]"
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
    [cite_start]explanation: "Cor Pulmonale is failure of the right side of the heart caused by high pressure in the pulmonary arteries (pulmonary hypertension), often from chronic lung disease. [cite: 18]"
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
    [cite_start]explanation: "Cullen's Sign (periumbilical ecchymosis) indicates bleeding within the abdominal cavity (intraperitoneal hemorrhage). [cite: 19]"
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
    [cite_start]explanation: "A Hangman's fracture is a fracture of the axis (C2), specifically involving the odontoid process (dens), often caused by hyperextension. [cite: 20]"
  },
    {
    module: "Airway",
    tags: ["Physiology", "Oxygenation"],
    question: "According to the Fick Principle, adequate oxygenation of the body requires three key components. Which of the following is NOT one of these components?",
    options: [
      "On-loading of oxygen at the lungs",
      "Transport of oxygen by the circulatory system",
      "Off-loading of oxygen at the tissue level",
      "Utilization of glucose by the mitochondria"
    ],
    correct: 3,
    explanation: "The Fick Principle focuses on oxygen delivery: loading oxygen in the lungs, transporting it via the circulatory system, and off-loading it at the tissue level. Glucose utilization is not part of this process."
  },
  {
    module: "Airway",
    tags: ["Ventilation", "Acid-Base"],
    question: "A patient presents with a PaCO₂ of 60 mmHg. Based on normal physiological ranges, this finding indicates the patient is:",
    options: [
      "Hyperventilating",
      "Hypoventilating",
      "Maintaining normal ventilation",
      "In a state of respiratory alkalosis"
    ],
    correct: 1,
    explanation: "Normal PaCO₂ ranges from 35–45 mmHg. A value of 60 mmHg indicates CO₂ retention (hypercarbia), which is caused by hypoventilation."
  },
  {
    module: "Airway",
    tags: ["Neurology", "Respiratory Control"],
    question: "Which reflex relies on stretch receptors in the intercostal muscles and lungs to prevent over-inflation during inspiration?",
    options: [
      "Cushing's Reflex",
      "Hering-Breuer Reflex",
      "Moro Reflex",
      "Babinski Reflex"
    ],
    correct: 1,
    explanation: "The Hering-Breuer reflex uses lung stretch receptors to inhibit further inspiration, preventing over-expansion of the lungs."
  },
  {
    module: "Airway",
    tags: ["Gas Exchange"],
    question: "Gas exchange at the cellular level, where oxygen is delivered to tissues and carbon dioxide is removed, is referred to as:",
    options: [
      "Pulmonary respiration",
      "Ventilation",
      "Capillary respiration",
      "Alveolar exchange"
    ],
    correct: 2,
    explanation: "Capillary respiration describes the exchange of oxygen and carbon dioxide at the tissue level, distinct from pulmonary gas exchange in the lungs."
  },
  {
    module: "Airway",
    tags: ["Ventilation"],
    question: "A patient is hyperventilating due to anxiety. You would expect their PaCO₂ level to be:",
    options: [
      "Elevated (>45 mmHg)",
      "Normal (35–45 mmHg)",
      "Decreased (<35 mmHg)",
      "Variable depending on oxygen saturation"
    ],
    correct: 2,
    explanation: "Hyperventilation causes excessive exhalation of CO₂, leading to hypocarbia and decreased PaCO₂ levels."
  },
  {
    module: "Airway",
    tags: ["Acid-Base"],
    question: "Carpopedal spasm is a clinical sign most commonly associated with which respiratory condition?",
    options: [
      "Hypoventilation causing acidosis",
      "Hyperventilation causing alkalosis",
      "Carbon monoxide poisoning",
      "Opioid overdose"
    ],
    correct: 1,
    explanation: "Respiratory alkalosis from hyperventilation causes calcium shifts, which can result in carpopedal spasms."
  },
  {
    module: "Airway",
    tags: ["Chemoreceptors"],
    question: "Which chemoreceptors are primarily responsible for monitoring the pH of the cerebrospinal fluid (CSF)?",
    options: [
      "Peripheral chemoreceptors in the aorta",
      "Central chemoreceptors in the medulla oblongata",
      "Stretch receptors in the lung parenchyma",
      "Baroreceptors in the carotid arteries"
    ],
    correct: 1,
    explanation: "Central chemoreceptors in the medulla respond to changes in CSF pH driven by CO₂ levels, regulating ventilation."
  },
  {
    module: "Airway",
    tags: ["Alveoli"],
    question: "Surfactant is a substance produced in the lungs that serves to:",
    options: [
      "Increase surface tension to aid expiration",
      "Decrease surface tension to prevent alveolar collapse",
      "Fight bacterial infections in the alveoli",
      "Facilitate the transport of CO₂"
    ],
    correct: 1,
    explanation: "Surfactant reduces surface tension within the alveoli, preventing collapse (atelectasis) and improving lung compliance."
  },
  {
    module: "Airway",
    tags: ["Physics", "Ventilation"],
    question: "According to Boyle's Law, as the diaphragm contracts and descends, the volume of the thoracic cavity increases. This causes intrathoracic pressure to:",
    options: [
      "Increase, forcing air out",
      "Decrease, creating a vacuum that pulls air in",
      "Remain constant",
      "Equalize with abdominal pressure"
    ],
    correct: 1,
    explanation: "Boyle’s Law states that pressure and volume are inversely related. Increased thoracic volume decreases pressure, drawing air into the lungs."
  },
  {
    module: "Airway",
    tags: ["VQ Mismatch"],
    question: "A ventilation/perfusion (V/Q) mismatch due to impaired perfusion is most commonly caused by:",
    options: [
      "Pneumonia",
      "Pulmonary embolism",
      "Asthma",
      "Choking"
    ],
    correct: 1,
    explanation: "Pulmonary embolism blocks blood flow to ventilated alveoli, causing a perfusion-based V/Q mismatch."
  },
  {
    module: "Airway",
    tags: ["COPD"],
    question: "In patients with chronic CO₂ retention, the respiratory drive may shift to monitoring oxygen levels. This is known as:",
    options: [
      "Hypercarbic drive",
      "Hypoxic drive",
      "Metabolic drive",
      "Central neurogenic drive"
    ],
    correct: 1,
    explanation: "Chronic CO₂ retainers become desensitized to high CO₂ levels and rely on low oxygen levels to stimulate breathing (hypoxic drive)."
  },
  {
    module: "Airway",
    tags: ["Gas Exchange"],
    question: "The movement of oxygen from the alveoli into the pulmonary capillaries occurs via which process?",
    options: [
      "Active transport",
      "Diffusion",
      "Osmosis",
      "Filtration"
    ],
    correct: 1,
    explanation: "Oxygen moves across the alveolar-capillary membrane by diffusion, from areas of higher concentration to lower concentration."
  },
    {
    module: "Airway",
    tags: ["Ventilation", "Physiology"],
    question: "Which of the following represents the correct formula for Minute Volume?",
    options: [
      "Respiratory Rate × Tidal Volume",
      "Respiratory Rate × Dead Space",
      "(Tidal Volume − Dead Space) × Respiratory Rate",
      "Cardiac Output × Respiratory Rate"
    ],
    correct: 0,
    explanation: "Minute volume is the total amount of air moved in one minute and is calculated by multiplying tidal volume by respiratory rate."
  },
  {
    module: "Airway",
    tags: ["Ventilation", "Gas Exchange"],
    question: "Alveolar ventilation differs from minute volume because it accounts for:",
    options: [
      "Residual volume",
      "Dead space air",
      "Expiratory reserve volume",
      "Total lung capacity"
    ],
    correct: 1,
    explanation: "Alveolar ventilation subtracts dead space air from tidal volume, providing a more accurate measure of effective gas exchange."
  },
  {
    module: "Airway",
    tags: ["Acid-Base"],
    question: "A patient with a pH of 7.25 is considered to be in a state of:",
    options: [
      "Acidosis",
      "Alkalosis",
      "Homeostasis",
      "Compensated alkalosis"
    ],
    correct: 0,
    explanation: "Normal pH ranges from 7.35–7.45. A pH below 7.35 indicates acidosis."
  },
  {
    module: "Airway",
    tags: ["COPD"],
    question: "The term 'Blue Bloater' historically refers to a patient with:",
    options: [
      "Emphysema",
      "Chronic Bronchitis",
      "Asthma",
      "Pneumonia"
    ],
    correct: 1,
    explanation: "Chronic bronchitis patients often develop cyanosis and fluid retention, leading to the term 'blue bloater.'"
  },
  {
    module: "Airway",
    tags: ["COPD"],
    question: "The term 'Pink Puffer' historically refers to a patient with:",
    options: [
      "Emphysema",
      "Chronic Bronchitis",
      "Pulmonary fibrosis",
      "Lung cancer"
    ],
    correct: 0,
    explanation: "Emphysema patients hyperventilate to maintain oxygenation, remaining pink but appearing thin and dyspneic."
  },
  {
    module: "Airway",
    tags: ["Assessment"],
    question: "Pulsus paradoxus, often seen in severe asthma or COPD, is defined as:",
    options: [
      "A drop in systolic BP greater than 10 mmHg during inhalation",
      "A rise in systolic BP greater than 10 mmHg during inhalation",
      "An irregular heart rhythm during exhalation",
      "A narrowed pulse pressure"
    ],
    correct: 0,
    explanation: "Pulsus paradoxus is an exaggerated drop in systolic blood pressure during inspiration due to increased intrathoracic pressure."
  },
  {
    module: "Airway",
    tags: ["Respiratory Patterns"],
    question: "Deep, rapid respirations seen in diabetic ketoacidosis are called:",
    options: [
      "Cheyne-Stokes respirations",
      "Kussmaul respirations",
      "Biot’s respirations",
      "Agonal respirations"
    ],
    correct: 1,
    explanation: "Kussmaul respirations are a compensatory mechanism to eliminate CO₂ and reduce metabolic acidosis."
  },
  {
    module: "Airway",
    tags: ["Neurology"],
    question: "Which breathing pattern is irregular with periods of apnea and often indicates brainstem injury?",
    options: [
      "Cheyne-Stokes",
      "Biot’s (ataxic)",
      "Kussmaul",
      "Eupnea"
    ],
    correct: 1,
    explanation: "Biot’s respirations are irregular and unpredictable, commonly associated with severe brainstem damage."
  },
  {
    module: "Airway",
    tags: ["Capnography"],
    question: "A 'shark fin' waveform on capnography is most indicative of:",
    options: [
      "Hyperventilation",
      "Bronchospasm (asthma or COPD)",
      "Pulmonary embolism",
      "Endotracheal tube obstruction"
    ],
    correct: 1,
    explanation: "The slanted upstroke of the shark fin waveform reflects difficulty exhaling, typical of obstructive airway disease."
  },
  {
    module: "Airway",
    tags: ["Lung Sounds"],
    question: "Rhonchi are low-pitched breath sounds caused by:",
    options: [
      "Fluid in the alveoli",
      "Mucus in the larger airways",
      "Bronchoconstriction",
      "Upper airway obstruction"
    ],
    correct: 1,
    explanation: "Rhonchi result from mucus in the larger airways and often clear after coughing."
  },
  {
    module: "Airway",
    tags: ["Lung Sounds"],
    question: "Fine crackles heard in the lung bases are most indicative of:",
    options: [
      "Asthma",
      "Fluid in the alveoli (CHF or pneumonia)",
      "COPD",
      "Pneumothorax"
    ],
    correct: 1,
    explanation: "Fine crackles occur when fluid-filled alveoli pop open during inspiration, commonly seen in pulmonary edema or pneumonia."
  },
  {
    module: "Airway",
    tags: ["Airway Obstruction"],
    question: "Snoring respirations in an unconscious patient are most commonly caused by:",
    options: [
      "Fluid in the upper airway",
      "The tongue obstructing the pharynx",
      "Laryngospasm",
      "Lower airway constriction"
    ],
    correct: 1,
    explanation: "Loss of muscle tone allows the tongue to fall back and obstruct the airway, producing snoring respirations."
  },
  {
    module: "Airway",
    tags: ["Respiratory Failure"],
    question: "Which of the following is considered a late sign of respiratory failure?",
    options: [
      "Tachycardia",
      "Cyanosis",
      "Restlessness",
      "Tachypnea"
    ],
    correct: 1,
    explanation: "Cyanosis is a late sign of hypoxia; early signs include anxiety, tachycardia, and increased respiratory rate."
  },
  {
    module: "Airway",
    tags: ["Toxicology"],
    question: "Carbon monoxide causes hypoxia primarily by:",
    options: [
      "Destroying alveoli",
      "Binding to hemoglobin with greater affinity than oxygen",
      "Paralyzing the diaphragm",
      "Causing laryngeal spasm"
    ],
    correct: 1,
    explanation: "Carbon monoxide binds to hemoglobin 200–250 times more strongly than oxygen, preventing oxygen delivery to tissues."
  },
  {
    module: "Airway",
    tags: ["Pediatrics", "Infectious Disease"],
    question: "Bronchiolitis in infants is most commonly caused by:",
    options: [
      "Influenza A",
      "Respiratory Syncytial Virus (RSV)",
      "Rhinovirus",
      "Streptococcus"
    ],
    correct: 1,
    explanation: "[cite_start]RSV is the primary viral cause of bronchiolitis in children under 2 years old. [cite: 1]"
  },
  {
    module: "Airway",
    tags: ["Respiratory Patterns", "Neurology"],
    question: "Cheyne-Stokes respirations are characterized by:",
    options: [
      "Regular deep, rapid breathing",
      "Crescendo-decrescendo pattern with periods of apnea",
      "Irregular pattern with irregular depth",
      "Gasps with long pauses"
    ],
    correct: 1,
    explanation: "[cite_start]Cheyne-Stokes is a rhythmic pattern of increasing and decreasing depth followed by apnea, often seen in stroke or head injury. [cite: 2]"
  },
  {
    module: "Airway",
    tags: ["Pharmacology", "Airway Obstruction"],
    question: "A patient with laryngeal edema and stridor who takes an ACE inhibitor is likely experiencing:",
    options: [
      "Anaphylaxis",
      "Angioedema",
      "Epiglottitis",
      "Croup"
    ],
    correct: 1,
    explanation: "[cite_start]ACE inhibitors (ending in -pril) can cause non-allergic angioedema, manifesting as swelling of the tongue/lips/larynx. [cite: 3]"
  },
  {
    module: "Airway",
    tags: ["Trauma", "Assessment"],
    question: "Pneumomediastinum (air in the mediastinum) typically presents with:",
    options: [
      "Unilateral wheezing",
      "Subcutaneous emphysema and Hamman's sign",
      "Tracheal deviation",
      "Absent breath sounds"
    ],
    correct: 1,
    explanation: "[cite_start]Air escaping into the mediastinum can cause subcutaneous emphysema in the neck and a crunching sound (Hamman's sign) synchronized with the heartbeat. [cite: 4]"
  },
  {
    module: "Airway",
    tags: ["Respiratory Failure", "Assessment"],
    question: "Which of the following is considered a 'Late' sign of respiratory failure?",
    options: [
      "Tachycardia",
      "Cyanosis",
      "Restlessness",
      "Tachypnea"
    ],
    correct: 1,
    explanation: "[cite_start]Cyanosis is a late sign of hypoxia. Anxiety and tachycardia appear much earlier. [cite: 5]"
  },
  {
    module: "Airway",
    tags: ["Chronic Conditions", "Assessment"],
    question: "Clubbing of the fingers is a sign of:",
    options: [
      "Acute asthma attack",
      "Chronic hypoxia",
      "Acute infection",
      "Carbon monoxide poisoning"
    ],
    correct: 1,
    explanation: "[cite_start]Clubbing (enlargement of fingertips) is a sign of long-term, chronic hypoxia seen in conditions like COPD or cystic fibrosis. [cite: 6]"
  },
  {
    module: "Airway",
    tags: ["Trauma", "Pathophysiology"],
    question: "In a patient with a tension pneumothorax, hypotension is caused by:",
    options: [
      "Hypovolemia from internal bleeding",
      "Decreased venous return due to high intrathoracic pressure",
      "Vagal nerve stimulation",
      "Direct heart injury"
    ],
    correct: 1,
    explanation: "[cite_start]High pressure in the chest squeezes the vena cava, preventing blood from returning to the heart (decreased preload), causing shock. [cite: 7]"
  },
// --- TRAUMA MODULE ---
  {
    module: "Trauma",
    tags: ["Assessment", "Abdominal"],
    question: "Which of the following signs, involving bruising around the umbilicus, is indicative of intraperitoneal bleeding?",
    options: [
      "Grey Turner's Sign",
      "Cullen's Sign",
      "Battle's Sign",
      "Kehr's Sign"
    ],
    correct: 1,
    explanation: "Cullen's sign is periumbilical ecchymosis (bruising) and is indicative of intraperitoneal bleeding."
  },
  {
    module: "Trauma",
    tags: ["Assessment", "Abdominal"],
    question: "A patient presents with bruising to the flanks. This finding, known as Grey Turner's Sign, is most strongly associated with:",
    options: [
      "Splenic rupture",
      "Liver laceration",
      "Retroperitoneal bleeding",
      "Intraperitoneal bleeding"
    ],
    correct: 2,
    explanation: "Grey Turner's sign (flank bruising) is a late sign often associated with retroperitoneal bleeding, such as from the kidneys or pancreas."
  },
  {
    module: "Trauma",
    tags: ["Neurology", "Head Injury"],
    question: "Following a head injury, a patient exhibits a lucid interval (a period of consciousness followed by rapid deterioration). This presentation is classic for which type of intracranial hemorrhage?",
    options: [
      "Subdural hematoma",
      "Epidural hematoma",
      "Intracerebral hemorrhage",
      "Subarachnoid hemorrhage"
    ],
    correct: 1,
    explanation: "An epidural hematoma involves an arterial bleed (often the middle meningeal artery) and is classically associated with a lucid interval before rapid decline."
  },
  {
    module: "Trauma",
    tags: ["Neurology", "Head Injury", "Vitals"],
    question: "A patient with a head injury displays Cushing's Reflex. Which vital sign changes would you expect to find?",
    options: [
      "Hypotension, tachycardia, irregular respirations",
      "Hypertension, bradycardia, irregular respirations",
      "Hypotension, bradycardia, eupnea",
      "Hypertension, tachycardia, tachypnea"
    ],
    correct: 1,
    explanation: "Cushing's Reflex (or Triad) is a sign of increased intracranial pressure characterized by hypertension (widening pulse pressure), bradycardia, and irregular respirations."
  },
  {
    module: "Trauma",
    tags: ["Neurology", "Shock", "Spinal"],
    question: "You are assessing a patient with a spinal cord injury. They present with hypotension and bradycardia. The skin above the injury site is cool and clammy, while below it is warm and dry. This presentation is consistent with:",
    options: [
      "Hypovolemic shock",
      "Septic shock",
      "Neurogenic shock",
      "Cardiogenic shock"
    ],
    correct: 2,
    explanation: "Neurogenic shock results from a disruption in sympathetic tone, leading to vasodilation (hypotension) and an inability to increase heart rate (bradycardia). The skin differentiation is a classic sign."
  },
  {
    module: "Trauma",
    tags: ["Neurology", "Spinal"],
    question: "A patient has suffered a hemisection of the spinal cord (Brown-Sequard Syndrome). Which of the following deficits would you expect to find?",
    options: [
      "Loss of motor function and pain/temperature sensation on the same side",
      "Loss of motor function on the opposite side and pain/temperature on the same side",
      "Loss of motor function on the same side and pain/temperature sensation on the opposite side",
      "Complete loss of all function below the injury"
    ],
    correct: 2,
    explanation: "Brown-Sequard syndrome causes ipsilateral (same side) loss of motor function and contralateral (opposite side) loss of pain and temperature sensation."
  },
  {
    module: "Trauma",
    tags: ["Cardiovascular", "Thoracic"],
    question: "Beck's Triad is a collection of signs indicative of cardiac tamponade. Which of the following is NOT part of this triad?",
    options: [
      "JVD (Jugular Vein Distention)",
      "Muffled heart tones",
      "Narrowing pulse pressure",
      "Tracheal deviation"
    ],
    correct: 3,
    explanation: "Beck's Triad consists of JVD, muffled heart tones, and narrowing pulse pressure (hypotension). Tracheal deviation is a sign of tension pneumothorax."
  },
  {
    module: "Trauma",
    tags: ["Burns", "Calculations"],
    question: "Using the Parkland Burn Formula (4mL x kg x %BSA), calculate the total fluid volume needed in the first 24 hours for a 100 kg patient with 50% body surface area burns.",
    options: [
      "10,000 mL",
      "20,000 mL",
      "5,000 mL",
      "2,000 mL"
    ],
    correct: 1,
    explanation: "4 mL * 100 kg * 50 = 20,000 mL."
  },
  {
    module: "Trauma",
    tags: ["Burns", "Calculations"],
    question: "Following the Parkland Burn Formula calculation, how much of the total fluid volume should be administered in the first 8 hours?",
    options: [
      "The total amount",
      "One-third",
      "One-half",
      "One-quarter"
    ],
    correct: 2,
    explanation: "Half of the calculated 24-hour fluid volume is given in the first 8 hours post-burn."
  },
  {
    module: "Trauma",
    tags: ["Head Injury", "Orthopedics"],
    question: "A LeFort III fracture involves which of the following?",
    options: [
      "Only the nasal bones",
      "The maxilla and nasal bones",
      "A complete craniofacial disjunction (floating face)",
      "A mandibular fracture"
    ],
    correct: 2,
    explanation: "A LeFort III fracture is a complete separation of the facial bones from the skull (craniofacial disjunction)."
  },
  {
    module: "Trauma",
    tags: ["Thoracic", "Assessment"],
    question: "Traumatic asphyxia is characterized by which specific set of findings?",
    options: [
      "JVD, cyanosis of the face/neck, and bulging eyes",
      "Hypotension, tachycardia, and pale skin",
      "Tracheal deviation and absent breath sounds",
      "Paradoxical chest movement"
    ],
    correct: 0,
    explanation: "Traumatic asphyxia results from severe chest compression causing backflow of blood, leading to JVD, facial cyanosis/swelling, and exophthalmos (bulging eyes)."
  },
  {
    module: "Trauma",
    tags: ["Orthopedics"],
    question: "A 'Colles fracture' is a fracture of which bone?",
    options: [
      "Femur",
      "Humerus",
      "Distal radius",
      "Clavicle"
    ],
    correct: 2,
    explanation: "A Colles fracture is a fracture of the distal radius in the forearm, often creating a 'silver fork' deformity."
  },
  {
    module: "Trauma",
    tags: ["Shock", "Infectious Disease"],
    question: "Which of the following skin presentations is most consistent with early septic shock?",
    options: [
      "Cool and clammy",
      "Pale and moist",
      "Hot and dry/flushed",
      "Mottled and cold"
    ],
    correct: 2,
    explanation: "In early septic shock, vasodilation and fever typically cause the skin to be hot and flushed, unlike the cool/clammy skin of hypovolemic shock."
  },
  {
    module: "Trauma",
    tags: ["Thoracic", "Operations"],
    question: "The definitive treatment for a tension pneumothorax in the prehospital setting is:",
    options: [
      "Rapid fluid administration",
      "Needle decompression",
      "Endotracheal intubation",
      "Pericardiocentesis"
    ],
    correct: 1,
    explanation: "A tension pneumothorax requires immediate pressure relief via needle decompression."
  },
  {
    module: "Trauma",
    tags: ["Head Injury", "Assessment"],
    question: "The 'Halo Test' is used to identify the presence of:",
    options: [
      "Blood in the urine",
      "Cerebrospinal Fluid (CSF) in blood",
      "Bile in vomit",
      "Air in the pleural space"
    ],
    correct: 1,
    explanation: "When blood containing CSF is placed on a filter paper, the CSF spreads out faster, creating a yellowish 'halo' around the red blood."
  },
  {
    module: "Trauma",
    tags: ["Neurology", "Head Injury"],
    question: "Which type of posturing indicates a brainstem injury and involves extension of the arms and legs?",
    options: [
      "Decorticate",
      "Decerebrate",
      "Fencing response",
      "Withdrawal to pain"
    ],
    correct: 1,
    explanation: "Decerebrate posturing (extension) indicates damage to the brainstem and is a more ominous sign than decorticate posturing."
  },
  {
    module: "Trauma",
    tags: ["Thoracic", "Assessment"],
    question: "A patient with a flail chest will exhibit:",
    options: [
      "Tracheal deviation",
      "Paradoxical chest movement",
      "Absent breath sounds",
      "Subcutaneous emphysema"
    ],
    correct: 1,
    explanation: "A flail chest segment moves opposite to the rest of the chest wall during respiration (paradoxical motion)."
  },
  {
    module: "Trauma",
    tags: ["Burns", "Toxicology"],
    question: "What is the appropriate treatment for a dry lime burn?",
    options: [
      "Flush immediately with water",
      "Brush off the dry powder first, then flush",
      "Neutralize with vinegar",
      "Cover with an occlusive dressing"
    ],
    correct: 1,
    explanation: "Water can activate dry lime and cause a thermal burn. It must be brushed off before flushing with copious amounts of water."
  },
  {
    module: "Trauma",
    tags: ["Abdominal", "Thoracic"],
    question: "Bowel sounds heard in the chest cavity are a specific sign of:",
    options: [
      "Pneumothorax",
      "Hemothorax",
      "Diaphragmatic rupture",
      "Esophageal varices"
    ],
    correct: 2,
    explanation: "A rupture in the diaphragm allows abdominal contents (bowel) to herniate into the chest, where their sounds can be auscultated."
  },
  {
    module: "Trauma",
    tags: ["Shock", "Calculations"],
    question: "The Shock Index is calculated by dividing:",
    options: [
      "Systolic BP by Heart Rate",
      "Heart Rate by Systolic BP",
      "Diastolic BP by Heart Rate",
      "Heart Rate by Respiratory Rate"
    ],
    correct: 1,
    explanation: "The Shock Index (SI) is Heart Rate / Systolic BP. A value > 1.0 indicates significant shock."
  },
  {
    module: "Trauma",
    tags: ["Orthopedics", "Shock"],
    question: "A patient with an isolated femur fracture can lose up to how much blood internally?",
    options: [
      "250 mL",
      "500 mL",
      "1,000 mL (1 Liter)",
      "3,000 mL"
    ],
    correct: 2,
    explanation: "A femur fracture can result in significant internal hemorrhage, typically estimated up to 1,000 mL (1 Liter)."
  },
  {
    module: "Trauma",
    tags: ["Orthopedics", "Shock"],
    question: "Which of the following fractures carries the highest risk for massive internal hemorrhage, potentially up to 2-4 Liters?",
    options: [
      "Femur fracture",
      "Pelvic fracture",
      "Humerus fracture",
      "Tib/Fib fracture"
    ],
    correct: 1,
    explanation: "Pelvic fractures can cause catastrophic blood loss (2,000-4,000 mL) due to the large vascular space and proximity to major vessels."
  },
  {
    module: "Trauma",
    tags: ["Abdominal", "Operations"],
    question: "The proper treatment for an eviscerated bowel is to:",
    options: [
      "Push the organs back in",
      "Cover with a dry sterile dressing",
      "Cover with a moist sterile dressing and then an occlusive layer",
      "Leave it open to air"
    ],
    correct: 2,
    explanation: "Eviscerations should be kept moist and warm. They should never be pushed back in."
  },
  {
    module: "Trauma",
    tags: ["Cardiovascular", "Thoracic"],
    question: "Commotio Cordis is cardiac arrest caused by:",
    options: [
      "Penetrating trauma to the heart",
      "A blunt impact to the chest during a critical phase of the cardiac cycle (R on T)",
      "Massive myocardial infarction",
      "Pericardial tamponade"
    ],
    correct: 1,
    explanation: "Commotio Cordis is V-Fib arrest caused by a blow to the chest timed perfectly on the T-wave upstroke."
  },
  {
    module: "Trauma",
    tags: ["Thoracic", "Operations"],
    question: "What is the primary treatment for a sucking chest wound (open pneumothorax)?",
    options: [
      "Needle decompression",
      "Occlusive dressing taped on 3 sides",
      "Bulky trauma dressing",
      "Intubation"
    ],
    correct: 1,
    explanation: "An occlusive dressing prevents air from entering the chest while allowing air to escape (flutter valve effect)."
  },
  {
    module: "Trauma",
    tags: ["Burns", "Assessment"],
    question: "According to the Rule of Nines, an adult with burns to the entire anterior chest and abdomen has burns covering what percentage of their body?",
    options: [
      "9%",
      "18%",
      "27%",
      "36%"
    ],
    correct: 1,
    explanation: "The anterior trunk (chest + abdomen) accounts for 18% of the BSA in an adult."
  },
  {
    module: "Trauma",
    tags: ["Neurology", "Head Injury"],
    question: "A patient with a fixed and dilated pupil usually has compression of which cranial nerve?",
    options: [
      "Optic (CN II)",
      "Oculomotor (CN III)",
      "Vagus (CN X)",
      "Facial (CN VII)"
    ],
    correct: 1,
    explanation: "The Oculomotor nerve (CN III) controls pupil constriction. Compression (herniation) causes it to fail, leaving the pupil dilated."
  },
  {
    module: "Trauma",
    tags: ["Orthopedics", "Operations"],
    question: "A Sager traction splint is CONTRAINDICATED in which of the following scenarios?",
    options: [
      "Mid-shaft femur fracture",
      "Pelvic fracture",
      "Closed femur fracture",
      "Open femur fracture"
    ],
    correct: 1,
    explanation: "Traction splints pull against the pelvis (ischial tuberosity). If the pelvis is fractured, the splint will cause further damage/pain."
  },
  {
    module: "Trauma",
    tags: ["Vitals", "Cardiovascular"],
    question: "Pulse pressure is defined as:",
    options: [
      "Systolic BP + Diastolic BP",
      "Systolic BP - Diastolic BP",
      "Diastolic BP + 1/3 Systolic",
      "Heart Rate x Stroke Volume"
    ],
    correct: 1,
    explanation: "Pulse pressure is the difference between the systolic and diastolic pressures."
  },
  {
    module: "Trauma",
    tags: ["Shock", "Vitals"],
    question: "A narrowing pulse pressure is an early sign of which type of shock?",
    options: [
      "Neurogenic",
      "Septic",
      "Hypovolemic/Cardiogenic",
      "Anaphylactic"
    ],
    correct: 2,
    explanation: "In hypovolemic/cardiogenic shock, peripheral vasoconstriction raises the diastolic pressure while systolic drops, narrowing the gap."
  },
  {
    module: "Trauma",
    tags: ["Thoracic", "Assessment"],
    question: "Subcutaneous emphysema (crackling under the skin) in the neck/chest is most commonly associated with:",
    options: [
      "Hemothorax",
      "Pneumothorax / Pneumomediastinum",
      "Cardiac Tamponade",
      "Flail Chest"
    ],
    correct: 1,
    explanation: "Air escaping from the lungs into the tissue causes subcutaneous emphysema."
  },
  {
    module: "Trauma",
    tags: ["Orthopedics"],
    question: "A patient typically holds their arm in a locked position over their head (luxatio erecta) with which type of dislocation?",
    options: [
      "Anterior shoulder dislocation",
      "Posterior shoulder dislocation",
      "Inferior shoulder dislocation",
      "Elbow dislocation"
    ],
    correct: 2,
    explanation: "Inferior shoulder dislocation (Luxatio Erecta) presents with the arm locked upward."
  },
  {
    module: "Trauma",
    tags: ["Medical Terminology"],
    question: "Epistaxis is the medical term for:",
    options: [
      "Vomiting blood",
      "Coughing blood",
      "Nosebleed",
      "Blood in the urine"
    ],
    correct: 2,
    explanation: "Epistaxis is a nosebleed."
  },
  {
    module: "Trauma",
    tags: ["Assessment", "Orthopedics"],
    question: "When assessing for pelvic stability, you should:",
    options: [
      "Rock the pelvis vigorously",
      "Apply gentle inward and downward pressure once",
      "Log roll the patient to check the back",
      "Ask the patient to walk"
    ],
    correct: 1,
    explanation: "Pelvic exams should be gentle to avoid disrupting clots. Rocking is contraindicated."
  },
  {
    module: "Trauma",
    tags: ["Shock", "Immunology"],
    question: "Which immunoglobulin is primarily responsible for the reaction seen in Anaphylactic Shock?",
    options: [
      "IgA",
      "IgG",
      "IgM",
      "IgE"
    ],
    correct: 3,
    explanation: "IgE antibodies trigger mast cells to release histamine during an allergic/anaphylactic reaction."
  },
  {
    module: "Trauma",
    tags: ["Operations"],
    question: "The optimal on-scene time for a critical trauma patient (Platinum 10) is:",
    options: [
      "Less than 5 minutes",
      "Less than 10 minutes",
      "15-20 minutes",
      "As long as it takes to stabilize"
    ],
    correct: 1,
    explanation: "The goal for critical trauma is to limit scene time to 10 minutes (Platinum 10)."
  },
  {
    module: "Trauma",
    tags: ["Thoracic", "Assessment"],
    question: "Hyperresonance upon percussion of the chest indicates:",
    options: [
      "Fluid (Hemothorax)",
      "Air (Pneumothorax)",
      "Consolidation (Pneumonia)",
      "Normal lung tissue"
    ],
    correct: 1,
    explanation: "Excess air (pneumothorax) rings hollow or 'hyperresonant'. Fluid/blood sounds dull."
  },
  {
    module: "Trauma",
    tags: ["Head Injury", "Orthopedics"],
    question: "A 'blowout fracture' typically involves which structure?",
    options: [
      "The mandible",
      "The orbital floor",
      "The zygomatic arch",
      "The nasal bridge"
    ],
    correct: 1,
    explanation: "A blowout fracture occurs when the floor of the orbit breaks, often trapping eye muscles."
  },
  {
    module: "Trauma",
    tags: ["Pathophysiology", "Renal"],
    question: "Rhabdomyolysis (Crush Syndrome) can lead to renal failure due to the release of:",
    options: [
      "Hemoglobin",
      "Myoglobin",
      "Potassium",
      "Calcium"
    ],
    correct: 1,
    explanation: "Muscle breakdown releases Myoglobin, which clogs the renal tubules, causing kidney failure."
  },
  {
    module: "Trauma",
    tags: ["Trauma", "Cardiovascular"],
    question: "An open neck wound carries the specific risk of:",
    options: [
      "Air embolism",
      "Tension pneumothorax",
      "Esophageal rupture",
      "Thyroid storm"
    ],
    correct: 0,
    explanation: "Negative pressure in the jugular veins can suck air in, causing a fatal air embolism."
  },
  {
    module: "Trauma",
    tags: ["Shock", "Assessment"],
    question: "In a patient with internal bleeding, what is typically the FIRST sign of shock?",
    options: [
      "Hypotension",
      "Tachycardia",
      "Anxiety/Restlessness",
      "Delayed capillary refill"
    ],
    correct: 2,
    explanation: "Cerebral hypoxia causes anxiety/restlessness before vital signs significantly deteriorate."
  },
  {
    module: "Trauma",
    tags: ["Head Injury", "Assessment"],
    question: "Which of the following is NOT a sign of a basilar skull fracture?",
    options: [
      "Battle's Sign",
      "Raccoon Eyes",
      "CSF otorrhea",
      "Dilated pupils"
    ],
    correct: 3,
    explanation: "Battle's sign, Raccoon eyes, and CSF leakage are specific to basilar skull fractures. Dilated pupils indicate ICP/herniation but not specifically a fracture type."
  },
  {
    module: "Trauma",
    tags: ["Burns", "Toxicology"],
    question: "Sodium metal burns are treated by covering the area with:",
    options: [
      "Water",
      "Oil",
      "Vinegar",
      "Dry gauze"
    ],
    correct: 1,
    explanation: "Sodium reacts explosively with water. Oil is used to smother/isolate the metal."
  },
  {
    module: "Trauma",
    tags: ["Shock", "Pathophysiology"],
    question: "Distributive shock (like Septic or Neurogenic) is primarily a problem of:",
    options: [
      "Pump failure",
      "Fluid loss",
      "Vessel dilation (Container problem)",
      "Obstructive flow"
    ],
    correct: 2,
    explanation: "Distributive shock involves massive vasodilation, making the vascular container too big for the fluid volume."
  },
  {
    module: "Trauma",
    tags: ["Orthopedics"],
    question: "A Sprain involves injury to:",
    options: [
      "Ligaments",
      "Muscles",
      "Tendons",
      "Bones"
    ],
    correct: 0,
    explanation: "A sprain is a ligament injury. A strain is a muscle/tendon injury."
  },
  // --- OPERATIONS MODULE ---
  {
    module: "Operations",
    tags: ["Legal", "Liability"],
    question: "Which branch of civil law deals with non-criminal conflicts between two parties and is the branch under which paramedics are most likely to be sued?",
    options: [
      "Administrative law",
      "Tort law",
      "Constitutional law",
      "Criminal law"
    ],
    correct: 1,
    explanation: "Tort law is the branch of civil law involving conflicts between two parties, and it is the area where paramedics are most frequently sued."
  },
  {
    module: "Operations",
    tags: ["Legal", "Liability"],
    question: "The legal doctrine 'Res ipsa loquitur' translates to 'the thing speaks for itself.' In a lawsuit involving negligence, this doctrine:",
    options: [
      "Requires proof of intent to harm",
      "Shifts the burden of proof to the defendant, replacing reasonable doubt",
      "Protects the paramedic from liability",
      "Is only applicable in criminal court"
    ],
    correct: 1,
    explanation: "Res ipsa loquitur allows a plaintiff to prove negligence by circumstantial evidence when the accident was of a kind that doesn't occur without negligence."
  },
  {
    module: "Operations",
    tags: ["Legal", "Scope of Practice"],
    question: "Who defines the scope of practice for a paramedic?",
    options: [
      "The National Registry of EMTs",
      "The medical director",
      "The state legislature",
      "The EMS agency"
    ],
    correct: 2,
    explanation: "The state legislature defines the scope of practice, which outlines what a paramedic is legally permitted to do."
  },
  {
    module: "Operations",
    tags: ["Legal", "Negligence"],
    question: "To prove negligence, four components must be established. Which of the following is NOT one of these components?",
    options: [
      "Duty to act",
      "Breach of duty",
      "Malice",
      "Proximate cause"
    ],
    correct: 2,
    explanation: "The four components of negligence are duty to act, breach of duty, actual damages, and proximate cause. Malice (intent to harm) is not required."
  },
  {
    module: "Operations",
    tags: ["Legal", "Liability"],
    question: "A paramedic fails to perform an act that is a legal requirement or official duty. This is termed:",
    options: [
      "Misfeasance",
      "Nonfeasance",
      "Malfeasance",
      "Gross negligence"
    ],
    correct: 1,
    explanation: "Nonfeasance is the failure to perform an act that is required by law or duty."
  },
  {
    module: "Operations",
    tags: ["Legal", "Liability"],
    question: "A paramedic performs a lawful action but does so in an improper or illegal manner. This is known as:",
    options: [
      "Nonfeasance",
      "Malfeasance",
      "Misfeasance",
      "Liability"
    ],
    correct: 2,
    explanation: "Misfeasance is the improper performance of a lawful act."
  },
  {
    module: "Operations",
    tags: ["Legal", "Liability"],
    question: "Performing an act that is illegal or wrongful is defined as:",
    options: [
      "Misfeasance",
      "Malfeasance",
      "Nonfeasance",
      "Breach of duty"
    ],
    correct: 1,
    explanation: "Malfeasance is the commission of an act that is inherently wrong or illegal."
  },
  {
    module: "Operations",
    tags: ["Legal", "Documentation"],
    question: "Making a false verbal statement that damages a person's reputation is called:",
    options: [
      "Libel",
      "Slander",
      "Assault",
      "Battery"
    ],
    correct: 1,
    explanation: "Slander is verbal defamation, whereas libel is written defamation."
  },
  {
    module: "Operations",
    tags: ["Legal", "Documentation"],
    question: "Writing a statement in a patient care report describing a patient as 'drunk' without medical confirmation could be considered:",
    options: [
      "Slander",
      "Libel",
      "Negligence",
      "Abandonment"
    ],
    correct: 1,
    explanation: "Libel is written defamation. Stating a patient is 'drunk' is an opinion, not a medical fact, and can be damaging."
  },
  {
    module: "Operations",
    tags: ["Legal", "Liability"],
    question: "Assault is defined as:",
    options: [
      "Unlawful touching of another person",
      "The threat of bodily harm that creates fear",
      "Restraining a patient against their will",
      "Abandoning a patient"
    ],
    correct: 1,
    explanation: "Assault is the threat or action that causes a person to fear imminent harm. Battery is the actual touching."
  },
  {
    module: "Operations",
    tags: ["Legal", "Liability"],
    question: "Touching a patient without their consent constitutes:",
    options: [
      "Assault",
      "Battery",
      "Negligence",
      "Kidnapping"
    ],
    correct: 1,
    explanation: "Battery is the unlawful touching of another person without consent."
  },
  {
    module: "Operations",
    tags: ["Legal", "Ethics"],
    question: "Termination of the paramedic-patient relationship without the patient's consent or transfer to an appropriate provider is called:",
    options: [
      "Negligence",
      "Malfeasance",
      "Abandonment",
      "Assault"
    ],
    correct: 2,
    explanation: "Abandonment occurs when a provider stops care without the patient's consent or ensuring a transfer of care."
  },
  {
    module: "Operations",
    tags: ["Ethics", "Legal"],
    question: "While morals refer to personal values, ethics refers to:",
    options: [
      "Religious beliefs",
      "Professional standards and practices",
      "Legal statutes",
      "Community norms"
    ],
    correct: 1,
    explanation: "Ethics refers to the rules or standards governing the conduct of a person or the members of a profession."
  },
  {
    module: "Operations",
    tags: ["Safety", "HazMat"],
    question: "When approaching a scene involving a chemical spill, you should park your vehicle:",
    options: [
      "Downwind and downhill",
      "Upwind and uphill",
      "Downwind and uphill",
      "Upwind and downhill"
    ],
    correct: 1,
    explanation: "Parking upwind and uphill prevents exposure to fumes and runoff from the spill."
  },
  {
    module: "Operations",
    tags: ["Communications"],
    question: "Medical telemetry and many hospital communications utilize which frequency band?",
    options: [
      "VHF (Very High Frequency)",
      "UHF (Ultra High Frequency)",
      "800 MHz trunked",
      "Low band"
    ],
    correct: 1,
    explanation: "UHF (450-470 MHz) is commonly used for medical telemetry and hospital communications due to its ability to penetrate buildings."
  },
  {
    module: "Operations",
    tags: ["Communications"],
    question: "A device that receives a radio signal and retransmits it at a higher power to extend range is called a:",
    options: [
      "Decoder",
      "Repeater",
      "Encoder",
      "Multiplexer"
    ],
    correct: 1,
    explanation: "A repeater increases the range of a radio system by receiving a weak signal and retransmitting it at a higher power."
  },
  {
    module: "Operations",
    tags: ["Communications"],
    question: "A communication system that allows simultaneous transmission and reception (like a telephone) is known as:",
    options: [
      "Simplex",
      "Duplex",
      "Multiplex",
      "Trunked"
    ],
    correct: 1,
    explanation: "Duplex systems allow for simultaneous talk and listen capability."
  },
  {
    module: "Operations",
    tags: ["Physics", "Physiology"],
    question: "According to Boyle's Law, as a weather balloon ascends in altitude where pressure decreases, the volume of the balloon will:",
    options: [
      "Decrease",
      "Increase",
      "Remain the same",
      "Fluctuate"
    ],
    correct: 1,
    explanation: "Boyle's Law states that pressure and volume are inversely related. As pressure decreases (ascent), volume increases."
  },
  {
    module: "Operations",
    tags: ["Toxicology", "HazMat"],
    question: "Hydrofluoric acid burns are unique because the acid leaches which electrolyte from the body?",
    options: [
      "Potassium",
      "Sodium",
      "Calcium",
      "Magnesium"
    ],
    correct: 2,
    explanation: "Hydrofluoric acid binds to calcium, causing severe hypocalcemia. Treatment involves calcium gluconate."
  },
  {
    module: "Operations",
    tags: ["Physics", "Trauma"],
    question: "According to the kinetic energy formula ($KE = 1/2 mass \u00d7 velocity^2$), which factor has the greatest impact on the energy of an object in motion?",
    options: [
      "Mass",
      "Velocity",
      "Gravity",
      "Friction"
    ],
    correct: 1,
    explanation: "Because velocity is squared in the formula, doubling the speed quadruples the kinetic energy."
  },
  {
    module: "Operations",
    tags: ["Medical", "Pathophysiology"],
    question: "Peritoneal dialysis involves using the lining of the abdomen to filter waste. This process differs from hemodialysis because:",
    options: [
      "It removes blood from the body",
      "It uses an external machine to filter blood",
      "It uses the peritoneum as a semipermeable membrane",
      "It requires a permanent AV fistula"
    ],
    correct: 2,
    explanation: "Peritoneal dialysis uses the body's own peritoneal membrane to filter fluids and wastes, unlike hemodialysis which uses an external machine."
  },
  {
    module: "Operations",
    tags: ["Safety", "Scene Size-up"],
    question: "When knocking on a door at a scene, where is the safest place to stand?",
    options: [
      "Directly in front of the door",
      "On the hinge side",
      "On the doorknob side",
      "Several feet back from the door"
    ],
    correct: 2,
    explanation: "Standing on the doorknob side (opposite the hinges) prevents the door from being opened into you and offers better protection."
  },
  {
    module: "Operations",
    tags: ["Legal", "Operations"],
    question: "What should you do if a patient with a guide dog needs transport to the hospital?",
    options: [
      "Leave the dog with a neighbor",
      "Transport the dog with the patient",
      "Call animal control",
      "Secure the dog in the front seat"
    ],
    correct: 1,
    explanation: "Service animals should generally remain with the patient unless they pose a direct threat to safety."
  },
  {
    module: "Operations",
    tags: ["Safety", "Behavioral"],
    question: "When dealing with a potentially violent or mental health patient, you should position yourself:",
    options: [
      "Between the patient and the door",
      "By the door for a quick exit",
      "Close to the patient to restrain them",
      "Behind a piece of furniture"
    ],
    correct: 1,
    explanation: "Always maintain a clear path of egress when dealing with potentially volatile patients."
  },
  {
    module: "Operations",
    tags: ["Rescue", "Operations"],
    question: "What is the proper knot to use for a rescue anchor on a bight?",
    options: [
      "Square knot",
      "Bowline",
      "Figure 8 on a bight",
      "Clove hitch"
    ],
    correct: 2,
    explanation: "The Figure 8 on a bight is the standard, secure loop knot used in rescue operations."
  },
  {
    module: "Operations",
    tags: ["Pharmacology"],
    question: "For predictable but delayed absorption of a medication, which route is preferred?",
    options: [
      "Intravenous (IV)",
      "Subcutaneous (SQ)",
      "Intramuscular (IM)",
      "Intraosseous (IO)"
    ],
    correct: 1,
    explanation: "Subcutaneous injection allows for slower, more sustained absorption compared to IM or IV routes."
  },
  {
    module: "Operations",
    tags: ["Safety", "Scene Size-up"],
    question: "You encounter a 12-year-old female armed with a knife. Your immediate action should be to:",
    options: [
      "Attempt to disarm her",
      "Restrain her",
      "Leave the scene until it is secured",
      "Reason with her"
    ],
    correct: 2,
    explanation: "Safety is the priority. Do not approach an armed individual. Retreat and wait for law enforcement."
  },
  {
    module: "Operations",
    tags: ["Pediatrics", "Assessment"],
    question: "What is the general guideline regarding separating toddlers from their parents during assessment?",
    options: [
      "Always separate them to get accurate answers",
      "Do not separate them",
      "Separate only if the child is crying",
      "Separate for physical exam only"
    ],
    correct: 1,
    explanation: "Toddlers have high stranger anxiety. Keeping them with parents reduces stress and facilitates assessment."
  },
  {
    module: "Operations",
    tags: ["Legal", "Legislation"],
    question: "Legislation that governs the practice of medicine and authorizes medical directors to establish protocols is known as:",
    options: [
      "The EMS Systems Act",
      "The Good Samaritan Law",
      "The Medical Practice Act",
      "The Standard of Care"
    ],
    correct: 2,
    explanation: "The Medical Practice Act defines the legal framework for the practice of medicine, including delegation of authority to paramedics."
  },
  {
    module: "Operations",
    tags: ["Rescue", "Safety"],
    question: "It is generally considered unsafe to walk in fast-moving water that is at least:",
    options: [
      "Ankle deep",
      "Knee deep",
      "Waist deep",
      "Chest deep"
    ],
    correct: 1,
    explanation: "Fast-moving water that is knee-deep or higher can easily knock a rescuer off their feet."
  },
  // --- CARDIOLOGY MODULE ---
  {
    module: "Cardiology",
    tags: ["Physiology"],
    question: "The primary energy source for the sodium-potassium pump in cardiac cells is:",
    options: [
      "ADP",
      "ATP",
      "Glucose",
      "Calcium"
    ],
    correct: 1,
    explanation: "The heart is a sodium-potassium pump which requires energy in the form of ATP created by aerobic metabolism."
  },
  {
    module: "Cardiology",
    tags: ["Physiology", "Calculations"],
    question: "Cardiac Output (CO) is determined by multiplying Heart Rate (HR) by:",
    options: [
      "Blood Pressure",
      "Systemic Vascular Resistance",
      "Stroke Volume",
      "Ejection Fraction"
    ],
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
    options: [
      "Systole",
      "Diastole",
      "Atrial contraction",
      "Ventricular ejection"
    ],
    correct: 1,
    explanation: "Coronary arteries fill during diastole."
  },
  {
    module: "Cardiology",
    tags: ["Anatomy", "Physiology"],
    question: "The coronary veins empty into the coronary sinus during:",
    options: [
      "Diastole",
      "Systole",
      "Atrial kick",
      "Isovolumetric relaxation"
    ],
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
    options: [
      "Sympathetic",
      "Parasympathetic",
      "Somatic",
      "Sensory only"
    ],
    correct: 1,
    explanation: "The Vagus nerve is the connection for the parasympathetic nervous system."
  },
  {
    module: "Cardiology",
    tags: ["Anatomy"],
    question: "The innermost layer of a blood vessel is called the:",
    options: [
      "Tunica media",
      "Tunica adventitia",
      "Tunica intima",
      "Endothelium"
    ],
    correct: 2,
    explanation: "The tunica intima is the innermost layer of a blood vessel."
  },
  {
    module: "Cardiology",
    tags: ["Physics", "Physiology"],
    question: "Poiseuille's Law states that doubling the diameter of a tube increases the flow rate by how many times?",
    options: [
      "2 times",
      "4 times",
      "8 times",
      "16 times"
    ],
    correct: 3,
    explanation: "Poiseuille's Law states that if you double the diameter of a tube, you increase the flow rate by 16 times."
  },
  {
    module: "Cardiology",
    tags: ["Pathology"],
    question: "Prinzmetal's angina is caused by:",
    options: [
      "Atherosclerosis",
      "Coronary artery spasm",
      "Thrombosis",
      "Embolism"
    ],
    correct: 1,
    explanation: "Prinzmetal's angina is caused by coronary artery vasospasm."
  },
  {
    module: "Cardiology",
    tags: ["ECG"],
    question: "In lead I of the ECG, the positive electrode is placed on the:",
    options: [
      "Right arm",
      "Left arm",
      "Left leg",
      "Right leg"
    ],
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
    options: [
      "I, aVL, V5, V6",
      "V1, V2",
      "II, III, aVF",
      "V3, V4"
    ],
    correct: 2,
    explanation: "Leads II, III, and aVF view the inferior wall of the left ventricle."
  },
  {
    module: "Cardiology",
    tags: ["ECG", "Anatomy"],
    question: "Which leads view the lateral wall of the heart?",
    options: [
      "II, III, aVF",
      "I, aVL, V5, V6",
      "V1, V2",
      "V3, V4"
    ],
    correct: 1,
    explanation: "Leads I, aVL, V5, and V6 view the lateral wall of the left ventricle."
  },
  {
    module: "Cardiology",
    tags: ["ECG", "Anatomy"],
    question: "Septal wall involvement is best seen in leads:",
    options: [
      "V1 and V2",
      "V3 and V4",
      "II and III",
      "I and aVL"
    ],
    correct: 0,
    explanation: "Leads V1 and V2 view the septal wall of the heart."
  },
  {
    module: "Cardiology",
    tags: ["ECG", "Anatomy"],
    question: "The anterior wall of the heart is best viewed in leads:",
    options: [
      "V1 and V2",
      "V3 and V4",
      "II, III, aVF",
      "I, aVL"
    ],
    correct: 1,
    explanation: "Leads V3 and V4 view the anterior wall of the left ventricle."
  },
  {
    module: "Cardiology",
    tags: ["ECG", "Pathology"],
    question: "Pathological Q waves on an ECG indicate:",
    options: [
      "Acute ischemia",
      "Acute injury",
      "Tissue necrosis (infarction)",
      "Electrolyte imbalance"
    ],
    correct: 2,
    explanation: "Pathological Q waves indicate tissue necrosis (dead tissue) or infarction."
  },
  {
    module: "Cardiology",
    tags: ["ECG", "Pathology"],
    question: "ST-segment elevation is a sign of:",
    options: [
      "Ischemia",
      "Injury",
      "Infarction (completed)",
      "Hypertrophy"
    ],
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
    options: [
      "The upstroke",
      "The peak",
      "The downslope",
      "The entire T wave"
    ],
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
    options: [
      "Alpha",
      "Beta-1",
      "Beta-2",
      "Dopaminergic"
    ],
    correct: 3,
    explanation: "At low doses (1-2 mcg/kg/min), dopamine stimulates dopaminergic receptors, causing renal and mesenteric artery dilation."
  },
  {
    module: "Cardiology",
    tags: ["Pharmacology"],
    question: "Moderate-dose dopamine (2-10 mcg/kg/min) primarily stimulates:",
    options: [
      "Alpha receptors",
      "Beta-1 receptors",
      "Beta-2 receptors",
      "Dopaminergic receptors"
    ],
    correct: 1,
    explanation: "At moderate doses (2-10 mcg/kg/min), dopamine primarily stimulates Beta-1 receptors, increasing heart rate and contractility."
  },
  {
    module: "Cardiology",
    tags: ["Pharmacology"],
    question: "High-dose dopamine (10-20 mcg/kg/min) primarily stimulates:",
    options: [
      "Alpha receptors",
      "Beta-1 receptors",
      "Beta-2 receptors",
      "Dopaminergic receptors"
    ],
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
    options: [
      "Double vision",
      "Tunnel vision",
      "Yellow vision",
      "Red vision"
    ],
    correct: 2,
    explanation: "Digitalis toxicity is associated with yellow vision and heart blocks."
  },
  {
    module: "Cardiology",
    tags: ["Pharmacology", "ACLS"],
    question: "The first-line drug of choice for stable Supraventricular Tachycardia (SVT) is:",
    options: [
      "Lidocaine",
      "Amiodarone",
      "Adenosine",
      "Atropine"
    ],
    correct: 2,
    explanation: "Adenosine is the drug of choice for stable SVT."
  },
  {
    module: "Cardiology",
    tags: ["Pediatrics", "Pharmacology"],
    question: "The pediatric dose for Atropine is:",
    options: [
      "0.01 mg/kg",
      "0.02 mg/kg",
      "0.1 mg/kg",
      "0.5 mg/kg"
    ],
    correct: 1,
    explanation: "The pediatric dose for Atropine is 0.02 mg/kg."
  },
  {
    module: "Cardiology",
    tags: ["Toxicology", "Pharmacology"],
    question: "Which drug is used to treat a beta-blocker overdose?",
    options: [
      "Naloxone",
      "Flumazenil",
      "Glucagon",
      "Atropine"
    ],
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
    options: [
      "Bronchodilation",
      "Venodilation",
      "Arterial constriction",
      "Increased heart rate"
    ],
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
    options: [
      "Myocardial infarction",
      "Systemic hypertension",
      "Pulmonary hypertension",
      "Aortic stenosis"
    ],
    correct: 2,
    explanation: "Cor Pulmonale is right ventricular hypertrophy/failure secondary to pulmonary hypertension (often from COPD)."
  },
  {
    module: "Cardiology",
    tags: ["Assessment"],
    question: "Pulsus paradoxus is defined as a drop in systolic blood pressure of greater than 10 mmHg during:",
    options: [
      "Inhalation",
      "Exhalation",
      "Rest",
      "Exertion"
    ],
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
    options: [
      "Chronic hypertension",
      "Myocardial infarction (MI)",
      "Valve disease",
      "COPD"
    ],
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
    options: [
      "Neurogenic shock",
      "Intermittent heart blocks",
      "Hypoglycemia",
      "Seizures"
    ],
    correct: 1,
    explanation: "Stokes-Adams syndrome involves syncope caused by transient heart blocks."
  },
  {
    module: "Cardiology",
    tags: ["Pathology"],
    question: "Claudication is leg pain during walking caused by:",
    options: [
      "Venous insufficiency",
      "Peripheral artery disease (PAD)",
      "Deep vein thrombosis",
      "Sciatica"
    ],
    correct: 1,
    explanation: "Claudication is pain caused by a decrease in arterial perfusion to the calf muscles (PAD) during exercise."
  },
  {
    module: "Cardiology",
    tags: ["Physiology"],
    question: "The atrial kick contributes approximately how much to cardiac output?",
    options: [
      "10-15%",
      "20-25%",
      "30-40%",
      "50%"
    ],
    correct: 1,
    explanation: "Atrial kick (atrial contraction) contributes 20-25% to cardiac output."
  },
  // --- MEDICAL MODULE ---
  {
    module: "Medical",
    tags: ["Environmental", "Altitude"],
    question: "Acute Mountain Sickness (AMS) typically occurs at altitudes around:",
    options: [
      "4000 feet",
      "6600 feet",
      "8000 feet",
      "10000 feet"
    ],
    correct: 1,
    explanation: "Acute Mountain Sickness (AMS) occurs around 6600 feet."
  },
  {
    module: "Medical",
    tags: ["Environmental", "Altitude"],
    question: "Which of the following is considered the LEAST serious of the altitude-related illnesses?",
    options: [
      "High Altitude Pulmonary Edema (HAPE)",
      "High Altitude Cerebral Edema (HACE)",
      "Acute Mountain Sickness (AMS)",
      "Nitrogen Narcosis"
    ],
    correct: 2,
    explanation: "AMS is the least serious of the altitude related illnesses."
  },
  {
    module: "Medical",
    tags: ["Environmental", "Acid-Base"],
    question: "High respirations in Acute Mountain Sickness (AMS) lead to which acid-base disturbance?",
    options: [
      "Respiratory acidosis",
      "Respiratory alkalosis",
      "Metabolic acidosis",
      "Metabolic alkalosis"
    ],
    correct: 1,
    explanation: "High respirations lead to respiratory alkalosis in AMS."
  },
  {
    module: "Medical",
    tags: ["Environmental", "Pharmacology"],
    question: "Which medication combination is used to treat High Altitude Pulmonary Edema (HAPE) and High Altitude Cerebral Edema (HACE)?",
    options: [
      "Acetazolamide and nifedipine",
      "Furosemide and morphine",
      "Dexamethasone and oxygen",
      "Albuterol and ipratropium"
    ],
    correct: 0,
    explanation: "HAPE and HACE are treated with acetazolamide and nifedipine."
  },
  {
    module: "Medical",
    tags: ["Toxicology", "Environmental"],
    question: "Death from Amanita phalloides mushroom poisoning is primarily caused by:",
    options: [
      "Renal failure",
      "Liver failure",
      "Respiratory arrest",
      "Cardiac arrest"
    ],
    correct: 1,
    explanation: "Amanita phalloides (deathcap mushroom) causes death from liver failure."
  },
  {
    module: "Medical",
    tags: ["Environmental", "Physics"],
    question: "Nitrogen Narcosis is caused by an overabundance of nitrogen in the bloodstream affecting neurons, a phenomenon explained by:",
    options: [
      "Boyle's law",
      "Charles's law",
      "Henry's law",
      "Dalton's law"
    ],
    correct: 2,
    explanation: "Nitrogen Narcosis is caused by nitrogen in the blood latching onto neurons, related to Henry's law."
  },
  {
    module: "Medical",
    tags: ["Environmental", "Diving"],
    question: "The definitive treatment for Nitrogen Narcosis is:",
    options: [
      "100% Oxygen",
      "rapid ascent",
      "Hyperbaric chamber",
      "Atropine"
    ],
    correct: 2,
    explanation: "Treatment for Nitrogen Narcosis involves a hyperbaric chamber."
  },
  {
    module: "Medical",
    tags: ["Environmental", "Physics"],
    question: "Caisson's disease, or 'The Bends', is based on which gas law?",
    options: [
      "Henry's law",
      "Boyle's law",
      "Charles's law",
      "Ideal Gas law"
    ],
    correct: 1,
    explanation: "Caisson's disease (The Bends) is based on Boyle's law."
  },
  {
    module: "Medical",
    tags: ["Environmental", "Diving"],
    question: "Decompression sickness ('The Bends') occurs during:",
    options: [
      "Descent",
      "Ascent",
      "Time at bottom",
      "Surface intervals"
    ],
    correct: 1,
    explanation: "Decompression sickness occurs on ascent."
  },
  {
    module: "Medical",
    tags: ["Environmental", "Heat Illness"],
    question: "A key sign of heat stroke, differentiating it from heat exhaustion, is:",
    options: [
      "Profuse sweating",
      "Hot, dry skin",
      "Muscle cramps",
      "Pale, moist skin"
    ],
    correct: 1,
    explanation: "In heat stroke, the body has lost the ability to regulate temperature, resulting in hot, dry skin."
  },
  {
    module: "Medical",
    tags: ["Environmental", "Heat Illness"],
    question: "Treatment for heat stroke focuses on:",
    options: [
      "Rehydration",
      "Electrolyte replacement",
      "Rapid cooling",
      "Warm IV fluids"
    ],
    correct: 2,
    explanation: "Treatment for heat stroke is rapid cooling."
  },
  {
    module: "Medical",
    tags: ["Toxicology", "Environmental"],
    question: "Which spider bite is characterized by a dull ache, muscle spasms, and nausea/vomiting?",
    options: [
      "Brown Recluse",
      "Black Widow",
      "Hobo Spider",
      "Wolf Spider"
    ],
    correct: 1,
    explanation: "Black Widow bites cause dull aches, muscle spasms, and N/V."
  },
  {
    module: "Medical",
    tags: ["Toxicology", "Environmental"],
    question: "Which spider bite typically results in a painless bite that later becomes an ulcer?",
    options: [
      "Black Widow",
      "Brown Recluse",
      "Tarantula",
      "Jumping Spider"
    ],
    correct: 1,
    explanation: "Brown Recluse bites are painless initially but later become an ulcer."
  },
  {
    module: "Medical",
    tags: ["Infectious Disease", "Assessment"],
    question: "Lyme disease is characterized by a specific skin presentation known as:",
    options: [
      "Hives",
      "Petechiae",
      "Bull's eye rash",
      "Purpura"
    ],
    correct: 2,
    explanation: "Lyme disease presents with a Bull's eye rash."
  },
  {
    module: "Medical",
    tags: ["Toxicology", "Neurology"],
    question: "Organophosphates (insecticides) cause an overstimulation of which nervous system?",
    options: [
      "Sympathetic",
      "Parasympathetic",
      "Somatic",
      "Central"
    ],
    correct: 1,
    explanation: "Organophosphates cause parasympathetic overstimulation."
  },
  {
    module: "Medical",
    tags: ["Toxicology", "Assessment"],
    question: "The mnemonic SLUDGE-M is associated with poisoning from:",
    options: [
      "Cyanide",
      "Carbon Monoxide",
      "Organophosphates",
      "Salicylates"
    ],
    correct: 2,
    explanation: "SLUDGE-M is the mnemonic for organophosphate poisoning signs."
  },
  {
    module: "Medical",
    tags: ["Toxicology", "Pharmacology"],
    question: "Treatment for organophosphate poisoning involves the administration of:",
    options: [
      "Atropine and Pralidoxime (2-PAM)",
      "Naloxone",
      "Flumazenil",
      "Sodium Bicarbonate"
    ],
    correct: 0,
    explanation: "Treatment involves Atropine (to dry secretions) and 2-PAM."
  },
  {
    module: "Medical",
    tags: ["Toxicology", "Assessment"],
    question: "A classic sign of aspirin (salicylate) overdose is:",
    options: [
      "Visual disturbances",
      "Tinnitus (ringing in the ears)",
      "Muscle rigidity",
      "Dry skin"
    ],
    correct: 1,
    explanation: "Aspirin overdose is associated with tinnitus (ringing in the ears)."
  },
  {
    module: "Medical",
    tags: ["Toxicology", "Assessment"],
    question: "Carbon monoxide poisoning is often indicated by:",
    options: [
      "Cyanosis",
      "Cherry red skin",
      "Jaundice",
      "Pallor"
    ],
    correct: 1,
    explanation: "Cherry red skin is a sign of carbon monoxide poisoning."
  },
  {
    module: "Medical",
    tags: ["Toxicology", "Assessment"],
    question: "The smell of bitter almonds is characteristic of poisoning by:",
    options: [
      "Carbon Monoxide",
      "Organophosphates",
      "Cyanide",
      "Arsenic"
    ],
    correct: 2,
    explanation: "Cyanide poisoning smells like bitter almonds."
  },
  {
    module: "Medical",
    tags: ["Toxicology", "Assessment"],
    question: "Pinpoint pupils (miosis) are a classic sign of overdose with:",
    options: [
      "Stimulants",
      "Hallucinogens",
      "Narcotics/Opiates",
      "Antidepressants"
    ],
    correct: 2,
    explanation: "Narcotics/Opiates cause pinpoint pupils."
  },
  {
    module: "Medical",
    tags: ["Endocrine", "Pathology"],
    question: "Addison's disease is characterized by:",
    options: [
      "Hyperadrenalism",
      "Adrenal insufficiency",
      "Hyperthyroidism",
      "Hypothyroidism"
    ],
    correct: 1,
    explanation: "Addison's disease is adrenal insufficiency."
  },
  {
    module: "Medical",
    tags: ["Endocrine", "Pathology"],
    question: "Cushing's syndrome is characterized by:",
    options: [
      "Low cortisol levels",
      "Excess cortisol",
      "Low thyroid hormone",
      "Excess thyroid hormone"
    ],
    correct: 1,
    explanation: "Cushing's syndrome is characterized by excess cortisol."
  },
  {
    module: "Medical",
    tags: ["Endocrine", "Assessment"],
    question: "Physical signs of Cushing's syndrome include:",
    options: [
      "Weight loss and hypotension",
      "Moon face and buffalo hump",
      "Bronze skin and fatigue",
      "Exophthalmos and goiter"
    ],
    correct: 1,
    explanation: "Cushing's syndrome presents with moon face and buffalo hump."
  },
  {
    module: "Medical",
    tags: ["Endocrine", "Pathology"],
    question: "Graves' disease is a common cause of:",
    options: [
      "Hypothyroidism",
      "Hyperthyroidism",
      "Adrenal insufficiency",
      "Diabetes"
    ],
    correct: 1,
    explanation: "Graves' disease causes hyperthyroidism (thyrotoxicosis)."
  },
  {
    module: "Medical",
    tags: ["Endocrine", "Assessment"],
    question: "Signs of Graves' disease include:",
    options: [
      "Weight gain and cold intolerance",
      "Exophthalmos (bulging eyes) and heat intolerance",
      "Moon face and buffalo hump",
      "Bronze skin and hypotension"
    ],
    correct: 1,
    explanation: "Graves' disease signs include bulging eyes (exophthalmos) and heat intolerance."
  },
  {
    module: "Medical",
    tags: ["Endocrine", "Pathology"],
    question: "Myxedema is a severe form of:",
    options: [
      "Hyperthyroidism",
      "Hypothyroidism",
      "Hyperadrenalism",
      "Hypoadrenalism"
    ],
    correct: 1,
    explanation: "Myxedema is severe hypothyroidism."
  },
  {
    module: "Medical",
    tags: ["Endocrine", "Acid-Base"],
    question: "Kussmaul respirations are a compensatory mechanism for:",
    options: [
      "Metabolic alkalosis",
      "Metabolic acidosis (DKA)",
      "Respiratory acidosis",
      "Respiratory alkalosis"
    ],
    correct: 1,
    explanation: "Kussmaul respirations (deep, rapid breathing) blow off CO2 to correct metabolic acidosis in DKA."
  },
  {
    module: "Medical",
    tags: ["Endocrine", "Pathology"],
    question: "Hyperosmolar Hyperglycemic Nonketotic Syndrome (HHNS) is typically seen in:",
    options: [
      "Type I Diabetics",
      "Type II Diabetics",
      "Patients with adrenal insufficiency",
      "Patients with thyroid storm"
    ],
    correct: 1,
    explanation: "HHNS is typically seen in Type II diabetics."
  },
  {
    module: "Medical",
    tags: ["Endocrine", "Assessment"],
    question: "Unlike DKA, patients with HHNS do not typically present with:",
    options: [
      "Dehydration",
      "Hyperglycemia",
      "Ketosis/Fruity breath",
      "Altered mental status"
    ],
    correct: 2,
    explanation: "In HHNS, there is enough insulin to prevent ketosis, so fruity breath is absent."
  },
  {
    module: "Medical",
    tags: ["Neurology", "Assessment"],
    question: "The Cincinnati Prehospital Stroke Scale evaluates which three signs?",
    options: [
      "Facial droop, arm drift, abnormal speech",
      "Grip strength, pupillary response, speech",
      "Facial droop, leg drift, memory",
      "Balance, eyes, speech"
    ],
    correct: 0,
    explanation: "The CPSS evaluates facial droop, arm drift, and abnormal speech."
  },
  {
    module: "Medical",
    tags: ["Neurology", "Pathology"],
    question: "A Transient Ischemic Attack (TIA) is characterized by stroke-like symptoms that resolve within:",
    options: [
      "1 hour",
      "12 hours",
      "24 hours",
      "48 hours"
    ],
    correct: 2,
    explanation: "TIA symptoms resolve within 24 hours."
  },
  {
    module: "Medical",
    tags: ["Neurology", "Assessment"],
    question: "Status epilepticus is defined as a seizure lasting longer than:",
    options: [
      "2 minutes",
      "5 minutes",
      "10 minutes",
      "15 minutes"
    ],
    correct: 1,
    explanation: "Status epilepticus is defined as a seizure lasting longer than 5 minutes."
  },
  {
    module: "Medical",
    tags: ["Neurology", "Assessment"],
    question: "The phase following a seizure characterized by confusion or lethargy is called the:",
    options: [
      "Tonic phase",
      "Clonic phase",
      "Post-ictal phase",
      "Aura phase"
    ],
    correct: 2,
    explanation: "The post-ictal phase follows a seizure."
  },
  {
    module: "Medical",
    tags: ["GI", "Pathology"],
    question: "Esophageal varices are most commonly caused by:",
    options: [
      "Alcoholism/Portal hypertension",
      "Smoking",
      "Trauma",
      "Genetic defects"
    ],
    correct: 0,
    explanation: "Esophageal varices are caused by portal hypertension, often due to alcoholism/liver cirrhosis."
  },
  {
    module: "Medical",
    tags: ["GI", "Pathology"],
    question: "A Mallory-Weiss tear is a laceration of the esophagus caused by:",
    options: [
      "Swallowing a foreign object",
      "Excessive vomiting",
      "Chemical ingestion",
      "Trauma"
    ],
    correct: 1,
    explanation: "Mallory-Weiss tears are caused by excessive vomiting."
  },
  {
    module: "Medical",
    tags: ["GI", "Assessment"],
    question: "Visceral pain is typically described as:",
    options: [
      "Sharp and localized",
      "Dull, achy, and poorly localized",
      "Tearing",
      "Burning"
    ],
    correct: 1,
    explanation: "Visceral pain comes from organs and is dull, achy, and poorly localized."
  },
  {
    module: "Medical",
    tags: ["Renal", "Assessment"],
    question: "When assessing a dialysis fistula, you should check for a 'thrill', which is:",
    options: [
      "A pulsating mass",
      "A vibration felt on palpation",
      "A sound heard on auscultation",
      "A visible bulge"
    ],
    correct: 1,
    explanation: "A thrill is a vibration felt over the fistula."
  },
  {
    module: "Medical",
    tags: ["GI", "Assessment"],
    question: "Melena refers to:",
    options: [
      "Bright red blood in stool",
      "Dark, tarry stool",
      "Vomiting blood",
      "Blood in urine"
    ],
    correct: 1,
    explanation: "Melena is dark, tarry stool indicating an upper GI bleed."
  },
  {
    module: "Medical",
    tags: ["GI", "Assessment"],
    question: "Pain at McBurney's point is associated with:",
    options: [
      "Cholecystitis",
      "Pancreatitis",
      "Appendicitis",
      "Diverticulitis"
    ],
    correct: 2,
    explanation: "McBurney's point tenderness indicates appendicitis."
  },
  {
    module: "Medical",
    tags: ["GI", "Assessment"],
    question: "Cholecystitis (gallbladder inflammation) typically presents with pain in the:",
    options: [
      "Left Upper Quadrant",
      "Right Upper Quadrant",
      "Right Lower Quadrant",
      "Left Lower Quadrant"
    ],
    correct: 1,
    explanation: "Cholecystitis causes pain in the Right Upper Quadrant (RUQ)."
  },
  {
    module: "Medical",
    tags: ["Renal", "Assessment"],
    question: "Patients with kidney stones (renal colic) often present as:",
    options: [
      "Lying very still",
      "Restless/pacing",
      "Unconscious",
      "Hyperventilating"
    ],
    correct: 1,
    explanation: "Patients with kidney stones are often restless and unable to find a comfortable position."
  },
  {
    module: "Medical",
    tags: ["GI", "Assessment"],
    question: "Pancreatitis pain is typically described as boring through to the:",
    options: [
      "Shoulder",
      "Back",
      "Groin",
      "Chest"
    ],
    correct: 1,
    explanation: "Pancreatitis pain radiates to the back."
  },
  {
    module: "Medical",
    tags: ["Hematology", "Pathology"],
    question: "Sickle cell crisis is caused by:",
    options: [
      "Excessive bleeding",
      "Vaso-occlusion (clumping of cells)",
      "Infection of red blood cells",
      "Low iron levels"
    ],
    correct: 1,
    explanation: "Sickle cell crisis is caused by vaso-occlusion due to misshapen cells."
  },
  {
    module: "Medical",
    tags: ["Hematology", "Pathology"],
    question: "Polycythemia is defined as:",
    options: [
      "Low red blood cell count",
      "Excess production of red blood cells",
      "Low platelet count",
      "High white blood cell count"
    ],
    correct: 1,
    explanation: "Polycythemia is the excess production of red blood cells."
  },
  {
    module: "Medical",
    tags: ["Infectious Disease", "Assessment"],
    question: "Brudzinski's sign is suggestive of:",
    options: [
      "Stroke",
      "Meningitis",
      "Seizure",
      "Head trauma"
    ],
    correct: 1,
    explanation: "Brudzinski's sign (neck flexion causing hip/knee flexion) suggests meningitis."
  },
  {
    module: "Medical",
    tags: ["Infectious Disease", "Assessment"],
    question: "Kernig's sign involves pain or resistance when:",
    options: [
      "Flexing the neck",
      "Extending the leg",
      "Palpating the abdomen",
      "Rotating the head"
    ],
    correct: 1,
    explanation: "Kernig's sign involves pain/resistance upon leg extension, indicating meningitis."
  },
  {
    module: "Medical",
    tags: ["OB/GYN", "Pharmacology"],
    question: "Magnesium Sulfate is used to treat eclampsia. The typical dose is:",
    options: [
      "1 g over 10 min",
      "2 g over 10 min",
      "4 g over 10 min",
      "6 g over 10 min"
    ],
    correct: 2,
    explanation: "The dose for eclampsia is 4 g over 10 min."
  },
  {
    module: "Medical",
    tags: ["OB/GYN", "Pathology"],
    question: "Placenta previa is characterized by:",
    options: [
      "Painful bleeding",
      "Painless bright red bleeding",
      "Abdominal cramping without bleeding",
      "Fetal distress only"
    ],
    correct: 1,
    explanation: "Placenta previa presents with painless bright red bleeding."
  },
  {
    module: "Medical",
    tags: ["OB/GYN", "Pathology"],
    question: "Abruptio placentae is characterized by:",
    options: [
      "Painless bleeding",
      "Tearing abdominal pain and dark/no bleeding",
      "Fever and chills",
      "Hypotension only"
    ],
    correct: 1,
    explanation: "Abruptio placentae presents with tearing pain and often dark or no visible bleeding."
  },
  // --- CLINICAL JUDGMENT MODULE ---
  {
    module: "Clinical Judgement",
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
    module: "Clinical Judgement",
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
    module: "Clinical Judgement",
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
    module: "Clinical Judgement",
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
    module: "Clinical Judgement",
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
    module: "Clinical Judgement",
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
    module: "Clinical Judgement",
    tags: ["Cardiology", "ACLS"],
    question: "You are treating a patient with a wide-complex tachycardia who is stable. You suspect VT. If the rhythm was actually SVT with aberrancy (a conduction block), which drug would be safe for both, but Adenosine might be risky for VT?",
    options: [
      "Amiodarone",
      "Adenosine",
      "Diltiazem",
      "Digoxin"
    ],
    correct: 0,
    explanation: "Amiodarone is generally safe for both VT and SVT with aberrancy. Adenosine is the first line for SVT but can sometimes cause deterioration in VT (though guidelines vary, Amiodarone is the broader antiarrhythmic)."
  },
  {
    module: "Clinical Judgement",
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
    module: "Clinical Judgement",
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
    module: "Clinical Judgement",
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
    module: "Clinical Judgement",
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
    module: "Clinical Judgement",
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
    module: "Clinical Judgement",
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
    module: "Clinical Judgement",
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
    module: "Clinical Judgement",
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
    module: "Clinical Judgement",
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
    module: "Clinical Judgement",
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
    module: "Clinical Judgement",
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
    module: "Clinical Judgement",
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
    module: "Clinical Judgement",
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
    module: "Clinical Judgement",
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
    module: "Clinical Judgement",
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
    module: "Clinical Judgement",
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
    module: "Clinical Judgement",
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
    module: "Clinical Judgement",
    tags: ["Cardiology", "Pharmacology"],
    question: "You are treating a patient with symptomatic bradycardia. You try Atropine but it is ineffective. The patient has a history of heart transplant. Why did Atropine fail?",
    options: [
      "Transplanted hearts are denervated (no Vagus nerve connection)",
      "Atropine dose was too low",
      "The patient is on beta blockers",
      "Transplanted hearts do not respond to drugs"
    ],
    correct: 0,
    explanation: "Atropine works by blocking the Vagus nerve. A transplanted heart has no Vagus nerve connection, so Atropine will not work. Pacing or catecholamines are needed."
  },
  {
    module: "Clinical Judgement",
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
    module: "Clinical Judgement",
    tags: ["Endocrine", "Assessment"],
    question: "You are treating a patient with suspected Addisonian Crisis (Adrenal Insufficiency). Besides fluids, what is a critical consideration?",
    options: [
      "Administering Insulin",
      "Checking for hyperkalemia and hypoglycemia",
      "Administering Beta Blockers",
      "Cooling the patient"
    ],
    correct: 1,
    explanation: "Addison's disease leads to low cortisol (hypoglycemia) and low aldosterone (sodium loss/potassium retention). Hyperkalemia and hypoglycemia are major threats."
  },
  {
    module: "Clinical Judgement",
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
    module: "Clinical Judgement",
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
    module: "Clinical Judgement",
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
    module: "Clinical Judgement",
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
    module: "Clinical Judgement",
    tags: ["Trauma", "Vitals"],
    question: "A patient is in cardiac arrest. You notice the dialysis fistula in the left arm has a thrill. Where should you establish IV access?",
    options: [
      "Left EJ",
      "Right arm or IO",
      "Use the fistula",
      "Left hand"
    ],
    correct: 1,
    explanation: "Never use a dialysis fistula for IV access or BP unless it's a life-or-death last resort and allowed by protocol. Use the other arm or an IO."
  },
  {
    module: "Clinical Judgement",
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
    module: "Clinical Judgement",
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
    module: "Clinical Judgement",
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
    module: "Clinical Judgement",
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
    module: "Clinical Judgement",
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
    module: "Clinical Judgement",
    tags: ["Airway", "Assessment"],
    question: "Which of the following is the most reliable method for confirming ET tube placement?",
    options: [
      "Ausculation",
      "Misting in the tube",
      "Continuous Waveform Capnography",
      "Pulse Oximetry"
    ],
    correct: 2,
    explanation: "Waveform capnography is the gold standard for tube confirmation."
  },
  {
    module: "Clinical Judgement",
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
    module: "Clinical Judgement",
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
    module: "Clinical Judgement",
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
    module: "Clinical Judgement",
    tags: ["Toxicology", "Assessment"],
    question: "A patient has 'cherry red' skin. This is a late sign of:",
    options: [
      "Cyanide poisoning",
      "Carbon Monoxide poisoning",
      "Methemoglobinemia",
      "Heat stroke"
    ],
    correct: 1,
    explanation: "Cherry red skin is a classic, though late/rare, sign of CO poisoning."
  },
  {
    module: "Clinical Judgement",
    tags: ["Trauma", "Operations"],
    question: "In a multisystem trauma patient, which intervention should be done en route rather than on scene?",
    options: [
      "Airway management",
      "Control of major bleeding",
      "IV access",
      "Spinal immobilization"
    ],
    correct: 2,
    explanation: "IVs should generally be started en route to minimize scene time (Platinum 10), whereas ABCs and hemorrhage control are immediate life threats."
  },
  {
    module: "Clinical Judgement",
    tags: ["ACLS", "Assessment"],
    question: "A patient in cardiac arrest has been intubated. CPR is in progress. The EtCO2 reading suddenly jumps from 15 to 40. What does this likely indicate?",
    options: [
      "The tube has dislodged",
      "Return of Spontaneous Circulation (ROSC)",
      "The patient is hyperventilating",
      "Equipment failure"
    ],
    correct: 1,
    explanation: "A sudden rise in EtCO2 during CPR is a strong indicator of ROSC (due to sudden perfusion of the lungs bringing CO2)."
  },
  {
    module: "Clinical Judgement",
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
    module: "Clinical Judgement",
    tags: ["Operations", "Safety"],
    question: "You are driving an ambulance code 3. You approach a red light. You must:",
    options: [
      "Slow down and check, but proceed without stopping",
      "Come to a complete stop and proceed when safe",
      "Drive through if your siren is on",
      "Follow the police escort"
    ],
    correct: 1,
    explanation: "Most laws and safe driving practices require a complete stop at red lights/stop signs before proceeding, even when driving emergency."
  },
  {
    module: "Clinical Judgement",
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
    module: "Clinical Judgement",
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
    module: "Clinical Judgement",
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
    module: "Clinical Judgement",
    tags: ["Airway", "Physiology"],
    question: "You are preparing to intubate. What is the purpose of 'pre-oxygenation' or nitrogen washout?",
    options: [
      "To sedate the patient",
      "To replace nitrogen in the functional residual capacity with oxygen",
      "To prevent aspiration",
      "To decrease intracranial pressure"
    ],
    correct: 1,
    explanation: "Pre-oxygenation creates an oxygen reservoir in the lungs, extending the safe apnea time during intubation."
  }

];
