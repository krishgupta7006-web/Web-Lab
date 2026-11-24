
function darkMode() {
    document.body.classList.toggle("dark");

    let btn = document.querySelector(".dark-btn");

    if (document.body.classList.contains("dark")) {
        btn.innerHTML = "Light Mode";
    } else {
        btn.innerHTML = "Dark Mode";
    }
}
