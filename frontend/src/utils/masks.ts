export const formatarCPF = (cpf: string): string => {
    cpf = cpf.replace(/\D/g, ""); // Remove todos os caracteres não numéricos.
    cpf = cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4"); // Aplica a máscara
    return cpf;
};

export const formatarPhone = (phone: string): string => {
    phone = phone.replace(/\D/g, ""); // Remove todos os caracteres não numéricos.
    phone = phone.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3"); // Aplica a máscara
    return phone;
};

export const formatarCEP = (cep: string): string => {
    cep = cep.replace(/\D/g, ""); // Remove todos os caracteres não numéricos.
    cep = cep.replace(/^(\d{5})(\d{3})$/, "$1-$2"); // Aplica a máscara
    return cep;
};