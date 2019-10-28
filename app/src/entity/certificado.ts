import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {Usuario} from "./usuario";
import {Institucion} from "./institucion";
import {Solicitud} from "./solicitud";
@Entity()
export class Certificado {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    wallet: string;

    @Column()
    certificate_hash: string;

    @Column()
    json_data: string;

    @ManyToOne(type=>Usuario, usuario=> usuario.certificados)
    usuarios : Usuario;

    @ManyToOne(type=>Institucion, institucion => institucion.certificados)
    institucion: Institucion;

    @ManyToOne(type=>Solicitud, solicitud=>solicitud.certificado)
    solicitudes: Solicitud;
}
