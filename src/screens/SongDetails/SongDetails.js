import React from 'react'
import { View, Text, Image, ScrollView, Linking } from 'react-native'
import Styles from '../../common/Styles';
import moment from 'moment';


const SongDetails = (props) => {
  const { songData } = props.route.params;

  return (
    <View style={Styles.songDetailContainer}>
      <ScrollView>
        <Image
          style={Styles.DetailPageImage}
          source={{ uri: songData.artworkUrl100 }}
        />

        <Text style={Styles.trackText}>
          {songData.trackName}
        </Text>

        <Text
          onPress={() => Linking.openURL(songData.artistViewUrl)}
          style={[Styles.artistTextStyle, { textDecorationLine: 'underline' }]}
        >
          {songData.artistName}
        </Text>

        <Text style={Styles.txet2Style}>
          {songData.primaryGenreName + ' .' + " " + moment(songData.releaseDate).format("YYYY") + ' ' + '(' + songData.country + ')'}
        </Text>

        <Text style={Styles.txet2Style}>
          {'Track count: ' + songData.trackCount}
        </Text>


        <View style={Styles.previewButtonStyle}>
          <Text
            onPress={() => Linking.openURL(songData.previewUrl)}
            style={[Styles.text1Style, { color: '#fff' }]}>
            {'Preview'}
          </Text>
        </View>


        <Text style={[Styles.text1Style, { fontSize: 16, fontWeight: '600', marginTop: 10 }]}>
          {'More Details: '}
        </Text>

        <Text style={[Styles.text1Style, { marginTop: 10 }]}>
          {'Track name: ' + songData.trackCensoredName}
        </Text>

        <Text style={[Styles.text1Style, { marginTop: 5 }]}>
          {'Artist name: ' + songData.collectionCensoredName}
        </Text>

        <Text style={[Styles.text1Style, { marginTop: 5 }]}>
          {'Release date: ' + moment(songData.releaseDate).format("MMMM-DD-YYYY")}
        </Text>

        <Text style={[Styles.text1Style, { fontWeight: '400', marginTop: 5 }]}>
          {'Track price: ' + songData.trackPrice + ' ' + songData.currency}
        </Text>

        <Text
          onPress={() => Linking.openURL(songData.collectionViewUrl)}
          style={[Styles.SongName, { paddingTop: 5, textDecorationLine: 'underline' }]}>
          {'Get collection of ' + songData.artistName}
        </Text>
      </ScrollView>
    </View>
  )
}


export default SongDetails;