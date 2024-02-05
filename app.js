const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Bienvenue sur votre application web accessible sur Internet !');
});

const port = 80;
app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
