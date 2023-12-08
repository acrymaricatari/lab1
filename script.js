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



//flashRandomizeColor();
//function flashRandomizeColor(){
  //  // var letters = '0123456789ABCDEF';
    //var color = '#';
    //for (var i = 0; i < nodeList.length; i++){
      //  nodeList[i].style.backgroundColor="red";
    //}
    //return color;
    //nodeList.forEach('flashRandomizeColor');
//}

function flashColors(){
    var flashes = document.querySelectorAll('.flash');
    console.log(flashes);
    /*
    flashes.forEach(randomize);
    function randomize(){
        console.log("test");
        var randomColor = getRandomColor();
        flashes.style.backgroundColor = randomColor;
        console.log(randomColor);
    }
    */
    flashes.forEach(function(flash){
        var randomColor = getRandomColor();
        flash.style.backgroundColor = randomColor;
    })
}
var timer = setInterval(flashColors, 100);

//flashes.forEach(changeColor);

//flashes.forEach(function(){
  //  var randomColor = getRandomColor();
    //flashes.style.backgroundColor = randomColor;
    //console.log(randomColor);
//})


//function randomize(){
  //  var letters = '0123456789ABCDEF';
    //var color = '#';
    //for (var i = 0; i < 6; i++){
      //  color += letters[Math.floor(Math.random()*16)];
    //}
    //return color;
    //console.log(color);
//}