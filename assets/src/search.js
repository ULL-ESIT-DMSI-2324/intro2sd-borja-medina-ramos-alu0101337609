class JekyllSearch {
  constructor(datos_origen, campo_busqueda, resultsList, siteURL) {
    this.datos_origen = datos_origen
    this.campo_busqueda = document.querySelector(campo_busqueda)
    this.lista = document.querySelector(resultsList)
    this.url = siteURL
    this.datos = []
  }

  async fetched() {
    return fetch(this.datos_origen, {mode: 'no-cors'})
      .then(blob => blob.json())
  }

  async findResults() {
    this.datos = await this.fetched();
    const regex = new RegExp(this.campo_busqueda.value, 'i');
    return this.datos.filter(item => {
      return item.title.match(regex) || item.content.match(regex);
    });
  }

  async showResults() {
    const resultados = await this.findResults();
    const html_form = resultados.map(item => {
      return `
        <li class="result">
            <article class="result__article  article">
                <h4>
                  <a href="${item.url}">${item.title}</a>
                </h4>
                <p>${item.excerpt}</p>
            </article>
        </li>`;
    }).join('');
    if ((resultados.length == 0) || (this.campo_busqueda.value == '')) {
      this.lista.innerHTML = '<div class="no-results"><p>No se ha encontrado nada</p></div>';
    } else {
      this.lista.innerHTML = html_form;
    }
  }

  start() {
    const url = new URL(document.location);
    if (this.campo_busqueda.value == url.searchParams.get("search")) {
      this.showResults();
    }
    this.campo_busqueda.addEventListener('keyup', () => {
      this.showResults();
      url.searchParams.set("search", this.campo_busqueda.value);
      window.history.pushState('', '', url.href);
    });
    this.campo_busqueda.addEventListener('keypress', event => {
      if (event.keyCode == 13) {
        event.preventDefault();
      }
    });
  }
}
