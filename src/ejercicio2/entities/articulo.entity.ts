import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinColumn, ManyToOne } from 'typeorm';
import { Autor } from './autor.entity';


@Entity()

export class Articulo{

@PrimaryGeneratedColumn()
id:number

@Column()
titulo:string;

@Column()
contenido:string;

@Column()
fecha_publicacion:Date;

@ManyToOne(() => Autor, autor => autor.articulos)
autor: Autor
@JoinColumn({ name: "autor_id" })
Autor: Autor;
}