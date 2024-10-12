import { createConnection } from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

export const db = createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
})

db.then(() => {
    console.log('Connexion à la base de données réussie !');
  }).catch((error) => {
    console.error('Erreur de connexion à la base de données :', error.message);
  });

export default db;