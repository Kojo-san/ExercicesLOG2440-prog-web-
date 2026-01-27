const teams = [
    "Habs",
    "Lightning",
    "Maple Leafs",
    "Golden Knights",
    "Penguins"];

//Première solution : Utilisation d'une IIFE
function loadTeams() {
    const listItems = document.getElementsByClassName("team");
    for (var i = 0; i < listItems.length; i++) {
        (function(newI){
            listItems[newI].addEventListener("click", (e) => {
                e.target.textContent = teams[newI];
        })
        })(i);
    }
    document.getElementById("team-loader").disabled = true;
}

//Deuxième solution : Utilisation de let
/*function loadTeams() {
    const listItems = document.getElementsByClassName("team");
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].addEventListener("click", (e) => {
            e.target.textContent = teams[i];
        });
    }
    document.getElementById("team-loader").disabled = true;
}
*/