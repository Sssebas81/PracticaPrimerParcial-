import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import {Proyecto} from '../entities/proyecto.entity';
@Entity()
export class Cliente{

@PrimaryGeneratedColumn()
id:number

@Column()
nombre:string;

@Column()
empresa:string;

@OneToMany(() => Proyecto, proyecto => proyecto.cliente)
proyectos: Proyecto[];

}