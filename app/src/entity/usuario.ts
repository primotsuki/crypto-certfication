import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, ManyToOne} from "typeorm";
import {Certificado} from "./certificado";
import {Rol} from "./rol";
import {Permiso} from "./permiso";
import {Institucion} from "./institucion";
import {Solicitud} from "./solicitud";

@Entity()
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    nombre: string;

    @Column()
    apellido_paterno: string;
    @Column()
    apellido_materno: string;

    @Column()
    password: string;

    @Column({type:"datetime",default: () => "CURRENT_TIMESTAMP"})
    createdAt: Date;

    @OneToMany(type=> Certificado, certificado => certificado.usuarios)
    certificados : Certificado[];

    @ManyToOne(type=>Rol, rol=> rol.usuarios)
    rol: Rol[];

    @ManyToMany(type=>Permiso, permiso=> permiso.usuarios)
    permisos: Permiso[];

    @ManyToMany(type=>Institucion, institucion=> institucion.usuarios)
    instituciones: Institucion[];

    @OneToMany(type=> Solicitud, solicitud=>solicitud.usuario)
    solicitudes: Solicitud[];
} 
