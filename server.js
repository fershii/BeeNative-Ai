const express = require('express');
const path    = require('path');
const app     = express();
const PORT    = 3000;

const predictRouter = require('./src/routes/predict');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', predictRouter);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`✓ Servidor corriendo en http://localhost:${PORT}`);
});