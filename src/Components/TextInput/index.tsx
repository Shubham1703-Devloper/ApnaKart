import React, { PureComponent } from "react";
import {
  Platform,
  View,
  TouchableOpacity,
  Text,
  Pressable,
  StyleProp,
  ViewStyle,
} from "react-native";
import { Button, Searchbar } from "react-native-paper";
import styles from "./styles";
import { TextInput } from "react-native-paper";

interface Props {
  InputStyle?: StyleProp<ViewStyle>;
  autoFocus?: boolean;
  textRef?: any;
  label?: string;
  disable?: boolean;
  placeholder?: string;
  containerStyle?: StyleProp<ViewStyle>;
  keyboardType?: any;
  mode?: any;
  multiline?: boolean;
  onChangeText?: (text: string) => void;
  onEndEditing?: () => void | undefined;
  selectionColor?: string | undefined;
  onSubmitEditing?: () => void | undefined;
  value?: any;
  secureTextEntry?: boolean;
  maxLength?: number;
  checkForErrorToShow?: boolean;
  isAutoCapitalise?: boolean;
  underlineColor?: any;
  onFocus?: any;
  leftIcon?: any;
  leftIconStyle?: any;
  leftIconPress?: () => void | undefined;
  rightIcon?: any;
  rightIconPress?: () => void | undefined;
  rightIconStyle?: StyleProp<ViewStyle>;
  returnKeyType?: any;
  errorMsg?: any;
  placeholderStyle?: StyleProp<ViewStyle>;
  infoIcon?: any;
  helpPress?: any;
  numberOfLines?: any;
  keyboardDismissMode?: any;
  Searchbar?: any;
  placeholderTextColor?: string | undefined;
  outlineColor?: string | undefined;
  activeOutlineColor?: string | undefined;
  outlineStyle?: any;
  onPressIn?: any;
  blurOnSubmit?: any;
  ref?: any;
  onKeyDown?: any;
  showSoftInputOnFocus?: any;

}

const CustomTextInput: React.FC<Props> = ({
  InputStyle,
  autoFocus,
  textRef,
  label,
  disable,
  placeholder,
  containerStyle,
  keyboardType,
  mode,
  multiline,
  onChangeText,
  onEndEditing,
  selectionColor,
  onSubmitEditing,
  value,
  secureTextEntry,
  maxLength,
  checkForErrorToShow,
  isAutoCapitalise,
  underlineColor,
  onFocus,
  leftIcon,
  leftIconStyle,
  leftIconPress,
  rightIcon,
  rightIconPress,
  rightIconStyle,
  returnKeyType,
  errorMsg,
  placeholderStyle,
  infoIcon,
  helpPress,
  numberOfLines,
  keyboardDismissMode,
  Searchbar, placeholderTextColor,
  outlineColor,
  activeOutlineColor,
  outlineStyle,
  onPressIn, blurOnSubmit,
  ref,
  onKeyDown,
  showSoftInputOnFocus,
  ...res
}) => {


  // const focus=()=> {
  //     //method to focus the textinput
  //     ref.focus();
  //   }
  return (
    <View>
      <View>
        <TextInput
          // onKeyDown={onKeyDown}
          showSoftInputOnFocus={showSoftInputOnFocus}
          placeholder={placeholder}
          style={placeholderStyle ? [styles.placeholderStyle, styles.InputStyleView] : Searchbar ? styles.SearchbarStyl : styles.InputStyleView}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          onSubmitEditing={onSubmitEditing}
          blurOnSubmit={blurOnSubmit}
          ref={ref}
          // textRef={textRef}
          placeholderTextColor={placeholderTextColor}
          autoFocus={autoFocus}
          label={label}
          // errorMsg={errorMsg}
          onChangeText={onChangeText}
          underlineColor="transparent"
          cursorColor={'black'}
          theme={{ colors: { text: "black", } }}
          right={rightIcon}
          left={leftIcon}
          // leftIconPress={leftIconPress}
          // rightIconPress={rightIconPress}
          // rightIconStyle={rightIconStyle}
          caretHidden={false}
          mode={'outlined'}
          outlineColor={'transparent'}
          activeOutlineColor={activeOutlineColor}
          outlineStyle={styles.outlineStyle}
          onPressIn={onPressIn}
          value={value}

        />
      </View>
    </View>
  );
};

export default CustomTextInput;
