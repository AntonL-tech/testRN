import React from 'react';
import {StyleSheet, SafeAreaView, ImageBackground} from 'react-native';
import ListItemInfo from '../components/ListItemInfo';

const ListItemScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/backgroundImage/img.jpg')}
        resizeMode="cover"
        style={styles.img}>
        <ListItemInfo />
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
