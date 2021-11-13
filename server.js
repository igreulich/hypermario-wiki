import express from 'express';

import home from './controllers/home.js';
import games from './controllers/games/index.js';

const app = express();

app.set('view engine', 'ejs');

app.get('/games', games);
app.get('/', home);

app.listen(3000);
console.log('Server listening on port 3000');
