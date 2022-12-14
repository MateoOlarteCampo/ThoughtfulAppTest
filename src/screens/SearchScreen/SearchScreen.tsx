import { useState, useContext, useEffect } from "react";
import { View, FlatList } from "react-native";
import Card from "../../components/Card/Card";
import SearchBar from "../../components/SearchBar/SearchBar";
import SearchItem from "../../components/SearchItem/SearchItem";
import { ThoughtfulContext, ThoughtfulContextProps } from "../../context/thoughtful.context";
import { StyledListContainer } from './styles';

const SearchScreen = () => {
  const mockedData = useContext(ThoughtfulContext);
  const handleOnPress = (id: string) => setSelectedItem(id);
  const [selectedItem, setSelectedItem] = useState<null | string>(null);
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState<ThoughtfulContextProps>(mockedData);
  const renderItem = ({ item: { id, title } }: any) => (
    <SearchItem key={id} title={title} onPress={() => handleOnPress(id)} selected={selectedItem === id} />
  );

  const onChangeSearchValue = (newValue: string) => {
    setSearchValue(newValue);
  };

  const handleCleanSearch = () => {
    setSearchValue('');
    setSelectedItem(null);
  }

  useEffect(() => {
    setSearchResults(mockedData.filter((item) => item.title.toLocaleUpperCase()
      .includes(searchValue.toLocaleUpperCase())));
  }, [searchValue]);

  return (
    <View>
      <SearchBar value={searchValue} onChangeSearchValue={onChangeSearchValue} onCleanSearch={handleCleanSearch} />
      <StyledListContainer>
        <FlatList
          data={searchResults}
          extraData={searchResults}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={<Card text="No hay resultados para la búsqueda" />}
        />
      </StyledListContainer>
    </View>
  )
}

export default SearchScreen;