import { Entity, Column } from "typeorm";

@Entity("product")
export class Product {
  @Column({ primary: true, generated: true })
  public id!: number;

  @Column('varchar', { nullable: false, length: 200 })
  public name!: string;

  @Column({ nullable: false })
  public price!: number;

  @Column('varchar', { nullable: false, length: 200 })
  public img!: string;
}