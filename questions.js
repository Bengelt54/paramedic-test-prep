/**
 * Master Questions Combiner
 * This file merges all individual module arrays into one.
 * Ensure all module files (anatomy.js, airway.js, etc.) are 
 * loaded in index.html BEFORE this file.
 */

const QUESTIONS = [
  ...ANATOMY_QUESTIONS,
  ...AIRWAY_QUESTIONS,
  ...TRAUMA_QUESTIONS,
  ...OPERATIONS_QUESTIONS,
  ...CARDIOLOGY_QUESTIONS,
  ...MEDICAL_QUESTIONS,
  ...CLINICAL_JUDGMENT_QUESTIONS
];