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
  },
  {
    module: "Airway",
    tags: ["Physiology", "Acid-Base"],
    question: "A patient presents with a PaCO2 of 60 mmHg. Based on normal physiological ranges, how would you describe this patient's ventilatory status?",
    options: [
      "Hyperventilating",
      "Hypoventilating",
      "Maintaining normal homeostasis",
      "In a state of respiratory alkalosis"
    ],
    correct: 1,
    explanation: "Normal PaCO2 is 35-45 mmHg. A level of 60 mmHg indicates hypercarbia (CO2 retention), meaning the patient is breathing too slowly or shallowly to eliminate waste gas."
  },
  {
    module: "Airway",
    tags: ["Physiology", "Acid-Base"],
    question: "A patient is hyperventilating and begins to experience carpopedal spasms. What is the likely underlying acid-base disturbance?",
    options: [
      "Respiratory Acidosis",
      "Respiratory Alkalosis",
      "Metabolic Acidosis",
      "Metabolic Alkalosis"
    ],
    correct: 1,
    explanation: "Hyperventilation causes the patient to 'blow off' too much CO2 (hypocarbia), leading to respiratory alkalosis and characteristic muscle spasms in the hands and feet."
  },
  {
    module: "Airway",
    tags: ["Physiology", "Pathophysiology"],
    question: "What is the primary function of surfactant in the lungs?",
    options: [
      "To increase the rate of gas diffusion",
      "To decrease surface tension and keep alveoli expanded",
      "To produce mucus to trap foreign particles",
      "To stimulate the Hering-Breuer reflex"
    ],
    correct: 1,
    explanation: "Surfactant is a liquid protein that coats the alveoli to decrease surface tension, preventing alveolar collapse (atelectasis) and keeping them expanded for gas exchange."
  },
  {
    module: "Airway",
    tags: ["Assessment", "Cardiovascular"],
    question: "You observe a rise in jugular vein distention during a patient's inspiration. This clinical finding is known as:",
    options: [
      "Beck's Triad",
      "Cushing's Reflex",
      "Kussmaul's Sign",
      "Hamman's Sign"
    ],
    correct: 2,
    explanation: "Kussmaul’s sign is the paradoxical rise in jugular venous pressure (JVP) during inspiration, often seen in conditions like restrictive cardiomyopathy or right heart failure."
  },
  {
    module: "Airway",
    tags: ["Capnography", "Assessment"],
    question: "A 'shark fin' appearance on a capnogram waveform is most indicative of:",
    options: [
      "Hypoventilation",
      "Bronchospasm",
      "Pulmonary Embolism",
      "Esophageal Intubation"
    ],
    correct: 1,
    explanation: "The shark fin shape indicates an exhalation deficit and resistance to airflow, which is the hallmark of bronchospasm seen in asthma or COPD."
  },
  {
    module: "Airway",
    tags: ["COPD", "Pathophysiology"],
    question: "A 'blue bloater' is a clinical description for a patient with which condition?",
    options: [
      "Emphysema",
      "Chronic Bronchitis",
      "Acute Asthma",
      "Pneumothorax"
    ],
    correct: 1,
    explanation: "Chronic bronchitis patients are often overweight and cyanotic (blue) due to chronic hypoxemia, earned the name 'blue bloaters.'"
  },
  {
    module: "Airway",
    tags: ["COPD", "Pathophysiology"],
    question: "In chronic bronchitis, which structures are primarily responsible for the overproduction of mucus?",
    options: [
      "Alveolar sacs",
      "Goblet cells",
      "Pleural membranes",
      "Capillary beds"
    ],
    correct: 1,
    explanation: "The pathophysiology of chronic bronchitis involves the overproduction of mucus by goblet cells in response to irritants like smoking."
  },
  {
    module: "Airway",
    tags: ["COPD", "Pathophysiology"],
    question: "Why do emphysema patients often present with a pink skin coloration ('Pink Puffers')?",
    options: [
      "High levels of carbon dioxide retention",
      "Increased production of red blood cells (polycythemia) to compensate for low O2",
      "Constant fever from chronic infection",
      "Excessive oxygen saturation from rapid breathing"
    ],
    correct: 1,
    explanation: "In emphysema, the body senses low oxygen and compensates by producing more red blood cells (polycythemia), which gives the patient a pinker complexion."
  },
  {
    module: "Airway",
    tags: ["COPD", "Assessment"],
    question: "Which clinical finding is specifically associated with the physical appearance of an emphysema patient?",
    options: [
      "Pitting ankle edema",
      "Barrel chest and hypertrophy of accessory muscles",
      "Productive cough for 3 months of the year",
      "Flat neck veins during inspiration"
    ],
    correct: 1,
    explanation: "Emphysema patients typically present as thin with a 'barrel chest,' use of accessory muscles, and pursed-lip breathing to maintain airway pressure."
  },
  {
    module: "Airway",
    tags: ["COPD", "Cardiovascular"],
    question: "Right-sided heart hypertrophy secondary to pulmonary hypertension in a COPD patient is known as:",
    options: [
      "Congestive Heart Failure",
      "Cor Pulmonale",
      "Cardiac Tamponade",
      "Myocardial Infarction"
    ],
    correct: 1,
    explanation: "Cor pulmonale is the specific term for right ventricular hypertrophy and failure caused by the high resistance in the pulmonary arteries found in chronic lung disease."
  },
  {
    module: "Airway",
    tags: ["Pathology", "Assessment"],
    question: "A patient with a long history of smoking presents with cyanosis, hoarseness, and hemoptysis. Which condition should you most highly suspect?",
    options: [
      "Pneumonia",
      "Lung Cancer",
      "Pulmonary Embolism",
      "Asthma"
    ],
    correct: 1,
    explanation: "Hemoptysis (coughing up blood) is a hallmark sign of lung cancer. It often coexists with COPD since both are heavily linked to smoking."
  },
  {
    module: "Airway",
    tags: ["Pathology", "Risk Factors"],
    question: "Why are patients with lung cancer more prone to developing pulmonary embolisms (PEs)?",
    options: [
      "The tumor directly produces blood clots",
      "Cancer creates a hypercoagulable state and may infringe on large vessels",
      "Chemotherapy always causes deep vein thrombosis",
      "Cancer patients breathe too fast, creating clots"
    ],
    correct: 1,
    explanation: "Cancer patients are more prone to PEs and 'bleeding out' due to the tumor infringing on large vessels and the body's systemic response to the malignancy."
  },
  {
    module: "Airway",
    tags: ["Trauma", "Assessment"],
    question: "A patient presents with substernal chest pain, hoarseness, and a narrowing pulse pressure after a traumatic chest injury. You suspect air has entered the space containing the great vessels. This is known as:",
    options: [
      "Tension Pneumothorax",
      "Pneumomediastinum",
      "Pericardial Tamponade",
      "Hemothorax"
    ],
    correct: 1,
    explanation: "Pneumomediastinum is air in the mediastinal space. The pressure from this air pushes on the heart, causing a narrowing pulse pressure and hoarseness."
  },
  {
    module: "Airway",
    tags: ["Infectious Disease", "Assessment"],
    question: "Which clinical finding is most characteristic of a patient with bacterial pneumonia?",
    options: [
      "Dry, non-productive cough and hives",
      "Deep productive cough with yellowish/greenish sputum and chills",
      "Stridor and clear lung sounds",
      "Rapid respirations with sweet-smelling breath"
    ],
    correct: 1,
    explanation: "Bacterial pneumonia typically presents with a productive cough (often foul-smelling or blood-streaked), fever, and chills."
  },
  {
    module: "Airway",
    tags: ["Assessment", "Infectious Disease"],
    question: "In which lung lobe does bacterial pneumonia frequently appear first, as it is the area least affected by normal respirations?",
    options: [
      "Right Upper Lobe",
      "Left Lower Lobe",
      "Right Middle Lobe",
      "Left Upper Lobe"
    ],
    correct: 1,
    explanation: "Bacterial pneumonia often appears first in the left lower lobe because it is less effectively cleared by normal respiratory movement."
  },
  {
    module: "Airway",
    tags: ["Pharmacology", "Risk Factors"],
    question: "Which group of medications, often found in inhalers, makes a patient more susceptible to developing pneumonia?",
    options: [
      "Beta-blockers",
      "Steroids",
      "Diuretics",
      "Benzodiazepines"
    ],
    correct: 1,
    explanation: "Patients using steroids, especially in long-term inhaler use, have a higher risk of developing pneumonia due to localized or systemic immunosuppression."
  },
  {
    module: "Airway",
    tags: ["Infectious Disease"],
    question: "What is the most common viral cause of pneumonia and respiratory distress during the winter months, often referred to as 'walking pneumonia' in its milder forms?",
    options: [
      "Influenza B",
      "Respiratory Syncytial Virus (RSV)",
      "Rhinovirus",
      "Adenovirus"
    ],
    correct: 1,
    explanation: "RSV is the leading cause of pneumonia in the winter and is a common source of respiratory illness in both children and adults."
  },
  {
    module: "Airway",
    tags: ["Pathology", "Assessment"],
    question: "A patient presents with a sudden onset of sharp pleuritic chest pain and hyperresonance to percussion on the affected side. You should suspect:",
    options: [
      "Pneumonia",
      "Pneumothorax",
      "Pulmonary Edema",
      "Epiglottitis"
    ],
    correct: 1,
    explanation: "A pneumothorax is characterized by sudden sharp pain, decreased breath sounds on the involved side, and hyperresonance to percussion due to air trapped in the pleural space."
  },
  {
    module: "Airway",
    tags: ["Infectious Disease", "Assessment"],
    question: "Severe Acute Respiratory Syndrome (SARS) is a viral infection that primarily attacks which part of the respiratory system?",
    options: [
      "The alveoli",
      "The upper respiratory system",
      "The pleural space",
      "The diaphragm"
    ],
    correct: 1,
    explanation: "SARS is a viral respiratory illness that attacks the upper respiratory system, often presenting with flu-like symptoms such as chills, rigors, and myalgia."
  },
  {
    module: "Airway",
    tags: ["Infectious Disease", "Safety"],
    question: "What is the required personal protective equipment (PPE) when caring for a patient with suspected Tuberculosis (TB)?",
    options: [
      "Standard surgical mask",
      "Face shield and gown only",
      "N95 or HEPA respirator",
      "No mask is required if the patient is not coughing"
    ],
    correct: 2,
    explanation: "NIOSH and OSHA standards require the use of an N95 or HEPA respirator to protect against the inhalation of the bacteria that cause Tuberculosis."
  },
  {
    module: "Airway",
    tags: ["Infectious Disease", "Assessment"],
    question: "Which of the following symptoms is a hallmark of active Tuberculosis?",
    options: [
      "Seal-bark cough",
      "Night sweats and hemoptysis",
      "Drooling and tripod positioning",
      "Carpopedal spasms"
    ],
    correct: 1,
    explanation: "Active TB often presents with systemic symptoms like night sweats, rapid weight loss, and hemoptysis (coughing up blood-streaked mucus)."
  },
  {
    module: "Airway",
    tags: ["Infectious Disease", "Pediatrics"],
    question: "A 2-year-old child presents at night with a loud cough that sounds like a seal barking. This classic sign is indicative of:",
    options: [
      "Epiglottitis",
      "Croup",
      "Bronchiolitis",
      "Asthma"
    ],
    correct: 1,
    explanation: "Croup is a viral infection characterized by a barking cough, tachypnea, and inspiratory stridor, typically occurring at night."
  },
  {
    module: "Airway",
    tags: ["Pediatrics", "Pharmacology"],
    question: "What is the preferred pharmacological treatment for a pediatric patient with severe Croup?",
    options: [
      "Albuterol nebulizer",
      "Racemic Epinephrine",
      "Intravenous Atropine",
      "Oral Aspirin"
    ],
    correct: 1,
    explanation: "Racemic epinephrine (or nebulized 1:1,000 epinephrine) is used to reduce upper airway edema associated with Croup."
  },
  {
    module: "Airway",
    tags: ["Infectious Disease", "Assessment"],
    question: "A 4-year-old patient is found in the tripod position, drooling, and complaining of a painful sore throat. What is the most critical contraindication in this scenario?",
    options: [
      "Administering oxygen",
      "Placing anything in the patient's mouth (e.g., OPA or tongue blade)",
      "Assisting ventilations with a BVM",
      "Transporting the patient in a sitting position"
    ],
    correct: 1,
    explanation: "In suspected epiglottitis, you must never inspect the airway or insert adjuncts, as this can trigger a fatal laryngospasm."
  },
  {
    module: "Airway",
    tags: ["Infectious Disease", "Assessment"],
    question: "How does the onset of Epiglottitis typically compare to other respiratory infections?",
    options: [
      "It develops slowly over several weeks",
      "It has a rapid onset, typically appearing within 12-24 hours",
      "It only occurs during the winter months",
      "It is always preceded by a seal-bark cough"
    ],
    correct: 1,
    explanation: "Epiglottitis is a bacterial infection with a rapid onset, often reaching a critical state within 12 to 24 hours."
  },
  {
    module: "Airway",
    tags: ["Pediatrics", "Infectious Disease"],
    question: "A 10-month-old infant presents with wheezing and respiratory distress. Based on the patient's age, what is the most likely viral cause of this infection?",
    options: [
      "Asthma",
      "Bronchiolitis",
      "Croup",
      "Epiglottitis"
    ],
    correct: 1,
    explanation: "Any wheezing in a child under the age of 1 (and generally under age 3) is considered bronchiolitis rather than asthma, as bronchiolitis is the primary viral infection in the first year of life."
  },
  {
    module: "Airway",
    tags: ["Pediatrics", "Equipment"],
    question: "Using the standard formula for a pediatric patient, what size Endotracheal (ET) tube should be selected for an 8-year-old child?",
    options: [
      "4.5 mm",
      "5.0 mm",
      "6.0 mm",
      "7.0 mm"
    ],
    correct: 2,
    explanation: "The proper formula to determine pediatric ET tube size is (16 + Age) / 4. For an 8-year-old: (16 + 8) / 4 = 6.0 mm."
  },
  {
    module: "Airway",
    tags: ["Physiology", "Acid-Base"],
    question: "A patient with a high fever begins breathing rapidly to meet metabolic demands, leading to respiratory alkalosis. Why does this often cause numbness, tingling, or muscle spasms?",
    options: [
      "Sodium levels rise sharply in the blood",
      "Active calcium levels drop as calcium binds to circulating proteins",
      "The body loses too much oxygen",
      "Potassium shifts into the intracellular space"
    ],
    correct: 1,
    explanation: "Fever speeds up metabolism, causing tachypnea and respiratory alkalosis. In this alkaline state, calcium falls off receptor sites and is gathered by proteins, making it inactive and leading to nerve and muscle excitability (numbness/tingling)."
  },
  {
    module: "Airway",
    tags: ["Assessment", "Pathology"],
    question: "A patient recovering from pneumonia in the hospital suddenly develops right-sided chest pain and ankle edema. What should you suspect?",
    options: [
      "Worsening pneumonia",
      "Acute Pulmonary Embolism (PE)",
      "Congestive Heart Failure",
      "Spontaneous Pneumothorax"
    ],
    correct: 1,
    explanation: "Hospitalized patients are at high risk for Deep Vein Thrombosis (DVT) due to inactivity, which can lead to a PE. The ankle edema suggests a DVT."
  },
  {
    module: "Airway",
    tags: ["Pharmacology", "Pathology"],
    question: "A patient with a history of emphysema is prescribed Atrovent (Ipratropium). What is the primary mechanism of this medication?",
    options: [
      "Sympathetic agonist",
      "Parasympathetic blocker",
      "Xanthine derivative",
      "Corticosteroid"
    ],
    correct: 1,
    explanation: "Atrovent is a parasympathetic blocker that works by inhibiting bronchoconstriction."
  },
  {
    module: "Airway",
    tags: ["Toxicology", "Pathology"],
    question: "Carbon Monoxide (CO) poisoning results in cellular hypoxia because CO has a greater affinity for hemoglobin than oxygen by a factor of:",
    options: [
      "10 times",
      "50 times",
      "200 times",
      "500 times"
    ],
    correct: 2,
    explanation: "Carbon Monoxide binds to hemoglobin with approximately 200 times greater affinity than oxygen, effectively displacing oxygen and causing metabolic acidosis."
  },
  {
    module: "Airway",
    tags: ["Infectious Disease", "Assessment"],
    question: "What is Ludwig’s Angina?",
    options: [
      "A type of chest pain caused by heart disease",
      "Cellulitis of the floor of the mouth often following a tooth infection",
      "A viral infection of the epiglottis",
      "Inflammation of the pericardial sac"
    ],
    correct: 1,
    explanation: "Ludwig’s Angina is a serious skin infection (cellulitis) that occurs on the floor of the mouth, under the tongue, often after a tooth abscess."
  },
  {
    module: "Airway",
    tags: ["Physiology", "Assessment"],
    question: "Pulsus paradoxus is characterized by a decrease in blood pressure during inhalation. What is the primary driver of this finding in respiratory patients?",
    options: [
      "Low atmospheric pressure",
      "Air trapped in the lungs increasing intrathoracic pressure and pushing on the heart",
      "A sudden drop in heart rate",
      "Severe dehydration"
    ],
    correct: 1,
    explanation: "High pressure in the thoracic vault from trapped air causes the blood pressure to drop specifically during the inhalation phase."
  }
];
