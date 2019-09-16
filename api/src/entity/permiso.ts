import {Entity, PrimaryGeneratedColumn, Column, ManyToMany} from "typeorm";
import {Usuario} from "./usuario";
import {Rol} from "./rol";

@Entity()
export class Permiso {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    detalle: string;

    @Column({type:"datetime"})
    createdAt: Date;

    @ManyToMany(type=> Rol, rol=>rol.permisos)
    roles: Rol[];

    @ManyToMany(type=>Usuario, usuario=>usuario.permisos)
    usuarios: Usuario[]; 
}
