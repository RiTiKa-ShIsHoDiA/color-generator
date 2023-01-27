document.querySelector("button").addEventListener("click",()=>{
    let arr = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
    var x = "#";
    for(let i=0 ; i<6 ; i++){
        x = x + arr[parseInt(Math.random()*16)];
    }
    let bodyRef =document.querySelector("body"); 
    document.querySelector("body").style.backgroundColor = x;
    document.querySelector("strong").innerText = x;
    console.log(x);
 });