class heroi{
    constructor(tipoHeroi){
        this.tipoHeroi = tipoHeroi
    }

    ataque(){
        if(this.tipoHeroi === "mago"){
            console.log("Mago atacou usando magia")
        }else if(this.tipoHeroi === "guerreiro"){
            console.log("Guerreiro atacou usando espada")
        }else if(this.tipoHeroi ==="monge"){
            console.log("Monge atacou usando artes marciais")
        }else if(this.tipoHeroi ==="ninja"){
            console.log("Ninja atacou usando shuriken")
        }else{
            console.log("Você desbloqueou uma classe de herói secreta: " + this.tipoHeroi)
        }
    }
}

let escolherHeroi = new heroi("ninja") // escolher héroi com letras minusculas 

escolherHeroi.ataque()

