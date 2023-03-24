var arr = [];

function display(val){

    document.getElementById('result').value += val;

}

function solve(){

    let x = document.getElementById('result').value;

    let y = eval(x);

    document.getElementById('result').value = y;
    
    
    arr.push(y);
    

    document.getElementById('array-results').innerHTML = arr.toString();
    console.log(arr);
    
}

function clearScreen(){

    document.getElementById('result').value = '';

}

function clearArr(){
    document.getElementById('array-results').innerHTML = '';
}