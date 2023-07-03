<!DOCTYPE html>
<html>
<head>
    <title>Job 08 - Exercice sommenombrespremiers</title>
    <script src="script5.js"></script>
</head>
<body>
    <script>
        // Exemple d'utilisation de la fonction sommenombrespremiers avec deux nombres
        var nombre1 = 7;
        var nombre2 = 11;
        var resultat = sommenombrespremiers(nombre1, nombre2);

        if (resultat !== false) {
            console.log("La somme des nombres premiers " + nombre1 + " et " + nombre2 + " est : " + resultat);
        } else {
            console.log("Au moins l'un des nombres n'est pas premier.");
        }
    </script>
</body>
</html>
