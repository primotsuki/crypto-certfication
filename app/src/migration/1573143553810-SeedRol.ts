import {MigrationInterface, QueryRunner, getRepository} from "typeorm";
import {RolSeeds} from '../../seeds/rolSeed';

export class SeedRol1573143553810 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        const roles = await getRepository("rol").save(
            RolSeeds
        );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
