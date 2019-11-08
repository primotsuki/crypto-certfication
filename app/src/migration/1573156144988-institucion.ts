import {MigrationInterface, QueryRunner, getRepository} from "typeorm";
import {InstitucionSeed} from '../../seeds/institucionSeed';

export class institucion1573156144988 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        const instituciones = await getRepository("Institucion")
                                .save(InstitucionSeed);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
