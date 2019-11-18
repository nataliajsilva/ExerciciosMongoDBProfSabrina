Oredenação

db.alunas.find().sort({"id":1}).pretty() //crescente
db.alunas.find().sort({"id":-1}).pretty() //decrescente
db.alunas.count() // para contabilizar quantidade de registro
db.alunas.insertOne({nome:"Sasha", dateOfBirth:"09/06/1991", nasceuEmSp:"false", id: 19}) // Para criar um registro no documento
db.alunas.insertMany([{nome:"Sthephanie", dateOfBirth:"23/06/1991", nasceuEmSp:"false", id: 20}, {nome:"Clara", dateOfBirth:"19/11/2000", nasceuEmSp:"true", id: 21}]) //para criar mais de um registro

Exercicios
1. Crie 5 novos registros de alunas.
Deve conter os critérios abaixo.
3 em nasceuEmSp
2 não nasceuEmSp
Deve conter pelo menos alguns dos livros colocadas: HTL, CSS, Design, JavaScript, Java, C#, MySQL, MongoDB
A data de nascimento deve ser inferior a data atual.

db.alunas.insertMany([{
        "nome" : "Sheila",
        "dateOfBirth" : "15/02/2000",
        "nasceuEmSp" : "true",
        "id" : 22,
        "livros" : [
                {
                        "titulo" : "HTML",
                        "leu" : "true"
                },
                {
                        "titulo" : "CSS",
                        "leu" : "false"
                },
                {
                        "titulo" : "Design",
                        "leu" : "true"
                }
        ]
},
{
        "nome" : "Carminha",
        "dateOfBirth" : "02/04/1977",
        "nasceuEmSp" : "true",
        "id" : 23,
        "livros" : [
                {
                        "titulo" : "Java",
                        "leu" : "true"
                },
                {
                        "titulo" : "MySQL",
                        "leu" : "false"
                },
                {
                        "titulo" : "MongoDB",
                        "leu" : "true"
                }
        ]
},
{
        "nome" : "Julia",
        "dateOfBirth" : "08/05/1977",
        "nasceuEmSp" : "true",
        "id" : 24,
        "livros" : [
                {
                        "titulo" : "C#",
                        "leu" : "true"
                },
                {
                        "titulo" : "MySQL",
                        "leu" : "false"
                },
                {
                        "titulo" : "MongoDB",
                        "leu" : "true"
                }
        ]
},
{
        "nome" : "Joyce",
        "dateOfBirth" : "02/04/1988",
        "nasceuEmSp" : "false",
        "id" : 25,
        "livros" : [
                {
                        "titulo" : "Java",
                        "leu" : "true"
                },
                {
                        "titulo" : "MySQL",
                        "leu" : "false"
                },
                {
                        "titulo" : "MongoDB",
                        "leu" : "true"
                }
        ]
},
{
        "nome" : "Gorete",
        "dateOfBirth" : "02/07/1997",
        "nasceuEmSp" : "false",
        "id" : 26,
        "livros" : [
                {
                        "titulo" : "Java",
                        "leu" : "true"
                },
                {
                        "titulo" : "MySQL",
                        "leu" : "false"
                },
                {
                        "titulo" : "MongoDB",
                        "leu" : "true"
                }
        ]
}])

db.alunas.update({"nome":"Gorete"}, {"nasceuEmSp":"true"}) //Dessa forma alterar todo o objeto, deixando apenas nasceuEmSp
db.alunas.update({"nome": "Gorete"}, {$set:{"nasceuEmSp":"true"}}) //Dessa forma alterar apenas o objeto nasceuEmSp
db.alunas.update({"nome": "Gorete"}, {$push:{"livros": {"titulo": "C#", "leu": "true"}}}) //para incluir um objeto na propriedade livro
db.alunas.updateMany({"nome": "Gorete"}, {$push:{"livros": {"titulo": "C#", "leu": "true"}}}) //Vai atualizar todos os objetos que tiverem o nome Gorete
db.alunas.delete/remove({"_id" : ObjectId("5dc34a1480e96b0b55254211")}) //para excluir o objeto inteiro
db.alunas.update({"nome": "Gorete"}, {$unset/pull:{"livros": {"titulo": "C#", "leu": "true"}}}) //Para excluir o item livro
db.alunas.find({"nasceuEmSp":"true"}).count() //Para saber a quantidade de meninas que nasceram em SP


