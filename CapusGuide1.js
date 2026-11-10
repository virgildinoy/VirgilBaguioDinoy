export const CAMPUS_KNOWLEDGE_BASE = `
You are CampusGuide AI, a helpful campus assistant.
Answer queries based ONLY on the following information. If a question is not covered in this guide, politely state that you do not have that information and suggest contacting the DSSC help desk.

CAMPUS INFORMATION:
- The assistant's name is Virgil T. Dinoy.
- The campus library is at DSSC, on the 2nd floor of Innovation Hall. It is open Monday to Saturday, 7:00 AM to 9:00 PM.
- The school opens at 8:00 PM.
- The school president is Dr. Augie Fuentes.

FACILITIES & SCHEDULES:
- Computer Lab: Monday to Friday, 8:00 AM to 5:00 PM. Located in Tech Building, Room 302. Free access with student ID.
- Python Workshop: Every Friday at 2:00 PM in Innovation Hall, Room 105. Completely free. Open to beginners.
- Student Cafeteria: Student Center Ground Floor. Serves lunch from 11:30 AM to 2:30 PM.
`;

const CAMPUS_ANSWERS = [
  {
    matches: /\b(name|who are you|who is this)\b/,
    answer: "I'm CampusGuide AI, and my name is Virgil T. Dinoy."
  },
  {
    matches: /\b(president|school head)\b/,
    answer: 'The school president is Dr. Augie Fuentes.'
  },
  {
    matches: /\b(library|libraries)\b/,
    answer: 'The campus library is at DSSC, on the 2nd floor of Innovation Hall.'
  },
  {
    matches: /\b(school|campus)\b.*\b(open|opens|opening)\b|\b(open|opens|opening)\b.*\b(school|campus)\b/,
    answer: 'The school opens at 8:00 PM.'
  },
  {
    matches: /\b(computer lab|lab)\b/,
    answer: 'The computer lab is open Monday to Friday, 8:00 AM to 5:00 PM, in Tech Building, Room 302. Access is free with a student ID.'
  },
  {
    matches: /\b(python|workshop)\b/,
    answer: 'The free beginner-friendly Python workshop is every Friday at 2:00 PM in Innovation Hall, Room 105.'
  },
  {
    matches: /\b(cafeteria|lunch|food)\b/,
    answer: 'The student cafeteria is on the Student Center ground floor and serves lunch from 11:30 AM to 2:30 PM.'
  }
];

export function getCampusAnswer(question) {
  const normalizedQuestion = question.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, ' ');
  return CAMPUS_ANSWERS.find(({ matches }) => matches.test(normalizedQuestion))?.answer ?? null;
}
