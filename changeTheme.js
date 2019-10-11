function switchTheme() {

    var containerColor = document.getElementById("theme");
    var color = containerColor.style.backgroundColor;
    var navbarColor = document.getElementById("navbar");
    var navLinks = document.getElementsByClassName("nav-item")
    var navDiv = document.getElementsByClassName("sticky-top")
    var title = document.getElementsByClassName("title")
    var label = document.getElementsByTagName("label");
    var ul = document.getElementsByTagName("ul");
    var footer = document.getElementById("footBoarder");
    var switchLabel = document.getElementsByClassName("custom-control-label");

    if (color != "rgb(255, 255, 255)") {
        containerColor.style.backgroundColor = "rgb(255, 255, 255)";
        navbarColor.style.backgroundColor = "rgb(255, 255, 255)";
        navbarColor.style.color = "rgb(0, 0, 0)";
        for (let link of navLinks) {
            link.style.color = "rgb(0, 0, 0)";
        }
        navDiv[0].style.backgroundColor = "rgb(255, 255, 255)";
        title[0].style.color = "rgb(0, 0, 0)";
        label[0].style.color = "rgb(0, 0, 0)";
        ul[0].style.color = "rgb(0, 0, 0)";
        footer.style.borderTop = "5px solid rgb(66, 31, 109)";
        switchLabel[0].innerHTML = "Dark Theme"
    }
    if (color == "rgb(255, 255, 255)") {
        containerColor.style.backgroundColor = "rgb(0, 0, 0)";
        navbarColor.style.backgroundColor = "rgb(0, 0, 0)";
        for (let link of navLinks) {
            link.style.color = "rgb(255, 255, 255)";
        }
        navDiv[0].style.backgroundColor = "rgb(0, 0, 0)";
        title[0].style.color = "rgb(255, 255, 255)";
        label[0].style.color = "rgb(255, 255, 255)";
        ul[0].style.color = "rgb(255, 255, 255)";
        footer.style.borderTop = "none";
        switchLabel[0].innerHTML = "Light Theme"
    }

}