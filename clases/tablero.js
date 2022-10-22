function Tablero(){

    this.luces=[[]]
    this.crear=function(fila,columna){
    for (var i = 0; i < fila; i++) {
        for (var j = 0; j < columna; j++) {
            this.luces[i].push(0)

   }
   this.push()
}
return this.luces
    }
}

module.exports=Tablero;