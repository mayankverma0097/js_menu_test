toggle=document.getElementById("toggle");
console.log(toggle);

toggle1=document.getElementById("toggle1");
console.log(toggle1);

list=document.getElementsByClassName("list");
console.log(list);
var a=0;


toggle.addEventListener('click',function(){

    console.log("toggle button clicked");
    list[0].style.display="block";
    toggle.style.display="none";
    toggle1.style.display="block";
})

toggle1.addEventListener('click',function(){

    console.log("toggle button clicked");
    list[0].style.display="none";
    toggle.style.display="block";
    toggle1.style.display="none";
})