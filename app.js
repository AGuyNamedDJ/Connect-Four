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
// Creating multiple HTML elements all at the same time
    //Grab the element where you want to store all of those new elements
    // so try a container
    let listContainerEle = document.getElementsByClassName("container-ele");

// Step 2) Lets us a loop to make a bunch of elemeents at once.
for (let numOfElementsToCrate = 1; numOfElementsToCrate<= 20; numOfElementsToCrate++) {
    let newElement = document.createElement("li");
    console.log("Current element we are on: $(numOfElementsToCreate)")
};
