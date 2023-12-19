import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { Product } from "../entities/Product";

console.log(process.env.MYSQL_HOST);

export const AppDataDource = new DataSource({
    type: "mysql",
    host: "db4free.net",
    port: 3306,
    username: "isaac_2023",
    password: "12345678",
    database: "fastfood_deliver",
    synchronize: true,
    logging: false,
    entities: [User, Product],
    migrations: [],
    subscribers: []
}) 