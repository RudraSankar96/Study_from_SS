let input = document.querySelector("input");

input.addEventListener("input",function(dets){
    if(dets.data !== null){
        console.log(dets.data);
    }
})  

// Change event tab chalta heai jab aapka koi input select ya textarea mein koi change ho jaye.
let see = document.querySelector("select");
let device = document.querySelector("#device");
see.addEventListener("change",function(dets){
    device.textContent = `${dets.target.value} Device selected`;
});