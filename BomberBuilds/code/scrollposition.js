header = document.getElementsByID("header");
loc = 0;

function checkLoc(){
    loc = window.scrollY;
    if (loc > 10){
        header.style.top = "-80";
    } else {
        header.style.top = "0";
    }
    header.style.color = "#800080";
}

window.onscroll = checkLoc();