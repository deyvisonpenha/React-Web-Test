import { Container, ButtonContent} from './styles';

export const Button = ({children, ...rest}: any) => {
    return(
        <Container {...rest}>
            <ButtonContent>{children}</ButtonContent>
        </Container>
    )
}
