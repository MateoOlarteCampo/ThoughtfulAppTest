import Icon from '../Icon/Icon';
import { StyledContainer, StyledText } from './styles';

interface ICard {
  text: string;
}

const Card = ({ text }: ICard) => {
  return (
    <StyledContainer>
      <Icon iconName='search' />
      <StyledText>{text}</StyledText>
    </StyledContainer>
  );
}

export default Card;