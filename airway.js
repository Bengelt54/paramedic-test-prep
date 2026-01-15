const AIRWAY_QUESTIONS = [
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
    explanation: "RSV is the primary viral cause of bronchiolitis in children under 2 years old."
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
    explanation: "Cheyne-Stokes is a rhythmic pattern of increasing and decreasing depth followed by apnea, often seen in stroke or head injury."
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
    explanation: "ACE inhibitors (ending in -pril) can cause non-allergic angioedema, manifesting as swelling of the tongue/lips/larynx."
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
    explanation: "Air escaping into the mediastinum can cause subcutaneous emphysema in the neck and a crunching sound (Hamman's sign) synchronized with the heartbeat."
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
    explanation: "Clubbing (enlargement of fingertips) is a sign of long-term, chronic hypoxia seen in conditions like COPD or cystic fibrosis."
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
    explanation: "High pressure in the chest squeezes the vena cava, preventing blood from returning to the heart (decreased preload), causing shock."
  }
];