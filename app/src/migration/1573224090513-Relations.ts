import {MigrationInterface, QueryRunner, getConnection} from "typeorm";
import { Usuario } from '../entity/usuario';

export class Relations1573224090513 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await getConnection()
                    .createQueryBuilder()
                    .relation(Usuario,"instituciones")
                    .of(2)
                    .add(1);
        await getConnection()
                    .createQueryBuilder()
                    .relation(Usuario,"instituciones")
                    .of(3)
                    .add(1);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
