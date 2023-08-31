let userScroll = false;

console.log("hey");

setTimeout(()=>{
    if (userScroll === false) {
        notify("Scroll Down")   
    }
}, 3000);

document.addEventListener("scroll", ()=>{
    userScroll = true;
})

function notify(message) {
    let x = document.getElementById("snackbar");
    x.innerHTML = message;
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}