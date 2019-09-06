import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany} from "typeorm";
import {Certificado} from "./certificado";
import {Rol} from "./rol";
import {Permiso} from "./permiso";
import {Institucion} from "./institucion";

@Entity()
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    nombre: string;

    @Column()
    apellido_paterno: string;
    @Column()
    apellido_materno: string;

    @Column()
    password: string;

    @Column({type:"datetime"})
    createdAt: Date;

    @OneToMany(type=> Certificado, certificado => certificado.usuario)
    certificados : Certificado[];

    @ManyToMany(type=>Rol, rol=> rol.usuarios)
    roles: Rol[];

    @ManyToMany(type=>Permiso, permiso=> permiso.usuarios)
    permisos: Permiso[];

    @ManyToMany(type=>Institucion, institucion=> institucion.usuarios)
    instituciones: Institucion[];
} 
