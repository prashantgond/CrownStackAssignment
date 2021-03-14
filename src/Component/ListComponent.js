import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import CommonFun from '../common/CommonFun';
import Styles from '../common/Styles';


const ListComponent = (props) => {

    return (
        <TouchableOpacity
            onPress={() => props.navigation.navigate('Song Detail', { songData: props.Data.item })}
            style={Styles.ListContainer}
        >
            <View style={Styles.ImageView}>
                <View style={styles.imageContainer}>
                    <Image
                        style={Styles.Image}
                        source={{ uri: props.Data.item.artworkUrl100, cache: 'force-cache' }}
                    />
                </View>

            </View>
            <View style={styles.contentView}>
                <Text style={Styles.SongName} numberOfLines={2}>
                    {props.Data.item.trackName}
                </Text>
                <View style={styles.subContentView}>
                    <Text style={Styles.ArtistName}>
                        {props.Data.item.artistName}
                    </Text>
                    <Text style={Styles.SongLength}>
                        {CommonFun.convertMillis(props.Data.item.trackTimeMillis)}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        height: 80,
        width: 80,
        backgroundColor: '#b8d8f2',
        alignSelf: 'center'
    },
    contentView: {
        flex: 7,
        justifyContent: 'center',
        marginStart: 5
    },
    subContentView: {
        flexDirection: 'row',
        marginVertical: 10
    }
})

export default ListComponent;