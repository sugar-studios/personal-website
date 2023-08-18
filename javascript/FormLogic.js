function sendEmail() {
    const clientEmail = document.getElementById("clientEmail").value;
    const content = document.getElementById("content").value;

    if (!clientEmail || !content) {
        notify("Please fill in all fields.");
        return;
    }

    if (content.length < 5) {
        notify("content is too short.")
        return
    }

    if (content.length > 150) {
        notify("content is too long.")
        return
    }

    if (!isValidEmail(clientEmail)) {
        notify("Please enter valid email addresses.");
        return;
    }

    emailjs.send("service_dz6jmba","template_mt3a16j",{
        from_name: clientEmail,
        to_name: "acalk",
        message: content,
    }, "IBc_4Jrihs4zJMHa7").then(function(response) {
        notify("Email sent successfully!");
    }, function(error) {
        if (navigator.onLine === false)
        {
            notify("No internet conection");
        } else {
           notify("Failed to send email. Please try again later."); 
        }
        
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

document.getElementById("clientEmailLabel").addEventListener("focus", ()=>{
    document.getElementById("clientEmailLabel")
})

function notify(message) {
    let x = document.getElementById("snackbar");
    x.innerHTML = message;
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}