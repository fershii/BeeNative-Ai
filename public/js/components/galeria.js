class Galeria extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `

<section id="abejas" class="section-bg text-[#FAE45E]  mt-10">
        <div class="text-center mb-16">
                <h2 class="text-5xl font-bold mb-4" >Descubre Nuestras Abejas Nativas</h2>
                <p class="text-xl text-[#FAE45E]">
                    Especies utilizadas para el entrenamiento <br> del modelo de identificacion de abejas sin aguijón
                </p>
         </div>
</section>

      <!-- Trigona Section -->
      <trigona-section></trigona-section>
      
      <!-- Tetragonisca Section -->
      <tetragonisca-section></tetragonisca-section>

      <!-- Tetragona Section -->
      <tetragona-section></tetragona-section>

      <!-- Scaptotrigona Section -->
      <scaptotrigona-section></scaptotrigona-section>

      <!-- Nannotrigona Section -->
      <nannotrigona-section></nannotrigona-section>

      <!-- Partamona Section -->
      <partamona-section></partamona-section>



</section>
    `;
  }
}

customElements.define('galeria-section', Galeria);