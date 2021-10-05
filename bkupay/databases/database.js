const Pool = require("pg").Pool;

const pool = new Pool({
  user: "root",
  password: "Jesus6388",
  host: "localhost",
  port: 5432,
  database: "kupay"
});
pool.connect((error)=>{
  if (error) {
    console.error('El error de conexión es: ' + error);
    return;
  }
  console.log('¡Conectado a la Base de Datos!');
});




module.exports = pool;