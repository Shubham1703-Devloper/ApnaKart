import { StyleSheet } from 'react-native';
import windowHeight from '../Dimensions/Dimensions';

type Style = {
    defaultTitleStyle: any;
    defaultButtonStyle: any;
    defaultWhiteButtonStyle: any;
    defaultGreyButtonStyle: any;
    defaultBlackTitleStyle: any;
    defaultBlackTitleStyle1: any;
};

export default StyleSheet.create<Style>({
    defaultTitleStyle: {
        fontSize: 18,
        color: 'white',
        paddingHorizontal: 10,
        letterSpacing: 0
    },
    defaultBlackTitleStyle: {
        fontSize: 18,
        color: 'white',
        paddingHorizontal: 10,
        width:'100%',
        letterSpacing: 0
    },
    defaultBlackTitleStyle1: {
        fontSize: 18,
        color: 'white',
        letterSpacing: 0
    },
    defaultButtonStyle: {
        height: windowHeight.windowHeight/15,
        alignContent: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        borderRadius: 12,
        backgroundColor: 'Dark blue',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: 'Dark blue',
        width:'100%',
        elevation: 0
    },
    defaultWhiteButtonStyle: {
        height: windowHeight.windowHeight/15,
        alignContent: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        borderRadius: 12,
        backgroundColor: 'white',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: 'white',
        width:'100%',
        elevation: 0
    },
    defaultGreyButtonStyle: {
        height:  windowHeight.windowHeight/15,
        width:'100%',
        alignContent: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        borderRadius: 12,
        backgroundColor: '#393A3F',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: 'black',
        elevation: 0
    }
});