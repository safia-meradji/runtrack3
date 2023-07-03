function tri(numbers, order) {
    function triAscendant(a, b) {
        return a - b;
    }

    function triDescendant(a, b) {
        return b - a;
    }

    if (order === "asc") {
        return numbers.sort(triAscendant);
    } else if (order === "desc") {
        return numbers.sort(triDescendant);
    } else {
        console.log("Le paramètre 'order' doit être soit 'asc' pour un tri croissant, soit 'desc' pour un tri décroissant.");
        return numbers;
    }
}
