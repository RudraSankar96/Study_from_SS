let input = document.querySelector("input");

input.addEventListener("input",function(dets){
    if(dets.data !== null){
        console.log(dets.data);
    }
})  

let see = document.querySelector("select");
see.addEventListener("change",function(dets){
    console.log(dets.target.value);
});