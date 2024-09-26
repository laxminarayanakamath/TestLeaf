var a= 1

function hoisting()
{
    a=2
    console.log("Function scope variable value is "+a)
}

console.log(a);
hoisting();