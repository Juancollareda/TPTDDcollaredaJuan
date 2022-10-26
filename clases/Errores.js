
function Error(){
    this.numeroNegativo=function(num){
        if(num<0){
            throw("valor no valido es negativo")
        }
    }
  
}
module.exports=Error