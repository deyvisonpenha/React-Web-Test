import styled, {css} from 'styled-components';

type StylesProps = {
    textType: string,
}

function handleType(textType: string){
    if(textType === 'title'){
        return css`
        font-size: 5rem;
      `
    }
    
    return css`
    font-size: 2.5rem;
  `;
}

export const Container = styled.div``;

export const TextComponent = styled.p<StylesProps>`
    ${(props: StylesProps) => handleType(props.textType)}
`; 