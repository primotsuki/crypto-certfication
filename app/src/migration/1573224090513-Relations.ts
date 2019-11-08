import {MigrationInterface, QueryRunner, getConnection} from "typeorm";
import { Usuario } from '../entity/usuario';

export class Relations1573224090513 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await getConnection()
                    .createQueryBuilder()
                    .relation(Usuario,"instituciones")
                    .of(1)
                    .add(1);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
