function Tablero(){

    this.luces=[]
    this.crear=function(fila,columna){
        if(fila==null && columna==null){
            return null
        }
    for (var i = 0; i < fila; i++) {
        this.luces.push([])
        for (var j = 0; j < columna; j++) {
            this.luces[i].push(0)

   }
   
}
return this.luces
    }
this.prender=function(posinicial,posfinal){


    for(var i=posinicial[0];i<posfinal[0];i++){
        for (var j = posinicial[0]; j <posfinal[1]; j++){

            this.luces[i][j]=1

        }
    }
return this.luces
}
}

module.exports=Tablero;