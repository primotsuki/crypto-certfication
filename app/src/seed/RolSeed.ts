import {getConnection} from "typeorm";
import {Rol} from "../entity/rol";

export async function RegisterRol(){
    await getConnection()
        .createQueryBuilder()
        .insert()
        .into(Rol)
        .values([
            {detalle: 'admin'},
            {detalle: 'certifier'},
            {detalle: 'usuario'}
        ]);
}