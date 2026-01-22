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
  },
  {
    module: "Anatomy",
    tags: ["Neurology", "Assessment"],
    question: "Which cranial nerve is responsible for pupil constriction and eye movement, and is often compressed during brain swelling?",
    options: [
      "CN II (Optic)",
      "CN III (Oculomotor)",
      "CN V (Trigeminal)",
      "CN X (Vagus)"
    ],
    correct: 1,
    explanation: "The 3rd cranial nerve (oculomotor) allows for pupil constriction; pressure on the tentorium during brain swelling compresses this nerve, leading to pupillary changes."
  },
  {
    module: "Anatomy",
    tags: ["Neurology", "Pathology"],
    question: "Trigeminal Neuralgia (Tic Douloureux) is a painful condition affecting which cranial nerve?",
    options: [
      "3rd Cranial Nerve",
      "5th Cranial Nerve",
      "7th Cranial Nerve",
      "10th Cranial Nerve"
    ],
    correct: 1,
    explanation: "The 5th cranial nerve (trigeminal) is responsible for most facial sensation. Neuralgia of this nerve causes severe facial pain."
  },
  {
    module: "Anatomy",
    tags: ["Neurology", "Physiology"],
    question: "The Vagus nerve (CN X) serves as the primary connection for which part of the nervous system?",
    options: [
      "Sympathetic nervous system",
      "Parasympathetic nervous system",
      "Somatic nervous system",
      "Central nervous system"
    ],
    correct: 1,
    explanation: "The 10th cranial nerve (Vagus) provides the parasympathetic connection between the brain and numerous visceral organs."
  },
  {
    module: "Anatomy",
    tags: ["Musculoskeletal"],
    question: "A patient has suffered a sprained ankle. Which structure has been injured?",
    options: [
      "A muscle",
      "A tendon",
      "A ligament",
      "A bone"
    ],
    correct: 2,
    explanation: "A sprain is specifically an injury to a ligament."
  },
  {
    module: "Anatomy",
    tags: ["Renal", "Pathology"],
    question: "Chronic kidney disease often leads to hypertension. What other systemic condition is frequently found in these patients due to decreased erythropoietin production?",
    options: [
      "Polycythemia",
      "Anemia",
      "Leukemia",
      "Thrombocytopenia"
    ],
    correct: 1,
    explanation: "Kidney disease causes hypertension and often leaves the patient anemic."
  },
  {
    module: "Anatomy",
    tags: ["Neurology", "Assessment"],
    question: "The Glasgow Coma Scale (GCS) evaluates Eye, Verbal, and Motor responses. Which vital sign is notably NOT included in the GCS scale?",
    options: [
      "Heart Rate",
      "Blood Pressure",
      "Respirations",
      "Temperature"
    ],
    correct: 2,
    explanation: "Respirations are not part of the GCS scale."
  },
  {
    module: "Anatomy",
    tags: ["Cell Biology", "Physiology"],
    question: "Which organelle is considered the 'powerhouse' of the cell and is responsible for energy production via the Krebs cycle?",
    options: [
      "Ribosomes",
      "Mitochondria",
      "Endoplasmic Reticulum",
      "Lysosomes"
    ],
    correct: 1,
    explanation: "Mitochondria are rod-shaped organelles that act as the metabolic center of the cell, producing energy through the Krebs cycle."
  },
  {
    module: "Anatomy",
    tags: ["Assessment", "Neurology"],
    question: "During a pediatric assessment, you stroke the bottom of an infant's foot and the toes point upward. This is known as a:",
    options: [
      "Negative Babinski reflex; an abnormal finding",
      "Positive Babinski reflex; a normal finding in infants",
      "Cushing's reflex; a sign of head injury",
      "Moro reflex; a normal startle response"
    ],
    correct: 1,
    explanation: "A positive Babinski reflex (toes pointing upward) is a normal finding in infants, though it typically indicates neurological injury in adults."
  },
  {
    module: "Anatomy",
    tags: ["Abdominal Landmarks", "Trauma"],
    question: "A trauma patient complains of referred pain in the left shoulder, also known as Kehr's sign. Which organ, located in the Upper Left Quadrant (ULQ), is likely injured?",
    options: [
      "Liver",
      "Gallbladder",
      "Spleen",
      "Appendix"
    ],
    correct: 2,
    explanation: "The spleen is located in the ULQ. Injury to the spleen often causes referred pain to the left shoulder, which is called Kehr's sign."
  },
  {
    module: "Anatomy",
    tags: ["Spine", "Trauma"],
    question: "A fracture of the 'Dens' (odontoid process), which serves as the pivot bone between the Atlas (C1) and Axis (C2), is commonly referred to as a:",
    options: [
      "Colles' fracture",
      "Hangman’s fracture",
      "Boxer’s fracture",
      "Smith’s fracture"
    ],
    correct: 1,
    explanation: "The Dens is part of the Axis (C2). A fracture of this specific process is clinically known as a Hangman’s fracture."
  },
  {
    module: "Anatomy",
    tags: ["Neurology", "Landmarks"],
    question: "If a patient has a spinal cord injury and reports a total loss of sensation below the level of the umbilicus, which dermatome/vertebra is likely involved?",
    options: [
      "C-4",
      "T-4",
      "T-10",
      "L-5"
    ],
    correct: 2,
    explanation: "The T-10 dermatome is located at the level of the umbilicus. (T-4 is at the nipple line)."
  },
  {
    module: "Anatomy",
    tags: ["Neurology", "Physiology"],
    question: "Which nerve is responsible for controlling the diaphragm?",
    options: [
      "Vagus nerve",
      "Phrenic nerve",
      "Trigeminal nerve",
      "Sciatic nerve"
    ],
    correct: 1,
    explanation: "The phrenic nerve (arising from C3-C5) provides the motor supply to the diaphragm. Remember: 'C3, 4, 5 stay alive.'"
  },
  {
    module: "Anatomy",
    tags: ["Blood Types"],
    question: "In emergency medicine, which blood types are considered the 'Universal Donor' and 'Universal Recipient' respectively?",
    options: [
      "O+ and AB-",
      "O- and AB+",
      "A- and O+",
      "B+ and AB-"
    ],
    correct: 1,
    explanation: "O-negative blood can be given to anyone (Universal Donor), while AB-positive patients can receive any blood type (Universal Recipient)."
  },
  {
    module: "Anatomy",
    tags: ["Respiratory"],
    question: "The serous membrane that is directly connected to the surface of the lung tissue is the:",
    options: [
      "Parietal pleura",
      "Visceral pleura",
      "Pericardium",
      "Peritoneum"
    ],
    correct: 1,
    explanation: "The visceral pleura is the inner layer that covers the lungs, while the parietal pleura lines the chest cavity."
  },
  {
    module: "Anatomy",
    tags: ["Neurology", "Assessment"],
    question: "What is the clinical term for a patient who has naturally occurring, unequal pupil sizes?",
    options: [
      "Nystagmus",
      "Anisocoria",
      "Miosis",
      "Mydriasis"
    ],
    correct: 1,
    explanation: "Anisocoria is the condition where a person has unequal pupils. In a small percentage of the population, this is a normal, non-pathological finding."
  },
  {
    module: "Anatomy",
    tags: ["Physiology", "Hemodynamics"],
    question: "Blood Pressure (BP) is mathematically determined by which formula?",
    options: [
      "BP = HR x SV",
      "BP = CO x SVR",
      "BP = SV x SVR",
      "BP = CO / HR"
    ],
    correct: 1,
    explanation: "Blood Pressure is the product of Cardiac Output (CO) and Systemic Vascular Resistance (SVR)."
  },
  {
    module: "Anatomy",
    tags: ["Cardiac", "Anatomy"],
    question: "Which heart valve is located between the Left Atrium and the Left Ventricle?",
    options: [
      "Tricuspid valve",
      "Pulmonary valve",
      "Mitral (Bicuspid) valve",
      "Aortic valve"
    ],
    correct: 2,
    explanation: "The Mitral valve (also called the Bicuspid valve) separates the left atrium from the left ventricle."
  },
  {
    module: "Anatomy",
    tags: ["Cell Biology", "Pathology"],
    question: "Which term describes an increase in the actual number of cells in an organ or tissue, typically resulting in an increase in size?",
    options: [
      "Atrophy",
      "Hypertrophy",
      "Hyperplasia",
      "Metaplasia"
    ],
    correct: 2,
    explanation: "Hyperplasia is an increase in the number of cells. Atrophy is a decrease in cell size, and Metaplasia is the replacement of one cell type with another."
  },
  {
    module: "Anatomy",
    tags: ["Neurology"],
    question: "Which lobe of the brain is primarily responsible for processing visual information?",
    options: [
      "Frontal lobe",
      "Parietal lobe",
      "Temporal lobe",
      "Occipital lobe"
    ],
    correct: 3,
    explanation: "The occipital lobe, located at the back of the brain, is the visual processing center."
  },
  {
    module: "Anatomy",
    tags: ["Abdominal Landmarks"],
    question: "McBurney’s point, located one-third of the distance from the iliac crest (hip) to the umbilicus, is the classic site of maximum tenderness for which condition?",
    options: [
      "Cholecystitis",
      "Diverticulitis",
      "Appendicitis",
      "Pancreatitis"
    ],
    correct: 2,
    explanation: "Tenderness at McBurney's point in the Right Lower Quadrant (RLQ) is a hallmark sign of acute appendicitis."
  },
  {
    module: "Anatomy",
    tags: ["Musculoskeletal"],
    question: "Which type of connective tissue is responsible for attaching muscle to bone (e.g., the Achilles)?",
    options: [
      "Ligament",
      "Tendon",
      "Cartilage",
      "Fascia"
    ],
    correct: 1,
    explanation: "Tendons attach muscle to bone. Ligaments attach bone to bone."
  },
  {
    module: "Anatomy",
    tags: ["Physiology", "Immune"],
    question: "During an inflammatory response, which cells are responsible for degranulating and releasing histamine?",
    options: [
      "Red Blood Cells",
      "Mast Cells",
      "T-Cells",
      "Platelets"
    ],
    correct: 1,
    explanation: "Mast cells degranulate to release histamine, which causes vasodilation and increased capillary permeability."
  },
  {
    module: "Anatomy",
    tags: ["Neurology", "Trauma"],
    question: "A 'Coup' injury in a traumatic brain injury refers to damage that occurs:",
    options: [
      "On the side opposite the impact",
      "On the same side as the initial impact",
      "Only in the brainstem",
      "Due to a penetrating object"
    ],
    correct: 1,
    explanation: "A Coup injury happens at the site of impact. A Contrecoup injury occurs on the opposite side as the brain rebounds within the skull."
  },
  {
    module: "Anatomy",
    tags: ["Neurology", "Trauma"],
    question: "A 'Contre-Coup' injury in a traumatic brain injury is characterized by damage occurring:",
    options: [
      "On the same side as the impact",
      "On the opposite side from the injury site",
      "Only within the brainstem",
      "Directly at the base of the skull"
    ],
    correct: 1,
    explanation: "A Contre-Coup injury occurs when the brain impacts the side of the skull opposite from the initial point of injury."
  },
  {
    module: "Anatomy",
    tags: ["Endocrine"],
    question: "Which gland is considered a 'dual-function' gland, possessing both endocrine and exocrine properties?",
    options: [
      "Thyroid",
      "Adrenal",
      "Pancreas",
      "Pituitary"
    ],
    correct: 2,
    explanation: "The pancreas is a dual-function gland; it acts as an exocrine gland (secreting digestive enzymes through ducts) and an endocrine gland (secreting insulin/glucagon directly into the blood)."
  },
  {
    module: "Anatomy",
    tags: ["Physiology"],
    question: "What is the 'Bohr Effect' in respiratory physiology?",
    options: [
      "The movement of glucose into the cell via insulin",
      "The response of hemoglobin to pH and temperature changes, causing oxygen to release to working muscles",
      "The involuntary contraction of the diaphragm during hiccups",
      "The buildup of carbon dioxide in the alveoli"
    ],
    correct: 1,
    explanation: "The Bohr effect describes how a lower pH and higher temperature (common in working muscles) cause hemoglobin to release oxygen more readily."
  },
  {
    module: "Anatomy",
    tags: ["Skeletal", "Landmarks"],
    question: "The 'Angle of Louis' is a critical landmark for the 2nd intercostal space. Which part of the sternum defines its upper border?",
    options: [
      "Xiphoid process",
      "Body of the sternum",
      "Manubrium",
      "Clavicle"
    ],
    correct: 2,
    explanation: "The Manubrium is the superior segment of the sternum; its junction with the sternal body creates the Angle of Louis."
  },
  {
    module: "Anatomy",
    tags: ["Abdominal Landmarks", "Pathology"],
    question: "Pain when pressure is applied to the Right Upper Quadrant (RUQ) during inspiration is a positive Murphy’s sign. This indicates an issue with which organ?",
    options: [
      "Appendix",
      "Spleen",
      "Gallbladder",
      "Pancreas"
    ],
    correct: 2,
    explanation: "Murphy’s sign is a classic test for cholecystitis (inflammation of the gallbladder)."
  },
  {
    module: "Anatomy",
    tags: ["Physiology", "Pathology"],
    question: "A patient with liver or kidney disease develops edema due to a decrease in albumin production. This is an example of which mechanism of edema?",
    options: [
      "Increased hydrostatic pressure",
      "Decreased oncotic force",
      "Lymph channel blockage",
      "Increased capillary permeability"
    ],
    correct: 1,
    explanation: "Oncotic force is maintained by proteins like albumin. When protein production drops, the 'pull' of fluid back into the vessels decreases, leading to edema."
  },
  {
    module: "Anatomy",
    tags: ["GI", "Physiology"],
    question: "Where is bile produced, and what is its primary function?",
    options: [
      "Produced in the gallbladder; breaks down protein",
      "Produced in the liver; emulsifies fats",
      "Produced in the pancreas; neutralizes stomach acid",
      "Produced in the spleen; filters old blood cells"
    ],
    correct: 1,
    explanation: "Bile is produced in the liver from old red blood cells and stored in the gallbladder. Its function is to emulsify (break down) fat."
  },
  {
    module: "Anatomy",
    tags: ["Pharmacology", "Calculations"],
    question: "In the apothecary system, how many milligrams (mg) are equivalent to 1 grain?",
    options: [
      "15 mg",
      "30 mg",
      "60 mg",
      "100 mg"
    ],
    correct: 2,
    explanation: "One grain is equivalent to 60 mg."
  },
  {
    module: "Anatomy",
    tags: ["Physiology", "Electrolytes"],
    question: "Which electrolyte is considered the chief intracellular cation (found primarily inside the cell)?",
    options: [
      "Sodium (Na+)",
      "Potassium (K+)",
      "Chloride (Cl-)",
      "Bicarbonate (HCO3-)"
    ],
    correct: 1,
    explanation: "Potassium is the chief intracellular cation. Sodium is the chief extracellular cation. A helpful way to remember: 'Na, get out of here!'"
  },
  {
    module: "Anatomy",
    tags: ["Physiology", "Fluid Balance"],
    question: "A solution that has a greater concentration of solutes than plasma and attracts fluid from the interstitial space into the bloodstream is called:",
    options: [
      "Hypotonic",
      "Isotonic",
      "Hypertonic",
      "Isovolumetric"
    ],
    correct: 2,
    explanation: "Hypertonic solutions have greater tonicity than plasma, causing fluid to move into the space with higher solute concentration."
  },
  {
    module: "Anatomy",
    tags: ["Respiratory", "Physiology"],
    question: "Surfactant is a substance produced by Type II alveolar cells. What is its primary function in the lungs?",
    options: [
      "To decrease surface tension and keep alveoli open",
      "To increase the rate of CO2 diffusion",
      "To prevent bacteria from entering the bloodstream",
      "To stimulate the phrenic nerve"
    ],
    correct: 0,
    explanation: "Surfactant reduces surface tension within the alveoli, preventing them from collapsing (atelectasis) during exhalation."
  },
  {
    module: "Anatomy",
    tags: ["Physiology", "Metabolism"],
    question: "A patient in profound shock is no longer able to use oxygen for energy production at the cellular level. This state is best described as:",
    options: [
      "Aerobic metabolism",
      "Anaerobic metabolism",
      "Hypermetabolic state",
      "Homeostasis"
    ],
    correct: 1,
    explanation: "Anaerobic metabolism occurs when the body lacks sufficient oxygen to produce energy, leading to the production of lactic acid and metabolic acidosis."
  },
  {
    module: "Anatomy",
    tags: ["Cell Biology"],
    question: "What is the process called when white blood cells move toward a specific point of infection in the body?",
    options: [
      "Phagocytosis",
      "Chemotaxis",
      "Pinocytosis",
      "Mitosis"
    ],
    correct: 1,
    explanation: "Chemotaxis is the movement of cells (like leukocytes) in response to chemical signals, guiding them to the site of infection or injury."
  },
  {
    module: "Anatomy",
    tags: ["Physiology", "Fluid Balance"],
    question: "Following a severe burn, fluid shifts from the bloodstream into the interstitial space. This phenomenon is known as:",
    options: [
      "Intracellular shifting",
      "First spacing",
      "Third spacing",
      "Osmotic diuresis"
    ],
    correct: 2,
    explanation: "Third spacing occurs when fluid moves into areas where it does not normally belong in large quantities, such as the interstitial space, leading to hypovolemia."
  },
  {
    module: "Anatomy",
    tags: ["Cardiovascular", "Physiology"],
    question: "Which component of the Fick Principle deals specifically with how oxygen is transported and utilized throughout the body?",
    options: [
      "Diffusion",
      "Perfusion",
      "The Fick Principle",
      "Starling's Law"
    ],
    correct: 2,
    explanation: "The Fick Principle describes the complex process of how oxygen is taken in by the lungs, transported by the blood, and used by the cells."
  },
  {
    module: "Anatomy",
    tags: ["Cardiovascular", "Terminology"],
    question: "When evaluating a patient's lipid panel, which substance is commonly referred to as 'bad cholesterol'?",
    options: [
      "HDL",
      "LDL",
      "Triglycerides",
      "Bilirubin"
    ],
    correct: 1,
    explanation: "LDL (Low-Density Lipoprotein) is known as bad cholesterol. HDL (High-Density Lipoprotein) is 'good' cholesterol."
  },
  {
    module: "Anatomy",
    tags: ["Physiology", "Fluid Balance"],
    question: "Which process describes the movement of WATER across a semipermeable membrane from an area of lower solute concentration to an area of higher solute concentration?",
    options: [
      "Diffusion",
      "Osmosis",
      "Facilitated Transport",
      "Active Transport"
    ],
    correct: 1,
    explanation: "Osmosis is specifically the movement of water (solvent), whereas diffusion is the movement of solutes."
  },
  {
    module: "Anatomy",
    tags: ["Endocrine", "Pathology"],
    question: "A patient presents with exophthalmos (bulging eyes), hypertension, and a high metabolic rate. Which autoimmune condition should you suspect?",
    options: [
      "Myxedema",
      "Grave's Disease",
      "Addison's Disease",
      "Cushing's Syndrome"
    ],
    correct: 1,
    explanation: "Grave's Disease is a form of hyperthyroidism. The increased metabolic rate causes high BP, weight loss, and characteristic edema behind the eyes (exophthalmos)."
  },
  {
    module: "Anatomy",
    tags: ["Endocrine", "Pathology"],
    question: "What is a Pheochromocytoma, and what is its primary clinical effect?",
    options: [
      "A tumor of the thyroid; causes goiters",
      "A tumor of the adrenal medulla; causes severe hypertension",
      "A tumor of the pituitary; causes acromegaly",
      "A tumor of the pancreas; causes hypoglycemia"
    ],
    correct: 1,
    explanation: "Pheochromocytoma is a tumor of the adrenal medulla that secretes excessive catecholamines (adrenaline), leading to dangerous hypertension."
  },
  {
    module: "Anatomy",
    tags: ["Endocrine", "Physiology"],
    question: "Which gland is referred to as the 'Master Gland' of the endocrine system?",
    options: [
      "Thyroid",
      "Adrenal",
      "Pituitary",
      "Thalamus"
    ],
    correct: 2,
    explanation: "The pituitary gland is the master gland because it secretes hormones that control the functions of many other endocrine glands."
  },
  {
    module: "Anatomy",
    tags: ["Metabolism", "Physiology"],
    question: "In what form is glucose stored in the liver and muscles for future energy use?",
    options: [
      "Glucagon",
      "Glycogen",
      "Glycerol",
      "Galactose"
    ],
    correct: 1,
    explanation: "Glycogen is the storage form of glucose. When blood sugar drops, the hormone glucagon stimulates the liver to convert glycogen back into glucose."
  },
  {
    module: "Anatomy",
    tags: ["Endocrine", "Physiology"],
    question: "A tumor of the anterior pituitary that causes an over-secretion of Growth Hormone (GH) in an adult results in which condition?",
    options: [
      "Gigantism",
      "Acromegaly",
      "Cretinism",
      "Myxedema"
    ],
    correct: 1,
    explanation: "In adults, excessive GH leads to acromegaly (enlargement of bones in the face, hands, and feet). If it occurs in children before the growth plates close, it is called gigantism."
  },
  {
    module: "Anatomy",
    tags: ["Neurology", "Pathology"],
    question: "Creutzfeldt-Jakob Disease (Mad Cow Disease) is caused by which type of infectious agent?",
    options: [
      "Virus",
      "Bacterium",
      "Prion",
      "Protozoa"
    ],
    correct: 2,
    explanation: "Prions are misfolded proteins that cause neurodegenerative diseases like Creutzfeldt-Jakob by inducing abnormal folding of normal cellular proteins in the brain."
  },
  {
    module: "Anatomy",
    tags: ["Neurology", "Physiology"],
    question: "Which part of the brain is responsible for fine motor coordination, posture, and balance?",
    options: [
      "Cerebrum",
      "Cerebellum",
      "Brainstem",
      "Midbrain"
    ],
    correct: 1,
    explanation: "The cerebellum is the center for fine motor control and balance. The cerebrum handles higher functions like speech and memory."
  },
  {
    module: "Anatomy",
    tags: ["Neurology", "Physiology"],
    question: "Hearing, speech, sight, and memory are primarily controlled by which major division of the brain?",
    options: [
      "Cerebellum",
      "Cerebrum",
      "Medulla Oblongata",
      "Pons"
    ],
    correct: 1,
    explanation: "The cerebrum is the largest part of the brain and controls hearing, speech, memory, and sensory processing."
  },
  {
    module: "Anatomy",
    tags: ["Neurology", "Landmarks"],
    question: "You are assessing a patient with a spinal cord injury. They have lost sensation at the nipple line. Which dermatome is associated with this landmark?",
    options: [
      "C-3",
      "T-4",
      "T-10",
      "L-1"
    ],
    correct: 1,
    explanation: "T-4 is the dermatome for the nipple line. T-10 is the umbilicus, and C-3, 4, 5 are responsible for the diaphragm."
  },
  {
    module: "Anatomy",
    tags: ["Skeletal", "Landmarks"],
    question: "When palpating the posterior neck, the most prominent bony landmark (the vertebral prominence) corresponds to which vertebra?",
    options: [
      "C-1 (Atlas)",
      "C-2 (Axis)",
      "C-7",
      "T-2"
    ],
    correct: 2,
    explanation: "C-7 is known as the vertebral prominence because of its long, easily palpable spinous process at the base of the neck."
  }
];
