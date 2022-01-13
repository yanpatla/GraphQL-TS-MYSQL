import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

//*Con el Base Entity le voy a poder decir que es una tabla
@Entity()
export class Users extends BaseEntity {
  //* A cada uno le pongo Decoradores
  @PrimaryGeneratedColumn() //* Esto quiere decri que es una propiedad que se va a estar genereando si nececidad de que yo guarde algo
  id: number;
  @Column()
  name: string;
  @Column()
  username: string;
  @Column()
  password: string;
}
