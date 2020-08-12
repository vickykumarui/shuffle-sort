var colorCodeArr = ["6F98A8","2B8EAD","2F454E","2B8EAD","2F454E","BFBFBF","BFBFBF","6F98A8","2F454E"];

// for initial render
document.addEventListener('DOMContentLoaded', function() {
    renderSortedGrid();
 }, false);


 // to trigger rendering of sorted grid
 function renderSortedGrid(){
     var sortedArr = [0,1,2,3,4,5,6,7,8];
     renderGrid(sortedArr);
 }

 // to trigger rendering of shuffled grid
 function renderRandomGrid(){
    var randomArr = generateRandomArray(9);
    renderGrid(randomArr);
}

// for rendering the grid
function renderGrid(arr){
    var parentEle = document.getElementById('grid-cell-section');
    parentEle.innerHTML = '';
    for(var i in arr){
        var currentEle = document.createElement('div');
        currentEle.classList = " cell";
        currentEle.id = "cell"+(arr[i]+1);
        currentEle.innerHTML = (arr[i]+1);
       // currentEle.style.backgroundColor = colorCodeArr[i];
       currentEle.classList += " bgColor"+colorCodeArr[i];
        parentEle.appendChild(currentEle);
    }
}

// to generate array of random elements
function generateRandomArray(len){
    var randomNumberArr = [];

    while(randomNumberArr.length < len){
        var currentRandom = Math.floor(Math.random() * len);

        if(randomNumberArr.indexOf(currentRandom) < 0){
            randomNumberArr.push(currentRandom);
        } 
    }

    return randomNumberArr;
}

