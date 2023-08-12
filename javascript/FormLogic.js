function sendEmail() {
    const clientEmail = document.getElementById("clientEmail").value;
    const content = document.getElementById("content").value;

    if (!clientEmail || !content) {

        alert("Please fill in all fields.");
        return;
    }

    if (content.length < 10) {
        alert("content is too short.")
        return
    }

    if (!isValidEmail(clientEmail)) {
        alert("Please enter valid email addresses.");
        return;
    }

    emailjs.send("service_dz6jmba","template_mt3a16j",{
        from_name: clientEmail,
        to_name: "acalk",
        message: content,
    }, "IBc_4Jrihs4zJMHa7").then(function(response) {
        alert("Email sent successfully!");
    }, function(error) {
        alert("Failed to send email. Please try again later.");
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}