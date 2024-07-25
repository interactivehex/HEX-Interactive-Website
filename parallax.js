document.addEventListener("mousemove", parallax);

function parallax(e) {
    var header = document.querySelector("#header");
    var moving_value = header.getAttribute("data-value");
    var x = (e.clientX * moving_value) / 250;
    var y = (e.clientY * moving_value) / 250 - 60;

    header.style.backgroundPosition = x + "px " + y + "px";
}
