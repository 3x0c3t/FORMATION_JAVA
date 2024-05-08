function generateCommand() {
    var action = document.getElementById("action").value;
    var files = document.getElementById("files").value;
    var command = "";

    switch (action) {
        case "add":
            command = "git add " + files;
            setDescription("Ajoute les fichiers spécifiés à l'index pour le suivi");
            break;
        case "commit":
            command = "git commit -m \"Message de commit\"";
            setDescription("Enregistre les modifications de l'index dans le dépôt");
            break;
        case "push":
            command = "git push origin master";
            setDescription("Pousse les modifications locales vers la branche principale du dépôt distant");
            break;
        case "pull":
            command = "git pull origin master";
            setDescription("Tire les modifications de la branche principale du dépôt distant et les fusionne dans la branche locale");
            break;
        case "checkout":
            command = "git checkout -b ma-branche";
            setDescription("Crée une nouvelle branche et la passe en branche de travail");
            break;
        // Ajoutez d'autres actions ici
        default:
            command = "Sélectionnez une action";
            setDescription("Sélectionnez une action pour voir sa description");
            break;
    }

    document.getElementById("generatedCommand").innerText = command;
}

function copyCommand() {
    var command = document.getElementById("generatedCommand").innerText;
    navigator.clipboard.writeText(command);
    alert("La commande a été copiée : " + command);
}

function setDescription(description) {
    document.getElementById("commandDescription").innerHTML = "<p>Description de la commande:</p><p>" + description + "</p>";
}
