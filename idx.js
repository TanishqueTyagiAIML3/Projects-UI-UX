let btn=document.querySelector("#subscribe");
btn.addEventListener("click",()=>{
    alert("You have Subcribed the Foodies Newsletter");
})
let count=0;
btn.addEventListener("mouseover",()=>{
    count++;
    if(count%2!==0)
    {
    btn.style.backgroundColor="black";
    btn.style.color="white";
    }else
    {
        btn.style.backgroundColor="";
    btn.style.color="";
    }
}) 