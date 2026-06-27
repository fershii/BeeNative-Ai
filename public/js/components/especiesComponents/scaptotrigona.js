class Scaptotrigona extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <style>
      .info-field { transition: opacity 0.15s ease; }
      .card-item { transition: all 0.3s ease; }
      .card-item:hover { background-color: #f9f9f9; }
      .info-panel::-webkit-scrollbar { display: none; }
    </style>

  <p class="text-center text-[#FAE45E] text-5xl font-semibold justify-center mb-4">Género Scaptotrigona</p>

  <section class="bg-[#283B0A] flex items-center justify-center min-h-screen p-2">

    <!-- CONTENEDOR PRINCIPAL -->
    <div class="flex gap-6 w-full max-w-6xl h-[500px]">

      <!-- COLUMNA 1: PANEL DE INFORMACIÓN -->
      <div
        class="info-panel w-1/4 h-full bg-[#F5EAB9] border border-amber-300 rounded-lg p-6 flex flex-col justify-between shadow-sm overflow-y-auto"
        style="scrollbar-width: none; -ms-overflow-style: none;"
        onmouseenter="this.style.overflowY='auto'"
        onmouseleave="this.style.overflowY='hidden'"
        onwheel="this.scrollTop += event.deltaY; event.preventDefault();"
      >
        <div>
          <span class="text-xs font-bold uppercase tracking-wider text-green-700 block mb-2">Especie Seleccionada</span>

          <h2 id="info-titulo" class="info-field text-2xl font-bold text-gray-800 mb-3">
            Scaptotrigona pectoralis
          </h2>

          <p id="info-descripcion" class="info-field text-sm text-gray-700 leading-relaxed mb-3">
            Abeja de color oscuro, muy activa durante el forrajeo y adaptada a diversos ambientes tropicales.
          </p>

          <div class="mt-3 space-y-2">
            <div>
              <span class="text-xs font-bold text-green-700 uppercase">Tamaño</span>
              <p id="info-tamaño" class="info-field text-sm text-gray-700">5-7 mm.</p>
            </div>
            <div>
              <span class="text-xs font-bold text-green-700 uppercase">Distribución</span>
              <p id="info-distribucion" class="info-field text-sm text-gray-700">
              México, Belice, Guatemala, Honduras, Nicaragua, Costa Rica y Panamá.
              </p>
            </div>
            <div>
              <span class="text-xs font-bold text-green-700 uppercase">Importancia</span>
              <p id="info-importancia" class="info-field text-sm text-gray-700">
              Importante polinizadora de cultivos y plantas silvestres.
              </p>
            </div>
            <div>
              <span class="text-xs font-bold text-green-700 uppercase">Nivel de Manejo</span>
              <p id="info-nivelmanejo" class="info-field text-sm text-gray-700">
              Fácil a medio.
              </p>
            </div>
          </div>
        </div>
      </div>
      

      <!-- COLUMNA 2: PANEL PRINCIPAL (tarjeta grande) -->
      <div id="panel-principal" class="w-1/2 h-full flex items-center justify-center">

        <div
          id="card-A"
          onclick="abrirImagen(this); window.scaptotrigonaSeleccionar(this, event)"
          data-title="Scaptotrigona pectoralis"
          data-desc="Abeja de color oscuro, muy activa durante el forrajeo y adaptada a diversos ambientes tropicales."
          data-size="5-7 mm."
          data-distribution="México, Belice, Guatemala, Honduras, Nicaragua, Costa Rica y Panamá."
          data-importance="Importante polinizadora de cultivos y plantas silvestres."
          data-management="Fácil a medio."
          class="card-item w-full h-full bg-white border-2 border-amber-400 rounded-lg flex flex-col items-center justify-center text-3xl font-semibold text-gray-600 shadow-md cursor-pointer"
        >
          <img src="/img/Scaptotrigona pectoralis.jpg" alt="Scaptotrigona pectoralis" class="w-full h-full object-cover rounded-lg">
        </div>

      </div>

      <!-- COLUMNA 3: PANELES LATERALES -->
      <div id="columna-lateral" class="w-1/4 h-full flex flex-col gap-3">

        <!-- Tarjeta B -->
        <div
          id="card-B"
          onclick="window.scaptotrigonaSeleccionar(this, event)"
          data-title="-"
          data-desc="-"
          data-size="-"
          data-distribution="-"
          data-importance="-"
          data-management="-"
          class="card-item w-full h-1/3 bg-white border border-gray-300 rounded-lg flex flex-col items-center justify-center text-sm font-semibold text-gray-600 shadow-sm cursor-pointer"
        >
          
          <span class="uppercase">
          <img src="/img/abeja.png" alt="Icono de abeja" class="w-full h-full object-cover rounded-lg">
          </span>
          <span class="text-xs font-bold text-green-700 uppercase">Más especies pronto...</span>

        </div>

      </div>
    </div>

  </section>
    `;

    // Función scoped: busca elementos dentro del mismo custom element que disparó el evento
    if (!window.scaptotrigonaSeleccionar) {
      window.scaptotrigonaSeleccionar = function(tarjetaClickeada, event) {
        // Encontrar el componente raíz al que pertenece la tarjeta clickeada
        const root = tarjetaClickeada.closest('scaptotrigona-section');
        if (!root) return;

        const tarjetaGrande = root.querySelector('#panel-principal > div');
        if (!tarjetaGrande || tarjetaClickeada === tarjetaGrande) return;

        // Guardar datos de la tarjeta grande
        const datosGrande = {
          innerHTML: tarjetaGrande.innerHTML,
          title: tarjetaGrande.getAttribute('data-title'),
          desc: tarjetaGrande.getAttribute('data-desc'),
          size: tarjetaGrande.getAttribute('data-size'),
          distribution: tarjetaGrande.getAttribute('data-distribution'),
          importance: tarjetaGrande.getAttribute('data-importance'),
          management: tarjetaGrande.getAttribute('data-management'),
        };

        // Guardar datos de la tarjeta pequeña clickeada
        const datosPequena = {
          innerHTML: tarjetaClickeada.innerHTML,
          title: tarjetaClickeada.getAttribute('data-title'),
          desc: tarjetaClickeada.getAttribute('data-desc'),
          size: tarjetaClickeada.getAttribute('data-size'),
          distribution: tarjetaClickeada.getAttribute('data-distribution'),
          importance: tarjetaClickeada.getAttribute('data-importance'),
          management: tarjetaClickeada.getAttribute('data-management'),
        };

        // Intercambiar contenido visual
        tarjetaGrande.innerHTML = datosPequena.innerHTML;
        tarjetaClickeada.innerHTML = datosGrande.innerHTML;

        // Intercambiar atributos data en tarjeta grande
        tarjetaGrande.setAttribute('data-title', datosPequena.title);
        tarjetaGrande.setAttribute('data-desc', datosPequena.desc);
        tarjetaGrande.setAttribute('data-size', datosPequena.size);
        tarjetaGrande.setAttribute('data-distribution', datosPequena.distribution);
        tarjetaGrande.setAttribute('data-importance', datosPequena.importance);
        tarjetaGrande.setAttribute('data-management', datosPequena.management);

        // Intercambiar atributos data en tarjeta pequeña
        tarjetaClickeada.setAttribute('data-title', datosGrande.title);
        tarjetaClickeada.setAttribute('data-desc', datosGrande.desc);
        tarjetaClickeada.setAttribute('data-size', datosGrande.size);
        tarjetaClickeada.setAttribute('data-distribution', datosGrande.distribution);
        tarjetaClickeada.setAttribute('data-importance', datosGrande.importance);
        tarjetaClickeada.setAttribute('data-management', datosGrande.management);

        // Actualizar panel de información buscando dentro del mismo componente
        const campos = [
          { selector: '#info-titulo',       valor: datosPequena.title },
          { selector: '#info-descripcion',  valor: datosPequena.desc },
          { selector: '#info-tamaño',       valor: datosPequena.size },
          { selector: '#info-distribucion', valor: datosPequena.distribution },
          { selector: '#info-importancia',  valor: datosPequena.importance },
          { selector: '#info-nivelmanejo',  valor: datosPequena.management },
        ];

        // Fade out
        campos.forEach(({ selector }) => {
          const el = root.querySelector(selector);
          if (el) el.style.opacity = '0';
        });

        // Actualizar texto y fade in
        setTimeout(() => {
          campos.forEach(({ selector, valor }) => {
            const el = root.querySelector(selector);
            if (el) {
              el.textContent = valor;
              el.style.opacity = '1';
            }
          });
        }, 150);
      };
    }
  }
}

const visor = document.getElementById("visorImagen");
const imagenGrande = document.getElementById("imagenGrande");

let zoom = 1;

function abrirImagen(card){

    const img = card.querySelector("img");

    imagenGrande.src = img.src;
    imagenGrande.alt = img.alt;

    zoom = 1;
    imagenGrande.style.transform = `scale(${zoom})`;

    visor.classList.remove("hidden");
    visor.classList.add("flex");
}

function cerrarImagen(){

    visor.classList.remove("flex");
    visor.classList.add("hidden");

}

visor.addEventListener("click", function(e){

    if(e.target === visor){
        cerrarImagen();
    }

});

visor.addEventListener("wheel", function(e){

    e.preventDefault();

    zoom += e.deltaY < 0 ? 0.15 : -0.15;

    zoom = Math.max(1, Math.min(5, zoom));

    imagenGrande.style.transform = `scale(${zoom})`;

},{ passive:false });

customElements.define('scaptotrigona-section', Scaptotrigona);