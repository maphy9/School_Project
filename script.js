document.getElementById("hamburger").addEventListener("click", showPop);
var list = document.getElementsByClassName("bar"), counter = 0;

function showPop() {
    counter++;

    if(counter % 2 != 0) {
        document.getElementById("nav-menu").classList.add("nav-show");
        document.getElementById("flex-container").classList.add("scale");
        for(const i in list) {
            list[i].classList.add("close");
        }
    } else {
        document.getElementById("nav-menu").classList.remove("nav-show");
        document.getElementById("flex-container").classList.remove("scale");
        for(const i in list) {
            list[i].classList.remove("close");
        }
    }
}

var string = "Happy 2023 year!";

function parseInteger() {
    var num = "";

    for (const i in string) {
        if (string[i]%2 != Nan) {
            num += string[i];
        } else {
            continue;
        }
    }
}