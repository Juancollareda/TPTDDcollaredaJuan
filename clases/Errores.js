
function errores(){
    this.numeroPositivo=function(numero){
    if (numero<=0){
        throw ("Error en las dimensiones establecidas")
    }
}
    this.numeroNoNegativo=function(numero){
    if (numero<0){
        throw ("Error en las dimensiones establecidas")
    }
}
    this.numeroEnRangoNumericoPositivo=function(cord1,cord2){
    numeroNoNegativo(cord1[0])
    numeroNoNegativo(cord1[1])
    numeroNoNegativo(cord2[0])
    numeroNoNegativo(cord2[1])
    if (cord2[0]<cord1[0] || cord2[1]<cord1[1] ){
        throw("Error en el rango establecido")
    }
}
}
