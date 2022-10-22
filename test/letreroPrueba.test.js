const Tablero = require("../clases/tablero");
test("crear tablero vacio", ()=>{
    const tablero = new Tablero();
    expect(tablero.crear()).toBe(null); 

})
test("crear tablero 10*10", ()=>{
    const tablero = new Tablero();
    expect(tablero.crear(4,4)).toBe([[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]); 

})