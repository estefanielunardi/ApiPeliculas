const listaPeliculas =document.getElementById("listaPeliculas");

function moviesList() {
  let data = fetch("peliculas.json")
    .then(response => response.json())
    .then(data => { 
      console.log(data);
        
      let rows =[];

      for(let i = 0; i < 4; i++){
        let row = document.createElement("tr");
        row.innerHTML = "<td>" + data["results"][i]["id"] + "</td><td>" + data["results"][i]["nombre"] + "</td><td>" + data["results"][i]["Director"] + "</td><td>" + data["results"][i]["Clasificacion"] + "</td>";
        rows.push(row);
        listaPeliculas.appendChild(rows[i]);
      }
    })

}

moviesList();
