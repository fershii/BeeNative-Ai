class Hero extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <section class="relative min-h-screen hero-bg text-white">

        <!-- Nav -->
        <nav-bar></nav-bar>
        <!--Hero-->
            <div class="max-w-6xl mx-auto px-6 py-16">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <!-- Contenido izquierdo -->
                <div>
                <h1 class="text-5xl md:text-6xl font-bold mb-4 leading-tight" style="color: #FAE45E;">
                    Identifica, aprende y protege las abejas nativas de Panamá.
                </h1>
                <p class="text-lg mb-8" style="color: #FAE45E;">
                    Identifica y convive las abejas nativas de Panamá con inteligencia artificial
                </p>
                <div class="flex gap-4">
                    <button class="bg-[#FAE45E] text-gray-800 px-8 py-3 rounded-lg font-bold hover:bg-yellow-500 transition">
                     <a href="/identificador.html">Identificar</a>
                    </button>
                    <button class="border-2 border-[#FAE45E] text-[#FAE45E] px-8 py-3 rounded-lg font-bold hover:bg-[#FAE45E] hover:text-gray-800 transition">
                     <a href="/especies.html">Conocer</a>
                    </button>
                </div>
                </div>
                
                <!-- Imagen derecha (placeholder mejorado) -->
                <div class="relative">
                <div class="bg-gradient-to-b from-green-800 to-green-900 rounded-lg h-96 flex items-center justify-center shadow-2xl">
                <img src="/img/Trigona ferricauda.jpg" alt="Foto de ejemplo" class="w-full h-full object-cover rounded-lg">
                        <!-- Botón de información -->
                        <div class="absolute top-2 right-2 group p-2 -m-2">
                            <button class="w-6 h-6 rounded-full bg-black/60 text-white text-xs font-bold">
                                i
                            </button>

                            <div class="absolute right-2 top-9 hidden group-hover:block bg-black text-white text-xs p-3 rounded-lg shadow-lg duration-200 w-64 z-50">
                                Foto de angelaledyardphotog, licenciada bajo CC-BY-NC 4.0.
                                <br>
                                Fuente:
                                <a
                                    href="https://www.inaturalist.org/photos/623440968"
                                    target="_blank"
                                    class="underline"
                                >
                                    Ver fuente
                                </a>
                            </div>
                        </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    `;
  }
}

customElements.define('hero-section', Hero);