function bisextile(annee) {
    // Vérifier si l'année est divisible par 4
    if (annee % 4 === 0) {
        // Si l'année est divisible par 100, elle doit également être divisible par 400 pour être bissextile
        if (annee % 100 === 0) {
            return annee % 400 === 0;
        } else {
            return true;
        }
    }

    return false;
}
