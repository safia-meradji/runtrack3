function jourtravaille(date) {
    var jour = date.getDate();
    var mois = date.getMonth() + 1; // Les mois commencent à partir de 0, donc on ajoute 1
    var annee = date.getFullYear();

    var joursFeries2020 = [
        "2020-01-01",
        "2020-04-13",
        "2020-05-01",
        "2020-05-08",
        "2020-05-21",
        "2020-06-01",
        "2020-07-14",
        "2020-08-15",
        "2020-11-01",
        "2020-11-11",
        "2020-12-25"
    ];

    var jourFerie = false;
    var weekEnd = false;

    // Vérifier si la date correspond à un jour férié de l'année 2020
    var dateStr = annee + "-" + ("0" + mois).slice(-2) + "-" + ("0" + jour).slice(-2);
    if (joursFeries2020.includes(dateStr)) {
        jourFerie = true;
    }

    // Vérifier si la date correspond à un samedi ou un dimanche
    var jourSemaine = date.getDay();
    if (jourSemaine === 0 || jourSemaine === 6) {
        weekEnd = true;
    }

    // Afficher le message approprié en fonction des résultats
    if (jourFerie) {
        console.log("Le " + jour + " " + mois + " " + annee + " est un jour férié");
    } else if (weekEnd) {
        console.log("Non, " + jour + " " + mois + " " + annee + " est un week-end");
    } else {
        console.log("Oui, " + jour + " " + mois + " " + annee + " est un jour travaillé");
    }
}
