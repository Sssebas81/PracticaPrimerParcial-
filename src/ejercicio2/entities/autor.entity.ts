import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import { Articulo } from './articulo.entity';

@Entity()

export class Autor{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nombre:string;

    @Column()
    email:string;

    @OneToMany(() => Articulo, articulo => articulo.autor)
    articulos: Articulo[];
}