import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Solicitud} from './solicitud';

@Entity()
export class tipoSolicitud {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descripcion_solicitud: string;

    @OneToMany(type=> Solicitud, solicitud => solicitud.tipoSolicitud)
    solicitudes: Solicitud[];
}