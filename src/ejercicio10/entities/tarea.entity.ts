import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn} from 'typeorm';
import {Empleado} from './empleado.entity';
import {Proyecto} from './proyecto.entity';
import {DependenciaTarea} from './dependenciaTarea.entity';

@Entity()
export class Tarea{

@PrimaryGeneratedColumn()
id:number

@Column()
nombre:string;

@Column()
estado:string;

@Column()
prioridad:number;

@OneToMany(() => DependenciaTarea, dependenciaTarea => dependenciaTarea.tarea)
dependencias: DependenciaTarea[];

@ManyToOne(() => Empleado, empleado => empleado.tareas)
empleado: Empleado;

@JoinColumn({name: 'empleado_id'})
empleado_id: number;

@ManyToOne(() => Proyecto, proyecto => proyecto.tareas)
proyecto: Proyecto;

@JoinColumn({name: 'proyecto_id'})
proyecto_id: number;

}