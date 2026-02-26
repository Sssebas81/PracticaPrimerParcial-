import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';
import {Empleado} from './empleado.entity';
import {Proyecto} from './proyecto.entity';

@Entity()
export class EmpleadoProyecto{

@PrimaryGeneratedColumn()
id:number

@Column()
rol:string;

@Column()
fecha_asignacion:Date;

@ManyToOne(() => Empleado, empleado => empleado.empleadosProyecto)
empleado: Empleado;

@JoinColumn({name: 'empleado_id'})
empleado_id: number;

@ManyToOne(() => Proyecto, proyecto => proyecto.empleadosProyecto)
proyecto: Proyecto;

@JoinColumn({name: 'proyecto_id'})
proyecto_id: number;

}