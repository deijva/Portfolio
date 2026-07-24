// 
emailjs.init("SDqXIiP2Vntn3eSdw");

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", function (e) {
    e.preventDefault(); // verhindert Neuladen der Seite

status.textContent = "Wird gesendet..";

emailjs.sendForm("service_bgsuxww", "template_81kv7ux", form)
    .then(() => {
        status.textContent ="Danke! Deine Nachricht wurde gesendet.";
        status.style.color= "green";
        form.reset();
    })
    .catch((error) => {
        status.textContent = "Etwas ging schief. Bitte versuche es nochmal!";
        status.style.color = "red";
        console.error("EmailJS Fehler:", error)
    });
});