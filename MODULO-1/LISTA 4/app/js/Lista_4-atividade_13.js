var Usuario = /** @class */ (function () {
    function Usuario(username) {
        this.seguidores = [];
        this.username = username;
    }
    Usuario.prototype.seguir = function (usuario) {
        usuario.seguidores.push;
        console.log("".concat(this.username, " seguiu ").concat(usuario.username));
    };
    return Usuario;
}());
var Post = /** @class */ (function () {
    function Post(conteudo, autor) {
        this.conteudo = conteudo;
        this.autor = autor;
    }
    Post.prototype.postar = function () {
        console.log("".concat(this.autor.username, " postou: \"").concat(this.conteudo, "\""));
    };
    return Post;
}());
var user1 = new Usuario("roger");
var user2 = new Usuario("carlinhos");
user1.seguir(user2);
var post1 = new Post("meu primeiro post!", user1);
post1.postar();
var post2 = new Post("caramba :D", user2);
post2.postar();
