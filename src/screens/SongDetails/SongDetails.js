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
          {songData.trackName ? songData.trackName : ''}
        </Text>

        <Text
          onPress={() => songData.artistViewUrl ? Linking.openURL(songData.artistViewUrl) : ''}
          style={[Styles.artistTextStyle, { textDecorationLine: 'underline' }]}
        >
          {songData.artistName ? songData.artistName : ''}
        </Text>

        <Text style={Styles.txet2Style}>
          {songData.primaryGenreName + ' .' + " " + moment(songData.releaseDate).format("YYYY") + ' ' + '(' + songData.country + ')'}
        </Text>

        {songData.trackCount ?
          <Text style={Styles.txet2Style}>
            {'Track count: ' + songData.trackCount}
          </Text> : null
        }


        <View style={Styles.previewButtonStyle}>
          <Text
            onPress={() => songData.previewUrl ? Linking.openURL(songData.previewUrl) : ''}
            style={[Styles.text1Style, { color: '#fff' }]}>
            {'Preview'}
          </Text>
        </View>


        <Text style={[Styles.text1Style, { fontSize: 16, fontWeight: '600', marginTop: 10 }]}>
          {'More Details: '}
        </Text>

        {songData.trackCensoredName ?
          <Text style={[Styles.text1Style, { marginTop: 10 }]}>
            {'Track name: ' + songData.trackCensoredName}
          </Text>
          : null}

        {songData.collectionCensoredName ?
          <Text style={[Styles.text1Style, { marginTop: 5 }]}>
            {'Artist name: ' + songData.collectionCensoredName}
          </Text> : null}

        {songData.releaseDate ?
          <Text style={[Styles.text1Style, { marginTop: 5 }]}>
            {'Release date: ' + moment(songData.releaseDate).format("MMMM-DD-YYYY")}
          </Text> : null}

        {songData.trackPrice ?
          <Text style={[Styles.text1Style, { fontWeight: '400', marginTop: 5 }]}>
            {'Track price: ' + songData.trackPrice + ' ' + songData.currency}
          </Text> : null}

        {songData.artistName ?
          <Text
            onPress={() => songData.collectionViewUrl ? Linking.openURL(songData.collectionViewUrl) : ''}
            style={[Styles.SongName, { paddingTop: 5, textDecorationLine: 'underline' }]}>
            {'Get collection of ' + songData.artistName}
          </Text> : null}
      </ScrollView>
    </View>
  )
}


export default SongDetails;