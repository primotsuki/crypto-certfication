import {MigrationInterface, QueryRunner, getRepository} from "typeorm";
import {tipoSolicitud} from '../../seeds/tipoSolicitudSeed';
export class tipoSolicitud1573156154478 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        const tipo_solicitud = await getRepository("tipoSolicitud").save(tipoSolicitud);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
