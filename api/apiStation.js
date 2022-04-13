import callAPI from "./apiService";

export const GET_STATION_API = () => callAPI.get("static/data/data.json");