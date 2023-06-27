import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";
import { Book } from "./Book";

@Entity()
export class Library {

  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column()
  name: string = '';

  @Column()
  address: string = '';

  @Column({ type: 'text', array: true, nullable: true })
  books: string[] = [];

  @Column({ type: 'text', array: true, nullable: true })
  employees: string[] = [];

  @Column()
  isOpen: boolean = true;

  @Column()
  hours: string = '';

  @OneToOne(()=>Book, book => book.library, {onDelete: 'CASCADE'})
  @JoinColumn()
  book: object = Book

}