import {FlatList, Image, SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import {Header} from '../../components';
import {icon} from '../../assets/icons';
import {useSelector} from 'react-redux';
import {styles} from './styles';
import {strings} from '../../constants/strings';

const Favourite = () => {
  const favouriteList = useSelector(
    (state: {user: {faviourateList: Array<object>}}) => {
      return state?.user?.faviourateList;
    },
  );

  const renderFavourite = ({item}: any) => {
    return (
      <View style={styles.mainListWarpper}>
        <Image source={{uri: item?.picture?.medium}} style={styles.image} />
        <View style={styles.nameWrapper}>
          <Text style={styles.firstName}>{item?.name?.first}</Text>
        </View>
        <View style={styles.favouriteWrapper}>
          <Image source={icon.favouriteFocused} style={styles.favourite} />
        </View>
      </View>
    );
  };
  return (
    <>
      <SafeAreaView style={styles.safeAreaView} />
      <View style={styles.container}>
        <Header />
        <View style={styles.listWrapper}>
          <FlatList
            keyExtractor={(item: any, index: number) => index.toString()}
            style={[styles.list]}
            data={favouriteList}
            renderItem={renderFavourite}
            contentContainerStyle={styles.containStyle}
            ListEmptyComponent={() => {
              return (
                <View style={styles.noFavouriteWrapper}>
                  <Text style={styles.noFavourite}>{strings.noFavourite}</Text>
                </View>
              );
            }}
          />
        </View>
      </View>
    </>
  );
};

export default Favourite;
