function Tablero(){

    this.luces=null
    this.crear=function(fila,columna){
    for (var i = 0; i < fila; i++) {
        for (var i = 0; i < columna; i++) {
            this.luces="0"+this.luces

   }

   this.luces=this.luces+'/n'
}
return this.luces
    }
}

module.exports=Tablero;