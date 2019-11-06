import {getConnection} from "typeorm";
import {Institucion} from "../entity/institucion";

export async function RegisterInstitucion() {
    await getConnection()
        .createQueryBuilder()
        .insert()
        .into(Institucion)
        .values([
            {nombre: 'Universidad Mayor de San Andres', direccion: 'Av. Villazón N° 1995, Plaza del Bicentenario - Zona Central.', sigla: 'UMSA'},
            {nombre: 'Universidad Catolica Boliviana', direccion: 'Av. 14 de Septiembre 2, La Paz 4807', sigla: 'UCB'},
            {nombre: 'Universidad Boliviana de Informatica', direccion: 'Calle Murillo 952, La Paz Zona, Murillo 1, La Paz', sigla: 'UBI'}
        ]);
}