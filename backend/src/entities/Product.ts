import "reflect-metadata";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("product")
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 200 })
  name: string;

  @Column({ type: "varchar", length: 12 })
  price: string;

  @Column({ type: "varchar", length: 200 })
  img: string;
}