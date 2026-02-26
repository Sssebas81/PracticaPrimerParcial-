import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import {EmpleadoProyecto} from './empleadoProyecto.entity';
import {Tarea} from './tarea.entity';
@Entity()
export class Empleado{

@PrimaryGeneratedColumn()
id:number

@Column()
nombre:string;

@Column()
departamento:string;

@OneToMany(() => EmpleadoProyecto, empleadoProyecto => empleadoProyecto.empleado)
empleadosProyecto: EmpleadoProyecto[];

@OneToMany(() => Tarea, tarea => tarea.empleado)
tareas: Tarea[];
}