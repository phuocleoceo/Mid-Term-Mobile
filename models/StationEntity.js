export default class StationEntity
{
    constructor(stationAPI)
    {
        this.id = stationAPI.addr;
        this.addr = stationAPI.addr;
        this.lat = stationAPI.lat;
        this.lng = stationAPI.lng;
        this.desc = stationAPI.desc;
        this.zip = stationAPI.zip;
        this.title = stationAPI.title;
        this.timeStamp = stationAPI.timeStamp;
        this.twp = stationAPI.twp;
        this.e = stationAPI.e;
    }
}
