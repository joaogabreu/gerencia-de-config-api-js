import db from './database.js';
import app from './app.js';

const port = 3000;

try {
    await db.authenticate();
    console.log("Eba!");
} catch (error) {
    console.log("Não eba...");
}

app.listen(port, () => {
    console.log(`Rodando na porta ${port}.`);
});