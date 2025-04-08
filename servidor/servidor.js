
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;


app.use(express.static(path.join(__dirname, '../express/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../express/dist/index.html'));
});


app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

