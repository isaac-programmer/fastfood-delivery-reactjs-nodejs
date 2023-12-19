import { Entity, Column } from "typeorm";

@Entity("user")
export class User {
  @Column({ primary: true, generated: true })
  public id!: number;

  @Column('varchar', { nullable: false, length: 6 })
  public role!: string;

  @Column('char', { nullable: false, length: 14 })
  public cpf!: string;

  @Column('varchar', { nullable: false, length: 200 })
  public name!: string;

  @Column('varchar', { nullable: false, length: 200 })
  public email!: string;

  @Column('char', { nullable: false, length: 15 })
  public phone!: string;

  @Column('char', { nullable: false, length: 9 })
  public cep!: string;

  @Column('char', { nullable: false, length: 2 })
  public state!: string;

  @Column('varchar', { nullable: false, length: 120 })
  public city!: string;

  @Column('varchar', { nullable: false, length: 120 })
  public bairro!: string;

  @Column('varchar', { nullable: false, length: 200 })
  public address!: string;

  @Column({ nullable: false })
  public number!: number;

  @Column('varchar', { nullable: false, length: 200 })
  public complement!: string;
}