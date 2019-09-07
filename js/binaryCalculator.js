let x = 0;
let y = 0;

function ReturnBinary(x){
    let mag = 0;
    let str = '';
    do{
        mag++
    }while(Math.pow(2,mag) <= x);
    for(let j=mag -1 ; j>=0;j--){
        if((x-Math.pow(2,j))>=0){
            str = str + '1'
            x = x - Math.pow(2,j)
        }else{
            str = str + '0'
        }
    }
    return str
}


function ClearRes(btn0){    
    document.getElementById('res').innerHTML = ""
 }

function Zero(){
    document.getElementById('res').innerHTML = document.getElementById('res').innerHTML + '0'
}
function One(){
        document.getElementById('res').innerHTML = document.getElementById('res').innerHTML + '1'
}
function ClearRes(btn0){    
    document.getElementById('res').innerHTML = ""
 }


function Equals(){
    let expression = document.getElementById('res').innerHTML;
    let arr = expression.split(/[\+\/\*-]/)
    let op = expression.match(/[\+\/\*-]/g)
    for (let i = 0; i < arr.length; i++){
        arr[i]= parseInt(arr[i],2)
    }
    let exp = [];
    for (let j=0; j < arr.length; j++ ){
        exp.push(arr[j])
        exp.push(op[j])
    }
    let finalExp = exp.join("")

    document.getElementById('res').innerHTML = ReturnBinary(eval(finalExp))
}
function Add(){
        document.getElementById('res').innerHTML = document.getElementById('res').innerHTML + '+'
}
function Subtract(){
        document.getElementById('res').innerHTML = document.getElementById('res').innerHTML + '-'
}
function Multiply(){
        document.getElementById('res').innerHTML = document.getElementById('res').innerHTML + '*'
}
function Divide(){    document.getElementById('res').innerHTML = document.getElementById('res').innerHTML + '/'
                 }


