const Tablero = require("../clases/tablero");
test("prender luces mas intensa",()=>{
    const tablero = new Tablero();
    tablero4x4=tablero.crear(4,4);
    tablero.prender([0,0],[2,2])
    expect(tablero.prender([0,0],[2,2])).toStrictEqual([[2, 2, 2, 0], [2, 2, 2, 0], [2, 2, 2, 0], [0, 0, 0, 0]]); 

})
test("apagar luces menos intensa",()=>{
    const tablero = new Tablero();
    tablero4x4=tablero.crear(4,4);
    tablero.prender([0,0],[2,2])
    tablero.prender([0,0],[2,2])
    expect(tablero.apagar([0,0],[2,2])).toStrictEqual([[1, 1, 1, 0], [1, 1, 1, 0], [1, 1, 1, 0], [0, 0, 0, 0]]); 

})
test("cambiar toggle intensidad",()=>{
    const tablero = new Tablero();
    tablero4x4=tablero.crear(4,4);
    expect(tablero.cambiar([0,0],[2,2])).toStrictEqual([[2, 2, 2, 0], [2, 2, 2, 0], [2, 2, 2, 0], [0, 0, 0, 0]]); 

})




