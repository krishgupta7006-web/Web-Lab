const images = document.querySelectorAll(".gallery-img");

images.forEach(function(image) {

    // Click event
    image.addEventListener("click", function() {

        if (image.style.width === "400px") {
            image.style.width = "200px";
        } else {
            image.style.width = "400px";
        }

    });

    // Mouseover event
    image.addEventListener("mouseover", function() {
        image.style.opacity = "0.7";
    });

    // Mouseout event
    image.addEventListener("mouseout", function() {
        image.style.opacity = "1";
    });

});