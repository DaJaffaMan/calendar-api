import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createCalendarTable1585842177901 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table(
                    {
                        name: "calendars.calendar",
                        columns: [
                            {
                                name: "id",
                                type: "int",
                                isPrimary: true
                            },
                            {
                                name: "name",
                                type: "text",
                            }
                        ]
                    }
                ),
                true
            );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable("calendars.calendar")
    }

}
