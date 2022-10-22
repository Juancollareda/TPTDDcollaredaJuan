function Tablero(){

    this.luces=''
    this.crear=function(fila,columna){
    for (var i = 0; i < fila; i++) {
        for (var j = 0; j < columna; j++) {
            this.luces=this.luces+'0'

   }

   this.luces=this.luces+'\n'
}
return this.luces
    }
}

module.exports=Tablero;