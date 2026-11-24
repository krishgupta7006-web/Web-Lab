
const students = [
    {
        roll: "2512027",
        password: "poiuy",
        name: "Krish Gupta",
        branch: "CSE",
        semester: "3rd",
        
    }
];

document.getElementById("loginBtn").addEventListener("click", function() {

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    const message = document.getElementById("loginMessage");

    if (username === "" || password === "") {

        message.textContent = "Please enter both fields.";
        return;

    }

    const student = students.find(function(s) {

        return s.roll === username && s.password === password;

    });

    if (student) {

        sessionStorage.setItem("loggedInStudent", JSON.stringify(student));

        window.location.href = "dashboard.html";

    } else {

        message.textContent = "Invalid username or password.";

    }

});
