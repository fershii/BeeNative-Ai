class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `

        <footer class="bg-[#152003] text-[#fff091] py-12">
            <div class="max-w-6xl mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div>
                <h4 class="text-[#fff091] font-bold mb-4">Sobre Nosotros</h4>
                <p class="text-sm">Dedicados a la conservación y estudio de abejas nativas de Panamá.</p>
                </div>
                <div>
                <h4 class="text-[#fff091] font-bold mb-4">Enlaces Rápidos</h4>
                <ul class="text-sm space-y-2">
                    <li><a href="#" class="hover:text-[#fff091] transition">Inicio</a></li>
                    <li><a href="#" class="hover:text-[#fff091] transition">Identificador</a></li>
                    <li><a href="#" class="hover:text-[#fff091] transition">Especies</a></li>
                </ul>
                </div>
                <div>
                <h4 class="text-[#fff091] font-bold mb-4">Seguir</h4>
                <ul class="text-sm space-y-2">
                    <li><a href="#" class="hover:text-[#fff091] transition">Facebook</a></li>
                    <li><a href="#" class="hover:text-[#fff091] transition">Instagram</a></li>
                    <li><a href="#" class="hover:text-[#fff091] transition">Twitter</a></li>
                </ul>
                </div>
                <div>
                <h4 class="text-[#fff091] font-bold mb-4">Contacto</h4>
                <p class="text-sm">Email: info@BeeNativeAI.com</p>
                <p class="text-sm">Teléfono: +507 123-4567</p>
                </div>
            </div>
            <div class="border-t border-yellow-200 pt-8 text-center text-sm">
                <p>&copy; 2026 BeeNative Ai. Todos los derechos reservados.</p>
            </div>
            </div>
        </footer>
    `;
  }
}

customElements.define('footer-section', Footer);