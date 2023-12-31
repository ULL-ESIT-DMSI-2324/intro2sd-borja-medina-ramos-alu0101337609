# Introducción al Desarrollo de Sistemas
## Rúbrica
<body>

<a href="#despliegue-gh-pages">Despliegue en GH Pages<a/>

<a href="#resumen-cap1">Resumen de conceptos<a/>

<a href="#fichero-yml">Fichero YAML<a/>

<a href="#llamada-api">Datos desde la API<a/>

<a href="#Liquid">Usos de Liquid<a/>




<a name="despliegue-gh-pages"/>
<h2>Despliegue en GH Pages</h2>
<p>Ha continuación se procede a mostrar un poco sobre el sitio estático recreado con el generador Jekyll y desplegado gracias a GitHub Pages</p>
<img src="/img/sitio-web.png" alt="sitio web"/>

<a name="resumen-cap1"/>
<h2>Resumen del Capítulo 1</h2>
<p>Se muestra una imagen donde se puede observar uno de los apartados resumidos del tema introductorio de la asignatura</p>
<img src="/img/resumen-conceptos.png" alt="conceptos"/>

<h2> Página 404 personalizada </h2>
<p>Poseer una página 404 es una buena práctica para brindar una experiencia positiva a los visitantes de tu sitio web
pues consigue evitar la confusión, retener a los usuarios y facilitar el seguimiento de errores, lo que en última instancia contribuye a la eficacia, accesibilidad y usabilidad del sitio web.</p>
<img src="/img/pagina-404-personal.png" alt="404" />

<a name="fichero-yml"/>
<h2>Fichero YAML</h2>
<p>Se procede a mostrar una imagen del fichero .yml. Asimismo se acceden a los datos del mismo mediante Liquid para hacer
una breve descripción del alumno que ha realizado la práctica.</p>
<img src="/img/fichero-yml-md-liquid.png" alt="fichero yml" />

<a name="llamada-api"/>
<h2>Datos desde la API</h2>
<p>Se ha realiza una llamda a la API de Github para obtener los datos del repositorio en cuestión y darle formato JSON
mediante el comando jq.</p>
<img src="/img/datos_from_json.png" alt="fichero json" />

<a name="Liquid"/>
<h2>Usos de Liquid</h2>
<p> Durante la práctica se han utilizado en tres ocasiones el lenguaje de marcado *Liquid*. <br />
En la primera ocasión se acceden a los datos del fichero .yml como se ha mostrado en el apartado anterior. <br />
En la segunda ocasión al leer la collection creada en _perfil. En caso de añadirse más información en dicha collection
se añadirá automáticamente en la página correspondiente.
Y por ultimo, para tomar los datos desde el JSON obtenido desde la API de GitHUB.

<img src="/img/liquid.png" alt="usos-liquid" />

<img src="/img/liquid-repo.PNG" alt="repo liquid" />
</body>
