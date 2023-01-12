import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Recat, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Button, FlatList, SafeAreaView} from 'react-native'
import {COLORS, ROUTES} from '../../constants';
import Serie from '../../models/Serie'
import * as serieService from '../../services/SerieServices'


const Home = (props: { navigation: any; }) => {
  //const {navigation} = props;
  const [data,setData] = useState([]);
  const navigation = useNavigation();
  const [info, setSeries] = useState<Serie[]>([]);
  const [pageIndex, setPage] = useState(0);

  useEffect(() => {
		loadSeries();
	}, []);

  const loadSeries = async () => {
    let series = await serieService.getAllSeries({
      page:pageIndex,
    });
    setSeries(series);
    if(!info){
        return <p>Loading...</p>
    }
    console.log(info);
  };


  const renderItem = () =>{
    return(
      <view>
        <Text>bnnnnn</Text>
      </view>
    )
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button title="Filter" onPress={(navigation.navigate(ROUTES.SEARCH_MENU)) }/>
      <FlatList 
      // onEndReachedThreshold={0.5}
      // onEndReached={()=>setPage(pageIndex + 1)}
      data={data}
      renderItem={({renderItem,index})=>{
        return(
          <View>
            <Text>{renderItem.title}</Text>
          </View>
        )}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;