import express from 'express'
import path from 'path';
import 'dotenv/config'


const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static('./'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve('index.html'));
});
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});
