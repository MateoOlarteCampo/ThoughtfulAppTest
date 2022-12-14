import Icon from "../Icon/Icon";
import { StyledSearchItemContainer, StyledTitle } from "./styles";

interface ISearchItemProps {
  title: string;
  selected: boolean;
  onPress: () => void;
}

const SearchItem = ({ title, selected, onPress }: ISearchItemProps) => {
  return (
    <StyledSearchItemContainer selected={selected} onPress={onPress}>
      <StyledTitle>{title}</StyledTitle>
      <Icon iconName='arrowLeft' />
    </StyledSearchItemContainer>
  )
}

export default SearchItem;
