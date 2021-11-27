import { Container, TextComponent } from './styles';
import { TextProps } from './text.types';

export const Text = ({ children , textType}: TextProps) => {
    return (
        <Container>
            <TextComponent  textType={textType}>
                {children}
            </TextComponent>
        </Container>
    );
}