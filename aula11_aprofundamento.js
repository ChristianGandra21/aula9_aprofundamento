/* const aluno = {
    nome: "mariana",
    idade: 16, 
    curso: "Front-end",
    ativo: true
};

aluno.idade = 17;
aluno.turma = "2B"
console.log(aluno) */

/* const curso = {
    nome: "Desenvolvimento Web",
    cargaHoraria: 40,
    professor: {
        nome: "Cristiano",
        experiencia: "10 anos"
    },
    alunos: ["Ana", "Joao", "Carlos"]
};

console.log(curso.alunos[1])
console.log(curso.professor.nome) */

/* const meuPerfil = {
    nome: "Seu nome",
    idade: 0,
    hobbies: ["Exemplo 1", "Exemplo 2"],
    cidade: "Sua cidade",
    objetivo: "Aprender JS"
};
console.log(meuPerfil);

meuPerfil.nome = "Christian";
meuPerfil.idade = 18;
meuPerfil.cidade = "SJC";
meuPerfil.hobbies.push("Estudar")
console.log(meuPerfil); */

/* const livroFavorito = {
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    ano: 1899,
    jaLeu: true
};
function mostrarLivro(livro){
    const leitura = livro.jaLeu ? "Já li" : "Ainda não li";
    console.log(`"${livro.titulo}", de ${livro.autor} (${livro.ano})-${leitura}.`);
}

mostrarLivro(livroFavorito); */

const fruta = {
    nome: "Tipo de fruta",
    preco: "Preco da fruta",
    disponivel: true || false,
    estoque: 0
}

fruta.nome = "banana";
fruta.preco = 5;
fruta.disponivel = true;
fruta.estoque = 5;
console.log(fruta);

fruta.nome = "maca";
fruta.preco = 56;
fruta.disponivel = false;
fruta.estoque = 29;
console.log(fruta);