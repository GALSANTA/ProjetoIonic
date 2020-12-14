<h1 align="center"><strong>Desafio da Idealit Life Care</strong></h1>

# Sobre o Projeto

#### Desafio para a vaga de estágio na [Idealit](https://idealitlifecare.com.br/)
---
# Guia em PDF para usuários [Clique Aqui](https://github.com/GALSANTA/ProjetoIonic/blob/main/Guia.pdf)

# Guia para desenvolvedores: instalação local

### Pré-requisitos

* Você precisa ter instalado em sua máquina o sistema de controle de versões distribuído [GIT](https://git-scm.com/)
* Você precisa ter instalado em sua máquina o [NODEJS](https://nodejs.org/pt-br/)
* Você precisa ter instalado e configurado o [IONIC](https://ionicframework.com/) em sua máquina
* Você precisa ter uma conexão com a internet


### Instalação e Configuração

##### 1. Através do git bash adicione o projeto ao seu computador com o seguinte comando:

```
git clone https://github.com/GALSANTA/ProjetoIonic/
```

##### 2. No terminal de sua preferência, na raiz do projeto, digite o seguinte comando:

```
npm install -g ionic
```

##### 3. Após instalar o ionic, siga os passos na secção do Firebase deste [artigo](https://medium.com/como-programar-em-1-dia/como-fazer-um-app-em-1-dia-com-ionic-e-firebase-e3a3dd1bc84b)

##### 4. Faça uma conta no [HG Weather](https://hgbrasil.com/) e consiga a key para poder se autenticar na api [DOCUMENTATION](https://console.hgbrasil.com/documentation/weather)

##### 5. Com sua conta no [Google Cloud](https://cloud.google.com/) ative e consiga a key da api Geocoding para poder se autenticar [DOCUMENTATION](https://developers.google.com/maps/documentation/geocoding/overview)

##### 6. No console do [Firebase](https://console.firebase.google.com/) e consiga as credências do firebase [DOCUMENTATION](https://firebase.google.com/docs)


##### 7. No terminal  rode o seguinte comando na pasta raiz : 

```
npm i
```
<b>OBS: esse comando só irá funcionar se tiver o Node instalado na máquina</b>

##### 8. Depois de terminar a instalação das depêndencias iremos configurar o projeto devidamente:

* 8.1 Vá até a pasta src e abra o arquivo '.env.local.exemple.ts' que está dentro da pasta utils e renomeie para '.env.local.ts'.
* 8.2 Na linha 1 você verá uma variável quem armazena o nome do dominio, se você usará em máquina local, não será necessário altera-la.
* 8.3 Na linha 3 você verá uma variável chamada 'firebaseConfig', ela deve armazenar um objeto das credênciais do firebase criada nos passos anteriores.

```
  firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
}
```
* 8.4 Na linha 12 você verá uma variável chamada 'keys', ela deve armazenar as chaves das APIs criadas nos passos anteriores.

```
keys = {
    googleKey: "",
    weatherHGKey: ""
}
```

---

### Execução

<h3>Para rodar em localhost, rode o seguinte comando na pasta raiz do projeto</h3>

```
ionic serve
```

---

# Tecnologias utilizadas

* [Materialize](https://materializecss.com/getting-started.html) - Framework CSS
* [Node.js](https://nodejs.org/pt-br/) - JavaScript runtime
* [React](https://pt-br.reactjs.org/) - Biblioteca JavaScript 
* [TypeScript](https://www.typescriptlang.org/) - Superset da linguagem JavaScript 
* [IONIC](https://ionicframework.com/) -  Ambiente de Desenvolvimento
* [HG Brasil](https://hgbrasil.com/) - API de previsão do tempo
* [Geocoding Google](https://developers.google.com/maps/documentation/geocoding/overview) - API de localização
* [GIT](https://git-scm.com/) - Ferramenta de versionar código
* [Firebase](https://firebase.google.com/) - Plataforma digital da google

---

# Author

* **Fernando Marques**  - [GALSANTA](https://github.com/GALSANTA)