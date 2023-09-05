/*
Alexander Calkins
Personal Website
9/1/2023
*/




//This code creates a message to the user to scroll down if they wait too long
let userScroll = false;
const x = document.getElementById("snackbar");


setTimeout(()=>{
    if (userScroll === false) {
        notify("Scroll Down")   
    }
}, 3000);

document.addEventListener("scroll", ()=>{
    userScroll = true;
})


//this makes it wait for the user to scroll
function notify(message) {
    x.innerHTML = message;
    x.className = "show";
    checkFlag();
}

// this makes the message stay until scroll
function checkFlag() {
    if(userScroll === false) {
       window.setTimeout(checkFlag, 100);
    } else {
        x.className = x.className.replace("show", "");
    }
}