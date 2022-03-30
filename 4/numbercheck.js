let num = 133;
numcheck(num);
function numcheck(num){
if(num > 20 && num <100 )
{
    console.log ("number within 20 and 100");

}

else if (num > 100 && num <400 )
{
    console.log ("number within 100 and 400");
}

else {
    console.log("number below 20");
}
}