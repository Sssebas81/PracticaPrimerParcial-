import { Entity, PrimaryGeneratedColumn,Column, ManyToOne, JoinColumn } from "typeorm";
import { Usuario } from "./usuario.entity";

@Entity()

export class Pedido {
@PrimaryGeneratedColumn()
id:number;

@Column()

fecha:Date;

@Column()
total:Number;

@ManyToOne(() => Usuario, usuario => usuario.pedidos)
usuario: Usuario;
@JoinColumn({ name: "usuario_id" })
Usuario:Usuario;
}

