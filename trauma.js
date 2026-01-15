const TRAUMA_QUESTIONS = [
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
  }
];