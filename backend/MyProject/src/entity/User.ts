import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import { Book } from "./Book";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number =0;

    @Column()
    firstName: string = '';

    @Column()
    lastName: string = '';

    @Column()
    age: number = 0;

}
