add=()=>
{
    var a=parseInt(document.getElementById("n1").value);
    var b=parseInt(document.getElementById("n2").value);
    document.getElementById("res").textContent=(a+b);
    
}
sub=()=>
{
    var a=parseInt(document.getElementById("n1").value);
    var b=parseInt(document.getElementById("n2").value);
    document.getElementById("res").textContent=(a-b);
    
}
mul=()=>
{
    var a=parseInt(document.getElementById("n1").value);
    var b=parseInt(document.getElementById("n2").value);
    document.getElementById("res").textContent=(a*b);
    
}
div=()=>
{
    var a=parseInt(document.getElementById("n1").value);
    var b=parseInt(document.getElementById("n2").value);
    document.getElementById("res").textContent=(a/b);
    
}