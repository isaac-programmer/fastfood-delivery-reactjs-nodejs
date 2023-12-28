import "reflect-metadata";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("product")
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { nullable: false, length: 200 })
  name: string;

  @Column('varchar', { nullable: false, length: 12 })
  price: string;

  @Column('varchar', { nullable: false, length: 200 })
  img: string;
}