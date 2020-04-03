import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity({ database: process.env.DATABASE || "postgres", schema: "calendars", name: "calendar"})
export class Calendar {

    constructor(name: string) {
        this.name = name;
    }

    @PrimaryGeneratedColumn()
    id?: number

    @Column({name: "name", type: "text"})
    name: string
}
