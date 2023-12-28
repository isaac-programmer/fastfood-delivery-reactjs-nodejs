import "reflect-metadata";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("user")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 6 })
  role: string;

  @Column({ type: "char", length: 14, unique: true })
  cpf: string;

  @Column({ type: "varchar", length: 200 })
  name: string;

  @Column({ type: "varchar", length: 200 })
  email: string;

  @Column({ type: "char", length: 15 })
  phone: string;

  @Column({ type: "char", length: 9 })
  cep: string;

  @Column({ type: "char", length: 2 })
  state: string;

  @Column({ type: "varchar", length: 200 })
  city: string;

  @Column({ type: "varchar", length: 120 })
  bairro: string;

  @Column({ type: "varchar", length: 200 })
  address: string;

  @Column({ type: "int" })
  number: number;

  @Column({ type: "varchar", length: 200 })
  complement: string;
}