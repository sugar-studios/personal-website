let userScroll = false;
const x = document.getElementById("snackbar");

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
    x.innerHTML = message;
    x.className = "show";
    checkFlag();
}

function checkFlag() {
    if(userScroll === false) {
       window.setTimeout(checkFlag, 100);
    } else {
        x.className = x.className.replace("show", "");
    }
}