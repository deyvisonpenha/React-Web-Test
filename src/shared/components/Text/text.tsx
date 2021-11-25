import { Container, TextComponent } from './styles';
import { TextProps } from './text.types';

export const Text = ({ article, textType}: TextProps) => {
    return (
        <Container>
            <TextComponent  textType={textType}>
                {article}
            </TextComponent>
        </Container>
    );
}