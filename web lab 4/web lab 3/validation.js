const admissionForm = document.getElementById("admissionForm");

admissionForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("fullname").value.trim();
    const dob = document.getElementById("dob").value;
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const course = document.getElementById("course").value;
    const address = document.getElementById("address").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const message = document.getElementById("admissionMessage");

    message.style.color = "red";

    if (name === "" || dob === "" || email === "" || mobile === "" || course === "" || address === "") {
        message.textContent = "Please fill in all fields.";
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        message.textContent = "Please enter a valid email.";
        return;
    }

    if (!/^\d{10}$/.test(mobile)) {
        message.textContent = "Mobile number must contain 10 digits.";
        return;
    }

    if (gender === null) {
        message.textContent = "Please select your gender.";
        return;
    }

    message.style.color = "green";
    message.textContent = "Admission form submitted successfully!";

});

admissionForm.addEventListener("reset", function() {
    document.getElementById("admissionMessage").textContent = "";
});