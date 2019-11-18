/*Exercícios
1.	Atualize os registros criados no exercício anterior, com os filtros abaixo (não se esqueça de buscar 
    pelo _id):

Deixe todos os registros criados acima que estiverem como true para false, e vice-versa.

Atualize a data de nascimento de 2 alunas.

Inclua pelo menos 3 livros que elas tenham lido.*/

db.alunas.updateMany({"nasceuEmSp": true}, {$set: {"nasceuEmSp": false,"trocou": true}}) // Troca todas as alunas que nasceram em SP para false e cria uma propriedade trocou igual a true
db.alunas.updateMany({"nasceuEmSp": false, "trocou": {$exists:false}}, {$set: {"nasceuEmSp": true,"trocou": true}}) // Troca todas as alunas que não nasceram em São Paulo e que não possuem a propriedade trocou, e altera todas as alunas para nasceram em SP
db.alunas.updateMany({"livros.titulo": {$in:["Cangaceiro JavaScript"]}}, {$set: {"nasceuEmSp": true}}) //Para alterar uma propriedade para mais de um objeto de um array

db.alunas.update({"_id" : ObjectId("5dc0a1497b3b095291c0622a")}, {$set:{"dateOfBirth":"15/08/1992"}})
db.alunas.update({"_id" : ObjectId("5dc34a1480e96b0b55254211")}, {$set:{"dateOfBirth":"09/07/1997"}})

db.alunas.update({"_id" : ObjectId("5dc0a1497b3b095291c0622a")}, {$push: {livros:{$each:[{"titulo": "MongoBD", "leu": "true"},{"titulo": "JavaScript", "leu": "true"}]}}})
db.alunas.update({"_id" : ObjectId("5dc34a1480e96b0b55254211")}, {$push: {livros:{$each:[{"titulo": "MongoBD", "leu": "true"},{"titulo": "JavaScript", "leu": "true"}]}}})


/*2. Exclua 5 itens dada uma determinada condição:

Por ordenação de inserção, os dois primeiros que foram inseridos.

Por ordem alfabética, os dois primeiros.

Por ordem de data de nascimento decrescente, a primeira data.*/

db.alunas.find().sort({"id":-1}).limit(2).pretty() // ordenar as ultimas 2 alunas
db.alunas.delete/remove({"_id" : ObjectId("5dc34a1480e96b0b55254211")})
db.alunas.delete/remove({"_id" : ObjectId("5dc34a1480e96b0b55254210")})

db.alunas.find().sort({"nome": 1}).limit(2).pretty() // ordenar as ultimas 2 alunas
db.alunas.delete/remove({"_id" : ObjectId("")})
db.alunas.delete/remove({"_id" : ObjectId("")})

db.alunas.find().sort({"dateOfBirth":-1}).limit(1).pretty() 
db.alunas.delete/remove({"_id" : ObjectId("")})






