import React from 'react';
import {StyleSheet, SafeAreaView, ImageBackground} from 'react-native';
import ListPersonItemInfo from '../components/ListPersonItemInfo';

const ListItemScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/backgroundImage/img.jpg')}
        resizeMode="cover"
        style={styles.img}>
        <ListPersonItemInfo />
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    height: '100%',
  },
});
export default ListItemScreen;
