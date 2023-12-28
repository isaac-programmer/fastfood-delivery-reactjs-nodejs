import "reflect-metadata";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("user")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { nullable: false, length: 6 })
  role: string;

  @Column('char', { nullable: false, length: 14, unique: true })
  cpf: string;

  @Column('varchar', { nullable: false, length: 200 })
  name: string;

  @Column('varchar', { nullable: false, length: 200 })
  email: string;

  @Column('char', { nullable: false, length: 15 })
  phone: string;

  @Column('char', { nullable: false, length: 9 })
  cep: string;

  @Column('char', { nullable: false, length: 2 })
  state: string;

  @Column('varchar', { nullable: false, length: 120 })
  city: string;

  @Column('varchar', { nullable: false, length: 120 })
  bairro: string;

  @Column('varchar', { nullable: false, length: 200 })
  address: string;

  @Column({ type: "int", nullable: false })
  number: number;

  @Column('varchar', { nullable: false, length: 200 })
  complement: string;
}