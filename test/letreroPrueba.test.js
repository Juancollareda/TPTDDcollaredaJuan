const tablero = require("../clases/tablero");
test("crear tablero vacio", ()=>{
    const tablero = new Tablero();
    expect(tablero.crear().toBe(null));
    

})