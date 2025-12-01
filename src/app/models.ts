export type QuestionType = 'MCQ' | 'TRUE_FALSE';

export interface Question {
  id: string;
  type: QuestionType;
  text: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface Answer {
  questionId: string;
  selectedOptionIndex: number;
  isCorrect: boolean;
}

export interface Participant {
  id: string;
  name: string;
  score: number;
  answers: Answer[];
}

export interface Session {
  sessionId: string;
  questions: Question[];
  currentQuestionIndex: number;
  status: 'NOT_STARTED' | 'IN_PROGRESS' | 'FINISHED';
  participants: Participant[];
}
