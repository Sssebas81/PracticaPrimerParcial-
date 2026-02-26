import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne} from 'typeorm';

import {Tarea} from '../entities/tarea.entity';
import {EmpleadoProyecto} from '../entities/empleadoProyecto.entity';
import {Cliente} from '../entities/cliente.entity';
@Entity()
export class Proyecto{

@PrimaryGeneratedColumn()
id:number

@Column()
nombre:string;

@Column()
fecha_inicio:Date;

@Column()
fecha_fin:Date;

@OneToMany(() => Tarea, tarea => tarea.proyecto)
tareas: Tarea[];

@OneToMany(() => EmpleadoProyecto, empleadoProyecto => empleadoProyecto.proyecto)
empleadosProyecto: EmpleadoProyecto[];

@ManyToOne(() => Cliente, cliente => cliente.proyectos)
cliente: Cliente;

@JoinColumn({name: 'cliente_id'})
cliente_id: number;

}