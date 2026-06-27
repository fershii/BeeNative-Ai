class Abejas extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
  <!-- Sección Abejas Nativas -->
    <section id="abejas" class="section-bg text-[#FAE45E] py-20">
        <div class="max-w-6xl mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-5xl font-bold mb-4" >Descubre Nuestras Abejas Nativas</h2>
                <p class="text-xl text-[#FAE45E]">
                Abejas Nativas Urus: colección de nuestras especies favoritas
                </p>
            </div>

             <!-- Cards de especies -->
            <div id="especies" class="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                <!-- Card 1: Trigona fulviventris -->
                <div class="card-bee rounded-lg overflow-hidden shadow-lg">
                    <div class="h-96 bg-gradient-to-b from-[#FAE45E] to-[#FAE45E] flex items-center justify-center">
                        <div class="relative w-96 h-96">
                        <img src="/img/Trigona fulviventris.jpg" alt="Foto de ejemplo" class="w-full h-full object-cover rounded-lg">
                            <!-- Botón de información -->
                            <div class="absolute top-2 right-2 group p-2 -m-2">
                                <button class="w-6 h-6 rounded-full bg-black/60 text-white text-xs font-bold">
                                    i
                                </button>

                                <div class="absolute right-2 top-9 hidden group-hover:block bg-black text-white text-xs p-3 rounded-lg shadow-lg duration-300 w-64 z-50">
                                    Foto de Ben Zerante, licenciada bajo CC-BY-NC 4.0.
                                    <br>
                                    Fuente:
                                    <a
                                        href="https://www.inaturalist.org/photos/679466478"
                                        target="_blank"
                                        class="underline"
                                    >
                                    Ver fuente
                                    </a>
                                </div>
                            </div>
                    </div>
            </div>
            <div class="p-6 h-64 bg-gradient-to-b from-[#FAE45E] to-[#c9ae03]">
                <h3 class="text-xl font-bold text-gray-800 mb-3">Trigona Fulviventris</h3>
                <p class="text-gray-700 text-sm leading-relaxed">
                Abeja Boyera o Abeja Buche <br>
                Pequeña abeja sin aguijón nativa de América Central y del Sur. Mide aproximadamente 5-6 mm.
                </p>
            </div>
            </div>

            <!-- Card 2: Tetragonisca angustua -->
            <div class="card-bee rounded-lg overflow-hidden shadow-lg">
            <div class="h-96 bg-gradient-to-b from-[#FAE45E] to-[#FAE45E] flex items-center justify-center">
                <div class="relative w-96 h-96">
                <img src="/img/Tetragonisca angustula.jpg" alt="Foto de ejemplo" class="w-full h-full object-cover rounded-lg">
                    <!-- Botón de información -->
                    <div class="absolute top-2 right-2 group p-2 -m-2">
                        <button class="w-6 h-6 rounded-full bg-black/60 text-white text-xs font-bold">
                            i
                        </button>

                        <div class="absolute right-2 top-9 hidden group-hover:block bg-black text-white text-xs p-3 rounded-lg shadow-lg duration-300 w-64 z-50">
                            Foto de Renato Machado de Sobral, licenciada bajo CC-BY-NC 4.0.
                            <br>
                            Fuente: 
                            <a
                                href="https://www.inaturalist.org/photos/658730818"
                                target="_blank"
                                class="underline"
                            >
                                Ver fuente
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-6 h-64 bg-gradient-to-b from-[#FAE45E] to-[#c9ae03]">
                <h3 class="text-xl font-bold text-gray-800 mb-3">Tetragonisca Angustula</h3>
                <p class="text-gray-700 text-sm leading-relaxed">
                Abeja Angelita <br>
                Una de las abejas sin aguijón más pequeñas, midiendo solo 4-5 mm. De color oscuro con reflejos metálicos.
                </p>
            </div>
            </div>

            <!-- Card 3: Partamona bilineata -->
            <div class="card-bee rounded-lg bg-[#FAE45E] overflow-hidden shadow-lg">
            <div class="h-96 bg-gradient-to-b from-[#FAE45E] to-[#FAE45E] flex items-center justify-center">
                <div class="relative w-96 h-96">
                <img src="/img/Partamona bilineata.jpg" alt="Foto de ejemplo" class="w-full h-full object-cover rounded-lg">
                    <!-- Botón de información -->
                    <div class="absolute top-2 right-2 group p-2 -m-2">
                        <button class="w-6 h-6 rounded-full bg-black/60 text-white text-xs font-bold">
                            i
                        </button>

                        <div class="absolute right-2 top-9 hidden group-hover:block bg-black text-white text-xs p-3 rounded-lg shadow-lg duration-300 w-64 z-50">
                            Foto de Zoe Bird, licenciada bajo CC-BY-NC 4.0.
                            <br>
                            Fuente: 
                            <a
                                href="https://www.inaturalist.org/photos/200566913"
                                target="_blank"
                                class="underline"
                            >
                                Ver fuente
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-6 h-64 bg-gradient-to-b from-[#FAE45E] to-[#c9ae03]">
                <h3 class="text-xl font-bold text-gray-800 mb-3">Partamona Bilineata</h3>
                <p class="text-gray-700 text-sm leading-relaxed">
                Abeja Montaraz o Abeja Negra <br>
                Abeja sin aguijón de tamaño mediano (7-8 mm) con cuerpo completamente negro y brillante.
                </p>
            </div>
            </div>

        </div>

        <!-- CTA Button -->
        <div class="text-center mt-16">
            <button class="bg-[#FAE45E] text-gray-800 px-10 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition">
                <a href="/especies.html">Ver Abejas Nativas</a>
            </button>
        </div>
        </div>
  </section>
    `;
  }
}

customElements.define('abejas-section', Abejas);