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
  },
  {
    module: "Operations",
    tags: ["Legal", "Negligence"],
    question: "The 'Proximate Cause' component of negligence is best described as:",
    options: [
      "The EMT's legal obligation to provide care",
      "A clear and reasonable cause-and-effect relationship between the provider's action and the injury",
      "The failure of a provider to meet the standard of care",
      "The physical or psychological harm suffered by the patient"
    ],
    correct: 1,
    explanation: "Proximate cause requires a reasonable cause-and-effect link, such as a patient suffering a fracture specifically because an EMT dropped them during a lift."
  },
  {
    module: "Operations",
    tags: ["Legal", "Consent"],
    question: "Which of the following individuals would most likely be considered an 'Emancipated Minor'?",
    options: [
      "A 16-year-old living with their parents but working a part-time job",
      "A 17-year-old serving in the military who has been granted independence by court order",
      "A 14-year-old who is currently failing high school",
      "Any minor who is extremely thin or malnourished"
    ],
    correct: 1,
    explanation: "Emancipation is a legal status granted by a court allowing a minor to make their own decisions; common criteria include marriage, military service, or financial independence. Do not confuse it with 'emaciated.'"
  },
  {
    module: "Operations",
    tags: ["Legal", "Consent"],
    question: "Implied consent, often utilized for unconscious patients, is also known as the:",
    options: [
      "In Loco Parentis Doctrine",
      "Emergency Doctrine",
      "Involuntary Rule",
      "Standard of Care"
    ],
    correct: 1,
    explanation: "Implied consent, or the 'Emergency Doctrine,' is the assumption that a person unable to give consent (such as an unconscious patient) would want life-saving treatment if they were able to ask for it."
  },
  {
    module: "Operations",
    tags: ["Legal", "Consent"],
    question: "The legal principle of 'In Loco Parentis' applies when:",
    options: [
      "A patient is under the influence of drugs and cannot consent",
      "An organization like a school or daycare takes on the functions and responsibilities of a parent",
      "A patient is being treated against their will under a court order",
      "A minor is pregnant and considered an adult by state law"
    ],
    correct: 1,
    explanation: "In Loco Parentis allows individuals like teachers or coaches to make decisions for a minor when the parents are not present."
  },
  {
    module: "Operations",
    tags: ["MCI", "Triage"],
    question: "Using the START triage system, what tag should be assigned to a non-breathing patient who begins breathing once their airway is manually opened?",
    options: [
      "Green (Minor)",
      "Yellow (Delayed)",
      "Red (Immediate)",
      "Black (Deceased)"
    ],
    correct: 2,
    explanation: "In START triage, if a patient is not breathing, you open the airway. If they start breathing, they are tagged Red; if they still do not breathe, they are tagged Black."
  },
  {
    module: "Operations",
    tags: ["MCI", "Triage"],
    question: "What does the acronym SALT stand for in the context of mass casualty triage?",
    options: [
      "Search, Assess, Locate, Treat",
      "Sort, Assess, Lifesaving Interventions, Treatment/Transport",
      "Stabilize, Airway, Life-support, Triage",
      "Secure, Analyze, Lift, Transfer"
    ],
    correct: 1,
    explanation: "The SALT triage system was developed by a CDC-sponsored committee and stands for Sort, Assess, Lifesaving Interventions, Treatment, and Transport."
  },
  {
    module: "Operations",
    tags: ["Legal", "Documentation"],
    question: "Why is it considered 'libel' to describe a patient as 'drunk' in a written PCR without medical confirmation?",
    options: [
      "It is a verbal statement that is untrue",
      "It is a written opinion that is not a fact until confirmed by medical tests",
      "It is an act of nonfeasance",
      "It violates the EMT's duty to act"
    ],
    correct: 1,
    explanation: "Libel is written defamation. Labeling a patient as 'drunk' is an opinion/conclusion; until blood work or medical exams confirm it, documenting it can be legally problematic."
  },
  {
    module: "Operations",
    tags: ["Physics", "Trauma"],
    question: "In the kinetic energy formula ($KE = 1/2 mass \times velocity^2$), which variable has the most significant impact on the total energy produced?",
    options: [
      "Mass",
      "Velocity (Speed)",
      "Gravity",
      "Friction"
    ],
    correct: 1,
    explanation: "Because velocity is squared in the formula, even small increases in speed result in much larger increases in kinetic energy."
  },
  {
    module: "Operations",
    tags: ["Physics", "Environmental"],
    question: "Boyle’s Law states that as the pressure on a gas decreases (such as an ascending weather balloon), the volume of that gas will:",
    options: [
      "Decrease",
      "Increase",
      "Stay the same",
      "Solidify"
    ],
    correct: 1,
    explanation: "Boyle’s Law (P1V1 = P2V2) establishes that pressure and volume are inversely proportional; as pressure drops at higher altitudes, the volume inside a balloon or an air-filled organ will expand."
  },
  {
    module: "Operations",
    tags: ["Physics", "Equipment"],
    question: "According to Poiseuille's law, if you double the internal diameter of an IV catheter, the flow rate will increase by how many times?",
    options: [
      "2x",
      "4x",
      "8x",
      "16x"
    ],
    correct: 3,
    explanation: "Poiseuille's law demonstrates that flow is related to the radius of the tube to the 4th power ($2^4 = 16$)."
  },
  {
    module: "Operations",
    tags: ["Legal", "Consent"],
    question: "Which form of consent is based on the assumption that an unconscious or incapacitated patient would want life-saving treatment?",
    options: [
      "Expressed consent",
      "Involuntary consent",
      "Implied consent",
      "In loco parentis"
    ],
    correct: 2,
    explanation: "Implied consent, also known as the 'Emergency Doctrine,' is used when a patient is unable to give consent (e.g., unconscious) but is in need of immediate medical attention."
  },
  {
    module: "Operations",
    tags: ["Legal", "Consent"],
    question: "A teacher or daycare provider who gives permission for a minor to be treated in the absence of a parent is acting under the legal principle of:",
    options: [
      "Implied consent",
      "In loco parentis",
      "Emancipated minor doctrine",
      "Involuntary consent"
    ],
    correct: 1,
    explanation: "In loco parentis is the legal responsibility of a person or organization (like a school or coach) to take on the functions and responsibilities of a parent."
  },
  {
    module: "Operations",
    tags: ["Legal", "Decision-Making"],
    question: "Which of the following is the primary requirement for a patient to have 'Decision-Making Capacity' to refuse care?",
    options: [
      "The patient must be at least 21 years old",
      "The patient must be free of any physical injury",
      "The patient must understand the circumstances of their illness and the risks of refusal",
      "The patient must have a witness present to sign the refusal"
    ],
    correct: 2,
    explanation: "Decision-making capacity requires that an individual is alert, oriented, and can understand their impairment as well as the risks associated with refusing transport."
  },
  {
    module: "Operations",
    tags: ["Legal", "Consent"],
    question: "Involuntary consent is most commonly applied to which type of patient?",
    options: [
      "A minor whose parents are present but disagreeing",
      "A conscious adult who is refusing care for a broken arm",
      "A patient in a mental health emergency who is a threat to themselves or others",
      "An unconscious patient found in a public park"
    ],
    correct: 2,
    explanation: "Involuntary consent occurs when a patient is legally authorized to receive treatment against their will, such as mental health emergencies or those under arrest/court order."
  },
  {
    module: "Operations",
    tags: ["MCI", "Command"],
    question: "Which command system is used in large incidents involving multiple agencies or jurisdictions to ensure a coordinated response?",
    options: [
      "Single Command",
      "Unified Command System",
      "Administrative Command",
      "Modular Command"
    ],
    correct: 1,
    explanation: "A Unified Command system is utilized in large-scale incidents where multiagency response or multiple jurisdictions are involved."
  },
  {
    module: "Operations",
    tags: ["Legal", "Communications"],
    question: "A reporter at a scene asks for the name and condition of a patient you are treating. What information are you legally allowed to provide?",
    options: [
      "The patient's name only",
      "The patient's age and general condition",
      "The hospital they are being transported to",
      "Nothing"
    ],
    correct: 3,
    explanation: "Paramedics should provide no information to reporters to protect patient privacy and comply with HIPAA regulations."
  },
  {
    module: "Operations",
    tags: ["Safety", "Infectious Disease"],
    question: "What is the best way to minimize the risk of infection when transporting a patient with suspected meningitis?",
    options: [
      "Administer prophylactic antibiotics to yourself immediately",
      "Wear a gown and double gloves",
      "Place a mask on both yourself and the patient",
      "Keep all ambulance windows open during transport"
    ],
    correct: 2,
    explanation: "Proper BSI for meningitis, which is spread via droplets, involves masking both the provider and the patient."
  },
  {
    module: "Operations",
    tags: ["Physics", "Environmental"],
    question: "Henry's Law, which relates to decompression sickness, states that:",
    options: [
      "Pressure and volume are inversely proportional",
      "The amount of gas in a liquid is proportional to the pressure of the gas above it",
      "Double the diameter of a tube increases flow 16 times",
      "Total pressure is the sum of partial pressures"
    ],
    correct: 1,
    explanation: "Henry's Law explains how gases like nitrogen dissolve into the blood under pressure (like diving) and can form bubbles if pressure is released too quickly."
  }
];
