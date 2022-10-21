test("crear tablero", ()=>{
    const tablero = new Tablero();
    expect(tablero.crear(3,3).toBe([[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]));
    /* mia matriz 0 0 0 0
                  0 0 0 0
                  0 0 0 0
                  0 0 0 0
    */

})