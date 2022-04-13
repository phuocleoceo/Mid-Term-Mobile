import { Appbar, Searchbar } from 'react-native-paper';
import useStation from "../hooks/useStation";
import React, { useState } from "react";


export default function CustomNavigationBar({ navigation, back })
{
    const [isSearching, setIsSearching] = useState(false);
    const { Set_Search_Station } = useStation();

    const handleShow = () =>
    {
        if (isSearching) Set_Search_Station("");
        setIsSearching(!isSearching);
    };

    const handleSearch = (query) => Set_Search_Station(query);

    return (
        <Appbar.Header>
            {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
            {
                (isSearching && !back) ?
                    <Searchbar
                        placeholder="Search"
                        style={{ width: "90%" }}
                        onChangeText={handleSearch}
                    /> :
                    <Appbar.Content title="Station App" />
            }
            {!back && <Appbar.Action icon="account-search" onPress={handleShow} />}
        </Appbar.Header>
    );
}