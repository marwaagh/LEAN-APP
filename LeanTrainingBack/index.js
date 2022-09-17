const express = require('express');

const bodyParser = require('body-parser');

const authRoutes = require('./routes/auth');

const formationsRoutes = require('./routes/formations');

const contactRoutes = require('./routes/contact');

const devisRoutes = require('./routes/devis');

const errorController = require('./controllers/error');

const app = express();

const ports = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use((req, res, next) => {
res.setHeader('Access-Control-Allow-Origin', '* ' );
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization' );
next();
});

app.use('/auth', authRoutes);

app.use('/formation', formationsRoutes);

app.use('/devis', devisRoutes);

app.use('/contact', contactRoutes);

app.use(errorController.get404);

app.use(errorController.get500);

app.listen(ports, () => console.log(`Serveur en écoute en port ${ports}`))
