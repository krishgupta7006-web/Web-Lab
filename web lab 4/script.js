

let darkBtn = document.querySelector(".dark-btn");

darkBtn.addEventListener("click", function() {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        darkBtn.innerHTML = "Light Mode";

    } else {

        darkBtn.innerHTML = "Dark Mode";

    }

});


let shopNowBtn = document.querySelectorAll(".shopNowBtn");

shopNowBtn.forEach(function(button) {

    button.addEventListener("click", function() {

        let featured = document.getElementById("features");

        featured.scrollIntoView({
            behavior: "smooth"
        });

    });

});
/* Dark Mode */
function darkMode() {
    document.body.classList.toggle("dark");

    let btn = document.querySelector(".dark-btn");

    if (document.body.classList.contains("dark")) {
        btn.innerHTML = "Light Mode";
    } else {
        btn.innerHTML = "Dark Mode";
    }
}


/* Search Products */
let search = document.getElementById("search");

search.addEventListener("input", function() {
    let value = search.value.toLowerCase();

    let products = document.querySelectorAll(".products");

    products.forEach(function(product) {
        let name = product.querySelector("h3");

        if (name && name.innerText.toLowerCase().includes(value)) {
            product.style.display = "";
        } else {
            product.style.display = "none";
        }
    });
});


function showDetails(button) {
    let product = button.parentElement;

    let name = product.querySelector("h3").innerText;
    let price = product.querySelectorAll("p")[0].innerText;
    let description = product.querySelectorAll("p")[1].innerText;

    document.getElementById("popupName").innerText = name;
    document.getElementById("popupPrice").innerText = price;
    document.getElementById("popupDescription").innerText = description;

    document.getElementById("productPopup").style.display = "block";
}



function closePopup() {
    document.getElementById("productPopup").style.display = "none";
}



let wishlistButtons = document.querySelectorAll(".wishlistBtn");

wishlistButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        if (button.classList.contains("added")) {
            button.classList.remove("added");
            button.innerHTML = "♡ Add to Wishlist";
        } else {
            button.classList.add("added");
            button.innerHTML = "♥ Remove from Wishlist";
        }

    });
});