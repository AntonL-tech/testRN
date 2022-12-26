import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {getListItem} from '../redux/reducerList';
import {useDispatch, useSelector} from 'react-redux';
const ListPersonItemInfo = () => {
  const {person, currentId} = useSelector(store => store.reducerList);
  dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListItem(currentId));
  }, [dispatch, currentId]);
  const {id, eyeColor, gender, height, mass, name, skinColor, birthYear} =
    person;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Image
        source={{
          uri: `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`,
        }}
        resizeMode="cover"
        style={styles.img}
      />
      <View style={styles.info}>
        <View>
          <Text style={styles.text}>Gender: {gender}</Text>
          <Text style={styles.text}>Year of birth: {birthYear}</Text>
          <Text style={styles.text}>Eye color: {eyeColor}</Text>
        </View>
        <View>
          <Text style={styles.text}>Height: {height}</Text>
          <Text style={styles.text}>Weight: {mass}</Text>
          <Text style={styles.text}>Skin color: {skinColor}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#666666',
    opacity: 0.8,
    width: '85%',
    marginLeft: '7.5%',
    marginTop: 150,
    borderRadius: 6,
    borderColor: '#9999ff',
    borderWidth: 2,
  },
  img: {
    width: 100,
    height: 100,
    marginTop: 15,
    marginLeft: '38%',
    borderRadius: 45,
  },
  title: {
    color: '#cc0000',
    marginTop: 10,
    textAlign: 'center',
    fontSize: 30,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  text: {
    marginTop: 5,
    marginBottom: 20,
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
export default ListPersonItemInfo;
