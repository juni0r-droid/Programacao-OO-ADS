class Usuario {
    username: string;
    private seguidores: [] = [];

    constructor(username: string){
        this.username = username;
    }

    seguir(usuario: Usuario): void {
        usuario.seguidores.push;
        console.log(`${this.username} seguiu ${usuario.username}`);
    }
}

class Post {
    conteudo: string;
    autor: Usuario;

    constructor(conteudo: string, autor: Usuario) {
        this.conteudo = conteudo;
        this.autor = autor;
    }

    postar(): void {
        console.log(`${this.autor.username} postou: "${this.conteudo}"`);
    }
}


let user1 = new Usuario("roger");
let user2 = new Usuario("carlinhos");

user1.seguir(user2);

let post1 = new Post("meu primeiro post!", user1);
post1.postar();

let post2 = new Post("caramba :D", user2);
post2.postar();
