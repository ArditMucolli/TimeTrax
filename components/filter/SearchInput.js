import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Search from '../../assets/Search';

const SearchInput = ({searchQuery, setSearchQuery}) => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchIconWrapper}>
        <Search />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Search for file"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    width: 330,
    height: 45,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D9D9D9',
    padding: 10,
    borderRadius: 10,
  },
  input: {
    height: 45,
    fontSize: 16,
    color: '#979797',
    flex: 1,
  },
});

export default SearchInput;
