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
  },
  {
    module: "Trauma",
    tags: ["Shock", "Assessment"],
    question: "A trauma patient presents with hot, flushed skin, tachycardia, and hypotension. You notice an infected wound on their lower leg with red streaks extending upward. What is the most likely diagnosis?",
    options: [
      "Hypovolemic Shock",
      "Septic Shock",
      "Neurogenic Shock",
      "Anaphylactic Shock"
    ],
    correct: 1,
    explanation: "Hot skin in a shock patient is a hallmark of Septic Shock. The red streaks (lymphangitis) indicate bacteria have entered the lymph system and bloodstream."
  },
  {
    module: "Trauma",
    tags: ["Chest Trauma", "Assessment"],
    question: "You are assessing a patient with blunt force chest trauma. You notice a segment of the chest wall moving inward during inhalation and outward during exhalation. What is the definitive prehospital treatment of choice?",
    options: [
      "Stabilize the segment with a sandbag",
      "Tape a bulky dressing over the segment",
      "Positive pressure ventilation via BVM",
      "Place the patient in a prone position"
    ],
    correct: 2,
    explanation: "This is a flail chest. Positive pressure ventilation (BVM) acts as an 'internal splint' and is the definitive treatment. Sandbags are contraindicated as they restrict chest excursion."
  },
  {
    module: "Trauma",
    tags: ["Chest Trauma", "Assessment"],
    question: "Which finding would most accurately help you differentiate a Hemothorax from a Tension Pneumothorax in the field?",
    options: [
      "The presence of dyspnea",
      "Hyperresonance upon percussion",
      "Flat jugular veins and dullness/hyporesonance upon percussion",
      "Narrowing pulse pressure"
    ],
    correct: 2,
    explanation: "Hemothorax presents with dull percussion (hyporesonance) and flat neck veins due to blood loss. Tension Pneumothorax presents with hyperresonance (air) and JVD."
  },
  {
    module: "Trauma",
    tags: ["Chest Trauma", "Pathology"],
    question: "A 'sucking chest wound' (open pneumothorax) primarily affects which component of the Fick Principle?",
    options: [
      "Diffusion",
      "Perfusion",
      "Ventilation",
      "Off-loading"
    ],
    correct: 2,
    explanation: "Because air is entering the pleural space through the chest wall instead of the trachea, the mechanics of breathing are disrupted, primarily affecting ventilation."
  },
  {
    module: "Trauma",
    tags: ["Chest Trauma", "Operations"],
    question: "After applying an occlusive dressing to an open chest wound, the patient’s respiratory distress worsens and you find it harder to squeeze the BVM. What is your immediate next step?",
    options: [
      "Perform a needle decompression",
      "Increase the ventilation rate",
      "Burp the dressing (lift a corner)",
      "Switch to a non-rebreather mask"
    ],
    correct: 2,
    explanation: "A loss of compliance during bagging or worsening distress after sealing an open wound suggests a tension pneumothorax is developing; 'burping' the dressing allows the trapped air to escape."
  },
  {
    module: "Trauma",
    tags: ["Shock", "Assessment"],
    question: "Which of the following describes 'Wheals' as seen in anaphylaxis?",
    options: [
      "Tiny purple spots caused by broken capillaries",
      "A transient, raised, itchy red elevation of the skin caused by dermal edema",
      "A deep tissue infection causing localized heat",
      "A surgical incision that has become infected"
    ],
    correct: 1,
    explanation: "Wheals are welts characterized by raised, itchy elevations of the skin with well-defined borders."
  },
  {
    module: "Trauma",
    tags: ["Chest Trauma", "Assessment"],
    question: "At what size does an open chest wound typically become a 'sucking chest wound' and present a significant clinical problem?",
    options: [
      "1mm or bigger",
      "3mm or bigger",
      "10mm or bigger",
      "Only if it is larger than the diameter of the trachea"
    ],
    correct: 1,
    explanation: "An open pneumothorax typically becomes a sucking chest wound when the opening is 3mm or bigger, allowing air to bypass the normal airway."
  },
  {
    module: "Trauma",
    tags: ["Chest Trauma", "Assessment"],
    question: "A tall, skinny male presents with sudden chest pain and shortness of breath after lifting a heavy box. You suspect a spontaneous pneumothorax. Which genetic connective tissue disorder is often associated with this presentation?",
    options: [
      "Cushing's Syndrome",
      "Marfan's Syndrome",
      "Down Syndrome",
      "Crohn's Disease"
    ],
    correct: 1,
    explanation: "Marfan’s Syndrome is a connective tissue disease that weakens blood vessels and alveoli, making these individuals prone to spontaneous pneumothorax and aneurysms."
  },
  {
    module: "Trauma",
    tags: ["Chest Trauma", "Pathology"],
    question: "What is the 'Paper Bag Syndrome' in the context of chest trauma?",
    options: [
      "Using a paper bag to treat hyperventilation",
      "A closed pneumothorax caused by blunt trauma while the patient has a full breath and a closed glottis",
      "The sound a sucking chest wound makes during exhalation",
      "A type of dressing used for eviscerations"
    ],
    correct: 1,
    explanation: "Paper Bag Syndrome refers to a closed pneumothorax that occurs during an MVA when a patient holds their breath just before impact; the blunt force causes the inflated lungs to 'pop' like a paper bag."
  },
  {
    module: "Trauma",
    tags: ["Chest Trauma", "Assessment"],
    question: "You are percussing the chest of a patient with suspected thoracic trauma. You hear a hyperresonant sound on the affected side. This finding supports a diagnosis of:",
    options: [
      "Hemothorax",
      "Tension Pneumothorax",
      "Pericardial Tamponade",
      "Pulmonary Contusion"
    ],
    correct: 1,
    explanation: "Hyperresonance (a drum-like sound) indicates air in the pleural space, such as a tension pneumothorax. Hemothorax would produce a hyporesonant (dull) sound."
  },
  {
    module: "Trauma",
    tags: ["Facial Trauma", "Assessment"],
    question: "A patient presents with massive facial trauma. You find that the entire facial region below the brow ridge, including the zygoma and nasal bones, is unstable. This is classified as a:",
    options: [
      "LeFort I fracture",
      "LeFort II fracture",
      "LeFort III fracture",
      "Basilar skull fracture"
    ],
    correct: 2,
    explanation: "A LeFort III fracture involves the entire face below the brow ridge. LeFort I involves only the maxilla, and LeFort II involves the maxilla and nasal bones."
  },
  {
    module: "Trauma",
    tags: ["Orthopedic", "Assessment"],
    question: "A patient presents with a wrist injury after a fall. X-ray reveals a break at the distal end of the radius on the thumb side. This is specifically known as a:",
    options: [
      "Smith's fracture",
      "Colle’s fracture",
      "Boxer's fracture",
      "Greenstick fracture"
    ],
    correct: 1,
    explanation: "A Colle’s fracture is a distal radial fracture, involving the radius bone on the thumb side of the forearm."
  },
  {
    module: "Trauma",
    tags: ["Orthopedic", "Terminology"],
    question: "What is the medical term for a partial or incomplete dislocation of a joint?",
    options: [
      "Luxation",
      "Subluxation",
      "Sprain",
      "Strain"
    ],
    correct: 1,
    explanation: "Subluxation refers to a partial or incomplete dislocation, whereas luxation is a complete dislocation."
  },
  {
    module: "Trauma",
    tags: ["Neurology", "Spine"],
    question: "A patient suffers a penetrating injury to the spine resulting in a hemisection (half-cut) of the spinal cord. This specific clinical presentation is called:",
    options: [
      "Central Cord Syndrome",
      "Anterior Cord Syndrome",
      "Brown-Séquard Syndrome",
      "Cauda Equina Syndrome"
    ],
    correct: 2,
    explanation: "Brown-Séquard Syndrome occurs when the spinal cord is hemisected, leading to loss of motor function on the side of the injury and loss of sensation on the opposite side."
  },
  {
    module: "Trauma",
    tags: ["Chest Trauma", "Assessment"],
    question: "A patient with a suspected tension pneumothorax presents with JVD and a BP of 80/50. You note that the difference between the systolic and diastolic numbers is getting smaller. This vital sign trend is known as:",
    options: [
      "Widening pulse pressure",
      "Narrowing pulse pressure",
      "Pulsus Alternans",
      "Electrical Alternans"
    ],
    correct: 1,
    explanation: "A narrowing pulse pressure is a hallmark of obstructive shock (like tension pneumothorax or tamponade) as the heart's stroke volume decreases."
  },
  {
    module: "Trauma",
    tags: ["Shock", "Assessment"],
    question: "You are calculating a patient's Shock Index (SI). If the patient has a Heart Rate of 110 and a Systolic BP of 100, what is their SI and what group do they fall into?",
    options: [
      "0.9 (No shock)",
      "1.1 (Moderate shock)",
      "1.4 (Severe shock)",
      "0.8 (Mild shock)"
    ],
    correct: 1,
    explanation: "Shock Index is HR divided by SBP (110/100 = 1.1). An SI between 1.0 and 1.4 is classified as Moderate Shock."
  },
  {
    module: "Trauma",
    tags: ["Orthopedic", "Equipment"],
    question: "A patient has suffered bilateral femur fractures. What is the most appropriate equipment for stabilizing these injuries?",
    options: [
      "Hare Traction Splint",
      "Sager Traction Splint",
      "Long Backboard with padding",
      "Short board or KED"
    ],
    correct: 1,
    explanation: "The Sager splint is designed to be used for bilateral femur fractures, whereas the Hare splint is typically used for unilateral injuries."
  },
  {
    module: "Trauma",
    tags: ["Shock", "Assessment"],
    question: "What is considered the earliest clinical sign that a trauma patient is developing internal bleeding and moving into hypovolemic shock?",
    options: [
      "A significant drop in blood pressure",
      "Anxiety or restlessness",
      "Narrowing pulse pressure",
      "Cyanosis in the extremities"
    ],
    correct: 1,
    explanation: "Anxiety and restlessness are the earliest signs of hypovolemia. The brain is the first organ affected by a lack of oxygen, and the heart rate will increase shortly after to compensate."
  },
  {
    module: "Trauma",
    tags: ["Shock", "Pathology"],
    question: "In severe shock, what metabolic state is primarily responsible for patient death, and why are insulin and glucose sometimes used in the hospital setting to treat the resulting hyperkalemia?",
    options: [
      "Alkalosis; to increase CO2 levels",
      "Acidosis; to draw Potassium (K+) back into the cells",
      "Hyperglycemia; to stimulate the kidneys",
      "Hypocalcemia; to strengthen muscle contraction"
    ],
    correct: 1,
    explanation: "Acidosis is a major cause of death in shock. High potassium levels often follow; insulin and glucose are administered to shift K+ back into the intracellular space."
  },
  {
    module: "Trauma",
    tags: ["Shock", "Pharmacology"],
    question: "A patient is in cardiogenic shock due to a lack of contractility. What is the standard paramedic dosing for a Dopamine infusion in this scenario?",
    options: [
      "0.1 - 0.5 mcg/kg/min",
      "2 - 20 mcg/kg/min",
      "20 - 50 mcg/kg/min",
      "1 - 10 mg/min"
    ],
    correct: 1,
    explanation: "Dopamine at a range of 2-20 mcg/kg/min is the standard treatment for cardiogenic shock to improve heart pumping power and blood pressure."
  },
  {
    module: "Trauma",
    tags: ["Shock", "Neurology"],
    question: "A patient presents with hypotension and a slow heart rate (bradycardia) following a fall. You observe cool, clammy skin above the injury site and warm, dry skin below. This is most indicative of:",
    options: [
      "Hypovolemic Shock",
      "Septic Shock",
      "Neurogenic Shock",
      "Anaphylactic Shock"
    ],
    correct: 2,
    explanation: "Neurogenic shock is unique because the disruption of the autonomic nervous system prevents the heart from speeding up (causing bradycardia) and causes vasodilation below the injury site (warm/dry skin)."
  },
  {
    module: "Trauma",
    tags: ["Shock", "Infectious Disease"],
    question: "While assessing a patient for shock, you find they are hypotensive and tachycardic, but have a core temperature below 96°F. The patient has a history of a recent infection. What is this condition called?",
    options: [
      "Moderate Hypothermia",
      "Decompensated Hypovolemia",
      "Cold Sepsis",
      "Neurogenic Shock"
    ],
    correct: 2,
    explanation: "Cold Sepsis occurs when a septic patient becomes hypothermic. This is a very late and ominous sign of a systemic infection that has overwhelmed the body's compensatory mechanisms."
  },
  {
    module: "Trauma",
    tags: ["Shock", "Pathology"],
    question: "During an anaphylactic reaction, what occurs when IgE antibodies on mast cell receptors combine with an antigen?",
    options: [
      "The mast cells produce more antibodies",
      "The mast cells degranulate and release chemical mediators like histamine",
      "The kidneys increase the production of renin",
      "The blood vessels immediately constrict to prevent venom spread"
    ],
    correct: 1,
    explanation: "The combination of IgE and an antigen causes mast cell degranulation, releasing histamine and other mediators that lead to widespread vasodilation and bronchoconstriction."
  },
  {
    module: "Trauma",
    tags: ["Shock", "Assessment"],
    question: "A patient presents with a high fever and hypotension. You find a Foley catheter as the suspected source of infection. What is the primary pathophysiology behind this state?",
    options: [
      "Loss of blood volume into the tissues",
      "Release of endotoxins causing systemic vasodilation",
      "Direct compression of the heart (obstructive)",
      "Interruption of the spinal tracts"
    ],
    correct: 1,
    explanation: "In septic shock, bacteria produce endotoxins and exotoxins that enter the bloodstream, causing widespread vasodilation and increased capillary permeability."
  },
  {
    module: "Trauma",
    tags: ["Shock", "Assessment"],
    question: "During the assessment of a trauma patient, which finding is the most reliable 'key sign' that the patient is still in the Compensated (Non-progressive) stage of shock?",
    options: [
      "A systolic blood pressure below 90 mmHg",
      "A pulse pressure of less than 25 mmHg",
      "The onset of bradycardia",
      "Loss of consciousness"
    ],
    correct: 1,
    explanation: "In compensated shock, the body can still maintain a relatively normal blood pressure, but the narrowing of the pulse pressure (typically < 25 mmHg) indicates systemic vasoconstriction is occurring."
  },
  {
    module: "Trauma",
    tags: ["Shock", "Assessment"],
    question: "At what point does a patient's condition transition from Compensated to Decompensated (Progressive) shock?",
    options: [
      "When the heart rate first begins to increase",
      "When the body can no longer meet metabolic demands and blood pressure drops",
      "When the patient loses 5% of their total blood volume",
      "When the pulse pressure reaches 40 mmHg"
    ],
    correct: 1,
    explanation: "Decompensated shock is marked by the body's inability to meet metabolic demands, characterized by hypotension and a heart rate that may begin to shift from tachycardia toward bradycardia."
  },
  {
    module: "Trauma",
    tags: ["Shock", "Physiology"],
    question: "According to your trauma protocols, a narrowing pulse pressure is typically seen after a blood loss of 15%. At what percentage of blood loss will the patient's blood pressure usually begin to drop?",
    options: [
      "5% loss",
      "10% loss",
      "20% loss",
      "40% loss"
    ],
    correct: 2,
    explanation: "While narrowing pulse pressure happens earlier (at 15%), a significant drop in systolic blood pressure typically occurs once a patient has lost approximately 20% of their blood volume."
  },
  {
    module: "Trauma",
    tags: ["Shock", "Pharmacology"],
    question: "When replacing blood loss with crystalloid fluids (like Normal Saline or Lactated Ringer's), what is the correct replacement ratio and the maximum volume limit?",
    options: [
      "1:1 ratio; no maximum limit",
      "2:1 ratio; maximum 5L",
      "3:1 ratio; maximum 3L",
      "5:1 ratio; maximum 2L"
    ],
    correct: 2,
    explanation: "The standard for fluid resuscitation is a 3:1 ratio (3mL of crystalloid for every 1mL of blood lost), with a general rule to never exceed 3L of total fluid administration."
  },
  {
    module: "Trauma",
    tags: ["Shock", "Pathology"],
    question: "What is the defining characteristic of Irreversible (Refractory) shock?",
    options: [
      "The patient requires more than 2L of fluid",
      "Widespread cell death and the flushing of emboli into circulation, leading to MODS",
      "A heart rate that stays above 120 bpm",
      "A blood pressure that responds only to Dopamine"
    ],
    correct: 1,
    explanation: "Irreversible shock is characterized by profound cell death and Multiple Organ Dysfunction Syndrome (MODS); at this stage, medical intervention can no longer prevent death."
  },
  {
    module: "Trauma",
    tags: ["Chest Trauma", "Assessment"],
    question: "A patient is shot in the left chest. You find equal breath sounds but noted JVD and hypotension. Which condition is most likely?",
    options: [
      "Tension Pneumothorax",
      "Pericardial Tamponade",
      "Hemothorax",
      "Simple Pneumothorax"
    ],
    correct: 1,
    explanation: "Equal breath sounds rule out a tension pneumothorax. JVD combined with a penetrating chest wound and hypotension (Beck's Triad) strongly suggests pericardial tamponade."
  },
  {
    module: "Trauma",
    tags: ["Abdominal Trauma", "Operations"],
    question: "You are treating a patient with an abdominal evisceration. What is the correct management for the protruding organs?",
    options: [
      "Gently push the organs back into the abdominal cavity",
      "Cover with a dry sterile dressing and a pressure bandage",
      "Cover with a moist sterile dressing, then an occlusive dressing",
      "Apply a tourniquet proximal to the injury"
    ],
    correct: 2,
    explanation: "Eviscerated bowels must be kept moist. Use a moist sterile dressing first, then protect it with an occlusive dressing to prevent heat loss and contamination."
  },
  {
    module: "Trauma",
    tags: ["Head Trauma", "Assessment"],
    question: "An MVA patient with a hematoma over the eye is unconscious with slow respirations and unequal pupils. After securing the C-spine, what is your immediate priority?",
    options: [
      "Assess for a distal pulse",
      "Perform a detailed head-to-toe exam",
      "Ventilate with a BVM at 10-20 breaths/min and protect the airway",
      "Administer 2 liters of Normal Saline"
    ],
    correct: 2,
    explanation: "In a suspected head injury with respiratory depression and signs of herniation (unequal pupils), the priority is airway protection and controlled ventilation."
  },
  {
    module: "Trauma",
    tags: ["Hemorrhage Control", "Operations"],
    question: "You have applied direct pressure and a pressure dressing to a severe forearm laceration, but the dressing is now soaked through with blood. What is your next step?",
    options: [
      "Remove the old dressing and apply a new one",
      "Apply more dressing material on top of the existing ones",
      "Immediately apply a tourniquet",
      "Elevate the arm above the heart and apply a cold pack"
    ],
    correct: 1,
    explanation: "If a dressing becomes soaked, do not remove it (as you may disrupt clots); instead, add more dressing material. If bleeding remains uncontrolled, proceed to a tourniquet."
  },
  {
    module: "Trauma",
    tags: ["Pediatrics", "Environmental"],
    question: "A 2-year-old child is pulled from a pool. He is apneic and cyanotic but has a pulse of 90. What is your first intervention?",
    options: [
      "Begin chest compressions immediately",
      "Perform abdominal thrusts to clear the water",
      "Manage the airway/C-spine and provide BVM ventilations with high-flow O2",
      "Wait for the child to cough up the water before ventilating"
    ],
    correct: 2,
    explanation: "Since the child has a pulse (>60 in pediatrics), the priority is addressing the respiratory arrest with BVM ventilations and high-flow oxygen."
  },
  {
    module: "Trauma",
    tags: ["Chest Trauma", "Assessment"],
    question: "A 24-year-old male has been stabbed in the chest. He presents with dyspnea, absent breath sounds on the ipsilateral side, and JVD. What is your field diagnosis and treatment?",
    options: [
      "Simple Pneumothorax; high-flow O2",
      "Hemothorax; IV fluid bolus",
      "Tension Pneumothorax; needle decompression",
      "Flail Chest; BVM ventilations"
    ],
    correct: 2,
    explanation: "The combination of absent breath sounds on the injured side and JVD indicates a tension pneumothorax. Needle decompression is the required intervention to relieve the pressure."
  }
];
