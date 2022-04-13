import { BaseModel, types } from 'expo-sqlite-orm'
import * as  SQLite from 'expo-sqlite'

export default class StationContext extends BaseModel
{
    constructor(obj)
    {
        super(obj);
    }

    static get database()
    {
        return async () => SQLite.openDatabase("station.db");
    }

    static get tableName()
    {
        return "station";
    }

    static searchStation(title)
    {
        const sql = `SELECT * FROM station WHERE title LIKE '%${title}%'`;
        const params = [];
        return this.repository.databaseLayer.executeSql(sql, params).then(({ rows }) => rows);
    }

    static get columnMapping()
    {
        return {
            id: { type: types.INTEGER, primary_key: true },
            addr: { type: types.INTEGER },
            lat: { type: types.FLOAT },
            lng: { type: types.FLOAT },
            desc: { type: types.TEXT },
            zip: { type: types.TEXT },
            title: { type: types.TEXT },
            timeStamp: { type: types.TEXT },
            twp: { type: types.TEXT },
            e: { type: types.TEXT },
        }
    }
}