import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Library } from "./Library";

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column()
  title: string = '';

  @Column()
  author: string = '';

  @Column()
  publisher: string = '';

  @Column()
  genre: string = '';

  @Column()
  ibsn: number = 0;

  @Column()
  date: string = '';

  @Column()
  loanStatus: boolean = true;


  @OneToOne(()=>Library, library => library.book)
  library: object = Library
}
