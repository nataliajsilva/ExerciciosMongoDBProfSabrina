//COMANDOS EXECUTADOS NO TERMINAL DO MONGODB

// 1.	Selecione todos os registros.
db.alunas.find()

// 2.	Selecione todos os registros e deixe a com apresentação melhor visível.
db.alunas.find().pretty()

// 3.	Selecione todos os registros em que o nome seja igual a ‘Aya’.
db.alunas.find({"nome": "Aya"}).pretty()

// 4.	Selecione todos os registros em que a aluna nasceu em São Paulo.
db.alunas.find({"nasceuEmSp": "true"}).pretty()

// 5.	Selecione todos os registros em que contenha a título do livro igual a “Java - Web Developers”.
db.alunas.find({"livros.titulo": "Java - Web Developers"}).pretty()

// 6.	Selecione todos os registros em que a aluna tenha o livro “Clean Code A” e o nome “Helena”. 
db.alunas.find({$and: [{"livros.titulo": "Clean Code A"}, {"nome": "Helena"}]}).pretty()

// 7.	Selecione todos os registros em que a aluna não tenha nascido em sp e tenha o livro Cangaceiro JavaScript.
db.alunas.find({$and: [{"livros.titulo": "Cangaceiro JavaScript"}, {"nasceuEmSp": "false"}]}).pretty()

// 8.	Selecione todos os registros em que a aluna contenha o livro Java – Web Developers ou Clean Code B. 
//Primeiro: realize o exercício com o operador ou e posteriormente realize o exercício com o operador in.
db.alunas.find({$or: [{"livros.titulo": "Java – Web Developers"}, {"livros.titulo": "Clean Code"}]}).pretty()
db.alunas.find({"livros.titulo": {$in: ["Cangaceiro JavaScript", "Clean Code"]}}).pretty()

// 9.	Pegue o exercício acima e inclua também aonde a aluna pode ter nascido em sp.
db.alunas.find({$or: [{"livros.titulo": "Java – Web Developers"}, {"livros.titulo": "Clean Code"}, {"nasceuEmSp": "true"}]}).pretty()

// Utilizando os dois operadores juntos. $or e $in.
// 10.	Procure todas as alunas que tenham nascido em são paulo ou os livros ‘MySQL’ e ‘MongoDB’.
db.alunas.find({$or: [{"nasceuEmSp": "true"}, {"livros.titulo": {$in: ["MySQL", "MongoDB"]}}]}).pretty()

/*
MESMO CÓDIGO ESCRITO DE MANEIRA MAIS VISÍVEL:
db.alunas.find( {
    $or : [
        {"nasceuEmSp": "true"},
        {"livros.titulo": {$in: ["MySQL", "MongoDB"]}}
    ]
} ).pretty()
*/

db.alunas.find({"nasceuEmSp":false}).count()