import {Entity, PrimaryGeneratedColumn, Column,OneToMany, ManyToMany, JoinTable} from "typeorm";
import {Permiso} from "./permiso";
import {Usuario} from "./usuario";

@Entity()
export class Rol {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    detalle: string;

    @Column({type:"datetime", default: () => "CURRENT_TIMESTAMP"})
    createdAt: Date;

    @ManyToMany(type=> Permiso, permiso=>permiso.roles)
    @JoinTable()
    permisos: Permiso[];

    @OneToMany(type=>Usuario, usuario=>usuario.rol)
    usuarios: Usuario[];
    
}
