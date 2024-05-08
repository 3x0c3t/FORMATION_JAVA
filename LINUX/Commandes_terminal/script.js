function showCommand() {
    var select = document.getElementById("commandSelector");
    var description = document.getElementById("commandDescription");
    var examples = document.getElementById("commandExamples");

    // Affiche la description et les exemples lorsque une commande est sélectionnée
    if (select.value !== "") {
        description.style.display = "block";
        examples.style.display = "block";
    } else {
        description.style.display = "none";
        examples.style.display = "none";
    }

    // Ajoutez les descriptions et exemples pour chaque commande ici
    switch (select.value) {
        case "ls":
            description.innerHTML = "<h2>Description</h2><p>Liste le contenu d'un répertoire.</p>";
            examples.innerHTML = "<h2>Exemples et déclinaisons</h2><p>Exemple :<br><br/> ls -l</p>";
            break;
        case "cd":
            description.innerHTML = "<h2>Description</h2><p>Change le répertoire courant.</p>";
            examples.innerHTML = "<h2>Exemples et déclinaisons</h2><p>Exemple :<br><br/> cd dossier</p>";
            break;
        case "pwd":
            description.innerHTML = "<h2>Description</h2><p>Affiche le chemin complet du répertoire courant.</p>";
            examples.innerHTML = "<h2>Exemples et déclinaisons</h2><p>Exemple :<br><br/> pwd</p>";
            break;
        case "mkdir":
            description.innerHTML = "<h2>Description</h2><p>Crée un nouveau répertoire.</p>";
            examples.innerHTML = "<h2>Exemples et déclinaisons</h2><p>Exemple :<br><br/> mkdir nouveau_dossier</p>";
            break;
        case "touch":
            description.innerHTML = "<h2>Description</h2><p>Crée un nouveau fichier vide.</p>";
            examples.innerHTML = "<h2>Exemples et déclinaisons</h2><p>Exemple :<br><br/> touch nouveau_fichier.txt</p>";
            break;
        case "rm":
            description.innerHTML = "<h2>Description</h2><p>Supprime des fichiers ou des répertoires.</p>";
            examples.innerHTML = "<h2>Exemples et déclinaisons</h2><p>Exemple :<br><br/> rm fichier.txt</p>";
            break;
        // Ajoutez d'autres cas pour chaque commande
        default:
            description.innerHTML = "<h2>Description</h2><p>Sélectionnez une commande pour voir sa description.</p>";
            examples.innerHTML = "<h2>Exemples et déclinaisons</h2><p>Sélectionnez une commande pour voir des exemples.</p>";
            break;
    }

    // Affiche le bouton Copier si une commande est sélectionnée
    if (select.value !== "") {
        examples.innerHTML += "<button onclick='copyCommand(\"" + select.value + "\")'>Copier</button>";
    }
}

function copyCommand(command) {
    navigator.clipboard.writeText(command);
    alert("La commande a été copiée : " + command);
}
