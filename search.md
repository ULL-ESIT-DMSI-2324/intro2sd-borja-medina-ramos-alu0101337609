---
layout: default
permalink: /search/
title: Search
---
<head>
  <link rel="stylesheet" href="{{ site.baseurl}}/css/search.css">
</head>

{% capture initSearch %}

<h1>Búsqueda</h1>

<form id="search-form" action="">
  <label class="label" for="search">Buscar (Se aceptan expresiones regulares):</label>
  <br/>
  <input class="input" id="search" type="text" name="search" autofocus placeholder="ej: Outsourcing" autocomplete="off">
  
  <ul class="list  list--results" id="list">
  </ul>
</form>

<script type="text/javascript" src="{{site.baseurl}}/assets/src/search.js"></script>

<script type="text/javascript">

  const search = new JekyllSearch(
    '{{site.baseurl}}/assets/src/search.json',
    '#search',
    '#list',
    '{{site.baseurl}}'
  );
  search.start(); 
  
</script>

<noscript>Por favor activa Javascript para habilitar la función de busqueda.</noscript>

{% endcapture %}

{{ initSearch | lstrip }}