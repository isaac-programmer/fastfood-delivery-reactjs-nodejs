export type Product = {
    id: number;
    name: string;
    price: string;
    img: string;
}

export type User = {
    id: number;
    cpf: string;
    name: string;
    email: string;
    phone: string;
    cep: string;
    state: string;
    city: string;
    bairro: string;
    address: string;
    number: number;
    complement: string;
}

export type State = {
    id: number;
    sigla: string;
    nome: string;
    regiao: {
        id: number;
        sigla: string;
        nome: string;
    }
}