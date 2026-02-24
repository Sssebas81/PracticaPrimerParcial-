import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm'; 
import { Pedido } from './pedido.entity';

@Entity()

export class Usuario {

@PrimaryGeneratedColumn()
id:number;

@Column()

nombre:string;

@Column()

email:String;

@Column()
fecha: Date;

@OneToMany (() => Pedido, pedido => pedido.usuario)
pedidos: Pedido[];

}