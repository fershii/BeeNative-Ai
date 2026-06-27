const express = require('express');
const multer  = require('multer');
const fetch   = require('node-fetch');
const fs      = require('fs');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

const PYTHON_API = process.env.PYTHON_API || 'http://localhost:5000/predict';

router.post('/predict', upload.single('image'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No se recibió imagen.' });
  }
  try {
    const base64Img = fs.readFileSync(req.file.path).toString('base64');

    const response = await fetch(PYTHON_API, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ image: base64Img }),
    });

    const result = await response.json();
    res.json(result);

  } catch (err) {
    res.status(500).json({
      error: 'No se pudo conectar con el modelo. ¿Está corriendo Python?'
    });
  } finally {
    if (req.file?.path) fs.unlinkSync(req.file.path);
  }
});

module.exports = router;