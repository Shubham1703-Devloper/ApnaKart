import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';
import {Button as ButtonProps, Title} from 'react-native-paper';
import styles from './styles';


interface Props {
    title: string;
    onPress: () => void;
    mode?: 'text' | 'outlined' | 'contained';
    theme?: string | undefined;
    fontWeight?: string | undefined;
    fontsize?: number;
    whiteButton?: boolean;
    purpleStyle?:boolean;
    greyButton?: boolean;
    buttonStyle?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<ViewStyle>;
    childern?: any;
  }

  const CustomButton: React.FC<Props>  = ({
    mode,
    theme,
    onPress,
    title,
    fontWeight,
    titleStyle,
    fontsize,
    whiteButton,
    buttonStyle,
    greyButton,
    purpleStyle,
    childern,
    ...rest
}) => {
    const buttonStyles = whiteButton ? styles.defaultWhiteButtonStyle : purpleStyle ? styles.defaultGreyButtonStyle : styles.defaultButtonStyle
    const textStyles = purpleStyle ? [fontsize ? styles.defaultBlackTitleStyle1 : styles.defaultBlackTitleStyle] : styles.defaultTitleStyle
    return (
        <ButtonProps
            uppercase={false}
            labelStyle={[
                textStyles,
                titleStyle,
            ]}
            style={[buttonStyles, buttonStyle]}
            mode={mode}
            onPress={onPress}
            {...rest}
        >{title}</ButtonProps>
    );
};



export default memo(CustomButton)