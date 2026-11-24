// Display Date and Time

const dateTime = document.getElementById("dateTime");

function showDateTime() {
    dateTime.textContent = new Date().toLocaleString();
}

showDateTime();

setInterval(showDateTime, 1000);


// Show and Hide College Information

const infoBtn = document.getElementById("infoBtn");
const collegeInfo = document.getElementById("collegeInfo");

infoBtn.addEventListener("click", function() {

    if (collegeInfo.hidden) {
        collegeInfo.hidden = false;
        infoBtn.textContent = "Hide College Information";
    } 
    else {
        collegeInfo.hidden = true;
        infoBtn.textContent = "Show College Information";
    }

});