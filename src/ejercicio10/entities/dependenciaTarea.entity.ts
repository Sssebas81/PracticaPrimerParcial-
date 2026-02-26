import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';
import {Tarea} from './tarea.entity';   

@Entity()
export class DependenciaTarea{

@PrimaryGeneratedColumn()
id:number

@ManyToOne(() => Tarea, tarea => tarea.dependencias)
tarea: Tarea;
 @JoinColumn({name: 'tarea_id'})
tarea_id: number;

@ManyToOne(() => Tarea, tarea => tarea.dependencias)
tarea_dependencia: Tarea;

@JoinColumn({name: 'tarea_dependencia_id'})
tarea_dependencia_id: number;



}