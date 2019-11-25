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

    @Column({type: "json"})
    json_data: string;

    @Column({type:"datetime",default: () => "CURRENT_TIMESTAMP"})
    createdAt: Date;

    @Column({type: "json"})
    json_response: string;

    @ManyToOne(type=>Usuario, usuario=> usuario.certificados)
    usuarios : Usuario;

    @ManyToOne(type=>Institucion, institucion => institucion.certificados)
    institucion: Institucion;

    @ManyToOne(type=>Solicitud, solicitud=>solicitud.certificado)
    solicitudes: Solicitud;
}
