import { IGetUsersController, IGetUsersRepository } from "./protocols";

export class GetUsersController implements IGetUsersController {
    constructor(private readonly getUsersRepository: IGetUsersRepository) {
        this.getUsersRepository = getUsersRepository;
    }

    // Validar a requisição
    // Direcionar chamada para o repository
    async handle() {
        try {
            const users = await this.getUsersRepository.getUsers();

            return {
                statusCode: 200,
                body: users
            }
        } catch(error) {
            return {
                statusCode: 500,
                body: "Erro ao buscar usuarios"
            }
        }
    }
}