function getnum(num){
   
    var result = document.getElementById("res")
    result.value +=num;
}
function clear(){

    var result= document.getElementById("res")
    result.value="0"
}
function getres(){
    var result= document.getElementById("res")
    result.value = eval(result.value)
}