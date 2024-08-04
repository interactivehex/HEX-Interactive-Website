var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}




document.addEventListener("DOMContentLoaded", function() {
    // Fetch the JSON data
    fetch('data/data.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('mail').textContent = data.mail;
            document.getElementById('phone').textContent = data.phone;
            document.getElementById('instagram').href = data.instagram;
            document.getElementById('twitter').href = data.twitter;
            document.getElementById('tiktok').href = data.tiktok;
            document.getElementById('discord').href = data.discord;
            document.getElementById('copyright').textContent = data.copyright;
        })
        .catch(error => console.error('Error fetching JSON data:', error));
});
