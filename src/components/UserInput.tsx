import {
  Image,
  StyleProp,
  StyleSheet,
  View,
  TextInput,
  ViewStyle,
  ImageStyle,
} from 'react-native';
import React from 'react';
import {Colors} from '../constants/Colors';

interface textInput {
  wrapperStyle?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<ImageStyle>;
  onChangeText: (text: any) => void;
  value: any;
  icon: any;
  placeholder: string;
  focus?: boolean;
}

export const UserInput = (props: textInput) => {
  const {
    wrapperStyle,
    onChangeText,
    value,
    icon,
    iconStyle,
    placeholder,
    focus,
  } = props;
  return (
    <>
      <View style={[inputStyles.wrapper, wrapperStyle]}>
        <Image
          source={icon}
          style={[inputStyles.icon, iconStyle, focus && inputStyles.tintColor]}
        />
        <TextInput
          placeholder={placeholder}
          style={inputStyles.input}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
      <View style={[inputStyles.line, focus && inputStyles.focusBackground]} />
    </>
  );
};

const inputStyles = StyleSheet.create({
  wrapper: {flexDirection: 'row'},
  icon: {height: 30, width: 30, alignSelf: 'center'},
  input: {flex: 1, paddingLeft: 12},
  line: {height: 1, backgroundColor: Colors.midGrey, bottom: 6},
  tintColor: {tintColor: Colors.primary},
  focusBackground: {backgroundColor: Colors.primary},
});
