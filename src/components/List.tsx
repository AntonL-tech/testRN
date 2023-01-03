import React, {useCallback, useEffect, useState} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import {useAppDispatch, useAppSelector} from '../redux/hooks/redux';
import {getList} from '../redux/asyncReducers/asyncReducers';
import ListItem from './ListItem';
import ErrorComponent from './ErrorComponent';

const List = () => {
  const [selectedId, setSelectedId] = useState(null);
  const {loading, error, persons} = useAppSelector(store => store.reducerList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getList());
  }, []);

  const spinner = loading ? <ActivityIndicator size="large" /> : null;

  const errorMessage = error ? <ErrorComponent /> : null;

  const hasData = !(loading || error);

  const renderItem = useCallback(
    ({item}: any) => {
      const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#fafafa';
      const color = item.id === selectedId ? 'white' : 'black';

      return (
        <ListItem
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
    <FlatList data={persons} renderItem={renderItem} extraData={selectedId} />
  ) : null;
  return (
    <View>
      {spinner}
      {errorMessage}
      {content}
    </View>
  );
};
export default List;
