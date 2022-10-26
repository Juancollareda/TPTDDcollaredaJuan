const Errores = require("../clases/Errores");
function Tablero(){

    this.luces=[]
    this.crear=function(fila,columna){
        if (fila<0||columna < 0){
            throw ("valor negativo")
        }
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

    if (posfinal<0||columna < 0||posfinal[0]>length(this.luces[0])||posfinal[1]>length(luces)){
        throw ("valor negativo")
    }
    for(var i=posinicial[0];i<=posfinal[0];i++){
        for (var j = posinicial[1]; j<=posfinal[1]; j++){

            this.luces[i][j]=this.luces[i][j]=this.luces[i][j]+(this.luces[i][j]>10)?0:1;

        }
    }
return this.luces
}
this.apagar=function(posinicial,posfinal){


    for(var i=posinicial[0];i<=posfinal[0];i++){
        for (var j = posinicial[1]; j<=posfinal[1]; j++){

            this.luces[i][j]=this.luces[i][j]-(this.luces[i][j]<0)?0:1;

        }
    }
return this.luces
}
this.cambiar=function(posinicial,posfinal){


    for(var i=posinicial[0];i<=posfinal[0];i++){
        for (var j = posinicial[1]; j<=posfinal[1]; j++){

            this.luces[i][j]=this.luces[i][j]+(this.luces[i][j]<10)?2:0;
        }
    
    }
return this.luces

}
this.cuantasEncendidas=function(posinicial,posfinal){
    cont=0

    for(var i=posinicial[0];i<=posfinal[0];i++){
        for (var j = posinicial[1]; j<=posfinal[1]; j++){

            cont=(this.luces[i][j]>0)?cont+1:0;
        }
    
    }
return cont

}
}

module.exports=Tablero;