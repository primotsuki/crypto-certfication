import {MigrationInterface, QueryRunner, getConnection} from "typeorm";
import { Usuario } from "../entity/usuario";

export class RolUsers1573224264497 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await getConnection()
                    .createQueryBuilder()
                    .relation(Usuario,"rol")
                    .of(1)
                    .set(1);
        await getConnection()
                    .createQueryBuilder()
                    .relation(Usuario,"rol")
                    .of(2)
                    .set(2);
        await getConnection()
                    .createQueryBuilder()
                    .relation(Usuario,"rol")
                    .of(3)
                    .set(3);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
