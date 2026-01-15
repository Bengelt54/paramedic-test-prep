const OPERATIONS_QUESTIONS = [
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
    question: "According to the kinetic energy formula (KE = 1/2 mass x velocity^2), which factor has the greatest impact on the energy of an object in motion?",
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
  }
];