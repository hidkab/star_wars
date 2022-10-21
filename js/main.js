
function showSrarWars() {
    let httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        let swapiContent = document.querySelector(".swapiContent");
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                let result = JSON.parse(httpRequest.responseText);
                for (let key in result) {
                        swapiContent.innerHTML += `
                            
                                <div class="mx-2 card border border-warning text-center bg-dark p-4 mb-5 rounded>
                                    <h5 class="card-title"><a href="${ result[key] }"target=_blank"> ${ key.toUpperCase() } </a</h5>
                                </div> `;  
                }
            }   
            else {
                swapiContent.innerHTML = `<div class="error-message">
                                            <p>Nous n'avons pas réussi à récupérer le contenu</p>
                                         </div>`;
            }
        } 
    };

    httpRequest.open('GET', 'https://swapi.dev/api/', true);
    httpRequest.send();
}
showSrarWars();
