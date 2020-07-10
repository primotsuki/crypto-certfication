import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Solicitud} from "./solicitud";
@Entity()
export class EstadoSolicitud {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descripcion_solicitud: string;

    @OneToMany(type=>Solicitud, solicitud=> solicitud.estadoSolicitud)
    solicitudes: Solicitud[];

}
