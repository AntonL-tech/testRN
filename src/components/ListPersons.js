import React, {useCallback, useEffect, useState} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getList} from '../redux/reducerList';
import ListPersonsItem from './ListPersonsItem';

const ListPersons = () => {
  const [selectedId, setSelectedId] = useState(null);
  const {loading, error, persons} = useSelector(store => store.reducerList);
  dispatch = useDispatch();

  useEffect(() => {
    dispatch(getList());
  }, []);

  const spinner = loading ? <ActivityIndicator size="large" /> : null;

  const errorMessage = error ? (
    <View>
      <Text>Somethig was wrong...</Text>
    </View>
  ) : null;

  const hasData = !(loading || error);

  const renderItem = useCallback(
    ({item}) => {
      const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#fafafa';
      const color = item.id === selectedId ? 'white' : 'black';

      return (
        <ListPersonsItem
          item={item}
          key={item.id}
          name={item.name}
          id={item.id}
          onPress={() => setSelectedId(item.id)}
          backgroundColor={{backgroundColor}}
          textColor={{color}}
        />
      );
    },
    [selectedId],
  );

  const content = hasData ? (
    <FlatList
      data={persons}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      extraData={selectedId}
    />
  ) : null;
  return (
    <View>
      {spinner}
      {errorMessage}
      {content}
    </View>
  );
};
export default ListPersons;
