import { SET_LIST_STATION, SET_CURRENT_STATION } from "../redux/slices/stationSlice";
import StationContext from "../models/StationContext";
import StationEntity from "../models/StationEntity";
import { GET_STATION_API } from "../api/apiStation";
import { useDispatch } from 'react-redux';

export default function useStation()
{
    const dispatch = useDispatch();

    const Create_Table_Station = async () =>
    {
        await StationContext.createTable();
        console.log(">> Created table Station !");
    };

    const Drop_Table_Station = async () =>
    {
        await StationContext.dropTable();
    };

    const Get_Station_From_API = async () =>
    {
        const { data: station_api } = await GET_STATION_API();
        station_api.forEach((idx, stationAPI) =>
        {
            // Lỗi ở dòng này dù ở project khác nó vẫn hoạt động tốt
            StationContext.create(new StationEntity(idx, stationAPI));
        });
        dispatch(SET_LIST_STATION(await StationContext.query()));
    }

    const Get_Station_From_DB = async () =>
    {
        const stationDB = await StationContext.query();
        console.log(stationDB.length);
        if (stationDB.length == 0)
            await Get_Station_From_API();
        else dispatch(SET_LIST_STATION(stationDB));
    };

    const Get_Station_By_Id = async (id) =>
    {
        const stationAPI = await StationContext.find(id);
        dispatch(SET_CURRENT_STATION({
            id: stationAPI.id,
            addr: stationAPI.addr,
            lat: stationAPI.lat,
            lng: stationAPI.lng,
            desc: stationAPI.desc,
            zip: stationAPI.zip,
            title: stationAPI.title,
            timeStamp: stationAPI.timeStamp,
            twp: stationAPI.twp,
            e: stationAPI.e,
        }));
    };

    const Set_Search_Station = async (title) =>
    {
        const searchList = await StationContext.searchStation(title);
        dispatch(SET_LIST_STATION(searchList));
    };

    const Delete_Station = async (id) =>
    {
        await StationContext.destroy(id);
        await Get_Station_From_DB();
    };

    const Delete_All_Station = async () =>
    {
        await StationContext.destroyAll();
    };

    return {
        Create_Table_Station, Drop_Table_Station, Get_Station_From_API,
        Get_Station_From_DB, Get_Station_By_Id, Set_Search_Station,
        Delete_All_Station, Delete_Station,
    };
}