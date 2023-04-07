var isNight = false;

function toggleNightMod() {
    var element = document.body;

    var iconColorMod = document.getElementById("nightIcon");
    iconColorMod.classList.toggle("fa-moon");
    iconColorMod.classList.toggle("fa-sun");

    if (iconColorMod.classList.contains("fa-sun")) {
        document.getElementById("nightButtonText").innerHTML = "Mode jour";
    } else {
        document.getElementById("nightButtonText").innerHTML = "Mode nuit";
    }
    element.classList.toggle("dark-background");

    isNight = !isNight;
    localStorage.setItem('isNight', isNight.toString());
    changeConfig();
}
