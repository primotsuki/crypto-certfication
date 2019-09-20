import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";
import {Permiso} from "./permiso";
import {Usuario} from "./usuario";

@Entity()
export class Rol {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    detalle: string;

    @Column({type:"datetime"})
    createdAt: Date;

    @ManyToMany(type=> Permiso, permiso=>permiso.roles)
    @JoinTable()
    permisos: Permiso[];

    @ManyToMany(type=>Usuario, usuario=>usuario.roles)
    @JoinTable()
    usuarios: Usuario[];
    
}
