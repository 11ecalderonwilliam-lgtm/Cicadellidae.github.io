fetch("data/tribus_generos.json")
  .then(res => res.json())
  .then(data => {
    const tbody = document.querySelector("#tabla-catalogo tbody");
    let contador = 1;

    for (const tribu in data.tribus) {
      data.tribus[tribu].forEach(genero => {
        const nombreArchivo = genero.toLowerCase();

        tbody.innerHTML += `
          <tr>
            <td>${contador}</td>
            <td>
              <a href="generos/${nombreArchivo}.html">
                <em>${genero}</em>
              </a>
            </td>
            <td>${tribu}</td>
            <td>—</td>
            <td>—</td>
            <td>
              <a href="img/${nombreArchivo}.jpg" target="_blank">
                Ver
              </a>
            </td>
          </tr>
        `;
        contador++;
      });
    }
  });

