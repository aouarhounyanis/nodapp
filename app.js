const express = require('express');
const app = express();

// Lire le message depuis la variable d'environnement
const message = process.env.APP_MESSAGE || 'Hello Devops from Efi-Academy !!!';

app.get('/', (req, res) => {
  res.send(message);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
