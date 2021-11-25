import styled, {css} from 'styled-components';

type StylesProps = {
    textType: string,
}

function handleType(textType: string){
    if(textType === 'title'){
        return css`
        font-size: 70px;
      `
    }
    
    return css`
    font-size: 40px;
  `;
}

export const Container = styled.div``;

export const TextComponent = styled.p<StylesProps>`
    ${(props: StylesProps) => handleType(props.textType)}
`; 