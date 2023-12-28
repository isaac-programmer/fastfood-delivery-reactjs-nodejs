import "reflect-metadata";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("user")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  role: string;

  @Column({ type: "varchar", unique: true })
  cpf: string;

  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "varchar" })
  email: string;

  @Column({ type: "varchar" })
  phone: string;

  @Column({ type: "varchar" })
  cep: string;

  @Column({ type: "varchar" })
  state: string;

  @Column({ type: "varchar" })
  city: string;

  @Column({ type: "varchar" })
  bairro: string;

  @Column({ type: "varchar" })
  address: string;

  @Column({ type: "int" })
  number: number;

  @Column({ type: "varchar" })
  complement: string;
}