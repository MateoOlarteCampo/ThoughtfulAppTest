import { TouchableOpacity } from 'react-native';
import Icon from '../Icon/Icon';
import { StyledSearchContainer, StyledSearchInput } from './styles';

interface ISearchBar {
  value: string;
  onChangeSearchValue: (searchParam: string) => void;
  onCleanSearch?: () => void;
}

const SearchBar = ({ value, onChangeSearchValue, onCleanSearch }: ISearchBar) => {
  return (
    <StyledSearchContainer>
      <Icon iconName='search' />
      <StyledSearchInput
        placeholder='Search'
        value={value}
        onChangeText={(value) => onChangeSearchValue(value)}
        placeholderTextColor='#333333'
      />
      {value.length > 0 && (
        <TouchableOpacity onPress={onCleanSearch}>
          <Icon iconName='close' />
        </TouchableOpacity>
      )}
    </StyledSearchContainer>
  );
}

export default SearchBar;