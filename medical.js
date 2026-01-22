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
  },
  {
    module: "Medical",
    tags: ["Environmental", "Hypothermia"],
    question: "A patient presents with a core temperature of 92°F, shivering, and a heart rate of 40 bpm with occasional PVCs. What is the most appropriate initial treatment?",
    options: [
      "Administer Atropine 1mg for bradycardia",
      "Perform immediate synchronized cardioversion",
      "Initiate active rewarming to normalize the heart rate",
      "Administer Lidocaine for the PVCs"
    ],
    correct: 2,
    explanation: "In mild to moderate hypothermia (90-95°F), bradycardia and PVCs are often physiological responses to the cold. Active rewarming is the priority, as the dysrhythmias typically resolve once the core temperature normalizes."
  },
  {
    module: "Medical",
    tags: ["Environmental", "Hypothermia"],
    question: "At what core temperature does a hypothermic patient typically stop shivering and begin to develop J waves (Osborne waves) on the ECG?",
    options: [
      "95°F (35°C)",
      "90°F (32.2°C)",
      "86°F (30°C)",
      "75°F (23.9°C)"
    ],
    correct: 2,
    explanation: "Shivering typically ceases between 86°-87.8°F. At approximately 86°F, cardiac dysrhythmias (like A-Fib) and J waves—a deflection at the end of the QRS complex—become prominent."
  },
  {
    module: "Medical",
    tags: ["Environmental", "Hypothermia"],
    question: "You are treating a patient in V-Fib with severe hypothermia (core temp <86°F). After delivering one shock and the first round of ACLS drugs with no result, what is the recommended next step?",
    options: [
      "Continue standard ACLS drug intervals and shocks",
      "Increase the defibrillation energy to maximum",
      "Continue CPR but withhold further shocks and meds until rewarmed",
      "Terminate resuscitation efforts immediately"
    ],
    correct: 2,
    explanation: "For severe hypothermia, NREMT guidelines suggest one shock and one round of drugs; if unsuccessful, further shocks and medications should be withheld while focusing on CPR and rewarming."
  },
  {
    module: "Medical",
    tags: ["Environmental", "Heat Illness"],
    question: "Which clinical finding is the most critical indicator that a patient has transitioned from heat exhaustion to heat stroke?",
    options: [
      "Profuse sweating",
      "Altered mental status or lack of mentation",
      "Muscle cramps in the legs",
      "Tachycardia"
    ],
    correct: 1,
    explanation: "The key sign of heat stroke is a lack of mentation (confusion, disorientation, or unconsciousness). While sweating often stops, the patient may still be wet from previous exertion."
  },
  {
    module: "Medical",
    tags: ["Environmental", "Heat Illness"],
    question: "What is the preferred prehospital treatment for a patient with a core temperature above 105°F and a bounding pulse that is becoming weak?",
    options: [
      "Apply wet cloths to the skin and fan vigorously",
      "Administer chilled IV fluids only",
      "Rapid cooling via ice bath immersion or tarp-assisted cooling",
      "Place the patient in the Trendelenburg position"
    ],
    correct: 2,
    explanation: "Heat stroke requires rapid cooling, preferably through cold water immersion or tarp-assisted cooling with oscillation. Applying simple wet cloths is often insufficient for core temp reduction."
  },
  {
    module: "Medical",
    tags: ["Infectious Disease"],
    question: "A patient presents with a burrowing rash along the beltline. You suspect Scabies. What is the appropriate BSI/sanitation protocol?",
    options: [
      "Standard precautions only; no special linen care",
      "N95 mask for the provider",
      "Packing all linens in biohazard bags after skin-to-skin contact",
      "Administering prophylactic antibiotics"
    ],
    correct: 2,
    explanation: "Scabies is caused by mites that burrow under the skin and spread via skin-to-skin contact. Linens must be isolated in biohazard bags to prevent further infestation."
  },
  {
    module: "Medical",
    tags: ["Environmental", "Toxicology"],
    question: "When treating a patient bitten by a Pit Viper (rattlesnake, water moccasin, or copperhead), which intervention is CONTRAINDICATED?",
    options: [
      "Immobilizing the limb in a neutral position",
      "Applying an arterial tourniquet or ice packs",
      "Starting an IV with crystalloid fluids",
      "Transporting the patient in a supine position"
    ],
    correct: 1,
    explanation: "You should NOT apply ice, cold packs, or arterial tourniquets to a snake bite, as these can increase local tissue necrosis and damage."
  },
  {
    module: "Medical",
    tags: ["Environmental", "Toxicology"],
    question: "A patient was bitten by a snake with a 'red on yellow' color pattern. You observe slurred speech, drooping eyelids, and excessive salivation. What is the nature of this venom?",
    options: [
      "Hemotoxin causing tissue necrosis",
      "Neurotoxin causing respiratory failure",
      "Anticoagulant causing GI hemorrhage",
      "Cytotoxin causing localized swelling"
    ],
    correct: 1,
    explanation: "A 'red on yellow' pattern identifies a Coral Snake ('kill a fellow'). Unlike pit vipers, coral snake venom is a neurotoxin that causes systemic paralysis and respiratory failure."
  },
  {
    module: "Medical",
    tags: ["Infectious Disease", "Assessment"],
    question: "A patient presents with a full-body rash, high fever, and small red spots with blue-white centers inside the mouth. These oral findings are known as:",
    options: [
      "Beck's spots",
      "Koplik's spots",
      "Osborne waves",
      "Cullen's sign"
    ],
    correct: 1,
    explanation: "Koplik's spots (small red spots with blue-white centers) are a hallmark diagnostic sign of Measles, a viral disease."
  },
  {
    module: "Medical",
    tags: ["GI", "Pathology"],
    question: "A patient reports chronic GI bleeding, weight loss, and intense intermittent abdominal cramping. They mention a history of intestinal fissures. Which condition is most likely?",
    options: [
      "Diverticulitis",
      "Crohn's Disease",
      "Appendicitis",
      "Cholecystitis"
    ],
    correct: 1,
    explanation: "Crohn's disease involves the destruction of the intestinal lining and production of fissures, resulting in cramping, diarrhea, and weight loss."
  },
  {
    module: "Medical",
    tags: ["GI", "Assessment"],
    question: "A patient presents with left lower quadrant (LLQ) abdominal pain and a low-grade fever. Which condition should you immediately suspect?",
    options: [
      "Appendicitis",
      "Cholecystitis",
      "Diverticulitis",
      "Pancreatitis"
    ],
    correct: 2,
    explanation: "Left lower abdominal pain accompanied by a low-grade fever is a classic presentation for diverticulitis."
  },
  {
    module: "Medical",
    tags: ["Operations", "Radiation"],
    question: "Which form of radiation is the most powerful, fastest-moving, and requires several feet of concrete to be stopped?",
    options: [
      "Alpha particles",
      "Beta particles",
      "Gamma rays",
      "Neutron radiation"
    ],
    correct: 3,
    explanation: "Neutron radiation is the most powerful form; it easily penetrates lead and requires thick concrete for shielding. GI disturbances are a common hallmark of exposure."
  },
  {
    module: "Medical",
    tags: ["Toxicology", "Pharmacology"],
    question: "A patient has ingested ethylene glycol (antifreeze). According to current NREMT standards, which medication is indicated for treatment?",
    options: [
      "Activated Charcoal",
      "Fomepizole",
      "Atropine",
      "Naloxone"
    ],
    correct: 1,
    explanation: "Fomepizole is the current NREMT standard for treating ethylene glycol poisoning. Sodium Bicarbonate may also be used to manage acidosis."
  },
  {
    module: "Medical",
    tags: ["Toxicology", "Assessment"],
    question: "The mnemonic DUMBBELLS (Diarrhea, Urination, Miosis, Bradycardia, etc.) is used to identify poisoning from:",
    options: [
      "Tricyclic Antidepressants",
      "Opioids",
      "Organophosphate pesticides",
      "Salicylates"
    ],
    correct: 2,
    explanation: "DUMBBELLS and SLUDGE describe the cholinergic crisis caused by nerve agents or organophosphate pesticides."
  },
  {
    module: "Medical",
    tags: ["Toxicology", "Pharmacology"],
    question: "A patient with a suspected Tricyclic Antidepressant (TCA) overdose presents with wide QRS complexes and hypotension. What is the appropriate pharmacological intervention?",
    options: [
      "Amiodarone 150mg",
      "Sodium Bicarbonate 1.0 mEq/kg",
      "Atropine 1mg",
      "Fomepizole"
    ],
    correct: 1,
    explanation: "Sodium Bicarbonate raises the blood pH to create an alkaline state, causing the TCA to drop off receptors and resolving cardiac dysrhythmias."
  },
  {
    module: "Medical",
    tags: ["Ophthalmology", "Assessment"],
    question: "A patient reports a sudden onset of what feels like a 'curtain' being drawn over part of their field of vision. What should you suspect?",
    options: [
      "Hyphema",
      "Retinal Artery Occlusion",
      "Detached Retina",
      "Glaucoma"
	],
    correct: 2,
    explanation: "A detached retina is classically described by patients as a dark curtain or veil obstructing part of their field of vision."
  },
  {
    module: "Medical",
    tags: ["Ophthalmology", "Trauma"],
    question: "You observe blood in the anterior chamber of a patient's eye following a blow to the head. This condition is known as:",
    options: [
      "Sclera icterus",
      "Hyphema",
      "Conjunctivitis",
      "Retinal detachment"
    ],
    correct: 1,
    explanation: "A hyphema is the collection of blood in the anterior chamber of the eye, often caused by blunt force trauma or seen in shaken baby syndrome."
  },
  {
    module: "Medical",
    tags: ["Ophthalmology", "Assessment"],
    question: "A patient presents with a painless loss of vision in only one eye (monocular). This is a hallmark sign of:",
    options: [
      "Retinal Artery Occlusion",
      "Orbital Fracture",
      "Hyphema",
      "Detached Retina"
    ],
    correct: 0,
    explanation: "Retinal Artery Occlusion typically presents as a sudden, painless loss of vision in one eye."
  },
  {
    module: "Medical",
    tags: ["OB/GYN", "Assessment"],
    question: "At what intervals should an APGAR score be evaluated following the birth of a newborn?",
    options: [
      "Immediately and at 10 minutes",
      "At 1 minute and 5 minutes",
      "Every 5 minutes for 20 minutes",
      "Only if the newborn appears distressed"
    ],
    correct: 1,
    explanation: "The APGAR score is used to evaluate a newborn's transition to extrauterine life and is measured at 1 and 5 minutes post-delivery."
  },
  {
    module: "Medical",
    tags: ["OB/GYN", "Pathology"],
    question: "A female of child-bearing age presents with abdominal pain at 8 weeks gestation. She has a history of tubal ligation. What is your primary concern?",
    options: [
      "Placenta Previa",
      "Ectopic Pregnancy",
      "Abruptio Placentae",
      "Normal Braxton Hicks contractions"
    ],
    correct: 1,
    explanation: "Ectopic pregnancies typically occur 6-12 weeks from implantation. Despite common misconceptions, a history of tubal ligation actually increases the risk."
  },
  {
    module: "Anatomy",
    tags: ["OB/GYN", "Terminology"],
    question: "A patient tells you she has been pregnant four times but has only given birth twice to viable infants. How would you document her Gravida and Para?",
    options: [
      "Gravida 2, Para 4",
      "Gravida 4, Para 2",
      "Gravida 4, Para 4",
      "Gravida 2, Para 2"
    ],
    correct: 1,
    explanation: "Gravida indicates the total number of times a woman has been pregnant, regardless of the outcome. Para indicates the number of viable deliveries."
  },
  {
    module: "Anatomy",
    tags: ["OB/GYN", "Assessment"],
    question: "Which term describes a woman who is currently pregnant for the first time?",
    options: [
      "Nuligravida",
      "Primagravida",
      "Grandmultipara",
      "Para 1"
    ],
    correct: 1,
    explanation: "A primagravida is a person pregnant for the first time. A nuligravida has never been pregnant."
  },
  {
    module: "Anatomy",
    tags: ["OB/GYN", "Assessment"],
    question: "A 'Grandmultipara' is a woman who has had 7 to 10 children. What is a specific delivery risk for this patient?",
    options: [
      "Ectopic pregnancy",
      "Precipitous delivery",
      "Post-term gestation",
      "Preeclampsia"
    ],
    correct: 1,
    explanation: "Grandmultipara patients are at a higher risk for precipitous (extremely rapid) deliveries."
  },
  {
    module: "Medical",
    tags: ["OB/GYN", "Operations"],
    question: "During delivery, the baby's head emerges but then retracts back against the perineum (turtle sign), indicating the shoulders are stuck. What is the first-line maneuver to resolve this?",
    options: [
      "Gently pull on the baby's head",
      "McRoberts Maneuver (hyperflexing the mother's legs to her abdomen)",
      "Perform an immediate emergency C-section on scene",
      "Apply fundal pressure to push the baby out"
    ],
    correct: 1,
    explanation: "Shoulder dystocia (turtle sign) occurs when the shoulders lodge behind the pubic bone. The McRoberts maneuver flattens the sacrum and rotates the pubic symphysis to create more space."
  },
  {
    module: "Medical",
    tags: ["OB/GYN", "Pathology"],
    question: "A patient in her third trimester presents with a BP of 160/100, blurred vision, and peripheral edema. What is the most likely diagnosis?",
    options: [
      "Gestational Hypertension",
      "Preeclampsia",
      "Eclampsia",
      "HELLP Syndrome"
    ],
    correct: 1,
    explanation: "Preeclampsia (toxemia) is characterized by hypertension after 20 weeks along with organ dysfunction signs like blurred vision, protein in the urine, and edema."
  },
  {
    module: "Medical",
    tags: ["OB/GYN", "Pharmacology"],
    question: "Your preeclamptic patient begins to seize, indicating a progression to Eclampsia. What is the standard dose of Magnesium Sulfate for this patient?",
    options: [
      "1 gram IV",
      "2 grams IV",
      "4 grams IV",
      "10 grams IM"
    ],
    correct: 2,
    explanation: "Eclampsia is a severe complication involving seizures. The recommended treatment is 4 grams of Magnesium Sulfate."
  },
  {
    module: "Medical",
    tags: ["OB/GYN", "Assessment"],
    question: "A patient in her third trimester presents with painless, bright red vaginal bleeding. What is the most likely cause?",
    options: [
      "Abruptio Placentae",
      "Placenta Previa",
      "Ectopic Pregnancy",
      "Uterine Rupture"
    ],
    correct: 1,
    explanation: "Placenta Previa, often called 'Poor Placental Placement,' is the #1 cause of third-trimester bleeding and is classically characterized by painless, bright red bleeding."
  },
  {
    module: "Medical",
    tags: ["OB/GYN", "Assessment"],
    question: "A third-trimester patient reports a sudden, sharp, tearing sensation in her abdomen followed by painful vaginal bleeding. Upon palpation, her abdomen is stiff and board-like. This suggests:",
    options: [
      "Placenta Previa",
      "Abruptio Placentae",
      "Braxton Hicks Contractions",
      "Diverticulitis"
    ],
    correct: 1,
    explanation: "Abruptio Placentae involves the premature separation of the placenta and presents with painful tearing sensations and a stiff, board-like abdomen due to internal hemorrhage."
  },
  {
    module: "Medical",
    tags: ["Endocrine", "Assessment"],
    question: "A Type 1 diabetic patient is found diaphoretic, tachycardic, and acting bizarrely. Which 'S' mnemonic correctly identifies the signs of insulin shock?",
    options: [
      "Slow, Sugar, Shivering, Stable",
      "Sudden, Sugar, Sweaty, Seizure",
      "Slurred speech, Soft skin, Slow pulse",
      "Sleepy, Sated, Slow onset"
    ],
    correct: 1,
    explanation: "Insulin shock (severe hypoglycemia) is characterized by a sudden onset, low blood sugar (<90 with symptoms), sweaty/cool skin, and potential seizures."
  },
  {
    module: "Medical",
    tags: ["Endocrine", "Pathology"],
    question: "A patient with a history of hypoadrenalism (Addison’s Disease) presents with progressive weakness, hyperpigmentation of the skin, and hypotension. What is the most common cause of death in Addisonian Crisis?",
    options: [
      "Respiratory failure",
      "Cardiovascular collapse",
      "Ischemic stroke",
      "Renal failure"
    ],
    correct: 1,
    explanation: "Addison’s Disease involves the hyposecretion of adrenal cortex hormones. In a crisis, the resulting dehydration, hypoglycemia, and hyperkalemia typically lead to cardiovascular collapse."
  },
  {
    module: "Medical",
    tags: ["Endocrine", "Assessment"],
    question: "Which of the following electrolyte imbalances is a hallmark of Addison’s Disease?",
    options: [
      "Hypokalemia",
      "Hyperkalemia",
      "Hypernatremia",
      "Hypocalcemia"
    ],
    correct: 1,
    explanation: "Because the adrenal cortex fails to secrete adequate aldosterone, the body loses sodium and retains potassium, leading to hyperkalemia."
  },
  {
    module: "Medical",
    tags: ["Neurology", "Assessment"],
    question: "A patient experiences a brief 10-30 second 'staring episode' without losing consciousness or muscle tone. This is best described as a(n):",
    options: [
      "Tonic-Clonic Seizure",
      "Absence Seizure (Petit Mal)",
      "Status Epilepticus",
      "Pseudoseizure"
    ],
    correct: 1,
    explanation: "Absence seizures are characterized by short staring episodes or a brief loss of motor control, typically lasting 10-30 seconds."
  },
  {
    module: "Medical",
    tags: ["Neurology", "ACLS"],
    question: "Status epilepticus is defined as a seizure lasting longer than 4-5 minutes, or consecutive seizures without a return to consciousness. What is the preferred pharmacological treatment?",
    options: [
      "Dilantin",
      "Valium (Diazepam)",
      "Tegretol",
      "Sodium Bicarbonate"
    ],
    correct: 1,
    explanation: "Status epilepticus is a medical emergency; Valium (or other benzodiazepines) is the first-line treatment, while medications like Dilantin are used for chronic management."
  },
  {
    module: "Medical",
    tags: ["Neurology", "Assessment"],
    question: "You are assessing a patient with a head injury who exhibits an erratic crescendo-decrescendo breathing pattern followed by periods of apnea. This is known as:",
    options: [
      "Kussmaul's Respirations",
      "Biot's Respirations",
      "Cheyne-Stokes Respirations",
      "Eupnea"
    ],
    correct: 2,
    explanation: "Cheyne-Stokes respirations feature a rhythmic crescendo/decrescendo pattern often seen in stroke or increased ICP. The recommended ventilation rate for this pattern is 20 bpm."
  },
  {
    module: "Medical",
    tags: ["Neurology", "Vitals"],
    question: "Which set of vital sign changes constitutes 'Cushing’s Triad,' indicating significantly increased intracranial pressure (ICP)?",
    options: [
      "Hypotension, Tachycardia, Rapid Respirations",
      "Hypertension, Bradycardia, Erratic Respirations",
      "Hypertension, Tachycardia, Shallow Respirations",
      "Hypotension, Bradycardia, Kussmaul Respirations"
    ],
    correct: 1,
    explanation: "Cushing’s Triad includes an increase in Blood Pressure, a decrease in Heart Rate, and erratic respirations, signifying high ICP."
  },
  {
    module: "Medical",
    tags: ["Neurology", "Pathology"],
    question: "A patient presents with sudden facial paralysis that is commonly mistaken for a stroke, but is actually caused by swelling of the 7th cranial nerve. This is called:",
    options: [
      "Trigeminal Neuralgia",
      "Bell's Palsy",
      "Cushing's Reflex",
      "Stoke-Adams Syndrome"
    ],
    correct: 1,
    explanation: "Bell's Palsy involves the swelling of the 7th cranial nerve (Facial) due to viral or immune disorders, causing facial paralysis."
  },
  {
    module: "Medical",
    tags: ["Infectious Disease", "Assessment"],
    question: "A 12-year-old patient has been running a fever for four days. While lying supine, moving the patient's head causes their legs to lift automatically. This is a positive:",
    options: [
      "Kernig's sign",
      "Brudzinski's sign",
      "Cullen's sign",
      "Murphy's sign"
    ],
    correct: 1,
    explanation: "A positive Brudzinski’s sign (neck flexion causing hip/knee flexion) is a hallmark indicator of meningitis."
  },
  {
    module: "Medical",
    tags: ["Toxicology", "Assessment"],
    question: "You arrive on scene for a 22-year-old male who has ingested 40 unidentified pills. What is the most critical follow-up question to ask to determine potential drug potentiation?",
    options: [
      "What time did you eat last?",
      "Did you take these with alcohol?",
      "Do you have any allergies?",
      "Have you ever overdosed before?"
    ],
    correct: 1,
    explanation: "It is critical to ask if drugs were taken with alcohol, as alcohol often potentiates the effects of many substances."
  },
  {
    module: "Medical",
    tags: ["Environmental", "Toxicology"],
    question: "A patient was bitten by a Black Widow spider. Beyond standard wound care, what medications are typically used to treat the associated muscle spasms and pain?",
    options: [
      "Atropine and 2-PAM",
      "Valium (Diazepam) and Calcium Gluconate",
      "Epinephrine and Benadryl",
      "Sodium Bicarbonate and Narcan"
    ],
    correct: 1,
    explanation: "Black widow spider bites are treated with Valium for muscle relaxation and Calcium Gluconate."
  },
  {
    module: "Medical",
    tags: ["GI", "Assessment"],
    question: "A male patient reports sharp abdominal pain specifically after eating a fatty meal. What condition do you suspect?",
    options: [
      "Appendicitis",
      "Cholecystitis",
      "Diverticulitis",
      "Cystitis"
    ],
    correct: 1,
    explanation: "Cholecystitis (gallbladder inflammation) often presents with pain after fatty meals, as the gallbladder releases bile to emulsify fat."
  },
  {
    module: "Medical",
    tags: ["Environmental", "Hypothermia"],
    question: "A severely hypothermic patient (core temp <86°F) is in V-Fib. According to the hypothermia algorithm, what is the correct pharmacological and electrical intervention?",
    options: [
      "Shock every 2 minutes and give full ACLS meds",
      "Shock 1 time and provide one round of Epinephrine only",
      "Withhold all shocks and meds until the core temp is >95°F",
      "Continuous pacing and Atropine every 3 minutes"
    ],
    correct: 1,
    explanation: "For severe hypothermia in V-Fib, deliver one shock and one round of Epinephrine, then focus on CPR and rewarming."
  },
  {
    module: "Medical",
    tags: ["Allergies", "Pathology"],
    question: "Anaphylaxis is classified as a Type 1 allergic reaction. Which specific antibody is responsible for driving this reaction by attaching to mast cells and basophils?",
    options: [
      "IgA",
      "IgG",
      "IgE",
      "IgM"
    ],
    correct: 2,
    explanation: "IgE is the antibody driver behind anaphylaxis. It attaches to mast cells and basophils, causing the release of histamine and other chemicals when an allergen is introduced."
  },
  {
    module: "Medical",
    tags: ["Allergies", "Assessment"],
    question: "Which route of allergen exposure is considered the most serious and is most likely to result in rapid, life-threatening anaphylaxis?",
    options: [
      "Ingestion (Eating)",
      "Inhalation (Breathing)",
      "Injection (Hymenoptera stings/Medications)",
      "Absorption (Skin contact)"
    ],
    correct: 2,
    explanation: "Injection is the most serious route for allergic reactions. Hymenoptera (wasps, bees, etc.) are a key concern for rapid onset anaphylaxis."
  },
  {
    module: "Medical",
    tags: ["Allergies", "Pharmacology"],
    question: "Epinephrine is the drug of choice for anaphylaxis because of its alpha and beta qualities. How do these qualities specifically resolve the life-threat?",
    options: [
      "It constricts the bronchioles and dilates the vessels",
      "It dilates the bronchioles and constricts the vessels",
      "It slows the heart rate and lowers blood pressure",
      "It increases mucus production to trap allergens"
    ],
    correct: 1,
    explanation: "Epinephrine provides bronchodilation (beta-2) to open the airway and vasoconstriction (alpha-1) to raise blood pressure and reduce swelling."
  }
];