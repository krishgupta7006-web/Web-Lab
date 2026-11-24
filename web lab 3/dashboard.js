
const student = JSON.parse(sessionStorage.getItem("loggedInStudent"));

if (student === null) {

    window.location.href = "studentlogin.html";

} else {

    document.getElementById("welcome").textContent =
        "Welcome, " + student.name + "!";

    document.getElementById("topName").textContent = student.name;
    document.getElementById("topRoll").textContent = student.roll;

    document.getElementById("name").textContent = student.name;
    document.getElementById("roll").textContent = student.roll;
    document.getElementById("branch").textContent = student.branch;
    document.getElementById("semester").textContent = student.semester;

    document.getElementById("personalRoll").textContent = student.roll;
    document.getElementById("personalBranch").textContent = student.branch;
    document.getElementById("personalSemester").textContent = student.semester;

    document.getElementById("email").textContent =
        student.email || "Not provided";
}


// Logout

document.getElementById("logoutLink").addEventListener("click", function(event) {

    event.preventDefault();

    if (confirm("Are you sure you want to logout?")) {

        sessionStorage.removeItem("loggedInStudent");

        window.location.href = "studentlogin.html";
    }

});


// Dark Mode

const themeBtn = document.getElementById("themeBtn");

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark");
    themeBtn.textContent = "Light Mode";

}

themeBtn.addEventListener("click", function() {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        localStorage.setItem("theme", "dark");
        themeBtn.textContent = "Light Mode";

    } else {

        localStorage.setItem("theme", "light");
        themeBtn.textContent = "Dark Mode";

    }

});
