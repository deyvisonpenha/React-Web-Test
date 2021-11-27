export type QuizSchema = {
    category: string,
    type: string,
    difficulty: string,
    question: string,
    correct_answer: string,
    incorrect_answers: Array<string>
}

export type QuizProps = QuizSchema[];
