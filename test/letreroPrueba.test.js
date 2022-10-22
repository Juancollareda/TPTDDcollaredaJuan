const Tablero = require("../clases/tablero");
test("crear tablero vacio", ()=>{
    const tablero = new Tablero();
    expect(tablero.crear()).toBe(null); 

})
test("crear tablero 4*4", ()=>{
    const tablero = new Tablero();
    expect(tablero.crear(4,4)).toStrictEqual([[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]); 

})
test("prender luces",()=>{
    const tablero = new Tablero();
    tablero4x4=tablero.crear(4,4);
    expect(tablero.prender([0,0],[2,0])).toStrictEqual([[1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0], [0, 0, 0, 0]]); 

})
