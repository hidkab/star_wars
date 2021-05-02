// Function to create the cards
function makecol(){
    let col = document.createElement("div");
    col.classList.add("col-12 col-sm-6 col-lg-4 bg-dark  my-1");

}


function showTrarWars() {
    let httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        let swapiContent = document.getElementById("swapiContent");
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                let result = JSON.parse(httpRequest.responseText);
                
            }   
            else {
                swapiContent.innerText = "Nous n'avons pas réussi à récupérer le contenu";
            }
        } 
        else {
            swapiContent.innerText = "Requête en cours";
        }
    };

    httpRequest.open('GET', 'http https://swapi.dev/api/', true);
    httpRequest.send();
}