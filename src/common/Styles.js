import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
    HomeContainer: {
        flex: 1
    },
    ListContainer: {
        minHeight: 80,
        flexDirection: 'row',
        marginTop: 10,
        marginHorizontal: 10,
        backgroundColor: '#fff',
        shadowOpacity: 0.2,
        borderColor: '#FFFFFF',
        borderWidth: 1,
        borderRadius: 5,
        elevation: 1
    },
    ImageView: {
        flex: 2,
        justifyContent: 'center',
    },
    Image: {
        height: 80,
        width: 80,
        resizeMode: 'contain',
        // alignSelf: 'center'
    },
    SongName: {
        fontSize: 15,
        letterSpacing: 0.2,
        color: '#227ec9',
        paddingHorizontal: 5
    },
    ArtistName: {
        flex: 5,
        fontSize: 12,
        fontWeight: 'bold',
        letterSpacing: 0.5,
        textAlign: 'left',
        color: '#227ec9',
        paddingHorizontal: 5
    },
    SongLength: {
        flex: 5,
        fontSize: 12,
        textAlign: 'right',
        color: '#227ec9',
        paddingRight: 10
    },
    DetailPageImage: {
        height: 180,
        width: 180,
        marginVertical: 5,
        alignSelf: 'center',
        resizeMode: 'contain'
    },
    text1Style: {
        fontSize: 14,
        textAlign: 'left',
        color: '#000'
    },
    txet2Style: {
        textAlign: 'center',
        color: '#000',
        fontSize: 14,
        marginTop: 5,
        fontWeight: '400'
    },
    previewButtonStyle: {
        height: 25,
        width: 100,
        borderRadius: 5,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: 'green',
    },
    songDetailContainer: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: '#FFFFFF'
    },
    trackText: {
        fontSize: 24,
        alignSelf: 'center',
        marginTop: 10,
        color: '#227ec9'
    },
    artistTextStyle: {
        textAlign: 'center',
        color: 'red',
        fontSize: 20,
        marginTop: 8,
        fontWeight: '600'
    }
})

export default Styles;