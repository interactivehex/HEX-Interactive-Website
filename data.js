// FOOTER

const footerData = {
    email: "&nbsp; contact@hex.eg",
    phone: "&nbsp; +20 150 8565 466",
    instagram: "https://www.instagram.com/interactivehex/",
    twitter: "https://x.com/hex_interactive",
    tiktok: "https://www.tiktok.com/@hex_interactive",
    discord: "https://discord.gg/7m5BqJTNjs",
    copyright: "Copyright &copy; 2024 Marvin Mofeed | All Rights Reserved"
};

// Update the email
document.getElementById('footer-email').innerHTML = `<i class="fa-solid fa-envelope"></i> ${footerData.email}`;

// Update the phone
document.getElementById('footer-phone').innerHTML = `<i class="fa-solid fa-phone"></i> ${footerData.phone}`;

// Update the social media links
document.getElementById('instagram-link').href = footerData.instagram;
document.getElementById('twitter-link').href = footerData.twitter;
document.getElementById('tiktok-link').href = footerData.tiktok;
document.getElementById('discord-link').href = footerData.discord;

// Update the copyright information
document.getElementById('footer-copyright').innerHTML = footerData.copyright;
