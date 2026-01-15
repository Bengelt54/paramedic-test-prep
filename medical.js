const MEDICAL_QUESTIONS = [
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
  }
];