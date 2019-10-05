import {Entity, PrimaryGeneratedColumn, Column, OneToMany,ManyToMany, JoinTable} from "typeorm";
import {Certificado} from "./certificado";
import {Usuario} from "./usuario";
import {Solicitud} from "./solicitud";

@Entity()
export class Institucion {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    wallet: string;

    @Column()
    direccion: string;

    @OneToMany(type=> Certificado, certificado => certificado.institucion)
    certificados : Certificado[];

    @OneToMany(type=>Solicitud, solicitud=>solicitud.institucion)
    solicitudes : Solicitud[];

    @ManyToMany(type=>Usuario, usuario=> usuario.instituciones)
    @JoinTable()
    usuarios: Usuario[];
}
