import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../../services/api';
import { Text } from '../../shared/components/Text';
import { onAdjustTextQuestion } from '../../utils/onAdjustTextQuestion';

import { QuizProps } from './quiz.types';

import { 
    Container, 
    Content, 
    QuestionContent, 
    QuestionNumber,
    QuestionOption,
    QuestionOptionContent
} from './styles';

export const Quiz = () => {
    const [answers, setAnswers] = useState<Array<string>>([]);
    const [quiz, setQuiz] = useState<QuizProps>([] as QuizProps);
    const [counterQuestion, setCounterQuestion] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    const navigate = useNavigate();

    useEffect(()=> {
        async function getQuestions(){
            try{
                const { data } = await api.get('');

                setQuiz(data.results);
                setIsLoaded(true);
            }catch(err){
                console.log(err);
            }
        }

        getQuestions();
    },[]);

    useEffect(()=>{
        if(answers.length === 10) {
            navigate("/score", {state: {
                quiz,
                answers
            }});
        }
    },[answers, navigate, quiz]);

    function handleAnswer(event: React.MouseEvent<HTMLElement>){
        const answer = (event.target as any).id;

        setAnswers(prev => [...prev, answer])

        counterQuestion < 9 && setCounterQuestion(prev => prev+1);
    }

    return (
        <Container>
            {isLoaded && (
                <Content>
                    <Text textType="title">{quiz[counterQuestion].category}</Text>
                    <QuestionContent>
                        <Text textType="normal">
                            {onAdjustTextQuestion(quiz[counterQuestion].question)}
                        </Text>

                        <QuestionOptionContent>
                            <QuestionOption id="True" onClick={handleAnswer}>TRUE</QuestionOption>
                            <QuestionOption id="False" onClick={handleAnswer}>FALSE</QuestionOption>
                        </QuestionOptionContent>
                    </QuestionContent>
                    <QuestionNumber>{`${counterQuestion+1} of ${quiz.length}`}</QuestionNumber>
                </Content>
            )}
        </Container>
    )
}