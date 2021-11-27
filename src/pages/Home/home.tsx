import { Container, Content } from './styles';

import { Text } from '../../shared/components/Text';
import { Button } from '../../shared/components/Button';

import { homeText } from '../../constants/home';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
	let navigate = useNavigate();

	function handleRedirect(){
		navigate("/quiz");
	}

    return (
			<Container>
				<Content>
					<Text textType="title">{homeText.title}</Text>
					<Text textType="normal">{homeText.content}</Text>
					<Text textType="normal">{homeText.bottom}</Text>
					<Button onClick={handleRedirect} >BEGIN</Button>
				</Content>
			</Container>
		)
}