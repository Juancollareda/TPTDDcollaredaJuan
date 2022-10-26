
function Error(){
    this.numeroNegativo=function(numero){
    if (numero>0){
        throw ("Error en las dimensiones establecidas")
    }
}
    this.numeroEnRangoNumericoPositivo=function(cord1,cord2,lista){
    
    if (cord2[0]<length(lista) || cord2[1]<length ){
        throw("Error en el rango establecido")
    }
}
}
module.exports=Error