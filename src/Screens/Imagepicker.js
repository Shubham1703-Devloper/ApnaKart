import React, {useState, useEffect} from 'react';
import {
  PermissionsAndroid,
  Image,
  View,
  StyleSheet,
  Platform,
  StatusBar,
  Text,
  FlatList,
  Alert,
} from 'react-native';
import {Button} from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import CustomButton from '../Components/Button';
import ShareComp from '../Components/ShareComp';
import OpenCamera from '../Components/OpenCamera';
import CustomImagePicker from '../Components/CustomImagePicker';

var temp = 0;
export default function Imagepicker() {
  const [image, setImage] = useState('');
  const [image1, setImage1] = useState('');
  const [data, setdata] = useState([]);
  const [temp, settemp] = useState(0);

  var DATA = [];

  console.log(temp,'data====');
  

  return (
    <View style={styles.container}>
      <View style={styles.ImagePicker}>
        <OpenCamera settemp={settemp} image={image} setImage={setImage} data={data} setdata={setdata}/>
        <CustomImagePicker settemp={settemp} data={data} setdata={setdata}/>
      </View>

      <View>
        <View style={styles.FlatListView}>
          <FlatList
            style={styles.flatlist}
            data={data}
            renderItem={({item}) => (
              <Item
                item={item}
                // onPress={() =>
                //   props.navigation.navigate('Calling...', {
                //     item: item,
                //   })
                // }
              />
            )}
            // ItemSeparatorComponent={ItemSeparatorComponent}
            ItemSeparatorComponent={() => <View style={styles.ItemSeparatorView} />}
            keyExtractor={item => item.id}
            horizontal={false}
            // set number of columns

            // ListHeaderComponent={Header}
            // ListFooterComponent={Footer}
            //stickyHeaderIndices={[0]}
          />
        </View>
      </View>
    </View>
  );
}
const ItemSeparatorComponent = () => {
  <View style={styles.ItemSeparatorView}></View>;
};

const Item = ({item}) => (
  <View style={styles.imageView}>
    {temp == 1 ? (
      <View>
        <Image
          source={{uri: item.uri}}
          resizeMode={'contain'}
          style={styles.btn}
        />

        <ShareComp item={item} />
      </View>
    ) : (
      <View>
        <Image
          source={{uri: item.path}}
          resizeMode={'contain'}
          style={styles.btn}
        />
        <ShareComp item={item} path/>
      </View>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatlist: {},
  btn: {
    width: '100%',
    height: 400,
  },
  imageView: {
    marginBottom: 20,
    width: '100%',
    height: 500,
    backgroundColor: '#adadaa',
  },
  FlatListView: {
    backgroundColor: '#4a4a4a',
  },
  ItemSeparatorView: {
    height: 20,
    backgroundColor: 'red',
  },

  ImagePicker: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#c7c5c5',
  },
});
