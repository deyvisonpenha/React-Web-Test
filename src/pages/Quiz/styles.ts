import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100VH;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 400px;
    max-width: 900px;
    height: 80VH;
    background-color: #f5f5f5;
    text-align: center;
    border-radius: 40px;
    padding: 40px;
`;

export const QuestionContent = styled.div`
    margin-top: 6rem;
    padding: 2rem;
    border: solid;
    border-width: 1px;
    border-color: black;
`;

export const QuestionNumber = styled.p`
    font-size: 1.5rem;
    margin-top: 2rem;
`;

export const QuestionOptionContent = styled.div`
    margin-top: 3rem;
    border: 0;
`;

export const QuestionOption = styled.button`
    width: 10rem;
    height: 3rem;
    cursor: pointer;

    & + button {
        margin-left: 2rem;
    }

    &:hover {
        background-color: #6AAED9;
        border: 0;
    }
`;