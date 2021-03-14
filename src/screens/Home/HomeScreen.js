import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, RefreshControl } from 'react-native'
import Loder from '../../common/Loder'
import Styles from '../../common/Styles'
import { getSongsList } from '../../network/ApiEndPoints'
import ListComponent from '../../Component/ListComponent'


const HomeScreen = ({ navigation }) => {
  const [isLoading, setLoader] = useState(true)
  const [refreshing, setRefreshing] = useState(false);
  const [listData, setListData] = useState([])


  useEffect(() => {
    fetchData();
  }, [])

  //For Fetch Song List.................
  const fetchData = () => {
    getSongsList().then((res) => {
      setListData(res)
      setLoader(false)
      setRefreshing(false)
    })
  }

  //Pull to Refresh List data.....................
  const onRefresh = () => {
    setRefreshing(true);
    fetchData();
  };

  return (
    <View style={Styles.HomeContainer}>
      <FlatList
        data={listData}
        renderItem={(item) =>
          <ListComponent
            Data={item}
            navigation={navigation}
          />}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <Text style={{ textAlign: 'center' }}>{'No Songs found.'}</Text>}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      />
      {(isLoading) ? <Loder /> : null}
    </View>
  );
}

export default HomeScreen;