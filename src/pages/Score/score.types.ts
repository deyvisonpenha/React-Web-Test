import { QuizProps } from '../Quiz/quiz.types';

export type RouteProps = {
    quiz: QuizProps,
    answers: Array<string>
}

export type BackgroundProps = {
    backgroundColor: string;
}