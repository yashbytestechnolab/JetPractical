import React, {useEffect} from 'react';
import {View, Text, FlatList, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getData} from '../../redux/reducer/user';
import {icon} from '../../assets/icons';
import {Colors} from '../../constants/Colors';

const user = [
  {
    name: 'Ali',
    hobby: {hobby1: 'Cricket', hobby2: 'hikinng'},
    location: 'India',
    isFaviourate: false,
  },
  {
    name: 'Ali',
    hobby: {hobby1: 'Cricket', hobby2: 'hikinng'},
    location: 'India',
    isFaviourate: false,
  },
  {
    name: 'Ali',
    hobby: {hobby1: 'Cricket', hobby2: 'hikinng'},
    location: 'India',
    isFaviourate: false,
  },
  {
    name: 'Ali',
    hobby: {hobby1: 'Cricket', hobby2: 'hikinng'},
    location: 'India',
    isFaviourate: false,
  },
];

interface myData {
  data: {results: Array<object>} | object;
  loading: boolean;
}
const Home = () => {
  const dispatch = useDispatch();
  const myData: myData = useSelector(
    (state: {user: {data: object; loading: boolean}}) => {
      return state?.user;
    },
  );
  console.log('myData', myData?.data?.results);

  useEffect(() => {
    dispatch(getData());
  }, []);

  const renderData = ({item}: object | any) => {
    console.log('item', item);
    // picture?.medium;
    return (
      <View
        style={{
          marginVertical: 6,
          height: 90,
          marginRight: '5%',
          marginLeft: '8%',
          borderRadius: 13,
          backgroundColor: 'white',
          elevation: 1,
          //   justifyContent: 'space-evenly',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <View
          style={{
            left: -16,
          }}>
          <Image
            source={{uri: item?.picture.medium}}
            style={{width: 60, height: 60, borderRadius: 30}}
          />
        </View>
        <View style={{justifyContent: 'space-around'}}>
          <Text style={{fontSize: 22, fontWeight: '600', color: 'black'}}>
            {item?.name?.first}
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>

          <Image
            source={icon.location}
            style={{
              width: 15,
              height: 20,
              alignSelf: 'center'
            }}
            resizeMode={'contain'}
          />
            <Text style={{fontSize: 13, paddingVertical: 5, paddingLeft: 4}}>{item?.location?.country+ ','}</Text>
            <Text style={{fontSize: 13, left: 3, paddingVertical: 5}}>
              {item?.location?.country}
            </Text>
          </View>
          {/* <Text style={{fontSize: 10}}>{item?.name}</Text> */}
        </View>
        <TouchableOpacity
          style={{
            flex: 1,
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
          }}>
          <Image
            source={icon.favourite}
            style={{
              position: 'absolute',
              right: 15,
              width: 20,
              height: 20,
              top: -25,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 0.1, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={icon.logo} style={{width: 45, height: 45}} />
      </View>
      <View style={{flex: 0.9, backgroundColor: Colors.whiteShadow}}>
        <FlatList
          style={{marginTop: 6, marginBottom: 60}}
          data={myData?.data?.results}
          renderItem={renderData}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
