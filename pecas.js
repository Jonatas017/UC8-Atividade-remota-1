let peso = 100;

if (peso >= 100) {
    console.log("A peça possui um peso adequado, pode ser cadastrada!")

} else {
    console.log("A peça não possui o peso adequado, não pode ser cadastrada!")
}

let listapecas = ["0","10","20","30","40","50","60","70","80","90"]

if (listapecas.length < 10) {
    console.log("A lista ainda possui espaço para mais peças")
} else {
    console.log("Lista completa, não é possível continuar.")
}

let nomepecas = "Volante"
if (nomepecas.length > 3) {
    console.log("Nome de peça é valido, pode seguir.")    
} else {
    console.log("Nome da peça é inválido, o nome deve conter mais de 3 caracteres.")
}
