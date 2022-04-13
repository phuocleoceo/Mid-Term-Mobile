import { RecyclerListView, DataProvider, LayoutProvider } from 'recyclerlistview';
import { StyleSheet, View, Dimensions, Text, TouchableOpacity } from 'react-native';
import StationEntity from '../models/StationEntity';
import React, { useState, useEffect } from 'react';
import useStation from "../hooks/useStation";
import { useSelector } from 'react-redux';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

export default function Home({ navigation })
{
    const { listStation } = useSelector(state => state.station);
    const { Get_Station_By_Id, Delete_Station } = useStation();

    const handlePress = async (id) =>
    {
        await Get_Station_By_Id(id);
        navigation.navigate("Detail");
    };

    const handleDelete = async (id) =>
    {
        await Delete_Station(id);
    };

    //---------------------------------------------------------------------------
    const [currentWidth, setcurrentWidth] = useState(SCREEN_WIDTH);
    useEffect(() =>
    {
        Dimensions.addEventListener('change', ({ window: { width, height } }) =>
        {
            if (width < height) setcurrentWidth(SCREEN_WIDTH);
            else setcurrentWidth(SCREEN_HEIGHT);
        })
    }, []);

    const _dataProvider = new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(listStation);

    const _layoutProvider = new LayoutProvider(
        (index) => _dataProvider.getDataForIndex(index),
        (type, dim) => { dim.width = currentWidth - 5; dim.height = 300; })


    const _rowRenderer = (type, data) => 
    {
        const station = new StationEntity(data);
        return (
            <TouchableOpacity key={station.addr}
                onPress={() => handlePress(station.addr)}
                onLongPress={() => handleDelete(station.addr)}>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Title</Text>
                    <Text style={styles.formText}>{station.title}</Text>
                </View>

                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Desc</Text>
                    <Text style={styles.formText}>{station.desc}</Text>
                </View>

                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Timestamp</Text>
                    <Text style={styles.formText}>{station.timeStamp}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    //---------------------------------------------------------------------------

    return (
        <View style={styles.container}>
            {
                listStation.length > 0 &&
                <RecyclerListView
                    style={{ flex: 1 }}
                    rowRenderer={_rowRenderer}
                    dataProvider={_dataProvider}
                    layoutProvider={_layoutProvider}
                    canChangeSize={true}
                />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        minHeight: 1,
        minWidth: 1,
    },
    formRow: {
        flexDirection: "row"
    },
    formLabel: {
        fontWeight: "bold"
    },
    formText: {

    }
});