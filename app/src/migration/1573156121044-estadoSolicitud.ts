import {MigrationInterface, QueryRunner, getRepository} from "typeorm";
import { estadoSolicitud } from '../../seeds/estadoSolicitudSeed';

export class estadoSolicitud1573156121044 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await getRepository("EstadoSolicitud").save(
            estadoSolicitud
        );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
