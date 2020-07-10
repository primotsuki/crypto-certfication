import {MigrationInterface, QueryRunner, getConnection} from "typeorm";
import {users} from '../../seeds/usuarios';
import * as bcrypt from 'bcrypt';
import {Usuario} from '../entity/usuario';
var BCRYPT_SALT_ROUNDS=12;

export class UserMigration1573215964657 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await users.forEach( async user=>{
                try {
                    let new_user = await getConnection()
                    .createQueryBuilder()
                    .insert()
                    .into(Usuario)
                    .values({
                        nombre: user.nombre,
                        username: user.username,
                        email: user.email,
                        apellido_paterno: user.apellido_paterno,
                        apellido_materno: user.apellido_materno,
                        password: bcrypt.hashSync(user.password, BCRYPT_SALT_ROUNDS)
                    }).execute();
                // const user_id = new_user.identifiers[0].id;
                // await getConnection()
                //     .createQueryBuilder()
                //     .relation(Usuario, "rol")
                //     .of(user_id)
                //     .set(user.rol_id);
                }
                catch (e) {
                    console.log(e);
                }
        });
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
