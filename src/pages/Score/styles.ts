import styled from 'styled-components';
import { Button } from '../../shared/components/Button';
import { BackgroundProps } from './score.types';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100VH;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 600px;
    max-width: 100%;
    height: 80VH;
    background-color: #f5f5f5;
    text-align: center;
    border-radius: 40px;
    padding: 40px;
`;

export const TotalScore = styled.p`
    font-size: 1.5rem;
    margin-top: 1rem;
`;

export const RedirectButton = styled(Button)`
    button{
        width: 18rem;
        margin-top: 16px;
    }
`;

export const ResultContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 3rem;
`;

export const AnswerContent = styled.div<BackgroundProps>`
    display: flex;
    flex-direction: row;
    padding: 4px;
    align-items: center;
    text-align: center;
    border-radius: 10px;
    background-color:  ${({backgroundColor}) => backgroundColor};

    & + div {
        margin-top: 10px;
    }
`;

export const Icon = styled.h1`
    display: flex;
`;

export const AnswerText = styled.p`
    margin-left: 10px;
    font-size: 2rem;
`;
