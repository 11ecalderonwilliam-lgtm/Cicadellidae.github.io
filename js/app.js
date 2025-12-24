fetch("data/especies.json")
  .then(res => res.json())
  .then(data => {
    const contenedor = document.getElementById("subfamilias");

    for (const tribu in data.tribus) {
      contenedor.innerHTML += `<h2>${tribu}</h2><ul></ul>`;
      const ul = contenedor.querySelector("ul:last-of-type");

      data.tribus[tribu].forEach(genero => {
        ul.innerHTML += `<li><em>${genero}</em></li>`;
      });
    }
  });

