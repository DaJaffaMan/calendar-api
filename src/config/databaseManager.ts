import "reflect-metadata";
import {createConnection} from "typeorm";

export const createDatabaseManager = async () => {
    try {
        return await createConnection();
    } catch(err) {
        console.log(err)
        throw err;
    }
}