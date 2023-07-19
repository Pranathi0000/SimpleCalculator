function add()
{
    let a=parseInt(document.getElementById("value1").value);
    let b=parseInt(document.getElementById("value2").value);
    let c=a+b;
    document.getElementById("answer").innerHTML="Addition: "+c;
}
function substract()
{
    let a=parseInt(document.getElementById("value1").value);
    let b=parseInt(document.getElementById("value2").value);   
    let c=a-b;
    document.getElementById("answer").innerHTML="Substraction: "+c;
}
function multiple()
{
    let a=parseInt(document.getElementById("value1").value);
    let b=parseInt(document.getElementById("value2").value);
    let c=a*b;
    document.getElementById("answer").innerHTML="Multiplication: "+c;
}
function divide()
{
    let a=parseInt(document.getElementById("value1").value);
    let b=parseInt(document.getElementById("value2").value);
    let c=a/b;
    document.getElementById("answer").innerHTML="Division: "+c;
}