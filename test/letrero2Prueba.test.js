const Tablero = require("../clases/tablero");
test("prender luces mas intensa",()=>{
    const tablero = new Tablero();
    tablero4x4=tablero.crear(4,4);
    tablero.prender([0,0],[2,2])
    expect(tablero.prender([0,0],[2,2])).toStrictEqual([[2, 2, 2, 0], [2, 2, 2, 0], [2, 2, 2, 0], [0, 0, 0, 0]]); 

})
test("apagar luces menos intensa,",()=>{
    const tablero = new Tablero();
    tablero4x4=tablero.crear(4,4);
    tablero4x4prender=tablero.prender([0,0],[2,0]);
    expect(tablero.apagar([0,0],[2,0])).toStrictEqual([[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]])
})


