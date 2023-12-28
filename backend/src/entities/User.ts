import "reflect-metadata";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("user")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  role: string;

  @Column({ type: "text" })
  cpf: string;

  @Column({ type: "text" })
  name: string;

  @Column({ type: "text" })
  email: string;

  @Column({ type: "text" })
  phone: string;

  @Column({ type: "text" })
  cep: string;

  @Column({ type: "text" })
  state: string;

  @Column({ type: "text" })
  city: string;

  @Column({ type: "text" })
  bairro: string;

  @Column({ type: "text" })
  address: string;

  @Column({ type: "int" })
  number: number;

  @Column({ type: "text" })
  complement: string;
}