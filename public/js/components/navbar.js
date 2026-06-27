class NavBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <!-- Nav -->
        <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center"></div>

        <nav class="rounded-full max-w-6xl mx-auto px-8 bg-[#F5EAB9] shadow-sm">
            <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <div class="text-2xl font-bold text-green-700">BeeNative Ai</div>
            <div class="flex gap-6 items-center">
                <a href="/" class="text-gray-700 font-semibold hover:text-green-700 transition">Inicio</a>
                <a href="/identificador.html" class="text-gray-700 font-semibold hover:text-green-700 transition">Identificador</a>
                <a href="/especies.html" class="text-gray-700 font-semibold hover:text-green-700 transition">Especies</a>
            </div>
            </div>
        </nav>
    `;
  }
}

customElements.define('nav-bar', NavBar);