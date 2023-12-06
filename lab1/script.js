function changeColor(squareId){
    var square = document.getElementById(squareId);
    var randomColor = getRandomColor();
    square.style.backgroundColor = randomColor;
}

function getRandomColor(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}


//var timer;
//const nodeList = document.querySelectorAll("flash");
//console.log(nodeList);
flashRandomizeColor();
function flashRandomizeColor(){
    //clearInterval(timer);
    //timer=setInterval(flashRandomizeColor,20);
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < nodeList.length; i++){
        //color += letters[Math.floor(Math.random()*16)];
        nodeList[i].style.backgroundColor="red";
    }
    return color;
    nodeList.forEach('flashRandomizeColor');
}
