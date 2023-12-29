# Manual - Execução do Front-End

### ⚙️ Pré-requisitos

Para que o front-end funcione normalmente, será preciso ter instalado em sua máquina o **NodeJS**, na versão **16.16.0** e que a pasta **frontend** esteja aberta na IDE ou no editor de código a ser utilizado. Será preciso também que você renomeie o arquivo **.env.example** para **.env** e reescreva o conteúdo dele de acordo com o ambiente desejado, **develop** ou **production**. As variáveis de cada ambiente estão nos arquivos **develop.env** e **production.env**, respectivamente. As variáveis de ambiente reference ao **base_url** da **api** a ser consumida no frontend.

### 🔨 Guia de instalação

Considerando que os pré-requisitos foram satisfeitos, siga os passos a seguir para que a execução do front-end ocorra corretamente. 

**Passo 1**: Instalar as dependências
```
npm i
```
**Passo 2**: Executar o front-end
```
npm run dev
```
**Passo 3**: Inserir no navegador a seguinte URL
```
http://localhost:3000
```

## 📦 Tecnologias usadas:

* [ReactJS](https://react.dev/)
* [TypeScript](https://www.typescriptlang.org/)
* [MaterialUI](https://mui.com/)
* [axios](https://axios-http.com/ptbr/)
* [sass](https://sass-lang.com/)