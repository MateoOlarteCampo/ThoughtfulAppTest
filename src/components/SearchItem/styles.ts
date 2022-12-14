import styled from 'styled-components/native';

interface ISearchItemContainer {
  selected: boolean;
}

export const StyledSearchItemContainer = styled.TouchableOpacity<ISearchItemContainer>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between; 
  border: solid ${(props) => props.selected ? '2px #ED470F' : '1px #E0E0E0'};
  border-radius: 16px;
  padding: 12px 24px 12px 16px;
  margin: 8px 0;
  background-color: #FFFFFF;
`;

export const StyledTitle = styled.Text`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #333333;
`;
