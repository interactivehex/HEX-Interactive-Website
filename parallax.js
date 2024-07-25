document.addEventListener("mousemove", parallax);

function parallax(e) {
    if (window.innerWidth < 600) {
        return;
    }
    var header = document.querySelector("#header");
    var moving_value = header.getAttribute("data-value");
    var x = (e.clientX * moving_value) / 250;
    var y = (e.clientY * moving_value) / 250 - 60;

    header.style.backgroundPosition = x + "px " + y + "px";
}
