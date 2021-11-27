import { useLocation, useNavigate } from 'react-router-dom';

import { Text } from '../../shared/components/Text';
import { onAdjustTextQuestion } from '../../utils/onAdjustTextQuestion';

import { RouteProps } from './score.types';
import { 
    Container, 
    Content, 
    TotalScore,
    RedirectButton,
    ResultContent,
    AnswerContent,
    Icon,
    AnswerText,
} from './styles';

export const Score = () => {
    const location = useLocation();
    let navigate = useNavigate();

    const {quiz, answers} = location.state as RouteProps;

    function totalScored(){
        const correctAnswers = quiz?.filter((item, index) => item.correct_answer === answers[index]).length;
        
        return correctAnswers;
    }

    function handleRedirect(){
		navigate("/quiz");
	}

    function onSettingBackground(index: number){
        if (quiz[index].correct_answer === answers[index]) {
            return "#62C2B0"
        }

        return "#F5646D";
    }

    return (
        <Container>
            <Content>
                <Text textType="normal">You scored</Text>
                <TotalScore>{`${totalScored()} / ${quiz?.length}`}</TotalScore>
                <ResultContent>
                    {quiz?.map((item, index) => (
                        <AnswerContent key={index} backgroundColor={onSettingBackground(index)} >
                            <Icon>{item.correct_answer === answers[index] ? "+" : "-"}</Icon>
                            <AnswerText>{onAdjustTextQuestion(quiz[index].question)}</AnswerText>
                        </AnswerContent>
                    ))}
                    <RedirectButton onClick={handleRedirect}>PLAY AGAIN?</RedirectButton>
                </ResultContent>
            </Content>
        </Container>
    )
}