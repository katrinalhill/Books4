import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";


@Entity()
export class Employee {

    @PrimaryGeneratedColumn()
    id: number =0;

    @Column()
    firstName: string = '';

    @Column()
    lastName: string = '';

    @Column()
    employeeId: string =  '';

}
