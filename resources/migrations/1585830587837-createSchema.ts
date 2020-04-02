import {MigrationInterface, QueryRunner} from "typeorm";

export class createSchema1585830587837 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createSchema('calendars', true);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropSchema('calendars', true);
    }

}
