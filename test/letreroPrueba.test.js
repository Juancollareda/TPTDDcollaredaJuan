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
    expect(tablero.prender([0,1],[2,2])).tobe([[1, 1, 1, 0], [1, 1, 1, 0], [1, 1, 1, 0], [0, 0, 0, 0]]); 




})