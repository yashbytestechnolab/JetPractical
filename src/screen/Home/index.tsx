import React, {useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getData, onUpdateFavourite} from '../../redux/reducer/user';
import {icon} from '../../assets/icons';
import {Colors} from '../../constants/Colors';
import {Header} from '../../components';
import {AsyncStorageSetValue} from '../../services/LocalStorage';
import {LocalStorageKeys} from '../../constants/LocakStorageKeys';
import {styles} from './styles';
import {details, myData} from './interface';

const Home = () => {
  const dispatch = useDispatch();

  const myData: myData = useSelector(
    (state: {user: {data: object; loading: boolean; refreshing: boolean}}) => {
      return state?.user;
    },
  );

  const favouriteList = useSelector(
    (state: {user: {faviourateList: Array<object>}}) => {
      return state?.user?.faviourateList;
    },
  );
  /**
   * Detail for which page we are currently
   */
  let details: details = {
    page: 0,
    result: 10,
    myData: myData?.data?.results,
    refreshing: false,
  };

  /**
   * TO get user list
   */
  const onLoadDataList = () => {
    dispatch(getData(details));
  };

  /**
   * TO get user list
   */
  useEffect(() => {
    onLoadDataList();
  }, []);

  /**
   * on click to add favourite and remove favourite
   * @param id number
   * @param isFavourite flag for favourite user
   */
  const onSetFavourite = (id: number, isFavourite: boolean) => {
    let {results}: any = myData?.data;

    let addFavouriteUser = {...results[id], isFavourite: !isFavourite};

    const onFavouriteAdd = results?.map((item: any, index: number) => {
      return index == id ? {...item, isFavourite: !isFavourite} : item;
    });

    let filterFavouriteList: Array<object> = [];
    if (isFavourite) {
      filterFavouriteList = favouriteList?.filter((favouriteRes: any) => {
        return favouriteRes?.email !== addFavouriteUser?.email;
      });
    } else {
      filterFavouriteList = [...favouriteList, addFavouriteUser];
    }

    let payload = {
      listOfUser: {
        ...myData,
        ['data']: {...myData.data, results: onFavouriteAdd},
      },
      favouriteListOfUser: filterFavouriteList,
    };

    dispatch(onUpdateFavourite(payload));

    AsyncStorageSetValue(
      LocalStorageKeys.favourite,
      JSON.stringify(payload.favouriteListOfUser),
    );
  };

  /**
   * pagenation
   * @param distanceFromEnd to endscroll distance
   */
  const onEnd = () => {
    details['page'] = myData?.data?.info.page + 1;
    dispatch(getData(details));
  };

  /**
   * user list render
   * @param param userDetail
   * @returns
   */
  const renderData = ({item, index}: object | any | number) => {
    return (
      <View key={item?.phone} style={styles.mainWrapperList}>
        <View style={styles.imageWrapper}>
          <Image source={{uri: item?.picture.medium}} style={styles.image} />
        </View>
        <View style={styles.detailWrapper}>
          <Text style={styles.firstName}>{item?.name?.first}</Text>
          <View style={styles.locationWrapper}>
            <Image
              source={icon.location}
              style={styles.location}
              resizeMode={'contain'}
            />
            <Text style={styles.country}>{item?.location?.country + ','}</Text>
            <Text style={styles.city}>{item?.location?.country}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            {Object.values(item?.hobbies).map((hobbies: any) => {
              return <RenderHobby hobbies={hobbies} />;
            })}
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => onSetFavourite(index, item?.isFavourite)}
          style={styles.favouriteIconWrapper}>
          <Image
            source={item?.isFavourite ? icon.favouriteFocused : icon.favourite}
            style={styles.favouriteIcon}
          />
        </TouchableOpacity>
      </View>
    );
  };

  /**
   * Render hobby list
   * @param param hobbies like music trave etc.
   * @returns
   */
  const RenderHobby = ({hobbies}: any) => {
    return (
      <View
        style={[styles.hobbyWrapper, {backgroundColor: hobbies?.backColor}]}>
        <Text style={{color: hobbies?.color, fontSize: 12}}>
          {hobbies?.name}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      {myData?.loading && myData?.data?.results == undefined ? (
        <View style={styles.loaderWrapper}>
          <ActivityIndicator color={Colors.primary} size={40} />
        </View>
      ) : (
        <View style={styles.container}>
          <FlatList
            keyExtractor={(item: any, index: number) => index.toString()}
            style={styles.list}
            data={myData?.data?.results}
            renderItem={renderData}
            ListFooterComponent={() => {
              return (
                <View style={styles.footerWrapper}>
                  {myData?.loading && myData?.data?.results && (
                    <ActivityIndicator color={Colors.primary} size={40} />
                  )}
                </View>
              );
            }}
            refreshControl={
              <RefreshControl
                refreshing={myData?.refreshing}
                onRefresh={() => {
                  details['refreshing'] = true;
                  onLoadDataList();
                }}
                colors={[Colors.primary]}
                tintColor={Colors.primary}
              />
            }
            onEndReached={({distanceFromEnd}) => onEnd(distanceFromEnd)}
            onEndReachedThreshold={0.4}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Home;
