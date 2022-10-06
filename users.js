document.getElementById("generateBtn").addEventListener("click", getData);

function getData() {
  fetch("https://randomuser.me/api/?results=10")
    .then((res) => res.json())
    .then((data) => {
      let author = data.results;
      let output = "<h2><center>Get user Data</center></h2>";

      author.forEach(function (lists) {
        output += `
                <div class="container">
                    <div class="card mt-4 bg-light">
                        <ul class="list-group">
                            <li class="list-group-item"><h2>Nume: ${lists.name.first}</h2></li>
                            <li class="list-group-item"><img src="${lists.picture.large}"></li>
                            <li class="list-group-item"><h2>Numar telefon: ${lists.cell}</h2></li>
                            <li class="list-group-item">Zi nastere: ${lists.dob.date}</li>
                            <li class=list-group-item">Varsta: ${lists.dob.age}</li>
                            <li class=list-group-item">Email: ${lists.email}</li>
                            <li class=list-group-item">Sex: ${lists.gender}</li>
                            <li class=list-group-item">Oras: ${lists.location.city}</li>
                            <li class=list-group-item">Tara: ${lists.location.country}</li>
                            <li class=list-group-item">Cod postal: ${lists.location.postcode}</li>

                        </ul>
                    </div>
                </div> `;
      });
      //Aparitia datelor pe ecran.
      document.getElementById("output").innerHTML = output;
    });
}
