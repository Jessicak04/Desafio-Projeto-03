//Criar uma classe generica que represente um herói de uma aventura, que possua propriedades como: nome, idade e tipo.
//Além disso, ter um método chamado atacar que deve atender o requisito de exibir a mensagem "o [tipo] atacou usando [ataque]",
//aonde o "tipo" deve ser concatenando o tipo que está na propriedade da classe, e o ataque ser conforme o tipo.

class heroi {
    //forma do projeto
        constructor(nome, idade, tipo){
            //forma do projeto, a classe
            this.nome = nome
            this.idade = idade
            this.tipo = tipo
            this.ataque = this.definirAtaque(tipo)
        }
        definirAtaque(tipo){
        // função (não é necessário declarar dentro uma uma classe)
            if (tipo === "Mago") {
                return "magia"
            } else  if (tipo === "Guerreiro") {
                return "espada"
            } else if (tipo === "Monge") {
                return "artes marciais"
            } else if (tipo === "Ninja") {
                return "shuriken"
            } else {
                return "socos"
            }
        }
        atacar(){
        //comando apenas para mandar a saída do que foi feito anteriormente
            console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
        }
    }
    
    let heroiMago = new heroi("Gandalf", "?? anos", "Mago")
    let heroiGuerreiro = new heroi("Marcos", "27 anos", "Guerreiro")
    let heroiMonge = new heroi("Jéssica", "22 anos", "Monge")
    let heroiNinja = new heroi("Sombra", "42", "Ninja")
    let heroiFazendeiro = new heroi("João", "17 anos", "Fazendeiro")
    
    heroiGuerreiro.atacar()
    heroiMonge.atacar()
    heroiNinja.atacar()
    heroiFazendeiro.atacar()
    heroiMago.atacar()
    console.log(`Obrigada a todos, somente com a participação de vocês todos sobreviveram!`)
