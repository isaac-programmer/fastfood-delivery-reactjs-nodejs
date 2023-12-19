import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { User } from "../../models/user";

export class MySQLGetUsersRepository implements IGetUsersRepository {
    async getUsers(): Promise<User[]> {
        return [{ 
            id: 1,
            role: "admin",
            cpf: "999.999.999-89", 
            name: "Usuário 1", 
            email: "teste@teste.com",
            phone: "(99) 99999-9999",
            cep: "62051-045",
            state: "CE",
            city: "Sobral",
            bairro: "Cohab II",
            address: "Rua Francisco Ximenes Menezes",
            number: "1000",
            complement: "Casa"
          }]
    }
}