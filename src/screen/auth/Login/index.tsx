import {Alert, Image, SafeAreaView, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../../constants/Colors';
import {icon} from '../../../assets/icons';
import {strings} from '../../../constants/strings';
import {UserInput} from '../../../components';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './styles';
import {emailPattern} from './regex';
import {emailCredential, passwordCredential} from './credential';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../routes/RoutesName/RoutesName';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AsyncStorageSetValue} from '../../../services/LocalStorage';
import {LocalStorageKeys} from '../../../constants/LocakStorageKeys';

const Login = () => {
  const navigation: NavigationProp<ReactNavigation.RootParamList> =
    useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const disableButton = () => {
    return (
      email?.length <= 0 || !emailPattern.test(email) || password?.length <= 0
    );
  };

  const onHandleLogin = () => {
    if (email !== emailCredential || password !== passwordCredential) {
      Alert.alert('Please Enter Valid Email And Password');
    } else {
      AsyncStorageSetValue(LocalStorageKeys.credential, {email});
      navigation.reset({
        index: 1,
        routes: [{name: ROUTES.TabGroup}],
      });
    }
  };

  return (
    <>
      <SafeAreaView style={{backgroundColor: Colors.whiteShadow}} />
      <View style={styles.wrapperStyle}>
        <View style={styles.loginPage}>
          <View style={styles.logoWrapper}>
            <Image source={icon.logo} style={styles.logo} />
          </View>
          <View style={styles.loginTextWrapper}>
            <Text style={styles.loginText}>{strings.login}</Text>
          </View>
          <View style={styles.inputWrapper}>
            <UserInput
              placeholder={strings.email}
              icon={icon.email}
              value={email}
              focus={email?.length > 0}
              onChangeText={(text: any) => setEmail(text)}
            />
            <UserInput
              placeholder={strings.password}
              icon={icon.password}
              value={password}
              focus={password?.length > 0}
              onChangeText={(text: any) => setPassword(text)}
              wrapperStyle={{marginTop: 15}}
              secureTextEntry
              iconStyle={{height: 25, width: 25}}
            />

<View style={styles.buttonWrapper}>
            <TouchableOpacity
              disabled={disableButton()}
              onPress={() => onHandleLogin()}
              activeOpacity={0.9}
              style={[
                styles.button,
                disableButton() && {
                  backgroundColor: Colors.offWhite,
                },
              ]}>
              <Text style={styles.buttonText}>{strings.login}</Text>
            </TouchableOpacity>
          </View>
          
          </View>
       
        </View>
      </View>
    </>
  );
};

export default Login;
