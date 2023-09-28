document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "admin" && password === "admin") {
            // ici, vous redirigez l'utilisateur vers la page de tableau de bord ou autre.
            alert("Connecté avec succès !");
        } else {
            alert("Identifiant ou mot de passe incorrect.");
        }
    });
});
