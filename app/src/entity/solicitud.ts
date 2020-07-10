import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {tipoSolicitud} from "./tipo_solicitud";
import {EstadoSolicitud} from "./estadoSolicitud";
import {Certificado} from "./certificado";
import {Institucion} from "./institucion";
import {Usuario} from "./usuario";

@Entity()
export class Solicitud {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    motivo: string;

    @Column({type:"datetime",default: () => "CURRENT_TIMESTAMP"})
    createdAt: Date;

    @ManyToOne(type=>Certificado, certificado=>certificado.solicitudes)
    certificado: Certificado;

    @ManyToOne(type=>tipoSolicitud, tiposolicitud=>tiposolicitud.solicitudes)
    tipoSolicitud: tipoSolicitud;
    
    @ManyToOne(type=>Usuario, usuario=>usuario.solicitudes)
    usuario: Usuario;

    @ManyToOne(type=>Institucion, institucion=>institucion.solicitudes)
    institucion: Institucion;

    @ManyToOne(type=>EstadoSolicitud, estadoSolicitud=>estadoSolicitud.solicitudes)
    estadoSolicitud: EstadoSolicitud; 
}