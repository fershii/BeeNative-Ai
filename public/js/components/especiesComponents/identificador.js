const API_URL = '/api/predict';
let selectedFile = null;

function showState(name) {
  ['default','preview','loading','result','error'].forEach(s => {
    const el = document.getElementById('state-' + s);
    if (!el) return;
    el.classList.toggle('hidden', s !== name);
    el.classList.toggle('flex',   s === name);
  });
}

document.addEventListener('DOMContentLoaded', () => {

  document.getElementById('file-input').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (!file) return;
    selectedFile = file;
    const reader = new FileReader();
    reader.onload = ev => {
      document.getElementById('preview-img').src = ev.target.result;
      showState('preview');
    };
    reader.readAsDataURL(file);
  });

  document.getElementById('btn-classify').addEventListener('click', async () => {
    if (!selectedFile) return;
    showState('loading');
    try {
      const formData = new FormData();
      formData.append('image', selectedFile);

      const res  = await fetch(API_URL, { method: 'POST', body: formData });
      if (!res.ok) throw new Error(res.status);
      const data = await res.json();

      // Imagen analizada
      document.getElementById('result-img').src =
        document.getElementById('preview-img').src;

      // Nombre de la especie
      document.getElementById('result-species').textContent = data.prediction;

      // Confianza
      document.getElementById('result-confidence').textContent =
        `Nivel de confianza de la predicción: ${data.confidence}%`;

      // Top 3 predicciones (texto)
      const sorted = Object.entries(data.probabilities)
        .sort((a, b) => b[1] - a[1]);

      const top3 = sorted.slice(0, 3);
      document.getElementById('result-top3').innerHTML =
        top3.map(([name, prob]) =>
          `<li>${name} - ${prob.toFixed(1)}%</li>`
        ).join('');

      // Barras de todas las probabilidades
      const barsDiv = document.getElementById('prob-bars');
      barsDiv.innerHTML = '';
      sorted.forEach(([name, pct]) => {
        barsDiv.innerHTML += `
          <div class="mb-2">
            <div class="flex justify-between text-xs text-gray-700 mb-0.5">
              <span class="font-medium">${name}</span>
              <span>${pct.toFixed(1)}%</span>
            </div>
            <div class="w-full bg-black/10 rounded-full h-2">
              <div class="bg-[#3a6e10] h-2 rounded-full transition-all"
                   style="width:${pct}%"></div>
            </div>
          </div>`;
      });

      showState('result');

    } catch {
      document.getElementById('error-msg').textContent =
        'No se pudo conectar con el servidor. ¿Está corriendo Python?';
      showState('error');
    }
  });
});

function resetState() {
  selectedFile = null;
  document.getElementById('file-input').value = '';
  showState('default');
}