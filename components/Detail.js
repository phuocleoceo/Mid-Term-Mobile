import { StyleSheet, View, Text, ScrollView } from 'react-native';
import StationEntity from "../models/StationEntity";
import { useSelector } from 'react-redux';
import React from 'react';


export default function Detail()
{
    const { currentStation } = useSelector(state => state.station);
    const cur = new StationEntity(currentStation);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.formControl}>
                <Text style={styles.formLabel}>Title :</Text>
                <Text style={styles.formContent}>{cur.title}</Text>
            </View>

            <View style={styles.formControl}>
                <Text style={styles.formLabel}>Desc :</Text>
                <Text style={styles.formContent}>{cur.desc}</Text>
            </View>

            <View style={styles.formControl}>
                <Text style={styles.formLabel}>TimeStamp :</Text>
                <Text style={styles.formContent}>{cur.timeStamp}</Text>
            </View>

            <View style={styles.formControl}>
                <Text style={styles.formLabel}>lat :</Text>
                <Text style={styles.formContent}>{cur.lat}</Text>
            </View>

            <View style={styles.formControl}>
                <Text style={styles.formLabel}>lng :</Text>
                <Text style={styles.formContent}>{cur.lng}</Text>
            </View>

            <View style={styles.formControl}>
                <Text style={styles.formLabel}>addr :</Text>
                <Text style={styles.formContent}>{cur.addr}</Text>
            </View>

            <View style={styles.formControl}>
                <Text style={styles.formLabel}>e :</Text>
                <Text style={styles.formContent}>{cur.e}</Text>
            </View>

            <View style={styles.formControl}>
                <Text style={styles.formLabel}>zip :</Text>
                <Text style={styles.formContent}>{cur.zip}</Text>
            </View>
        </ScrollView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        minHeight: 1,
        minWidth: 1,
    },
    title: {
        flex: 1,
        marginTop: 10,
        marginBottom: 10
    },
    titleContent: {
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center"
    },
    formControl: {
        flex: 1,
        flexDirection: "row",
        margin: 10,
    },
    formLabel: {
        flex: 1,
        padding: 5,
        color: "#8f8c8b",
        fontSize: 15
    },
    formContent: {
        flex: 2,
        padding: 5,
        fontSize: 15
    }
});