// State
let gameState = {
    totalNumOfResources: 0,
    numOfPassiveResourcesGenerated: 0,
    gameBoard: {
        [undefined, undefined, undefined],
        [undefined, undefined, undefined],
        [undefined, undefined, undefined],
    };
    intervalLoopId: undefined
};


// What Game are we making.  Tik Tak Toe or COnnect 4?