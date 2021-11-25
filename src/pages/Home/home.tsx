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
					<Text article={homeText.title} textType="title"/>
					<Text article={homeText.content} textType="normal"/>
					<Text article={homeText.bottom} textType="normal"/>
					<Button onClick={handleRedirect} >BEGIN</Button>
				</Content>
			</Container>
		)
}